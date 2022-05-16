import React from 'react';
import res from "../images/resume1.jpg"
import res1 from "../images/resume2.jpg"

const ComponentToPrint = React.forwardRef((props, ref) => {



    return (
        <div ref={ref}>
            <div>
                <div className="flex-col flex items-center">
                    <img src={res} alt="Res 1"/>
                    <img src={res1} alt="Res 2"/>
                </div>
            </div>
        </div>)
})

export default ComponentToPrint;