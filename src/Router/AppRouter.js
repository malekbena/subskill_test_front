import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Screens/Home';



class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home} />
            </Router>
        )
    }
}

export default AppRouter;