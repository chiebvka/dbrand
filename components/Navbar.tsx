'use client'


import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Architects_Daughter } from 'next/font/google';
import Link from 'next/link';
import NavLinks from './NavLinks';



const obitron = Architects_Daughter({ weight: '400', subsets: ["latin"] })

type Props = {}

export default function Navbar({}: Props) {


    const [open, setOpen] = useState(false)

  return (
    <div className='border-2 w-full md:max-w-7xl flex justify-between   items-center p-3 text-sm text-foreground border-white ' onClick={() => setOpen(!open)} >
          <div className="flex w-full border-2 border-yellow-500  justify-between ">
            <Link className={`${obitron.className} text-3xl mx-3 `} href="/">
                dbrand
            </Link>
            <div className="flex md:hidden  text-3xl mx-3 " onClick={()=>setOpen(!open)} >

              {
                open ? (

                  <FaBars  />
                ) : (
                  <AiOutlineCloseCircle />
                )
              }
            </div>
          </div>


      <div className="flex">
        <div className="border-2 hidden md:flex border-green-500 ">
            <span className='flex p-3'>
                <span className='mx-3 border-2  flex items-center  border-red-500'> 
                    <NavLinks />
                </span> 
            </span>
        </div>

        {/** MObile Navigation  */}

        <span className={`md:hidden bg-slate-700 absolute border-2 border-purple-500 w-full  h-full top-20  py-10 pl-4 transition-500 ${open ? "left-0" : "-left-[100%]"} `}>

            <span className='mx-3 border-2 flex items-center gap-8 border-green-500'> 
                <NavLinks />
                <div className="py-5">

                </div>
            </span> 
        </span>
      </div>
      
      

    </div>
  )
}