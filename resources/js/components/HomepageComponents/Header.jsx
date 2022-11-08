import React from 'react'
import styled from "styled-components";
import { maxWidth } from '../../helper';
import { customColors, dimensions } from '../../variables';
import AnimationContainer from '../common/AnimationContainer';

const Container = styled.div`
    height: calc(100vh - 100px);
    margin: 0px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: ${customColors.red};
    overflow: hidden;
    
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${maxWidth};
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    color: white;

    h1 {
        font-family: 'Butler';
        line-height: 90%;
        text-align: center;
        margin: 0px auto;
        font-size: 7.4vw;
        letter-spacing: -0.058em;
        font-weight: 900;
        color: inherit;
    }

    h2 {
        text-align: center;
        margin: 0px auto 50px auto;
        font-size: 2.1vw;
        text-transform: uppercase;
        letter-spacing: 1em;
        font-weight: 200;
        color: inherit;
    }

    @media (max-width: ${dimensions.sm}) {
        h1 {
            font-size: 70px;
        }

        h2 {
            font-size: 20px;
            letter-spacing: .7em;
        }
    }
`;


const Image = styled.div`
    position: relative;

    img {
        width: 60%;
        display: block;
        margin: auto;
        position: relative;
        z-index: 2;
    }

    @media (max-width: ${dimensions.sm}) {

        img {
            width: 200%;
            left: 20%;
        }
            
    }
    
`;

const Background = styled.div`
    width: 200vw;
    height: 100vh;
    left: -100vw;
    top: 120px;
    position: absolute;
    background-color: white;
`;

function Header() {
    return (

        <Container>
            <Content>
                <h1><AnimationContainer animation="fadeInUp" delay={300}>Marco Abreu.</AnimationContainer></h1>
                <h2><AnimationContainer animation="fadeInUp" delay={500}>estofador</AnimationContainer></h2>

                <Image>
                    <picture>
                        <source srcSet="/images/header.png" />

                        <img src="/images/header.webp" alt="sofá" />
                    </picture>


                    <Background />
                </Image>


            </Content>

        </Container>
    )
}

export default Header