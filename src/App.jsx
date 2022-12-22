import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="bg-[#FAAF40] min-h-screen w-full flex items-center justify-between flex-col">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/login" element={<LoginForm/>}></Route>
        <Route exact path="/signup" element={<SignUpForm/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
