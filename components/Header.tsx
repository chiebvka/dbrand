
import React, { useState } from 'react'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'


import { Architects_Daughter } from 'next/font/google';
import NavLinks from './NavLinks'
import Navbar from './Navbar'
import Buttons from './Buttons'


const obitron = Architects_Daughter({ weight: '400', subsets: ["latin"] })

export default async function Header() {
    
    const supabase = createServerComponentClient({ cookies })
    
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // const [open, setOpen] = useState(false)


  return (
    <div className='w-full p-4 bg-slate-500 border-2 border-green-500'>
        <nav className="w-full flex justify-center border-2  border-red-500 h-16">
            {/* <div className="flex "> */}
                        <Navbar />
             

                <div className="border w-3/12 md:flex items-center justify-end hidden  ">

                    <Buttons />
                </div>
                {/** Mobile navigation   */}
                {/* <span className={`md:hidden bg-slate-700 absolute border-2 border-purple-500 w-full left-0 h-full top-0  py-24 pl-4`}>
                    <span className='mx-3 border-2 flex items-center gap-8 border-green-500'> 
                        <NavLinks />
                        <div className="py-5">
    
                        </div>
                    </span> 
                </span> */}
  
        </nav>
    </div>
  )
}