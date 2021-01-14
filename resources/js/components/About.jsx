import React, { Component } from "react";
import styled from "styled-components";
import { Row, Title, TitleSection, Line } from "../styled";
import { customColors, dimensions } from "../variables";

const SubTitle = styled(Title)`
    font-size: 2.5em;
`;

const StyledImage = styled.img`
    width: 40%;
    max-width: 1200px;

    @media (max-width: ${dimensions.md}) {
        width: 95%;
    }
`;

const Container = styled.div`
    width: 95%;
    margin: auto;
    display: block;
`;

const Service = styled.div`
    width: 30%;
    text-align: center;
    margin: 30px auto;

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

const ServiceSection = ({ title, description }) => {
    return (
        <Service>
            <h3>{title}</h3>
            <p>{description}</p>
        </Service>
    );
};

class About extends Component {
    render() {
        return (
            <Container>
                <TitleSection
                    title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos incidunt eligendi atque earum tempore error amet at
                enim voluptas. Quia, id. Cupiditate ut obcaecati quod
                repudiandae, perferendis neque nam optio?"
                />

                <Row
                    type="flex"
                    align="center"
                    justify="space-around"
                    style={{ margin: "60px auto" }}
                >
                    <StyledImage src="/about1.jpg" />
                    <StyledImage src="/about2.jpg" />
                </Row>

                <SubTitle style={{ marginBottom: "20px" }}>
                    Serviços disponibilizados
                </SubTitle>
                <Line />
                <Row
                    type="flex"
                    align="center"
                    justify="space-around"
                    width="60%"
                    style={{ margin: "60px auto" }}
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
                </Row>
            </Container>
        );
    }
}

export default About;
