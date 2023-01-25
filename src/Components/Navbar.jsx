import React from 'react'

export const Navbar = () => {
  return (
    <>

        <ul className='bg-bgnav w-2/5 h-16 absolute top-8 flex justify-end items-center gap-10 font-markpro font-light tracking-tighter border rounded-2xl border-navborder '>
            <li className='text-zinc-300 text-xl group transition-all duration-300 ease-in-out cursor-pointer'>
                <span className='bg-left-bottom bg-gradient-to-r from-cyan-200 to-purple-200 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Home
                </span>
                    </li>
            <li className='text-zinc-300 text-xl group transition-all duration-300 ease-in-out cursor-pointer'>
                <span className='bg-left-bottom bg-gradient-to-r from-cyan-200 to-purple-200 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Skills
                </span>
            </li>
            <li className='text-zinc-300 text-xl group transition-all duration-300 ease-in-out cursor-pointer'>
                <span className='bg-left-bottom bg-gradient-to-r from-cyan-200 to-purple-200 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Projects
                </span>
            </li>
            <li className='text-zinc-300 text-xl group transition-all duration-300 ease-in-out cursor-pointer mr-10'>
                <span className='bg-left-bottom bg-gradient-to-r from-cyan-200 to-purple-200 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Contact
                </span>
            </li>
        </ul>

    </>
  )

}


