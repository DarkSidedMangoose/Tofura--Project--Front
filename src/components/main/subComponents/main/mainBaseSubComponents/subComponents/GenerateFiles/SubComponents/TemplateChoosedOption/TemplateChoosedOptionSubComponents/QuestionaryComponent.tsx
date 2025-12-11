import React from 'react';
import AddNew from '../../../../../../../../../../assets/images/generateWordFiles/add.png';
import Remove from '../../../../../../../../../../assets/images/generateWordFiles/minus-button.png';

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
                <div className='min-w-[200px] h-full flex flex-col items-center justify-center gap-2 border-2 border-sidebarChoose'>
                  <label className='font-bold text-sidebarChoose '>პასუხი 1</label>
                <input className='w-3/4 h-1/3 text-sm px-2' placeholder='შეიყვანეთ პასუხი...' />
                </div>
                <div className='w-[50px] h-full flex flex-col justify-between py-2 items-center'>
                  <img className='w-[30px] h-[30px] cursor-pointer hover:opacity-90' src={Remove} />
                  <img className='w-[32px] h-[32px] cursor-pointer hover:opacity-90' src={AddNew} />
                </div>
              </div>
              <div className='min-w-[250px] h-full flex '>
                <div className='min-w-[200px] h-full flex flex-col items-center justify-center gap-2 border-2'>
                  <label className='font-bold text-sidebarChoose '>პასუხი 2</label>
                <input className='w-3/4 h-1/3 text-sm px-2' placeholder='შეიყვანეთ პასუხი...' />
                </div>
                <div className='w-[50px] h-full flex flex-col justify-between py-2 items-center'>
                  <img className='w-[30px] h-[30px] cursor-pointer hover:opacity-90' src={Remove} />
                  <img className='w-[32px] h-[32px] cursor-pointer hover:opacity-90' src={AddNew} />
                </div>
              </div>
            </div>
            <h1 className='text-sidebarChoose font-bold border-b-2 px-8 py-2'>
              არჩეული პასუხის შედეგი
            </h1>

            <div className='w-full min-h-[400px] bg-loginBackground'>

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
