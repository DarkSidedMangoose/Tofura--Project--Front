import React, { Fragment, useEffect } from "react";
import "../../../MainAnimations.css";
// import { useMainLoading } from "../../../../../contextApis/ContextLoading";
// import { useAdditionalOption } from "../../../../../contextApis/ContextChooseFromAdditional";
import {
  AdditionalInfoOfSettingsStates,
  AdditionalInfoOfBaseStates,
  AdditionalInfoOfDashboardStates,
  settingsState,
  baseState,
  dashboardState,
} from "./SidebarObjects";
import { useSidebarMouseEnterProvider } from "../../../../../contextApis/ContextMouseEnterIdentifier";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { setAdditionalInfoOption } from "../../../../../redux/reducers/AdditionalDropdownOption";

interface AdditionalInfoOfBaseProps {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
}

export const AdditionalInfo: React.FC<AdditionalInfoOfBaseProps> = ({
  isActive,
  setIsActive,
}) => {
  const { SidebarMouseEnterIdentifier } = useSidebarMouseEnterProvider();

  return (
    <div
      className={`z-[60] ${
        isActive ? "w-[18%] narrow:w-[330px] flex" : "w-[0%]"
      }  h-90% min-h-[600px] bg-loginBackground shadow-bottom-right  rounded-br-2xl  justify-center items-center fixed  ml-[90px] 2xl:ml-[5%] transition-width    `}
      onMouseLeave={() => setIsActive(false)} // for handle sidebar close while mouse leave that div
    >
      <div
        className={`${
          !isActive ? "nones" : "shown "
        } w-90% h-[90%]   flex-col space-y-8   `} //nones is in css and means display:none and it handle for when animation is closing, this text what is in that div is show and when sidebar closing doesn't have good look of  animation because of it that div need to set as a none display
      >
        <AdditionalInfoOfSidebar
          alt={SidebarMouseEnterIdentifier}
          state={
            SidebarMouseEnterIdentifier === "base"
              ? baseState
              : SidebarMouseEnterIdentifier === "dashboard"
              ? dashboardState
              : settingsState
          }
        />
      </div>
    </div>
  );
};

const AdditionalInfoOfSidebar: React.FC<{
  alt: string;
  state:
    | AdditionalInfoOfSettingsStates
    | AdditionalInfoOfBaseStates
    | AdditionalInfoOfDashboardStates;
}> = ({ state, alt }) => {
  const dispatch: AppDispatch = useDispatch();
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  const setOption = (data: string) => {
    dispatch(setAdditionalInfoOption(data));
    localStorage.setItem("additionalInfoState", data);
  };
  return (
    <div className="space-y-24 w-full flex justify-center">
      <section className="flex flex-col space-y-4 w-full  ">
        <h1 className="flex w-full justify-center items-center text-blue-950 font-bold ">
          {alt === "base"
            ? "მონაცემთა ბაზები"
            : alt === "dashboard"
            ? "საინფორმაციო დაფა"
            : alt === "settings" && "პარამეტრები"}
        </h1>
        {state.InfoP.map((info, index) => (
          <p
            className={`${
              isOption === info //same purpose what is in top but there is different bases
                ? "font-bold sidebarAdditionalInfoChoose "
                : " sidebarAdditionalInfoChooseOff"
            } text-[0.9rem] cursor-pointer text-blue-950 `}
            key={index}
            onClick={() => {
              setOption(info);
            }}
          >
            {info}
          </p>
        ))}

        {alt === "base" && (
          <section className="flex flex-col space-y-4  ">
            <h1 className="flex justify-center text-blue-950 font-bold">
              დამატებითი ბაზები
            </h1>
            {baseState.InfoNdP.map((info, index) => (
              <p
                className={`${
                  isOption === info //same purpose what is in top but there is different bases
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={() => {
                  setOption(info);
                }}
              >
                {info}
              </p>
            ))}
          </section>
        )}
      </section>
    </div>
  );
};
