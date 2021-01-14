import React from "react";
import styled from "styled-components";
import { dimensions } from "../../variables";

const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
    display: ${(props) => (props.visible ? "block" : "none")};
`;

const Content = styled.div`
    z-index: 999;
    width: 60%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 12px;
    background: rgb(255, 255, 255);
    display: block;

    @media (max-width: ${dimensions.md}) {
        width: 80%;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 96%;
    }
`;

const Modal = ({ children, visible }) => {
    return (
        <Container visible={visible}>
            <Content>{children}</Content>
        </Container>
    );
};

export default Modal;
