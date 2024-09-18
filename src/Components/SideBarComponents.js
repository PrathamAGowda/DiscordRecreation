import React, { useState } from 'react'

const SideBarComponents = () => {

    const [showPopup, togglePopup] = useState(false)
    const [servers, addServer] = useState([])
    const [serverName, setServerName] = useState('')

    function getFirstLetters(str) {
        const words = str.trim().split(/\s+/);
        
        const firstLetters = words.map(word => word.charAt(0)).join('');
        
        return firstLetters.slice(0,2);
    }

    const AddServer = () => {

        togglePopup(!showPopup)
        
    }

    const CreateServer = () => {
        if(serverName !== '') {
            togglePopup(false)
            let temp = <div className='icon'>{getFirstLetters(serverName)}</div>
            addServer([...servers, {temp, name : serverName}])
            setServerName('')
        }
    }

    const bgClick = (e) => {
        if(e.target === e.currentTarget) {
            togglePopup(false)
            console.log(icons)
        }
    }

    let icons = servers.map((srv, i) => <div key={i} className='popup group mb-2'>
            {srv.temp}
            <span className='infopop'>
                {srv.name}
            </span>
        </div>)

    let popup = 
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 select-none" onClick={bgClick}>
        <div className='flex flex-col w-96 h-64 bg-dgray2 opacity-100 rounded-xl text-white items-center justify-between'>
            <div className='flex flex-col w-full items-center'>
                <div className='flex font-bold text-xl mt-4 w-full justify-end mr-10'>
                    <div className='cursor-pointer text-dgray4 hover:text-white transition-all duration-300' onClick={AddServer}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='text-white font-bold  text-xl'>
                    Create Your Server
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <div className='text-dgray5 font-semibold mb-2 text-sm mx-4'>
                    SERVER'S NAME
                </div>
                <input value={serverName} className='bg-dgray1 w-[350px] h-10 mb-2 p-2 mx-4 outline-none rounded-md' placeholder='Enter Your Server Name' maxLength={20} onChange={(e) => setServerName(e.target.value)} onKeyDown={(e) => {
            if(e.key === "Enter") {
                CreateServer()
            }
          }}></input>
                <div className='flex justify-end w-full bg-dgray6 rounded-b-xl'>
                    <div className='flex h-10 bg-dblue1 mb-2 mt-2 mr-4 w-24 items-center justify-center font-semibold rounded-sm cursor-pointer' onClick={CreateServer}>
                        Create
                    </div>
                </div>
            </div>
        </div>
    </div>

  return (
    <div className='flex flex-col items-center mt-2'>
        <div className='icon text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
            </svg>
        </div>

        <div className='bg-dgray2 h-0.5 w-8 mt-2 mb-2'></div>

        <div>
            {icons}
        </div>

        <div className='popup group' onClick={AddServer}>
            <div className='utilityicon text-3xl text-dgreen1 hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            <span className='infopop'>
                Add a Server
            </span>
        </div>

        <div className='fixed flex justify-center items-center z-10'>
            {showPopup ? popup : <></>}
        </div>

    </div>
  )
}

export default SideBarComponents