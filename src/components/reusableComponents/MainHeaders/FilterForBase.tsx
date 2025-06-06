import React, { useCallback } from 'react'
import DownArrow from '../../../assets/images/main/down.webp'
import Calendar from "../../../assets/images/main/calendar.webp";

const FilterForBase: React.FC<{ onClickClose: () => void }> = ({
  onClickClose,
}) => {
    const onClickCloseHandler = useCallback(() => {
      onClickClose();
    }
    , [onClickClose]);
  return (
    <div className="absolute flex flex-col w-[700px] h-[400px] bg-white top-[100%] left-0 rounded-xl border-[1px] border-gray-700 p-3 text-[#a5a1a1] gap-[1.5%] justify-between z-50 ">
      <p className="text-[14px] h-[8%] font-bold">კომპლექსური ძებნა</p>
      <input
        placeholder="მიუთითეთ საძიებო სიტყვა..."
        className="w-full h-[12%] border-[1px] border-gray-600 rounded-[4px] outline-none text-[13px] px-3"
      />
      <div className="h-[72%] w-full flex gap-[1.3%] justify-center items-center mt-[3%]">
        <div className="flex h-full flex-col w-[33%] gap-[3%] text-[12px]">
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="ს/კ ან პნ"
          />
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="სრული დასახელება"
          />
          <select
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-2"
            id="n"
            name="dropdown"
            value={"სამართლებრივი ფორმა"}
          >
            <option value={"პირველი ფორმა"}>სამართლებრივი ფორმა</option>
          </select>

          <select
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-2"
            id="n"
            name="dropdown"
            value={"სამართლებრივი ფორმა"}
          >
            <option value={"პირველი ფორმა"}>რეგიონი</option>
          </select>
          <div className="h-[30%] w-full flex justify-center items-center ">
            <button className="border-[2px] border-sidebarChoose font-semibold text-sidebarChoose w-full h-[60%] rounded-lg text-[14px] hover:opacity-70">
              გასუფთავება
            </button>
          </div>
        </div>
        <div className="flex h-full flex-col w-[33%] gap-[3%] text-[12px] ">
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="საქმიანობის კოდი"
          />
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="საქმიანობის დასახელება"
          />
          <div className="h-[21%] flex flex-col px-2">
            <p className="font-bold h-[30%] text-sidebarChoose">
              დასაქმებულთა რაოდენობა
            </p>
            <div className="flex w-full justify-start items-center h-[70%] gap-2">
              <button className="w-1/5 px-[2px] h-3/4 border-[1px] flex  border-gray-400 rounded-sm justify-between items-center text-sidebarChoose">
                0
                <img
                  src={DownArrow}
                  alt="arrow"
                  className="w-[16px] h-[16px]"
                />
              </button>
              <button className="w-1/5 px-[2px] h-3/4 border-[1px] flex  border-gray-400 rounded-sm justify-between items-center text-sidebarChoose">
                100
                <img
                  src={DownArrow}
                  alt="arrow"
                  className="w-[16px] h-[16px]"
                />
              </button>
            </div>
          </div>
          <div className="h-[35%] items-start flex flex-col px-2 ">
            <p className="h-[30%] font-bold text-sidebarChoose ">ბრუნვა:</p>
            <div className="h-[70%] flex flex-col font-bold justify-between text-sidebarChoose">
              <div className="w-full flex">
                <input type="checkbox" className="mr-2" />
                <p className="text-[12px]"> {"< 100 000"}</p>
              </div>
              <div className="w-full flex">
                <input type="checkbox" className="mr-2" />
                <p className="text-[12px]"> {"> 100 000  <  500 000"}</p>
              </div>
              <div className="w-full flex">
                <input type="checkbox" className="mr-2" />
                <p className="text-[12px]"> {"> 500 000"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col w-[33%] gap-[3%] text-[12px] ">
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="რისკის დონე"
          />
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="საქმიანობის გან. მისამართი"
          />
          <div className="h-[28%] flex flex-col font-bold items-start text-sidebarChoose">
            <p className="h-1/3 w-full">თარიღი:</p>
              <input
                type="date" className='border-[1px] border-gray-400 h-2/3 w-2/3' />
              
          </div>
          <div className="h-[30%] flex  w-full items-end gap-2 text-[14px] ">
            <button
              className="h-1/2 w-1/2 border-[2px] border-sidebarChoose font-semibold rounded-md text-sidebarChoose"
              onClick={onClickCloseHandler}
            >
              გაუქმება
            </button>
            <button className="h-1/2 w-1/2 border-[2px] rounded-md border-sidebarChoose font-semibold text-white bg-sidebarChoose">
              ძიება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForBase
