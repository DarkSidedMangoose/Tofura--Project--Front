import React, { Fragment, useState } from 'react';
import AddNew from '../../../../../../../../../../assets/images/generateWordFiles/add.png';
import Remove from '../../../../../../../../../../assets/images/generateWordFiles/minus-button.png';
import RenderFieldQuestionary from './RenderFieldQuestionary';
import { EditableSpan } from '../../EditableSpan';

type Question = {
  bool: boolean;
  first: number;
  second: number;
  third: number;
  questionName?: string;
};

type Props = {
  questionaryQuestion: Question;
  setQuestionaryQuestion: React.Dispatch<React.SetStateAction<any>>;
  setTemplateState: React.Dispatch<React.SetStateAction<any[]>>;
  HandleAddNewQuestionary: (
    o: number,
    childIndexs: number,
    setTemplateState: React.Dispatch<React.SetStateAction<any[]>>,
    questionaryQuestion: any,
    setQuestionaryQuestion: React.Dispatch<React.SetStateAction<any>>
  ) => void;
};

const Questionary = (props: Props) => {
  const [wholeState, setWholeState] = useState<any>(
    {
      questionIndex: 0,
      context: [
         {
      questionAnswer: '',
      answeredQuestionInner: [
        {
          name: 'dd',
          justify: 'left',
          textArea: [{
              uuid: null,
              questionName: null,
              questionInnerValueChildren: null,
              type: "text",
              value: "შეიყვანეთ ტექსტი...",
              className: {
                fontSize: 16,
                fontStyle: {
                  bold: true,
                  italic: false,
                  underLine: false
                },
                fontFamily: null,
                fontElement: null,
                justify: null,
                fontColor: null
              }
            }],
          index: 0,
          children: [
            [
          {
            name: "type",
            type: "select",
            option: ["text", "questionary", "placeholder", "table", "image"],
            value: { stringValue: "text" },
          },
          {
            name: "element tag",
            type: "select",
            option: ["h1", "h2", "p", "span"],
            value: { stringValue: "h1" },
          },
          {
            name: "font family",
            type: "select",
            option: ["Calibri", "Roboto", "Times New Roman"],
            value: { stringValue: "Calibri" },
          },
          {
            name: "font size",
            type: "input",
            value: { numberValue: 16 },
          },
          {
            name: "text style",
            type: "multiselect",
            option: ["bold", "italic", "underline"],
            value: {
              objectValue: { bold: true, italic: false, underline: false },
            },
          },
          {
            name: "alignment",
            type: "select",
            option: ["left", "center", "right", "justify"],
            value: { stringValue: "left" },
          },
          {
            name: "color",
            type: "color",
            value: { stringValue: "#000000" },
          },
        ],
          ]

        }
      ]
    },
    {
      questionAnswer: 'add',
      answeredQuestionInner: [
        {
          name: 'adda',
          justify: 'left',
          textArea: {

          },
          index: 0,
          children: [
            [
              {
                name: "",
                type: "text",
                option: [

                ],
                value: {
                  stringValue: "",
                  numberValue: null,
                  objectValue: null
                }
              }
            ]
          ]

        }
      ]
    }
      ]
      
   
  }
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setWholeState((prevState:any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.context[index].questionAnswer = value;
      return newState;
    });

  }
  const changeIndex = (index: number) => {
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.questionIndex = index;
      return newState;
    });
  }


  const handleChangeEditableSpan = (newText:any, textAreaIndex:number ) => {
    
                              const updatedState = wholeState;

                              if (newText.trim() === "") {
                                if (updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].index !== 0) {
                                 updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].index -= 1;
                                }

                               updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].children =
                                  updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].children.filter(
                                    (_: any, idx: number) => idx !== textAreaIndex
                                  );

                                updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].textArea =
                                  updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].textArea.filter(
                                    (_: any, idx: number) =>
                                      idx !== textAreaIndex
                                  );
                              } else {
                                 updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].textArea[
                                  textAreaIndex
                                ].value = newText;
    }


                              setWholeState((prev:any) => {
                                const updatedState = JSON.parse(JSON.stringify(prev));
                                if (newText.trim() === "") {
                                if (updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].index !== 0) {
                                 updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].index -= 1;
                                }

                               updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].children =
                                  updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].children.filter(
                                    (_: any, idx: number) => idx !== textAreaIndex
                                  );

                                updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].textArea =
                                  updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].textArea.filter(
                                    (_: any, idx: number) =>
                                      idx !== textAreaIndex
                                  );
                              } else {
                                 updatedState.context[wholeState.questionIndex].answeredQuestionInner[textAreaIndex].textArea[
                                  textAreaIndex
                                  ].value = newText;
                                }
                                return updatedState;
                              });
                            
  }
  const onClickEditableSpan = () => {

  }
  return (
    <div className="w-full flex  justify-center items-center h-full bg-loginBackground absolute z-[50]">
      <div className="w-[1200px] h-[800px] bg-white flex flex-col items-center shadow-boxShadow">
        <div className="w-full min-h-[70px] bg-[#d5d8df34] flex text-sidebarChoose font-bold justify-center items-center shadow-bottom">
          ქვე-კითხვარის კითხვა
        </div>
        <div className='min-w-[1200px] min-h-[730px] overflow-y-scroll'>
          <div className="min-h-[130px] w-full flex justify-center items-center">
            <input
              className="w-3/4 min-h-[70px] shadow-lg border-2"
              value={props.questionaryQuestion.questionName}
              onChange={(e) => {
                props.setQuestionaryQuestion((prev: any) => ({
                  ...prev,
                  questionName: e.target.value,
                }));
              }}
              placeholder="...მაგ: იყვნენ თუ არა აღჭურვილნი პერსონალი დამცავი ჩაფხუტებით?"
            />
          </div>

          <div className='w-full h-full flex flex-col p-2 gap-4 items-center '>
            <h1 className='text-sidebarChoose font-bold border-b-2 px-8 py-2 '>
            პასუხები
            </h1>
            <div className='w-full min-h-[130px] bg-loginBackground flex  '>
              <div className='min-w-[250px] h-full flex '>
                {wholeState.context.map((answer:any, index:any) => (
                  <Fragment key={index}>
                    <div className={`min-w-[200px] h-full flex flex-col items-center justify-center gap-2 border-b-2 ${wholeState.questionIndex === index && "border-sidebarChoose"} relative`}>
                    {
                      wholeState.questionIndex !== index && (

                        <div className='w-full absolute left-0 top-0 h-full bg-loginBackground flex cursor-pointer' onClick={() => changeIndex(index)}></div>
                      )
                      }
                          <label className='font-bold text-sidebarChoose '>პასუხი {index+1}</label>
                          <input className='w-3/4 h-1/3 text-sm px-2' placeholder='შეიყვანეთ პასუხი...' onChange={(e) => changeHandler(e,index)} value={answer.questionAnswer}/>
                        </div>
                        <div className='w-[50px] h-full flex flex-col justify-between py-2 items-center'>
                          <img className='w-[30px] h-[30px] cursor-pointer hover:opacity-90' src={Remove} />
                          <img className='w-[32px] h-[32px] cursor-pointer hover:opacity-90' src={AddNew} />
                      </div>
                  </Fragment>
                ))}
                
                </div>
              
            </div>
            <h1 className='text-sidebarChoose font-bold border-b-2 px-8 py-2'>
              არჩეული პასუხის შედეგი
            </h1>

              <div className="w-full bg-loginBackground min-h-[600px] h-auto flex flex-col items-center gap-4 py-2">
                  <div className='flex max-w-full w-full px-8 gap-10 min-h-[100px] h-auto items-center overflow-x-auto flex-col '>
                        {
                          wholeState.context[wholeState.questionIndex].answeredQuestionInner.map((item: any, idx: any) => (
                      <Fragment key={idx}>
                            <div className='w-full flex justify-center items-center text-sidebarChoose font-bold'>
                                {item.name}
                          </div>
                      <div className="min-w-[100px] w-auto h-[70px] flex  justify-center items-center gap-6 px-2">
                                {item.children[item.index].map((option: any, optionIdx: any) => (
                                    <Fragment key={optionIdx}>
                                    <RenderFieldQuestionary option={option}   />
                                    </Fragment>
                                ))}
                      </div>
                              <div className='w-full flex min-h-[100px] bg-white'>
                                {item.textArea.map((textAreaItem:any, textAreaIndex:any) => (
                                  <Fragment>

                                  <EditableSpan onChange={(newText) => handleChangeEditableSpan(newText, textAreaIndex)} value={textAreaItem.value}
                                  optionTextAreaType="text" templateState={wholeState} onClick={onClickEditableSpan} isChoosed={wholeState.context[wholeState.questionIndex].answeredQuestionInner[idx].index === textAreaIndex}  
                                  />
                                  </Fragment>
                                  
                                ))}
                              </div>
                        </Fragment>
                      
                    ))
                        }
                  
                  </div>
            </div>

          </div>

        </div>
      </div>

      <div className="w-[150px] h-[800px] flex flex-col justify-start items-center ">
        <div className='flex flex-col gap-2'>

        <button
          className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
          onClick={() => {
            props.setQuestionaryQuestion((prev: any) => ({
              ...prev,
              bool: false,
            }));
          }}
        >
          გაუქმება
        </button>

        <button
          className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
          onClick={() =>
            props.HandleAddNewQuestionary(
              -1,
              -1,
              props.setTemplateState,
              props.questionaryQuestion,
              props.setQuestionaryQuestion
            )
          }
        >
          დამატება
          </button>
        </div>
          
      </div>
    </div>
  );
};

export default Questionary;
