import React, { memo } from "react";
import "./MainAnimations.css";
import iconNavigation from "../../assets/images/main/click.png";
import phone from "../../assets/images/main/phone.png";
import email from "../../assets/images/main/email.png";

const MainFooter: React.FC = memo(() => {
  return (
    <footer className="fixed bottom-0 w-full  h-12 z-30 flex justify-center footerAnimated-div">
      <div className="bg-white border-2 flex items-center justify-between w-11/12 shadow-top h-full rounded-lg">
        <section className="ml-4 flex items-center space-x-2">
          <div className=" w-6  aspect-w-1 aspect-h-1 transform rotate-[60deg]">
            <img
              className=" object-contain"
              alt="navigationIcon"
              src={iconNavigation}
            />
          </div>
          <p className="text-sm font-bold text-footerText">
            შრომის ინსპექციის სამსახური
          </p>
        </section>
        <section className="mr-4 flex space-x-8">
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6" alt="phoneIcon" src={phone} />
            <p className="text-sm font-bold text-footerText">0322-22-22-22</p>
          </div>
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6" alt="emailIcon" src={email} />
            <p className="text-sm font-bold text-footerText">
              workinspect.moh.gov.ge
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
});

export default MainFooter;
