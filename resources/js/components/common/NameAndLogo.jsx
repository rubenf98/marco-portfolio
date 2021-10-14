import React from "react";
import styled from "styled-components";
import { Row } from "../../styled";
import { dimensions, customColors } from "../../variables";

const Name = styled.h1`
    color: ${customColors.black};
    font-weight: normal;
    font-size: 1.6em;

    @media (max-width: ${dimensions.sm}) {
        font-size: 1.2em;
    }
`;

const Container = styled(Row)`
    width: 100%;

    a {
        text-decoration: none;
    }

    img {
        height: 26px;
        margin-right: 5px;
        margin-bottom: 5px;

        @media (max-width: ${dimensions.sm}) {
            height: 20px;
        }
    }
`;

const NameAndLogo = ({ logo }) => {
    return (
        <Container>
            <Row className="logo-container" type="flex" align="center">
                {!logo && <img src="/logo.png" alt="logo" />}
                <Name>Marco Abreu</Name>
            </Row>
        </Container>
    );
};

export default NameAndLogo;
