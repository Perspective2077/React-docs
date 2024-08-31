import { Link } from "react-router-dom";
export default function Footer({previous,next}) {
  return (
    <div className="pt-[2rem]">
    <div className="flex justify-between p-[0.5rem_1rem] rounded-xl font-nav font-bold text-[#94A3B8] select-none">
      <div className="flex justify-center items-center">{ previous ? <Link className="p-[0.5rem_1rem] hover:text-[#38BDF8] rounded-lg bg-[#33415580]" to={previous}>Previous</Link> : null}</div>
      <div className="flex justify-center items-center">{ next ? <Link className="p-[0.5rem_1rem] hover:text-[#38BDF8] rounded-lg bg-[#33415580]" to={next}>Next</Link> : null}</div>
    </div>
    </div>
  )
}
