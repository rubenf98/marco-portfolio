import React, { Fragment } from "react";
import { Row } from "../styled";
import styled from "styled-components";
import { dimensions, customColors } from "../variables";
import NameAndLogo from "./common/NameAndLogo";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { getCarouselBreakpoints } from "../helper";
import { Col } from "antd";

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
    margin-bottom: 50px;

    @media (max-width: ${dimensions.md}) {
        padding: 15px 0;
    }
`;

const Info = styled.div`
    @media (max-width: ${dimensions.sm}) {
        width: 45%;
    }

    h3 {
        text-transform: uppercase;
        margin-bottom: 0px;
        color: ${customColors.black};
        font-weight: normal;
    }

    p {
        margin: 0px;
        margin-bottom: 30px;
        color: ${customColors.gray};
        text-transform: capitalize;

        span {
            display: block;
        }
    }
`;

const CloseIcon = styled.img`
    height: 20px;
    cursor: pointer;
    transition: 0.3s ease-out;

    &:hover {
        transform: rotate(90deg);
    }

    @media (max-width: ${dimensions.sm}) {
        height: 18px;
    }
`;

const GalleryImage = styled.div`
    width: 100%;  

    img {
        width: 100%;
        height: auto;
    }
`;


const InfoSection = ({ title, description }) => {
    return (
        <Info>
            <h3>{title}</h3>
            <p>{description}</p>
        </Info>
    );
};

let GalleryModal = ({ handleClose, post }) => {
    return (
        <div>
            {post && (
                <Fragment>
                    <Row type="flex" justify="end" width="100%">
                        <LogoContainer>
                            <CloseIcon
                                src="/icon/close.svg"
                                alt="close"
                                onClick={handleClose}
                            />
                        </LogoContainer>
                    </Row>

                    <Row gutter={32} type="flex" justify="space-around" align="start">
                        <Col span={12}>
                            <Carousel
                                autoPlay={false}
                                interval={200000}
                                arrows={true}
                                draggable={false}
                                swipeable
                                transitionDuration={700}
                                responsive={getCarouselBreakpoints([1, 1, 1, 1, 1])}
                            >
                                <GalleryImage>
                                    <img src={"/images/" + post.cover.url} />
                                </GalleryImage>
                                {Object.values(post.images).map((image, index) => (
                                    <GalleryImage>
                                        <img key={index} src={"/images/" + image.url} />
                                    </GalleryImage>
                                ))}
                            </Carousel>
                        </Col>
                        <Col span={12}>
                            <InfoSection
                                title="Data"
                                description={post.date}
                            />
                            <InfoSection
                                title="Categoria"
                                description={post.category.name}
                            />
                            <InfoSection
                                title="Artigo"
                                description={post.item}
                            />
                        </Col>

                    </Row>




                </Fragment>
            )}
        </div>
    );
};

export default GalleryModal;
