import React, { useContext, useState, useEffect, useRef } from 'react'
import { fonts, getCarouselBreakpoints, maxWidth } from '../../helper';
import { dimensions } from '../../variables';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Redirect } from "react-router-dom";
import AnimationContainer from '../common/AnimationContainer';

const Container = styled.div`
    margin: 100px 0px 200px 0px;
    box-sizing: border-box;
    position: relative;

    .button-control {
            position: absolute;
            bottom: -70px; 
            opacity: .7;
            padding: 10px;
            box-sizing: border-box;
            z-index: 5;

            img {
                width:18px;
            }
        }

        .right {
            right: 45px;
        }

        .left {
            left: 45px;
        }

    @media (max-width: ${dimensions.md}) {
        margin-left: 0px;
    }
    
`;

const Title = styled.h2`
    font-size: 60px;
    line-height: 70px;
    letter-spacing: -.02em;
    font-family: ${fonts.subtitle};
    max-width: ${maxWidth};
    margin: 50px auto;

    @media (max-width: ${dimensions.md}) {
        font-size: 82px;
        text-align: center;
        margin-bottom: 40px;
    }
`;

const CarouselContainer = styled(Carousel)`
    width: 100%;
    position: relative;
    max-width: calc(100vw - ((100vw - ${maxWidth}) / 2));
    margin-left: auto;

    .image-item {
        padding-right: 50px;

        @media (max-width: ${dimensions.sm}) {
            padding: 0px;
        }
    }

    
`;

const Item = styled(Link)`
    width: 100%;   
    

    img {
        height: 400px;
        width: 100%;
        object-fit: cover;
        cursor: pointer;  
        padding-right: 50px;
        box-sizing: border-box;
    }


    h3 {
        font-size: 28px;
        margin: 10px 0px;
        color: black;
        padding-right: 50px;
        box-sizing: border-box;
    }


`;
const items = [
    { title: "Sofás", image: "sofas" },
    { title: "Cadeiras", image: "cadeira" },
    { title: "Cortinados", image: "cortina" },
    { title: "Cabeceiras", image: "cabeceira" },
    { title: "Toldos", image: "toldo" },
    { title: "Outros", image: "outro" }
];

function Work({ text }) {
    const carouselRef = useRef(null);


    return (
        <Container id="Portfolio">


            <Title>Explore por categorias</Title>

            <CarouselContainer
                autoPlay={false}
                interval={200000}
                arrows={true}
                draggable={false}
                partialVisible
                swipeable
                transitionDuration={700}
                responsive={getCarouselBreakpoints([1, 1, 2, 2, 2])}
                ref={carouselRef}
            >
                {items.map((item, index) => (


                    <Item to={"portfolio?categoria=" + item.image}>
                        <img src={"/images/homepage/" + item.image + ".jpg"} />

                        <h3>{item.title}</h3>

                    </Item>


                ))}

            </CarouselContainer>
        </Container>
    )
}

export default Work