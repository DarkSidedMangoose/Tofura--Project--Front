import { sideState } from "./sidebarInterfaces";
//main component functions

export const handleSidebarClick = (
  sidebar: string,
  sidebarStates: sideState,
  setSidebarStates: React.Dispatch<React.SetStateAction<sideState>>
) => {
  if (sidebar === "base") {
    setSidebarStates({ identifier: sidebar, state: true });
  } else {
    setSidebarStates({ ...sidebarStates, identifier: sidebar, state: false });
  }
};
