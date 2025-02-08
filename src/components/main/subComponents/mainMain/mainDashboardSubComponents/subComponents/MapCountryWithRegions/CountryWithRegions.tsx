import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Map from "./Geo.json";
import "./mapCss.css";
import { MapObjects } from "../DashboardObjects";

const CountryWithRegions: React.FC = () => {
  const [identifyRegion, setIdentifyRegion] = useState<number>(11);
  const [shown, setShown] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    if (shown === true) {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [shown]);
  return (
    <main className="w-full h-full flex justify-evenly  items-center   bg-loginBackground   rounded-2xl">
      <div className="w-full h-full flex justify-center items-center  rounded-2xl  ">
        <div className="w-95% h-90% rounded-2xl  shadow-boxShadow flex flex-col justify-start items-center  bg-loginBackground    ">
          <ComposableMap
            className="w-full h-3/4    "
            projection="geoMercator"
            projectionConfig={{ scale: 7400, center: [43.5, 42.3] }}
            width={900}
            height={500}
          >
            <Geographies geography={Map} cursor={"pointer"}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setIdentifyRegion(geo.id);
                      setShown(true);
                    }}
                    onMouseLeave={() => {
                      setShown(false);
                    }}
                    style={{
                      default: { fill: "#00004B", outline: "none" },
                      hover: { fill: "#F53", outline: "none" },
                      pressed: { fill: "#E42", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
          {shown && (
            <CountryWithRegionsAdditionalInfo
              identifyRegion={identifyRegion}
              position={position}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default CountryWithRegions;

interface CountryWithRegionsAdditionalInfoProps {
  identifyRegion: number;
  position: {
    x: number;
    y: number;
  };
}

const CountryWithRegionsAdditionalInfo: React.FC<
  CountryWithRegionsAdditionalInfoProps
> = ({ identifyRegion, position }) => {
  return (
    <div
      style={{ top: `${position.y}px `, left: `${position.x}px` }}
      className={`absolute  h-[200px] w-[400px]  rounded-2xl flex items-between justify-center flex-col bg-loginBackground  `}
    >
      {/* <p className="font-bold text-sidebarChoose shadow-bottom bg-white rounded-bl-lg rounded-br-lg text-m m-0 p-0 h-10% w-[95%] flex justify-center items-center ">
        {MapObjects[identifyRegion - 1].region}
      </p> */}
      <header className="w-full h-20% flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#1d295137] border-b-2 border-dotted border-sidebarChoose ">
        <p className="text-sidebarChoose font-bold ">
          {MapObjects[identifyRegion - 1].region}
        </p>
      </header>
      <body className="w-full h-80% bg-[#1d295137]   flex font-semibold  text-footerText  rounded-bl-2xl rounded-br-2xl  ">
        <section className=" h-full w-full flex flex-col  justify-evenly  ">
          <p>
            რეგიონში გამოვლენილი დარღვევა:
            {MapObjects[identifyRegion - 1].accidents}
          </p>
          <p>
            გამოსწორებული დარღვევა: {MapObjects[identifyRegion - 1].corrected}
          </p>
          <p>
            გამოვლენილი უბედური შემთხვევები:{" "}
            {MapObjects[identifyRegion - 1].violation}
          </p>
        </section>
      </body>
    </div>
  );
};
