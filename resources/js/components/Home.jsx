import Modal from "./common/Modal";
import GalleryModal from "./GalleryModal";
import React, { Component } from "react";
import styled from "styled-components";
import { Row, CustomLink, Title } from "../styled";
import { dimensions } from "../variables";

const FilterList = styled.ul`
    text-align: center;
    margin: 0 auto 3% auto;
    display: block;
    padding: 0;

    li {
        display: inline-block;
        :last-child {
            div::after {
                content: "";
            }
        }
    }
`;

const LinkWithSeparator = styled(CustomLink)`
    margin: 0 20px;
    text-transform: uppercase;
    font-size: 1em;

    ::before {
        height: 6px;
        bottom: 1px;
    }

    ::after {
        position: absolute;
        content: "•";
        color: #b7b7b7;
        right: -25px;
    }
    :last-child {
        content: "";
    }
`;

const Col = styled.div`
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    box-sizing: border-box;
    padding: 0 6px;

    @media (max-width: ${dimensions.lg}) {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }

    @media (max-width: ${dimensions.sm}) {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
        padding: 0 3px;
    }

    img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            filter: brightness(50%);
        }
    }
`;

const ImageContainer = styled.div`
    margin-top: 8px;
    position: relative;
    width: 100%;
    vertical-align: middle;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        .overlay {
            opacity: 0.5;
        }
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0.2s ease;
        background-color: #000000;
    }

    .category,
    .product {
        color: white;
        text-transform: uppercase;
        position: absolute;
        text-align: center;
        left: 10px;
    }
    .category {
        font-size: 1em;
        bottom: 55px;
        font-weight: 200;
    }
    .product {
        font-size: 1.6em;
        bottom: 25px;
        font-weight: 500;
    }

    img {
        margin-top: 8px;
        display: block;
        width: 100%;
        height: auto;

        transition: 0.2s;

        &:hover {
            filter: brightness(50%);
        }
    }
`;

class Home extends Component {
    state = {
        active: 0,
        visible: false,
    };

    handleFilterClick = (e) => {
        this.setState({ active: parseInt(e.target.id) });
    };

    handleModalClose = () => {
        this.setState({ visible: false });
    };
    handleModalOpen = () => {
        this.setState({ visible: true });
    };

    render() {
        console.log(this.state.visible);
        const ImageSection = ({ url }) => {
            return (
                <ImageContainer
                    className="container"
                    onClick={this.handleModalOpen}
                >
                    <img src={url} />
                    <div className="overlay">
                        <div className="category">CORTINADOS</div>
                        <div className="product">Cortinas romanas</div>
                    </div>
                </ImageContainer>
            );
        };
        const url =
            "https://scontent.ffnc1-1.fna.fbcdn.net/v/t31.0-8/19055700_1694675440838712_7343062838530535246_o.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeHxCGNYBdWm8sKkSMxY6N9m2c6sXa6qHmrZzqxdrqoeauhK3psh_L4RaymIbVvUPpI&_nc_ohc=IHOArQymnsoAX_A2JE6&_nc_ht=scontent.ffnc1-1.fna&oh=d737344cd5cd85ed387ebf778e31868d&oe=60245A7B";
        const banco =
            "https://scontent.ffnc1-1.fna.fbcdn.net/v/t1.0-9/97181186_2320266701612913_1028492728628936704_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEZNJcdQSKC5TDUMuQpZ9L-kxiQ9pcam1eTGJD2lxqbV8UVbCYLWS_bGP7M6y6EC04&_nc_ohc=cik1JtjR3eEAX8akyD1&_nc_ht=scontent.ffnc1-1.fna&oh=8a1142aa3f6374907cbf0346a44f329b&oe=60264377";
        const sofa =
            "https://ireland.apollo.olxcdn.com/v1/files/zjy4jsplqma12-PT/image;s=1000x700";
        const sofa2 =
            "https://scontent.ffnc1-1.fna.fbcdn.net/v/t1.0-0/p180x540/100827474_2332859940353589_4516845499784888320_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeERus85KUPHZ-KKk2Ka-zxjQlfydTsQpkVCV_J1OxCmRdMGQgP-qf_us5iMy30CnF4&_nc_ohc=k9RcIlaLWNsAX82x7Hg&_nc_ht=scontent.ffnc1-1.fna&tp=6&oh=4afba5e57a6583b4aadb29f085c0ed40&oe=6022F40D";

        const filters = ["todos", "cortinados", "estores", "sofás", "outros"];
        return (
            <div>
                <Title>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Title>
                <FilterList>
                    {filters.map((filter, index) => (
                        <li key={index}>
                            <LinkWithSeparator
                                onClick={this.handleFilterClick}
                                as="div"
                                id={index}
                                active={this.state.active == index && true}
                            >
                                {filter}
                            </LinkWithSeparator>
                        </li>
                    ))}
                </FilterList>

                <Modal visible={this.state.visible}>
                    <GalleryModal handleClose={this.handleModalClose} />
                </Modal>
                <Row type="flex">
                    <Col>
                        <ImageSection url={url} />
                        <ImageSection url={banco} />
                        <ImageSection url={sofa2} />
                        <ImageSection url={url} />
                        <ImageSection url={sofa} />
                        <ImageSection url={banco} />
                    </Col>
                    <Col>
                        <ImageSection url={sofa} />
                        <ImageSection url={url} />
                        <ImageSection url={banco} />
                        <ImageSection url={url} />
                        <ImageSection url={sofa} />
                        <ImageSection url={sofa2} />
                    </Col>
                    <Col>
                        <ImageSection url={url} />
                        <ImageSection url={banco} />
                        <ImageSection url={sofa2} />
                        <ImageSection url={url} />
                        <ImageSection url={sofa} />
                        <ImageSection url={banco} />
                    </Col>
                    <Col>
                        <ImageSection url={sofa} />
                        <ImageSection url={url} />
                        <ImageSection url={banco} />
                        <ImageSection url={url} />
                        <ImageSection url={sofa} />
                        <ImageSection url={sofa2} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
