import React, { useState } from 'react'
import User from '../../assets/images/login/user.png'
import Password from '../../assets/images/login/password.png'
import Enter from '../../assets/images/login/login.png'
import { useNavigate } from 'react-router-dom'
import MainLogoCenter from '../../assets/images/login/mainLogoCenter.png'

import './LoginForm.css'

interface UserPass {
  username: string
  password: string
}

const LoginForm: React.FC = () => {
  const Navigate = useNavigate()
  const [userPass, setUserPass] = useState<UserPass>({
    username: '',
    password: '',
  })
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserPass((prev) => ({ ...prev, [name]: value }))
  }
  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log([userPass.username, userPass.password])
    Navigate('/main')
  }
  return (
    <form onSubmit={SubmitHandler} className="z-10 opacity-95">
      <div className=" flex flex-col w-400px h-400px justify-center items-center bg-gray-800   gap-2 relative shadow-lg shadow-black stroke-black rounded-lg  ">
        <div className="absolute top-0 w-full h-20% flex justify-center items-center">
          <img
            src={MainLogoCenter}
            alt="movedLogo"
            className="w-80px h-80px mt-5 movedLogo"
          />
        </div>
        <div
          className={`w-4/5 opacity-80 hover:opacity-60 z-30  flex flex-row items-center j h-15% relative bg-transparent  shadow-lg shadow-black stroke-black  loginInputIcon`}
        >
          <input
            className="text-black-900 w-full h-100%  outline-none z-10  loginInputBorders  "
            name="username"
            placeholder="საიდენტიფიკაციო კოდი..."
            type="text"
            value={userPass.username}
            onChange={ChangeHandler}
          />
          <div className="w-1/5  z-10 h-full flex justify-center items-center  loginImgBorders">
            <img src={User} className=" z-20  w-30px h-30px "></img>
          </div>
        </div>
        <div className="w-4/5 opacity-80 hover:opacity-60 z-30 flex flex-row items-center j h-15% relative bg-transparent  shadow-lg shadow-black stroke-black loginInputIcon ">
          <input
            className="text-black-900 w-full h-100%  outline-none z-10  loginInputBorders"
            type="password"
            name="password"
            id="password"
            placeholder="პაროლი..."
            value={userPass.password}
            onChange={ChangeHandler}
          />
          <div className="w-1/5  z-10 h-full flex justify-center items-center loginImgBorders">
            <img src={Password} className={`z-20  w-30px h-30px`}></img>
          </div>
        </div>

        <div className="w-4/5 flex justify-end h-15% relative opacity-80   loginButtonHover ">
          <button
            type="submit"
            className=" w-2/5 bg-white h-100% z-10    text-gray-700 text-sm  hover:opacity-45 active:bg-slate-200 rounded-lg  border-loginBut border-2 border-opacity-75  shadow-lg shadow-black loginInputIcon opacity-85 "
          >
            შესვლა
          </button>
          <div className="h-full flex justify-center items-center z-20  ">
            <img
              src={Enter}
              className="absolute  right-1 w-30px h-30px  "
            ></img>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
