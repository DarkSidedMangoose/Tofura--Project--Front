import React, { useCallback, useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import MainFooter from "../../components/main/MainFooter";
import MainMain from "../../components/main/MainMain";
import { AdditionalInfo } from "../../components/main/subComponents/sidebar/sidebarComponents/AdditionalInfo";
// import { OptionFromAdditionalBaseProvider } from "../../contextApis/ContextChooseFromAdditional";
import ContextMouseEnterIdentifier from "../../contextApis/ContextMouseEnterIdentifier";
import { SignalRProvider } from "../../contextApis/ContextSignalR";
import ContextAuthenticatedUserInfo from "../../contextApis/ContextAuthenticatedUserInfo";

const Main: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleIsActive = useCallback((e: boolean) => {
    setIsActive(e);
  }, []);

  return (
    <div className="w-screen h-screen ">
      <div className="w-full  h-[90%] flex">
        {/* <OptionFromAdditionalBaseProvider> */}
        <SignalRProvider>
        <ContextAuthenticatedUserInfo>

          <ContextMouseEnterIdentifier>
            <MainSidebar setIsActive={handleIsActive} isActive={isActive} />
            <AdditionalInfo  />

            <MainMain />
          </ContextMouseEnterIdentifier>
          </ContextAuthenticatedUserInfo>
        </SignalRProvider>
      </div>

      <MainFooter />
    </div>
  );
};

export default Main;
