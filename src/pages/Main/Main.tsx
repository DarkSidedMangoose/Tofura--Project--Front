import React from 'react'
import MainSidebar from '../../components/main/MainSidebar'
import MainHeader from '../../components/main/MainHeader'
import MainLogos from '../../components/main/MainLogo'

const Main: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-loginBackground">
      <MainLogos />
      <MainHeader />
      <MainSidebar />
    </div>
  )
}

export default Main
