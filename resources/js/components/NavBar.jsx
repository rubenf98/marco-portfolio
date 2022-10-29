import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { customColors } from "../variables";
import { maxWidth } from "../helper";

const Container = styled.section`
    width: 100%;
    background-color: ${customColors.red};
`;

const Content = styled.div`
    width: 100%;
    height: 100px;
    max-width: ${maxWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin: auto;
`;

const LinkDiv = styled.div`
    font-size: 18px;
    color: white;

    a {
        color: white;
    }
`;


const Logo = styled(Link)`
    margin: 0px 30px;
    img {
        width: 120px;
        height: auto;
    }
        
`;
function NavBar() {
    return (
        <Container>
            <Content>

                <LinkDiv>
                    <NavLink activeClassName="link--active" to="/portofolio">Trabalhos</NavLink>
                </LinkDiv>

                <Logo to="/" style={{ textDecoration: " none" }}>
                    <img src="/images/logo_white.svg" alt="logo" />
                </Logo>

                <LinkDiv>
                    pesquisar
                </LinkDiv>
            </Content>
        </Container>
    );
}

export default NavBar;
