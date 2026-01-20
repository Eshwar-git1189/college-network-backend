import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 flex justify-center rounded-2xl">
      <div className="md:p-3 w-[100%] flex flex-col items-center py-4">
        <div className="flex gap-1 items-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-xl">AskOnce</h3>
          <img src="" alt="AskOnce" className="w-6 h-6" />
        </div>

        <div className="text-sm">@Copyright 2026</div>
      </div>
    </div>
  );
};

export default Footer;
