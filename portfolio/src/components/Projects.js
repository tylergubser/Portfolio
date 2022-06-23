import React from 'react';
import drink from '../images/drink.png'
import fish from '../images/fish.png'
import game from '../images/game.png'
import rickmorty from '../images/rickmorty.png'

function Projects() {


    return(
        <div className=" w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <h1 className="text-black text-center italic text-4xl font-bold  bg-gray-100">Projects</h1>
          <div className="flex flex-row grid grid-cols-2">
                <div className="w-96 h-80 text-center mx-auto">
                    <h1 className="text-white text-center underline text-2xl font-bold italic object-center">Drink Up</h1>
                    <img src={drink} alt="drink" className="justify-center" />
                    <p>
                    <a className="text-white hover:text-red-400" href="https://github.com/tylergubser/drink-up/tree/main/drink-up">Frontend GitHub Repository</a>
                    </p>
                    <p>
                    <a className="text-white hover:text-red-400" href="https://github.com/tylergubser/Drink-up-backend-2">Backend GitHub Repository</a>
                    </p>
                    <p>
                    <a className="text-white hover:text-red-400" href="https://www.youtube.com/watch?v=xy7lcuOWRXQ">Demo Video</a>
                    </p>
                </div>
                <div className="text-center object-center w-96 h-80 mx-auto">
                    <h1 className="text-white text-center underline text-2xl font-bold italic">East Coast Fishing Co.</h1>
                    <img src={fish} alt="fish"/>
                    <p>
                    <a className="text-white hover:text-red-400" href="https://github.com/tylergubser/East-Coast-Fishing">GitHub Repository</a>
                    </p>
                </div>
                <div className="text-center w-96 h-80 mx-auto">
                    <h1 className="text-white text-center underline text-2xl font-bold italic">Rick and Morty Fan Page</h1>
                    <img src={rickmorty} alt="rick and morty" className="justify-center" />
                    <p>
                    <a className="text-white hover:text-red-400" href="https://github.com/tylergubser/phase1RickAndMortyProject">GitHub Repository</a>
                    </p>
                    <p>
                    <a className="text-white hover:text-red-400" href="https://tylergubser.github.io/phase1RickAndMortyProject/">Website</a>
                    </p>
                </div>
                <div className="text-center w-96 h-80 mx-auto">
                    <h1 className="text-white text-center underline text-2xl font-bold italic">Portfolio Game</h1>
                    <img src={game} alt="portfolio game" className="justify-center" />
                    <p>
                    <a className="text-white hover:text-red-400" href="https://github.com/tylergubser/portfolio-game-server">GitHub Repository</a>
                    </p>
                    {/* <p>
                    <a className="hover:text-red-400" href="https://tylergubser.github.io/phase1RickAndMortyProject/">Website</a>
                    </p> */}
                </div>
           </div>
        </div>
    )

}


export default Projects;