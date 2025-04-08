import React, { useCallback, useState } from "react";

const Comment: React.FC<{ name: string; onClick: (arg?: string) => void }> = ({
  name,
  onClick,
}) => {
  const [comment, setComment] = useState<string>("");
  const handleChangeComment = (arg: string) => {
    setComment(arg);
  };
  const handleClickButton = useCallback(
    (arg: string) => {
      if (arg === "send") {
        onClick(comment);
      } else {
        onClick();
      }
    },
    [onClick, comment]
  );

  return (
    <div className="bg-[#fff6] w-full h-full fixed top-0 left-0 z-[61] flex flex-col items-center justify-center">
      <div className=" bg-[#e3e0e0] w-1/2 min-w-[800px] h-3/4 min-h-[400px] relative text-sidebarChoose flex items-center  shadow-bottom-right flex-col  rounded-xl">
        <h1 className=" font-semibold h-[10%] min-h-[60px]  text-[16px] bg-sidebarChoose flex justify-center items-center w-full rounded-tl-xl rounded-tr-xl text-white shadow-bottom-right">
          დავალების უარყოფა
        </h1>
        <p className="text-md font-semibold h-[50px] w-full justify-center items-center flex">
          {name}
        </p>
        <div className="w-[95%] h-5% flex items-center justify-between">
          <p>
            <span className="font-bold">გამგზავნი:</span> {"გამგზავნის სახელი"}
          </p>
          <p>
            <span className="font-bold">მიმღები:</span> {"მიმღების სახელი"}
          </p>
        </div>
        <div className="w-95% h-1/2 flex flex-col items-center">
          <p className=" flex justify-center w-auto p-5 font-semibold ">
            კომენტარი
          </p>
          <textarea
            onChange={(e) => handleChangeComment(e.target.value)}
            value={comment}
            className="w-full h-90% text-left p-2 rounded-xl shadow-bottom-right"
          ></textarea>
        </div>
        <div className="w-95% h-20% flex justify-end items-center gap-[2%]">
          <button
            onClick={() => handleClickButton("send")}
            className="w-auto px-5 h-1/3 min-h-[50px] bg-sidebarChoose text-white font-semibold rounded-lg shadow-bottom-right"
          >
            კომენტარის გაგზავნა
          </button>
          <button className="w-auto px-5 h-1/3 min-h-[50px] bg-sidebarChoose text-white font-semibold rounded-lg shadow-bottom-right ">
            გაუქმება
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
