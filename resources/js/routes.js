import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Portfolio from "./components/Portfolio";
import Layout from "./components/Layout";
import Login from "./components/Login";

import PainelLayout from "./components/Dashboard/PainelLayout";
import Homepage from "./components/Homepage";

export const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/painel" component={PainelLayout} />


                <Layout>
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/" component={Homepage} />
                </Layout>


            </Switch>
        </Router>
    );
};

export default Routes;
