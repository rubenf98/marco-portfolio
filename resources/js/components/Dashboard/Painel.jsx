import React, { Component } from "react";
import styled from "styled-components";
import Table from "../common/Table";
import Filters from "../common/Filters";
import { login } from "../../redux/auth/actions";
import { customColors } from "../../variables";
import { Row } from "../../styled";
import { fetchPosts } from "../../redux/post/actions";
import { connect } from "react-redux";
import { CustomLink } from "../../styled";

const PageContainer = styled.div`
    margin: auto;
    display: block;
`;

const NavBar = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 60%;
    max-width: 1600px;
    min-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

const TableContainer = styled.div`
    width: 65%;
    background: white;
    border-radius: 5px;
`;

const FilterContainer = styled(TableContainer)`
    width: 25%;
`;

const TabList = styled.ul`
    text-align: center;
    margin: 0 auto;
    display: block;
    padding: 0;

    li {
        display: inline-block;
        :last-child {
            div::after {
                content: "";
            }
        }
    }
`;

const LinkWithSeparator = styled(CustomLink)`
    margin: 0 20px;
    text-transform: uppercase;
    font-size: 1em;

    ::before {
        height: 6px;
        bottom: 1px;
    }

    ::after {
        position: absolute;
        content: "•";
        color: #b7b7b7;
        right: -25px;
    }
    :last-child {
        content: "";
    }
`;

class Painel extends Component {
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

        console.log(this.props.posts);
        return (
            <PageContainer>
                <NavBar>
                    <TabList>
                        <li>
                            <LinkWithSeparator as="div">
                                Posts
                            </LinkWithSeparator>
                            <LinkWithSeparator as="div">
                                Categorias
                            </LinkWithSeparator>
                            <LinkWithSeparator as="div">
                                Produtos
                            </LinkWithSeparator>
                            <LinkWithSeparator as="div">
                                Clientes
                            </LinkWithSeparator>
                        </li>
                    </TabList>
                </NavBar>
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
                        <FilterContainer>
                            <Filters></Filters>
                        </FilterContainer>
                    </ContentContainer>
                </Container>
            </PageContainer>
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
        loadingPosts: state.post.loading,
        posts: state.post.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Painel);
