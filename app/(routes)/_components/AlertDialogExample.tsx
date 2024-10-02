"use client"
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

const AlertDialogExample = () => {
    const handleAlert = ()=>{
        console.log("bildiirmler acıldı");
        
    }
  return (
    <div>

        <AlertDialog>
  <AlertDialogTrigger>
    <Button variant="greenBtn"><Bell/></Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Bildirimler</AlertDialogTitle>
      <AlertDialogDescription>
     Bildirimleri açmak istiyor musunuz?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleAlert}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      


    </div>
  )
}

export default AlertDialogExample
