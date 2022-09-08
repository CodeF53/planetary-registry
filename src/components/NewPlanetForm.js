import React, { useState } from "react"

function NewPlanetForm({addPlanet}) {
    const [name, setName] = useState("")
    const [climate, setClimate] = useState("")
    const [terrain, setTerrain] = useState("")
    const [population, setPopulation] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        // send new planet to Server
        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                climate: climate,
                terrain: terrain,
                population: population
            })
        }).then(r=>r.json()).then((data)=>{ // parse response and add to local database
            addPlanet(data)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="name" placeholder="Name" />
            <input value={climate} onChange={(e)=>{setClimate(e.target.value)}} type="text" name="climate" placeholder="Climate" />
            <input value={terrain} onChange={(e)=>{setTerrain(e.target.value)}} type="text" name="terrain" placeholder="Terrain"/>
            <input value={population} onChange={(e)=>{setPopulation(e.target.value)}} type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;