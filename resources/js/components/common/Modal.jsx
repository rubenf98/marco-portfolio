import React from "react";
import styled, { keyframes } from "styled-components";
import { dimensions } from "../../variables";
import { fadeInUp } from "react-animations";

const openAnimation = keyframes`${fadeInUp}`;

const Container = styled.div`
    z-index: 99;
    animation: 0.6s ${openAnimation};
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    transition: opacity 0.6s, z-index 1s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255);
`;

const Content = styled.div`
    width: 60%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 28px;
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
