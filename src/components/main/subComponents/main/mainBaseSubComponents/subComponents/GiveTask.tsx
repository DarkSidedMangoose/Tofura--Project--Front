import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

interface usersInterface {
  fullname: string;
  diversion: string;
  imgUrl: string;
  position: string;
  id: string;
  department: string;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GiveTask: React.FC<{
  setClick: (arg: boolean) => void;
  id: string;
}> = ({ setClick, id }) => {
  const [clickedIdentifier, setClickedIdentifier] = useState<number>(-1);
  const [users, setUsers] = useState<usersInterface[]>([]);
  const [sentTasksIdentifiers, setSentTasksIdentifiers] = useState<{
    taskId: string;
    receiveUserId: string;
  }>({ taskId: id, receiveUserId: "" });

  useEffect(() => {
    const takeSpecificUsersFromDb = async () => {
      try {
        const response = await axios.get(`${apiUrl}/tasks/getUsersForTasks`, {
          withCredentials: true,
        });
        setUsers(response.data);
      } catch (err: any) {
        // Chek if the error is 401(unauthorized) and if it is then redirect to login page
        if (err.response.status === 401) {
          window.location.href = "/";
        } else {
          console.error("Error fetching tasks:", err);
        }
      }
    };
    takeSpecificUsersFromDb();
  }, []);
  const handleClick = useCallback(() => {
    setClick(false);
  }, [setClick]);

  const handleClickIdentifier = (arg: number, id: string) => {
    setSentTasksIdentifiers((prev) => ({ ...prev, receiveUserId: id }));
    if (clickedIdentifier !== arg) {
      setClickedIdentifier(arg);
    } else {
      setClickedIdentifier(-1);
    }
  };
  useEffect(() => {}, [sentTasksIdentifiers]);
  const handleGiveTask = useCallback(() => {
    const SendTask = async () => {
      try {
        await axios.put(`${apiUrl}/tasks/giveTask`, sentTasksIdentifiers, {
          withCredentials: true,
        });
        handleClick();
      } catch (err: any) {
        // Chek if the error is 401(unauthorized) and if it is then redirect to login page
        if (err.response.status === 401) {
          window.location.href = "/";
        } else {
          console.error("Error fetching tasks:", err);
        }
      }
    };
    SendTask();
  }, [sentTasksIdentifiers, handleClick]);
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#fff6]  flex justify-center items-center z-[61]  ">
      <div className="bg-[#d3cfcf] w-1/2 min-w-[800px] h-3/4 min-h-[550px] relative text-sidebarChoose flex items-center  shadow-bottom-right flex-col rounded-xl">
        <h1 className="h-10% min-h-[70px] w-full flex justify-center items-center bg-sidebarChoose font-bold shadow-bottom-right text-white rounded-tl-xl rounded-tr-xl">
          დავალების გაცემა
        </h1>
        <div className="w-[85%] h-70% mt-[2%] overflow-y-scroll  min-h-[350px]  bg-white ">
          {users.map((user, index) => (
            <div
              className={` min-h-[150px] w-full h-auto flex items-center mt-3 ${
                clickedIdentifier !== index
                  ? "bg-[#d3cfcf] text-sidebarChoose hover:opacity-70"
                  : "bg-sidebarChoose text-white"
              } gap-3 text-sm  cursor-pointer relative justify-center transition-all duration-500`}
              onClick={() => handleClickIdentifier(index, user.id)}
            >
              <img
                src={`${user.imgUrl}`}
                className="left-0 absolute h-80% w-[15%] object-cover "
                alt={`${user.fullname}`}
              />
              <div className="w-[83%] h-80% flex flex-col items-center  absolute right-0 ">
                <div className=" relative w-full h-full flex flex-col text-sm ">
                  <p className="w-full flex justify-center font-bold ">{`${user.fullname}`}</p>

                  <p className="w-full flex justify-start  ">
                    <span className="font-bold mr-2">დეპარტამენტი: </span>
                    {user.department}
                  </p>
                  <p className="w-full flex justify-start ">
                    <span className="font-bold mr-2">თანამდებობა: </span>
                    {`${user.position}`}
                  </p>
                  {user.department && (
                    <p className="w-full  flex justify-start  ">
                      <span className="font-bold mr-2">სამართველო: </span>
                      {`${user.diversion}`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[16%]  w-95% justify-end items-center flex gap-[2%]">
          <button
            className={`${
              clickedIdentifier === -1 ? "opacity-60 cursor-not-allowed" : ""
            } bg-sidebarChoose text-white font-semibold w-20% h-1/2 rounded-lg shadow-bottom-right transition-all duration-500`}
            onClick={() => clickedIdentifier !== -1 && handleGiveTask()}
          >
            გაგზავნა
          </button>
          <button
            className="bg-sidebarChoose text-white font-semibold  w-20% h-1/2 rounded-lg shadow-bottom-right transition-all duration-500"
            onClick={() => handleClick()}
          >
            გაუქმება
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveTask;
