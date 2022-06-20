import React from "react";
import { Link } from "react-router-dom";
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'

function Home() {
    return (
    <>
        <h1>Welcome</h1>
        <div>
            <Link to={`/beers`}> 
            <div className="wrapper">
                <img className="imageThree" src={allBeers} alt="beer-background"/>
                <h2>All Beers</h2>
            </div>
            </Link>  

            <Link to={`/random-beer`}>
            <div className="wrapper">
            <img className="imageThree" src={randomBeer} alt="beer-background"/>
            <h2>Random Beer</h2>
            </div>
            </Link>


            </div>

    </>)
}

export default Home