import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.div`
    max-width: 3840px;
    margin: auto;
    display: block;
`;

class Layout extends Component {
    render() {
        return (
            <Container>
                <NavBar />

                <section>{this.props.children}</section>

                <Footer />
            </Container>
        );
    }
}

export default withRouter(Layout);
