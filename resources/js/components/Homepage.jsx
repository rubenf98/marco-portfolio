import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { fonts, maxWidth } from '../helper';
import { Subtitle } from '../styled';
import AnimationContainer from './common/AnimationContainer';
import Work from './HomepageComponents/Work';

const Title = styled.h1`
    font-family: 'Philosopher', sans-serif;
    font-size: 9vw;
    line-height: 100px;
    text-align: center;
    margin: 20vh auto 0px auto;
    z-index: 2;
    position: relative;
    opacity: 1;
    color: black;
`;

const Header = styled.img`
    width: 100%;
    height: calc(100vh - 20vh - 200px);
    object-fit: cover;
    z-index: -1;
    padding: 0px 20px;
    box-sizing: border-box;
`;


const About = styled.section`
    width: 80%;
    margin: 200px auto;
    display: block;;
    max-width: ${maxWidth};

    .title {
        font-size: 60px;
        line-height: 70px;
        letter-spacing: -.02em;
        font-family: ${fonts.subtitle};
    }

    .info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        img {
            margin-top: 50px;
            width: 40%;
        }

        .info {
            margin-top: 50px;
            width: 60%;
            padding: 0px 40px;
            box-sizing: border-box;

            p {
                font-size: 18px;
                font-family: ${fonts.text};
            }
        }
    }
`;

const AboutLink = styled(Link)`
    color: black;
    display: flex;
    justify-content: center;
    margin: 100px auto;
    text-decoration: underline;
    font-size: 18px;

    &:hover {
        text-decoration: underline;
        color: black;
    }
`;


function Homepage() {
    return (
        <div>

            <Title><AnimationContainer animation="fadeIn" delay={800} >Marco Abreu</AnimationContainer></Title>

            <AnimationContainer animation="fadeInUp">
                <Header src="/images/homepage/header.jpg" alt="sofá" />
            </AnimationContainer>
            <About>
                <Subtitle>Eget lacus diam, morbi nulla pellentesque molestie sollicitudin est nulla vulputate viverra.</Subtitle>
                <div className="info-container">
                    <img src="/images/homepage/about.jpg" alt="about decoration image" />
                    <div className="info">
                        <p>Lectus faucibus ac sollicitudin feugiat sit. Ac tellus sit commodo duis mi interdum. Eget eget sed phasellus lacus turpis. Auctor congue urna consectetur adipiscing. Sit dui iaculis varius.</p>
                        <p>Lectus faucibus ac sollicitudin feugiat sit. Ac tellus sit commodo duis mi interdum. Eget eget sed phasellus lacus turpis. Auctor congue urna consectetur adipiscing. Sit dui iaculis varius.</p>
                    </div>
                </div>

                <AboutLink to="/about">Saber mais sobre mim</AboutLink>
            </About>

            <Work />

        </div>
    )
}

export default Homepage