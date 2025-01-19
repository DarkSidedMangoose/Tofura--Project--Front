import { sideState } from "./sidebarInterfaces";
//main component functions

export const handleSidebarClick = (
  sidebar: string,
  sidebarStates: sideState,
  setSidebarStates: React.Dispatch<React.SetStateAction<sideState>>
) => {
  if (sidebar === "base") {
    setSidebarStates({ identifier: sidebar, state: true });
  } else if (sidebar !== "base" && sidebarStates.identifier === "base") {
    setSidebarStates({ ...sidebarStates, state: false });

    setTimeout(() => {
      setSidebarStates({ ...sidebarStates, identifier: sidebar });
    }, 500);
  } else {
    setSidebarStates({ ...sidebarStates, identifier: sidebar });
  }
};
