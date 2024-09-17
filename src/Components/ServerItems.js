import React, { useState } from 'react'

const ServerItems = () => {

  const [arrowDrop, setDrop] = useState(true)
  const [popUp, setPop] = useState(false)

  const dropDown = () => {
    setDrop(!arrowDrop)
    setPop(!popUp)
  }

  return (
    <div className='bg-dgray3 h-full w-[237px] flex flex-col justify-between cursor-default select-none'>
        <div>
          <div className='flex h-[43px] w-full bg-dgray2 justify-between items-center drop-shadow-lg p-4'>
            <div className='text-white font-semibold text-md'>
                Server Name
            </div>
            <div className='text-dgray5 cursor-pointer' onClick={dropDown}>
              <div>
                {
                  arrowDrop ? 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                            : 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                              </svg>
                          
                }
              </div>
            </div>
          </div>
          {
            popUp ?
                    <div className='fixed flex flex-col text-dgray8 text-[13px] bg-dgray7 w-[218px] h-[390px] mt-3 ml-[9px] rounded-lg px-2'>
                      <div className='w-full h-8 cursor-pointer hover:bg-dblue1 hover:text-white flex items-center mt-2 rounded-sm p-2'>
                        Server Boost
                      </div>
                      <div className='bg-dgray6 w-full h-px mt-1 mb-1'></div>
                      <div className='w-full h-8 cursor-pointer p-2 mb-1 text-dblue1 flex items-center rounded-sm hover:text-white hover:bg-dblue1'>
                        Invite People
                      </div>
                      <div className='w-full h-8 cursor-pointer mb-1 hover:bg-dblue1 hover:text-white flex items-center rounded-sm p-2'>
                        Server Settings
                      </div>
                      <div className='w-full h-8 cursor-pointer mb-1 hover:bg-dblue1 hover:text-white flex items-center rounded-sm p-2'>
                        Create Event
                      </div>
                      <div className='w-full h-8 cursor-pointer hover:bg-dblue1 hover:text-white flex items-center rounded-sm p-2'>
                        App Directory
                      </div>
                      <div className='bg-dgray6 w-full h-px mt-1 mb-1'></div>
                      <div className='w-full h-8 cursor-pointer mb-1 hover:bg-dblue1 hover:text-white flex items-center rounded-sm p-2'>
                        Notification Settings
                      </div>
                      <div className='w-full h-8 cursor-pointer hover:bg-dblue1 hover:text-white flex items-center rounded-sm p-2'>
                        Privacy Settings
                      </div>
                      <div className='bg-dgray6 w-full h-px mt-1 mb-1'></div>
                      <div className='w-full h-8 cursor-pointer mb-1 hover:bg-dblue1 hover:text-white flex items-center rounded-sm p-2'>
                        Edit Server Profile
                      </div>
                      <div className='w-full h-8 cursor-pointer hover:bg-dblue1 hover:text-white flex items-center rounded-sm p-2'>
                        Hide Muted Channels
                      </div>
                      <div className='bg-dgray6 w-full h-px mt-1 mb-1'></div>
                      <div className='w-full h-8 cursor-pointer text-md p-2 mb-1 text-red-600 flex items-center rounded-sm hover:text-white hover:bg-red-600'>
                        Invite People
                      </div>
                    </div>
                  :
                    <></>
          }
        </div>
        <div>
           Guys
        </div>
    </div>
  )
}

export default ServerItems