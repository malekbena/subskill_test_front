import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import "./CustomCollapse.css"

class CustomCollapse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
        return (
            <div id="customCollapse">
                <div
                    className="cover collapseImg mt-3 justify-conten-center d-flex align-items-center"
                    style={{
                        backgroundImage: `url(img/${this.props.img}.png)`,
                    }}
                    onClick={this.toggle}>
                    <p className="collapseTitle mx-auto text-center text-uppercase col-lg-6"> {this.props.title} </p>
                </div>
                <Collapse isOpen={this.state.collapse}>

                    {this.props.content}

                </Collapse>
            </div>
        );
    }
}


export default CustomCollapse;