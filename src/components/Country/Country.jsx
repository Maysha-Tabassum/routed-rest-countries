import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country)
    const { flags, cca3, name, population, region, area } = country;

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <Link to={`/country/${cca3}`}><button className='btn'>Show Details</button></Link>

        </div>
    );
};

export default Country;