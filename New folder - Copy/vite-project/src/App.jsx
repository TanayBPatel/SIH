import React from "react";
import ReactDOM from "react-dom";
import SignUp from "./components/SignUp";
import Foot from "./components/Foot";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Welcome from "./components/Welcome";
import Track from "./components/Track";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <Top />
      <Navbar />
      <Foot />

      <Top />
      <Welcome />
      <Foot />

      <Top />
      <Track />
      <Foot />

      <Top />
      <SignUp />
      <Foot />

      <Top />
      <Dashboard />
      <Foot />
    </>
  );
}
