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
        "https://scontent.ffnc1-1.fna.fbcdn.net/v/t31.0-8/19055700_1694675440838712_7343062838530535246_o.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeHxCGNYBdWm8sKkSMxY6N9m2c6sXa6qHmrZzqxdrqoeauhK3psh_L4RaymIbVvUPpI&_nc_ohc=IHOArQymnsoAX_A2JE6&_nc_ht=scontent.ffnc1-1.fna&oh=d737344cd5cd85ed387ebf778e31868d&oe=60245A7B";
    const banco =
        "https://scontent.ffnc1-1.fna.fbcdn.net/v/t1.0-9/97181186_2320266701612913_1028492728628936704_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEZNJcdQSKC5TDUMuQpZ9L-kxiQ9pcam1eTGJD2lxqbV8UVbCYLWS_bGP7M6y6EC04&_nc_ohc=cik1JtjR3eEAX8akyD1&_nc_ht=scontent.ffnc1-1.fna&oh=8a1142aa3f6374907cbf0346a44f329b&oe=60264377";
    const sofa =
        "https://ireland.apollo.olxcdn.com/v1/files/zjy4jsplqma12-PT/image;s=1000x700";
    const sofa2 =
        "https://scontent.ffnc1-1.fna.fbcdn.net/v/t1.0-0/p180x540/100827474_2332859940353589_4516845499784888320_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeERus85KUPHZ-KKk2Ka-zxjQlfydTsQpkVCV_J1OxCmRdMGQgP-qf_us5iMy30CnF4&_nc_ohc=k9RcIlaLWNsAX82x7Hg&_nc_ht=scontent.ffnc1-1.fna&tp=6&oh=4afba5e57a6583b4aadb29f085c0ed40&oe=6022F40D";

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
