import { Col, Row } from "antd";
import React, { Component } from "react";
import styled from "styled-components";
import { Title, TitleSection, Line } from "../styled";
import { customColors, dimensions } from "../variables";
import AnimationContainer from "./common/AnimationContainer";

const SubTitle = styled(Title)`
    font-size: 2.5em;
`;

const StyledImage = styled.img`
    width: 40%;
    max-width: 1200px;

    @media (max-width: ${dimensions.md}) {
        width: 95%;
        margin: 20px auto;
    }
`;

const Banner = styled.img`
    width: 100%;
    margin: 80px 0px;

    @media (max-width: ${dimensions.md}) {
        margin: 0px;
    }
`;

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: block;
`;

const Service = styled.div`
    width: 32%;
    text-align: center;
    margin: 30px auto;
    padding: 5px;

    @media (max-width: ${dimensions.md}) {
        width: 50%;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }

    h3 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 1.4em;
        color: ${customColors.black};
    }

    p {
        color: ${customColors.gray};
    }
`;

const ProfileImages = styled.div`
    padding-left: 55px;

    .absolute {
        position: absolute;
        bottom: 0;
        right: 30px;
        width: 50%;
    }

    div {
        position: relative;
        margin-bottom: 100px;

        &:after {
            content: '';
            position: absolute;
            width: 70%;
            height: 100%;
            background: #e6e6e6;
            left: -55px;
            bottom: -55px;
            z-index: -1;
        }

        img { width: 70%;}
    }
`;

const ProfileInfo = styled.div`
    padding-left: 55px;

    h4 {
        font-weight: bold;
        margin-bottom: 22px;
        font-size: 2.8em;
        line-height: 1.2em;
    }

    p {
        color: #777;
        font-size: 1.2em;
    }
`;

const ProfileContainer = styled(Row)`
    margin: 80px auto;
    width: 60%;

    @media (max-width: ${dimensions.md}) {
        width: 95%;
    }
`;

const ServiceSection = ({ title, description }) => {
    return (
        <Service>
            <AnimationContainer animation="fadeInUp">
                <h3>{title}</h3>
                <p>{description}</p>
            </AnimationContainer>
        </Service>
    );
};

class About extends Component {
    render() {
        return (
            <Container>
                <TitleSection
                    title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                />

                <ProfileContainer type="flex"
                    align="center"
                    justify="space-around"
                >
                    <Col md={24} lg={12}>
                        <AnimationContainer animation="fadeIn">
                            <ProfileImages>
                                <div >
                                    <img src="/about5.jpeg" alt="" />
                                </div>
                                <img className="absolute" src="/about4.jpg" alt="" />
                            </ProfileImages>
                        </AnimationContainer>
                    </Col>
                    <Col md={24} lg={12}>
                        <AnimationContainer animation="fadeInRight">
                            <ProfileInfo>

                                <h4>Let’s <br></br> Introduce About <br></br>Myself</h4>
                                <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin</p>
                                <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin appear void give third bearing divide one so</p>
                            </ProfileInfo>
                        </AnimationContainer>
                    </Col>
                </ProfileContainer>


                <Banner src="/about3.jpg" />

                <SubTitle style={{ marginBottom: "20px" }}>
                    Serviços disponibilizados
                </SubTitle>
                <Line />
                <ProfileContainer
                    type="flex"
                    align="center"
                    justify="space-around"
                >

                    <ServiceSection
                        title="Wedding Photography"
                        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                    />
                    <ServiceSection
                        title="Wedding Photography"
                        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                    />
                    <ServiceSection
                        title="Wedding Photography"
                        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                    />
                    <ServiceSection
                        title="Wedding Photography"
                        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                    />
                    <ServiceSection
                        title="Wedding Photography"
                        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                    />
                    <ServiceSection
                        title="Wedding Photography"
                        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                    />
                </ProfileContainer>

                <AnimationContainer animation="fadeInUp">
                    <Row
                        type="flex"
                        align="center"
                        justify="space-around"
                        style={{ margin: "60px auto" }}
                    >
                        <StyledImage src="/about1.jpg" />
                        <StyledImage src="/about2.jpg" />
                    </Row>
                </AnimationContainer>
            </Container >
        );
    }
}

export default About;
