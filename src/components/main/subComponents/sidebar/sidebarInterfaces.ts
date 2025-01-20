//props interface  for NavItem component
export interface NavItemProps {
  icon: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}
//end of props interface for NavItem component

//props interface for AdditionalInfoOfBase component
export interface AdditionalInfoOfBaseProps {
  isActive: boolean;
}
export interface AdditionalInfoOfBaseStates {
  baseInfoP: string[];
  baseInfoChoose: string;
  baseInfoNdP: string[];
}
//end of props interface for AdditionalInfoOfBase component

//main component interface
export interface sideState {
  identifier: string;
  state: boolean;
}
//end of interfaces
