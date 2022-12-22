import React,{useState} from "react";
import { Link, redirect} from "react-router-dom";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  function validateSignUp(e){
    e.preventDefault();
    if(password!=Cpassword){
        alert("Password Didn't Match");
        return;
    }
    if(localStorage.getItem(email)){
        alert("Email Already Registered");
        return;
    }
    localStorage.setItem(email,password);
    location.href = "../login";
  }
  return (
    <div className="grid place-items-center max-w-[400px] w-[80vw] bg-slate-100 rounded-lg overflow-hidden py-0">
      <h2 className="text-center font-semibold text-3xl uppercase md:mb-20 mb-5 bg-slate-700 w-full text-white py-3">
        Sign Up
      </h2>
      <form className="w-full mb:px-10 px-5" onSubmit={validateSignUp}>
        <label className="font-semibold ml-1">Email</label>
        <input
          className="input"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          required={true} />
        <label className="font-semibold ml-1">Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          required={true}
        />
        <label className="font-semibold ml-1">Confirm Password</label>
        <input
          className="input"
          type="password"
          placeholder="Confirm Your Password"
          value={Cpassword}
          onInput={(e) => setCPassword(e.target.value)}
          required={true}
        />
        <input
          className="input bg-blue-500 text-white py-2 px-0 mt-10"
          type="submit"
          value="Register"
          onClick={() => {}}
        />
        <p className="my-5 text-center font-bold">
          <span className="bg-white p-2 text-center rounded-full">OR</span>
        </p>
        <div className="flex gap-4">
          <input
            className="input bg-blue-500 w-[50%] text-white py-2"
            type="button"
            value="Fakebook"
          />
          <Link
            className="input bg-red-500 w-[50%] text-center text-white py-2 px-0"
            to="/login"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}