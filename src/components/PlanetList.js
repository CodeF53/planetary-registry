import React from "react"
import Planet from "./Planet"

function PlanetList({planets}) {
    const planetComponents = planets.map((planet)=>{
        return (
            <Planet planet={planet} key={planet.id}/>
        )
    })

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetComponents}
            </tbody>
        </table>
    );
}

export default PlanetList;