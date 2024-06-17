import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Col, Container, Row} from "react-bootstrap";
import useForm from "./customHooks/useForm";
import instance from "../logic/instance";

const Register = () => {

    const [formData, handleChange] = useForm({
        email: '',
        password: '',
        name: ''
    });
    const [poruka, setPoruka] = React.useState("");

    const handleSubmit = () => {
        instance.post('register', formData)
            .then((response) => {
                console.log(response.data);
                if (response.data.uspesno === false) {
                    setPoruka(response.data.poruka)
                }else{
                    window.sessionStorage.setItem("user", JSON.stringify(response.data.user));
                    window.sessionStorage.setItem("token", response.data.token);
                    window.location.href = "/";
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <>
            <NavBar />

            <Container>

                <Row>
                    <Col md={12}>
                        <div className="booking-text">
                            Registruj se
                            <p>{poruka}</p>
                        </div>
                    </Col>
                    <Col md={12} >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input onChange={handleChange} type="text" className="form-control" id="name" name="name" required />
                        </div>
                    </Col>
                    <Col md={12} >
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input onChange={handleChange} type="email" className="form-control" id="email" name="email" required />
                        </div>
                    </Col>

                    <Col md={12}>
                        <div className="form-group">
                            <label htmlFor="email">Password:</label>
                            <input onChange={handleChange} type="password" className="form-control" id="password" name="password" required/>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="form-group mt-3">
                            <button onClick={handleSubmit} role="button" id="button" className="btn add-button">Registruj se</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </>
    );
};

export default Register;