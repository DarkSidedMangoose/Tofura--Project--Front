import React, { useState } from 'react'
import base from '../../assets/images/main/base.png'
import dashboard from '../../assets/images/main/dashboard2.png'
import tasks from '../../assets/images/main/tasks.png'
import profile from '../../assets/images/main/profile2.png'
import email from '../../assets/images/main/mail2.png'

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
    <aside className="w-80px h-300px bg-sideBar shadow-lg stroke-black flex flex-col opacity-90 justify-center items-center gap-3 ">
      <div
        className="flex relative"
        onClick={HandleChange}
        onBlur={() => {
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
          <div className="absolute  top-0 -right-220px bg-sideBar w-200px h-100px">
            <ul className="h-full">
              <li className="w-full flex h-1/3 justify-center items-center">
                pirveli
              </li>
              <li className="w-full flex h-1/3 justify-center items-center">
                pirveli
              </li>
              <li className="w-full flex h-1/3 justify-center items-center">
                pirveli
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <img
        className="w-40px h-40px hover:opacity-80 cursor-pointer"
        src={dashboard}
        alt=""
      />
      <img
        className="w-40px h-40px hover:opacity-80 cursor-pointer"
        src={tasks}
        alt=""
      />
      <img
        className="w-40px h-40px hover:opacity-80 cursor-pointer"
        src={profile}
        alt=""
      />
      <img
        className="w-40px h-40px hover:opacity-80 cursor-pointer"
        src={email}
        alt=""
      />
    </aside>
  )
}

export default MainSidebar
