import React, { Component } from 'react';
import { Col, Row, Button } from "reactstrap"

class About extends Component {
    render() {
        return (
            <Col className="mt-5 aboutP p-5">
                <Row>

                    <Col lg={6} className="justify-content-between aboutP d-flex flex-column">
                        <p className="aboutTitle">
                            <span className="purpleColor">Le CPF de transition professionnelle </span>
                            est un nouveau dispositif qui remplace
                            le Congé individuel de formation
                            depuis le 1er janvier 2019.
                            </p>
                        <p>
                            <span className="purpleColor">Le CPF de transition professionnelle </span>
                            permet a tout salarié de suivre, à son initiative et à titre individuel, une formation longue et certifiante en de
                            <span className="purpleColor"> changer de métier ou de profession. </span>
                        </p>
                        <p className="purpleColor aboutTitle"> Qui peut en bénéficier ? </p>
                    </Col>
                    <Col
                        lg={6}
                        className="cover"
                        style={{
                            backgroundImage: "url(img/IMG_Sourire.png)",
                            height: "680px"
                        }}>
                    </Col>
                    <Row className="p-3">
                        <p className="col-lg-4">
                            <span className="purpleColor">• Tout salarié en CDI</span> justifiant d’une ancienneté de 24 mois (consécutifs ou non) dont 12 mois dans la même entreprise (quelle que soit la nature des contrats successifs).
                        </p>
                        <p className="col-lg-7 mr-5">
                            <span className="purpleColor">• Tout salarié en CDD ou ex-CDD</span> justifiant d’une
                            ancienneté de 24 mois (consécutifs ou non) au
                            cours des 5 dernières années, dont 4 mois en CDD
                            (consécutifs ou non) au cours des 12 derniers mois.
                            Le salarié en CDD devra être toujours en poste
                            lorsqu'il déposera son dossier de demande de
                            financement et sa formation devra débuter au
                            maximum 6 mois après la fin de son contrat.
                        </p>
                    </Row>
                </Row>
                <p className="purpleColor aboutTitle col-5">Le CFP de transition professionnelle c'est quoi ?</p>
                <div className="justify-content-center d-flex">
                    <iframe width="1536px" height="860px" src="https://www.youtube.com/embed/qjsUSUdw6lk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <Row className="mt-5">
                    <Col
                        lg={5}
                        className="cover"
                        style={{
                            backgroundImage: "url(img/IMG_Meunuiserie.png)",
                            height: "724px"
                        }}>
                    </Col>
                    <Col>
                        <p className="aboutTitle text-uppercase purpleColor">le financement</p>
                        <p>
                            La mobilisation des droits inscrits au Compte 
                            Personnel de Formation (CPF) permet de 
                            contribuer au financement de la formation.
                            Les frais pédagogiques et les frais liés à 
                            la formation sont assurés par le Fongecif.
                            Pendant la formation, la rémunération du 
                            salarié est en partie maintenue.
                        </p>
                        <Button className="text-capitalize aboutBtn">En savoir plus</Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default About;