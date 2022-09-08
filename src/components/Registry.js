import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    // the queen will die, TODAY
    const [planets, setPlanets] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    // on start fetch planets from db
    useEffect(() => {
      fetch("http://localhost:8085/planets").then(r=>r.json()).then((data)=>{
        // save the planets
        setPlanets(data)
      })
    }, [])
    
    // filter planets by search
    const filteredPlanets = planets.filter(// if name doesn't include search query (not case sensitive), yeet. 
        (planet)=>planet.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return(
        <div className="registry">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="content">
                <PlanetList planets={filteredPlanets}/>
                <NewPlanetForm addPlanet={(planet)=>{setPlanets([...planets, planet])}}/>
            </div>
        </div>
    )
}

export default Registry;