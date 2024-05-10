import React, { useEffect, useState } from 'react'
import { FaRegSmileWink } from "react-icons/fa";
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';


function IconController() {
    const [size,setSize]=useState(280);
    const [degree,setDegree]=useState(0);
    const [color,setColor]=useState('#fff');
    const storageValue=JSON.parse(localStorage.getItem('value'))|| defaultValue;

    useEffect(()=>{
        const updatedValue={
            ...storageValue,
            iconSize:size,
            iconDegree:degree,
            iconColor:color,
            icon: 'FaRegSmileWink'
        }

        localStorage.setItem('value',JSON.stringify(updatedValue));

    },[size, degree, color])

  return (
    <div>
        <div>
            <label>Icon</label>
            <div className='flex justify-center items-center p-3 my-2 cursor-pointer bg-gray-200 rounded-lg w-[50px] h-[50px]'>
                <FaRegSmileWink className='w-[50px] h-[50px]'/>
            </div>
            <div className='py-2'>
                <label className='py-2 flex justify-between items-center '>Size <span>{size} px</span></label>
                <Slider defaultValue={[280]} max={512} step={1}  
                onValueChange={(event)=>setSize(event[0])}
                />
            </div>

            <div className='py-2'>
                <label className='py-2 flex justify-between items-center '>Rotate <span>{degree}°</span></label>
                <Slider defaultValue={[0]} max={360} step={1}  
                onValueChange={(event)=>setDegree(event[0])}
                />
            </div>

            <div className='py-2'>
                <label className='py-2 flex justify-between items-center '>Icon Color</label>
                <ColorPickerController hideController={true}
                selectedColor={(color)=>setColor(color)}
                />
            </div>

        
        </div>
    </div>
  )
}

export default IconController

