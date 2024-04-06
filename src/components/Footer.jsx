import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-slate-800 text-white h-[55px] flex flex-col items-center w-[100vw] lg:w-full'>
                <div className="logo flex items-center justify-center cursor-pointer text-white text-xl font-bold">
                    <span className="text-green-500">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-500">    OP/&gt;</span>
                </div>
                Created by ❤ with CodewithHarry
            </div>
        </>
    )
}

export default Footer
