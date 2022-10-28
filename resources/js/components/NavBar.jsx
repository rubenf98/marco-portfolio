import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, CustomLink } from "../styled";
import { Drawer } from "antd";
import { customColors, dimensions } from "../variables";
import NameAndLogo from "./common/NameAndLogo";
import AnimationContainer from "./common/AnimationContainer";
import { maxWidth } from "../helper";

const Container = styled.div`
    width: 100%;
    height: 100px;
    max-width: ${maxWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    margin: auto;
`;

const Section = styled(Row)`
    height: 100%;

    .links {
        @media (max-width: ${dimensions.sm}) {
            display: none;
        }
    }

    .drawer {
        display: none; 
        cursor: pointer;

        img {
            width: 20px;
            margin-right: 5px;
            
        }

        @media (max-width: ${dimensions.sm}) {
            display: block;
        }
    }
`;

const MenuLink = styled(Link)`
    color: black;
    display: block;
    text-align: center;
    font-size: 3em;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s ease-in-out;
    font-size: 34px;
    font-weight: bold;
    margin: 0;
    padding: 15px;
    

    &:hover {
        color: red;
    }
    
`;

const CustomDrawer = styled(Drawer)`
    display: none;

    @media (max-width: ${dimensions.sm}) {
        display: block;
    }

    div {
        display: flex;
        align-items: center;
    }

    .ant-drawer-content {
        background: #ffffffe4;

        ul {
            list-style: none;
        }
    }
`;

const Logo = styled(Link)`
    img {
        width: 120px !important;
        height: auto !important;
    }
        
`;
function NavBar() {
    const [visibility, setVisibility] = useState(false)
    return (
        <Container>
            <Section type="flex" align="center" justify="start">
                <div className="links">
                    <CustomLink activeClassName="link--active" to="/contact">Contactos</CustomLink>
                    <CustomLink activeClassName="link--active" to="/about">Sobre</CustomLink>
                    <CustomLink activeClassName="link--active" to="/portofolio">Trabalhos</CustomLink>
                </div>
                <div className="drawer">
                    <img src="/icon/menu.svg" alt="menu" onClick={() => setVisibility(true)} />
                </div>
            </Section>

            <Section type="flex" align="center" justify="center">
                <Logo to="/" style={{ textDecoration: " none" }}>
                    <NameAndLogo />
                </Logo>
            </Section>
            <Section type="flex" align="center" justify="end">
                pesquisa
            </Section>


            <CustomDrawer
                height="100%"
                width="100%"
                placement="left"
                onClose={() => setVisibility(false)}
                visible={visibility}
            >
                <div>
                    <AnimationContainer animateOnce={false} animation="fadeInLeft">
                        <ul style={{ padding: "0px" }}>
                            <li><MenuLink onClick={() => setVisibility(false)} to="/">home</MenuLink></li>
                            <li><MenuLink onClick={() => setVisibility(false)} to="/about">Sobre</MenuLink></li>
                            <li><MenuLink onClick={() => setVisibility(false)} to="/contact">Contactos</MenuLink></li>
                            <li><MenuLink onClick={() => setVisibility(false)} to="/portofolio">Trabalhos</MenuLink></li>
                        </ul>
                    </AnimationContainer>

                </div>
            </CustomDrawer>
        </Container>
    );
}

export default NavBar;
