import React from "react";
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

        span {
            display: block;
        }
    }
`;

const CloseIcon = styled.img`
    height: 25px;
    cursor: pointer;

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

const InfoSection = ({ title, description, larger }) => {
    return (
        <Info>
            <h3>{title}</h3>
            <p>{description}</p>
        </Info>
    );
};

let GalleryModal = ({ handleClose }) => {
    const url =
        "https://hipercentrodomovel.pt/wp-content/uploads/2018/10/CANmuse.jpg";
    const banco =
        "https://cdn.vente-unique.com/thumbnails/rs/930/310/310803/0/sofa_310803.jpg";
    const sofa =
        "https://ireland.apollo.olxcdn.com/v1/files/zjy4jsplqma12-PT/image;s=1000x700";
    const sofa2 =
        "https://lh3.googleusercontent.com/proxy/rS91dQY2So0pDIHxbXZCLArY-UoKvei53x1e-SdalX3X6-15hBJj929zsWEdnV1TNRQlhX1CbAUbsx8xBW9SgDldmJsdJMA3IpeTOkxZgQOufKUY_YB_3gVsfR4DnciauIxXOfoUlvzNKfr38YNWTxQaSscWQcPjkQ";

    return (
        <div>
            <Row type="flex" justify="space-between" width="90%">
                <LogoContainer>
                    <NameAndLogo logo />
                </LogoContainer>
                <LogoContainer>
                    <CloseIcon
                        src="/icon/close.svg"
                        alt="close"
                        onClick={handleClose}
                    />
                </LogoContainer>
            </Row>
            <Gallery>
                <div>
                    <GalleryImage src={url} />
                </div>
                <div>
                    <GalleryImage src={banco} />
                </div>
                <div>
                    <GalleryImage src={sofa} />
                </div>
                <div>
                    <GalleryImage src={sofa2} />
                </div>
            </Gallery>
            <Row type="flex" justify="space-around" align="center">
                <InfoSection
                    title="Data de Projeto"
                    description="09 Janeiro, 2021"
                />
                <InfoSection title="Cliente" description="lorem" />
                <InfoSection title="Categoria" description="Sofa" />
                <InfoSection title="Produto" description="Sofa em L" />
            </Row>
        </div>
    );
};

export default GalleryModal;
