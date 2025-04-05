import React, { Fragment } from "react";
import { DataLog } from "../main/BaseMainMain";
import { useDispatch } from "react-redux";
import { setTaskLogInfo } from "../../../../../../redux/reducers/TaskLogsInfo";

export const DataLogs: React.FC<{ data: DataLog[] }> = ({ data }) => {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(setTaskLogInfo(false));
  };
  return (
    <div className="bg-[#fff6] w-full h-full fixed top-0 left-0 z-[61] flex flex-col items-center justify-center">
      <div className="bg-[#e3e0e0] w-1/2 min-w-[800px] h-3/4 min-h-[400px] relative text-sidebarChoose flex items-center  shadow-bottom-right flex-col  rounded-xl">
        <h1 className="text-lg font-bold h-[10%]  bg-sidebarChoose flex justify-center items-center w-full rounded-tl-xl rounded-tr-xl text-white">
          ობიექტების ჟურნალი
        </h1>
        <p className="text-md font-semibold h-10% w-full justify-center items-center flex">
          შპს ატლანტა
        </p>
        <div className="w-90% h-60% bg-white text-[12px] flex  items-center  flex-col overflow-y-auto">
          {data.map((log, index) => (
            <Fragment key={index}>
              <h1 className="text-md font-bold w-full flex justify-center items-center">
                {log.timestamp}
              </h1>
              <div
                key={index}
                className="w-95%  h-1/2 bg-[#d3cfcf] min-h-[200px] overflow-y-auto  relative text-sidebarChoose flex items-center justify-center   flex-col gap-[5%] rounded-xl"
              >
                <img
                  src={`${log.imgUrl}`}
                  className="left-0 absolute h-70% w-[13%] object-cover ml-[1%] "
                  alt={`${log.addedByName}`}
                />
                <div className="w-[83%] h-80% flex flex-col justify-center  absolute right-0 ">
                  <p className=" h-1/4  ">
                    <span className="font-bold">სახელი:</span> {log.addedByName}
                  </p>
                  <p className="h-1/4  ">
                    <span className="font-bold">ოპერაციის სტატუსი: </span>
                    {log.description}
                  </p>
                  {log.receiverName && (
                    <p className="h-1/4 ">
                      <span className="font-bold">მიმღები </span>
                      {log.receiverName}
                    </p>
                  )}
                  {log.comment && (
                    <p className="h-1/4 ">
                      <span className="font-bold">კომენტარი:</span>{" "}
                      {log.comment}
                    </p>
                  )}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="w-full h-20% flex justify-center items-center ">
          <button
            className=" w-auto h-2/5 pl-[5%] pr-[5%] bg-sidebarChoose text-white rounded-xl hover:opacity-70 transition-all duration-300  "
            onClick={() => {
              closeHandler();
            }}
          >
            დახურვა
          </button>
        </div>
      </div>
    </div>
  );
};
