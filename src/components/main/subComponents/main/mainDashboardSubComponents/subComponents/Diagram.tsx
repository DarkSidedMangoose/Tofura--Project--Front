import React, { Fragment } from "react";
import { details, diagramInfo } from "./DashboardObjects";

const Diagram: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-evenly  items-center   bg-loginBackground   rounded-2xl">
      <div className="w-full h-full flex justify-center items-center  rounded-2xl  ">
        <div className="w-95% h-90% rounded-2xl  shadow-boxShadow flex  justify-start items-center  bg-loginBackground    ">
          <GraphicDiagram />
          <div className="w-50% h-full flex flex-col relative ">
            <div className="absolute bottom-[5%] h-90% right-0 w-full ">
              {diagramInfo.map((info, index) => (
                <article
                  key={index}
                  className="w-100% h-1/5 flex items-center gap-[5%]"
                >
                  <div
                    style={{ backgroundColor: info.color }}
                    className=" h-[25%] aspect-1  border-solid border-black border-2"
                  ></div>
                  <p className="text-black  text-m">{info.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagram;

const GraphicDiagram: React.FC = () => {
  return (
    <div className="w-50% h-full relative">
      <svg
        className="w-full h-90% absolute  bottom-[5%] rotate-180"
        viewBox="0 0 100 100"
      >
        {details.map((detail, index) => {
          const dashArray = 2 * Math.PI * detail.radius;
          const dashOffset = dashArray - (dashArray * detail.percentage) / 100;
          return (
            <Fragment key={index}>
              <circle
                cx="50"
                cy="50"
                r={detail.radius}
                stroke="#ddd"
                strokeWidth="8"
                fill="none"
              />

              <circle
                cx="50"
                cy="50"
                r={detail.radius}
                strokeWidth="8"
                fill="none"
                stroke={detail.stroke}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
              />
            </Fragment>
          );
        })}
      </svg>
    </div>
  );
};
