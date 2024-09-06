import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import Top from "./components/Top";
import Foot from "./components/Foot";
import MyAccount from "./components/MyAccount";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="welcome" element={<Welcome />} />
        {/* <Route path="track" element={<Track />} /> */}
        <Route path="myaccount" element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
