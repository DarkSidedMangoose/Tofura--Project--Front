import React, { useState } from "react";
import base from "../../assets/images/main/base.png";
import dashboard from "../../assets/images/main/dashboard2.png";
import tasks from "../../assets/images/main/tasks.png";
import profile from "../../assets/images/main/profile2.png";
import email from "../../assets/images/main/mail2.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setString } from "../../redux/reducers/sidebarReducer";

interface DropdownStates {
  bases: boolean;
}
const MainSidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    bases: false,
  });
  const handleMouseToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.getAttribute(
      "data-name"
    ) as keyof DropdownStates;
    setDropdownStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <aside className="w-4% min-w-[80px] h-40% min-h-[300px] mt-4 bg-zinc-300  stroke-black flex flex-col opacity-100  items-center shadow-lg shadow-black  ">
      <div
        className="flex relative w-full h-1/5 justify-center items-center"
        onMouseEnter={handleMouseToggle}
        onMouseLeave={handleMouseToggle}
        tabIndex={0}
        data-name="bases"
      >
        <img
          className="w-60% h-70%  hover:opacity-80 cursor-pointer "
          src={base}
          alt=""
        />
        {dropdownStates.bases ? (
          <div className="absolute z-20  top-0 -right-[400%] bg-zinc-300 w-[400%] h-[150%] border-l-[1px] border-solid border-white ">
            <ul className="h-full">
              <li
                className="w-full flex h-1/3 justify-center items-center text-[0.7vw]   cursor-pointer text-login hover:opacity-50 "
                onClick={() => dispatch(setString("საერთო ობიექტების რეესტრი"))}
              >
                საერთო ობიექტების რეესტრი
              </li>
              <li
                className="w-full flex h-1/3 justify-center items-center text-[0.7vw]  cursor-pointer text-login hover:opacity-50"
                onClick={() =>
                  dispatch(setString("შესამოწმებელი ობიექტების რეესტრი"))
                }
              >
                შესამოწმებელი ობიექტების რეესტრი
              </li>
              <li
                className="w-full flex h-1/3 justify-center items-center text-[0.7vw] cursor-pointer text-login hover:opacity-50"
                onClick={() =>
                  dispatch(setString("შემოწმებული ობიექტების რეესტრი"))
                }
              >
                შემოწმებული ობიექტების რეესტრი
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-60% h-70% hover:opacity-80 cursor-pointer"
          src={dashboard}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-60% h-70% hover:opacity-80 cursor-pointer"
          src={tasks}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-60% h-70% hover:opacity-80 cursor-pointer"
          src={profile}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-60% h-70% hover:opacity-80 cursor-pointer"
          src={email}
          alt=""
        />
      </div>
    </aside>
  );
};

export default MainSidebar;
