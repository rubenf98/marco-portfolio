import { Col, Row } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
    width: 100%;
    min-height: 250px;
    background-color: #222;
    margin-top: 100px;
    padding: 70px 0;
    position: relative;
`;

const Section = styled(Row)`
    max-width: 720px;
    margin: auto;
    border-top: 1px solid #4e4e4e;

    p {
        margin: 25px;
        color: white;
    }
`;

const Link = styled(NavLink)`
    margin: 25px;
    color: white; 
    
    &:hover { 
        color: white
    }
`;

const Copyright = styled.p`
    color: #aaa;
    font-size: .8em;
    margin-bottom: 20px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
`;

const Facebook = styled.img`
    width: 22px;
    margin: auto;
    display: block;
`;


const Logo = styled(Facebook)`
    width: auto;
    height: 22px;
    filter: brightness(0) invert(1);

`;

const TitleContainer = styled.div`
    max-width: 700px;
    text-align: center;
    color: white;
    margin: auto;
    display: block;
    padding: 50px;
    color: #c7c7c7;

    h1 {
        color: white;
        margin: auto;
        display: block;
        font-weight: bold;
        font-size: 2.2em;
    }
`;


export default function Footer() {
    return (
        <Container>
            <TitleContainer>
                <h1>Marco Abreu</h1>
                <p>Estofador e decorador a <b>criar espaços customizados</b> há mais de 20 anos consigo</p>
            </TitleContainer>

            <Section type="flex" justify="space-around" align="middle">
                <Col span={2}>
                    <Logo src="/logo.svg" alt="logo" />
                </Col>
                <Col span={18}>
                    <Row type="flex" justify="center" align="middle">
                        <Link to="/"> Início</Link>
                        <Link to="/contact"> Contactos</Link>
                        <Link to="/about"> Sobre</Link>
                    </Row>
                </Col>
                <Col span={2}>
                    <a href="https://www.facebook.com/marcosilvioestofador" target="_blank" rel="noreferrer">
                        <Facebook src="/icon/facebook.png" alt="facebook-logo" />
                    </a>
                </Col>
            </Section>


            <Copyright>© Copyright {moment().year()} | Rúben Freitas</Copyright>

        </Container>
    )
}
