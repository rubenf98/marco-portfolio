import { Col, Row } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Section = styled(Row)`
   width: 50%;

    p {
        margin: 25px;
        color: white;
    }
`;

const Link = styled(NavLink)`
    margin: 0px 25px;
    display: block;
    width: 100%;
    color: #2b2b2b; 
    
    &:hover { 
        color: #000000
    }
`;

const Copyright = styled.p`
    font-size: 12px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const TitleContainer = styled.div`
    max-width: 700px;
    text-align: left;
    margin: auto;
    display: block;
    width: 50%;

    h3 {
        margin: auto;
        display: block;
        font-size: 2.2em;
        font-size: 26px;
        font-family: 'Merriweather';
        font-weight: 700;
        font-style: italic;
    }

    p {
        font-size: 18px;
        width: 70%;
    }
`;


export default function Footer() {
    return (
        <Container>
            <TitleContainer>
                <h3>Marco Abreu</h3>
                <p>Estofador e decorador a <b>criar espaços customizados</b> há mais de 20 anos consigo</p>
            </TitleContainer>

            <Section type="flex" justify="space-between" align="middle">
                <Col span={12}>
                    <Link to="/"> Início</Link>
                    <Link to="/contact"> Contactos</Link>
                    <Link to="/about"> Sobre</Link>
                </Col>
                <Col span={12}>
                    <Link to="/"> Início</Link>
                    <Link to="/contact"> Contactos</Link>
                    <Link to="/about"> Sobre</Link>
                </Col>
            </Section>


            <Copyright>© Copyright {moment().year()} | Rúben Freitas</Copyright>

        </Container>
    )
}
