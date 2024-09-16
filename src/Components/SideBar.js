import React from 'react'
import SideBarComponents from './SideBarComponents'
import ServerItems from './ServerItems'

const SideBar = () => {
  return (
    <div className='h-full fixed w-[311px] grid grid-cols-[24%_1fr]'>
        <div className='bg-dgray1 col-span-1'><SideBarComponents/></div>
        <div className='bg-dgray3 col-span-1'><ServerItems/></div>
    </div>
  )
}

export default SideBar