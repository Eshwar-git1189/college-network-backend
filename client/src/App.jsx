import React from "react";
import "./index.css";
import NavbarV1 from "./components/navbarV1/NavbarV1";
import LandingPage from "./pages/landingPage/landingPage";
import Footer from "./components/Footer/footer";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import Login from "./pages/Login/Login";
import NavbarV2 from "./components/navbarV2/NavbarV2";
import Feeds from "./pages/Feeds/Feeds";
import MyNetwork from "./pages/MyNetwork/MyNetwork";
import Message from "./pages/Messages/Message";
import Profile from "./pages/Profile/Profile";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const changeLoginValue = (val) => {
    setIsLogin(val);
  };
  // const fetchData = async () => {
  //   await axios
  //     .post("http://localhost:5000/api/auth/login", { email: "", password: "" })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <div className="bg-gray-100 w-full h-full box-border">
        {isLogin ? <NavbarV2 /> : <NavbarV1 />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login changeLoginValue={changeLoginValue} />}
          />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
