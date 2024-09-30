import React from 'react'
import {
  Sheet,
  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Menu, ShoppingBagIcon } from 'lucide-react'
import { categories } from '@/constants'
import Link from 'next/link'

const CartMenu = () => {
  return (
    <div>
      
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="link"><ShoppingBagIcon/></Button>
      </SheetTrigger>
      <SheetContent >
        
        <div className='flex flex-col mt-8 space-y-6'>
            Empty Cart
        </div>
       
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default CartMenu
