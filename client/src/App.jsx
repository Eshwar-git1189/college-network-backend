import React from "react";
import "./index.css";
import "./App.css";
import NavbarV1 from "./components/navbarV1/NavbarV1";
import LandingPage from "./pages/landingPage/landingPage";
import Footer from "./components/Footer/footer";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <>
      <div className="bg-gray-100 w-[100%] h-[100%] box-border">
        <NavbarV1 />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
