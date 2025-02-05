import React, { Fragment, useEffect } from "react";
import "../../../MainAnimations.css";
import { useMainLoading } from "../../../../../contextApis/ContextLoading";
import { useAdditionalOption } from "../../../../../contextApis/ContextChooseFromAdditional";
import { baseState } from "./SidebarObjects";
import { useSidebarMouseEnterProvider } from "../../../../../contextApis/ContextMouseEnterIdentifier";
interface AdditionalInfoOfBaseProps {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
}

export const AdditionalInfoOfBase: React.FC<AdditionalInfoOfBaseProps> = ({
  isActive,
  setIsActive,
}) => {
  const { SidebarMouseEnterIdentifier } = useSidebarMouseEnterProvider();
  useEffect(() => {
    console.log(SidebarMouseEnterIdentifier);
  }, [SidebarMouseEnterIdentifier]);
  return (
    <div
      className={`z-[51] ${
        isActive ? "w-[18%] narrow:w-[330px] flex" : "w-[0%]"
      }  h-90% min-h-[600px] bg-white shadow-bottom-right  rounded-br-2xl  justify-center items-center fixed ml-[5%] transition-width    `}
      onMouseLeave={() => setIsActive(false)} // for handle sidebar close while mouse leave that div
    >
      <div
        className={`${
          !isActive ? "nones" : "shown narrow:ml-[30px]"
        } w-90% h-[90%]   flex-col space-y-8   `} //nones is in css and means display:none and it handle for when animation is closing, this text what is in that div is show and when sidebar closing doesn't have good look of  animation because of it that div need to set as a none display
      >
        {SidebarMouseEnterIdentifier === "Base" ? (
          <Fragment>
            <AdditionalInfoOfBaseSub />
          </Fragment>
        ) : SidebarMouseEnterIdentifier === "dashboard" ? (
          <Fragment>s</Fragment>
        ) : null}
      </div>
    </div>
  );
};

const AdditionalInfoOfBaseSub: React.FC = () => {
  const { isOption, setOption } = useAdditionalOption();
  const { setLoading } = useMainLoading();
  return (
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
  );
};
