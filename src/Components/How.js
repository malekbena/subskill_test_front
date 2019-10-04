import React, { Component } from 'react';
import { Col, Row, Button } from "reactstrap"
import "./How.css"
class How extends Component {
    render() {
        return (
            <Col>
                <p className="text-uppercase col-4 howTitleOrange">la fongecif île-de-france vous accompagne dans votre projet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus neque labore perferendis
                    asperiores sequi voluptatibus, dolorum cupiditate impedit sapiente sint adipisci et, laudantium dolore dolor obcaecati explicabo vitae architecto!</p>
                <Row>
                    <Col lg={3} className="bgOrange p-5 justify-content-center align-items-center d-flex flex-column">
                        <p className="howTitleLight">1</p>
                        <p className="howTitleLight text-uppercase text-center">nous vous contactons</p>
                        <img src="img/picto_tel.png" alt="picto" height="50px" />
                    </Col>
                    <Col lg={9} className="bgOrangeLight text-light d-flex align-items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus totam quibusdam
                        laborum ut quidem minima. Quibusdam, reprehenderit consequuntur et inventore blanditiis dolorum minus aliquam, tempora fugit adipisci neque cum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className="justify-content-center align-items-center d-flex flex-column">
                        <div className="mx-auto justify-content-center mt-1 mb-3 d-flex flex-column align-items-center">
                            <div className="triangleOrange"></div>
                            <p className="howTitleOrange">2</p>
                            <p className="howTitleOrange text-uppercase text-center">je rencontre mon conseiller</p>
                            <img src="img/picto_question.png" alt="picto" height="50px" />
                        </div>
                    </Col>
                    <Col lg={9} className="d-flex align-items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus totam quibusdam
                        laborum ut quidem minima. Quibusdam, reprehenderit consequuntur et inventore blanditiis dolorum minus aliquam, tempora fugit adipisci neque cum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className="bgOrange justify-content-center align-items-center d-flex flex-column">
                        <div className="mx-auto justify-content-center mt-1 mb-3 d-flex flex-column align-items-center">
                            <div className="triangleLight"></div>
                            <p className="howTitleLight">3</p>
                            <p className="howTitleLight text-uppercase text-center">nous élaborons un plan d'action</p>
                            <img src="img/picto_feuille.png" alt="picto" height="50px" />
                        </div>
                    </Col>
                    <Col lg={9} className="bgOrangeLight text-light d-flex align-items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus totam quibusdam
                        laborum ut quidem minima. Quibusdam, reprehenderit consequuntur et inventore blanditiis dolorum minus aliquam, tempora fugit adipisci neque cum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className="justify-content-center align-items-center d-flex flex-column">
                        <div className="mx-auto justify-content-center mt-1 mb-3 d-flex flex-column align-items-center">
                            <div className="triangleOrange"></div>
                            <p className="howTitleOrange">4</p>
                            <p className="howTitleOrange text-uppercase text-center">votre projet est formalisé</p>
                            <img src="img/picto_main.png" alt="picto" height="50px" />
                        </div>
                    </Col>
                    <Col lg={9} className="d-flex align-items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus totam quibusdam
                        laborum ut quidem minima. Quibusdam, reprehenderit consequuntur et inventore blanditiis dolorum minus aliquam, tempora fugit adipisci neque cum.</p>
                    </Col>
                <button className="text-uppercase howBtn">en savoir plus</button>
                </Row>
            </Col>
        );
    }
}

export default How;