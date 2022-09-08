import React from "react"

function Planet({planet: {name, rotation_period, orbital_period, 
                 diameter, climate, gravity, terrain, surface_water,
                 population, residents, films, created, edited, url}}) {
    return(
        <tr>
            <td>{name}</td>
            <td>{climate}</td>
            <td>{terrain}</td>
            <td>{population}</td>
        </tr>
    );
}

export default Planet;