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
    margin-bottom: 60px;

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
    width: 33%;
    text-align: center;
    padding: 20px;
    margin: 20px auto;

    @media (max-width: ${dimensions.md}) {
        width: 50%;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }

    h3 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 24px;
        color: ${customColors.black};
    }

    p {
        font-size: 18px;
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
        color: #616161;
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
                    title="Venha conhecer um pouco mais sobre mim e o meu trabalho"
                />

                <ProfileContainer type="flex"
                    align="center"
                    justify="space-around"
                >
                    <Col md={24} lg={12}>
                        <AnimationContainer animation="fadeIn">
                            <ProfileImages>
                                <div >
                                    <img src="/images/about/about5.jpeg" alt="" />
                                </div>
                                <img className="absolute" src="/images/about/about4.jpg" alt="" />
                            </ProfileImages>
                        </AnimationContainer>
                    </Col>
                    <Col md={24} lg={12}>
                        <AnimationContainer animation="fadeInRight">
                            <ProfileInfo>
                                <h4>Tranformações e decoração com garantia de satisfação</h4>
                                <p>Trabalho desde o processo de escolha de cores, estilos de decoração, materiais e acessórios para criar novos ambientes e espaços.</p>
                                <p>Se está a pensar abrir, revitalizar ou renovar o seu negócio, eu serei o seu melhor aliado para criar um espaço customizado com tudo aquilo que alguma vez sonhou!</p>
                            </ProfileInfo>
                        </AnimationContainer>
                    </Col>
                </ProfileContainer>


                <Banner src="/images/about/about3.jpg" />

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
                        title="Qualidade"
                        description="Poderá contar com um serviço profissional, rápido e excelente a todos os níveis"
                    />
                    <ServiceSection
                        title="Crescimento"
                        description="Atualização permanente no mercado do sector da decoração, com preços competitivos e inovação"
                    />
                    <ServiceSection
                        title="Variedade"
                        description="Uma oferta de produtos de diversos estilos para que possa escolher o que o mais satisfaz"
                    />
                    <ServiceSection
                        title="Experiência"
                        description="Prodissional na área da decoração há mais de 20 anos, com foco na sua satisfação com os produtos"
                    />
                    <ServiceSection
                        title="Atendimento"
                        description="Cada cliente tem direito ao seu atendimento personalizado consoante as suas necessidades de negócio"
                    />
                    <ServiceSection
                        title="Local"
                        description="Trabalho realizado por trabalhadores dedicados e profissionais que conhecem as suas necessidades"
                    />
                </ProfileContainer>

                <AnimationContainer animation="fadeInUp">
                    <Row
                        type="flex"
                        align="center"
                        justify="space-around"
                        style={{ margin: "60px auto" }}
                    >
                        <StyledImage src="/images/about/about1.jpg" />
                        <StyledImage src="/images/about/about2.jpg" />
                    </Row>
                </AnimationContainer>
            </Container >
        );
    }
}

export default About;
