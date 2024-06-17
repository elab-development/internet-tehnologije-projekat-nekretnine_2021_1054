import React from 'react';
import NavBar from './NavBar';
import '../styles/Bookings.css';
import { useState } from 'react';
import Footer from './Footer';
import {Col, Container, Row} from "react-bootstrap";

const Bookings = ({ selectedProperties }) => {

    const [bookedProperties, setBookedProperties] = useState(selectedProperties);

    const totalCost = bookedProperties.reduce((total, property) => total + property.cena, 0);
  
    const handleMakeBookings = () => {
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
              <Container>
            {bookedProperties.length > 0 && (
              <>
                <div className="properties-list">
                  {selectedProperties.map((property) => (
                    <div className="property-card" key={property.id}>
                      <div className="property-header">
                        <h3>{property.grad} - {property.adresa}</h3>
                      </div>
                      <div className="property-content">
                          <p>Adresa: {property.adresa}</p>
                          <p>Grad: {property.grad}</p>
                          <p>Cena nekretnine: {property.cena} &euro;</p>
                          <p>Broj soba: {property.broj_soba}</p>
                          <p>Vrsta nekretnine: {property.vrsta_nekretnine}</p>
                          <br></br>
                          <img src={property.link_slike} alt={property.grad}/>

                      </div>
                    </div>
                  ))}
                </div>
                <div className='booking-cost'>
                <p>Ukupna cena: {totalCost}</p>
                <button className="clear-bookings-button" onClick={handleMakeBookings}>
                  Obrisi listu zelja
                </button>

                </div>

              </>
            )}
              </Container>
          </div>

            <Footer/>
        </>
      );
};

export default Bookings;