import React from "react";
import { Link } from "react-router-dom";

function NavbarV1() {
  return (
    <nav className="w-full bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border rounded-2xl">
      <div className="flex justify-between">
        <Link to={"/"} className="flex gap-0 items-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-3xl">AskOnce</h3>
          <img src="" alt="" />
        </Link>
      </div>
      <div className="flex box-border md:gap-4 gap-2 justify-center items-center">
        <Link
          to={"/signUp"}
          className="md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer"
        >
          Join now
        </Link>
        <Link
          to={"/login"}
          className="px-4 py-2 box-border border-1 text-blue-800 border-blue-800 rounded-3xl text-xl hover:bg-blue-50 cursor-pointer"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}

export default NavbarV1;
