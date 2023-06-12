import React from "react";
function Certifications(){
    return(
        <body>
        <div className='bg-white w-36 border-2 border-black p-2  relative top-5 left-24 rounded-lg shadow-black'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fixed" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
        </svg>
       <h1 className='font-Roboto  font-bold text-center pl-7'>Certification</h1>
       </div>
        <div className="mt-14 grid grid-cols-4 gap-y-7 gap-x-7 grid-rows-4 ml-14 mr-14">
        <div className="bg-no-repeat flex flex-row bg-cover col-span-4 shadow-black p-5 border-2 border-black rounded-lg " style={{backgroundImage:"url('https://drive.google.com/uc?id=1B4h8UK1zjDyAmatjr7VNhyDh4_3IKK20')"}}>
        <h1 className="font-Inter font-bold text-3xl">As a Front End Developer</h1>
        <img className="-mt-5 -mb-7 ml-10 h-24 w-auto" src="https://drive.google.com/uc?id=1RWewxWiH6wKWXfdFKEDiTkiLXCLcsp81" alt=""></img>
        </div>
        <div className="bg-no-repeat bg-cover flex flex-row row-span-2 col-span-1 p-5 text-center text-white shadow-black border-2 border-black rounded-lg " style={{backgroundImage:"url('https://drive.google.com/uc?id=10VhYvrJZVbpYPWhGn0geNnO7ETcPbd_m')"}}> 
        <h1 className="font-Inter font-bold text-3xl">Web 3 & Block chain</h1>
        </div>
        <div className="bg-no-repeat bg-cover flex flex-row text-white row-span-2 col-span-3 p-5 shadow-black border-2 rounded-lg border-black"  style={{backgroundImage:"url('https://drive.google.com/uc?id=10VhYvrJZVbpYPWhGn0geNnO7ETcPbd_m')"}}>
        <h1 className="font-Inter font-bold  text-3xl">Data Structures and algorithms</h1>
        </div>
        <div className="bg-no-repeat bg-cover flex flex-row text-white shadow-black p-5 col-span-3 border-2 rounded-lg border-black" style={{backgroundImage:"url('https://drive.google.com/uc?id=1MrVyYuXuKuzkdpbolWeNAaRo5BMmrPZI')"}}>
        <h1 className="font-Inter font-bold  text-3xl"> UI / UX Design </h1>
        </div>
        <div className="shadow-black p-5 col-span-1 rounded-lg border-2 border-black" style={{backgroundImage:"url('https://drive.google.com/uc?id=1MrVyYuXuKuzkdpbolWeNAaRo5BMmrPZI')"}}>
        <h1 className="font-Inter font-bold  text-3xl"> Git </h1>
        </div>
        </div>
        </body>
    );
};
export default Certifications;