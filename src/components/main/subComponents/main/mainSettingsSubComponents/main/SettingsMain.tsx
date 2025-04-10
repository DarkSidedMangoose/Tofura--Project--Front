import React, { useState } from "react";
import ConfigureUsers from "../subComponents/configureUsers/ConfigureUsersSubcomponents/ConfigureUsers";
import AddNewUser from "../subComponents/configureUsers/ConfigureUsersSubcomponents/AddNewUser";

const SettingsMain: React.FC = () => {
  const [addUserIsActive, setAddUserIsActive] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ConfigureUsers />
      {addUserIsActive && <AddNewUser />}
    </div>
  );
};

export default SettingsMain;
