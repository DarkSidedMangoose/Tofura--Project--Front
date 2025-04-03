import React, { useState } from "react";
import User from "../../assets/images/login/user.webp";
import Password from "../../assets/images/login/password.webp";
import Enter from "../../assets/images/login/login.webp";
import { useNavigate } from "react-router-dom";
import MainLogoCenter from "../../assets/images/login/mainLogoCenter.webp";
import { handleChange } from "./loginSubComponents/LoginFunctions";
import { handleSubmit } from "./loginSubComponents/LoginFunctions";
import "./LoginAnimations.css";

interface UserPass {
  Username: string;
  Password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [userPass, setUserPass] = useState<UserPass>({
    Username: "",
    Password: "",
  });

  return (
    <form
      onSubmit={(e) => handleSubmit(e, navigate, userPass)}
      className=" opacity-95"
    >
      <div className="flex flex-col w-400px h-400px justify-center items-center bg-gray-800 gap-2 relative shadow-lg shadow-black stroke-black rounded-lg">
        <div className="absolute top-0 w-full h-20% flex justify-center items-center">
          <img
            src={MainLogoCenter}
            alt="movedLogo"
            className="w-80px h-80px mt-5 movedLogo"
          />
        </div>
        <div className="w-4/5 opacity-80 hover:opacity-60  flex flex-row items-center h-15% relative bg-transparent shadow-lg shadow-black stroke-black rounded-[4px]">
          <input
            className="text-black-900 w-full h-100% outline-none  border-2 border-solid border-loginBorderColor rounded-tl-[4px] rounded-bl-[4px]"
            name="Username"
            placeholder="საიდენტიფიკაციო კოდი..."
            type="text"
            value={userPass.Username}
            onChange={(e) => handleChange(e, userPass, setUserPass)}
          />
          <div className="w-1/5  h-full flex justify-center items-center  border-2 border-solid border-loginBorderColor bg-loginButBackground rounded-tr-[4px] rounded-br-[4px] ">
            <img src={User} alt="userLogo" className=" w-30px h-30px"></img>
          </div>
        </div>
        <div className="w-4/5 opacity-80 hover:opacity-60  flex flex-row items-center h-15% relative bg-transparent shadow-lg shadow-black stroke-black rounded-[4px]">
          <input
            className="text-black-900 w-full h-100% outline-none   border-2 border-solid border-loginBorderColor rounded-tl-[4px] rounded-bl-[4px]"
            type="password"
            name="Password"
            id="password"
            placeholder="პაროლი..."
            value={userPass.Password}
            onChange={(e) => handleChange(e, userPass, setUserPass)}
          />
          <div className="w-1/5  h-full flex justify-center items-center border-2 border-solid border-loginBorderColor bg-loginButBackground rounded-tr-[4px] rounded-br-[4px">
            <img src={Password} alt="passLogo" className=" w-30px h-30px"></img>
          </div>
        </div>
        <div className="w-4/5 flex justify-end h-15% relative opacity-80 loginButtonHover">
          <button
            type="submit"
            className="w-2/5 bg-white h-100%  text-gray-700 text-sm hover:opacity-45 active:bg-slate-200  border-loginBut border-2 border-opacity-75 shadow-lg  shadow-black rounded-[4px] opacity-85"
          >
            შესვლა
          </button>
          <div className="h-full flex justify-center items-center ">
            <img
              src={Enter}
              alt="enterLogo"
              className="absolute right-1 w-30px h-30px"
            ></img>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
