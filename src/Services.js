function Services(){
    return(
        <body>
        <div className='bg-white w-36 border-2 border-black p-2  relative top-5 left-24 rounded-lg shadow-black'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fixed" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
        </svg>
       <h1 className='font-Roboto  font-bold text-center pl-7'>Services</h1>
       </div>
       <div className='bg-white w-36 border-2 border-black p-2 mt-10  relative top-5 left-24 rounded-lg shadow-black'>
       <h1 className='font-Roboto  font-bold text-center '>Web Design</h1>
       </div>
       <div className=" h-64 border-2 mt-12 ml-24 mr-20  border-black">
       <div className="flex flex-row p-5">
       <h1 className="font-Roboto_condensed text-violet-700 pr-5 text-xl font-semibold">Description</h1>
       <p className="font-Fira_sans text-slate-500 text-sm  font-semibold tracking-wide -ml-28 indent-28 leading-7"> Web design as a service involves creating visually appealing and user-friendly websites for clients. It includes tasks such as designing layouts, selecting color schemes, incorporating graphics, and ensuring a seamless user experience. The goal is to create a customized online presence that effectively represents the client's brand and engages their target audience.</p>
       </div>
       <div className="flex flex-row">
       <h1 className="font-Roboto_condensed ml-5 text-violet-700 pr-5 text-xl font-semibold">Mode</h1>
        <h1 className="text-text font-Roboto_condensed text-xl font-semibold pr-5">Remote / In-office</h1>
        </div>
        <div className="flex flex-row mt-5">
       <h1 className="font-Roboto_condensed ml-5 text-violet-700 pr-5 text-xl font-semibold">Charges</h1>
        <h1 className="text-black font-Roboto_condensed text-xl font-semibold pr-5">Freemium</h1>
        </div>     
        </div>
       
       <button className="border-2 border-black ml-24 shadow-black mt-7 rounded-lg px-3 py-1 font-Roboto_condensed font-bold text-xl">Book Now</button>
       <button className="border-2 border-black ml-12 shadow-black mt-7 rounded-lg px-3 py-1 font-Roboto_condensed font-bold text-xl">Enquire Now</button>

        <div className='bg-white w-36 border-2 border-black p-2 mt-10  relative top-5 left-24 rounded-lg shadow-black'>
       <h1 className='font-Roboto  font-bold text-center'>UI/UX Design</h1>
       </div>
       <div className=" h-64 mb-10 border-2 mt-12 ml-24 mr-20  border-black">
       <div className="flex flex-row p-5">
       <h1 className="font-Roboto_condensed text-violet-700 pr-5 text-xl font-semibold">Description</h1>
       <p className="font-Fira_sans text-slate-500 text-sm  font-semibold tracking-wide -ml-28 indent-28 leading-7"> UI/UX design as a service focuses on creating intuitive and engaging user interfaces for websites, applications  It involves tasks such as designing user flows, wireframing, prototyping, and conducting user research to optimize the user experience. The aim is to create visually appealing interfaces that are easy to navigate, provide a seamless interaction, and enhance user s</p>
       </div>
       <div className="flex flex-row">
       <h1 className="font-Roboto_condensed ml-5 text-violet-700 pr-5 text-xl font-semibold">Mode</h1>
        <h1 className="text-text font-Roboto_condensed text-xl font-semibold pr-5">Remote / In-office</h1>
        </div>
        <div className="flex flex-row mt-5">
       <h1 className="font-Roboto_condensed ml-5 text-violet-700 pr-5 text-xl font-semibold">Charges</h1>
        <h1 className="text-black font-Roboto_condensed text-xl font-semibold pr-5">Freemium</h1>
        </div>     
        </div>
         
       <button className="border-2 border-black ml-24 shadow-black -mt-7 rounded-lg px-3 py-1 font-Roboto_condensed font-bold text-xl">Book Now</button>
       <button className="border-2 border-black ml-12 shadow-black mt-7 rounded-lg px-3 py-1 font-Roboto_condensed font-bold text-xl">Enquire Now</button>

        </body>
    );
};
export default Services;