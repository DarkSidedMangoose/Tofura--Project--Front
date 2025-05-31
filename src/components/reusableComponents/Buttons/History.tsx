import { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import Historys from "../../../assets/images/main/history.webp";
import { setBaseSubcomponentsShown } from "../../../redux/reducers/BaseSubcomponentsShown";

export const History: React.FC = memo(() => {
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <Fragment>
      <button
        onClick={() => isChoosed !== -1 && dispatch(setBaseSubcomponentsShown("taskLogs"))}
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1
            ? "opacity-20 cursor-not-allowed "
            : "opacity-100 cursor-pointer hover:opacity-70 "
        } bg-white h-full rounded-[14%] w-[7%] min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom`}
      >
        <img
          className="w-60% h-60% object-contain"
          src={Historys}
          alt="History"
        />
      </button>
    </Fragment>
  );
});


