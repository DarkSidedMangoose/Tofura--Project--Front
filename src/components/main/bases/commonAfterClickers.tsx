import React, { useEffect, useState } from "react";

type objStateType = {
  identifier: number;
  wholeName: string;
  region: string;
  address: string;
  turnover: number;
  workType: string;
  riskLevel: string;
};

const CommonAfterClickers: React.FC = () => {
  const [choosed, setChoosed] = useState<number>(-1); //index of which i choose
  const [infoShown, setInfoShown] = useState<boolean>(false);

  const [obj, setObj] = useState<objStateType[] | null>([
    {
      identifier: 24,
      wholeName: "lo",
      region: "st",
      address: "forst",
      turnover: 24,
      workType: "ghots",
      riskLevel: "Sort",
    },
    {
      identifier: 24,
      wholeName: "lo",
      region: "st",
      address: "forst",
      turnover: 24,
      workType:
        "dakldasdadadadadaakldasdadadadadaakldasdadadadadaakldasdadadadadadklakdladd",
      riskLevel: "Sort",
    },
  ]);

  useEffect(() => {
    if (infoShown === true && obj != null) {
      console.log(obj[choosed].workType);
    }
  }, [infoShown]);
  return (
    <div className="w-98% h-95% bg-white shadow-lg shadow-black flex justify-center items-center">
      <div className="w-98% h-95%  ">
        <div className="border-b-4 border-gray-500 flex justify-center">
          <div className="w-98% h-59px grid grid-cols-7 ">
            <div className="flex justify-start items-center ">
              <p>ს/კ</p>
            </div>
            <div className="flex justify-start items-center">
              <>სრული დასახელება</>
            </div>
            <div className="flex justify-start items-center">
              <>რეგიონი</>
            </div>
            <div className="flex justify-start items-center">
              <>მისამართი</>
            </div>
            <div className="flex justify-start items-center ">
              <p>ბრუნვა</p>
            </div>
            <div className="flex justify-start items-center">
              <p className="">საქმიანობის დასახელება</p>
            </div>
            <div className="flex justify-start items-center ">
              <p>რისკის დონე</p>
            </div>
          </div>
        </div>
        {obj === null
          ? null
          : obj.map((e, i) => (
              <div className="border-b-2 border-gray-500 flex justify-center">
                <div className="w-98% h-59px grid grid-cols-7 ">
                  <div className="flex justify-start items-center w-95% overflow-x-auto text-ellipsis whitespace-nowrap ">
                    <p>{e.identifier}</p>
                  </div>
                  <div className="flex justify-start items-center w-95% overflow-x-auto text-ellipsis whitespace-nowrap">
                    <p>{e.wholeName}</p>
                  </div>
                  <div className="flex justify-start items-center w-95% overflow-x-auto text-ellipsis whitespace-nowrap">
                    <p>{e.region}</p>
                  </div>
                  <div className="flex justify-start items-center w-95% overflow-x-auto text-ellipsis whitespace-nowrap">
                    <p>{e.address}</p>
                  </div>
                  <div className="flex justify-start items-center w-95% overflow-x-auto text-ellipsis whitespace-nowrap ">
                    <p>{e.turnover}</p>
                  </div>
                  <div className="flex justify-start items-center w-95% overflow-x-auto text-ellipsis whitespace-nowrap">
                    <p className="">{e.workType}</p>
                  </div>
                  <div className="flex justify-start items-center w-95% overflow-x-auto text-ellipsis whitespace-nowrap">
                    <p>{e.riskLevel}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CommonAfterClickers;
