import React, { useCallback, useState } from "react";

import ConfigureUsersHeader from "../ConfigureUsersHeader";
import ConfigureUsersMain from "../ConfigureUsersMain";
import AddNewUser from "./AddNewUser";

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
  const [clickIdentifies, setClickIdentifies] = useState<{
    isAddButtonClicked: boolean;
    isAddFilterClicked: boolean;
  }>({
    isAddButtonClicked: false,
    isAddFilterClicked: false,
  });
  const handleClickAddButton = useCallback(
    (arg: boolean, name: string) => {
      if (name === "AddButton") {
        setClickIdentifies((prev) => ({ ...prev, isAddButtonClicked: arg }));
      } else if (name === "AddFilter") {
        setClickIdentifies((prev) => ({ ...prev, isAddFilterClicked: arg }));
      }
    },
    [clickIdentifies]
  );
  return (
    <div className="w-full h-full  text-sidebarChoose border-t-2 border-dotted border-opacity-30 border-sidebarChoose py-[2%] flex flex-col items-center  gap-[2%] custom-scrollbar">
      <ConfigureUsersHeader setClickAddButton={handleClickAddButton} />
      <ConfigureUsersMain />
      {clickIdentifies.isAddButtonClicked ? (
        <AddNewUser />
      ) : (
        clickIdentifies.isAddFilterClicked && <AddNewUser />
      )}
    </div>
  );
};

export default ConfigureUsers;
