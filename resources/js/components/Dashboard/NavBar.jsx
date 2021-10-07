import React, { Component } from "react";
import styled from "styled-components";
import { CustomLink } from "../../styled";

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
        content: "";
    }
`;

class NavBar extends Component {
    render() {
        return (
            <Container>
                <TabList>
                    <li>
                        <LinkWithSeparator as="div">Posts</LinkWithSeparator>
                        <LinkWithSeparator as="div">
                            Categorias
                        </LinkWithSeparator>
                        <LinkWithSeparator as="div">Produtos</LinkWithSeparator>
                        <LinkWithSeparator as="div">Clientes</LinkWithSeparator>
                    </li>
                </TabList>
            </Container>
        );
    }
}

export default NavBar;
