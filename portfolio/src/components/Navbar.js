import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {


return(
<header className="shadow-lg">
<div  className="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto ">
    {/* <li className="relative"> */}
    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
        <NavLink to="/">Tyler Gubser</NavLink>
    </div>
    {/* </li> */}
    {/* <li className="relative"> */}
    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
        <NavLink to="/resume">Resume</NavLink>
    </div>
    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
        <NavLink to="/projects">Projects</NavLink>
    </div>
    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
        <NavLink to="/blogs">Blog Posts</NavLink>
    </div>
    {/* </li> */}
</div>
</header>


)

}

export default Navbar;