import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { categories } from '@/constants'
import Link from 'next/link'

const MobilMenu = () => {
  return (
    <div className='flex md:hidden'>
      

      <Sheet>
      <SheetTrigger asChild>
        <Button variant="link"><Menu/></Button>
      </SheetTrigger>
      <SheetContent >
        
        <div className='flex flex-col mt-8 space-y-6'>
             {categories?.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                >
                  {component.title}
                </Link>
              ))}
        </div>
       
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default MobilMenu
