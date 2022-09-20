import React from 'react';

export default function CountryCards({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="details">
        <div className="name">{name}</div>
        <img className="flag-image" alt="An image of a flag" src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
        <div className="iso2">{iso2}</div>
                
      </div>
    </div>
  );
}