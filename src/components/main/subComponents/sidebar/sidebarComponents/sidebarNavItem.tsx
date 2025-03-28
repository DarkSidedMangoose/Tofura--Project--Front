import React, { memo } from "react";

// subComponents of sidebar they will be used as an icons and multiple times because i used there memo hook to avoid re-rendering and optimization overload
export interface NavItemProps {
  icon: string;
  alt: string;
  NavIsActive?: boolean;
  onClick?: () => void;
  onMouseEnter?: (arg: string) => void;
}
export const NavItem: React.FC<NavItemProps> = memo(
  ({ icon, alt, NavIsActive, onClick, onMouseEnter }) => {
    return (
      <div
        onClick={onClick}
        className={`w-full h-1/5 flex justify-center items-center rounded-[100%] hover:opacity-70 cursor-pointer ${
          NavIsActive ? "bg-blue-900" : ""
        }`}
        onMouseEnter={onMouseEnter ? () => onMouseEnter(alt) : undefined}
      >
        <div className="w-[40%] aspect-w-1 aspect-h-1">
          <img className="object-contain" src={icon} alt={alt} />
        </div>
      </div>
    );
  }
);
