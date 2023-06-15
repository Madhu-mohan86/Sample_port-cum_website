import React from "react";
function Certifications(){
    return(
        <body>
        <div className='bg-white w-36 border-2 border-black p-2  relative top-5 left-24 rounded-lg shadow-black'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fixed">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
       </svg>
        <h1 className='font-Roboto  font-bold text-center pl-7'>Certification</h1>
       </div>
        <div className="mt-14 grid grid-cols-4 gap-y-7 gap-x-7 grid-rows-4 ml-24 mr-20">
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