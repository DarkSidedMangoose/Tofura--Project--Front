import React from "react";
import Dashboard from "../subComponents/Dashboard";

export const DashboardMain: React.FC = () => {
  return (
    <section className="w-[98%] h-[95%] flex justify-center items-center">
      <div className="w-full h-90%  gap-[2%]  ">
        <div className="bg-white rounded-2xl flex justify-center items-center relative shadow-bottom-right w-30% h-50%">
          <div className="absolute top-0 z-10 h-20% bg-[#14124217] rounded-2xl  w-full flex justify-center items-center text-sidebarChoose font-bold">
            ობიექტების დიაგრამული გამოსახულება
          </div>
          <Dashboard />
        </div>
      </div>
    </section>
  );
};
