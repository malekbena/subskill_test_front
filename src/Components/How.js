import React, { Component } from 'react';
import { Col, Row, Button } from "reactstrap"
import "./How.css"
class How extends Component {
    render() {
        return (
            <Col className="paragraph">
                <div className="col-lg-7">
                    <p className="howTitle mb-0">le fongecif île-de-france </p><p className="howTitle">vous accompagne dans votre projet</p>
                    <p>Les conseillers du Fongecif Île-de-France vous accompagnent dans la réflexion et la mise en œuvre
                    de votre projet de reconversion professionnelle.</p>
                </div>
                <Row>
                    <Col lg={3} className="bgOrange p-5 justify-content-center align-items-center d-flex flex-column">
                        <p className="howTitleLight">1</p>
                        <p className="howTitleLight text-center">nous vous contactons</p>
                        <img src="img/picto_tel.png" alt="picto" height="50px" />
                    </Col>
                    <Col lg={9} className="bgOrangeLight text-light d-flex align-items-center p-5">
                        <p>Nous prenons contact avec vous par téléphone pour faire le point sur votre situation professionnelle ou de votre projet de reconversion.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className="justify-content-center align-items-center d-flex flex-column pb-5">
                        <div className="mx-auto justify-content-center mt-1 mb-3 d-flex flex-column align-items-center">
                            <div className="triangleOrange"></div>
                            <p className="howTitleOrange mt-5">2</p>
                            <p className="howTitleOrange text-uppercase text-center">je rencontre mon conseiller</p>
                            <img src="img/picto_question.png" alt="picto" height="50px" />
                        </div>
                    </Col>
                    <Col lg={9} className="d-flex align-items-center p-5">
                        <p>Un de nos conseillers vous accueille pour vous
                            accompagner dans votre réflexion et vos démarches
                            administratives et financières. Il vous aide dans la
                            construction de votre projet de reconversion dans le
                            cadre d'un suivi personnalisé jusqu'à sa mise en œuvre.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className="bgOrange pb-5 justify-content-center align-items-center d-flex flex-column">
                        <div className="mx-auto justify-content-center mt-1 mb-3 d-flex flex-column align-items-center">
                            <div className="triangleLight"></div>
                            <p className="howTitleLight mt-5">3</p>
                            <p className="howTitleLight text-uppercase text-center">nous élaborons un plan d'action</p>
                            <img src="img/picto_feuille.png" alt="picto" height="50px" />
                        </div>
                    </Col>
                    <Col lg={9} className="bgOrangeLight text-light d-flex align-items-center p-5">
                        <p>Votre projet est cohérent et solide ?
                            Nous élaborons à vos côtés un plan d’actions et vous
                            aidons à le mettre en œuvre : identification de
                            l’organisme de formation et des modes de financement…</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className="justify-content-center pb-5 align-items-center d-flex flex-column">
                        <div className="mx-auto justify-content-center mt-1 mb-3 d-flex flex-column align-items-center">
                            <div className="triangleOrange"></div>
                            <p className="howTitleOrange mt-5">4</p>
                            <p className="howTitleOrange text-uppercase text-center">votre projet est formalisé</p>
                            <img src="img/picto_main.png" alt="picto" height="50px" />
                        </div>
                    </Col>
                    <Col lg={9} className="d-flex align-items-center p-5">
                        <p>Un document récapitulant la description de votre projet
                            professionnel vous est remis à chaque étape. Vous êtes prêt à vous lancer !</p>
                    </Col>
                    <div className="w-100 justify-content-end d-flex">
                        <Button className="howBtn mb-5 mr-5">en savoir plus</Button>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default How;