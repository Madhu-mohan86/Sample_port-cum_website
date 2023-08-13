import React from "react";

function Services() {
  const details = [
    {
      id: 1,
      type: "Web Design",
      description:
        "Web design as a service involves creating visually appealing and user-friendly websites for clients. It includes tasks such as designing layouts, selecting color schemes, incorporating graphics,and ensuring a seamless user experience. The goal is to create a customized online presence that effectively represents the clients brand and engages their target audience.",
      mode: "Remote / In-office",
      charges: "Freemium",
    },
    {
      id: 2,
      type: "UI/UX Design",
      description:
        "We specialize in providing top-notch UI (User Interface) and UX (User Experience) design services. Our UI design expertise involves creating visually captivating interfaces, including icons, buttons, and color palettes, to enhance the visual appeal of digital products. On the UX front, we focus on crafting seamless and intuitive user journeys, considering usability, accessibility, and emotional resonance. With our services, we ensure that your digital products not only look stunning but also deliver exceptional user experiences that leave a lasting impact",
      mode: "Remote / In-office",
      charges: "Freemium",
    },
  ];

  return (
    <div>
      <div className="relative p-2 bg-white border-2 border-black rounded-lg w-36 top-5 left-24 shadow-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 absolute"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>

        <h1 className="font-bold text-center font-Roboto pl-7">Services</h1>
      </div>

      {details.map((details) => (
        <div>
          <div className="relative p-2 mt-10 bg-white border-2 border-black rounded-lg w-36 top-5 left-24 shadow-black">
            <h1 className="font-bold text-center font-Roboto ">
              {details.type}
            </h1>
          </div>

          <div className="h-64 mt-12 ml-24 mr-20 border-2 border-black ">
            <div className="flex flex-row p-5">
              <h1 className="pr-5 text-xl font-semibold font-Roboto_condensed text-violet-700">
                Description
              </h1>
              <p className="text-sm font-semibold leading-7 tracking-wide font-Fira_sans text-slate-500 -ml-28 indent-28">
                {details.description}
              </p>
            </div>
            <div className="flex flex-row">
              <h1 className="pr-5 ml-5 text-xl font-semibold font-Roboto_condensed text-violet-700">
                Mode
              </h1>
              <h1 className="pr-5 text-xl font-semibold text-text font-Roboto_condensed">
                {details.mode}
              </h1>
            </div>
            <div className="flex flex-row mt-5">
              <h1 className="pr-5 ml-5 text-xl font-semibold font-Roboto_condensed text-violet-700">
                Charges
              </h1>
              <h1 className="pr-5 text-xl font-semibold text-black font-Roboto_condensed">
                {details.charges}
              </h1>
            </div>
          </div>

          <button className="px-3 py-1 ml-24 text-xl font-bold border-2 border-black rounded-lg shadow-black mt-7 font-Roboto_condensed">
            Book Now
          </button>
          <button className="px-3 py-1 ml-12 text-xl font-bold border-2 border-black rounded-lg shadow-black mt-7 font-Roboto_condensed">
            Enquire Now
          </button>
        </div>
      ))}
    </div>
  );
}
export default Services;
