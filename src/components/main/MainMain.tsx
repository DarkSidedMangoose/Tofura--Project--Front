import React from "react";
import BaseMain from "./bases/baseMain";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Dashboard from "./dashboard/dashboardMain";

const MainMain: React.FC = () => {
  const sidebarChooseStore = useSelector(
    (state: RootState) => state.sidebarChoose.data
  );

  return (
    <React.Fragment>
      {sidebarChooseStore === "base" ? (
        <BaseMain />
      ) : sidebarChooseStore === "dashboard" ? (
        <Dashboard />
      ) : null}
    </React.Fragment>
  );
};

export default MainMain;
