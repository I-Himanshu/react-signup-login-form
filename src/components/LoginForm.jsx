import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  function validateLogin(e){
    e.preventDefault();
    if(!localStorage.getItem(email)){
      location.href = "../signup"
      return
    }
    if(localStorage.getItem(email)!=password){
      alert("Wrong Password");
      return;
    }
    localStorage.setItem("loggedIn",email)
    location.href="../"
  }
  return (
    <div className="grid place-items-center max-w-[400px] w-[80vw] bg-slate-100 rounded-lg overflow-hidden py-0">
      <h2 className="text-center font-semibold text-3xl uppercase md:mb-20 mb-5 bg-slate-700 w-full text-white py-3">
        Login
      </h2>
      <form className="w-full mb:px-10 px-5" onSubmit={
        validateLogin
      }>
        <label className="font-semibold ml-1">Email</label>
        <input className="input" type="email" placeholder="Enter Your Email" 
        value={email} 
        onInput={(e)=>setEmail(e.target.value)}
        required={true}
        />
        <label className="font-semibold ml-1">Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter Your Password"
          value={password} 
          onInput={(e)=>setPassword(e.target.value)}
          required={true}
        />

<input
          className="input bg-blue-500 text-white py-2 px-0 mt-10"
          type="submit"
          value="Login"
          onClick={()=>{}}
        />
        
        <p className="w-[100%] mt-[-10px] text-right mx-auto">
          <a className="text-blue-400" href="https:www.google.com">
            Forgot Password
          </a>
        </p>
        
        <p className="my-5 text-center font-bold"><span className="bg-white p-2 text-center rounded-full">OR</span></p>
        <div className="flex gap-4">
          <input
            className="input bg-blue-500 w-[50%] text-white py-2"
            type="button"
            value="Fakebook"
          />
          <Link
            className="input bg-red-500 w-[50%] text-center text-white py-2 px-0" to='/signup'>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
