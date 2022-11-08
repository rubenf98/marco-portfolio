import React from 'react'
import styled from "styled-components";
import { fonts, maxWidth } from '../../helper';
import { Subtitle } from '../../styled';
import { dimensions } from '../../variables';

const Container = styled.section`
    width: 100%;
    margin: 200px auto;
    display: block;
    max-width: ${maxWidth};

    @media (max-width: ${maxWidth}) {
        padding: 0px 10px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        margin: 100px auto;
    }

    .info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        img {
            margin-top: 50px;
            width: 40%;

            @media (max-width: ${dimensions.md}) {
                width: 100%;
                margin-top: 20px;
            }
        }

        .info {
            margin-top: 50px;
            width: 60%;
            padding: 0px 40px;
            box-sizing: border-box;
            
            p {
                font-size: 18px;
                font-family: ${fonts.text};
                opacity: .9;
            }

            @media (max-width: ${dimensions.md}) {
                width: 100%;
                padding: 0px;

                p {
                    font-size: 16px;
                }
            }
        }
    }
`;

function Info() {
    return (
        <Container>
            <Subtitle>O meu trabalho une estética, ergonomia, conforto, custo e originalidade.</Subtitle>
            <div className="info-container">
                <img src="/images/homepage/about.jpg" alt="about decoration image" />
                <div className="info">
                    <p>Através dos meus mais de 20 anos de experiência profissional, possibilito um toque cultural essencial para qualquer trabalho. Um toque de ousadia é sempre bem-vinda.</p>
                    <p>Quer opte por uma peça totalmente original ou queira dar uma nova vida ao que já tem em sua casa, os meus artigos irão se tornar o destaque na conversa dos seus convidados!</p>
                </div>
            </div>
        </Container>
    )
}

export default Info