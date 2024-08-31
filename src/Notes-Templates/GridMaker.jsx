import { Link } from "react-router-dom"

export default function GridMaker({ List, OuterPath = "hooks" }) {


  return (
    <div className="grid grid-cols-4 gap-2 pt-[1rem]">
      {List.map((item, key) => {
        return (
          <div key={key} className=" bg-[#1E293B] text-[#94A3B8] rounded-lg p-[1rem] flex flex-col gap-[0.4rem] ">
            <div>
              <h1 className="leading-[2rem] font-nav font-semibold text-[2rem]">{item.name}</h1>
            </div>
            <div className="font-nav font-semibold">{item.info}</div>
            <div>
              <button className="bg-[#94A3B8] hover:bg-[#38BDF8] font-bold text-black p-[0.2rem_1rem] rounded-md font-nav"><Link to={`/docs/${OuterPath}/${item.name}`}>Enter</Link></button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
