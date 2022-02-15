import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchPosts, fetchPost } from "../../../redux/post/actions";
import Filter from "./Filter";
import FormContainer from "./FormContainer";
import { dimensions } from "../../../variables";
import TableContainer from "./PostsTableContainer";

const ContentContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    margin: 50px 0px;

    @media (max-width: ${dimensions.lg}){
        width: 90%;
    }
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

    @media (max-width: ${dimensions.md}){
        display: none;
    }
`;

const Table = styled.div`
    width: 73%;

    @media (max-width: ${dimensions.md}){
        width: 100%;
    }
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
  
        this.setState({ filters });

        this.props.fetchPosts(1, filters);
    }

    handlePageChange = (pagination) => {
        var { filters } = this.state;
        this.setState({ page: pagination.current });

        this.props.fetchPosts(pagination.current, filters);
    }

    onRowClick = (aRecord) => {
        this.props.fetchPost(aRecord);
    }

    render() {
        var { data, loading, meta, current } = this.props;

        return (
            <Container>
                <ContentContainer>
                    <Table>
                        <TableContainer
                            onRowClick={this.onRowClick}
                            handlePageChange={this.handlePageChange}
                            data={data}
                            loading={loading}
                            meta={meta}
                        />
                    </Table>
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
        fetchPost: (id) => dispatch(fetchPost(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.post.loading,
        data: state.post.data,
        meta: state.post.meta,
        current: state.post.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
