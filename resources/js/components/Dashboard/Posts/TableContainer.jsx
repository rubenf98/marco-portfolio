import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Table from "../../common/Table";
import { connect } from "react-redux";
import { fetchPosts } from "../../../redux/post/actions";

const PageContainer = styled.div`
    width: 73%;
    
`;

class TableContainer extends Component {
    state = {
        current: null,
    }
    componentDidMount() {
        this.props.fetchPosts();
    }

    onPageChange = page => {
        this.props.fetchPosts(page);
    };

    render() {
        const columns = [
            { Header: "#", accessor: "id" },
            { Header: "Categoria", accessor: "item.category.name" },
            { Header: "Produto", accessor: "item.name" },
            { Header: "Cliente", accessor: "client.name" },
            { Header: "Data", accessor: "date" },
        ];

        return (
            <PageContainer>
                {!this.props.loadingPosts && (
                    <Table
                        data={this.props.posts}
                        columns={columns}
                        meta={this.props.meta}
                        onPageChange={this.onPageChange}
                    />
                )}
            </PageContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (page) => dispatch(fetchPosts(page)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.post.loading,
        posts: state.post.data,
        meta: state.post.meta
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
