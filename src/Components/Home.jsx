import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    
      <div className="w-[100%] min-h-[100vh] bg-black flex pt-[8vw] pl-[3rem]">
      <nav className="w-[100%] text-white fixed top-0 left-0 flex justify-between px-[2rem] pt-[1rem] ">
        <div id="Logo">
          <div className="cursor-pointer w-[10rem]">
           <img src="/Home/logo.svg" alt="logo" className="w-full" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="cursor-pointer hover:rounded-2xl transition-all hover:bg-slate-300 bg-yellow-400 font-nav font-semibold text-black p-[0.2rem_1rem] rounded-md">
            <Link to="/docs/introduction">
              <h1>Documentation</h1>
            </Link>
          </div>
        </div>
      </nav>

        <div className="w-[65%] text-white font-nav">
          <h1 className="text-white font-bebas text-[4rem]">React Documentation [<span className="font-bebas text-yellow-300">Pre Alpha Beta Gama Sigma Release</span>]</h1>
          <p className="text-white">Home made notes so dont expect to be stylish and proper , and about information then i tried to explain everything without giving wrong information but still if i miss something then please inform me at discord : <mark  className="font-semibold text-white">perspective2077</mark></p><br />
          <h2 className="text-[1.5rem] text-gray-400 font-semibold">Pre-Requisite Knowledge : </h2>
          <p>Javascript : if you have learned Javascript deeply then you can start reading these docs but if you dont know Javascript that much or any much then u can use my JavaScript notes first to do a quick re-cap of JavaScript : <mark className="font-semibold text-white"> <Link to="https://github.com/Perspective2077/Javascript-Notes">Js Notes</Link></mark> </p><br />
          <h2 className="text-[1.5rem] text-gray-400 font-semibold">Note :</h2>
          <p>• If you want this whole site just lemme know , Because i am too lazy and too noob to write a good & optmised code && I am not thinking of publishing the code in github to keep my respect among internet still if you'll say i will publish it.</p> <br />
          <p>• Suggestions are well rewared , so plzz suggest anything you need to see or to improve in the docs</p>
        </div>
      </div>
  
    </>
  );
}

export default Home;
