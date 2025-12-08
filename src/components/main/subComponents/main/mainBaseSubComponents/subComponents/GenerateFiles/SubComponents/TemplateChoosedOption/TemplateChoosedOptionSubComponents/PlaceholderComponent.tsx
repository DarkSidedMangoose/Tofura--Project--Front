import React from 'react'

type Props = {
    shodPlaceholderQuestion: any,
    setShodPlaceholderQuestion: React.Dispatch<React.SetStateAction<any>>,
    setTemplateState: React.Dispatch<React.SetStateAction<any[]>>,
    HandleAddNewPlaceholder: (
      setTemplateState: React.Dispatch<React.SetStateAction<any[]>>,
      shodPlaceholderQuestion: any,
      setShodPlaceholderQuestion: React.Dispatch<React.SetStateAction<any>>
    ) => void,
    

}

const PlaceholderComponent = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full bg-loginBackground absolute z-[50]">
              <div className="w-[700px] h-[200px] bg-white flex flex-col  items-center">
                <div className="w-full h-[70px] bg-[#d5d8df34] flex text-sidebarChoose font-bold  justify-center items-center shadow-bottom">
                  კითხვა
                </div>
                <div className="h-[130px] w-full flex justify-center items-center">
                  <input
                    className="w-3/4 h-1/2 shadow-lg border-2"
                    value={props.shodPlaceholderQuestion.questionName}
                    onChange={(e) => {
                      props.setShodPlaceholderQuestion((prev: any) => ({
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
                    props.setShodPlaceholderQuestion((prev: any) => [
                      { ...prev, bool: false },
                    ]);
                  }}
                >
                  {" "}
                  გაუქმება{" "}
                </button>
                <button
                  className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
                  onClick={() =>
                    props.HandleAddNewPlaceholder(
                      props.setTemplateState,
                      props.shodPlaceholderQuestion,
                      props.setShodPlaceholderQuestion
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

export default PlaceholderComponent