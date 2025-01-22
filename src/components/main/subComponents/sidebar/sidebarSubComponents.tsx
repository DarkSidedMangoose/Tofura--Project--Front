import React, { memo, useEffect, useState } from "react";
import {
  NavItemProps,
  AdditionalInfoOfBaseProps,
  AdditionalInfoOfBaseStates,
} from "./sidebarInterfaces";
import "../../mainAnimations.css";
// subComponentOfSidebarIcons
export const NavItem: React.FC<NavItemProps> = memo(
  ({ icon, alt, isActive, onClick, onMouseEnter }) => {
    return (
      <div
        onClick={onClick}
        className={`w-full h-1/5 flex justify-center items-center rounded-[100%] hover:opacity-70 cursor-pointer ${
          isActive ? "bg-blue-900" : ""
        }`}
        onMouseEnter={onMouseEnter}
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
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [shown, setShown] = useState(isActive);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setShown(isActive);
  }, [isActive]);

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
        shown && windowDimensions.width > 1600
          ? "sidebarBaseInfoShown-div "
          : "sidebarBaseInfoClose-div "
      }  h-90% min-h-[600px] bg-white shadow-bottom-right  rounded-br-2xl  justify-center items-center fixed ml-[5%]   `}
      onMouseLeave={() => setShown(false)}
    >
      <div
        className={`${
          !shown ? "nones" : "flex"
        } w-90% h-[90%]  flex-col space-y-8   `}
      >
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
                    setBaseState((prev) => ({
                      ...prev,
                      baseInfoChoose: info,
                    })) // to identify which has choose
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
                    setBaseState((prev) => ({
                      ...prev,
                      baseInfoChoose: info,
                    })) // to identify which has choose
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
