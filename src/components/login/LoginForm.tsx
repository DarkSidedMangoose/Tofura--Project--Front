import React, { useState } from "react";
import User from "../../assets/images/user.png";
import Password from "../../assets/images/password.png";
import Enter from "../../assets/images/login.png";
import { useNavigate } from "react-router-dom";
import LoginLogo from "../../components/login/LoginLogo";

import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const Navigate = useNavigate();
  //* there is something changed
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log([username, password]);
    Navigate("/main");
  };
  return (
    <form onSubmit={SubmitHandler} className="z-10">
      <div className=" flex flex-col w-600px h-600px justify-center items-center bg-login   gap-5px relative  rounded-lg  ">
        <LoginLogo />
        <div
          className={`w-3/5 flex flex-row items-center j h-10% relative bg-transparent shadow shadow-stone-600 loginInputIcon`}
        >
          <input
            className="text-black-900 w-full h-100%  outline-none z-10  loginInputBorders  "
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <div className="w-1/5  z-10 h-full flex justify-center items-center  loginImgBorders">
            <img src={User} className=" z-20  w-30px h-30px "></img>
          </div>
        </div>
        <div className="w-3/5 flex flex-row items-center j h-10% relative bg-transparent shadow shadow-stone-600 loginInputIcon ">
          <input
            className="text-black-900 w-full h-100%  outline-none z-10  loginInputBorders"
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="w-1/5  z-10 h-full flex justify-center items-center loginImgBorders">
            <img src={Password} className={`z-20  w-30px h-30px`}></img>
          </div>
        </div>

        <div className="w-3/5 flex justify-end h-10% relative  loginButtonHover ">
          <button
            type="submit"
            className=" w-2/5 bg-white h-100% z-10   text-gray-700 text-sm  active:bg-slate-200 rounded-lg border border-loginBut border-2 border-opacity-75 shadow shadow-stone-600 loginInputIcon "
          >
            შესვლა
          </button>
          <div className="h-full flex justify-center items-center z-20 opacity-70 ">
            <img
              src={Enter}
              className="absolute  right-1 w-30px h-30px  "
            ></img>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
