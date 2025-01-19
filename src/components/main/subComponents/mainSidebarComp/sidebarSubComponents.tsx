import React, { memo, useState } from "react";
import {
  NavItemProps,
  AdditionalInfoOfBaseProps,
  AdditionalInfoOfBaseStates,
} from "./sidebarInterfaces";
// subComponentOfSidebarIcons
export const NavItem: React.FC<NavItemProps> = memo(
  ({ icon, alt, isActive, onClick }) => {
    return (
      <div
        onClick={onClick}
        className={`w-full h-1/5 flex justify-center items-center rounded-[100%] hover:opacity-70 cursor-pointer ${
          isActive ? "bg-blue-900" : ""
        }`}
      >
        <div className="w-[40%] aspect-w-1 aspect-h-1">
          <img className="object-contain" src={icon} alt={alt} />
        </div>
      </div>
    );
  }
);
// end of subComponentOfSidebarIcons

// subComponentOfSidebarAdditionalInfo
export const AdditionalInfoOfBase: React.FC<AdditionalInfoOfBaseProps> = ({
  isActive,
}) => {
  const [baseState, setBaseState] = useState<AdditionalInfoOfBaseStates>({
    baseInfoP: [
      "ობიექტების რეესტრი",
      "ინსპექტირების ობიექტები",
      "შემოწმებული ობიექტების რეესტრი",
    ],
    baseInfoChoose: "",
    baseInfoNdP: [
      "ახალი ობიექტები",
      "შემოწმებული ობიექტები",
      "წაშლილი ობიექტები",
    ],
  });
  return (
    <div
      className={`z-0 ${
        isActive ? "sidebarBaseInfoShown-div" : "sidebarBaseInfoClose-div"
      } w-[77%] h-full bg-white shadow-bottom-right rounded-br-2xl flex justify-center items-center  `}
    >
      <div className=" w-90% h-[90%] flex flex-col space-y-8   ">
        <div className="space-y-24">
          <section className="flex flex-col space-y-4  ">
            <h1 className="flex justify-center text-blue-950 font-bold">
              მონაცემთა ბაზები
            </h1>
            {baseState.baseInfoP.map((info, index) => (
              <p
                className={`${
                  baseState.baseInfoChoose === info
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={
                  () =>
                    setBaseState((prev) => ({ ...prev, baseInfoChoose: info })) // to identify which has choose
                }
              >
                {info}
              </p>
            ))}
          </section>
          <section className="flex flex-col space-y-4  ">
            <h1 className="flex justify-center text-blue-950 font-bold">
              დამატებითი ბაზები
            </h1>
            {baseState.baseInfoNdP.map((info, index) => (
              <p
                className={`${
                  baseState.baseInfoChoose === info
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={
                  () =>
                    setBaseState((prev) => ({ ...prev, baseInfoChoose: info })) // to identify which has choose
                }
              >
                {info}
              </p>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
// end of subComponentOfSidebarAdditionalInfo
