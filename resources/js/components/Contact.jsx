import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Row, TitleSection } from "../styled";
import { customColors, dimensions } from "../variables";
import ContactForm from "./ContactForm";

const StyledRow = styled(Row)`
    width: 60%;
    @media (max-width: ${dimensions.md}) {
        width: 90%;
    }
`;

const ContactContainer = styled.div`
    width: 55%;

    @media (max-width: ${dimensions.lg}) {
        width: 65%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 96%;
        display: block;
        margin: auto;
    }
`;

const InfoContainer = styled(ContactContainer)`
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
        width: 48%;
        min-width: 150px;
        @media (max-width: ${dimensions.sm}) {
            width: 20%;
        }
    }

    .larger-input {
        @media (max-width: ${dimensions.sm}) {
            width: 60%;
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
        <div className={larger && "larger-input"}>
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
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos incidunt eligendi atque earum tempore error amet at
                enim voluptas. Quia, id. Cupiditate ut obcaecati quod
                repudiandae, perferendis neque nam optio?"
                />
                <StyledRow type="flex" justify="space-between" width="60%">
                    <ContactContainer>
                        <ContactForm />
                    </ContactContainer>
                    <InfoContainer>
                        <InfoSection
                            larger
                            title="Morada"
                            description={
                                <Fragment>
                                    <span>Caminho do (qualquer coisa) 32,</span>
                                    <span>Madeira, Camacha</span>
                                </Fragment>
                            }
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
                </StyledRow>
            </div>
        );
    }
}

export default Contact;
