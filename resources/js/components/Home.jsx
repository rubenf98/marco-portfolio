import Modal from "./common/Modal";
import GalleryModal from "./GalleryModal";
import React, { Component } from "react";
import styled from "styled-components";
import { Row, CustomLink, Title } from "../styled";
import { dimensions } from "../variables";
import { fetchCategories } from "../redux/category/actions";
import { fetchPosts } from "../redux/post/actions";
import { connect } from "react-redux";

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

const Col = styled.div`
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    box-sizing: border-box;
    padding: 0 6px;

    @media (max-width: ${dimensions.lg}) {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }

    @media (max-width: ${dimensions.sm}) {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
        padding: 0 3px;
    }

    img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            filter: brightness(50%);
        }
    }
`;

const ImageContainer = styled.div`
    margin-top: 8px;
    position: relative;
    width: 100%;
    vertical-align: middle;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        .overlay {
            opacity: 0.5;
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
    }
    .category {
        font-size: 1em;
        bottom: 55px;
        font-weight: 200;
    }
    .product {
        font-size: 1.6em;
        bottom: 25px;
        font-weight: 500;
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
        loadingPosts: true,
        postsRange: [],
        postsPerColumn: 0,
        activeCategory: 0,
        visible: false,
        openPost: false,
    };

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchPosts().then(() => {
            let { posts } = this.props;
            let postsPerColumn = Math.floor(this.props.posts.length / 4);

            this.setState({
                loadingPosts: false,
                postsPerColumn: postsPerColumn,
                postsRange: [
                    [0, postsPerColumn],
                    [postsPerColumn, postsPerColumn + postsPerColumn],
                    [
                        postsPerColumn + postsPerColumn,
                        posts.length - postsPerColumn,
                    ],
                    [posts.length - postsPerColumn, posts.length],
                ],
            });
        });
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

    render() {
        var { postsRange, loadingPosts, openPost } = this.state;
        var { posts } = this.props;

        const ImageSection = ({ post }) => {
            return (
                <ImageContainer
                    className="container"
                    onClick={() => this.handleModalOpen(post)}
                >
                    <img
                        src={`${window.location.origin}/images/${post.cover.url}`}
                    />
                    <div className="overlay">
                        <div className="category">
                            {post.item.category.name}
                        </div>
                        <div className="product">{post.item.name}</div>
                    </div>
                </ImageContainer>
            );
        };

        return (
            <div>
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
                {!loadingPosts && (
                    <Row type="flex">
                        {[0, 1, 2, 3].map((index) => (
                            <Col key={index}>
                                {Object.values(
                                    posts.slice(
                                        postsRange[index][0],
                                        postsRange[index][1]
                                    )
                                ).map((post) => (
                                    <ImageSection key={post.id} post={post} />
                                ))}
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

const mapStateToProps = (state) => {
    return {
        loadingPosts: state.post.loading,
        posts: state.post.data,
        categories: state.category.data,
        loadingCategories: state.category.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
