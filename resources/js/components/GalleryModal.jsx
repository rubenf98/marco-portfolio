import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { dimensions, customColors } from "../variables";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

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

const Container = styled.div`
    .lb-icon-arrow {
        display: ${props => props.hasControls ? "block" : "none"};
    }

    .lb-container {
        height: 100vh;
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


let GalleryModal = ({ handleClose, post, images }) => {
    const [imagery, setImagery] = useState([])
    useEffect(() => {
        if (images) {
            var i = [];
            images.map((image) => {
                i.push({ url: "/images" + image.url, title: post.item });
            })
            setImagery(i);
        }


    }, [images])
    console.log(imagery);
    return (
        <Container hasControls={imagery.length > 1}>
            {imagery.length && (
                <Lightbox
                    images={imagery}
                    onClose={handleClose}
                    allowRotate={false}
                    allowZoom={false}
                    keyboardInteraction={imagery.length > 1}
                />
            )}
        </Container>
    );
};

export default GalleryModal;
