import React, { useCallback } from 'react'

const FilterForBase: React.FC<{ onClickClose: () => void }> = ({
  onClickClose,
}) => {
    const onClickCloseHandler = useCallback(() => {
      onClickClose();
    }
    , [onClickClose]);
  return (
    <div className="absolute flex flex-col w-[700px] h-[400px] bg-white top-[100%] left-0 rounded-xl border-2 border-gray-700 p-3 text-[#a5a1a1] gap-[1.5%] justify-between z-50 ">
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
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="სამართლებრივი ფორმა"
          />
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="რეგიონი"
          />
          <div className="h-[30%] w-full flex justify-center items-center ">
            <button className="border-[2px] border-gray-600 text-sidebarChoose w-full h-[60%] rounded-lg text-[14px] hover:opacity-70">
              გასუფთავება
            </button>
          </div>
        </div>
        <div className="flex h-full flex-col w-[33%] gap-[3%] text-[12px] ">
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="ს/კ ან პნ"
          />
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="სრული დასახელება"
          />
          <div className="h-[21%] flex flex-col px-2">
            <p className="font-bold h-[30%] text-sidebarChoose">
              დასაქმებულთა რაოდენობა
            </p>
            <div className="flex w-full justify-center items-center h-[70%] gap-2">
              <button className="w-1/2 h-3/4 border-[1px] border-gray-400 rounded-sm text-sidebarChoose">
                0
              </button>
              <button className="w-1/2 h-3/4 border-[1px] border-gray-400 rounded-sm text-sidebarChoose">
                100
              </button>
            </div>
          </div>
          <div className="h-[35%] items-center flex flex-col ">
            <p className="h-[30%] font-bold text-sidebarChoose ">ბრუნვა:</p>
            <div className="h-[70%] flex flex-col font-bold justify-between text-sidebarChoose">
              <div className="w-full flex">
                <input type="radio" className="mr-2" />
                <p className="text-[12px]"> {"< 100 000"}</p>
              </div>
              <div className="w-full flex">
                <input type="radio" className="mr-2" />
                <p className="text-[12px]"> {"> 100 000  <  500 000"}</p>
              </div>
              <div className="w-full flex">
                <input type="radio" className="mr-2" />
                <p className="text-[12px]"> {"> 500 000"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col w-[33%] gap-[3%] text-[12px] ">
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="ს/კ ან პნ"
          />
          <input
            className="border-[1px] border-gray-400 h-[15%] rounded-sm outline-none px-3"
            placeholder="სრული დასახელება"
          />
          <div className="h-[28%] flex flex-col font-bold items-center text-sidebarChoose">
            <p className="h-1/3">თარიღი</p>
            <button className="h-2/3 w-2/3 border-[1px] rounded-lg border-gray-400 ">
              26/05/2025
            </button>
          </div>
          <div className="h-[30%] flex  w-full items-end gap-2 text-[14px] ">
            <button className="h-1/2 w-1/2 border-[2px] border-gray-600 rounded-md text-sidebarChoose" onClick={onClickCloseHandler}>
              გაუქმება
            </button>
            <button className="h-1/2 w-1/2 border-[2px] rounded-md border-gray-600 text-white bg-sidebarChoose">
              ძიება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForBase
