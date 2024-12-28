import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type objStateType = {
  identifier: number;
  wholeName: string;
  region: string;
  address: string;
  turnover: number;
  workType: string;
  riskLevel: string;
};

const CommonAfterChild: React.FC = () => {
  // redux store of sidebarBase selector
  const baseType: string = useSelector(
    (state: RootState) => state.sidebarBase.data
  );
  /* */
  // redux store sidebarBase selector state
  const [baseChoose, setBaseChoose] = useState<string>(baseType);
  /* */
  // to update state after change redux store sidebar selector state
  useEffect(() => {
    setBaseChoose(baseType);
  }, [baseType]);
  /* */
  const [obj, setObj] = useState<objStateType[][] | null>([
    [
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
    ],
    [
      {
        identifier: 24,
        wholeName: "lo",
        region: "st",
        address: "forst",
        turnover: 24,
        workType: "ghots",
        riskLevel: "Sort",
      },
    ],
    [
      {
        identifier: 432131,
        wholeName: "loadsad",
        region: "st311",
        address: "xa1",
        turnover: 13114,
        workType: "casc",
        riskLevel: "s",
      },
    ],
  ]);

  return (
    <>
      {obj === null
        ? null
        : baseChoose === "საერთო ობიექტების რეესტრი"
        ? obj[0].map((e, i) => (
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
          ))
        : baseChoose === "შესამოწმებელი ობიექტების რეესტრი"
        ? obj[1].map((e, i) => (
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
          ))
        : baseChoose === "შემოწმებული ობიექტების რეესტრი"
        ? obj[2].map((e, i) => (
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
          ))
        : null}
    </>
  );
};

export default CommonAfterChild;
