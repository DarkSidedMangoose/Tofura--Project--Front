import React from 'react'
import base from '../../assets/images/main/bases.png'
import dashboard from '../../assets/images/main/dashboard.png'
import tasks from '../../assets/images/main/tasks.png'
import profile from '../../assets/images/main/profile.png'
import email from '../../assets/images/main/mail.png'
const MainSidebar: React.FC = () => {
  return (
    <aside className="w-80px h-300px bg-sideBar shadow-lg stroke-black flex flex-col opacity-90 justify-center items-center gap-3 ">
      <img
        className="w-40px h-40px hover:opacity-80 cursor-pointer"
        src={base}
        alt=""
      />
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
