import React, { Fragment, useEffect, useState } from 'react'

type Props = {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  generate: () => void;
  close: () => void
};

type Placeholder = {
  uuid: string;
  questionName: string;
  sectionIndex: number;
  childIndex: number;
  textAreaIndex: number;
};

const QuestionaryComponent = (props: Props) => {
  const [placeholders, setPlaceholders] = useState<Placeholder[]>([])
  const [placeholderAnswer, setPlaceHolderAnswer] = useState<string[]>([])
  const [questionaries, setQuestionaries] = useState<any[]>([])
  const [generateFiles, setGenerateFiles] = useState(false)


  const { generate } = props;

  useEffect(() => {
    if(generateFiles) {
      generate()
    }
  }, [generateFiles, generate])
  

  useEffect(() => {
    setPlaceholders([]);
    setQuestionaries([]);
    props.state.forEach((section: any, sectionIndex: number) => {
      section.children.forEach((child: any, childIndex: number) => {
        child.textArea.forEach((textArea: any, textAreaIndex: number) => {
          if (textArea.type === "placeholder") {
            setPlaceholders((prev) => [
              ...prev,
              {
                uuid: textArea.uuid,
                questionName: textArea.questionName,
                sectionIndex,
                childIndex,
                textAreaIndex,
              },
            ]);
          } else if (textArea.type === "questionary") {
            setQuestionaries((prev:any[]) => {
              const newState = JSON.parse(JSON.stringify(prev));
              const answers: string[] = []
              textArea.questionInnerValueChildren.context.map((itemInner: any, itemInnerIndex: number) => {
                answers.push(itemInner.questionAnswer)
                
              })

              const placeholdersOfQuestionaries: any = []
            
              textArea.questionInnerValueChildren.context[0].answeredQuestionInner.map((item:any, index:number) => {
                item.textArea.map((childItem: any, childItemIndex: number) => {
                  if (childItem.type === "placeholder") {
                    placeholdersOfQuestionaries.push({
                      contextId: 0,
                      answeredQuestionInnerIndex: index,
                      answeredQuestionInnerIndexChildIndex: childItemIndex,
                      value: "",
                      questionName:childItem.questionName
                      })
                    }
                })
             })
              newState.push({
                uuid: textArea.uuid,
                questionName: textArea.questionName,
                answers,
                choosedAnswer: textArea.questionInnerValueChildren.context[0].questionAnswer,
                sectionIndex,
                childIndex,
                textAreaIndex,
                placeholdersOfQuestionaries
                
              })
              
              return newState;

            });

              

          }
        });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(() => {
    console.log(questionaries)
  },[questionaries])
  useEffect(() => {
      const s: React.SetStateAction<string[]> = []      
    placeholders.forEach(() => {
      s.push("")
         })
         setPlaceHolderAnswer(s)
  },[placeholders])

  

  const handleClickGenerate = () => {
    const updatedState = JSON.parse(JSON.stringify(props.state));
    questionaries.forEach((questionary, index) => {
      updatedState[questionary.sectionIndex].children[questionary.childIndex].textArea[questionary.textAreaIndex].questionInnerValueChildren.choosedAnswer = questionary.choosedAnswer
      questionary.placeholdersOfQuestionaries.map((placeholdersOfQuestionariesItem: any, placeholdersOfQuestionariesIndex: number) => {
        updatedState[questionary.sectionIndex].children[questionary.childIndex].textArea[questionary.textAreaIndex].questionInnerValueChildren.context[placeholdersOfQuestionariesItem.contextId].answeredQuestionInner[placeholdersOfQuestionariesItem.answeredQuestionInnerIndex].textArea[placeholdersOfQuestionariesItem.answeredQuestionInnerIndexChildIndex].value = placeholdersOfQuestionariesItem.value
      })
    })
    placeholders.forEach((placeholder, index) => {
      updatedState[placeholder.sectionIndex].children[
        placeholder.childIndex
      ].textArea[placeholder.textAreaIndex].value = placeholderAnswer[index];
    });

    props.setState(updatedState);
    setGenerateFiles(true)
  };


  return (
    <div className="w-full bg-white min-h-[600px] max-h-[600px] overflow-y-auto relative ">
      {placeholders.map((placeholders, index) => (
        <Fragment key={placeholders.uuid}>
          <div className="w-full min-h-[80px] p-5 border-b border-gray-300 flex justify-between items-center relative">
            <div className="flex gap-4 h-full justify-center items-center w-full ">
              <p className="font-bold w-1/2 text-sidebarChoose">
                {index + 1}) {placeholders.questionName}
              </p>
              <input className="w-1/2  h-[40px] border-2 px-2" onChange={(e) => {
                setPlaceHolderAnswer((prev: string[]) => {
                  const a = [...prev];
                  a[index] = e.target.value;
                  return a;
                });
              }}
               value={placeholderAnswer[index]} />
            </div>
            <div className="absolute text-sm text-gray-500 right-[50px] bottom-0">
              {" "}
              სექცია {placeholders.sectionIndex + 1} - პარაგრაფი{" "}
              {placeholders.childIndex + 1} - პარაგრაფის სექცია{" "}
              {placeholders.textAreaIndex + 1}
            </div>
          </div>
        </Fragment>
      ))}
      <div className='w-full h-auto ' >
        <div className='w-full h-[80px] flex justify-center items-center text-black '>
          {questionaries.length > 0 && (
          <h1 className='w-auto h-auto px-8 py-2 border-b-2 '>
            კითხვარი
          </h1>
          )}
        </div>
        {questionaries.map((questionary, index) => (
          <div key={questionary.uuid} className="w-full min-h-[80px] p-5 border-b border-gray-300 flex flex-col items-between justify-center relative">
            <div className="flex gap-4 h-full justify-between items-center w-full ">
              <div className="w-auto text-sidebarChoose font-bold">
                {index + 1}) {questionary.questionName}
              </div>
              <select className="w-[200px] border-2 py-2 h-auto text-black" value={questionary.choosedAnswer} onChange={(e) => {
                const selectedValue = e.target.value;
                console.log(selectedValue);
                setQuestionaries((prev: any[]) => {
                  const newState = JSON.parse(JSON.stringify(prev));
                  newState[index].choosedAnswer = selectedValue;
                  newState[index].placeholdersOfQuestionaries = []
                  props.state[questionary.sectionIndex].children[questionary.childIndex].textArea[questionary.textAreaIndex].questionInnerValueChildren.context.map((ItemOfMapContext: any, ItemOfMapContextIndex: number) => {
                    if (ItemOfMapContext.questionAnswer === selectedValue) {
                      ItemOfMapContext.answeredQuestionInner.map((answeredQuestionInnerItem: any, answeredQuestionInnerItemIndex: number) => {
                        answeredQuestionInnerItem.textArea.map((answeredQuestionInnerItemTextArea: any, answeredQuestionInnerItemTextAreaIndex: number) => {
                          if (answeredQuestionInnerItemTextArea.type === "placeholder") {
                            newState[index].placeholdersOfQuestionaries.push(
                              {
                                contextId: ItemOfMapContextIndex,
                      answeredQuestionInnerIndex: answeredQuestionInnerItemIndex,
                      answeredQuestionInnerIndexChildIndex: answeredQuestionInnerItemTextAreaIndex,
                      value: "",
                      questionName:answeredQuestionInnerItemTextArea.questionName
                              }
                            )
                          }
                        } )
                      })
                    }
                  })
                  console.log(newState)
                  return newState;
                });
              }} >
                {questionary.answers.map((item: any, itemIndex: number) => (<option key={itemIndex} value={item} className="w-full min-h-[80px]"> {item} 
                  
                </option>))}
              </select>
            </div>

              <Fragment>
              {questionary.placeholdersOfQuestionaries.map((item: any, itemIndex: number) => (
                  <div className='w-full min-h-[300px] flex justify-between items-center '>
                                        <p className='font-bold w-1/2 text-sidebarChoose'>{item.questionName}</p>
                                        <textarea onChange={(e) => {
                    setQuestionaries((prev:any[]) => {
                      const newState = JSON.parse(JSON.stringify(prev));
                      newState[index].placeholdersOfQuestionaries[itemIndex].value = e.target.value;
                      return newState;
                    })
                                        }} value={item.value} className='h-[250px] border-2 w-1/2 p-4' placeholder='შეიყვანეთ პასუხი...' />

                                        
                                      </div>
                ))}
                </Fragment>
            </div>
        ))}
      </div>
      <div className=" w-full h-[160px]   gap-4 flex justify-end  items-center">
        <button className="w-auto p-4 h-[80px] flex justify-center items-center rounded-lg bg-sidebarChoose text-white font-bold" onClick={() => props.close()}>
          გაუქმება
        </button>
        <button className="w-auto p-4 h-[80px] flex justify-center items-center rounded-lg bg-sidebarChoose text-white font-bold" onClick={() => handleClickGenerate()}>
          {" "}
          გენერირება
        </button>
      </div>
    </div>
  );
}

export default QuestionaryComponent