import React from 'react'
import styled from "styled-components";
import { fonts, maxWidth } from '../../helper';
import { Subtitle } from '../../styled';

const Container = styled.section`
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
            Header
            p {
                font-size: 18px;
                font-family: ${fonts.text};
            }
        }
    }
`;

function Info() {
    return (
        <Container>
            <Subtitle>Eget lacus diam, morbi nulla pellentesque molestie sollicitudin est nulla vulputate viverra.</Subtitle>
            <div className="info-container">
                <img src="/images/homepage/about.jpg" alt="about decoration image" />
                <div className="info">
                    <p>Lectus faucibus ac sollicitudin feugiat sit. Ac tellus sit commodo duis mi interdum. Eget eget sed phasellus lacus turpis. Auctor congue urna consectetur adipiscing. Sit dui iaculis varius.</p>
                    <p>Lectus faucibus ac sollicitudin feugiat sit. Ac tellus sit commodo duis mi interdum. Eget eget sed phasellus lacus turpis. Auctor congue urna consectetur adipiscing. Sit dui iaculis varius.</p>
                </div>
            </div>
        </Container>
    )
}

export default Info