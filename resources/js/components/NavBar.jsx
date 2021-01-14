import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, CustomLink } from "../styled";
import { customColors, dimensions } from "../variables";
import NameAndLogo from "./common/NameAndLogo";

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

const Section = styled(Row)`
    width: 45%;
    height: 100%;
`;

function NavBar() {
    return (
        <Container>
            <Section type="flex" align="center">
                <Link to="/" style={{ textDecoration: " none" }}>
                    <NameAndLogo></NameAndLogo>
                </Link>
            </Section>
            <Section type="flex" align="center" justify="flex-end">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/contact">Contactar</CustomLink>
                <CustomLink to="/about">Sobre</CustomLink>
            </Section>
        </Container>
    );
}

export default NavBar;
