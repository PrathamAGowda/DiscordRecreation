import React from 'react'
import SideBar from './Components/SideBar'

const App = () => {
  return (
    <div className='grid grid-cols-[311px_1fr_10%] grid-rows-[6%_1fr_8%] h-screen'>
      <div className='row-span-3'><SideBar/></div>
      <div className='bg-green-700 col-span-2'>NavBar</div>
      <div className='bg-pink-700'>Chat</div>
      <div className='bg-black row-span-2'>Activity</div>
      <div className='bg-slate-700 row-span-2'>TextBar</div>
    </div>
  )
}

export default App