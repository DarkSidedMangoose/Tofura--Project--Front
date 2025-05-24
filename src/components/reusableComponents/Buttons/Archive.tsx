import { Fragment, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Archives from "../../../assets/images/main/archive.webp";

export const Archive: React.FC = memo(() => {
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );

  return (
    <Fragment>
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1
            ? "opacity-20 cursor-not-allowed "
            : "opacity-100 cursor-pointer hover:opacity-70  "
        } bg-white h-full rounded-[14%] w-[7%] min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom`}
      >
        <img
          className="w-60% h-60% object-contain"
          src={Archives}
          alt="search"
        />
      </button>
    </Fragment>
  );
});
