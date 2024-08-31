export default function SubHeading({ Topic, info, colorType = "note" }) {
  const colorClasses = {
    warning: "text-[#c36d1c]",
    tip: "text-blue-400",
    note: "text-[#94A3B8]",
  };

  return (
    <div className="flex pt-[1rem] gap-[1rem] items-center">
    <h1 className="text-2xl font-nav font-bold text-[#e2e8f0]">
      {Topic} 
    </h1>
    {info ? <span className={`text-[1rem] pt-[2px] font-bold font-nav ${colorClasses[colorType]} italic`}>***{info}</span>
       : null}
    </div>
  );
}
