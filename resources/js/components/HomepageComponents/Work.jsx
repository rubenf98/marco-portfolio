import React, { useContext, useState, useEffect, useRef } from 'react'
import { fonts, getCarouselBreakpoints, maxWidth } from '../../helper';
import { dimensions } from '../../variables';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Redirect } from "react-router-dom";
import AnimationContainer from '../common/AnimationContainer';
import { Subtitle } from '../../styled';

const Container = styled.div`
    margin: 100px 0px 200px 0px;
    box-sizing: border-box;
    position: relative;

    @media (max-width: ${maxWidth}) {
        padding: 0px 10px;
        box-sizing: border-box;
    }

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
    
    .img-wrapper {
        height: 400px;
        width: 90%;
        overflow: hidden;
        display: inline-block;

        @media (max-width: 800px) {
            width: 100%;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            cursor: pointer;  
            
            transition: all .3s ease;
        }

    }
    


    h3 {
        font-size: 28px;
        margin: 10px 0px;
        color: black;
        padding-right: 50px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.sm}) {
            font-size: 20px;
        }
    }

    &:hover {
        img {
            transform: rotate(2deg) scale(1.1);
        }
    }


`;
const items = [
    { title: "Sofás", image: "sofas" },
    { title: "Cadeiras", image: "cadeiras" },
    { title: "Cortinados", image: "cortinados" },
    { title: "Cabeceiras", image: "cabeceira" },
    { title: "Toldos", image: "toldo" },
    { title: "Outros", image: "outro" }
];

function Work({ text }) {
    const carouselRef = useRef(null);


    return (
        <Container id="Portfolio">


            <Subtitle>Explore por categorias</Subtitle>

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


                    <Item key={index} to={"portfolio?categoria=" + item.image}>
                        <div className='img-wrapper'>
                            <img src={"/images/homepage/" + item.image + ".jpg"} />
                        </div>


                        <h3>{item.title}</h3>

                    </Item>


                ))}

            </CarouselContainer>
        </Container >
    )
}

export default Work