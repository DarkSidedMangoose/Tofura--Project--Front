import React, { useCallback, useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import MainFooter from "../../components/main/mainFooter";
import MainMain from "../../components/main/mainMain";
import { AdditionalInfoOfBase } from "../../components/main/subComponents/sidebar/sidebarComponents/AdditionalInfoOfBase";

const Main: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleIsActive = useCallback(
    (e: boolean) => {
      setIsActive(e);
    },
    [setIsActive]
  );

  const handleSetIsActive = useCallback((e: boolean) => {
    setIsActive(e);
  }, []);
  return (
    <div className="w-screen h-screen ">
      <div className="w-full  h-[90%] flex">
        <MainSidebar setIsActive={handleIsActive} isActive={isActive} />
        <AdditionalInfoOfBase
          isActive={isActive}
          setIsActive={handleSetIsActive}
        />
        <MainMain />
      </div>

      <MainFooter />
    </div>
  );
};

export default Main;
