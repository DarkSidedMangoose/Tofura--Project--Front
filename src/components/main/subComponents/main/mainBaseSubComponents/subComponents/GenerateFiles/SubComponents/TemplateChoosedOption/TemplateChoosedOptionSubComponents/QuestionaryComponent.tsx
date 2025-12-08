import React from 'react'

type Question = {
  bool: boolean;
  first: number;
  second: number;
  third: number;
  questionName?: string; // optional if you add later
};

type Props = {
    questionaryQuestion: Question,
    setQuestionaryQuestion: React.Dispatch<React.SetStateAction<any>>,
    setTemplateState: React.Dispatch<React.SetStateAction<any[]>>,
    HandleAddNewQuestionary: (
      o: number,
      childIndexs: number,
      setTemplateState: React.Dispatch<React.SetStateAction<any[]>>,
      questionaryQuestion: any,
      setQuestionaryQuestion: React.Dispatch<React.SetStateAction<any>>
    ) => void,

}

const Questionary = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full bg-loginBackground absolute z-[50]">
              <div className="w-[1200px] h-[800px] bg-white flex flex-col  items-center">
                <div className="w-full h-[70px] bg-[#d5d8df34] flex text-sidebarChoose font-bold  justify-center items-center shadow-bottom">
                  ქვე-კითხვარის კითხვა
                </div>
                <div className="h-[130px] w-full flex justify-center items-center">
                  <input
                    className="w-3/4 h-1/2 shadow-lg border-2"
                    value={props.questionaryQuestion.questionName}
                    onChange={(e) => {
                      props.setQuestionaryQuestion((prev: any) => ({
                        ...prev,
                        questionName: e.target.value,
                      }));
                    }}
                    placeholder="...მაგ: რა არის კომპანიის საიდენტიფიკაციო კოდი?"
                  />
                </div>
              </div>
              <div className="w-[700px] h-[100px] flex  justify-end items-center gap-2">
                <button
                  className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
                  onClick={() => {
                     props.setQuestionaryQuestion((prev: any) => ({
  ...prev,
  bool: false,
})
                );
                  }}
                >
                  {" "}
                  გაუქმება{" "}
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
                  {" "}
                  დამატება{" "}
                </button>
              </div>
            </div>
  )
}

export default Questionary