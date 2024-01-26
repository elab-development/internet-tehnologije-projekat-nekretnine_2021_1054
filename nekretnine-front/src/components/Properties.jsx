import React, { useState, useEffect } from 'react';
import '../styles/Properties.css';
import {staticPropertiesData } from './PropertyList';
import ReactPaginate from 'react-paginate';
import NavBar from './NavBar';
import Property from './Property';
import Footer from './Footer';

const Properties = ({ onAddToBookings }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPropertyType, setSelectedPropertyType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const propertiesPerPage = 2;
  
    const applyFilters = (search, type, min, max) => {
      const filtered = staticPropertiesData.filter(property => {
        return (
          (search === '' || property.description.toLowerCase().includes(search.toLowerCase()) || property.title.toLowerCase().includes(search.toLowerCase())) &&
          (type === '' || property.type === type) &&
          (min === '' || parseInt(property.price) >= parseInt(min)) &&
          (max === '' || parseInt(property.price) <= parseInt(max))
        );
      });
  
      setFilteredProperties(filtered);
    };
  
    useEffect(() => {
      applyFilters(searchTerm, selectedPropertyType, minPrice, maxPrice);
    }, [searchTerm, selectedPropertyType, minPrice, maxPrice]);
  
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
              placeholder="Pretraga po opisu ili naslovu"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <select
              value={selectedPropertyType}
              onChange={handleTypeChange}
            >
              <option value="">Svi tipovi</option>
              <option value="Stan">Stan</option>
              <option value="Kuća">Kuća</option>
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

          <div className='properties-list'> 
          {currentProperties.map((property) => (
            <Property key={property.id} property={property} onAddToBookings={onAddToBookings} />
          ))}
          </div>
         
        <div className='pagination'>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />           
        </div>
     </div>
     <Footer></Footer>
      </>
    );
  };
  
  export default Properties;
