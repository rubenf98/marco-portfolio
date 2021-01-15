import React from "react";
import styled, { css, keyframes } from "styled-components";
import { dimensions } from "../../variables";
import { fadeInUp, fadeOutDown } from "react-animations";

const openAnimation = keyframes`${fadeInUp}`;
const closeAnimation = keyframes`${fadeOutDown}`;

const Container = styled.div`
    z-index: ${(props) => (props.visible ? 99 : -1)};
    animation: 0.6s
        ${(props) => (props.visible ? openAnimation : closeAnimation)};
    opacity: ${(props) => (props.visible ? 1 : 0)};
    position: fixed;
    transition: opacity 0.6s, z-index 1s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255);
    display: block;
`;

const AnimationHelper = styled.div`
    display: ${(props) => (props.visible ? "block" : "none")};
`;

const Content = styled.div`
    z-index: 999;
    width: 60%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 28px;
    background: rgb(255, 255, 255);
    display: block;
    border-radius: 4px;
    position: absolute;
    top: 100px;
    bottom: 100px;
    left: 100px;
    right: 100px;

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
            <AnimationHelper visible={visible}>
                <Content>{children}</Content>
            </AnimationHelper>
        </Container>
    );
};

export default Modal;
