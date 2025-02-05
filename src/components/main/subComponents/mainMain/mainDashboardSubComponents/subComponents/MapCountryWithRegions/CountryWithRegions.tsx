import React, { useCallback } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Map from "./Geo.json";
import "./mapCss.css";
const CountryWithRegions: React.FC<{ setShown: (arg: boolean) => void }> = ({
  setShown,
}) => {
  const handleShown = useCallback(
    () => {
      setShown(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const handleShownDown = useCallback(
    () => {
      setShown(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="w-full h-full bg-white rounded-2xl flex flex-col  items-center shadow-bottom-left object-contain">
      <header className=" z-10 h-10%   rounded-tl-2xl rounded-tr-2xl bg-sidebarChoose        w-full flex justify-center items-center text-white font-bold text-sm">
        <p>ობიექტების რეგიონალური რუკა</p>
      </header>
      <main className="w-60% h-60% flex justify-center items-center   ">
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
                  onMouseEnter={handleShown}
                  onMouseLeave={handleShownDown}
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
      </main>
    </div>
  );
};

export default CountryWithRegions;
