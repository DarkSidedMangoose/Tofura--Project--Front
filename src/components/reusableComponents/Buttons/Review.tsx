import { Fragment, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Reviews from "../../../assets/images/main/review.webp";

export const Review: React.FC = memo(() => {
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
            : "opacity-100 cursor-pointer hover:opacity-70 "
        } bg-white flex gap-[2%] items-center w-auto min-w-[170px] px-2 h-full rounded-[8px] border-[2px] border-solid border-sidebarChoose font-semibold text-sidebarChoose text-[14px] shadow-bottom`}
      >
        <img
          className=" h-60% object-contain ml-[2%]"
          src={Reviews}
          alt="plus"
        />
        <p className="text-sm w-full ">სრულად ნახვა</p>
      </button>
    </Fragment>
  );
});
