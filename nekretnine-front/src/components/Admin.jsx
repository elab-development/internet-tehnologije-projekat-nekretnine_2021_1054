import React, {useEffect} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Container, Row, Table} from "react-bootstrap";
import instance from "../logic/instance";
import {Chart} from "react-google-charts";
import {CSVLink} from "react-csv";

const Admin = () => {

    const [kupovineNaCekanju, setKupovineNaCekanju] = React.useState([]);

    useEffect(() => {
        instance.get('kupovineNaCekanju')
            .then((response) => {
                console.log(response.data.data);
                setKupovineNaCekanju(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [chartData, setChartData] = React.useState([]);

    useEffect(() => {
        instance.get('/grafik')
            .then((response) => {
                console.log(response.data.data);
                const data = response.data.data;

                const podaci = [['Agent', 'Broj kupovina']];

                data.forEach((element) => {
                    podaci.push([element.imePrezime, parseInt(element.total)]);
                });

                setChartData(podaci);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const odobri = (id) => {
        instance.put(odobri/`${id}`,{})
            .then((response) => {
                console.log(response.data);
                setKupovineNaCekanju(kupovineNaCekanju.filter(kupovina => kupovina.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const odbij = (id) => {
        instance.put(odbij/`${id}`,{})
            .then((response) => {
                console.log(response.data);
                setKupovineNaCekanju(kupovineNaCekanju.filter(kupovina => kupovina.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <>
            <NavBar />
            <Container>
                <h1 className="mt-3">Admin</h1>

                <Table hover>
                    <thead>
                        <tr>
                            <th>Nekretnina</th>
                            <th>Agent</th>
                            <th>Nacin placanja</th>
                            <th>User</th>
                            <th>Akcija</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        kupovineNaCekanju && kupovineNaCekanju.map((kupovina) => {
                            return (
                                <tr key={kupovina.id}>
                                    <td>{kupovina.nekretnina.adresa}</td>
                                    <td>{kupovina.agent.ime_prezime}</td>
                                    <td>{kupovina.nacin_placanja}</td>
                                    <td>{kupovina.korisnik.name}</td>
                                    <td>
                                        <button onClick={() => {

                                            odobri(kupovina.id);

                                        }} className="btn btn-success m-3">Odobri</button>
                                        <button onClick={() => {
                                            odbij(kupovina.id);
                                        }} className="btn btn-danger m-3">Odbij</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </Table>

                <Row>
                    <Chart
                        chartType="PieChart"
                        data={chartData}
                        options={{
                            title: 'Broj kupovina po agentima',
                        }}
                        width={"100%"}
                        height={"400px"}
                    />
                </Row>

                <div className="mt-3 download-dugme">

                    <CSVLink data={chartData}>Skini podatke iz grafika</CSVLink>
                </div>


            </Container>
            <Footer/>
        </>
    );
};

export default Admin;