import React from 'react';
import '../styles/About.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { FaCircleInfo } from "react-icons/fa6";
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import {Col, Image, Row} from "react-bootstrap";
import instance from "../logic/instance";

const About = () => {

    const [person, setPerson] = React.useState(null);

    React.useEffect(() => {
        //https://randomuser.me/api/

        instance.get('https://randomuser.me/api/')
            .then((response) => {
                console.log(response.data.results[0]);
                setPerson(response.data.results[0]);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


  return (
    <>
    <NavBar></NavBar>
    <div className="about-us-page">
        <div className='about-text'>
      <h2><FaCircleInfo />  O nama  <FaCircleInfo /></h2>
      <p>
        Dobrodošli na našu platformu za nekretnine! Mi smo posvećeni pružanju najboljeg iskustva
        u potrazi za vašim idealnim domom. Naš tim stručnjaka okupljen je kako bi vam pomogao
        pronaći savršenu nekretninu prema vašim željama i potrebama.
      </p>
      <p>
        Naša misija je olakšati proces pronalaženja i rezervacije nekretnina. Bilo da tražite
        stan, kuću, apartman ili poslovni prostor, mi vam pružamo raznovrsne opcije koje odgovaraju
        svim budžetima i preferencijama.
      </p>
      <p>
        Slobodno istražite našu stranicu za nekretnine, pretražujte ponude, prilagodite pretragu
        svojim kriterijumima i dodajte  nekretnine na svoju listu rezervacija. Hvala vam
        što ste odabrali našu platformu, i želimo vam ugodno iskustvo u potrazi za vašim novim domom!
      </p>


      <p>KONTAKTIRAJTE NAS: </p>
      <div className="social-icons">
        
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </div>

            {
                person && (
                    <>
                        <Row style={{
                            color: 'white',
                        }} className="mt-5">
                            <Col md={12}>
                                <h1>Nas najbolji agent godine</h1>
                                <h3>{person.email}</h3>
                                <h3>{person.phone}</h3>
                            </Col>
                            <Col md={12}>
                                <Image src={person.picture.large} roundedCircle />

                                <h1>{person.name.first} {person.name.last}</h1>
                            </Col>
                        </Row>
                        <br/>
                    </>
                )
            }
      </div>
    </div>
    
    <Footer></Footer>
    </>
  );
};

export default About;