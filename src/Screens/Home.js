import React, { Component } from 'react';

import Layout from '../Containers/Layout';
import ContactForm from "../Components/ContactForm"
import CustomCollapse from "../Components/CustomCollapse"
import About from "../Components/About"
import How from "../Components/How"
import Header from "../Components/Header"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faChevronDown);


class Home extends Component {

    render() {
        return (
            <Layout>
                <Header />
                <div id="anchorLink"></div>
                <CustomCollapse img={'sliderose'} content={<About />} title={"qu'est-ce que la cpf de transition professionnelle"} />
                <CustomCollapse img={'slideorange'} content={<How />} title={"comment réaliser votre projet de reconversion ?"} />
                <CustomCollapse img={'slidejaune'} content={<ContactForm />} title={"discuter avec un conseiller"} />
            </Layout>
        );
    }
}

export default Home;