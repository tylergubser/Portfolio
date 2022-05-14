import React from 'react';
import res from "../images/resume1.jpg"
import res1 from "../images/resume2.jpg"

const ComponentToPrint = React.forwardRef((props, ref) => {



    return (
        <div ref={ref}>
            <img src={res} alt="Res 1"/>
            <img src={res1} alt="Res 2"/>
        </div>)
})

export default ComponentToPrint;