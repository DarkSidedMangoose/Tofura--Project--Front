import React, { useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import MainFooter from "../../components/main/mainFooter";
import MainMain from "../../components/main/mainMain";
import { AdditionalInfoOfBase } from "../../components/main/subComponents/sidebar/sidebarSubComponents";

const Main: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen ">
      <div className="w-full  h-[90%] flex">
        <MainSidebar
          setIsActive={(e) => {
            setIsActive(e);
          }}
          isShown={isShown}
        />
        <AdditionalInfoOfBase
          isActive={isActive}
          isShown={(e) => {
            setIsShown(e);
          }}
        />
        <MainMain />
      </div>
      <MainFooter />
    </div>
  );
};

export default Main;
