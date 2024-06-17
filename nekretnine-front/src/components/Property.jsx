import React from 'react';
import '../styles/Property.css';

const Property = ({ property, onAddToBookings }) => {
    const handleAddToBookings = () => {
        alert('Dodata nekretnina u listu za rezervaciju.')
        onAddToBookings(property);
      };
    
  return (
    <div className="property-card">
      <div className="property-header">
        <h3>{property.title}</h3>
      </div>
        <div className="property-content">
            <p>Adresa: {property.adresa}</p>
            <p>Grad: {property.grad}</p>
            <p>Cena nekretnine: {property.cena} &euro;</p>
            <p>Broj soba: {property.broj_soba}</p>
            <p>Vrsta nekretnine: {property.vrsta_nekretnine}</p>
            <br></br>
            <img src={property.link_slike} alt={property.grad}/>
            <button className="add-button" onClick={handleAddToBookings}>
                Dodaj u listu zelja
            </button>

        </div>


    </div>
  );
};

export default Property;