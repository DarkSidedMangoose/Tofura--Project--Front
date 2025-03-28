import React, { useState, useCallback, useEffect } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Base from "../../assets/images/main/base.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./MainAnimations.css";
import { NavItem } from "./subComponents/sidebar/sidebarComponents/SidebarNavItem";
import { handleSidebarClick } from "./subComponents/sidebar/SidebarFunctions";
import { useSidebarMouseEnterProvider } from "../../contextApis/ContextMouseEnterIdentifier";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAdditionalInfoOption } from "../../redux/reducers/AdditionalDropdownOption";
import { setLoadingTrue } from "../../redux/reducers/LoadingScreen";
import Leave from "../../assets/images/main/leave.png";

export interface mainSidebarProps {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
}

const MainSidebar: React.FC<mainSidebarProps> = ({ setIsActive, isActive }) => {
  const dispatch: AppDispatch = useDispatch();

  const { SidebarMouseEnterIdentifier, setSidebarMouseEnterIdentifier } =
    useSidebarMouseEnterProvider();

  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  const [sidebarStateIdentifier, setSidebarStateIdentifier] =
    useState<string>("base");

  const setLoading = (data: boolean) => {
    dispatch(setLoadingTrue(data));
  };
  const setOption = (data: string) => {
    dispatch(setAdditionalInfoOption(data));
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
      if (isActive === false) {
        setIsActive(true);
      }
      if (SidebarMouseEnterIdentifier === base) {
      } else {
        setSidebarMouseEnterIdentifier(base);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isActive, SidebarMouseEnterIdentifier]
  );

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
      setTimeout(() => {
        setIsActive(true);
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SidebarMouseEnterIdentifier]);

  const createClickHandler = useCallback(
    (identifier: string) => () => {
      toggleSidebar(identifier);
      setLoading(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="w-[5.6%] min-w-[83px]">
      <div className="flex w-[5%] min-w-[80.5px] h-90% min-h-[600px] fixed z-[52] ">
        <aside
          className={`z-10 w-full h-full bg-sidebarChoose flex flex-col items-center shadow-bottom-right`}
        >
          <img src={MainLogo} className="w-[70%] mt-[30%]" alt="logo"></img>
          <nav className="w-[60%] h-[40%] mt-[40%]">
            <NavItem
              icon={Base}
              alt="Base"
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
              icon={MyProfile}
              alt="profile"
              NavIsActive={sidebarStateIdentifier === "profile"}
              onClick={createClickHandler("profile")}
            />
            <NavItem icon={Leave} alt="leave" />
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default MainSidebar;
