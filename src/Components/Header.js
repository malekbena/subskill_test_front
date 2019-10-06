import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {
    render() {
        return (
            <Col lg={12}
                className="cover d-flex flex-column header justify-content-between p-0"
                style={{
                    backgroundImage: "url(img/Landing.png)",
                    height: "100vh",
                }}>
                <Row className="justify-content-between ml-4">
                    <div className="cover logo"
                        style={{
                            backgroundImage: "url(img/logo.png)",
                        }} />
                    <Row className="col-3 justify-content-end mr-5">
                        <FontAwesomeIcon className="align-self-center mr-3"
                            icon="bars"
                            color="white"
                            size="4x"
                        />
                        <p className="text-white align-self-center"> Menu </p>
                    </Row>
                </Row>
                <div className="mx-auto d-flex align-content-center col-lg-6">
                    <h1 className="text-uppercase text-center headerTitle"> <span> changez de métier</span>  gace au cpf de transition professionnelle</h1>
                </div>
                <Row className="position-relative" style={{
                    height: "50px",
                }}>
                    <div className="headerBar"> </div>
                    <div className="scrollBtn justify-content-center align-items-center d-flex col-3">
                        <AnchorLink href="#anchorLink" >
                            <FontAwesomeIcon
                                icon="chevron-down"
                                color="white"
                                size="6x"
                            />
                        </AnchorLink>
                    </div>
                    <div className="headerBar"></div>
                </Row>

            </Col>
        );
    }
}

export default Header;