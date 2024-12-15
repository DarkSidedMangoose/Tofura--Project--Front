import React from 'react'
import MainSidebar from '../../components/main/MainSidebar'
import MainHeader from '../../components/main/MainHeader'
import MainLogos from '../../components/main/MainLogo'
import { SecondarySidebar } from '../../components/main/MainSidebar'
import MainMain from '../../components/main/MainMain'

const Main: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-loginBackground">
      <MainLogos />
      <MainHeader />
      <div className="flex  gap-4 h-80%  ">
        <MainSidebar />
        <MainMain />
      </div>
    </div>
  )
}

export default Main
