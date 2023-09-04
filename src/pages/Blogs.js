import React, { useState } from "react";
import { useEffect } from "react";
function Blogs() {


const [blogdata,setblogdata]=useState([]);

  useEffect(() => {
    const getblogdetails = async () => {
      const query = `
      query GetUserArticles($page: Int) {
        user(username: "Madhumohan") {
          publication {
            posts(page: $page) {
              title
              brief
              slug
            }
          }
        }
      }`;

      const data = await fetch("https://api.hashnode.com/", {
        method: "POST",
        body: JSON.stringify({query}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response =await data.json();
      setblogdata(response.data.user.publication.posts)

    };

    getblogdetails();

  }, []);


  return (
    <div>
    <div className="relative p-2 bg-white border-2 border-black rounded-lg w-36 top-5 left-24 shadow-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="blogger"
          className="fixed w-6 h-6"
        >
          <path d="m8.69 8.793c-.121.145-.194.334-.194.539 0 .085.012.166.036.244l-.002-.006c.05.279.261.498.531.559l.005.001c.365.039.788.062 1.216.062.157 0 .312-.003.467-.009l-.022.001h1.34c.141-.023.267-.061.386-.111l-.011.004c.226-.159.371-.419.371-.712 0-.014 0-.028-.001-.042v.002c.001-.01.001-.023.001-.035 0-.293-.174-.546-.425-.66l-.005-.002c-.101-.067-.226-.107-.36-.107-.004 0-.008 0-.012 0h-1.339q-1.232 0-1.5.026c-.19.022-.357.11-.48.24zm3.323 5.032q-2.144 0-2.599.054c-.229.008-.441.077-.621.19l.005-.003c-.107.092-.19.209-.238.342l-.002.006c-.037.09-.059.195-.059.304 0 .034.002.067.006.1v-.004c.024.143.08.27.162.377l-.002-.002c.086.121.204.214.343.266l.005.002c.646.06 1.398.094 2.157.094.297 0 .592-.005.886-.016l-.043.001 2.572-.054.48-.054c.236-.128.4-.362.429-.637v-.004c.006-.037.01-.079.01-.122 0-.232-.108-.44-.277-.574l-.001-.001c-.174-.115-.387-.185-.616-.187h-.001q-.4-.026-2.599-.026zm11.949 7.021q.054-.483.054-9.163v-6.962q-.054-1.447-.107-1.929c-.036-.222-.112-.42-.219-.597l.004.007-.054-.214c-.506-.999-1.438-1.719-2.55-1.926l-.022-.003q-.32-.054-9.136-.054t-9.082.054c-.681.174-1.269.509-1.743.962l.001-.001c-.472.456-.819 1.037-.987 1.691l-.005.025c-.074.349-.117.75-.117 1.161 0 .119.004.236.011.353l-.001-.016v15.595c.011.542.05 1.062.115 1.573l-.008-.073c.108.437.283.82.517 1.161l-.008-.012c.247.351.55.644.898.873l.013.008c.345.235.748.419 1.179.53l.027.006c.456.057.995.095 1.541.104h.013 15.433c.542-.011 1.062-.05 1.573-.115l-.073.008c.749-.171 1.39-.558 1.873-1.09l.003-.003c.476-.518.789-1.193.856-1.938l.001-.013zm-4.554-9.968q.054.32.026 2.492c.003.124.005.271.005.418 0 .75-.051 1.488-.148 2.211l.009-.084c-.209.822-.62 1.529-1.179 2.09-.685.74-1.612 1.246-2.656 1.391l-.023.003q-.48.054-3.644.026t-3.537-.08c-.824-.173-1.541-.55-2.12-1.076l.004.003c-.625-.529-1.098-1.219-1.357-2.007l-.009-.031c-.114-.368-.182-.791-.187-1.23v-.003q-.026-.75-.026-3.322.054-3.108.107-3.43c.208-.784.569-1.466 1.051-2.042l-.007.008c.488-.57 1.11-1.011 1.818-1.276l.031-.01c.36-.168.778-.282 1.219-.319l.014-.001q.64-.054 2.357-.054 1.822.054 2.09.107c.859.29 1.594.749 2.198 1.341l-.001-.001c.808.772 1.317 1.851 1.34 3.05v.004c-.002.028-.003.06-.003.093 0 .187.03.367.086.535l-.003-.012c.064.136.166.245.291.318l.003.002c.105.075.234.124.373.134h.002l.64.054c.287.007.562.046.826.113l-.025-.006c.225.12.386.332.434.585l.001.005z"></path>
        </svg>
        <h1 className="pl-3 font-bold text-center font-Roboto">Blogs</h1>
      </div>
      <div>
      </div>
      <div className="flex pb-10 mt-20 overflow-x-scroll ml-14">
        <div className="flex flex-nowrap ">
        {blogdata.map((blog,index)=>(
          <div className="inline-block px-10" key={index}>
            <div className="w-64 p-3 overflow-hidden border-2 border-black rounded-lg h-96 shadow-black">
              <h1 className="pb-1 text-xl font-bold font-Roboto_condensed">
                {blog.title}
              </h1>
              <p className="pb-1 text-sm font-semibold text-gray-400 font-Fira_sans">
                22 / 05 /2023 06 : 30 pm
              </p>
              <p className="pb-1 text-sm font-semibold font-Fira_sans text-text">
                Author - Balakrishnan{" "}
              </p>
              <div className="flex flex-row">
                <h1 className="text-lg font-bold font-Roboto_condensed">
                  Coimbatore
                </h1>
                <p className="font-Fira_sans text-gray-400 text-sm  font-semibold tracking-wide indent-24 -ml-[5.5rem] pl-2 leading-7">
                  {blog.brief}
                </p>
              </div>
            </div>       
          </div>
  ))}
        </div>
      </div>
    </div>
  );
}
export default Blogs;
