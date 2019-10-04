import React, { Component } from 'react';
import { Container, Row } from 'reactstrap'

class Layout extends Component {
    render() {
        return (
            <Container fluid className="p-0">
                {this.props.children}
                <footer className="bgBlackCustom justify-content-between mt-3">
                    <Row className="d-flex align-items-center">
                        <div className="col">
                        <div
                            className="cover logo"
                            style={{
                                backgroundImage: "url(img/logo.png)",
                                backgroundSize: "contain",
                            }} />
                        </div>
                        <div className="col-4 justify-content-between d-flex mr-5">
                            <a href="#">Accueil</a>
                            <a href="#">Contactez-nous</a>
                            <a href="#">Mentions légales</a>
                        </div>
                        <div className="col-3 justify-content-between d-flex">    
                            <a href="#">
                                <img src="img/facebook.png" />
                            </a>
                            <a href="#">
                                <img src="img/twitter.png" />
                            </a>
                            <a href="#">
                                <img src="img/youtube.png" />
                            </a>
                            <a href="#">
                                <img src="img/linkedin.png" />
                            </a>
                            <a href="#">
                                <img src="img/instagram.png" />
                            </a>
                        </div>
                    </Row>
                </footer>
            </Container>
        );
    }
}

export default Layout;