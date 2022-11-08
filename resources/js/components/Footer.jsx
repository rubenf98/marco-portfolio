import React from 'react'
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
`;

const Copyright = styled.div`
    font-size: 14px;
    margin: 20px auto;
    text-align: center;
    width: 100%;
    opacity: .9;

    a {
        color: black;
        font-weight: bold;
        

        &:hover {
            color: black;
        }
    }
`;

const Logo = styled.img`
    width: 120px;
    margin: 20px auto 0px auto;
    display: block;
`;


export default function Footer() {
    return (
        <Container id="footer">
            <Logo src="/images/logo.svg" alt="logo" loading='lazy' />


            <Copyright>Copyright ©{moment().year()} Marco Abreu. Desenvolvido por <a href="https://ruben-freitas.pt/" target="_blank">Rúben Freitas</a></Copyright>

        </Container>
    )
}
