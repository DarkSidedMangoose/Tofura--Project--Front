import React, { useState, memo } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Folder from "../../assets/images/main/folder.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./mainAnimations.css";

//interfaces of props

interface sideState {
  identifier: string;
  state: boolean;
}

interface NavItemProps {
  icon: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

interface AdditionalInfoOfBaseProps {
  isActive: boolean;
}
interface AdditionalInfoOfBaseStates {
  baseInfoP: string[];
  baseInfoChoose: string;
  baseInfoNdP: string[];
}
/* end of interfaces */

//subComponents of main component

interface NavItemProps {
  icon: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = memo(
  ({ icon, alt, isActive, onClick }) => {
    return (
      <div
        onClick={onClick}
        className={`w-full h-1/5 flex justify-center items-center rounded-[100%] hover:opacity-70 cursor-pointer ${
          isActive ? "bg-blue-900" : ""
        }`}
      >
        <div className="w-[40%] aspect-w-1 aspect-h-1">
          <img className="object-contain" src={icon} alt={alt} />
        </div>
      </div>
    );
  }
);

const AdditionalInfoOfBase: React.FC<AdditionalInfoOfBaseProps> = ({
  isActive,
}) => {
  const [baseState, setBaseState] = useState<AdditionalInfoOfBaseStates>({
    baseInfoP: [
      "ობიექტების რეესტრი",
      "ინსპექტირების ობიექტები",
      "შემოწმებული ობიექტების რეესტრი",
    ],
    baseInfoChoose: "",
    baseInfoNdP: [
      "ახალი ობიექტები",
      "შემოწმებული ობიექტები",
      "წაშლილი ობიექტები",
    ],
  });
  return (
    <div
      className={`z-0 ${
        isActive ? "sidebarFolderInfoShown-div" : "sidebarFolderInfoClose-div"
      } w-[77%] h-full bg-white shadow-bottom-right rounded-br-2xl flex justify-center items-center  `}
    >
      <div className=" w-90% h-[90%] flex flex-col space-y-8   ">
        <div className="space-y-24">
          <section className="flex flex-col space-y-4  ">
            <h1 className="flex justify-center text-blue-950 font-bold">
              მონაცემთა ბაზები
            </h1>
            {baseState.baseInfoP.map((info, index) => (
              <p
                className={`${
                  baseState.baseInfoChoose === info
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={
                  () =>
                    setBaseState((prev) => ({ ...prev, baseInfoChoose: info })) // to identify which has choose
                }
              >
                {info}
              </p>
            ))}
          </section>
          <section className="flex flex-col space-y-4  ">
            <h1 className="flex justify-center text-blue-950 font-bold">
              დამატებითი ბაზები
            </h1>
            {baseState.baseInfoNdP.map((info, index) => (
              <p
                className={`${
                  baseState.baseInfoChoose === info
                    ? "font-bold sidebarAdditionalInfoChoose "
                    : " sidebarAdditionalInfoChooseOff"
                } text-[0.9rem] cursor-pointer text-blue-950 `}
                key={index}
                onClick={
                  () =>
                    setBaseState((prev) => ({ ...prev, baseInfoChoose: info })) // to identify which has choose
                }
              >
                {info}
              </p>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
/* end of subComponents */

//main component
const MainSidebar: React.FC = () => {
  const [sidebarStates, setSidebarStates] = useState<sideState>({
    identifier: "folder",
    state: true,
  });

  const handleSidebarClick = (sidebar: string) => {
    if (sidebar === "folder") {
      setSidebarStates({ identifier: sidebar, state: true });
    } else if (sidebar !== "folder" && sidebarStates.identifier === "folder") {
      setSidebarStates({ ...sidebarStates, state: false });

      setTimeout(() => {
        setSidebarStates({ ...sidebarStates, identifier: sidebar });
      }, 500);
    } else {
      setSidebarStates({ ...sidebarStates, identifier: sidebar });
    }
  };

  return (
    <div
      className={`${
        sidebarStates.identifier === "folder"
          ? "w-[20%] min-w-[350px]"
          : "w-[4.6%] min-w-[80.5px]"
      } flex  min-h-[700px] h-full bg-blue `}
    >
      <aside
        className={`z-10 ${
          sidebarStates.identifier === "folder" ? "w-[23%]" : "w-full"
        } h-full  bg-sidebarChoose flex flex-col items-center shadow-bottom-right`}
      >
        <img src={MainLogo} className="w-[70%]   mt-[30%]" alt="logo"></img>
        <nav className="w-[60%] h-[30%]  mt-[40%]  ">
          <NavItem
            icon={Folder}
            alt="folder"
            isActive={sidebarStates.identifier === "folder"}
            onClick={() => handleSidebarClick("folder")}
          />
          <NavItem
            icon={Dashboard}
            alt="dashboard"
            isActive={sidebarStates.identifier === "dashboard"}
            onClick={() => handleSidebarClick("dashboard")}
          />
          <NavItem
            icon={MyProfile}
            alt="profile"
            isActive={sidebarStates.identifier === "profile"}
            onClick={() => handleSidebarClick("profile")}
          />
        </nav>
      </aside>
      {sidebarStates.identifier === "folder" && (
        <AdditionalInfoOfBase isActive={sidebarStates.state} />
      )}
    </div>
  );
};

export default MainSidebar;
