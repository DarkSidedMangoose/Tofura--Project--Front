import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_BASE_URL;
const Comment: React.FC<{
  name: string;
  onClick: (arg?: string) => void;
  id: string;
}> = ({ name, onClick, id }) => {
  const [senterAndReceiver, setSenterAndReceiver] = useState<{
    senterName: string;
    receiverName: string;
  }>({
    senterName: "",
    receiverName: "",
  });
  useEffect(() => {
    const SendRequest = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/tasks/getCommentDesireDatas`,
          {
            params: {
              taskId: id,
            },
            withCredentials: true,
          }
        );
        setSenterAndReceiver(response.data);
      } catch (err: any) {
        if (err.response.status === 401) {
          window.location.href = "/";
        } else {
          console.error("Error fetching tasks:", err);
        }
      } 
    
    };
    SendRequest();
  }, [id]);
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
      <div className=" bg-[#e3e0e0] w-1/2 min-w-[900px] h-3/4 min-h-[400px] relative text-sidebarChoose flex items-center  shadow-bottom-right flex-col  rounded-xl">
        <h1 className=" font-semibold h-[10%] min-h-[60px]  text-[16px] bg-sidebarChoose flex justify-center items-center w-full rounded-tl-xl rounded-tr-xl text-white shadow-bottom-right">
          დავალების უარყოფა
        </h1>
        <p className="text-md  h-[50px] w-full justify-center items-center flex font-bold">
          {name}
        </p>
        <div className="w-full h-10%  items-center flex justify-between">
          <p className="px-5 w-40% flex gap-2">
            <span className="font-bold    ">გამგზავნი:</span>
            {senterAndReceiver.senterName}
          </p>
          <p className="px-5 w-40% flex justify-end gap-2">
            <span className="font-bold ">მიმღები:</span>
            {senterAndReceiver.receiverName}
          </p>
        </div>
        <div className="w-95% h-1/2 flex flex-col  justify-between">
          <textarea
            onChange={(e) => handleChangeComment(e.target.value)}
            value={comment}
            placeholder={` მაგ: "დავალებას აკლია ფოტო ვიდეო მასალები."`}
            className="w-full h-90% text-left p-2 rounded-xl shadow-bottom-right text-black outline-none "
          ></textarea>
        </div>
        <div className="w-95% h-20% flex justify-end items-center gap-[2%]">
          <button
            onClick={() => handleClickButton("send")}
            className="w-auto px-5 h-1/3 min-h-[50px] bg-sidebarChoose text-white font-semibold rounded-lg shadow-bottom-right"
          >
            კომენტარის გაგზავნა
          </button>
          <button
            onClick={() => handleClickButton("decline")}
            className="w-auto px-5 h-1/3 min-h-[50px] bg-sidebarChoose text-white font-semibold rounded-lg shadow-bottom-right "
          >
            გაუქმება
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
