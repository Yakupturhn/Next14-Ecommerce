"use client"

import { ModeToggle } from "@/components/ModeToggle"
import { Input } from "@/components/ui/input"
import { Heart,  Search, User } from "lucide-react"
import {Pacifico} from "next/font/google"
import React, { useEffect, useState } from 'react'
import NavMenu from "./NavMenu"
import { Button } from "@/components/ui/button"
import MobilMenu from "./MobilMenu"
import CartMenu from "./Cart"
import Link from "next/link"
import { useRouter } from "next/navigation"

const pacifiko = Pacifico({subsets:["cyrillic"],weight:"400"})


const Header = () => {
    const router = useRouter()
    const [query, setQuery]=useState(" ")
    const [warning, setWarning] = useState(""); 


    useEffect(() => {
        const timer = setTimeout(() => {
            setWarning("");
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [warning]);

    const handleSearch = ()=>{

        if(query.trim()){
            router.push(`/search?query=${encodeURIComponent(query)}`)
            setQuery("")
        }else{
            setWarning("Lütfen boşluk bırakmadan arayınız");
        }
    }
  return (
    <div  className='mx-auto bgone shadow-md'>
        <div className='container flex flex-row items-center justify-between p-5'>
<div>
    <h2 className={`${pacifiko.className} text-xl`}>E-Commerce</h2>
</div>
<div className="hidden md:flex md:flex-col relative md:min-w-96 lg:w-1/2">
    <Input className="w-full border-2" value={query}  onChange={(e)=>setQuery(e.target.value)}/>
    <Button  onClick={handleSearch} variant="link" className="absolute right-1">
    {warning && ( 
                        <div className="text-red-500">{warning}</div>
                    )}    <Search/>  
    </Button>
    

</div>



<div className="flex flex-row items-center space-x-4">
    <ModeToggle/>
    <Link href="/fav">
        <Heart/>
   </Link>

   <CartMenu/>

   <Link href="/login">
       <User/>

   </Link>
    <MobilMenu/>
</div>

        </div>

        <NavMenu/>
      
    </div>
  )
}

export default Header
