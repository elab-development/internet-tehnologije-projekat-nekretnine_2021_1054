import React from 'react';
import '../styles/Home.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Home() {
  return (
    <div>
    <NavBar></NavBar>
    <div className='home'>
        
      <div className="home-text">
        <h2>Find your next property to book!</h2>
      </div>

      <div className="flex-container">
        <div className="column">
          <p>
            Dobrodošli u našu izuzetnu platformu za nekretnine, gde se susreću udobnost, elegancija i 
            praktičnost! Naša misija je da vam omogućimo nezaboravan doživljaj prilikom istraživanja i 
            pronalaženja savršenog doma. Bez obzira da li tražite prostor za stanovanje, investiciju ili 
            jednostavno inspiraciju, mi vam pružamo jedinstvenu kolekciju nekretnina koje će zadovoljiti 
            vaše potrebe.
          </p>
        </div>

        <div className="column">
          <p>
            Prođite kroz našu široku paletu nekretnina, bilo da su to prostrani stanovi, prelepe vile, 
            moderni apartmani ili zemljišta savršena za gradnju vašeg snova. Naša platforma vam omogućava 
            detaljan pregled svake nekretnine, uz bogatstvo informacija o lokaciji, cenama, karakteristikama 
            i više. Pronalaženje idealnog doma nikada nije bilo lakše!
          </p>
        </div>

        <div className="column">
          <p>
            Naš tim stručnjaka stoji vam na raspolaganju, pružajući vam podršku od trenutka istraživanja do 
            ključa u ruci. Uz najnovije tehnologije, personalizovane pretrage i korisnički prijateljski 
            dizajn, želimo vam olakšati putovanje ka vašem novom domu. Neka naša stranica postane vaš 
            digitalni vodič kroz svet nekretnina. Dobrodošli u dom vaših snova!
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Home;