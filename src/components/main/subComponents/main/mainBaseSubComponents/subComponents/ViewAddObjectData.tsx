import React, { Fragment } from 'react'
import  IncomeRevenue  from "../../../../../../assets/images/main/incomeRevenue.webp";
import  PublicBusiness  from "../../../../../../assets/images/main/publicBusiness.webp";
import  PublicEconomics  from "../../../../../../assets/images/main/publicEconomic.webp";
import  WorkingInspect  from "../../../../../../assets/images/main/WorkingInspect.webp";

const ViewAddObjectData:React.FC = () => {
  const datas = {
    address: [
      {
        name: "იურიდიული მისამართი",
        id: "iurAddress",
      },
      {
        name: "იურიდიული მისამართი ქუჩის",
        id: "iurAddressYard",
      },

      {
        name: "ფაქტობრივი მისამართი",
        id: "factAddress",
      },

      {
        name: "იურიდიული მისამართი ქუჩის",
        id: "factAddressYard",
      },

      {
        name: "საფოსტო ინდექსი",
        id: "mailIndex",
      },

      {
        name: "ფაქტობრივი საქმიანობის განხორციელების მისამართები",
        id: "factActivityAddress",
      },
    ],
    activity: [
      {
        name: "საქმიანობის კოდი",
        id: "activityCode",
      },
      {
        name: "საქმიანობის დასახელება",
        id: "activityName",
      },
      {
        name: "დამჯგუფებელი დასახელება",
        id: "groupedName",
      },
      {
        name: "რისკის დონე",
        id: "riskLevel",
      },
    ],
    justiceForm: [
      {
        name: "მარეგისტრირებელი ორგანო",
        type: "text",
        id: "registeringOrgan",
      },
      {
        name: "სამართლებრივი ფორმა",
        type: "select",
        id: "registeringOrgan",
      },
      {
        name: "სახელმწიფო რეგისტრაციის თარიღი",
        type: "date",
        id: "registeringOrgan",
      },
      {
        name: "ბოლო ცვლილების თარიღი",
        type: "date",
        id: "registeringOrgan",
      },
    ],
    payerInfo: [
      {
        name: "დღგს გადამხდელი",
        type: "checkbox",
        id: "payerInfo1",
      },
      {
        name: "ფიზიკური პირის შემოსავლები:",
        type: "radio",
        id: "payerInfo2",
        options: [">100 000", "<100 000"],
      },
      {
        name: "იურიდიული პირის ბრუნვა:",
        type: "radio",
        id: "payerInfo3",
        options: [">100 000", "<100 000"," 100 000 - 500 000"],
      },
      {name: "დასაქმებულ პირთა რაოდენობა", type: "select", id: "payerInfo4"},
    ],
  };
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col fixed top-0 left-0  z-[100] justify-center items-center bg-[#d8d5d59a]">
      <header className="w-[900px] h-[50px] flex items-center justify-center bg-sidebarChoose rounded-tl-lg rounded-tr-lg shadow-lg">
        <h1 className="text-[18px] font-semibold text-white">
          ობიექტის დამატება
        </h1>
      </header>
      <div className="w-[900px] h-[700px] flex flex-col gap-8 bg-white p-10 rounded-bl-lg rounded-br-lg shadow-lg overflow-y-scroll text-[11px]  ">
        <div className="w-full  min-h-[100px] flex justify-between ">
          <div className="w-2/4 h-full flex flex-col gap-4 ">
            <div className="flex  gap-[5%] w-full  h-1/2 items-center ">
              <input
                type="text"
                className="border-[1px] border-gray-400 h-full w-1/2 px-1 outline-none "
                placeholder="საიდენტიფიკაციო"
              />
              <input
                type="text"
                placeholder="სრული დასახელება"
                className="border-[1px] border-gray-400 h-full w-1/2 px-1 outline-none"
              />
              <img src={PublicBusiness} className="h-[24px]" alt="icon" />
            </div>
            <div className="flex  gap-[5%] h-1/2 w-full items-center ">
              <input
                type="text"
                className="border-[1px] border-gray-400 h-full px-1 w-1/2 outline-none "
                placeholder="მშობელი ორგანიზაცია"
              />
              <input
                type="text"
                placeholder="სრული დასახელება"
                className="border-[1px] border-gray-400 h-full w-1/2 px-1 outline-none"
              />
              <img src={PublicBusiness} className="h-[24px]" alt="icon" />
            </div>
          </div>
          <div className="w-[25%] flex justify-between ">
            <div className="p-4 border-[1px] border-blue-500 rounded-lg w-[60px] h-[50px] flex justify-center items-center hover:opacity-70 duration-200 transition-all cursor-pointer">
              <img src={PublicEconomics} className="h-[22px]" alt="icon" />
            </div>
            <div className="p-4 border-[1px] border-blue-500 rounded-lg w-[60px] h-[50px] flex justify-center items-center hover:opacity-70  duration-200 transition-all cursor-pointer">
              <img src={PublicBusiness} className="h-[22px]" alt="icon" />
            </div>
            <div className="p-4 border-[1px] border-blue-500 rounded-lg w-[60px] h-[50px] flex justify-center items-center hover:opacity-70  duration-200 transition-all cursor-pointer">
              <img src={IncomeRevenue} className="h-[22px]" alt="icon" />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-between">
          <div className="w-[42%] flex flex-col justify-between  gap-8">
            <div className="w-full flex flex-col border-[1px] h-auto rounded-lg border-[#6c6c72]  p-4 text-[#0d1639]">
              <h1 className=" text-[15px] py-2 border-b-2 border-[#11277e] font-semibold">
                ორგანიზაციის მისამართები
              </h1>
              {datas.address.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 mt-2 w-full min-h-[70px]"
                >
                  <label
                    htmlFor={data.id}
                    className="text-[12px] font-semibold min-h-1/4"
                  >
                    {data.name}
                  </label>
                  <input
                    type="text"
                    id={data.id}
                    className="w-full min-h-[40px] border-[2px] border-gray-400"
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-auto border-[1px] rounded-lg border-[#6c6c72] flex flex-col  p-4 text-[#0d1639]">
              <h1 className="text-[15px]  py-2 border-b-2 border-[#11277e] font-semibold">
                საქმიანობის ინფორმაცია
              </h1>
              {datas.activity.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 mt-2 w-full min-h-[70px]"
                >
                  <label
                    htmlFor={data.id}
                    className="text-[12px] font-semibold h-1/4"
                  >
                    {data.name}
                  </label>
                  <input
                    type="text"
                    id={data.id}
                    className="w-full h-3/4 min-h-[40px] border-[2px] border-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[42%] flex flex-col   gap-8">
            <div className="w-full h-auto border-[1px] rounded-lg border-[#6c6c72] flex flex-col  p-4 text-[#0d1639]">
              <h1 className="text-[15px]  py-2 border-b-2 border-[#11277e] font-semibold">
                საქმიანობის ფორმა
              </h1>
              {datas.justiceForm.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 mt-2 w-full min-h-[70px]"
                >
                  {data.type === "select" ? (
                    <div className="flex flex-col gap-2 w-full h-full">
                      <label
                        htmlFor={data.id}
                        className="text-[12px] font-semibold h-აუტო"
                      >
                        {data.name}
                      </label>
                      <select
                        id={data.id}
                        className="w-full h-3/4 border-[2px] min-h-[40px] border-gray-400"
                      >
                        <option value="">{data.name}</option>
                        <option value="option1">ოპცია 1</option>
                        <option value="option2">ოპცია 2</option>
                      </select>
                    </div>
                  ) : (
                    <>
                      <label
                        htmlFor={data.id}
                        className="text-[12px] font-semibold h-1/4"
                      >
                        {data.name}
                      </label>
                      <input
                        type={data.type}
                        id={data.id}
                        className="w-full h-3/4 border-[2px] min-h-[40px] border-gray-400"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-auto border-[1px] rounded-lg border-[#6c6c72] flex flex-col  p-4 text-[#0d1639]">
              <h1 className="text-[15px]  py-2 border-b-2 border-[#11277e] font-semibold">
                გადასახადის გადამხდელის ინფორმაცია
              </h1>
              {datas.payerInfo.map((data, index) => (
                <Fragment>
                  {data.type === "checkbox" ? (
                    <div key={index} className="flex items-center gap-2 mt-2">
                      <input type="checkbox" id={data.id} className="w-4 h-4" />
                      <label
                        htmlFor={data.id}
                        className="text-[12px] font-semibold"
                      >
                        {data.name}
                      </label>
                    </div>
                  ) : data.type === "radio" ? (
                    <div
                      key={index}
                      className="flex flex-col gap-2 mt-2 w-full min-h-[70px]"
                    >
                      <label
                        htmlFor={data.id}
                        className="text-[12px] font-semibold h-1/4"
                      >
                        {data.name}
                      </label>
                      <div className="flex flex-col justify-center gap-2">
                        {data.options?.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className="flex items-center gap-2"
                          >
                            <input
                              type="radio"
                              id={`${data.id}-${optIndex}`}
                              name={data.id}
                              className="w-4 h-4"
                            />
                            <label
                              htmlFor={`${data.id}-${optIndex}`}
                              className="text-[12px] font-semibold"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    data.type === "select" && (
                      <div
                        key={index}
                        className="flex flex-col gap-2 mt-2 w-full min-h-[70px]"
                      >
                        <label
                          htmlFor={data.id}
                          className="text-[12px] font-semibold h-1/4"
                        >
                          {data.name}
                        </label>
                        <select
                          id={data.id}
                          className="w-1/5 h-3/4 border-[2px] border-gray-400"
                        >
                          <option value="option1">1</option>
                          <option value="option2">2</option>
                        </select>
                      </div>
                    )
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAddObjectData
