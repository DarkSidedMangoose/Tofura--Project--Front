import { SetIsActive, sideState } from "./sidebarInterfaces";
//main component functions

// i used it MainSidebar.tsx to handle state changes while click on any <NavItem/> they are icons and when i click one of them that function is change state of choose (identify purpose) it's for cleaner and for to use less code.
export const handleSidebarClick = (
  sidebar: string,
  sidebarStates: sideState,
  setSidebarStates: React.Dispatch<React.SetStateAction<sideState>>,
  setIsActive: SetIsActive
) => {
  if (sidebar === "base") {
    setSidebarStates({ identifier: sidebar, state: true });
    setIsActive(true);
  } else {
    setSidebarStates({ ...sidebarStates, identifier: sidebar, state: false });
    setIsActive(false);
  }
};

// Debounce function for improving dimensions updating for responsive visual. i use it in sidebarSubComponents.tsx in AdditionalInfoOfBase component.
export const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
