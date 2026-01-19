import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
        <div className="text-3xl">Sign In</div>

        <div className="my-5">Google login btn</div>

        <div className="flex items-center gap-2">
          <div className="border-b border-gray-400 w-[45%]"></div>
          <div>or</div>
          <div className="border-b border-gray-400 w-[45%]"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your password"
            />
          </div>
          <div className="w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-2">
            Sign in
          </div>
        </div>
      </div>
      <div className="mt-4 mb-14">
        New to AskOnce?{" "}
        <Link
          to={"/signUp"}
          className="text-blue-800 cursor-pointer hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
