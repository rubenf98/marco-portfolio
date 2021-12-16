
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
import { Row, Modal } from "antd";

let sum = 0;
let randoms = [0, 0, 0, 0];
let percentage = 0;

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


const CustomModal = styled(Modal)`


    .ant-modal-content{
        box-shadow: none;
    }
    
`;

const PostContainer = styled(Row)`
    min-height: 100px;
    margin-bottom: 50px;
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
    column-count: 4;
    column-gap: 8px;
    line-height: 8px;
    margin: 0 10px;

    @media (max-width: ${dimensions.md}) {
        column-count:         2;
    }

    @media (max-width: ${dimensions.xs}) {
        column-count:         1;
    }
`;

const Container = styled.div`
    //
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
    padding: 8px;
    height: 400px;
    width :${props => props.width + "%"};
    vertical-align: middle;
    transition: 0.2s;
    cursor: pointer;
    animation: 1s ${props => props.hasAnimation && fadeInUpAnimation};
   

    .background {
        background: ${props => "url(" + props.src + ")"};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        width :100%;
        position: relative;
    }
    

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
        font-size: 1.2em;
        bottom: 60px;
        
    }
    .product {
        font-size: 2.4em;
        bottom: 20px;
        font-weight: 900;
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
        this.props.fetchPosts(1, { category: parseInt(e.target.id) });
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

    getRandom = () => {
        let min = Math.ceil(30);
        let max = Math.floor(70);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    getWidth = (pageIndex, index) => {
        let i = (pageIndex * 8) + index;
        let divide = (i + 1) % 4;

        if (divide == 1) {
            counter = 100;
            sum = 0;
            randoms = [this.getRandom(), this.getRandom(), this.getRandom(), this.getRandom()];
            randoms.map((val) => { sum += val; })
        }

        return randoms[divide] / sum * 100;
    };


    render() {
        var { openPost } = this.state;
        var { newPosts, posts, links, meta } = this.props;


        const ImageSection = ({ post, width }) => {
            return (
                <ImageContainer
                    width={width}
                    className="container"
                    onClick={() => this.handleModalOpen(post)}
                    src={`${window.location.origin}/images/${post.cover.url}`}
                    hasAnimation={false} //newPosts.some(e => e.id === post.id)}
                >
                    <div className="background">
                        <div className="overlay" />
                        <div className="category">
                            {post.item.category.name}
                        </div>
                        <div className="product">{post.item.name}</div>
                    </div>
                </ImageContainer>
            );
        };

        return (
            <Container>
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

                    <CustomModal width={1000} closable={false} maskClosable={false} maskStyle={{ background: "#fff", boxShadow: "none" }} footer={null} visible={this.state.visible}>
                        <GalleryModal
                            post={openPost}
                            handleClose={this.handleModalClose}
                        />
                    </CustomModal>

                    <PostContainer type="flex">

                        {Object.values(posts).map((page, pageIndex) => (
                            <Fragment>
                                {page.map((post, index) => {
                                    let i = (pageIndex * 8) + index;
                                    let divide = (i + 1) % 4;
                                    if (divide == 1) {
                                        sum = 0;
                                        randoms = [this.getRandom(), this.getRandom(), this.getRandom(), this.getRandom()];
                                        randoms.map((val) => { sum += val; })
                                    }

                                    percentage = randoms[divide] / sum * 100;

                                    return (
                                        <ImageSection width={percentage} key={post.id} post={post} index={(pageIndex * 8) + index} />
                                    )
                                })}
                            </Fragment>
                        ))}

                    </PostContainer>
                </InfiniteScroll>
            </Container >
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
