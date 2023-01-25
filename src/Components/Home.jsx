import React from 'react'
import { Navbar } from './Navbar'


export const Home = () => {
  return (
    <div className='h-screen w-screen bg-violeta flex justify-center items-center'>

        <Navbar />

    <div className="presentationText w-8/12">

        <h4 className='text-stone-50 text-3xl font-markpro font-medium tracking-tighter mb-3'>Hi! My name is</h4>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-purple-400 text-8xl font-markpro font-bold tracking-tighter'>Matias Sagardia.</h1>
        <p className='text-stone-50 text-6xl font-markpro font-medium tracking-tighter mt-5'>I'm a Front End Developer</p>
        <p className='text-stone-50 text-3xl font-markpro font-medium tracking-tighter mt-5'>I'm focused on building <span className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-purple-400'>modern</span>, <span className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-purple-400'>aesthetic</span> and <span className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-purple-400'>functional</span> products.</p>

        <button className='bg-bgnav text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-purple-400 font-mono text-large font-extrabold mt-20 border p-4 rounded-2xl hover:border-cyan-100 hover:scale-110 transition duration-300 ease-in-out'>VISIT MY GITHUB PAGE</button>

        </div>
    

    </div>
  )
}
