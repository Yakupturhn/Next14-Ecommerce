import React from 'react'
import Footer from './_components/Footer'
import Header from './_components/menu/Header'

interface RoutesLayoutProps {
    children:React.ReactNode
}

const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (

    <>
    <Header/>
    {children}
    <Footer/>
    </>

    
  )
}

export default RoutesLayout
