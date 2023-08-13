import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div className="relative flex justify-center p-2 bg-white border-2 border-black rounded-lg w-36 top-5 left-24 place-items-center shadow-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
          />
        </svg>
        <h1 className="font-bold text-center font-Roboto">Navigation</h1>
      </div>
      <div className="flex justify-center">
        <div className=" mt-10 border-2 border-black rounded-xl shadow-black h-[30rem] w-[40%] overflow-hidden">
          <img
            src=""
            alt=""
          />
        </div>
      </div>
      <div className="mt-20 ml-24">
        <Link to="/Blogs">
          <span className="flex flex-row">
            <h1 className="text-2xl font-semibold font-Roboto hover:mr-10">
              {" "}
              Blogs
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="pb-6 pl-7 w-14 h-14"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
        <hr class="w-56 mb-5 -mt-4 h-[0.10rem] -my-1 bg-black border-0 rounded dark:bg-gray-700"></hr>
        <Link to="/Services">
          <span className="flex flex-row">
            <h1 className="text-2xl font-semibold font-Roboto hover:mr-10">
              {" "}
              Services
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="pb-6 pl-7 w-14 h-14"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
        <hr class="w-56 mb-5 -mt-4 h-[0.15rem] -my-1 bg-black border-0 rounded dark:bg-gray-700"></hr>
        <Link to="/Newsletters">
          <span className="flex flex-row">
            <h1 className="text-2xl font-semibold font-Roboto hover:mr-10">
              {" "}
              News Letters
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="pb-6 pl-7 w-14 h-14"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
        <hr class="w-56 mb-5 -mt-4 h-[0.10rem] -my-1 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
    </div>
  );
}
export default Menu;
