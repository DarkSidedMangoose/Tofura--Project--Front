import React, { useEffect, useState } from "react";

import axios from "axios";
import "../../../../../../Scrollbar.css";
import {
  PropertyNames,
  ValuesOfHeader,
} from "./configureUsersDatas/ConfigureUsersDatas";
import { UsersInterface } from "../ConfigureUsers";
import Edit from "../../../../../../../../assets/images/main/edit.webp";
import MainMainHeader from "../../../../../../../reusableComponents/MainMain/MainMainHeader";

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
  }, [refreshUsers, apiUrl]);
  return (
    <div className="w-[98%] h-full   flex flex-col  items-center  ">
      <div
          className={`min-h-[10%]   w-[99.9%] flex items-center flex-col  rounded-br-lg rounded-lg shadow-boxShadow`}
        >

      <MainMainHeader value={ValuesOfHeader} />
        </div>
      <div className="w-[99.78%] min-h-300px h-80% bg-white overflow-y-auto flex flex-col gap-[0.5%] shadow-boxShadow rounded-bl-2xl rounded-br-2xl">
        {usersInfo.map((infos, index) => (
          <div
            className="min-h-[100px]  w-full grid  border-b-2  text-sm text-gray-700 bg-loginBackground font-semibold "
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
