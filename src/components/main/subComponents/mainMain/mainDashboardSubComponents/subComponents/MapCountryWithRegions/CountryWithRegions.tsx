import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Map from "./Geo.json";
import "./mapCss.css";
const CountryWithRegions: React.FC = () => {
  return (
    <div className="w-full h-full  rounded-2xl flex flex-col  items-start shadow-boxShadow object-contain">
      <main className="w-full h-full flex justify-between">
        <div className="w-60% h-60% rounded-2xl  shadow-bottom-right flex justify-center items-center  bg-loginBackground  ">
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
        <section className="w-[38%] h-60% rounded-2xl  shadow-bottom flex justify-center items-center  bg-loginBackground "></section>
      </main>
    </div>
  );
};

export default CountryWithRegions;
