import React, { useCallback, useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import MainFooter from "../../components/main/MainFooter";
import MainMain from "../../components/main/MainMain";
import { AdditionalInfoOfBase } from "../../components/main/subComponents/sidebar/sidebarComponents/AdditionalInfoOfBase";
import { OptionFromAdditionalBaseProvider } from "../../contextApis/ContextChooseFromAdditional";

const Main: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleIsActive = useCallback((e: boolean) => {
    setIsActive(e);
  }, []);
  return (
    <div className="w-screen h-screen ">
      <div className="w-full  h-[90%] flex">
        <OptionFromAdditionalBaseProvider>
          <MainSidebar setIsActive={handleIsActive} isActive={isActive} />
          <AdditionalInfoOfBase
            isActive={isActive}
            setIsActive={handleIsActive}
          />

          <MainMain />
        </OptionFromAdditionalBaseProvider>
      </div>

      <MainFooter />
    </div>
  );
};

export default Main;
