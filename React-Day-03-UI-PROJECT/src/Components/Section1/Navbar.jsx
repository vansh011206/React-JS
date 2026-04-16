import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-white h-16 w-full flex items-center justify-between px-4">
            <button className="uppercase tracking-[3px]  max-w-fit p-2 rounded-3xl text-sm font-semi-bold flex justify-space-between bg-black text-white con">Target Audience</button>
            <div className="flex space-x-4">
                <span className="text-black">Digital Making Platform</span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;

