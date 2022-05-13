

function Projects() {


    return(
        <div className=" w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <h1 className="text-black text-center italic text-4xl font-bold  bg-gray-100">Projects</h1>
            <div>
                <h1 className="text-white text-center underline text-2xl font-bold italic">Drink Up</h1>
                <div className="text-center">
                    <p>
                    <a className="hover:text-red-400" href="https://github.com/tylergubser/drink-up/tree/main/drink-up">Frontend GitHub Repository</a>
                    </p>
                    <p>
                    <a className="hover:text-red-400" href="https://github.com/tylergubser/Drink-up-backend-2">Backend GitHub Repository</a>
                    </p>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-white text-center underline text-2xl font-bold italic">East Coast Fishing Co.</h1>
                <div>
                    <p>
                        <a className="hover:text-red-400" href="https://github.com/tylergubser/East-Coast-Fishing">GitHub Repository</a>
                    </p>
                </div>
            </div>
        </div>
    )

}


export default Projects;