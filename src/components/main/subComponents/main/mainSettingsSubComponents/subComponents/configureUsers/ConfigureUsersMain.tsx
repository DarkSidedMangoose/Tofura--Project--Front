import React, { useEffect, useState } from "react";

import axios from "axios";
import "../../../../../Scrollbar.css";
import PropertyNames, { ValuesOfHeader } from "./ConfigureUsersDatas";
import { UsersInterface } from "./ConfigureUsersSubcomponents/ConfigureUsers";
import Edit from "../../../../../../../assets/images/main/edit.webp";

const ConfigureUsersMain: React.FC<{ refreshUsers: boolean }> = ({
  refreshUsers,
}) => {
  const [usersInfo, setUsersInfo] = useState<UsersInterface[] | []>([]);

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

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
  }, [refreshUsers]);
  return (
    <div className="w-[98%] h-[80%] bg-white rounded-2xl flex flex-col gap-[0.5%] ">
      <div className="w-full flex h-[70px] min-h-[70px] bg-sidebarChoose  text-white rounded-tl-lg rounded-tr-lg shadow-bottom">
        <div
          style={{
            gridTemplateColumns: "50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 50px",
            gridTemplateRows: "1fr", // Optional, ensures a single row with equal height
          }}
          className="h-[70px] min-h-[70px] w-[98%] grid   text-white font-semibold "
        >
          {ValuesOfHeader.map((value, index) => (
            <div className="w-full h-full flex justify-center items-center">
              <p className="w-90% ">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-300px overflow-y-auto">
        {usersInfo.map((infos, index) => (
          <div
            className="min-h-[100px] max-h-[100px] w-[99%] grid  border-b-2 border-sidebarChoose text-sm text-gray-700 font-semibold "
            style={{
              gridTemplateColumns: "50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 50px",
              gridTemplateRows: "1fr",
            }}
            key={index}
          >
            <p className="w-90% h-full flex justify-center items-center">
              {index + 1}
            </p>
            {PropertyNames.map((prop, key) => (
              <div
                key={key}
                className="flex  justify-center items-center text-[12px] w-[95%] overflow-x-auto custom-scrollbar font-bold "
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  hyphens: "auto",
                }}
              >
                {prop === "level" ? (
                  <p className="w-90% max-h-full">{`დაშვების დონე: ${infos[prop]}`}</p>
                ) : prop === "status" && infos[prop] === "აქტიური" ? (
                  <p className="w-90% max-h-full text-[#006400] green font-semibold">
                    {infos[prop]}{" "}
                  </p>
                ) : prop === "status" && infos[prop] === "არა აქტიური" ? (
                  <p className="w-90% max-h-full text-[#8B0000] font-bold">
                    {infos[prop]}{" "}
                  </p>
                ) : (
                  <p className="w-90% max-h-full  ">{infos[prop]} </p>
                )}
              </div>
            ))}

            <div
              className="w-full h-full flex  items-center overflow-y-auto cursor-pointer hover:opacity-70 transition-all duration-300 "
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              <img src={Edit} alt="edit"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigureUsersMain;
