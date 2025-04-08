import React, { Fragment, useEffect, useState } from "react";
import Filter from "../../../../../../../assets/images/main/filter.webp";
import Edit from "../../../../../../../assets/images/main/edit.webp";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

interface usersInterface {
  id: string;
  fullname: string;
  position: string | null;
  level: number;
  department: string | null;
  diversion: string | null;
}

const ConfigureUsers: React.FC = () => {
  const [usersInfo, setUsersInfo] = useState<usersInterface[] | []>([]);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const GetUsersAsync = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/users/AllUsersDesiredData`,
          { withCredentials: true }
        );

        setUsersInfo(response.data);
        console.log("users succesfully fetched");
      } catch (err: any) {
        // Chek if the error is 401(unauthorized) and if it is then redirect to login page
        if (err.response.status === 401) {
          window.location.href = "/";
          console.log("401 error");
        } else {
          console.error("Error fetching tasks:", err);
        }
      }
    };
    GetUsersAsync();
  }, []);
  useEffect(() => {
    console.log(usersInfo);
  }, [usersInfo]);
  return (
    <div className="w-full h-full  text-sidebarChoose border-t-2 border-dotted border-opacity-30 border-sidebarChoose py-[2%] flex flex-col items-center  gap-[2%]">
      <form
        onSubmit={submitHandler}
        className="w-1/4 min-w-[400px] h-10% bg-white  rounded-2xl flex items-center px-[1%] gap-[0.5%]  "
      >
        <input
          type="text"
          className="w-[70%] h-1/2 rounded-lg bg-white border-2 border-sidebarChoose text-sm "
          placeholder="...მომხმარებლის სახელი და გვარი"
        />
        <div className="cursor-pointer h-1/2 w-[9%] min-w-[30px] border-sidebarChoose border-2 flex justify-center items-center rounded-lg hover:opacity-70 transition-all duration-200">
          <img
            className="w-60% h-60% object-contain "
            src={Filter}
            alt="filter"
          />
        </div>
        <div className="h-1/2 w-[20%] min-w-[30px]  flex justify-center items-center rounded-lg ">
          <button
            type="submit"
            className="bg-sidebarChoose text-white w-full h-full px-[3%] font-semibold text-[15px] hover:opacity-70 transition-all duration-200 rounded-lg"
          >
            ძებნა
          </button>
        </div>
      </form>
      <p className="font-bold text-md">მომხმარებლების სია:</p>
      <div className="w-[98%] h-[70%] bg-white rounded-2xl flex flex-col gap-[0.5%] ">
        <div className="w-full flex h-[70px] min-h-[70px] bg-sidebarChoose  text-white rounded-tl-lg rounded-tr-lg shadow-bottom">
          <div
            style={{
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 50px",
              gridTemplateRows: "1fr", // Optional, ensures a single row with equal height
            }}
            className="h-[70px] min-h-[70px] w-[98%] grid   text-white font-semibold "
          >
            <div className="w-full h-full flex justify-center items-center">
              <p className="w-90% ">სახელი</p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <p className="w-90%">პოზიცია</p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <p className="w-90%">განხრა</p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <p className="w-90%">დეპარტამენტი</p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <p className="w-90%">დაშვების დონე</p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-300px overflow-y-auto">
          {usersInfo.map((infos, index) => (
            <div
              className="min-h-[100px] w-[99%] grid  border-b-2 border-sidebarChoose text-sm text-gray-700 font-semibold "
              style={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 50px",
                gridTemplateRows: "1fr",
              }}
            >
              <div
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  hyphens: "auto",
                }}
                className="w-full h-full flex justify-center items-center overflow-y-auto"
              >
                <p className="w-90%">{infos.fullname}</p>
              </div>
              <div className="w-full h-full flex justify-center items-center overflow-y-auto">
                <p className="w-90%">{infos.position}</p>
              </div>
              <div
                className="w-full h-full flex justify-center items-center overflow-y-auto "
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  hyphens: "auto",
                }}
              >
                <p className="w-90%">{infos.diversion}</p>
              </div>
              <div className="w-full h-full flex justify-center items-center overflow-y-auto">
                <p className="w-90%">{infos.department}</p>
              </div>
              <div className="w-full h-full flex justify-center items-center overflow-y-auto">
                <p className="w-90%">level:{infos.level}</p>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={Edit}
                  className="object-contain cursor-pointer hover:opacity-70 transition-all duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-sidebarChoose text-white p-[1%] rounded-2xl font-semibold">
        ახალი მომხმარებლის დამატება
      </button>
    </div>
  );
};

export default ConfigureUsers;
