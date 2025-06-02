import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Pluss from "../../../assets/images/main/plus.webp";
import { setConfigureUsersHeaderButOptions } from "../../../redux/reducers/ConfigureUsersHeaderButOptions";
import { UseContextAuthenticatedUserInfo } from "../../../contextApis/ContextAuthenticatedUserInfo";
import { setBaseSubcomponentsShown } from "../../../redux/reducers/BaseSubcomponentsShown";
export const Plus: React.FC<{
  identifier: string;
  handleClickAddObjectButton: () => void;
}> = memo(({ identifier, handleClickAddObjectButton }) => {
  const isShownData = useSelector(
    (state: RootState) =>
      state.baseSubComponentOptionsShown.baseSubComponentsState
  );
  
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { authenticatedUserInfo } = UseContextAuthenticatedUserInfo();

  const dispatch = useDispatch();
  const ConfigureUsersHeaderButOption = useSelector(
    (state: RootState) => state.ConfigureUsersHeaderButOptionSetter
  );

  const handleClickAddButton = useCallback(() => {
    dispatch(
      setConfigureUsersHeaderButOptions({
        show: true,
        identifier: "AddButton",
      })
    );
  }, [ConfigureUsersHeaderButOption]);

  useEffect(() => {
    console.log(isShownData);
  },[isShownData]);
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );

  useEffect(() => {
    if (isChoosed !== -1) {
      setShowDropdown(false);
    }
  }, [isChoosed]);

  const handleClick = (arg: any) => {
    setShowDropdown(false);
  };
  return (
    <div
      className={` h-full w-[7%] min-w-[30px]  ${
        identifier === "base" && "z-30"
      } relative`}
    >
      <button
        onClick={() => {
          if (identifier === "base") {
            if (
              isChoosed !== -1 &&
              [1, 2].includes(authenticatedUserInfo.level)
            ) {
              setShowDropdown(!showDropdown);
            } else if (authenticatedUserInfo.level === 7) {
              dispatch(setBaseSubcomponentsShown("addObject"));
            }
          } else if (identifier === "Settings") {
            handleClickAddButton();
          }
        }}
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1 &&
          identifier === "base" &&
          authenticatedUserInfo.level !== 7
            ? "opacity-20 cursor-not-allowed "
            : "opacity-85 hover:opacity-70 cursor-pointer"
        } bg-sidebarChoose h-full rounded-[14%] w-full border-[2px] border-solid border-sidebarChoose flex justify-center items-center  shadow-bottom
          `}
      >
        <img className="w-70% h-70% object-contain" src={Pluss} alt="plus" />
      </button>

      {showDropdown && (
        <div className="bg-loginBackground absolute top-full w-[200px] mt-[20%] h-[100px] border-[1px] border-solid border-sidebarChoose rounded-sm font-bold">
          <p
            className=" text-sidebarChoose text-[13px] h-1/2 flex justify-center items-center border-b-sidebarChoose border-b-[1px] cursor-pointer "
            onClick={(arg) => handleClick(arg)}
          >
            დოკუმენტის გენერირება
          </p>
          <p
            className=" text-sidebarChoose text-[13px] h-1/2 flex justify-center items-center  cursor-pointer"
            onClick={(arg) => handleClick(arg)}
          >
            ატვირთვა
          </p>
        </div>
      )}
    </div>
  );
});
