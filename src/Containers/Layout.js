import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'


class Layout extends Component {
    render() {
        return (
            <Container fluid className="p-0 mainContainer">
                
                {this.props.children}
                <footer className="bgBlackCustom d-flex align-items-center col-12 pb-3">
                        <div className="col-lg logoFooter">
                            <div
                                className="cover logo"
                                style={{
                                    backgroundImage: "url(img/logo.png)",
                                }} />
                        </div>
                        <div className="col-lg-4 d-flex mx-auto mr-5">
                            <a className="mr-5" href="#">Accueil</a>
                            <a className="mr-5" href="#">Contactez-nous</a>
                            <a className="mr-5" href="#">Mentions légales</a>
                        </div>
                        <div className="col-lg-3 d-flex mt-3">
                            <a href="#">
                                <img className="socials" src="img/facebook.png" alt="socials" />
                            </a>
                            <a href="#">
                                <img className="socials" src="img/twitter.png" alt="socials" />
                            </a>
                            <a href="#">
                                <img className="socials" src="img/youtube.png" alt="socials" />
                            </a>
                            <a href="#">
                                <img className="socials" src="img/linkedin.png" alt="socials" />
                            </a>
                            <a href="#">
                                <img className="socials" src="img/instagram.png" alt="socials" />
                            </a>
                        </div>
                </footer>
            </Container>
        );
    }
}

export default Layout;