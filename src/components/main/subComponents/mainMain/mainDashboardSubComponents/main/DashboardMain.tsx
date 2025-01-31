import React from "react";
import Dashboard from "../subComponents/Dashboard";

export const DashboardMain: React.FC = () => {
  return (
    <section className="w-[98%] h-[95%] flex justify-center items-center">
      <div className="w-full h-90% gap-[2%]">
        <div className=" rounded-2xl  flex flex-col justify-center items-center relative shadow-bottom-right w-40% h-50%">
          <header className=" z-10 h-20%  backdrop-blur-lg     text-lg    w-full flex justify-center items-center text-sidebarChoose font-bold">
            <h1>ობიექტების დიაგრამული გამოსახულება</h1>
          </header>
          <div className="w-full h-full flex bg-white rounded-bl-2xl rounded-br-2xl">
            <Dashboard />
            <section className="w-50% h-full flex flex-col relative ">
              <div className="absolute bottom-[5%] h-90% right-0 w-full ">
                <article className="w-100% h-1/5 flex items-center gap-[5%]">
                  <div className=" h-[25%] aspect-1 bg-red-800 border-solid border-black border-2"></div>
                  <p className="text-black  text-m">
                    განსაკუთრებით მაღალი რისკი
                  </p>
                </article>
                <article className="w-100% h-1/5 flex items-center gap-[5%]">
                  <div
                    style={{ backgroundColor: "rgba(234, 113, 14, 0.863)" }}
                    className=" h-[25%] aspect-1  border-solid border-black border-2"
                  ></div>
                  <p className="text-black  text-m">მაღალი რისკი</p>
                </article>
                <article className="w-100% h-1/5 flex items-center gap-[5%]">
                  <div
                    style={{ backgroundColor: "rgba(156, 146, 1, 0.863)" }}
                    className=" h-[25%] aspect-1 bg-red-800 border-solid border-black border-2"
                  ></div>
                  <p className="text-black  text-m">საშუალო რისკი</p>
                </article>
                <article className="w-100% h-1/5 flex items-center gap-[5%]">
                  <div
                    style={{ backgroundColor: "rgba(13, 97, 2, 0.863)" }}
                    className=" h-[25%] aspect-1 bg-red-800 border-solid border-black border-2"
                  ></div>
                  <p className="text-black  text-m">დაბალი რისკი</p>
                </article>
                <article className="w-100% h-1/5 flex items-center gap-[5%]">
                  <div
                    style={{ backgroundColor: "rgba(5, 182, 84, 0.863)" }}
                    className=" h-[25%] aspect-1 bg-red-800 border-solid border-black border-2"
                  ></div>
                  <p className="text-black  text-m">რისკის გარეშე</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMain;
