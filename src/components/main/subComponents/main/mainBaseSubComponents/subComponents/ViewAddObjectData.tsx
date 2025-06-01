import React, { Fragment, useEffect, useState } from 'react'
import  IncomeRevenue  from "../../../../../../assets/images/main/incomeRevenue.webp";
import  PublicBusiness  from "../../../../../../assets/images/main/publicBusiness.webp";
import  PublicEconomics  from "../../../../../../assets/images/main/publicEconomic.webp";
import  WorkingInspect  from "../../../../../../assets/images/main/WorkingInspect.webp";
import { useDispatch } from 'react-redux';
import { setBaseSubcomponentsShown } from '../../../../../../redux/reducers/BaseSubcomponentsShown';
import axios from 'axios';



const apiUrl = process.env.REACT_APP_API_BASE_URL;

interface StateTyes {
  addresses: {
    region: string;
    factAddress: string;
    iurAddress: string;
    streetFactAddress: string;
    streetIurAddress: string;
    postalCode: string;
    addressesOfFactActions: []; // Array of addresses for fact activity
  };
  activityinformation: {
    workingCode: string;
    workingDescription: string;
    groupedName: string;
    riskLevel: string;
  };
  activityForm: {
    registerOrgan: string;
    form: string;
    govermentalRegisterDate: string;
    lastChangeDate: string;
  };
  objectIdentifierData: {
    identifyCode: string;
    fullName: string;
    parentOrganization: string;
    parentOrganizationFullName: string;
  };
  payerInfo: {
    VAT: boolean; // Checkbox for VAT payer
    fizPersonIncome: string; // Radio for individual income
    iurPersonIncomeRotation: string; // Radio for legal entity turnover
    employedCount: string; // Select for number of employees
  };
  dataFlow: {
    level7: { userId: string; status: string; fromUserId: string };
    level6: { userId: string; status: string; fromUserId: string };
    level5: { userId: string; status: string; fromUserId: string };
    level4: { userId: string; status: string; fromUserId: string };
    level3: { userId: string; status: string; fromUserId: string };
    level2: { userId: string; status: string; fromUserId: string };
    level1: { userId: string; status: string; fromUserId: string };
  };
  dataLogs: {
    level: number;
    timestamp: string;
    addedByName: string;
    description: string;
    receiverName: string;
    receiverId: string;
    comment: string;
    imgUrl: string;
  }[];

}

const ViewAddObjectData:React.FC = () => {
  const dispatch = useDispatch();

  const [states, setStates] = useState<StateTyes>({
    addresses: {
      region: "",
      factAddress: "",
      iurAddress: "",
      streetFactAddress: "",
      streetIurAddress: "",
      postalCode: "",
      addressesOfFactActions: [], // Array of addresses for fact activity
    },
    activityinformation: {
      workingCode: "",
      workingDescription: "",
      groupedName: "",
      riskLevel: "",
    },
    activityForm: {
      registerOrgan: "",
      form: "",
      govermentalRegisterDate: "",
      lastChangeDate: "",
    },
    objectIdentifierData: {
      identifyCode: "",
      fullName: "",
      parentOrganization: "",
      parentOrganizationFullName: "",
    },
    payerInfo: {
      VAT: false, // Checkbox for VAT payer
      fizPersonIncome: "", // Radio for individual income
      iurPersonIncomeRotation: "", // Radio for legal entity turnover
      employedCount: "", // Select for number of employees
    },
    dataFlow: {
      level7: { userId: "", status: "string", fromUserId: "string" },
      level6: { userId: "string", status: "string", fromUserId: "string" },
      level5: { userId: "string", status: "string", fromUserId: "string" },
      level4: { userId: "string", status: "string", fromUserId: "s" },
      level3: { userId: "string", status: "string", fromUserId: "string" },
      level2: { userId: "string", status: "string", fromUserId: "string" },
      level1: { userId: "string", status: "string", fromUserId: "string" },
    },
    dataLogs: [{
      level: 7,
      timestamp: "s",
      addedByName: "string",
      description: "string",
      receiverName: "string",
      receiverId: "string",
      comment: "string",
      imgUrl: "string",
    }]
  });
  const datas = {
    objectIdentifierData: [
      {
        name: "საიდენტიფიკაციო კოდი",
        id: "identifyCode",
        type: "text",
        propname: "objectIdentifierData",
      },
      {
        name: "სრული დასახელება",
        id: "fullName",
        type: "text",
        propname: "objectIdentifierData",
      },
      {
        name: "მშობელი ორგანიზაცია",
        id: "parentOrganization",
        type: "text",
        propname: "objectIdentifierData",
      },
      {
        name: "მშობელი ორგანიზაციის სრული დასახელება",
        id: "parentOrganizationFullName",
        type: "text",
        propname: "objectIdentifierData",
      },
    ],
    addresses: [
      {
        name: "თბილისი",
        id: "region",
        type: "select",
        propname: "addresses",
        options: [
          "აფხაზეთი",
          "აჭარა",
          "გურია",
          "იმერეთი",
          "კახეთი",
          "მცხეთა-მთიანეთი ",
          "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
          "სამეგრელო-ზემო სვანეთი",
          "სამცხე-ჯავახეთი",
          "ქვემო ქართლი",
          "შიდა ქართლი",
        ],
      },
      {
        name: "იურიდიული მისამართი",
        propname: "addresses",
        type: "text",

        id: "iurAddress",
      },
      {
        name: "იურიდიული მისამართი ქუჩის",
        propname: "addresses",
        type: "text",

        id: "streetIurAddress",
      },

      {
        name: "ფაქტობრივი მისამართი",
        propname: "addresses",
        type: "text",

        id: "factAddress",
      },

      {
        name: "ფაქტობრივი მისამართი ქუჩის",
        propname: "addresses",
        type: "text",

        id: "streetFactAddress",
      },

      {
        name: "საფოსტო ინდექსი",
        id: "postalCode",
        propname: "addresses",
        type: "text",
      },

      {
        name: "ფაქტობრივი საქმიანობის განხორციელების მისამართები",
        id: "addressesOfFactActions",
        propname: "addresses",
        type: "text",
      },
    ],
    activityinformation: [
      {
        name: "საქმიანობის კოდი",
        type: "text",
        id: "workingCode",
        propname: "activityinformation",
      },
      {
        name: "საქმიანობის დასახელება",
        type: "text",

        propname: "activityinformation",
        id: "workingDescription",
      },
      {
        name: "დამჯგუფებელი დასახელება",
        type: "text",

        propname: "activityinformation",
        id: "groupedName",
      },
      {
        name: "რისკის დონე",
        type: "text",

        propname: "activityinformation",
        id: "riskLevel",
      },
    ],
    activityForm: [
      {
        name: "მარეგისტრირებელი ორგანო",
        type: "text",
        id: "registerOrgan",
        propname: "activityForm",
      },
      {
        name: "სამართლებრივი ფორმა",
        type: "select",
        id: "form",
        propname: "activityForm",
      },
      {
        name: "სახელმწიფო რეგისტრაციის თარიღი",
        type: "date",
        id: "govermentalRegisterDate",
        propname: "activityForm",
      },
      {
        name: "ბოლო ცვლილების თარიღი",
        type: "date",
        id: "lastChangeDate",
        propname: "activityForm",
      },
    ],
    payerInfo: [
      {
        name: "დღგს გადამხდელი",
        type: "checkbox",
        id: "VAT",
        propname: "payerInfo",
      },
      {
        name: "ფიზიკური პირის შემოსავლები:",
        type: "radio",
        id: "fizPersonIncome",
        options: [">100 000", "<100 000"],
        propname: "payerInfo",
      },
      {
        name: "იურიდიული პირის ბრუნვა:",
        type: "radio",
        id: "iurPersonIncomeRotation",
        options: [">100 000", "<100 000", " 100 000 - 500 000"],
        propname: "payerInfo",
      },
      {
        name: "დასაქმებულ პირთა რაოდენობა",
        type: "select",
        id: "employedCount",
        propname: "payerInfo",
        options: [100, 200, 300],
      },
    ],
  };
const AddTask = async () => {
  try {

      const response = await axios.post(
        `${apiUrl}/tasks/addNewTask`,
        { ...states },
        {
          withCredentials: true,
        }
      );
    console.log("data has sent successfully", response.data);
    dispatch(setBaseSubcomponentsShown(""));

  }catch (err: any) {
    if (err.response.status === 401) {
      window.location.href = "/";
    } else {
      console.error("Error sending data:", err);
    }
}
}
  const changeHandler = (
    propname: keyof StateTyes,
    id: string,
    type: string,
    name: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setStates((prev) => ({
      ...prev,
      [propname]: {
        ...prev[propname],
        [id]:
          id === "addressesOfFactActions" ?
          [e.target.value] :
          type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : e.target.value,
      },
    }));
  };


  useEffect(() => {
    console.log("Current state:", states);
  }, [states])
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col fixed top-0 left-0  z-[100] justify-center items-center bg-[#d8d5d59a]">
      <header className="w-[900px] h-[50px] shadow-boxShadow flex items-center justify-center bg-sidebarChoose rounded-tl-lg rounded-tr-lg ">
        <h1 className="text-[18px] font-semibold text-white">
          ობიექტის დამატება
        </h1>
      </header>
      <div className="w-[900px] h-4/5 shadow-boxShadow flex flex-col gap-8 bg-white p-10 rounded-bl-lg rounded-br-lg overflow-y-scroll text-[11px]  ">
        <div className="w-full  min-h-[100px] flex justify-between ">
          <div className="w-2/4 h-full flex flex-col gap-4 ">
            <div className="flex  gap-[5%] w-full  h-1/2 items-center ">
              {datas.objectIdentifierData.map(
                (data, index) =>
                  (index === 0 || index === 1) && (
                    <Fragment key={index}>
                      <input
                        type={data.type}
                        id={data.id}
                        className="border-[1px] border-gray-400 h-full w-1/2 px-1 outline-none "
                        placeholder={data.name}
                        onChange={(e) =>
                          changeHandler(
                            data.propname as keyof StateTyes,
                            data.id,
                            data.type,
                            data.name,
                            e
                          )
                        }
                      />
                    </Fragment>
                  )
              )}

              {/* <input
                type="text"
                placeholder="სრული დასახელება"
                className="border-[1px] border-gray-400 h-full w-1/2 px-1 outline-none"
              /> */}
              <img src={PublicBusiness} className="h-[24px]" alt="icon" />
            </div>
            <div className="flex  gap-[5%] h-1/2 w-full items-center ">
              {datas.objectIdentifierData.map(
                (data, index) =>
                  (index === 2 || index === 3) && (
                    <Fragment key={index}>
                      <input
                        type={data.type}
                        id={data.id}
                        className="border-[1px] border-gray-400 h-full w-1/2 px-1 outline-none "
                        placeholder={data.name}
                        onChange={(e) =>
                          changeHandler(
                            data.propname as keyof StateTyes,
                            data.id,
                            data.type,
                            data.name,
                            e
                          )
                        }
                      />
                    </Fragment>
                  )
              )}
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
              {datas.addresses.map((data, index) => (
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
                  {data.type === "select" ? (
                    <select
                      onChange={(e) =>
                        changeHandler(
                          data.propname as keyof StateTyes,
                          data.id,
                          data.type,
                          data.name,
                          e
                        )
                      }
                      id={data.id}
                      className="w-full h-3/4 border-[2px] min-h-[40px] border-gray-400"
                    >
                      <option value="">{data.name}</option>
                      {data.options?.map((option, optIndex) => (
                        <option key={optIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      id={data.id}
                      className="w-full h-3/4 min-h-[40px] border-[2px] border-gray-400"
                      onChange={(e) =>
                        changeHandler(
                          data.propname as keyof StateTyes,
                          data.id,
                          data.type,
                          data.name,
                          e
                        )
                      }
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-auto border-[1px] rounded-lg border-[#6c6c72] flex flex-col  p-4 text-[#0d1639]">
              <h1 className="text-[15px]  py-2 border-b-2 border-[#11277e] font-semibold">
                საქმიანობის ინფორმაცია
              </h1>
              {datas.activityinformation.map((data, index) => (
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
                    onChange={(e) =>
                      changeHandler(
                        data.propname as keyof StateTyes,
                        data.id,
                        data.type,
                        data.name,
                        e
                      )
                    }
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
              {datas.activityForm.map((data, index) => (
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
                        onChange={(e) =>
                          changeHandler(
                            data.propname as keyof StateTyes,
                            data.id,
                            data.type,
                            data.name,
                            e
                          )
                        }
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
                        onChange={(e) =>
                          changeHandler(
                            data.propname as keyof StateTyes,
                            data.id,
                            data.type,
                            data.name,
                            e
                          )
                        }
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
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          changeHandler(
                            data.propname as keyof StateTyes,
                            data.id,
                            data.type,
                            data.name,
                            e
                          )
                        }
                        id={data.id}
                        className="w-4 h-4"
                      />
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
                              onChange={(e) =>
                                changeHandler(
                                  data.propname as keyof StateTyes,
                                  data.id,
                                  data.type,
                                  data.name,
                                  e
                                )
                              }
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
                          onChange={(e) =>
                            changeHandler(
                              data.propname as keyof StateTyes,
                              data.id,
                              data.type,
                              data.name,
                              e
                            )
                          }
                        >
                          
                          {data.options?.map((option, optIndex) => (
                            <option key={optIndex} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    )
                  )}
                </Fragment>
              ))}
            </div>
            <div className="w-full gap-4 flex h-full items-end">
              <button
                onClick={() => dispatch(setBaseSubcomponentsShown(""))}
                className="w-1/2 h-12 bg-white border-[1px] border-gray-400 text-sidebarChoose font-bold rounded-lg text-[14px]"
              >
                გაუქმება
              </button>
              <button
                className="w-1/2 h-12 bg-sidebarChoose border-[1px] border-gray-400 text-white font-bold rounded-lg text-[14px]"
                onClick={() => AddTask()}
              >
                დამატება
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAddObjectData
