import React, { Component } from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import NavBar from "./NavBar";
import Posts from "./Posts/Posts";
import Categories from "./Category/Category";
import Client from "./Client/Client";
import Painel from "./Painel";

const PageContainer = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
`;

const Content = styled(Switch)`
    flex: 1;
    background: rgb(245, 245, 245);
    
`;

const NavBarContainer = styled.div`
    height: 80px;
    
`;

export default class PainelLayout extends Component {
    render() {
        return (
            <PageContainer>
                <NavBarContainer><NavBar /></NavBarContainer>

                <Content>
                    <Route path="/painel/posts" component={Posts} />
                    <Route path="/painel/categorias" component={Categories} />
                    <Route path="/painel/clientes" component={Client} />
                    <Route path="/painel" component={Painel} />
                </Content>

            </PageContainer>
        );
    }
}
