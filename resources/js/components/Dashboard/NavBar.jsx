import React, { Component } from "react";
import styled from "styled-components";
import { CustomLink } from "../../styled";
import { customColors, dimensions } from "../../variables";
import { Row } from "antd";

const Container = styled(Row)`
    width: 100%;
    height: 80px;
`;

const NavBarContainer = styled(Row)`
    width: 60%;
    text-transform: uppercase;
    margin: auto;

    @media (max-width: ${dimensions.md}){
        width: 100%;
    }
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
            width: 105%;
        }
    }
`;

const LinkWithSeparator = styled(CustomLink)`
    margin: 0 20px;
    text-transform: uppercase;
    font-size: 1em;

    @media (max-width: ${dimensions.sm}){
        font-size: .9em;
        margin: 0 10px;
    }

    ::before {
        height: 6px;
        bottom: 1px;
    }

    ::after {
        position: absolute;
        content: "•";
        color: #b7b7b7;
        right: -25px;

        @media (max-width: ${dimensions.sm}){
            right: -15px;
        }
    }

    :last-child {
        ::after {
        content: "";
        }
    }
`;

class NavBar extends Component {
    render() {
        const NavBarItem = ({ item, name }) => (
            <LinkWithSeparator activeClassName="link--active" to={"/painel/" + item} >
                {name}
            </LinkWithSeparator>
        )

        return (
            <Container type="flex" justify="center" align="middle">
                <NavBarContainer type="flex" justify="space-around" align="middle">

                    <TabList>
                        <li>
                            <NavBarItem item="posts" name="posts" />
                            <NavBarItem item="categorias" name="produtos" />
                            <NavBarItem item="clientes" name="clientes" />
                        </li>
                    </TabList>

                </NavBarContainer>
            </Container>
        );
    }
}

export default NavBar;
