import React from "react";

export default function NavBar() {
  return (
    <div className="w-full">
      <nav className="navbar navbar-expand-lg bg-red-900 px-10">
        <div className="flex flex-row gap-5 w-full">
          <button className="">
            <span className="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-list mid:hidden"
                viewBox="0 0 16 16"
                onClick={
                  ()=>{}
                }
              >
                <path
                  fillRule="evenodd"
                  d="M2 11.5A.5.5 0 0 1 2.5 11h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 2.5 7h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 2.5 3h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </button>
          <a className="navbar-brand text-white font-extrabold self-center" href="#">
            TheCodersGroup
          </a>
        </div>
      </nav>
    </div>
  );
}
