import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { customColors, dimensions } from "../variables";
import { maxWidth } from "../helper";
import { Input } from "antd";
import { connect } from "react-redux";
import { setFilters } from "../redux/application/actions";

const { Search } = Input;

const Container = styled.section`
    width: 100%;
    background-color: ${customColors.red};
`;

const Content = styled.div`
    width: 100%;
    height: 100px;
    max-width: ${maxWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin: auto;

    .search-container {
        display: flex;
        align-items: center;
        min-width: 120px;

        @media (max-width: ${dimensions.md}) {
            min-width: 90px;
        }
    }
`;

const LinkDiv = styled.div`
    font-size: 18px;
    color: white;

    p {
        margin: 0px;
        opacity: 1;
        transition: all .3s ease-out;

        &::before {
            content: "pesquisar";
        }
    } 


    .ant-input-search {
        border-bottom: 1px solid white;
        padding: 3px 0px;
        width: 0px;
        opacity: 0;
        transition: all .4s ease-out;
        
        input {
            color: white;
            
        }

        button {
            all: unset;
            cursor: pointer;
        }

        svg {
            fill: white;
        }

        .ant-input-group-addon {
            background-color: transparent;
        }
    }

    
    &:hover {
        p {
            opacity: 0;
            &::before {
                content: "";
            }
        }

        

        .ant-input-search {
            opacity: 1;
            width: 120px;

            @media (max-width: ${dimensions.md}) {
                width: 100px;
            }

            @media (max-width: ${dimensions.sm}) {
                width: 80px;
            }
        }
    }

    a {
        color: white;
    }

    @media (max-width: ${dimensions.md}) {
        font-size: 16px;
    }

    @media (max-width: ${dimensions.sm}) {
        font-size: 14px;
    }
`;


const Logo = styled(Link)`
    margin: 0px 30px;
    img {
        width: 120px;
        height: auto;
    }

    @media (max-width: ${dimensions.md}) {
        margin: 0px 20px;

        img {
            width: 100px;
        }
    }

    @media (max-width: ${dimensions.sm}) {

        img {
            width: 80px;
        }
    }
        
`;
function NavBar({ setFilters, filters }) {
    const history = useHistory();

    function handleSearch(e) {
        setFilters({ ...filters, search: e });
        history.push("/portfolio?search=" + e + "#gallery");

    }

    return (
        <Container>
            <Content>

                <LinkDiv>
                    <NavLink activeClassName="link--active" to="/portfolio">Trabalhos</NavLink>
                </LinkDiv>

                <Logo to="/" style={{ textDecoration: " none" }}>
                    <img src="/images/logo_white.svg" alt="logo" />
                </Logo>

                <LinkDiv className="search-container">
                    <p></p>
                    <Search
                        bordered={false}
                        onSearch={handleSearch}
                    />
                </LinkDiv>
            </Content>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilters: (filters) => dispatch(setFilters(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.application.filters,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
