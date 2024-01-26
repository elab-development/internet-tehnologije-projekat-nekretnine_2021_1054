import React from 'react';
import Property from './Property';
import slika1 from '../images/slika1.jpg';
import slika2 from '../images/slika2.jpg';
import slika3 from '../images/slika3.jpg';
import slika4 from '../images/slika4.jpg';
import slika5 from '../images/slika5.jpg';
import slika6 from '../images/slika6.jpeg';
import slika7 from '../images/slika7.jpg';
import slika8 from '../images/slika8.jpg';
import slika9 from '../images/slika9.avif';
import slika10 from '../images/slika10.jpg';

const staticPropertiesData = [
    {
      id: 1,
      title: 'Lep stan u centru grada',
      description: 'Prostran stan sa prelepim pogledom na grad. Nudi udobnost i modernu opremu.',
      type: 'Stan',
      price: 100000,
      bedrooms: 2,
      image: slika1,
    },
    {
      id: 2,
      title: 'Luksuzna kuća sa bazenom',
      description: 'Elegantna kuća sa bazenom i prostranim dvorištem. Savršena za porodični život.',
      type: 'Kuća',
      price: 150000,
      bedrooms: 3,
      image: slika2
    },
    {
      id: 3,
      title: 'Šarmantan apartman u blizini plaže',
      description: 'Atraktivan apartman blizu plaže sa prelepim pogledom na more. Idealan za odmor.',
      type: 'Apartman',
      price: 80000,
      bedrooms: 1,
      image: slika3
    },
    {
      id: 4,
      title: 'Vikendica u prirodi',
      description: 'Divna vikendica okružena prirodom. Savršena za beg iz grada i opuštanje.',
      type: 'Vikendica',
      price: 120000,
      bedrooms: 2,
      image: slika4
    },
    {
      id: 5,
      title: 'Moderan poslovni prostor',
      description: 'Prostror za poslovanje u modernom okruženju. Pogodan za različite delatnosti.',
      type: 'Poslovni prostor',
      price: 200000,
      bedrooms: 0,
      image: slika5
    },
    {
      id: 6,
      title: 'Ekskluzivni penthouse',
      description: 'Ekskluzivan penthouse sa luksuznim sadržajima. Pogled sa vrha zgrade je fascinantan.',
      type: 'Stan',
      price: 250000,
      bedrooms: 3,
      image: slika6
    },
    {
      id: 7,
      title: 'Prostran porodični dom',
      description: 'Velika porodična kuća sa dvorištem. Pogodna za veće porodice.',
      type: 'Kuća',
      price: 180000,
      bedrooms: 4,
      image: slika7
    },
    {
      id: 8,
      title: 'Udoban studio apartman',
      description: 'Mali, ali udoban studio apartman sa svim potrebnim sadržajima.',
      type: 'Apartman',
      price: 60000,
      bedrooms: 0,
      image: slika8
    },
    {
      id: 9,
      title: 'Šik loft prostor',
      description: 'Moderni loft prostor sa otvorenim konceptom. Savremen i udoban.',
      type: 'Poslovni prostor',
      price: 170000,
      bedrooms: 1,
      image: slika9
    },
    {
      id: 10,
      title: 'Elegantan townhouse',
      description: 'Elegantan townhouse sa prelepim dvorištem. Pogodan za urbani život.',
      type: 'Kuća',
      price: 160000,
      bedrooms: 3,
      image: slika10
    },
   
  ];

const PropertyList = () => {
  
    return (
      <div className="property-list">
        {staticPropertiesData.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    );
  };
  
  export { PropertyList, staticPropertiesData };

