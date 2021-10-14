import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomLink } from "../../styled";
import { customColors } from "../../variables";
import NameAndLogo from "../common/NameAndLogo";
import { Row } from "antd";

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

const TabList = styled.ul`
    text-align: center;
    margin: 0 auto;
    display: block;
    padding: 0;

    li {
        display: inline-block;
        :last-child {
            div::after {
                content: "";
            }
        }
    }

    .link--active{
        color: ${customColors.black};
        ::before {
            width: 115%;
        }
    }
`;

const LinkWithSeparator = styled(CustomLink)`
    margin: 0 20px;
    text-transform: uppercase;
    font-size: 1em;

    ::before {
        height: 6px;
        bottom: 1px;
    }

    ::after {
        position: absolute;
        content: "•";
        color: #b7b7b7;
        right: -25px;
    }

    :last-child {
        ::after {
        content: "";
        }
    }
`;

class NavBar extends Component {
    render() {
        const NavBarItem = ({ item }) => (
            <LinkWithSeparator activeClassName="link--active" to={"/painel/" + item} >
                {item}
            </LinkWithSeparator>
        )

        return (
            <Container>
                <TabList>
                    <li>
                        <NavBarItem item="posts" />
                        <NavBarItem item="categorias" />
                        <NavBarItem item="produtos" />
                        <NavBarItem item="clientes" />
                    </li>
                </TabList>
            </Container>
        );
    }
}

export default NavBar;
