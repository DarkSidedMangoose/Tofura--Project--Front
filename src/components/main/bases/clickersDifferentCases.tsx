import React, { useEffect, useState } from "react";
import Sync from "../../../assets/images/main/sync.png";
import Add from "../../../assets/images/main/add.png";
import Info from "../../../assets/images/main/info.png";
import History from "../../../assets/images/main/history.png";
import Archive from "../../../assets/images/main/archive.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const CommonBaseClickersChild: React.FC = () => {
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

  // clickers objects of images classnames and etc...
  type baseClickers = {
    divClassName: string;
    img: string;
    imgClassName: string;
    pClassname?: string;
    pText?: string;
    alt: string;
  };

  const allBasesClickers: baseClickers[][] = [
    [
      {
        divClassName:
          "h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-85",
        img: Sync,
        imgClassName: "h-4",
        alt: "Sync",
      },
      {
        divClassName:
          "h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-85",
        img: Add,
        imgClassName: "h-4",
        alt: "Add",
      },
      {
        divClassName:
          "h-8 w-40  border-gray-800 bg-white  rounded border-2 flex justify-evenly items-center cursor-pointer shadow-lg shadow-black hover:opacity-90 hover:bg-white",
        img: Info,
        imgClassName: "h-4",
        pClassname: "text-sm text-sideBar font-bold",
        pText: "დათვალიერება",
        alt: "Info",
      },
    ],
    [
      {
        divClassName:
          "h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-85",
        img: Sync,
        imgClassName: "h-4",
        alt: "Sync",
      },
      {
        divClassName:
          "h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-85",
        img: Add,
        imgClassName: "h-4",
        alt: "Add",
      },
      {
        divClassName:
          "h-8 w-40  border-gray-800 bg-white  rounded border-2 flex justify-evenly items-center cursor-pointer shadow-lg shadow-black hover:opacity-90 hover:bg-white",
        img: Info,
        imgClassName: "h-4",
        pClassname: "text-sm text-sideBar font-bold",
        pText: "დათვალიერება",
        alt: "Info",
      },
      {
        divClassName:
          "h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-85",
        img: History,
        imgClassName: "h-4",
        alt: "History",
      },
      {
        divClassName:
          "h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-85",
        img: Archive,
        imgClassName: "h-4",
        alt: "Archive",
      },
    ],
    [
      {
        divClassName:
          "h-8 w-40  border-gray-800 bg-white  rounded border-2 flex justify-evenly items-center cursor-pointer shadow-lg shadow-black hover:opacity-90 hover:bg-white",
        img: Info,
        imgClassName: "h-4",
        pClassname: "text-sm text-sideBar font-bold",
        pText: "დათვალიერება",
        alt: "Info",
      },
      {
        divClassName:
          "h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-85",
        img: History,
        alt: "History",
        imgClassName: "h-4",
      },
    ],
  ];

  return (
    <div className=" h-16 flex items-center mt-2 gap-2 ">
      {baseChoose === "საერთო ობიექტების რეესტრი"
        ? allBasesClickers[0].map((e, i) => (
            <>
              <div className={e.divClassName}>
                <img src={e.img} alt={e.alt} className={e.imgClassName}></img>
                {e.pClassname ? (
                  <p className={e.pClassname}>{e.pText}</p>
                ) : null}
              </div>
            </>
          ))
        : baseChoose === "შესამოწმებელი ობიექტების რეესტრი"
        ? allBasesClickers[1].map((e, i) => (
            <>
              <div className={e.divClassName}>
                <img src={e.img} alt={e.alt} className={e.imgClassName}></img>
                {e.pClassname ? (
                  <p className={e.pClassname}>{e.pText}</p>
                ) : null}
              </div>
            </>
          ))
        : baseChoose === "შემოწმებული ობიექტების რეესტრი"
        ? allBasesClickers[2].map((e, i) => (
            <>
              <div className={e.divClassName}>
                <img src={e.img} alt={e.alt} className={e.imgClassName}></img>
                {e.pClassname ? (
                  <p className={e.pClassname}>{e.pText}</p>
                ) : null}
              </div>
            </>
          ))
        : null}
    </div>
  );
};

export default CommonBaseClickersChild;
