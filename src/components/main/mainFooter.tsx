import React, { memo } from "react";
import "./MainAnimations.css";
import iconNavigation from "../../assets/images/main/click.png";
import phone from "../../assets/images/main/phone.png";
import email from "../../assets/images/main/email.png";

const MainFooter: React.FC = memo(() => {
  return (
    <footer className="fixed bottom-0 w-full  h-[6%] z-30 flex justify-center bg-loginBackground footerAnimated-div">
      <div className=" border-2 flex items-center justify-between w-11/12 shadow-top h-full rounded-lg relative">
        <section className="ml-4 flex items-center space-x-2 h-full  relative ">
          <div className="  h-1/2   aspect-1 flex justify-center rotate-[60deg] ">
            <img
              className=" object-contain "
              alt="navigationIcon"
              src={iconNavigation}
            />
          </div>
          <p className="text-sm font-bold text-sidebarChoose ">
            შრომის ინსპექციის სამსახური
          </p>
        </section>
        <section className="mr-4 flex space-x-8">
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6" alt="phoneIcon" src={phone} />
            <p className="text-sm font-bold text-sidebarChoose">
              0322-22-22-22
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6" alt="emailIcon" src={email} />
            <p className="text-sm font-bold text-sidebarChoose">
              workinspect.moh.gov.ge
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
});

export default MainFooter;
