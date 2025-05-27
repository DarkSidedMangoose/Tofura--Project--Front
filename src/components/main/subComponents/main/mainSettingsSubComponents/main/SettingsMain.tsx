import React from "react";
import ConfigureUsers from "../subComponents/configureUsers/ConfigureUsers";

const SettingsMain: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ConfigureUsers />
    </div>
  );
};

export default SettingsMain;
