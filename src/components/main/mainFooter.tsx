import React from "react";
import "./mainAnimations.css";
import iconNavigation from "../../assets/images/main/click.png";

const MainFooter: React.FC = () => {
  return (
    <footer className=" fixed  bottom-0  w-full h-[5%] min-h-[50px] z-10 flex justify-center footerAnimated-div ">
      <div className="bg-white border-2 flex items-center justify-between   w-[98%] shadow-top  h-full rounded-lg">
        <div className="ml-[2%]  flex w-[18%] narrow:w-[50%] h-50% items-center">
          <img
            className=" w-9% h-100% rotate-[60deg]  "
            alt="navigationIcon"
            src={iconNavigation}
          ></img>
          <p className="ml-2 text-[0.9vw] narrow:text-[15px] w-100% flex-grow  text-footerText font-bold  h-auto    ">
            შრომის ინსპექციის სამსახური
          </p>
        </div>
        <div className="mr-[2%] w-[30%]">s</div>
      </div>
    </footer>
  );
};

export default MainFooter;
