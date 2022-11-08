import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    background-color: #ffffff;
`;

const Content = styled.div`
    margin: auto;
    display: block;
`;

function Layout({ children }) {
    const [search, setSearch] = useState("");
    let history = useHistory();

    function handleSearch(e) {
        history.push("/portfolio?search=" + e);
    }

    return (
        <Container>
            <Content>
                <NavBar search={search} setSearch={setSearch} />

                <section>{children}</section>

                <Footer />
            </Content>
        </Container>
    )
}

export default Layout

