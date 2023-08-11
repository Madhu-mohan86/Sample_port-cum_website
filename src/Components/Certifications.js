import React from "react";
function Certifications() {
  return (
    <div className="relative">
      <div className="relative p-2 bg-white border-2 border-black rounded-lg w-36 top-5 left-24 shadow-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="fixed w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
        <h1 className="font-bold text-center font-Roboto pl-7">
          Certification
        </h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 ml-24 mr-20 mt-14 gap-y-7 gap-x-7">
        <div
          className="flex flex-row col-span-4 p-5 bg-no-repeat bg-cover border-2 border-black rounded-lg shadow-black "
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1B4h8UK1zjDyAmatjr7VNhyDh4_3IKK20')",
          }}
        >
          <h1 className="text-3xl font-bold font-Inter">
            As a Front End Developer
          </h1>
          <img
            className="w-auto h-24 ml-10 -mt-5 -mb-7"
            src="https://drive.google.com/uc?id=1RWewxWiH6wKWXfdFKEDiTkiLXCLcsp81"
            alt=""
          ></img>
        </div>
        <div
          className="flex flex-row col-span-1 row-span-2 p-5 text-center text-white bg-no-repeat bg-cover border-2 border-black rounded-lg shadow-black "
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=10VhYvrJZVbpYPWhGn0geNnO7ETcPbd_m')",
          }}
        >
          <h1 className="text-3xl font-bold font-Inter">Web 3 & Block chain</h1>
        </div>
        <div
          className="flex flex-row col-span-3 row-span-2 p-5 text-white bg-no-repeat bg-cover border-2 border-black rounded-lg shadow-black"
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=10VhYvrJZVbpYPWhGn0geNnO7ETcPbd_m')",
          }}
        >
          <h1 className="text-3xl font-bold font-Inter">
            Data Structures and algorithms
          </h1>
        </div>
        <div
          className="flex flex-row col-span-3 p-5 text-white bg-no-repeat bg-cover border-2 border-black rounded-lg shadow-black"
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1MrVyYuXuKuzkdpbolWeNAaRo5BMmrPZI')",
          }}
        >
          <h1 className="text-3xl font-bold font-Inter"> UI / UX Design </h1>
        </div>
        <div
          className="col-span-1 p-5 border-2 border-black rounded-lg shadow-black"
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1MrVyYuXuKuzkdpbolWeNAaRo5BMmrPZI')",
          }}
        >
          <h1 className="text-3xl font-bold font-Inter"> Git </h1>
        </div>
      </div>
    </div>
  );
}
export default Certifications;
