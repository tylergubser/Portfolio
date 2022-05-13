import React from "react";

function Home () {


    return(
        <div  className="bg-cover w-screen h-screen  img bg-[url('https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1224500457?k=20&m=1224500457&s=612x612&w=0&h=LpjdY6okVWiKh8LT_LqcXz53kWaXVf47ThXKwMcCoHI=')]">
            <h1 className="text-black text-center text-7xl italic bg-gray-100 font-bold ">Tyler Gubser's Portfolio</h1>
            <div className=" w-64 h-48 absolute bottom-20 right-20 ">
                <h1 className="italic underline text-2xl text-white">Contact Information</h1>
                <p>
                <a href="http://www.linkedin.com/in/tyler-gubser" rel="noreferrer" className=" text-1xl text-white hover:text-cyan-300">
                    LinkedIn
                </a>
                </p>
                <p>
                <a href="https://github.com/tylergubser" rel="noreferrer" className=" text-1xl text-white hover:text-cyan-300">
                    GitHub
                </a>
                </p>
                <p className=" text-1xl text-white">
                    tylergubser2200@gmail.com
                </p>
                
            </div>
        </div>
    )

}

export default Home;