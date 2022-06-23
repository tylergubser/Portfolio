import React from 'react';
import { NavLink } from "react-router-dom";

import res from "../images/resume1.png"
import res1 from "../images/resume2.png"
import res2 from "../images/resume3.png"



function Resume() {




    return(
        <div className="" >
            <h1 className="text-black text-center italic text-4xl font-bold  bg-gray-100">Resume</h1>
            <div className="">
            <NavLink className="text-red-500 text-2xl  font-bold"to="/print">Print Resume</NavLink>
            </div>
            <div className="flex-col flex items-center">
            <img src={res} alt="resume" className=""/>
            <img src={res1} alt="resume" className=""/>
            <img src={res2} alt="resume" className=""/>
            </div>
            
        </div>
    )

}

export default Resume;