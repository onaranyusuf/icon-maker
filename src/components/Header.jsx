import React from 'react'
import { Button } from './ui/button'
import { FaDownload } from "react-icons/fa6";

function Header() {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
        <img src="/vite.svg" alt="" />
        <Button className="flex gap-2 items-center text-white"> <FaDownload className='h-4 w-4'/> Download </Button>
    </div>
  )
}

export default Header