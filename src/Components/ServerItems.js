import React, { useState } from 'react'
import image from './user.jpg'

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
          <div className='flex h-[43px] w-full bg-dgray6 justify-between items-center p-4 drop-shadow-md'>
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
        <div className='w-full h-16 bg-dgray9 flex justify-between items-center p-3 text-white'>
          <div>
            <div className='flex items-center space-x-2'>
              <div className=''>
                <img src={image} alt='' className='rounded-full size-10'></img>
              </div>
              <div className='flex flex-col -space-y-1'>
                <div className='font-semibold text-sm'>
                  Dracio
                </div>
                <div className='text-dgray8 text-[13px]'>
                  Online
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-3'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-dgray8 cursor-pointer hover:text-white ">
                <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-dgray8 cursor-pointer hover:text-white ">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-dgray8 cursor-pointer hover:text-white ">
                <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>           
        </div>
    </div>
  )
}

export default ServerItems