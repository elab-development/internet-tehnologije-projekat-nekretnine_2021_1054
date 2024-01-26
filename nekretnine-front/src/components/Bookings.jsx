import React from 'react';
import NavBar from './NavBar';
import '../styles/Bookings.css';
import { useState } from 'react';
import Footer from './Footer';

const Bookings = ({ selectedProperties }) => {

    const [bookedProperties, setBookedProperties] = useState(selectedProperties);

    const totalCost = bookedProperties.reduce((total, property) => total + property.price, 0);
  
    const handleMakeBookings = () => {
        alert('Uspesno napravljena rezervacija izabranih nekretnina!');
        setBookedProperties([]);
        window.location.reload();
      };
    
      return (
        <>
          <NavBar />
          <div className="bookings-page">
            <div className='booking-text'>
                {bookedProperties.length > 0 ? 
                'Moje nekretnine izabrane za rezervaciju' : 'Nemate nekretnina za rezervaciju'}
            </div>
            {bookedProperties.length > 0 && (
              <>
                <div className="bookings-list">
                  {selectedProperties.map((property) => (
                    <div className="property-card" key={property.id}>
                      <div className="property-header">
                        <h3>{property.title}</h3>
                      </div>
                      <div className="property-content">
                        <p>Opis nekretnine: {property.description}</p>
                        <p>Cena nekretnine: {property.price}</p>
                        <p>Broj soba: {property.bedrooms}</p>
                        <p>Tip nekretnine: {property.type}</p>
                        <img src={property.image} alt={property.title} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className='booking-cost'>
                <p>Ukupna cena rezervacije: {totalCost}</p>
                <button className="clear-bookings-button" onClick={handleMakeBookings}>
                  Napravi rezervaciju
                </button>
                </div>
              </>
            )}
          </div>
          <Footer></Footer>
        </>
      );
    };
    
    export default Bookings;