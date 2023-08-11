import React from "react";
function Projects() {
  return (
    <div className="relative">
      <div className="relative p-2 bg-white border-2 border-black rounded-lg w-36 top-5 left-24 shadow-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="fixed w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
        <h1 className="font-bold text-center font-Roboto pl-7">Projects</h1>
      </div>
      <div className="grid grid-cols-2 ml-24 mr-10 gap-y-10 gap-x-10 mt-14">
        <div className="bg-white border-2 border-black shadow-black flex flex-row   p-5 w-[29rem] rounded-lg">
          <img
            src="https://drive.google.com/uc?id=1RYQpUJN3_htYPaOKYevAfbZ0aCgFufXM"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="pb-2 text-xl font-bold font-Roboto_condensed">
              Legal Document Management
            </p>
            <p className="pb-2 text-base font-semibold font-Roboto_condensed text-text">
              [ HTML /CSS/ Java Script ]
            </p>
            <p className="text-sm font-semibold font-Fira_sans text-slate-500">
              A digitilized version of storage and collabrative system for
              corporate docs
            </p>
          </div>
        </div>
        <div className="bg-white border-2 border-black shadow-black flex flex-row p-5 w-[29rem] rounded-lg">
          <img
            src="https://drive.google.com/uc?id=1v_xC0LPOn9zktRJEt15zdi7KXoc9uVAy"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="pb-2 text-xl font-bold font-Roboto_condensed">
              Her Instincts
            </p>
            <p className="pb-2 text-base font-semibold font-Roboto_condensed text-text">
              [ TailwindCSS/ Java Script ]
            </p>
            <p className="text-sm font-semibold font-Fira_sans text-slate-500">
              A digitilized version of storage and collabrative system for
              corporate docs
            </p>
          </div>
        </div>
        <div className="bg-white border-2 border-black shadow-black flex flex-row p-5 w-[29rem] rounded-lg">
          <img
            src="https://drive.google.com/uc?id=1lxvg9yH48iIK0hEQosf0mUt39dK3zE0m"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="pb-2 text-xl font-bold font-Roboto_condensed">
              Wellness Instincts
            </p>
            <p className="pb-2 text-base font-semibold font-Roboto_condensed text-text">
              [ TailwindCSS/ Java Script ]
            </p>
            <p className="text-sm font-semibold font-Fira_sans text-slate-500">
              A digitilized version of storage and collabrative system for
              corporate docs
            </p>
          </div>
        </div>
        <div className="bg-white border-2 border-black shadow-black flex flex-row p-5 w-[29rem] rounded-lg">
          <img
            src="https://drive.google.com/uc?id=1aU9KGtHUGELB8N2-rzN8I3ZxOomtyOYw"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="pb-2 text-xl font-bold font-Roboto_condensed">
              Weather Dashboard
            </p>
            <p className="pb-2 text-base font-semibold font-Roboto_condensed text-text">
              [TailWindCSS/React js ]
            </p>
            <p className="text-sm font-semibold font-Fira_sans text-slate-500">
              A digitilized version of storage and collabrative system for
              corporate docs
            </p>
          </div>
        </div>
        <div className="bg-white border-2 border-black shadow-black flex flex-row p-5 w-[29rem] rounded-lg">
          <img
            src="https://drive.google.com/uc?id=1DXwE9MVh2bygVmEvVY-qXs99QxWAfXyi"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="pb-2 text-xl font-bold font-Roboto_condensed">
              Idea Nft's
            </p>
            <p className="pb-2 text-base font-semibold font-Roboto_condensed text-text">
              [TailWindCSS/React js ]
            </p>
            <p className="text-sm font-semibold font-Fira_sans text-slate-500">
              A digitilized version of storage and collabrative system for
              corporate docs
            </p>
          </div>
        </div>
        <div className="bg-white border-2 border-black shadow-black flex flex-row p-5 w-[29rem] rounded-lg">
          <img
            src="https://drive.google.com/uc?id=1lxvg9yH48iIK0hEQosf0mUt39dK3zE0m"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="pb-2 text-xl font-bold font-Roboto_condensed">
              Software bot
            </p>
            <p className="pb-2 text-base font-semibold font-Roboto_condensed text-text">
              [ HTML /CSS/ Java Script ]
            </p>
            <p className="text-sm font-semibold font-Fira_sans text-slate-500">
              {" "}
              These mechanical marvels are designed to perform tasks
              autonomously{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
