import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'

type Props = {}

export default async function SupabseAuth({}: Props) {
        const supabase = createServerComponentClient({ cookies })
    
    const {
      data: { user },
    } = await supabase.auth.getUser();

    
  return (
    <div>
        {user ? (
            <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
            </div>
            ) : (
            <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline  bg-btn-background hover:bg-btn-background-hover"
            >
                Login
            </Link>
        )}
    </div>
  )
}