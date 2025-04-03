import React from "react";
import { DataLog } from "../main/BaseMainMain";

export const DataLogs: React.FC<{ data: DataLog[] }> = ({ data }) => {
  return (
    <div className="bg-[#fff6] w-full h-full fixed top-0 left-0 z-[61] flex flex-col items-center justify-center">
      <div className="bg-[#e3e0e0] w-1/2 min-w-[800px] h-3/4 min-h-[400px] relative text-sidebarChoose flex items-center  shadow-bottom-right flex-col gap-[5%] rounded-xl">
        <h1 className="text-xl font-bold">ობიექტების ჟურნალი</h1>
        <p className="text-lg font-semibold">შპს ატლანტა</p>
        <div>
          {data.map((log, index) => (
            <div
              key={index}
              className="w-1/2 min-w-[800px] h-3/4 min-h-[400px] relative text-sidebarChoose flex items-center   flex-col gap-[5%] rounded-xl"
            >
              <h1 className="text-lg font-bold">{log.timestamp}</h1>
              <p className="text-md font-semibold">{log.addedBy}</p>
              <p className="text-md font-semibold">{log.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
