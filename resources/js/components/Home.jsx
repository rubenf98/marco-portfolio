import Modal from "./common/Modal";
import GalleryModal from "./GalleryModal";
import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { CustomLink, Title } from "../styled";
import { dimensions } from "../variables";
import { fetchCategories } from "../redux/category/actions";
import { fetchPosts } from "../redux/post/actions";
import { connect } from "react-redux";
import { fadeInDown, fadeInUp } from 'react-animations'
import InfiniteScroll from "react-infinite-scroll-component";
import { Row } from "antd";

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const FilterList = styled.ul`
    text-align: center;
    margin: 0 auto 3% auto;
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

const LoadingContainer = styled(Row)`
    margin: 20px;

    img {
        width: 50px;
        animation:${spin} 3s linear infinite;
    }

    
`;



const ImageSectionContainer = styled.div`
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
    -webkit-column-gap: 8px;
    -moz-column-gap: 8px;
    column-gap: 8px;
    line-height: 8px;
    margin: 0 10px;

    @media (max-width: ${dimensions.md}) {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
    }

    @media (max-width: ${dimensions.xs}) {
    -moz-column-count:    1;
    -webkit-column-count: 1;
    column-count:         1;
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


const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    vertical-align: middle;
    transition: 0.2s;
    cursor: pointer;
    animation: 1s ${props => props.hasAnimation && fadeInUpAnimation};
    

    &:hover {
        .overlay {
            opacity: 0.5;
        }

        .category,
        .product {
            opacity: 1;
        }
        .category{
            animation: .8s ${fadeInDownAnimation};
        }

        .product{
            animation: .8s ${fadeInUpAnimation};
        }
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0.2s ease;
        background-color: #000000;
    }

    .category,
    .product {
        color: white;
        text-transform: uppercase;
        position: absolute;
        text-align: center;
        left: 10px;
        opacity: 0;
    }
    .category {
        font-size: 14px;
        bottom: 40px;
        
    }
    .product {
        font-size: 30px;
        bottom: 20px;
        font-weight: bold;
    }

    img {
        margin-top: 8px;
        display: block;
        width: 100%;
        height: auto;

        transition: 0.2s;

        &:hover {
            filter: brightness(50%);
        }
    }
`;

class Home extends Component {
    state = {


        postsPerColumn: 0,
        activeCategory: 0,
        visible: false,
        openPost: false,
    };

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchPosts();
    }

    handleFilterClick = (e) => {
        this.setState({ activeCategory: parseInt(e.target.id) });
    };

    handleModalClose = () => {
        this.setState({ visible: false });
    };

    handleModalOpen = (post) => {
        this.setState({ visible: true, openPost: post });
    };

    handleNextPage = () => {
        setTimeout(() => {
            var { meta } = this.props;
            var nextPage = meta.current_page + 1;
            this.props.fetchPosts(nextPage);
        }, 3000);

    };

    render() {
        var { openPost } = this.state;
        var { newPosts, posts, links, meta } = this.props;

        const ImageSection = ({ post }) => {
            return (
                <ImageContainer
                    className="container"
                    onClick={() => this.handleModalOpen(post)}
                    hasAnimation={false} //newPosts.some(e => e.id === post.id)}
                >
                    <img
                        src={`${window.location.origin}/images/${post.cover.url}`}
                    />
                    <div className="overlay">

                    </div>
                    <div className="category">
                        {post.item.category.name}
                    </div>
                    <div className="product">{post.item.name}</div>
                </ImageContainer>
            );
        };

        return (
            <div>
                <InfiniteScroll
                    dataLength={meta.to ? meta.to : 6}
                    next={this.handleNextPage}
                    hasMore={links.first && links.next}
                    loader={
                        <LoadingContainer type="flex" justify="center">
                            <img src="/icon/loading.svg" />
                        </LoadingContainer>
                    }
                >
                    <Title>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </Title>
                    <FilterList>
                        <li>
                            <LinkWithSeparator
                                onClick={this.handleFilterClick}
                                as="div"
                                id={0}
                                active={this.state.activeCategory == 0 && true}
                            >
                                todos
                            </LinkWithSeparator>
                        </li>
                        {Object.values(this.props.categories).map((category) => (
                            <li key={category.id}>
                                <LinkWithSeparator
                                    onClick={this.handleFilterClick}
                                    as="div"
                                    id={category.id}
                                    active={
                                        this.state.activeCategory == category.id &&
                                        true
                                    }
                                >
                                    {category.name}
                                </LinkWithSeparator>
                            </li>
                        ))}
                    </FilterList>

                    <Modal visible={this.state.visible}>
                        <GalleryModal
                            post={openPost}
                            handleClose={this.handleModalClose}
                        />
                    </Modal>


                    {Object.values(posts).map((page) => (
                        <ImageSectionContainer type="flex">
                            {
                                page.map((post) => (
                                    <ImageSection key={post.id} post={post} />
                                ))
                            }
                        </ImageSectionContainer>
                    ))}

                    <br />
                </InfiniteScroll>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPosts: (page, filters) => dispatch(fetchPosts(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loadingPosts: state.post.loading,
        posts: state.post.infiniteData,
        newPosts: state.post.data,
        links: state.post.links,
        meta: state.post.meta,
        categories: state.category.data,
        loadingCategories: state.category.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
