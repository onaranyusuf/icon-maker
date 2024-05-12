import React, { useContext, useEffect, useState } from 'react'
import { FaRegSmileWink } from "react-icons/fa";
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import { Smile } from 'lucide-react';
import IconList from './IconList';


function IconController() {
    const storageValue=JSON.parse(localStorage.getItem('value'));

    const [size,setSize]=useState(storageValue?storageValue?.iconSize:280);
    const [degree,setDegree]=useState(storageValue?storageValue?.iconDegree:0);
    const [color,setColor]=useState(storageValue?storageValue?.iconColor:'#28b9b9');
    const [strokeWidth,setStrokeWidth]=useState(storageValue?storageValue?.iconStrokeWidth: 2);
    const {updateStorage, setUpdateStorage}=useContext(UpdateStorageContext);
    const [icon,setIcon]=useState(storageValue?storageValue?.icon:'Smile');

    useEffect(()=>{
        const updatedValue={
            ...storageValue,
            iconSize:size,
            iconDegree:degree,
            iconColor:color,
            iconStrokeWidth: strokeWidth,
            icon: icon
        }
        setUpdateStorage(updatedValue);
        localStorage.setItem('value',JSON.stringify(updatedValue));

    },[size, degree, color, strokeWidth, icon])

  return (
    <div>
        <div>
            <div>
                <IconList selectedIcon={(icon)=>setIcon(icon)}/>
            </div>

            <div className='py-2'>
                <label className='py-2 flex justify-between items-center '>Size <span>{size} px</span></label>
                <Slider defaultValue={[size]} max={512} step={1}  
                onValueChange={(event)=>setSize(event[0])}
                />
            </div>

            <div className='py-2'>
                <label className='py-2 flex justify-between items-center '>Rotate <span>{degree}°</span></label>
                <Slider defaultValue={[degree]} max={360} step={1}  
                onValueChange={(event)=>setDegree(event[0])}
                />
            </div>

            <div className='py-2'>
                <label className='py-2 flex justify-between items-center '>Stroke Width <span>{strokeWidth}px</span></label>
                <Slider defaultValue={[strokeWidth]} max={4} step={0.1}  
                onValueChange={(event)=>setStrokeWidth(event[0])}
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

