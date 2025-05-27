import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const MainMainHeader: React.FC<{ value: string[] }> = ({value}) => {
  const [headerState, setHeaderState] = useState<string[]>([]);
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  useEffect(() => {
    
    setHeaderState(value)
  }, [isOption, value]);
  return (
    <div className={`w-full grid ${isOption === "მომხმარებლების კონფიგურაცია" 
      ? "grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_50px]" 
      : "grid-cols-7"}  h-full border text-white bg-sidebarChoose rounded-tl-lg rounded-tr-lg`}>
      {/* Your content here */}
    
      {headerState.map((e, i) => (
        <div
          key={i}
          className={`flex items-center justify-start ml-2  text-[14px]   font-semibold`}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default MainMainHeader;