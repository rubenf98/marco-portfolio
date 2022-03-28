import React, { Fragment } from "react";
import { Row } from "../styled";
import styled from "styled-components";
import { dimensions, customColors } from "../variables";
import NameAndLogo from "./common/NameAndLogo";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

const Gallery = styled(Carousel)`
    width: 90%;
    margin: auto;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    .carousel .slide {
        background: transparent;
        display: flex;
    }

    .carousel-status {
        display: none;
    }

    .carousel .control-prev.control-arrow::before {
        border-right: 12px solid #000;
    }

    .carousel .control-next.control-arrow::before {
        border-left: 12px solid #000;
    }

    .carousel .control-arrow::before,
    .carousel .carousel-slider .control-arrow::before {
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
    }

    .carousel.carousel-slider .control-arrow:hover {
        background: none;

        
    }
`;

const GalleryImage = styled.img`
    width: 100%;
    object-fit: cover;
    margin: auto;
    display: block;
`;

const GalleryImageContainer = styled.div`
    margin: auto;
    display: block;
    width: 100%;    

    @media (max-width: ${dimensions.md}) {
        width: 100%;
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
                    <Row type="flex" justify="space-between" width="90%">
                        <LogoContainer>
                            <NameAndLogo />
                        </LogoContainer>
                        <LogoContainer>
                            <CloseIcon
                                src="/icon/close.svg"
                                alt="close"
                                onClick={handleClose}
                            />
                        </LogoContainer>
                    </Row>

                    <Row type="flex" justify="space-around" align="center">
                        <InfoSection
                            title="Data de Projeto"
                            description={post.date}
                        />
                        <InfoSection
                            title="Cliente"
                            description={post.client ? post.client.name : "------"}
                        />
                        <InfoSection
                            title="Categoria"
                            description={post.category.name}
                        />
                        <InfoSection
                            title="Artigo"
                            description={post.item}
                        />
                    </Row>

                    <Gallery
                        infiniteLoop
                        autoPlay
                        stopOnHover
                        selectedItem={0}
                        dynamicHeight
                    >
                        <GalleryImageContainer>
                            <GalleryImage
                                src={`${window.location.origin}/images/${post.cover.url}`}
                            />
                        </GalleryImageContainer>
                        {Object.values(post.images).map((image) => (
                            <GalleryImageContainer>
                                <GalleryImage
                                    src={`${window.location.origin}/images/${image.url}`}
                                />
                            </GalleryImageContainer>
                        ))}
                    </Gallery>


                </Fragment>
            )}
        </div>
    );
};

export default GalleryModal;
