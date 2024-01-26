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
        <p>Opis nekretnine: {property.description}</p>
        <p>Cena nekretnine: {property.price}</p>
        <p>Broj soba: {property.bedrooms}</p>
        <p>Tip nekretnine: {property.type}</p>
        <br></br>
        <img src={property.image} alt={property.title} />
        <button className="add-button" onClick={handleAddToBookings}>
          Add to Bookings
        </button>

      </div>
       
      
    </div>
  );
};

export default Property;