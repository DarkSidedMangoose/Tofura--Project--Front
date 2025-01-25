/* props interfaces */

//props interface  for NavItem component props
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
  isShown: boolean;
}
//AdditionalInfoOfBase.tsx props interface
export interface AdditionalInfoOfBaseProps {
  isActive: boolean;
  isShown: (e: boolean) => void;
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
