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
    <div className="w-98% grid grid-cols-7 h-10% mt-[2%] border-[1px] rounded-[10px] border-blue-950 bg-loginBackground">
      {state.map((e, i) => (
        <div
          key={i}
          className={`flex ${
            i === 0 ? "ml-[5%]" : ""
          } justify-start items-center text-[16px]  text-blue-950 font-bold`}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default MainMainMainSectionHeader;
