import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-slate-800 h-12 '>
            <div className='flex justify-around items-center h-full  text-white text-sm'>
                <div className="logo flex items-center cursor-pointer text-lg font-bold">
                    <span className="text-green-500">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-500">    OP/&gt;</span>
                </div>
                <div className='bg-green-600 rounded-full flex items-center cursor-pointer justify-center pr-2 ring-2 ring-white'>
                    <img className='w-8 invert' src="icons/github.svg" alt="" />
                    <span className='text-md text-white font-bold'> 
                    GitHub
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
