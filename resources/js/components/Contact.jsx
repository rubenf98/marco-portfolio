import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Row, TitleSection } from "../styled";
import { customColors, dimensions } from "../variables";
import AnimationContainer from "./common/AnimationContainer";
import NameAndLogo from "./common/NameAndLogo";
import ContactForm from "./ContactForm";

const StyledRow = styled(Row)`
    width: 60%;
    @media (max-width: ${dimensions.md}) {
        width: 90%;
    }
`;

const ContactContainer = styled.div`
    width: 60%;


    @media (max-width: ${dimensions.lg}) {
        width: 65%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 96%;
        display: block;
        margin: auto;
    }
`;

const InfoContainer = styled.div`
    width: 40%;

    @media (max-width: ${dimensions.lg}) {
        width: 25%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 96%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    div {
        width: 100%;
        min-width: 150px;
        @media (max-width: ${dimensions.sm}) {
            width: 20%;
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

const InfoSection = ({ title, description, larger }) => {
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
            <div>
                <TitleSection
                    title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                />

                <AnimationContainer animation="fadeInUp">
                    <StyledRow type="flex" justify="space-between" width="60%">

                        <InfoContainer>
                            <br />
                            <NameAndLogo />
                            <br />
                            <InfoSection
                                title="Morada"
                                description="Caminho do (qualquer coisa) 32, Madeira, Camacha"
                            />
                            <InfoSection
                                title="Telemóvel"
                                description="962 860 429"
                            />
                            <InfoSection
                                larger
                                title="Email"
                                description="marcoabreu31@hotmail.com"
                            />

                            <InfoSection
                                title="Horário"
                                description="9h00 - 18h00"
                            />
                        </InfoContainer>

                        <ContactContainer>
                            <ContactForm />
                        </ContactContainer>
                    </StyledRow>
                </AnimationContainer>

            </div>
        );
    }
}

export default Contact;
