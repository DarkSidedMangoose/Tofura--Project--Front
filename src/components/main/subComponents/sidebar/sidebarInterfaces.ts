/* props interfaces */

//props interface  for NavItem component
export interface NavItemProps {
  icon: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}
//MainSidebar.tsx props interface
export interface mainSidebarProps {
  setIsActive: (isActive: boolean) => void;
}
//props interface for AdditionalInfoOfBase.tsx
export interface AdditionalInfoOfBaseProps {
  isActive: boolean;
}
export interface AdditionalInfoOfBaseStates {
  baseInfoP: string[];
  baseInfoChoose: string;
  baseInfoNdP: string[];
}

/* object interfaces */

//mainSidebar sidebarStates object interface
export interface sideState {
  identifier: string;
  state: boolean;
}

//functions props interfaces
export interface SetIsActive {
  (isActive: boolean): void;
}
//end of interfaces
