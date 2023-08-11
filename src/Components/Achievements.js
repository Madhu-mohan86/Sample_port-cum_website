import React from "react";
function Achievements() {
  return (
    <div className="relative">
      <div className="relative p-2 bg-white border-2 border-black rounded-lg w-fit top-5 left-24 shadow-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fixed w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M5 8.999c0 1.902.765 3.627 2 4.89V21a.998.998 0 0 0 1.447.895L12 20.118l3.553 1.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851v-7.11a6.976 6.976 0 0 0 2-4.891C19 5.14 15.86 2 12 2S5 5.14 5 8.999zm7.447 9.106a1 1 0 0 0-.895 0L9 19.382v-4.067c.911.434 1.926.685 3 .685s2.089-.25 3-.685v4.066l-2.553-1.276zM12 4c2.756 0 5 2.242 5 4.999A5.006 5.006 0 0 1 12 14c-2.757 0-5-2.243-5-5.001A5.005 5.005 0 0 1 12 4z"></path>
        </svg>
        <h1 className="font-bold text-center font-Roboto pl-7">
          Achievements
        </h1>
      </div>

      <div className="flex flex-col mt-16 ml-24">
        <div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-black rounded-full shadow">
          <div className="w-3 h-3 border-2 border-black rounded-full bg-text" />
        </div>
        <div class="ml-2.5 w-1 rounded-lg h-44 bg-text"></div>
        <div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-black rounded-full shadow">
          <div className="w-3 h-3 border-2 border-black rounded-full bg-text" />
        </div>
      </div>
      <div className="absolute top-[6.5rem] left-[10rem] w-7/12 flex flex-col">
        <h1 className="pb-2 text-2xl font-bold capitalize font-Roboto_condensed">
          track winner
        </h1>
        <p className="pb-4 text-lg font-semibold text-gray-600 font-Fira_sans">
          at HIS Hackathon
        </p>
        <p className="font-semibold text-gray-500 font-Fira_sans text-md">
          Idea Nft's project stood out for its impressive execution, remarkable
          functionality, and significant impact in [describe the specific domain
          or problem area]. Their commitment to excellence, attention to detail,
          and ability to collaborate seamlessly with their team showcased their
          outstanding leadership and teamwork abilities.
        </p>
      </div>

      <div className="flex flex-col items-end mt-16 mr-72">
        <div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-black rounded-full shadow">
          <div className="w-3 h-3 border-2 border-black rounded-full bg-text" />
        </div>
        <div class="mr-2.5 w-1 rounded-lg h-44 bg-text"></div>
        <div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-black rounded-full shadow">
          <div className="w-3 h-3 border-2 border-black rounded-full bg-text" />
        </div>
      </div>
      <div className="absolute top-96 left-[10rem] w-7/12 flex flex-col">
        <h1 className="pb-2 text-2xl font-bold capitalize font-Roboto_condensed">
          track winner
        </h1>
        <p className="pb-4 text-lg font-semibold text-gray-600 font-Fira_sans">
          at HIS Hackathon
        </p>
        <p className="font-semibold text-gray-500 font-Fira_sans text-md">
          Idea Nft's project stood out for its impressive execution, remarkable
          functionality, and significant impact in [describe the specific domain
          or problem area]. Their commitment to excellence, attention to detail,
          and ability to collaborate seamlessly with their team showcased their
          outstanding leadership and teamwork abilities.
        </p>
      </div>
    </div>
  );
}
export default Achievements;
