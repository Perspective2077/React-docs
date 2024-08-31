import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Docs-Nav";     
import { Outlet } from "react-router-dom";

export default function Docs() {



  //  Copied from GPT , for scrolling top everytime you go to different route/page
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);



  return (
    <>
      <div className="grid h-[100vh] grid-cols-[10rem_1fr]">
        <Navbar />
        <div 
          ref={scrollRef}
          className="bg-[#0F172A] w-full h-[100vh] overflow-scroll overflow-x-hidden p-[1rem_3rem]"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
