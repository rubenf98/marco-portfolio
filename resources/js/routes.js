import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Login from "./components/Login";

import Painel from "./components/Dashboard/Painel";
import Posts from "./components/Dashboard/Posts/Posts";

export const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Painel>
                    <Route exact path="/painel/posts" component={Posts} />
                </Painel>
                <Layout>

                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                </Layout>
                

            </Switch>
        </Router>
    );
};

export default Routes;
