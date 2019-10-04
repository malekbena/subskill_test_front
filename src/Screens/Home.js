import React, { Component } from 'react';
import Layout from '../Containers/Layout';
import { Container, Col, Row, Button } from "reactstrap"
import ContactForm from "../Components/ContactForm"
import CustomCollapse from "../Components/CustomCollapse"
import About from "../Components/About"
import How from "../Components/How"

class Home extends Component {

    render() {
        return (
            <Layout>
                <Col lg={12}
                    className="cover position-relative justify-content-center align-content-center d-flex flex-column"
                    style={{
                        backgroundImage: "url(img/landing.png)",
                        height: '1080px'
                    }}>
                    <div
                        className="cover logo"
                        style={{
                            backgroundImage: "url(img/logo.png)",
                            backgroundSize: "contain",
                            position:"absolute",
                            top:"-15px"
                        }} />

                    <div className="mx-auto d-flex align-content-center col-6">
                        <h1 className="text-uppercase text-center headerTitle">changez de métier gace au cpf de transition professionnelle</h1>
                    </div>
                </Col>

                <CustomCollapse img={'sliderose'} content={<About />} title={"qu'est-ce que la cpf de transition professionnelle"} />
                <CustomCollapse img={'slideorange'} content={<How />} title={"comment réaliser votre projet de reconversion ?"} />
                <CustomCollapse img={'slidejaune'} content={<ContactForm />} title={"discuter avec un conseiller"} />
            </Layout>
        );
    }
}

export default Home;