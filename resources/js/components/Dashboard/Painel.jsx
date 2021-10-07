import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Posts from "./Posts/Posts";

const PageContainer = styled.div`
    margin: auto;
    display: block;
`;

class Painel extends Component {
    render() {
        return (
            <PageContainer>
                <NavBar></NavBar>
                <Posts></Posts>
            </PageContainer>
        );
    }
}

export default Painel;
