import React, { Children, Fragment, useEffect, useState } from 'react';

import AddNew from '../../../../../../../../../../assets/images/generateWordFiles/add.png';
import Remove from '../../../../../../../../../../assets/images/generateWordFiles/minus-button.png';

import Left from '../../../../../../../../../../assets/images/generateWordFiles/left-arrow.png';
import RenderFieldQuestionary from './RenderFieldQuestionary';
import { EditableSpan } from '../../EditableSpan';
import { ChildrenPlaceholderValue } from '../TemplateChoosedOptionValues';
import Placeholder from '../../Placeholder';
import { QuestionaryQuestionInterface } from '../TemplateChoosedOption';



type Props = {
  isNewOrChoosed: boolean;
  questionaryQuestion: QuestionaryQuestionInterface;
  templateState: any[];
  setQuestionaryQuestion: React.Dispatch<React.SetStateAction<any>>;
  setTemplateState: React.Dispatch<React.SetStateAction<any[]>>;
  HandleAddNewQuestionary: (
    setTemplateState: React.Dispatch<React.SetStateAction<any[]>>,
    questionaryQuestion: any,
    setQuestionaryQuestion: React.Dispatch<React.SetStateAction<any>>,
    QuestionName: string,
    stateWhole?: any,
  ) => void;
};

const Questionary = (props: Props) => {
  const [addNewParagraph, setAddNewParagraph] = useState<boolean>(false);
  const [addNewParagraphName, setAddNewParagraphName] = useState<string>('');
  const [handleAddNewPlaceholder, setHandleAddNewPlaceholder] = useState<any>({
    questionName: '',
    questionIndex: null,
    stInd: null,
    ndInd: null,
    bool: false,
  });
  
 
  const handleChangeTypeAsAPlaceholder = () => {
    setWholeState((prev: any) => {
      const newState = JSON.parse(JSON.stringify(prev));
      const qind = handleAddNewPlaceholder.questionIndex;
      const sind = handleAddNewPlaceholder.stInd;
      const nind = handleAddNewPlaceholder.ndInd;
      newState.context[qind].answeredQuestionInner[sind].children[nind] = ChildrenPlaceholderValue;
      newState.context[qind].answeredQuestionInner[sind].textArea[nind].type = 'placeholder';
      newState.context[qind].answeredQuestionInner[sind].textArea[nind].questionName = handleAddNewPlaceholder.questionName;
      return newState;
    })
    setHandleAddNewPlaceholder((prev: any) => {
      const state = {...prev}
      state.bool = false;
      state.questionName = '';
      return state;
    });
  }
  
  const [questionaryQuestionName, setQuestionaryQuestionName] = useState<string>(
    props.questionaryQuestion.isNew ? ""  : props.questionaryQuestion.isChoosed ?
    props.templateState[props.questionaryQuestion.first].children[props.questionaryQuestion.second].textArea[props.questionaryQuestion.third].questionName
    : '');

  const [wholeState, setWholeState] = useState<any>({
    questionIndex: 0,
    choosedAnswer:"",
    context: [
      {
        questionIdentifier: 0,
        questionAnswer:"კი",
        answeredQuestionInner: [
          {
            name: 'შესავალი',
            justify: 'left',
            index: 0,
            textArea: [
              {
                uuid: null,
                questionName: null,
                questionInnerValueChildren: null,
                type: 'text',
                value: 'შეიყვანეთ ტექსტი...',
                className: {
                  fontSize: 16,
                  fontStyle: {
                    bold: false,
                    italic: false,
                    underline: false,
                  },
                  fontFamily: "Calibri",
                  fontElement: null,
                  fontColor: "#000000",


                },
              },
             
            ],
            children: [
              [
                {
                  name: 'type',
                  type: 'select',
                  option: [
                    'text',
                    'questionary',
                    'placeholder',
                    'table',
                    'image',
                  ],
                  value: { stringValue: 'text' },
                },
                {
                  name: 'element tag',
                  type: 'select',
                  option: ['h1', 'h2', 'p', 'span'],
                  value: { stringValue: 'h2' },
                },
                {
                  name: 'font family',
                  type: 'select',
                  option: ['Calibri', 'Roboto', 'Times New Roman'],
                  value: { stringValue: 'Calibri' },
                },
                {
                  name: 'font size',
                  type: 'input',
                  value: { numberValue: 16 },
                },
                {
                  name: 'text style',
                  type: 'multiselect',
                  option: ['bold', 'italic', 'underline'],
                  value: {
                    objectValue: {
                      bold: false,
                      italic: false,
                      underline: false,
                    },
                  },
                },
                {
                  name: 'alignment',
                  type: 'select',
                  option: ['left', 'center', 'right', 'justify'],
                  value: { stringValue: 'left' },
                },
                {
                  name: 'color',
                  type: 'color',
                  value: { stringValue: '#000000' },
                },
              ],
            ],
          },
        ],
      },
      {
        questionAnswer: 'არა',
        questionIdentifier: 0,
        answeredQuestionInner: [
          {
            name: 'პირველი აბზაცი',
            justify: 'left',
            index: 0,
            textArea: [
              {
                uuid: null,
                questionName: null,
                questionInnerValueChildren: null,
                type: 'text',
                value: 'შეიყვანეთ ტექსტი...',
                className: {
                  fontSize: 16,
                  fontStyle: {
                    bold: false,
                    italic: false,
                    underLine: false,
                  },
                  fontFamily: "Calibri",
                  fontElement: null,
                  fontColor: "#002300",
                },
              },
            ],
            children: [
              [
                {
                  name: 'type',
                  type: 'select',
                  option: [
                    'text',
                    'questionary',
                    'placeholder',
                    'table',
                    'image',
                  ],
                  value: { stringValue: 'text' },
                },
                {
                  name: 'element tag',
                  type: 'select',
                  option: ['h1', 'h2', 'p', 'span'],
                  value: { stringValue: 'h1' },
                },
                {
                  name: 'font family',
                  type: 'select',
                  option: ['Calibri', 'Roboto', 'Times New Roman'],
                  value: { stringValue: 'Calibri' },
                },
                {
                  name: 'font size',
                  type: 'input',
                  value: { numberValue: 16 },
                },
                {
                  name: 'text style',
                  type: 'multiselect',
                  option: ['bold', 'italic', 'underline'],
                  value: {
                    objectValue: {
                      bold: false,
                      italic: false,
                      underline: false,
                    },
                  },
                },
                {
                  name: 'alignment',
                  type: 'select',
                  option: ['left', 'center', 'right', 'justify'],
                  value: { stringValue: 'left' },
                },
                {
                  name: 'color',
                  type: 'color',
                  value: { stringValue: '#000000' },
                },
              ],
               
            ],
          },
        ],
      },
    ],
  });


  useEffect(() => {
    if (props.questionaryQuestion.isChoosed) {
      setWholeState(props.templateState[props.questionaryQuestion.first].children[props.questionaryQuestion.second].textArea[props.questionaryQuestion.third].questionInnerValueChildren);
      // }
    }
  },[props.questionaryQuestion]);

  const handleRemoveNewAnswer = () => {
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const index = newState.questionIndex;
      newState.context.splice(index, 1);
      if (newState.questionIndex > 0) {
        newState.questionIndex -= 1;
      } else {
        newState.questionIndex = 0;
      }
      return newState;
    });
  }

  const handleAddNewAnswerInner = () => {
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const index = newState.questionIndex;
      newState.context.splice(index + 1, 0,
        {
          questionAnswer: 'შეიყვანეთ კითხვა',
          questionIdentifier: 0,
          answeredQuestionInner: [
            {
              name: 'შესავალი',
              justify: 'left',
              index: 0,
              textArea: [
                {
                  uuid: null,
                  questionName: null,
                  questionInnerValueChildren: null,
                  type: 'text',
                  value: 'შეიყვანეთ ტექსტი...',
                  className: {
                    fontSize: 16,
                    fontStyle: {
                      bold: false,
                      italic: false,
                      underLine: false,
                    },
                    fontFamily: "Calibri",
                    fontElement: null,
                    fontColor: "#000000",
                  },
                },
              ],
              children: [
                [
                  {
                    name: 'type',
                    type: 'select',
                    option: [
                      'text',
                      'questionary',
                      'placeholder',
                      'table',
                      'image',
                    ],
                    value: { stringValue: 'text' },
                  },
                  {
                    name: 'element tag',
                    type: 'select',
                    option: ['h1', 'h2', 'p', 'span'],
                    value: { stringValue: 'h1' },
                  },
                  {
                    name: 'font family',
                    type: 'select',
                    option: ['Calibri', 'Roboto', 'Times New Roman'],
                    value: { stringValue: 'Calibri' },
                  },
                  {
                    name: 'font size',
                    type: 'input',
                    value: { numberValue: 16 },
                  },
                  {
                    name: 'text style',
                    type: 'multiselect',
                    option: ['bold', 'italic', 'underline'],
                    value: {
                      objectValue: {
                        bold: false,
                        italic: false,
                        underline: false,
                      },
                    },
                  },
                  {
                    name: 'alignment',
                    type: 'select',
                    option: ['left', 'center', 'right', 'justify'],
                    value: { stringValue: 'left' },
                  },
                  {
                    name: 'color',
                    type: 'color',
                    value: { stringValue: '#000000' },
                  },
                ],
                [
                  {
                    name: 'type',
                    type: 'select',
                    option: [
                      'text',
                      'questionary',
                      'placeholder',
                      'table',
                      'image',
                    ],
                    value: { stringValue: 'text' },
                  },
                  {
                    name: 'element tag',
                    type: 'select',
                    option: ['h1', 'h2', 'p', 'span'],
                    value: { stringValue: 'h1' },
                  },
                  {
                    name: 'font family',
                    type: 'select',
                    option: ['Calibri', 'Roboto', 'Times New Roman'],
                    value: { stringValue: 'Calibri' },
                  },
                  {
                    name: 'font size',
                    type: 'input',
                    value: { numberValue: 16 },
                  },
                  {
                    name: 'text style',
                    type: 'multiselect',
                    option: ['bold', 'italic', 'underline'],
                    value: {
                      objectValue: {
                        bold: false,
                        italic: false,
                        underline: false,
                      },
                    },
                  },
                  {
                    name: 'alignment',
                    type: 'select',
                    option: ['left', 'center', 'right', 'justify'],
                    value: { stringValue: 'left' },
                  },
                  {
                    name: 'color',
                    type: 'color',
                    value: { stringValue: '#000000' },
                  },
                ],
              ],
            },
          ],
        },
      );
      return newState;
    });
  };
  useEffect(() => {
  console.log(wholeState)
},[wholeState]);
  const handleChangeSpanIndex = (identifier: boolean, answeredQuestioninnerIndex: number) => {
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const index = newState.context[newState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].index;
      if (!identifier) {
        newState.context[newState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].index -= 1;
        const textArea = newState.context[newState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].textArea;
        const children = newState.context[newState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].children;
        [textArea[index - 1], textArea[index]] = [textArea[index], textArea[index - 1]];
        [children[index - 1], children[index]] = [children[index], children[index - 1]];
      } else {
        newState.context[newState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].index += 1;
        const textArea = newState.context[newState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].textArea;
        const children = newState.context[newState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].children;
        [textArea[index], textArea[index +1]] = [textArea[index + 1], textArea[index]];
        [children[index], children[index +1 ]] = [children[index +1], children[index ]];
      }
      return newState;
    });

  };

  const addNewParagraphInCurrentPosition = () => {
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const index = newState.context[newState.questionIndex].questionIdentifier;
      newState.context[newState.questionIndex].answeredQuestionInner.splice(index + 1, 0,
         {
            name: addNewParagraphName,
            justify: 'left',
            index: 0,
            textArea: [
              {
                uuid: null,
                questionName: null,
                questionInnerValueChildren: null,
                type: 'text',
                value: 'შეიყვანეთ ტექსტი...',
                className: {
                  fontSize: 16,
                  fontStyle: {
                    bold: false,
                    italic: false,
                    underline: false,
                  },
                  fontFamily: "Calibri",
                  fontElement: null,
                  fontColor: "#000000",


                },
              },
             
            ],
            children: [
              [
                {
                  name: 'type',
                  type: 'select',
                  option: [
                    'text',
                    'questionary',
                    'placeholder',
                    'table',
                    'image',
                  ],
                  value: { stringValue: 'text' },
                },
                {
                  name: 'element tag',
                  type: 'select',
                  option: ['h1', 'h2', 'p', 'span'],
                  value: { stringValue: 'h2' },
                },
                {
                  name: 'font family',
                  type: 'select',
                  option: ['Calibri', 'Roboto', 'Times New Roman'],
                  value: { stringValue: 'Calibri' },
                },
                {
                  name: 'font size',
                  type: 'input',
                  value: { numberValue: 16 },
                },
                {
                  name: 'text style',
                  type: 'multiselect',
                  option: ['bold', 'italic', 'underline'],
                  value: {
                    objectValue: {
                      bold: false,
                      italic: false,
                      underline: false,
                    },
                  },
                },
                {
                  name: 'alignment',
                  type: 'select',
                  option: ['left', 'center', 'right', 'justify'],
                  value: { stringValue: 'left' },
                },
                {
                  name: 'color',
                  type: 'color',
                  value: { stringValue: '#000000' },
                },
              ],
            ],
          },
      );
      
      newState.context[newState.questionIndex].questionIdentifier = index + 1;
      return newState;
    });
    setAddNewParagraph(false);
    setAddNewParagraphName('');
  }


 

  const handleAddNewSpanInTextArea = (idx: number) => {
    
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const index = newState.context[newState.questionIndex].answeredQuestionInner[idx].index;
      newState.context[newState.questionIndex].answeredQuestionInner[idx].textArea.splice(index +1, 0,
        {
                uuid: null,
                questionName: null,
                questionInnerValueChildren: null,
                type: 'text',
                value: 'შეიყვანეთ ტექსტი...',
                className: {
                  fontSize: 16,
                  fontStyle: {
                    bold: false,
                    italic: false,
                    underline: false,
                  },
                  fontFamily: "Calibri",
                  fontElement: null,
                  fontColor: "#000000",
                },
        },
      );
      newState.context[newState.questionIndex].answeredQuestionInner[idx].children.splice( index +1, 0,
        [
              {
                name: 'type',
                type: 'select',
                option: [
                  'text',
                  'questionary',
                  'placeholder',
                  'table',
                  'image',
                ],
                value: { stringValue: 'text' },
              },
              {
                name: 'element tag',
                type: 'select',
                option: ['h1', 'h2', 'p', 'span'],
                value: { stringValue: 'h1' },
              },
              {
                name: 'font family',
                type: 'select',
                option: ['Calibri', 'Roboto', 'Times New Roman'],
                value: { stringValue: 'Calibri' },
              },
              {
                name: 'font size',
                type: 'input',
                value: { numberValue: 16 },
              },
              {
                name: 'text style',
                type: 'multiselect',
                option: ['bold', 'italic', 'underline'],
                value: {
                  objectValue: {
                    bold: false,
                    italic: false,
                    underline: false,
                  },
                },
              },
              {
                name: 'alignment',
                type: 'select',
                option: ['left', 'center', 'right', 'justify'],
                value: { stringValue: 'left' },
              },
              {
                name: 'color',
                type: 'color',
                value: { stringValue: '#000000' },
              },
        ],
      )
      return newState;
    });
  }

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.context[index].questionAnswer = value;
      return newState;
    });
  };

  const changeIndex = (index: number) => {
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.questionIndex = index;
      return newState;
    });
  };

  const handleChangeEditableSpan = (newText: any,idx:number, textAreaIndex: number) => {
    const updatedState = JSON.parse(JSON.stringify(wholeState));
    if (newText.trim() === '') {
      if (
        updatedState.context[wholeState.questionIndex]
          .answeredQuestionInner[idx].index !== 0
      ) {
        updatedState.context[wholeState.questionIndex]
          .answeredQuestionInner[idx].index -= 1;
      
      } else {
        updatedState.context[wholeState.questionIndex]
          .answeredQuestionInner[idx].index = 0;
      }
      if (updatedState.context[wholeState.questionIndex].answeredQuestionInner[idx].children.length > 1)
      {

        updatedState.context[wholeState.questionIndex]
        .answeredQuestionInner[idx].children =
          updatedState.context[wholeState.questionIndex]
          .answeredQuestionInner[idx].children.filter(
              (_: any, idxSub: number) => idxSub !== textAreaIndex
            );

        updatedState.context[wholeState.questionIndex]
          .answeredQuestionInner[idx].textArea =
          updatedState.context[wholeState.questionIndex]
            .answeredQuestionInner[idx].textArea.filter(
              (_: any, idxSub: number) => idxSub !== textAreaIndex
            );
      } else {
        updatedState.context[wholeState.questionIndex].answeredQuestionInner.splice(idx,1)
          }
      
} else {
      updatedState.context[wholeState.questionIndex]
        .answeredQuestionInner[idx].textArea[textAreaIndex].value =
        newText;
       
    }
    setWholeState(updatedState);
  };
  const handleClickInnerChoosedText = (index: number) => {
    setAddNewParagraph(false);
    setWholeState((prevState: any) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.context[newState.questionIndex].questionIdentifier = index;
      return newState;
    });
  }

  const onClickEditableSpan = (answeredQuestioninnerIndex:number, index: number) => {
    const updatedState = JSON.parse(JSON.stringify(wholeState));
    updatedState.context[wholeState.questionIndex].answeredQuestionInner[answeredQuestioninnerIndex].index = index
    setWholeState(updatedState);
    
    
  };
  return (
    <div className="w-full flex  justify-center items-center h-full bg-loginBackground absolute z-[50]">
      <div className="w-[1200px] h-[800px] bg-white flex flex-col items-center shadow-boxShadow relative">
        {handleAddNewPlaceholder.bool && (
          <Fragment>

          <div className='absolute z-50 w-full h-full bg-loginBackground justify-center flex-col items-center flex'>
            <div className='w-[700px] h-[200px]  bg-white flex  items-center flex-col  '>
              <div className="w-full h-[70px] bg-[#e9ecf334] flex text-sidebarChoose font-bold  justify-center items-center shadow-bottom">
                  კითხვა
              </div>
              <div className='h-[130px]  w-full flex justify-center items-center'>

              <input placeholder='მაგ: შეიყვანეთ კონკრეტიკა...' value={handleAddNewPlaceholder.questionName} className='w-[80%] h-[50px] border-2 px-2 ' onChange={(e) => setHandleAddNewPlaceholder({...handleAddNewPlaceholder, questionName: e.target.value})  } />
              </div>
              </div>
            <div>
               <div className="w-[700px] h-[100px] flex  justify-end items-center gap-2">
                  <button
                    onClick={() => setHandleAddNewPlaceholder((prev: any) => {
                      const state = {...prev}
                      state.bool = false;
                      state.questionName = '';
                      return state;
                    })}
                  className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
                  
                >
                  {" "}
                  გაუქმება{" "}
                </button>
                  <button
                    onClick={() => handleChangeTypeAsAPlaceholder()}
                  className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
                  
                >
                  {" "}
                  დამატება{" "}
                </button>
              </div>
              </div>
              
          </div>
            
          </Fragment>
        )}
        <div className="w-full min-h-[70px] bg-[#d5d8df34] flex text-sidebarChoose font-bold justify-center items-center shadow-bottom">
          ქვე-კითხვარის კითხვა
        </div>
        <div className='min-w-[1200px] min-h-[730px] overflow-y-scroll'>
          <div className="min-h-[130px] w-full flex justify-center items-center">
            <input
              className="w-3/4 min-h-[70px] shadow-lg border-2"
              value={questionaryQuestionName}
              onChange={(e) => {
                setQuestionaryQuestionName(e.target.value);
              
              }}
              placeholder="...მაგ: იყვნენ თუ არა აღჭურვილნი პერსონალი დამცავი ჩაფხუტებით?"
            />
          </div>

          <div className='w-full h-full flex flex-col p-2 gap-4 items-center '>
            <h1 className='text-sidebarChoose font-bold border-b-2 px-8 py-2 '>
            პასუხები
            </h1>
            <div className='w-full min-h-[150px] bg-loginBackground flex  justify-center items-center '>
              <div className='min-w-[250px] h-full flex max-w-[1150px] overflow-x-auto gap-4 '>
                {wholeState.context.map((answer:any, index:any) => (
                  <Fragment key={index}>
                    <div className={`min-w-[200px] h-full flex flex-col items-center justify-center gap-2 border-b-2 ${wholeState.questionIndex === index && "border-sidebarChoose"} relative`}>
                    {
                      wholeState.questionIndex !== index && (

                        <div className='w-full absolute left-0 top-0 h-full bg-loginBackground opacity-80 flex cursor-pointer' onClick={() => changeIndex(index)}></div>
                      )
                      }
                          <label className='font-bold text-sidebarChoose '>პასუხი {index+1}</label>
                          <input className='w-3/4 h-1/3 text-sm px-2' placeholder='შეიყვანეთ პასუხი...' onChange={(e) => changeHandler(e,index)} value={answer.questionAnswer}/>
                    </div>
                    {wholeState.questionIndex === index && ( 

                        <div className='min-w-[50px] h-full flex flex-col justify-evenly py-2 items-center'>
                          <img onClick={() => handleRemoveNewAnswer()} className='w-[30px] h-[30px] cursor-pointer hover:opacity-90' src={Remove} />
                          <img onClick={() => handleAddNewAnswerInner()} className='w-[32px] h-[32px] cursor-pointer hover:opacity-90' src={AddNew} />
                      </div>
                    )}
                  </Fragment>
                ))}
                
                </div>
              
            </div>
            <h1 className='text-sidebarChoose font-bold border-b-2 px-8 py-2'>
              არჩეული პასუხის შედეგი
            </h1>

              <div className="w-full bg-loginBackground  h-auto  flex flex-col items-center gap-4 py-2">
                  <div className='flex max-w-full w-full px-8  min-h-[100px]   items-center overflow-x-auto flex-col '>
                        {
                          wholeState.context[wholeState.questionIndex].answeredQuestionInner.map((item: any, idx: any) => (
                      <div className={`h-auto w-full ${wholeState.context[wholeState.questionIndex].questionIdentifier !== idx ? "cursor-pointer" : ""}`} onClick={() => handleClickInnerChoosedText(idx)} key={idx}>
                              <div
                                style={{
                                  fontStyle: wholeState.context[wholeState.questionIndex].questionIdentifier !== idx ? "italic" : "normal",
                                  textDecorationLine: wholeState.context[wholeState.questionIndex].questionIdentifier !== idx ? "underline" : "none"
                                }}
                                className={`w-full min-h-[100px] transition-all duration-300 flex ${wholeState.context[wholeState.questionIndex].questionIdentifier === idx ? "justify-center items-center text-sidebarChoose font-extrabold text-lg" : "justify-end text-gray-300 opacity-80 items-center  font-extrabold text-lg"}  `}>
                                {item.name}
                              </div>
                              {wholeState.context[wholeState.questionIndex].questionIdentifier === idx && (
                                <div className="min-w-[100px] w-auto h-[100px] flex justify-center items-center gap-6 px-2">

                                    {item.children[item.index].map((option: any, optionIdx: any) => (
                                      <Fragment key={optionIdx}>
                                        <RenderFieldQuestionary option={option} item={item} setWholeState={setWholeState} wholeState={wholeState} stInd={idx} ndInd={item.index} setHandleAddNewPlaceholder={setHandleAddNewPlaceholder}  />
                                        </Fragment>
                                    ))}
                                </div>
                              )}
                          
                              <div className={`flex items-center  \text-sm p-2 bg-white border resize-none   min-h-[60px] ${item.type === "text" && "h-[60px]"}
                                 ${item.justify === "left"
                    ? "justify-start "
                    : item.justify === "center"
                    ? "justify-center"
                    : item.justify === "right"
                    ? "justify-end"
                    : "justify-normal"}
                                `}>

                              <div
                                  className={` w-auto flex flex-nowrap items-center overflow-x-auto 
                                   ${item.justify === "left"
                    ? "max-w-[1000px]  "
                    : item.justify === "center"
                    ? "max-w-[1000px]"
                    : item.justify === "right"
                    ? "max-w-[1000px]"
                    : "max-w-[1100px]"}
                                `}>
                                
                                  {item.textArea.map((textAreaItem:any, textAreaIndex:any) => (
                                    <Fragment>
                                      {textAreaItem.type === 'text' ? (
                                        <EditableSpan onChange={(newText) => handleChangeEditableSpan(newText, idx, textAreaIndex)} value={textAreaItem.value} spanKey={textAreaIndex}
                                        optionTextAreaType="text" templateState={wholeState} onClick={() => onClickEditableSpan(idx, textAreaIndex)} isChoosed={item.index === textAreaIndex} isIndex={wholeState.context[wholeState.questionIndex].questionIdentifier === idx} classNameValues={textAreaItem.className} 
                                        />
                                        
                                      ) : textAreaItem.type === 'placeholder' && (
                                        <Placeholder
                                            isChoosed={item.index === textAreaIndex}
                                            onClick={() => onClickEditableSpan(idx, textAreaIndex)}
                                            classNameValues={textAreaItem.className}
                          />      
                                      )}
                                    </Fragment>
                                    
                                  ))}
                              </div>
                                </div>
                              {
                                wholeState.context[wholeState.questionIndex].questionIdentifier === idx && (
                                  <div className='w-full h-[80px] flex justify-between items-center'>
                                    <button onClick={() => {handleAddNewSpanInTextArea(idx)}} className='h-[50px] w-auto bg-white rounded-lg text-sidebarChoose px-6 font-bold shadow-bottom-right'>აბზაცის გაგრძელების დამატება</button>
                                    <div className='w-auto gap-4 flex justify-center items-center'>
                                      <img src={Left} onClick={() => wholeState.context[wholeState.questionIndex].answeredQuestionInner[idx].index !== 0 && handleChangeSpanIndex(false, idx) } className={`${wholeState.context[wholeState.questionIndex].answeredQuestionInner[idx].index !== 0 ? "opacity-100 cursor-pointer" : "opacity-40 cursor-not-allowed"} `}></img>
                                      <img className={`rotate-180  ${wholeState.context[wholeState.questionIndex].answeredQuestionInner[idx].index !== wholeState.context[wholeState.questionIndex].answeredQuestionInner[idx].textArea.length -1 ? "cursor-pointer opacity-100" : "opacity-40 cursor-not-allowed " }`} onClick={() => wholeState.context[wholeState.questionIndex].answeredQuestionInner[idx].index !== wholeState.context[wholeState.questionIndex].answeredQuestionInner[idx].textArea.length -1 && handleChangeSpanIndex(true, idx) } src={Left}></img>
                                    </div>
                                      
                                    {
                                      !addNewParagraph ?
                                        <button className='h-[50px] w-auto bg-white rounded-lg text-sidebarChoose px-6 font-bold shadow-bottom-right' onClick={(e) => {
                                          e.stopPropagation();
                                          setAddNewParagraph(true)
                                        }}>ახალი აბზაცის დამატება</button>
                                        :
                                        <div onClick={(e) => e.stopPropagation()} className='h-[50px] flex items-center px-2  justify-between w-auto rounded-lg text-sidebarChoose  font-bold shadow-bottom-right' >
                                          <input className='w-80% h-[70%] px-2' value={addNewParagraphName} onChange={(e) => {
                                            setAddNewParagraphName(e.target.value);
                                          }}/>
                                          <div>
                                            <div className='w-[30px] h-[25px] flex justify-center items-center flex-col'>
                                            <img className='h-[25px] rounded-full hover:scale-110 transition-all duration-300 cursor-pointer' src={AddNew} onClick={() => {
                                              addNewParagraphInCurrentPosition()
                                            }}  />
                                            <img src={Remove} className='h-[22px] hover:scale-110 transition-all duration-300 cursor-pointer' />

                                              </div>
                                            </div>
                                          </div>
                                    }

                                  </div>
                                )
                                }
                                
                        </div>
                      
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
            onClick={() => {
              // props.questionaryQuestion.isNew
              props.HandleAddNewQuestionary(
                props.setTemplateState ,
              props.questionaryQuestion,
              props.setQuestionaryQuestion,
              questionaryQuestionName,
              wholeState,
            )
          }
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
