import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const PageContainer = styled.div`
    margin: auto;
    display: block;

    section {
        width: 100%;
        min-height: 100vh;
        background: rgb(245, 245, 245);
    }
`;

class Painel extends Component {
    render() {
        return (
            <PageContainer>
                <NavBar></NavBar>
                <section>{this.props.children}</section>

            </PageContainer>
        );
    }
}

export default Painel;
