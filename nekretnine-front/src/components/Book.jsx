import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import instance from "../logic/instance";
import {Button, Container, Form, Row, Table} from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Book = props => {

    const [agenti , setAgenti] = React.useState([]);
    const [formData, setFormData] = React.useState({
        nekretnina: '',
        agent: '',
        nacinPlacanja: ''
    });
    const [poruka, setPoruka] = React.useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    React.useEffect(() => {
        instance.get('agents')
            .then((response) => {
                console.log(response.data.data);
                setAgenti(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const user = JSON.parse(window.sessionStorage.getItem("user"));

    const handleClick = () => {
        console.log("Kupi");
        console.log(formData);

        instance.post('/kupovine', {
            nekretnina_id: formData.nekretnina,
            agent_id: formData.agent,
            nacinPlacanja: formData.nacinPlacanja,
            user_id: user.id
        })
            .then((response) => {
                console.log(response.data);
                setPoruka("Uspesno ste kupili nekretninu");
            })
            .catch((error) => {
                console.log(error);
                setPoruka("Doslo je do greske prilikom kupovine");
            });
        }



    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    <h1>Kupi nekretninu</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Izaberi nekretninu</Form.Label>
                            <Form.Select name="nekretnina" className="form-control" onChange={handleChange}>
                                {
                                    props.selectedProperties && props.selectedProperties .map((property) => {
                                        return (
                                            <option key={property.id} value={property.id}>{property.adresa} ({property.grad})</option>
                                        );
                                    })

                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Agent</Form.Label>
                            <Form.Select name="agent" className="form-control" onChange={handleChange}>
                                {
                                    agenti.map((agent) => {
                                        return (
                                            <option key={agent.id} value={agent.id}>{agent.ime_prezime}</option>
                                        );
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nacin placanja</Form.Label>
                            <Form.Select name="nacinPlacanja" className="form-control" onChange={handleChange}>
                                <option value="gotovina">Gotovina</option>
                                <option value="kredit">Kredit</option>
                                <option value="platna kartica">Platna kartica</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <Button onClick={handleClick} className="m-3" variant="primary">Kupi</Button>
                    <p>{poruka}</p>
                </Row>

            </Container>
            <Footer />
        </>
    )
};

Book.propTypes = {
    selectedProperties : PropTypes.array,
};

export default Book;