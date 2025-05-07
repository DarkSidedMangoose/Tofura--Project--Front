import React, { useCallback, useEffect, useState } from "react";

import ConfigureUsersMain from "./ConfigureUsersSubcomponents/ConfigureUsersMain";
import AddNewUser from "./ConfigureUsersSubcomponents/AddNewUser";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../redux/store";
export interface UsersInterface {
  id: string;
  fullname: string;
  position: string | null;
  level: number;
  department: string | null;
  diversion: string | null;
  status: string;
  section: string;
}

const ConfigureUsers: React.FC = () => {
  const ConfigureUsersHeaderButOptions =
    useSelector((state: RootState) => state.ConfigureUsersHeaderButOptionSetter);

    useEffect(() => {
       if (ConfigureUsersHeaderButOptions.identifier === "AddButton") {
         setClickIdentifies((prev) => ({ ...prev, isAddButtonClicked: ConfigureUsersHeaderButOptions.show }));
       }
    },[ConfigureUsersHeaderButOptions])
  const [refreshUsers, setRefreshUsers] = useState<boolean>(false);
  const [clickIdentifies, setClickIdentifies] = useState<{
    isAddButtonClicked: boolean;
    isAddFilterClicked: boolean;
  }>({
    isAddButtonClicked: false,
    isAddFilterClicked: false,
  });
  
  const handleAddUserClose = useCallback(() => {
    setRefreshUsers(!refreshUsers);
  }, [refreshUsers]);

  return (
    <div className="w-full h-full  text-sidebarChoose   border-sidebarChoose  flex flex-col items-center   custom-scrollbar">
      <ConfigureUsersMain refreshUsers={refreshUsers} />
      {clickIdentifies.isAddButtonClicked && (
        <AddNewUser handleAddUserClose={handleAddUserClose} />
      )}
    </div>
  );
};

export default ConfigureUsers;
