import React from "react";
import "./mainAnimations.css";

const MainFooter: React.FC = () => {
  return (
    <footer className=" fixed  bottom-0  w-full h-[5%] min-h-[50px] z-10 flex justify-center footerAnimated-div ">
      <div className="bg-white border-2   w-[98%] shadow-top  h-full rounded-lg"></div>
    </footer>
  );
};

export default MainFooter;
