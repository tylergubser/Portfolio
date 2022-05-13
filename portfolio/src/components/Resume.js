import React from 'react';

import res from "../images/resume1.jpg"
import res1 from "../images/resume2.jpg"



function Resume() {




    return(
        <div >
            <h1 className="text-black text-center italic text-4xl font-bold  bg-gray-100">Resume</h1>
           
            <img src={res} className="text-center"/>
            <img src={res1} className="text-center"/>
            
        </div>
    )

}

export default Resume;