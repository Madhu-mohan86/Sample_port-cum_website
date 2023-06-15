import React from "react";
function Newsletters(){
    return(
        <body className="">
        <div className='bg-white w-36 border-2 border-black p-2  relative top-5 left-24 rounded-lg shadow-black'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
</svg>

        <h1 className='font-Roboto  font-bold text-center pl-7'>News letters</h1>
       </div>
       <div class="container my-24">
       
       <section class="mb-32 text-center">
        
         <div class="mb-12 flex flex-wrap justify-center">
           <div class="w-1/3 shrink-0 grow-0 basis-auto px-3  ">
             <div class="relative mb-10 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
               <img src="https://drive.google.com/uc?id=19fvEIzoODGHyvYY2RXoa9Ti_8t5tbVJz" class="w-full" alt="" />
             </div>
           </div>
     
           <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12">
             <h5 class="mb-3 text-lg font-bold">
            
             </h5>
             <p class="mb-4 text-gray-500 font-Fira_sans font-semibold">
               Published on 15/7/24 by
                 <a href="#!">Anna Maria Doe</a>
             </p>
             <p class="mb-6 ml-5 font-Fira_sans font-semibold">
             Increased Adoption: AR and VR technologies continue to gain traction across various industries, including gaming, entertainment, education, healthcare, and more. Many companies are exploring and implementing these technologies to enhance user experiences and improve productivity.
             </p>
             <button className="bg-white border-2 border-black py-1 px-2 font-semibold font-Fira_sans shadow-black rounded-xl">Read more</button>
           </div>
         </div>
        
        
       </section>
      
     </div>
      </body>
      


    );
};
export default Newsletters;