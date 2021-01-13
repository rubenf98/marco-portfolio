import React, { Component } from "react";
import NavBar from "./NavBar";

import { withRouter } from "react-router";

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <NavBar />

                <section className="layout-content">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default withRouter(Layout);
