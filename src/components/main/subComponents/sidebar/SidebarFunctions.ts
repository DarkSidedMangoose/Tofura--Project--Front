//main component functions

// i used it MainSidebar.tsx to handle state changes while click on any <NavItem/> they are icons and when i click one of them that function is change state of choose (identify purpose) it's for cleaner and for to use less code.



export const handleSidebarClick = (
  sidebar: string,
  sidebarStatesIdentifier: string,
  setSidebarStatesIdentifier: React.Dispatch<React.SetStateAction<string>>,
  setIsActive: (isActive: boolean) => void
) => {
  if (sidebar === "dashboard") {
    if (sidebarStatesIdentifier === sidebar) {
      setIsActive(false);
    } else {
      setSidebarStatesIdentifier(sidebar);
      setIsActive(false);
    }
  } else {
    if (sidebarStatesIdentifier === sidebar) {
      setIsActive(false);
    } else {
      setSidebarStatesIdentifier(sidebar);
      setIsActive(false);
    }
  }
};

// Debounce function for improving dimensions updating for responsive visual. i use it in sidebarSubComponents.tsx in AdditionalInfoOfBase component.
