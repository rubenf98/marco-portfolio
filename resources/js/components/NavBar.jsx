import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, CustomLink } from "../styled";
import { Drawer } from "antd";
import { customColors, dimensions } from "../variables";
import NameAndLogo from "./common/NameAndLogo";
import AnimationContainer from "./common/AnimationContainer";

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

const Section = styled(Row)`
    width: 50%;
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
    color: #2a2a2a !important;
    display: block;
    text-align: center;
    font-size: 3em;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s ease-in-out;
    font-size: 34px;
    font-weight: 300;
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

function NavBar() {
    const [visibility, setVisibility] = useState(false)
    return (
        <Container>
            <Section type="flex" align="center">
                <Link to="/" style={{ textDecoration: " none", marginLeft: "15px" }}>
                    <NameAndLogo />
                </Link>
            </Section>
            <Section type="flex" align="center" justify="flex-end">
                <div className="links">
                    <CustomLink activeClassName="link--active" to="/contact">Contactos</CustomLink>
                    <CustomLink activeClassName="link--active" to="/about">Sobre</CustomLink>
                </div>
                <div className="drawer">
                    <img src="/icon/menu.svg" alt="menu" onClick={() => setVisibility(true)} />
                </div>
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
                        </ul>
                    </AnimationContainer>

                </div>
            </CustomDrawer>
        </Container>
    );
}

export default NavBar;
