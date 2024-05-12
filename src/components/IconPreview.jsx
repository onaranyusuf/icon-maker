import React, { useContext, useEffect, useState } from "react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import html2canvas from "html2canvas";

function IconPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
        downloadPngIcon();
    }
  }, [downloadIcon]);

  const Icon = ({ name, color, size, rotate, strokeWidth }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        strokeWidth={strokeWidth}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  /**
   * using for download
   */
  const downloadPngIcon=()=>{
    const downloadIconDiv=document.getElementById(`downloadIconDiv`);
    html2canvas(downloadIconDiv,{
        backgroundColor:null
    }).then(canvas=>{
        const pngImage=canvas.toDataURL('image/png');
        const downloadLink=document.createElement('a');
        downloadLink.href=pngImage;
        downloadLink.download=`YO_Icon_Heaven_${storageValue?.icon}.png`;
        downloadLink.click();

        
    })
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="h-[512px] w-[512px] bg-gray-200  outline-dotted outline-gray-500"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadIconDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            strokeWidth={storageValue?.iconStrokeWidth}
            rotate={storageValue?.iconDegree}
          />
        </div>
      </div>
    </div>
  );
}

export default IconPreview;
