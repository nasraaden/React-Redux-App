import React from "react";

const Country = props => {
    console.log(props.country.languages.name)
    return (
        <div>
            <h2>{props.country.name}</h2>
            <img src={props.country.flag} />
            <p>{`Region: ${props.country.region}`}</p>
            <p>{`Subregion: ${props.country.subregion}`}</p>
            <p>{`Capital: ${props.country.capital}`}</p>
            <p>{`Population: ${props.country.population}`}</p>
        </div>
    )
}

export default Country;