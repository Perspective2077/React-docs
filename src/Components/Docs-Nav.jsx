import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
     <nav className="select-none" >
        <ul className="w-[full] items-center text-center text-white bg-[#000000] text-md font-nav font-semibold grid grid-flow-row h-[100vh]">
         <li> <NavLink  className={({ isActive }) => `p-[0.1rem_0.5rem] ${isActive ? 'text-[#38BDF8]' : 'text-[white]'} hover:text-[#94A3B8]`} to="/docs/introduction">Introduction</NavLink> </li>
         <li> <NavLink  className={({ isActive }) => `p-[0.1rem_0.5rem] ${isActive ? 'text-[#38BDF8]' : 'text-[white]'} hover:text-[#94A3B8]`} to="/docs/installation">Installation</NavLink></li> 
         <li> <NavLink  className={({ isActive }) => `p-[0.1rem_0.5rem] ${isActive ? 'text-[#38BDF8]' : 'text-[white]'} hover:text-[#94A3B8]`} to="/docs/folder-structure">Folder-structure</ NavLink></li>
         <li> <NavLink className={({ isActive }) => `p-[0.1rem_0.5rem] ${isActive ? 'text-[#38BDF8]' : 'text-[white]'} hover:text-[#94A3B8]`} to="/docs/react-working">React-working</NavLink></li>
         <li> <NavLink className={({ isActive }) => `p-[0.1rem_0.5rem] ${isActive ? 'text-[#38BDF8]' : 'text-[white]'} hover:text-[#94A3B8]`} to="/docs/hooks" replace>Hooks</NavLink></li> 
         <li> <NavLink className={({ isActive }) => `p-[0.1rem_0.5rem] ${isActive ? 'text-[#38BDF8]' : 'text-[white]'} hover:text-[#94A3B8]`} to="/docs/routing">Routing</NavLink></li>
         <li> <NavLink className={({ isActive }) => `p-[0.1rem_0.5rem] ${isActive ? 'text-[#38BDF8]' : 'text-[white]'} hover:text-[#94A3B8]`} to="/docs/redux">Redux</NavLink></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar