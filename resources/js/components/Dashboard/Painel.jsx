import { Row, Col } from "antd";
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import { dimensions } from "../../variables";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background: rgb(245, 245, 245);
    flex: 1;

`;

const CardContent = styled.div`
    background: white;
    width: 100%;
    padding: 20px;
    text-align: center;
    min-width: 200px;
    margin: 50px 0;
    border-radius: 6px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    transition: .3s ease-in-out;

    @media (max-width: ${dimensions.sm}){
        margin: 10px 0;
    }

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
    }

    img {
        width: 80%;
        margin: auto;
        display: block;
    }

    p {
        font-weight: bold;
        margin: 15px auto;
        font-size: 1.2em;
        color: #222222;
    }
`;

const Content = styled(Row)`
    margin: auto;
    width: 100%;
`;

const SubContainer = styled.div`
    max-width: 1140px;
    width: 90%;
    margin: auto;

    h1 {
        text-align:center;
        font-size: 2em;
        text-align: center;
        padding: 50px 0;
    }
`;

const Footer = styled.div`
    margin-top: 100px;
    img {
        width: 120px;
        margin: auto;
        display: block;
    }

    p {
        text-align: center;
        margin: 20px auto;
    }

`;


const CardContainer = ({ img, text, to }) => (
    <CardContent>
        <Link to={to}>
            <img src={img} alt="iPhone icon" />
            <p className="card-text">{text}</p>
        </Link>
    </CardContent>
);

class Painel extends Component {
    render() {
        return (
            <Container>
                <SubContainer>
                    <h1> Bem vindo de volta ao painel de controlo</h1>
                    <Content type="flex" align="middle" justify="space-around">
                        <Col md={7} sm={24}>
                            <CardContainer
                                img="/icon/posts.svg"
                                text="Listagem de trabalhos realizados"
                                to="/painel/posts"
                            />
                        </Col>
                        <Col md={7} sm={24}>
                            <CardContainer
                                img="/icon/products.svg"
                                text="Categorias & Produtos no website"
                                to="/painel/categorias"
                            />
                        </Col>
                        <Col md={7} sm={24}>
                            <CardContainer
                                img="/icon/clients.svg"
                                text="Clientes com quem tem trabalhado"
                                to="/painel/clientes"
                            />
                        </Col>
                    </Content>
                    <Footer>
                        <img src="/logo.svg" alt="logo" />
                        <p>© {moment().year()} Marco Abreu. All Rights Reserved.</p>
                    </Footer>
                </SubContainer>
            </Container>
        );
    }
}

export default Painel;
