import React from 'react'
import Footer from './_components/Footer'
import Header from './_components/menu/Header'
import { Toaster } from "@/components/ui/toaster"


interface RoutesLayoutProps {
    children:React.ReactNode
}

const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (

    <>
    <Header/>
    {children}
    <Footer/>
            <Toaster />

    </>

    
  )
}

export default RoutesLayout
