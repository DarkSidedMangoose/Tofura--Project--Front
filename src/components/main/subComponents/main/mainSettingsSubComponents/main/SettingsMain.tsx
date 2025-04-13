import React, { useCallback, useState } from "react";
import ConfigureUsers from "../subComponents/configureUsers/ConfigureUsersSubcomponents/ConfigureUsers";
import AddNewUser from "../subComponents/configureUsers/ConfigureUsersSubcomponents/AddNewUser";

const SettingsMain: React.FC = () => {
  const [addUserIsActive, setAddUserIsActive] = useState<boolean>(false);
  const handleClose = useCallback(
    (arg: boolean) => {
      setAddUserIsActive(arg);
    },
    [addUserIsActive]
  );
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ConfigureUsers />
      {/* {addUserIsActive && <AddNewUser onClickClose={handleClose} />} */}
    </div>
  );
};

export default SettingsMain;
