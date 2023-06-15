import React from 'react';
import { Link } from 'react-router-dom';
function View(){
    return(
    <body className="h-screen w-screen bg-cover" style={{backgroundImage:"url('https://drive.google.com/uc?id=11o6B0pFNsxmvO2QJzLrUbBxuddy8AQNy')"}}>
    {/* Nav Bar*/}
    <nav className='flex justify-between pt-7 pb-7'>
    <Link to="/Menu">
    <div className='bg-white w-32 border-2 border-black p-2  relative left-14 rounded-lg shadow-black'> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
     </svg> 
    <h1 className='font-Roboto  font-bold text-center pl-2'>Menu</h1>
      </div>
    </Link>
     <Link to="/profile">
     <div className='bg-white w-32 border-2 border-black  p-2  relative right-14 rounded-lg shadow-black'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
   </svg>
     <h1 className='font-Roboto font-bold text-center pl-3'>Profile</h1>
     </div>
     </Link>
     </nav>
    
    <div className="h-full flex justify-between">
    <span className='relative left-16 top-10  h-96 mt-14 text-[32px] font-extrabold  text-black font-Roboto_condensed'>
    <h1 className="mb-1 font-Inter text-4xl text-gray-400 md:text-6xl">
     Meet the <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      Web Developer ,
    </span>
    <span
      className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-gray-400 md:-mb-4 md:h-16 animate-cursor will-change-transform"
    ></span>
  </h1>
    </span>
    <span className='relative right-36 h-56  mt-20 pb-10'>
    <img src='https://drive.google.com/uc?id=1MNtFyj9aQIqfQzPqlNeh1VYnih7xmYkg' alt='' className='h-72 w-auto'/>
    {/* <img src='https://drive.google.com/uc?id=1QNftor-0oTr9ajHqbsj5n9sXr-jwwPpG' alt='' className='h-64'/>*/}
    </span>
    </div>
     </body>
    );
   }
   export default View;