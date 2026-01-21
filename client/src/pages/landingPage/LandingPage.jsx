import React from "react";
import { Link } from "react-router-dom";
import landingPageImage from "../../assets/landingPage.jpg";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";

function LandingPage() {
  return (
    <div className="my-4 py-[50px] md:p1-[120px] px-5 md:flex justify-between items-center">
      <div className="md:w-[40%] items-center px-20 text-center">
        <div className="text-4xl mx-auto text-gray-500 items-center">
          Welcome To Your College Community
        </div>
        <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer">
          <GoogleLoginComp/>
        </div>
        <Link
          to={"/login"}
          className="flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer"
        >
          Sign in with email
        </Link>
        <div className="mx text-start pt-5">
          By clicking COntinue to join or sign in, you agree tp{" "}
          <span className="text-blue-800 cursor-pointer hover:underline">
            AskOnce's User Agreement
          </span>
          ,{" "}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Privacy Policy
          </span>
          , and{" "}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Cookie Policy
          </span>
          .
        </div>
        <div className="mx-auto text-center mb-4 text-lg w-[70%] mt-4">
          New to AskOnce?{" "}
          <Link
            to={"/signUp"}
            className="text-blue-800 cursor-pointer hover:underline"
          >
            Join now
          </Link>
        </div>
      </div>
      <div className="md:w-[50%] h-120">
        <img className="w-full h-full" src={landingPageImage} alt="image" />
      </div>
    </div>
  );
}

export default LandingPage;
