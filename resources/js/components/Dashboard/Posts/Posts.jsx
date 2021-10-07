import React, { Component } from "react";
import styled from "styled-components";
import Table from "../../common/Table";

import { connect } from "react-redux";
import { fetchPosts } from "../../../redux/post/actions";
import Filter from "./Filter";
import Form from "./Form";

const TableContainer = styled.div`
    width: 70%;
    background: white;
    border-radius: 5px;
`;

const ContentContainer = styled.div`
    width: 60%;
    max-width: 1600px;
    min-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SidePanel = styled.div`
    width: 25%;
`;

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const columns = [
            { Header: "Data", accessor: "date" },
            { Header: "Categoria", accessor: "item.category.name" },
            { Header: "Produto", accessor: "item.name" },
            { Header: "Cliente", accessor: "client" },
        ];

        return (
            <Container>
                <ContentContainer>
                    <TableContainer>
                        {!this.props.loadingPosts && (
                            <Table
                                data={this.props.posts}
                                columns={columns}
                            ></Table>
                        )}
                    </TableContainer>
                    <SidePanel>
                        <Filter></Filter>
                        <Form></Form>
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
