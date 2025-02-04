import React, { useCallback, useEffect, useState, useRef } from "react";
import { debounce } from "../SidebarFunctions";
import "../../../MainAnimations.css";
import { useMainLoading } from "../../../../../contextApis/ContextLoading";
import { useAdditionalOption } from "../../../../../contextApis/ContextChooseFromAdditional";
import { baseState } from "./SidebarObjects";
interface AdditionalInfoOfBaseProps {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
}

type Direction = boolean | null;

export const AdditionalInfoOfBase: React.FC<AdditionalInfoOfBaseProps> = ({
  isActive,
  setIsActive,
}) => {
  const { isOption, setOption } = useAdditionalOption();
  const { setLoading } = useMainLoading();
  //to identify on classname which has changed
  const [identifyClassName, setIdentifyClassName] = useState<string>(""); // to identify when width and height change doesnt happend animation bug
  const directionRef = useRef<Direction>(null); // for avoid re-rendering in useEffect function
  // for fix sidebar animation i need screen width and height because if will be width under 1600px  i need different width for animation and i used for it
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
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

  // for fix base sidebar additional info shown and hide animation
  useEffect(() => {
    if (isActive && windowDimensions.width > 1600) {
      if (directionRef.current === null || directionRef.current === false) {
        setIdentifyClassName("sidebarBaseInfoShownUp1600pxRight-div");
        directionRef.current = true;
      } else if (directionRef.current === true) {
        setIdentifyClassName("sidebarBaseInfoShownUp1600pxRight-div-fixed");
      }
    } else if (!isActive && windowDimensions.width > 1600) {
      if (directionRef.current === null || directionRef.current === true) {
        setIdentifyClassName("sidebarBaseInfoCloseUp1600pxLeft-div");
        directionRef.current = false;
      } else if (directionRef.current === false) {
        setIdentifyClassName("sidebarBaseInfoCloseUp1600pxLeft-div-fixed");
      }
    } else if (isActive && windowDimensions.width < 1600) {
      if (directionRef.current === null || directionRef.current === false) {
        setIdentifyClassName("sidebarBaseInfoCloseDown1600pxRight-div");
        directionRef.current = true;
      } else if (directionRef.current === true) {
        setIdentifyClassName("sidebarBaseInfoCloseDown1600pxRight-div-fixed");
      }
    } else if (!isActive && windowDimensions.width < 1600) {
      if (directionRef.current === null || directionRef.current === true) {
        setIdentifyClassName("sidebarBaseInfoCloseDown1600pxLeft-div");
        directionRef.current = false;
      } else if (directionRef.current === false) {
        setIdentifyClassName("sidebarBaseInfoCloseDown1600pxLeft-div-fixed");
      }
    }
  }, [isActive, windowDimensions.width]);

  return (
    <div
      className={`z-[51] ${identifyClassName}  h-90% min-h-[600px] bg-white shadow-bottom-right  rounded-br-2xl  justify-center items-center fixed ml-[5%]   `}
      onMouseLeave={() => setIsActive(false)} // for handle sidebar close while mouse leave that div
    >
      <div
        className={`${
          !isActive ? "nones" : "flex"
        } w-90% h-[90%]   flex-col space-y-8   `} //nones is in css and means display:none and it handle for when animation is closing, this text what is in that div is show and when sidebar closing doesn't have good look of  animation because of it that div need to set as a none display
      >
        <div className="space-y-24">
          <section className="flex flex-col space-y-4  ">
            <h1 className="flex justify-center text-blue-950 font-bold">
              მონაცემთა ბაზები
            </h1>
            {baseState.baseInfoP.map((info, index) => (
              <p
                className={`${
                  isOption === info //if there is choose one of base it look more boldly and make have mini animation and this classnames are for that
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={() => {
                  setOption(info);

                  setLoading(true);
                }}
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
                  isOption === info //same purpose what is in top but there is different bases
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={() => {
                  setOption(info);

                  setLoading(true);
                }}
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
