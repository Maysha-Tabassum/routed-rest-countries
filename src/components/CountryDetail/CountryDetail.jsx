import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetail = () => {
    const country = useLoaderData();
    // console.log(country)
    return (
        <div>
            <img src={country.flags.png} alt="" />
            <h3>{name.common}</h3>
        </div>
    );
};

export default CountryDetail;