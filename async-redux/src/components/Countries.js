import React, {useEffect} from "react"
import { getCountry } from "../actions/index";
import { connect } from 'react-redux';

import Country from "./Country"

const Countries = (props) => {

    useEffect(() => {
        props.getCountry();
    }, [])

    console.log(props.state.data)
    return (
        <div className="countries-container">
            {props.state.data.map(country => (
                <Country key={country.id} country={country} />
            ))}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {state};
}

export default connect(mapStateToProps, {getCountry})(Countries);