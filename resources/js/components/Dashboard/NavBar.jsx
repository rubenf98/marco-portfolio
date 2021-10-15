import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { CustomLink } from "../../styled";
import { customColors } from "../../variables";
import NameAndLogo from "../common/NameAndLogo";
import { Row, Col } from "antd";

const Container = styled(Row)`
    width: 100%;
    height: 80px;
`;

const NavBarContainer = styled(Row)`
    width: 60%;
    text-transform: uppercase;
    margin: auto;
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
        const NavBarItem = ({ item, name }) => (
            <LinkWithSeparator activeClassName="link--active" to={"/painel/" + item} >
                {name}
            </LinkWithSeparator>
        )

        return (
            <Container type="flex" justify="center" align="middle">
                <NavBarContainer type="flex" justify="space-between" align="middle">
                    <Col span={3}>
                        <NavLink to="/painel" >
                            <NameAndLogo name={false} />
                        </NavLink>
                    </Col>
                    <Col span={18}>
                        <TabList>
                            <li>
                                <NavBarItem item="posts" name="posts" />
                                <NavBarItem item="categorias" name="categorias & produtos" />
                                <NavBarItem item="clientes" name="clientes" />
                            </li>
                        </TabList>
                    </Col>
                    <Col span={3}>
                    </Col>
                </NavBarContainer>
            </Container>
        );
    }
}

export default NavBar;
