import React, { useState } from "react";

export const MainMainMainSectionHeader: React.FC = () => {
  const [state] = useState<string[]>([
    "ს/კ",
    "სრული დასახელება",
    "რეგიონი",
    "მისამართი",
    "ბრუნვა",
    "საქმიანობის დასახელება",
    "რისკის დონე",
  ]);
  return (
    <div className="w-full grid grid-cols-7 h-10%  border-[1px] text-white rounded-tl-lg rounded-tr-lg bg-sidebarChoose  ">
      {state.map((e, i) => (
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

export default MainMainMainSectionHeader;
