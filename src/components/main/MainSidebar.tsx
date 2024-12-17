import React, { useState } from "react";
import base from "../../assets/images/main/base.png";
import dashboard from "../../assets/images/main/dashboard2.png";
import dashboard2 from "../../assets/images/main/dashboard3.png";
import tasks from "../../assets/images/main/tasks.png";
import profile from "../../assets/images/main/profile2.png";
import email from "../../assets/images/main/mail2.png";
import dataBars from "../../assets/images/main/data-bars.png";
import "./MainSidebar.css";

interface bools {
  bases: boolean;
}
const MainSidebar: React.FC = () => {
  const [dropdownStates, setDropdownStates] = useState<bools>({
    bases: false,
  });
  const HandleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.getAttribute("data-name");
    if (name === "bases") {
      setDropdownStates((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    }
  };
  return (
    <aside className="w-80px h-300px mt-4 bg-zinc-300  stroke-black flex flex-col opacity-100  items-center shadow-lg shadow-black  ">
      <div
        className="flex relative w-full h-1/5 justify-center items-center"
        onMouseEnter={HandleChange}
        onMouseLeave={HandleChange}
        tabIndex={0}
        data-name="bases"
      >
        <img
          className="w-40px h-40px  hover:opacity-80 cursor-pointer "
          src={base}
          alt=""
        />
        {dropdownStates.bases ? (
          <div className="absolute z-20  top-0 -right-300px bg-zinc-300 w-300px h-100px borderSet ">
            <ul className="h-full">
              <li className="w-full flex h-1/3 justify-center items-center text-sm  cursor-pointer text-login hover:opacity-50 ">
                საერთო ობიექტების რეესტრი
              </li>
              <li className="w-full flex h-1/3 justify-center items-center text-sm  cursor-pointer text-login hover:opacity-50">
                შესამოწმებელი ობიექტების რეესტრი
              </li>
              <li className="w-full flex h-1/3 justify-center items-center text-sm  cursor-pointer text-login hover:opacity-50">
                შემოწმებული ობიექტების რეესტრი
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={dashboard}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={tasks}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={profile}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={email}
          alt=""
        />
      </div>
    </aside>
  );
};

export const SecondarySidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <aside
        className={`w-200px h-300px mt-10 bg-sideBar slideAdd opacity-80 flex flex-col  ${
          isActive ? "active" : ""
        }`}
      >
        <div className="w-full h-1/5 border-2  flex gap-2">
          <img src={dataBars} alt="base-logo" className="w-49px h-49px" />
          <p className="text-gray-50">ობიექტების რეესტრი</p>
        </div>
        <div className="w-full h-1/5 border-2 flex gap-2 ">
          <img src={dashboard2} alt="base-logo" className="w-49px h-49px " />
          <p>ინფორმაციული დაფა</p>
        </div>
        <div className="w-full h-1/5 border-2 ">
          <img src={dashboard2} alt="base-logo" className="w-49px h-49px" />
          <p></p>
        </div>
        <div className="w-full h-1/5 border-2 ">
          <img src={dataBars} alt="base-logo" className="w-49px w-49px" />
          <p></p>
        </div>
        <div className="w-full h-1/5 border-2 ">
          <img src={dataBars} alt="base-logo" className="w-49px w-49px" />
          <p></p>
        </div>
      </aside>
    </div>
  );
};
export default MainSidebar;
