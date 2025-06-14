import React, { useState, useCallback, useEffect } from "react";
import MainLogo from "../../assets/images/main/fullLogo.webp";
import Base from "../../assets/images/main/base.webp";
import Dashboard from "../../assets/images/main/dashboard.webp";
import MyProfile from "../../assets/images/main/myProfile.webp";
import Settings from "../../assets/images/main/settings.webp";
import "./MainAnimations.css";
import { NavItem } from "./subComponents/sidebar/sidebarComponents/SidebarNavItem";
import { handleSidebarClick } from "./subComponents/sidebar/SidebarFunctions";
import { useSidebarMouseEnterProvider } from "../../contextApis/ContextMouseEnterIdentifier";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAdditionalInfoOption } from "../../redux/reducers/AdditionalDropdownOption";

import Leave from "../../assets/images/main/leave.webp";
import { setAdditionalShow } from "../../redux/reducers/AdditionalShow";
import axios from "axios";
import { UseContextAuthenticatedUserInfo } from "../../contextApis/ContextAuthenticatedUserInfo";

export interface mainSidebarProps {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const MainSidebar: React.FC<mainSidebarProps> = ({ setIsActive, isActive }) => {
  const dispatch: AppDispatch = useDispatch();

  const { SidebarMouseEnterIdentifier, setSidebarMouseEnterIdentifier } =
    useSidebarMouseEnterProvider();

    const {authenticatedUserInfo} = UseContextAuthenticatedUserInfo()
   
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  const AdditionalShow = useSelector((state: RootState) => state.setAdditionalShow)

  const [sidebarStateIdentifier, setSidebarStateIdentifier] =
    useState<string>("base");

  const setOption = (data: string) => {
    // dispatch(setAdditionalInfoOption(data));
  };

  useEffect(() => {
    if (
      isOption === "" ||
      isOption === "ობიექტების რეესტრი" ||
      isOption === "გაცემული დავალებები" ||
      isOption === "ინსპექტირების ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი"
    ) {
      setSidebarStateIdentifier("base");
    } else if (
      isOption === "ობიექტების რეგიონალური რუკა" ||
      isOption === "ობიექტების დიაგრამული გამოსახულება" ||
      isOption === "ობიექტების წლიური დიაგრამა თვეების მიხედვით"
    ) {
      setSidebarStateIdentifier("dashboard");
    } else if (isOption === "მომხმარებლების კონფიგურაცია") {
      setSidebarStateIdentifier("settings");
    }
  }, [isOption]);

  const toggleSidebar = useCallback(
    (identifier: string) => {
      handleSidebarClick(
        identifier,
        sidebarStateIdentifier,
        setSidebarStateIdentifier,
        setIsActive
      );
      if (identifier === "dashboard") {
        setOption("საინფორმაციო დაფა");
      } else if (identifier === "profile") {
        setOption("პროფილი");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleMouseEnter = useCallback(
    (base: string) => {
      if (AdditionalShow.data === false) {
        dispatch(setAdditionalShow(true));
      }
      if (SidebarMouseEnterIdentifier === base) {
      } else {
        setSidebarMouseEnterIdentifier(base);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [AdditionalShow.data, SidebarMouseEnterIdentifier]
  );

  // useEffect(() => {
  //   if (AdditionalShow) {
  //     dispatch(setAdditionalShow(false));
  //     setTimeout(() => {
  //       dispatch(setAdditionalShow(true));
  //     }, 300);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [SidebarMouseEnterIdentifier]);

  const handleMouseClose = useCallback(() => {
    dispatch(setAdditionalShow(false));

  }, []);
  const createClickHandler = useCallback(
    (identifier: string) => () => {
      toggleSidebar(identifier);
      // setLoading(true);
      dispatch(setAdditionalInfoOption("პროფილი"));
      localStorage.setItem("additionalInfoState", "პროფილი");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
   const logOutHandler = async () => {
    try {
      await axios.get(`${apiUrl}/users/LogOut`, {
        params: {
          taskId: authenticatedUserInfo.id,
        },
        withCredentials: true,
      });
      window.location.href = "https://localhost:3000/";
      }catch(err) {
      console.error(err)
    }
   }
  return (
    <div className="w-[5.6%] min-w-[83px]">
      <div className="flex w-[5%] min-w-[80.5px] h-90% min-h-[600px] fixed z-[40] ">
        <aside
          className={` w-full h-full bg-sidebarChoose flex flex-col items-center shadow-bottom-right`}
        >
          <img src={MainLogo} className="w-[70%] mt-[30%]" alt="logo"></img>
          <nav className="w-[60%] h-[40%] mt-[40%]">
            <NavItem
              icon={Base}
              alt="base"
              NavIsActive={sidebarStateIdentifier === "base"}
              onMouseEnter={handleMouseEnter}
            />
            <NavItem
              icon={Dashboard}
              alt="dashboard"
              NavIsActive={sidebarStateIdentifier === "dashboard"}
              onMouseEnter={handleMouseEnter}
            />
            <NavItem
              icon={Settings}
              alt="settings"
              NavIsActive={sidebarStateIdentifier === "settings"}
              onMouseEnter={handleMouseEnter}
            />
            <NavItem
              icon={MyProfile}
              alt="profile"
              NavIsActive={sidebarStateIdentifier === "profile"}
              onClick={createClickHandler("profile")}
              onMouseEnter={handleMouseClose}
            />
            <NavItem icon={Leave} alt="leave" onClick={() => logOutHandler()} onMouseEnter={handleMouseClose} />
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default MainSidebar;
