import React from "react";

export default function Note({ Note, type = "note" }) {
  let style;
  if (type == "note") {
    style = "bg-[#122c61] border-blue-400";
  } else if(type == "warning") {
    style = "bg-red-700 border-yellow-300";
  } else {
    style = "bg-slate-700 border-gray-300";
  }

  return (
    <div className={"p-[0.2rem_1rem] font-nav font-semibold inline-block opacity-[0.9] rounded-md border-l-[0.4rem] flex-wrap max-w-[80rem] "+ style} >
      <p className="text-[#E2E8F0]">
        {Note}
      </p>
    </div>
  );  
} 