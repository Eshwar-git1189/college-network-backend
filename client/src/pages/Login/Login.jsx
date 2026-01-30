import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
import { useState } from "react";
import { useEffect } from "react";
import {ToastContainer, toast} from 'react-toastify'
import axios from "axios";

const Login = (props) => {
  const [loginField, setLoginField] = useState({ email: "", password: "" });

  const onChangeInput = (event, key) => {
    setLoginField({ ...loginField, [key]: event.target.value });
  };

const handleLogin = async () => {
  if (loginField.email.trim().length === 0 || loginField.password.trim().length === 0) {
    return toast.error("Please fill all credentials")
  }

  await axios.post('http://localhost:4000/api/auth/login', loginField, { withCredentials: true }).then((res) => {

    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('userInfo', JSON.stringify(res.data.userExist));

  }).catch(err => {
    console.log(err)
    toast.error(err.response?.data?.error)
  })
}


  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
        <div className="text-3xl">Sign In</div>

        <div className="my-5">
          <GoogleLoginComp />
        </div>

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
              value={loginField.email} onChange={(e)=>{onChangeInput (e, 'email')}}
              id="email"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={loginField.password} onChange={(e)=>{onChangeInput (e, 'password')}}
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
      <ToastContainer/>
    </div>
  );
};

export default Login;
