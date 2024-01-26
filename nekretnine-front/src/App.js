import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Properties from './components/Properties';
import { useState } from 'react';
import Bookings from './components/Bookings';

function App() {

  const [selectedProperties, setSelectedProperties] = useState([]);

  const handleAddToBookings = (property) => {
    const propertyExists = selectedProperties.some((p) => p.id === property.id);

    if (!propertyExists) {
      setSelectedProperties((prevSelected) => [...prevSelected, property]);
    }
  };


  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Home/>}>
          </Route>
          <Route
            path="about"
            element={<About />}>
            </Route>
            <Route
            path="properties"
            element={<Properties onAddToBookings={handleAddToBookings}></Properties>}>
            </Route>
            <Route
            path="bookings"
            element={<Bookings selectedProperties={selectedProperties} />}>
            </Route>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
