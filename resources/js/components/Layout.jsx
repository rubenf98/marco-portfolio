import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.div`
    background-color: #FFFEF8;
`;

const Content = styled.div`
    margin: auto;
    display: block;
`;

class Layout extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <NavBar />

                    <section>{this.props.children}</section>

                    <Footer />
                </Content>
            </Container>
        );
    }
}

export default withRouter(Layout);
