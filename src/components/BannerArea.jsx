import React from "react";
import yoHeavenImage from "../assets/yo_heaven.png";

/**
 * The BannerArea component creates a banner area and centers the text inside it.
 *
 * Usage:
 * <BannerArea />
 */
function BannerArea() {
  return (
    <div className="flex items-start justify-center h-screen bg-white pt-3">
      {/* Buraya eklenen içerik, banner alanında görünecek */}
      <div className="bg-white rounded-lg shadow-sm">
        <h1 className="text-red-800 text-3xl font-semibold">
          Hello!
          <p>
            Welcome to
            <span className="text-blue-400 text-3xl"> Icon Heaven App!</span>
          </p>
        </h1>
        <p className="text-gray-600 pt-5">
          You can press 'F11' to use it with the best experience.
        </p>

        <div className="text-sm">
          <p className="ml-2 mt-2 text-red-500">1. Icon Section</p>
          <lu>
            <li>Select an Icon</li>
            <li>Set the size and rotation settings.</li>
            <li>Adjust the color settings</li>
          </lu>
          <p className="ml-2 mt-2 text-red-500">2. Icon Section</p>
          <lu>
            <li>Set the rounded and padding settings.</li>
            <li>Adjust the background color settings</li>
          </lu>

          <p className="ml-2 mt-2 text-red-500">3. Download</p>
          <lu>
            <li>
              Click on the <span className="text-red-600">download</span> button
              in the top right corner.
            </li>
          </lu>
        </div>
        <div className="flex-col flex items-center justify-center mt-5">
          <img src={yoHeavenImage} alt="" className="w-[80px] h-[80px]" />
          <p className="text-blue-500 font-semibold mt-1">DONE!</p>
        </div>
      </div>
    </div>
  );
}

export default BannerArea;
