import React from "react";
import yoHeavenImage from "../assets/yo_heaven.png";
import { FaGithub } from "react-icons/fa";

const MobileError = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 px-5">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-red-700">Oops!</h2>
        <p className="text-gray-700">
          This app is optimized for desktop use only.
        </p>
        <p>
          You can go to{" "}
          <span className="text-red-500">
            <a
              href="https://github.com/onaranyusuf"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </span>{" "}
          for more projects!
        </p>
        <div className="mt-5 flex items-center justify-center">
          <a
            href="https://github.com/onaranyusuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-[40px] h-[40px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileError;
