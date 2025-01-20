import React from "react";
import MainMainHeaderSection from "./subComponents/mainMain/mainMainSubComponents";

const MainMain: React.FC = () => {
  return (
    <main className="w-full h-full  min-h-[700px] flex justify-center items-center ">
      <MainMainHeaderSection />
    </main>
  );
};

export default MainMain;
