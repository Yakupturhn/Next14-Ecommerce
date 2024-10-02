"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProductType } from '@/constants'
import Image from 'next/image'


interface ProductModalTypeProps{
    product:ProductType
}

const ProductModal = ({product}:ProductModalTypeProps) => {
    const [quantity,setQuantity]= useState(0)

    const handleInc = ()=>{

        setQuantity(quantity+1)


    }

     const handleDec = ()=>{

        if(quantity>0){
                setQuantity(quantity-1)
        }

        
    }


  return (
    <div>

<Dialog>
  <DialogTrigger > <Button variant="destructive">Detail</Button></DialogTrigger>
  <DialogContent className='sm:max-w-[900px]'>
  <div className='w-full'>

    <div className='grid grid-cols-1 md:grid-cols-2'>
<div className=''>
      <Image alt="" className='w-full h-96 object-cover mb-4 rounded-xl' src={product.image} width={500} height={500} />

</div>
<div className='p-4'>
    <h2 className='text-4xl  font-semibold'>{product.title}</h2>
    <p className='mt-5 font-light'>{product.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
         architecto dolore, natus error corporis possimus! Commodi ratione nulla aliquid amet
         quibusdam eaque quisquam voluptatibus odio!</p>
     <div className='flex mt-2 justify-between items-center'>
    <span>${product.price}</span>
    <span className='line-through'>${product.mrp}</span>


  </div>
      <div className='mt-8'>
     <div className='flex flex-row items-center gap-2 justify-center'>
        <Button onClick={handleDec} variant={"destructive"} size={"icon"}>-</Button>
        {quantity}
        <Button  onClick={handleInc} variant={"destructive"} size={"icon"}>+</Button>
    </div>
</div>
</div>



    </div>

   
  </div>

  <DialogFooter className=''>
    
    <Button variant="default">Save Changes</Button>

  </DialogFooter>
  </DialogContent>

</Dialog>

    </div>
  )
}

export default ProductModal
