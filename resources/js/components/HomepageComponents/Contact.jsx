import React, { Component } from "react";
import styled from "styled-components";
import { maxWidth } from "../../helper";
import { Row, Subtitle, TitleSection } from "../../styled";
import { customColors, dimensions } from "../../variables";
import AnimationContainer from "../common/AnimationContainer";
import ContactForm from "./ContactForm";

const Container = styled.section`
    margin: 100px 0px 200px 0px;
    box-sizing: border-box;
    position: relative;

    @media (max-width: ${maxWidth}) {
        padding: 0px 10px;
        box-sizing: border-box;
    }
`;

const StyledRow = styled(Row)`
    width: 60%;

    @media (max-width: ${dimensions.lg}) {
        width: 80%;
    }
    
    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const ContactContainer = styled.div`
    width: 60%;


    @media (max-width: ${dimensions.lg}) {
        width: 65%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const InfoContainer = styled.div`
    width: 40%;

    @media (max-width: ${dimensions.lg}) {
        width: 25%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    div {
        width: 100%;
        

        @media (max-width: ${dimensions.md}) {
            width: 45%;
        }

        @media (max-width: ${dimensions.sm}) {
            width: 100%;
        }
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

const InfoSection = ({ title, description }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

class Contact extends Component {
    render() {
        return (
            <Container>
                <Subtitle>Pode contatar-me directamente por telefone, através de e-mail ou preencha o formulário abaixo</Subtitle>


                <AnimationContainer animation="fadeInUp">
                    <StyledRow type="flex" justify="space-between" width="60%">

                        <InfoContainer>

                            <InfoSection
                                title="Morada"
                                description="Santa Cruz, Caniço"
                            />
                            <InfoSection
                                title="Telemóvel"
                                description="+351 962 860 429"
                            />
                            <InfoSection
                                larger
                                title="Email"
                                description="marcoabreu31@hotmail.com"
                            />

                            <InfoSection
                                title="Horário"
                                description="Segunda a Sexta das 9h00 às 18h00"
                            />
                        </InfoContainer>

                        <ContactContainer>
                            <ContactForm />
                        </ContactContainer>
                    </StyledRow>
                </AnimationContainer>

            </Container>
        );
    }
}

export default Contact;
