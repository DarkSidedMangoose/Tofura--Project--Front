import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Map from "./Geo.json";
import "./mapCss.css";
import { MapObjects } from "../DashboardObjects";
const CountryWithRegions: React.FC = () => {
  const [identifyRegion, setIdentifyRegion] = useState<number>(11);
  return (
    <div className="w-full h-full  rounded-2xl flex flex-col  items-start justify-between shadow-boxShadow object-contain ">
      <main className="w-full h-60% flex justify-evenly items-center bg-loginBackground shadow-boxShadow rounded-2xl">
        <div className="w-60% h-90% flex justify-center items-center bg-footerText rounded-2xl shadow-boxShadow">
          <div className="w-95% h-90% rounded-2xl  shadow-boxShadow flex justify-center items-center  bg-white  ">
            <ComposableMap
              className="w-full h-full "
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
                      onMouseEnter={() => setIdentifyRegion(geo.id)}
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
          </div>
        </div>
        <CountryWithRegionsAdditionalInfo identifyRegion={identifyRegion} />
      </main>
      <footer className="w-full h-[38%] rounded-2xl shadow-boxShadow flex justify-center items-center ">
        <div className="w-[98%] h-90% bg-white shadow-boxShadow rounded-2xl"></div>
      </footer>
    </div>
  );
};

export default CountryWithRegions;

interface CountryWithRegionsAdditionalInfoProps {
  identifyRegion: number;
}

const CountryWithRegionsAdditionalInfo: React.FC<
  CountryWithRegionsAdditionalInfoProps
> = ({ identifyRegion }) => {
  return (
    <div className=" h-90% w-[35%] shadow-boxShadow rounded-2xl">
      <p className="font-bold text-sidebarChoose shadow-bottom bg-white rounded-tl-lg rounded-tr-lg text-m m-0 p-0 h-10% w-full flex justify-center items-center ">
        {MapObjects[identifyRegion - 1].region}
      </p>
      <div className="w-full h-90% bg-footerText rounded-bl-lg rounded-br-lg flex justify-center items-center ">
        <div className="w-[95%] h-[95%] bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};
