import React from 'react';
import { Link } from 'react-router-dom';
function View(){
    return(
    <body className="h-screen w-screen bg-background">
    {/* Nav Bar*/}
    <nav className='flex justify-between pt-7 pb-7'>
    <Link to="/Menu">
    <div className='bg-white w-32 border-2 border-black p-2  relative left-14 rounded-lg shadow-black'> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fixed">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
     </svg> 
    <h1 className='font-Roboto  font-bold text-center pl-2'>Menu</h1>
      </div>
    </Link>
     <Link to="/profile">
     <div className='bg-white w-32 border-2 border-black  p-2  relative right-14 rounded-lg shadow-black'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fixed">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
   </svg>
     <h1 className='font-Roboto font-bold text-center pl-3'>Profile</h1>
     </div>
     </Link>
     </nav>
     {/* Main content */}
    <div className="h-full pattern-dots pattern-black pattern-bg-transparent pattern-size-14  pattern-opacity-100 flex justify-between">
    <span className='relative left-44 pl-10 pr-10  h-96 mt-14 bg-background  text-[32px]  text-text font-Fjalla'>
    <h1 className='[text-shadow:_-3px_2px_0_rgb(0_0_0_/_100%)]'>Web development engineer</h1> <br/>
    <h1 className='[text-shadow:_-3px_2px_0_rgb(0_0_0_/_100%)]'>UI/UX designer</h1> <br/>
    <h1 className='[text-shadow:_-3px_2px_0_rgb(0_0_0_/_100%)]'>Block chain developer</h1><br/>
    <h1 className='[text-shadow:_-3px_2px_0_rgb(0_0_0_/_100%)]'>Seo specialist</h1><br/>
    </span>
    <span className='relative right-36 h-56 bg-background  mt-20 pb-10'>
    <img src='https://drive.google.com/uc?id=1MNtFyj9aQIqfQzPqlNeh1VYnih7xmYkg' alt='' className='h-56 w-auto'/>
    {/* <img src='https://drive.google.com/uc?id=1QNftor-0oTr9ajHqbsj5n9sXr-jwwPpG' alt='' className='h-64'/>*/}
    </span>
    </div>
     </body>
    );
   }
   export default View;