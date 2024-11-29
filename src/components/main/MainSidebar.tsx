import React, { useState } from 'react'
import base from '../../assets/images/main/base.png'
import dashboard from '../../assets/images/main/dashboard2.png'
import tasks from '../../assets/images/main/tasks.png'
import profile from '../../assets/images/main/profile2.png'
import email from '../../assets/images/main/mail2.png'
import './MainSidebar.css'

interface bools {
  bases: boolean
}
const MainSidebar: React.FC = () => {
  const [dropdownStates, setDropdownStates] = useState<bools>({
    bases: false,
  })
  const HandleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.getAttribute('data-name')
    if (name === 'bases') {
      setDropdownStates((prev) => ({
        ...prev,
        [name]: !prev[name],
      }))
    }
  }
  return (
    <aside className="w-80px h-300px bg-zinc-300 shadow-lg stroke-black flex flex-col opacity-100  items-center  ">
      <div
        className="flex relative w-full h-1/5 justify-center items-center"
        onMouseEnter={HandleChange}
        onMouseLeave={() => {
          setDropdownStates((prev) => ({ bases: false }))
        }}
        tabIndex={0}
        data-name="bases"
      >
        <img
          className="w-40px h-40px  hover:opacity-80 cursor-pointer "
          src={base}
          alt=""
        />
        {dropdownStates.bases ? (
          <div className="absolute  top-0 -right-300px bg-zinc-300 w-300px h-100px borderSet ">
            <ul className="h-full">
              <li className="w-full flex h-1/3 justify-center items-center text-sm border-2 border-gray-500 cursor-pointer text-loginBackground ">
                საერთო ობიექტების რეესტრი
              </li>
              <li className="w-full flex h-1/3 justify-center items-center text-sm border-2 border-gray-500 cursor-pointer text-loginBackground">
                შესამოწმებელი ობიექტების რეესტრი
              </li>
              <li className="w-full flex h-1/3 justify-center items-center text-sm border-2 border-gray-500 cursor-pointer text-loginBackground">
                შემოწმებული ობიექტების რეესტრი
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={dashboard}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={tasks}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={profile}
          alt=""
        />
      </div>
      <div className="flex relative w-full h-1/5 justify-center items-center">
        <img
          className="w-40px h-40px hover:opacity-80 cursor-pointer"
          src={email}
          alt=""
        />
      </div>
    </aside>
  )
}

export default MainSidebar
