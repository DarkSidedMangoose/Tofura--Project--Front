import React from "react";
import "./mainAnimations.css";
import iconNavigation from "../../assets/images/main/click.png";
import phone from "../../assets/images/main/phone.png";
import email from "../../assets/images/main/email.png";

const MainFooter: React.FC = () => {
  return (
    <footer className=" fixed  bottom-0  w-full h-[5%] min-h-[50px] z-10 flex justify-center footerAnimated-div ">
      <div className="bg-white border-2 flex items-center justify-between   w-[98%] shadow-top  h-full rounded-lg">
        <div className="ml-[2%]  flex w-[18%] narrow:w-[50%] h-50% items-center ">
          <img
            className=" w-9% h-[100%] rotate-[60deg]  "
            alt="navigationIcon"
            src={iconNavigation}
          ></img>
          <p className="ml-2 text-[0.9vw] narrow:text-[15px] w-100% flex-grow  text-footerText font-bold  h-auto    ">
            შრომის ინსპექციის სამსახური
          </p>
        </div>
        <div className="mr-[2%] w-[30%] flex justify-between items-center gap-4 ">
          <div className="flex w-50% h-50% justify-center items-center">
            <img className="w-[10%] h-[10%]" alt="phoneIcon" src={phone}></img>
            <p className="ml-2 text-[0.9vw] narrow:text-[15px] w-100% flex-grow  text-footerText font-bold  h-auto    ">
              0322-22-22-22
            </p>
          </div>
          <div className="flex w-50%  h-50% justify-center items-center gap-4">
            <img className="w-[10%] h-[10%] " alt="emailIcon" src={email}></img>
            <p className="ml-2 text-[0.9vw] narrow:text-[15px] w-100% flex-grow  text-footerText font-bold  h-auto    ">
              workinspect.moh.gov.ge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
