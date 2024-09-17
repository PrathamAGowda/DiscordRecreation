import React from 'react'
import SideBar from './Components/SideBar'
import NavBar from './Components/NavBar'
import Activity from './Components/Activity'
import TextBar from './Components/TextBar'
import ChatWindow from './Components/ChatWindow'

const App = () => {
  return (
    <div className='grid grid-cols-[311px_1fr_256px] grid-rows-[43px_1fr_7%] h-screen overflow-hidden'>
      <div className='row-span-3'><SideBar/></div>
      <div className='bg-green-700 col-span-2'><NavBar/></div>
      <div className='bg-pink-700'><ChatWindow/></div>
      <div className='bg-black row-span-2'><Activity/></div>
      <div className='bg-slate-700 row-span-2'><TextBar/></div>
    </div>
  )
}

export default App