import React, { Fragment } from "react";
import { Row } from "../styled";
import styled from "styled-components";
import { dimensions, customColors } from "../variables";
import NameAndLogo from "./common/NameAndLogo";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Header = styled.ul`
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

const LogoContainer = styled.div`
    width: 50% auto;
    display: flex;
    align-items: center;
    margin: 30px 0;
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
    width: 100%;
    margin: auto;
    display: block;

    .carousel .slide {
        background: transparent;
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

    .carousel .control-arrow::before,
    .carousel.carousel-slider .control-arrow::before {
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
    }

    .carousel.carousel-slider .control-arrow:hover {
        background: none;
    }
`;

const GalleryImage = styled.img`
    height: 60vh;
    width: auto !important;
    max-width: 1000px;
    margin: auto;
    display: block;
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

                    <Gallery
                        infiniteLoop={true}
                        autoPlay={true}
                        stopOnHover={true}
                        selectedItem={0}
                    >
                        <div>
                            <GalleryImage
                                src={`${window.location.origin}/images/${post.cover.url}`}
                            />
                        </div>
                        {Object.values(post.images).map((image) => (
                            <div>
                                <GalleryImage
                                    src={`${window.location.origin}/images/${image.url}`}
                                />
                            </div>
                        ))}
                    </Gallery>

                    <Row type="flex" justify="space-around" align="center">
                        <InfoSection
                            title="Data de Projeto"
                            description="09 Janeiro, 2021"
                        />
                        <InfoSection
                            title="Cliente"
                            description={post.client ? post.client : "------"}
                        />
                        <InfoSection
                            title="Categoria"
                            description={post.item.category.name}
                        />
                        <InfoSection
                            title="Produto"
                            description={post.item.name}
                        />
                    </Row>
                </Fragment>
            )}
        </div>
    );
};

export default GalleryModal;
