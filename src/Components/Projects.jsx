import React from 'react'


export const Projects = () => {
  return (
    <div className='h-screen w-screen bg-violeta flex flex-col items-center gap-40'>

        <p className='text-white font-medium font-markpro tracking-tighter text-4xl'>Let's take a look at my projects 💼</p>

        <div className="cardContainer flex flex-col items-center w-1/2 h-1/2 bg-gradient-to-t from-bgnav to-transparent border-0 rounded-lg">

            <div className="card flex flex-row justify-center w-1/2 h-1/6">

              <div className="description flex flex-col w-1/2 gap-20">

                  <h1 className='text-white font-medium font-markpro tracking-tighter text-3xl'>BEDZ Wines</h1>

                  <p className='text-white font-medium font-markpro tracking-tighter text-xl'>Website created for a wine company. 
                  It contains various sections with company information, and integrates a shopping cart.</p>

              </div>

            </div>


        </div>


    </div>
  )
}
