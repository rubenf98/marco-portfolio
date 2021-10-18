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
    display: block;

    section {
        width: 100%;
        min-height: 100vh;
        background: rgb(245, 245, 245);
    }
`;

export default class PainelLayout extends Component {
    render() {
        return (
            <PageContainer>
                <NavBar></NavBar>
                <Switch>

                    <Route path="/painel/posts" component={Posts} />
                    <Route path="/painel/categorias" component={Categories} />
                    <Route path="/painel/clientes" component={Client} />
                    <Route path="/painel" component={Painel} />
                </Switch>

            </PageContainer>
        );
    }
}
