import React, { useState } from "react";
import { RiImageEditFill } from "react-icons/ri";
import { FaPencilRuler } from "react-icons/fa";
import { GiArmorUpgrade } from "react-icons/gi";

function SideNav({selectedIndex}) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: FaPencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: RiImageEditFill,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => (
          <h2
          onClick={() => {setActiveIndex(index);
            selectedIndex(index)
          }}
          className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center gap-2 menu-item-color ${activeIndex === index && 'active'}`}
          key={index}
        >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
