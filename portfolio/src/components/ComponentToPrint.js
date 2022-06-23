import React from 'react';
import resume1 from "../images/resume1.png"
import resume2 from "../images/resume2.png"
import resume3 from "../images/resume3.png"

const ComponentToPrint = React.forwardRef((props, ref) => {



    return (
        <div ref={ref}>
            <div>
                <div className="flex-col flex items-center">
                    <img src={resume1} alt="Res 1"/>
                    <img src={resume2} alt="Res 2"/>
                    <img src={resume3} alt="Res 3"/>
                </div>
            </div>
        </div>)
})

export default ComponentToPrint;