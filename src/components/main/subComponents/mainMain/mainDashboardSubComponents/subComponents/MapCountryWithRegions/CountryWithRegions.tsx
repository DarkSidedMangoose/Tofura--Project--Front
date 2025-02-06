import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Map from "./Geo.json";
import "./mapCss.css";
import { MapObjects } from "../DashboardObjects";
const CountryWithRegions: React.FC = () => {
  const [identifyRegion, setIdentifyRegion] = useState<number>(11);
  return (
    <div className="w-full h-full  rounded-2xl flex flex-col  items-start shadow-boxShadow object-contain">
      <main className="w-full h-full flex justify-between">
        <section className="w-60% h-60% rounded-2xl  shadow-bottom-right flex justify-center items-center  bg-loginBackground  ">
          <div className="w-90% h-90% rounded-2xl  shadow-boxShadow flex justify-center items-center  bg-white  ">
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
        </section>
        <CountryWithRegionsAdditionalInfo identifyRegion={identifyRegion} />
      </main>
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
    <section className="w-[38%] h-60% rounded-2xl shadow-bottom flex justify-center  bg-loginBackground">
      {MapObjects[identifyRegion - 1].region}
    </section>
  );
};
