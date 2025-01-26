import React, { memo, useCallback, useEffect, useState } from "react";
import { debounce } from "./sidebarFunctions";
import "../../mainAnimations.css";

// subComponents of sidebar they will be used as an icons and multiple times because i used there memo hook to avoid re-rendering and optimization overload
export interface NavItemProps {
  icon: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}
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

// subComponentOfSidebarAdditionalInfo

interface AdditionalInfoOfBaseProps {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
}
interface AdditionalInfoOfBaseStates {
  baseInfoP: string[];
  baseInfoChoose: string;
  baseInfoNdP: string[];
}

export const AdditionalInfoOfBase: React.FC<AdditionalInfoOfBaseProps> = ({
  isActive,
  setIsActive,
}) => {
  // sidebar handling to show and hide via css and handling classname changes

  // for fix sidebar animation i need screen width and height because if will be width under 1600px  i need different width for animation and i used for it
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //it's for make code more cleaner and i map them to make code more less and cleaner
  const [baseState, setBaseState] = useState<AdditionalInfoOfBaseStates>({
    baseInfoP: [
      "ობიექტების რეესტრი",
      "ინსპექტირების ობიექტები",
      "შემოწმებული ობიექტების რეესტრი",
    ],
    baseInfoChoose: "ობიექტების რეესტრი",
    baseInfoNdP: [
      "ახალი ობიექტები",
      "შემოწმებული ობიექტები",
      "წაშლილი ობიექტები",
    ],
  });

  //improving performance with debouncing
  const handleResize = useCallback(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  useEffect(() => {
    const debounceResize = debounce(handleResize, 100);
    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, [handleResize]);
  // for handle base sidebar additional info shown and hide

  const getSidebarClass = () => {
    if (isActive && windowDimensions.width > 1600) {
      return "sidebarBaseInfoShownUp1600pxRight-div";
    } else if (!isActive && windowDimensions.width > 1600) {
      return "sidebarBaseInfoCloseUp1600pxLeft-div";
    } else if (isActive && windowDimensions.width < 1600) {
      return "sidebarBaseInfoCloseDown1600pxRight-div";
    } else {
      return "sidebarBaseInfoCloseDown1600pxLeft-div";
    }
  };
  return (
    <div
      className={`z-0 ${getSidebarClass()}  h-90% min-h-[600px] bg-white shadow-bottom-right  rounded-br-2xl  justify-center items-center fixed ml-[5%]   `}
      onMouseLeave={() => setIsActive(false)} // for handle sidebar close while mouse leave that div
    >
      <div
        className={`${
          !isActive ? "nones" : "flex"
        } w-90% h-[90%]  flex-col space-y-8   `} //nones is in css and means display:none and it handle for when animation is closing, this text what is in that div is show and when sidebar closing doesn't have good look of  animation because of it that div need to set as a none display
      >
        <div className="space-y-24">
          <section className="flex flex-col space-y-4  ">
            <h1 className="flex justify-center text-blue-950 font-bold">
              მონაცემთა ბაზები
            </h1>
            {baseState.baseInfoP.map((info, index) => (
              <p
                className={`${
                  baseState.baseInfoChoose === info //if there is choose one of base it look more boldly and make have mini animation and this classnames are for that
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={() =>
                  setBaseState((prev) => ({
                    ...prev,
                    baseInfoChoose: info,
                  }))
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
                  baseState.baseInfoChoose === info //same purpose what is in top but there is different bases
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={
                  () =>
                    setBaseState((prev) => ({
                      ...prev,
                      baseInfoChoose: info,
                    })) // it's for identify if in additional bases option has choose, and  when choose option it make more bolder and animate it a little bit
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
