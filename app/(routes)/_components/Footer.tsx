"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const router = useRouter()
  return (
    <div className='text-sm text-center flex items-center  flex-col p-4'>
    <div>
        <Button variant="link" onClick={()=>router.push("/")}>
        All right Reserved 
        </Button>
    </div>
      <div>
          <Link href={`https://github.com/Yakupturhn`} target='_blank'> 
        Copyright @ Yakup Turhan </Link>
      </div>
    </div>
  )
}

export default Footer
