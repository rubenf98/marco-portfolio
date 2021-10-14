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
    state = {
        filters: {},
        page: 1,
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    setFilters = (aFilters) => {
        console.log(aFilters);
        var { filters } = this.state;
        filters = { ...filters, ...aFilters };
        console.log(filters);
        this.setState({ filters });

        this.props.fetchPosts(1, filters);
    }

    setPage = (aPage) => {
        var { filters } = this.state;
        this.setState({ page: aPage });

        this.props.fetchPosts(aPage, filters);
    }

    render() {
        var { data, loading, meta } = this.props;

        return (
            <Container>
                <ContentContainer>
                    <TableContainer
                        setPage={this.setPage}
                        data={data}
                        loading={loading}
                        meta={meta}
                    />

                    <SidePanel>
                        <FormContainer />
                        <Filter setFilters={this.setFilters} />
                    </SidePanel>
                </ContentContainer>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (page, filters) => dispatch(fetchPosts(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.post.loading,
        data: state.post.data,
        meta: state.post.meta
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
