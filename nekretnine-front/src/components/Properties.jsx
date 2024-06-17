import React, { useState, useEffect } from 'react';
import '../styles/Properties.css';
import {staticPropertiesData } from './PropertyList';
import ReactPaginate from 'react-paginate';
import NavBar from './NavBar';
import Property from './Property';
import Footer from './Footer';
import {Container} from "react-bootstrap";
import instance from "../logic/instance";

const Properties = ({ onAddToBookings }) => {
    const [searchTerm, setSearchTerm] = useState('');  //kriterijum za pretragu
    const [selectedPropertyType, setSelectedPropertyType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const propertiesPerPage = 2;
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        instance.get('nekretnine')
            .then((response) => {
                console.log(response.data.data);
                setProperties(response.data.data);
                setFilteredProperties(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
  
    const applyFilters = (search, type, min, max) => {
      const filtered = properties.filter(property => {  //filtriramo po property gde vracamo
        return (
          (search === '' || property.adresa.toLowerCase().includes(search.toLowerCase()) || property.grad.toLowerCase().includes(search.toLowerCase())) &&
          (type === '' || property.vrsta_nekretnine === type) &&
          (min === '' || parseInt(property.cena) >= parseInt(min)) &&
          (max === '' || parseInt(property.cena) <= parseInt(max))
        );
      });
  
      setFilteredProperties(filtered);
    };
    //vrsi pretragu
  
    useEffect(() => {
      applyFilters(searchTerm, selectedPropertyType, minPrice, maxPrice); //vraca dva argumenta, prvi su atributi, a drugi je niz zavisnosti
    }, [searchTerm, selectedPropertyType, minPrice, maxPrice]);
   // neki event 

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);  
    };
  
    const handleTypeChange = (e) => {
      setSelectedPropertyType(e.target.value);
    };
  
    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.value);
    };

    const handleResetSearch = () => {
        setSearchTerm('');
        setSelectedPropertyType('');
        setMinPrice('');
        setMaxPrice('');
      };
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
// paginacija, pagecount koliko cemo imati stranica
    const pageCount = Math.ceil(filteredProperties.length / propertiesPerPage);  
    const offset = currentPage * propertiesPerPage;  
    const currentProperties = filteredProperties.slice(offset, offset + propertiesPerPage);  
    return (
      <>
        <NavBar />
        <div className="property-page">
          <div className="search-container">
            <input
              type="text"
              placeholder="Pretraga po gradu ili adresi"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <select  
              value={selectedPropertyType}
              onChange={handleTypeChange}
            >
              <option value="">Svi tipovi</option>
              <option value="Stan">Stan</option>
              <option value="Kuca">Kuća</option>
              <option value="Apartman">Apartman</option>
              <option value="Vikendica">Vikendica</option>
              <option value="Poslovni prostor">Poslovni prostor</option>
            </select>
            <input
              type="number"
              placeholder="Min Cena"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="number"
              placeholder="Max Cena"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
             <button className="reset-button" onClick={handleResetSearch}>
            Resetuj pretragu
            </button>
          </div>
          
          
            <Container>

          <div className='properties-list'> 
          {currentProperties.map((property) => (
            <Property key={property.id} property={property} onAddToBookings={onAddToBookings} />  //!!!
          ))}  
          </div>
         
        <div className='pagination'>
            <ReactPaginate
              previousLabel={'Prethodna'}
              nextLabel={'Sledeca'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />           
        </div>

        </Container>
     </div>
     <Footer></Footer>
      </>
    );
  };
  
  export default Properties;
