import React, { useCallback, useState } from "react";

import ConfigureUsersHeader from "./ConfigureUsersSubcomponents/ConfigureUsersHeader";
import ConfigureUsersMain from "./ConfigureUsersSubcomponents/ConfigureUsersMain";
import AddNewUser from "./ConfigureUsersSubcomponents/AddNewUser";

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
  const [refreshUsers, setRefreshUsers] = useState<boolean>(false);
  const [clickIdentifies, setClickIdentifies] = useState<{
    isAddButtonClicked: boolean;
    isAddFilterClicked: boolean;
  }>({
    isAddButtonClicked: false,
    isAddFilterClicked: false,
  });
  const handleClickAddButton = useCallback((arg: boolean, name: string) => {
    if (name === "AddButton") {
      setClickIdentifies((prev) => ({ ...prev, isAddButtonClicked: arg }));
    } else if (name === "AddFilter") {
      setClickIdentifies((prev) => ({ ...prev, isAddFilterClicked: arg }));
    }
  }, []);
  const handleAddUserClose = useCallback(() => {
    setRefreshUsers(!refreshUsers);
    setClickIdentifies((prev) => ({ ...prev, isAddButtonClicked: false }));
  }, [refreshUsers]);

  return (
    <div className="w-full h-full  text-sidebarChoose border-t-2 border-dotted border-opacity-30 border-sidebarChoose py-[2%] flex flex-col items-center  gap-[2%] custom-scrollbar">
      <ConfigureUsersHeader setClickAddButton={handleClickAddButton} />
      <ConfigureUsersMain refreshUsers={refreshUsers} />
      {clickIdentifies.isAddButtonClicked && (
        <AddNewUser onClickClose={handleAddUserClose} />
      )}
    </div>
  );
};

export default ConfigureUsers;
