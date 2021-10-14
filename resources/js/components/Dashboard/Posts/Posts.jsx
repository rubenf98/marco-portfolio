import React, { Component } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { fetchPosts } from "../../../redux/post/actions";
import Filter from "./Filter";
import FormContainer from "./FormContainer";
import TableContainer from "./TableContainer";

const ContentContainer = styled.div`
    width: 60%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SidePanel = styled.div`
    width: 25%;
`;

class Posts extends Component {
    render() {
        return (
            <Container>
                <ContentContainer>
                    <TableContainer />

                    <SidePanel>
                        <FormContainer />
                        <Filter />
                    </SidePanel>
                </ContentContainer>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.post.loading,
        posts: state.post.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
