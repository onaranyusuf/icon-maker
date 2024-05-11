import React, { useState } from "react";
import { Smile, icons } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconList } from "./constant/icons";

function IconList({selectedIcon}) {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue=JSON.parse(localStorage.getItem('value'));
  const [icon,setIcon]=useState(storageValue?storageValue?.icon:'Smile');

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };

  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="flex justify-center items-center p-3 my-2 cursor-pointer bg-gray-200 rounded-lg w-[50px] h-[50px]"
        >
          <Icon name={icon} color={'#000'} size={20}/>
        </div>
      </div>
      <Dialog open={openDialog}>
        <DialogContent onClick={() => setOpenDialog(false)}>
          <DialogHeader>
            <DialogTitle>Use an Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 overflow-auto h-[350px] p-4">
                {iconList.map((icon, index) => (
                  <div className="flex border p-3 rounded-md items-center justify-center cursor-pointer"
                  onClick={()=>{selectedIcon(icon);setOpenDialog(false);setIcon(icon)}}>
                    <Icon name={icon} color={'#000'} size={20}/>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
