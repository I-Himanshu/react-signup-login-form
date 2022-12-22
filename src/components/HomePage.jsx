import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  if (localStorage.getItem("loggedIn")) {
    return (
      <div className="flex justify-center items-center flex-col">
        {"Welcome " + localStorage.getItem("loggedIn").split("@")[0]}
        <button
          className="block bg-red-400 p-4 rounded-md font-bold uppercase"
          onClick={()=>{localStorage.removeItem("loggedIn");location.href="./login"}}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col">
        <Link
          className="bg-red-400 p-4 rounded-md font-bold uppercase"
          to="/login"
        >
          Please Login
        </Link>
      </div>
    );
  }
}
