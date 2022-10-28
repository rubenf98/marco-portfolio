import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { CustomLink, Title } from "../styled";
import { fetchCategories } from "../redux/category/actions";
import { fetchPosts, resetInfiniteData } from "../redux/post/actions";
import { connect } from "react-redux";
import { fadeInDown, fadeInUp } from 'react-animations'
import InfiniteScroll from "react-infinite-scroll-component";
import { Row, Modal } from "antd";
import ScrollAnimation from 'react-animate-on-scroll';
import AnimationContainer from "./common/AnimationContainer";
import { dimensions } from "../variables";

let currentIndex = 0;
const grid1 = [28, 19, 27, 26, 22, 31, 26, 21, 26, 21, 25, 28, 15, 33, 32, 20, 22, 31, 26, 21];
const grid2 = [40, 60, 38, 62, 50, 50, 55, 45, 70, 30, 40, 60, 38, 62, 50, 50, 55, 45, 70, 30];
const grid3 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

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
    top: 10px;

    @media (max-width: ${dimensions.md}) {
        .ant-modal-body {
            padding: 0px;
        }
    }
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
const ScrollContainer = styled(ScrollAnimation)`
    padding: 8px;
    box-sizing: border-box;
    height: 400px;
    width :${props => props.width + "%"};
    vertical-align: middle;
    cursor: pointer;
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
    height: 100%;
    width : 100%;
   

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

        .info {
            opacity: 1;

            .category{
                animation: .8s ${fadeInDownAnimation};
            }

            .product{
                animation: .8s ${fadeInUpAnimation};
            }
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

    .info {
        position: absolute;
        text-align: left;
        text-transform: uppercase;
        left: 10px;
        opacity: 0;
        bottom: 20px;
        color: white;

        .category {
            font-size: 1.2em; 
        }
        .product {
            font-size: 2.4em;
            font-weight: 900;
        }
    }
    
`;



function Portfolio({categories, fetchCategories, fetchPosts}) {
    const [activeCategory, setActiveCategory] = useState(0);
    const [visible, setVisible] = useState(false);
    const [openPost, setOpenPost] = useState(false);
    const [grid, setGrid] = useState(grid1);

    function handleResize() {
        var helperGrid = [...grid];

        if (window.innerWidth > 992) {
            helperGrid = grid1;
        } else if (window.innerWidth < 576) {
            helperGrid = grid3;
        } else helperGrid = grid2;

        setGrid(helperGrid);
    };
    useEffect(() => {
        this.props.fetchCategories();
        this.props.fetchPosts();

        window.addEventListener('resize', this.handleResize)
        handleResize();
    }, [third])
    

    return (
        <div>Portfolio copy</div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPosts: (page, filters) => dispatch(fetchPosts(page, filters)),
        resetInfiniteData: () => dispatch(resetInfiniteData()),
    };
};

const mapStateToProps = (state) => {
    return {
        loadingPosts: state.post.loading,
        posts: state.post.infiniteData,
        links: state.post.links,
        meta: state.post.meta,
        categories: state.category.data,
        loadingCategories: state.category.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
