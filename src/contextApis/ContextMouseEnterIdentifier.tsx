import React, { createContext, ReactNode, useContext, useState } from "react";
interface SidebarMouseEnterContextType {
  SidebarMouseEnterIdentifier: string;
  setSidebarMouseEnterIdentifier: React.Dispatch<React.SetStateAction<string>>;
}
interface children {
  children: ReactNode;
}
const SidebarMouseEnter = createContext<SidebarMouseEnterContextType>({
  SidebarMouseEnterIdentifier: "",
  setSidebarMouseEnterIdentifier: () => {},
});
const ContextMouseEnterIdentifier: React.FC<children> = ({ children }) => {
  const [SidebarMouseEnterIdentifier, setSidebarMouseEnterIdentifier] =
    useState<string>("");

  return (
    <SidebarMouseEnter.Provider
      value={{ SidebarMouseEnterIdentifier, setSidebarMouseEnterIdentifier }}
    >
      {children}
    </SidebarMouseEnter.Provider>
  );
};

export default ContextMouseEnterIdentifier;

export const useSidebarMouseEnterProvider = () => useContext(SidebarMouseEnter);
