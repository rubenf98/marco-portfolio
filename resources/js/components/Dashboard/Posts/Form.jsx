import React, { Component } from "react";
import styled, { css } from "styled-components";
import { dimensions, customColors } from "../../../variables";
import { Col, Modal, Row, Upload } from 'antd';
import { getBase64 } from "../../../helper";
import ItemRemoteSelectContainer from "../Item/ItemRemoteSelectContainer";
import CategoryRemoteSelectContainer from "../Category/CategoryRemoteSelectContainer";
import ClientRemoteSelectContainer from "../Client/ClientRemoteSelectContainer";

const Container = styled.div`
    background: white;
    border-radius: 5px;
    width: 100%;
`;
const Dragger = styled(Upload.Dragger)`
    img{
        margin: 20px auto;
    }
`;

const styledInputs = css`
    width: ${(props) => (props.width ? props.width : "100%")};
    box-sizing: border-box;
    margin: 0;
    border: none;
    border: 1px solid #cfcfcf;
    padding: 16px;

    &:focus,
    &:active {
        outline: none;
        border: none;
        border-bottom: 1px solid ${customColors.red};
        background-color: white !important;
        appearance: none;
    }

    ::placeholder {
        display: inline-block;
        margin-left: 10px;
    }
`;

const Input = styled.input`
    ${styledInputs}
`;

const Select = styled.select`
    background-color: white !important;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    outline: none;
    cursor: pointer;

    &:after {
        content: "";
        width: 0.8em;
        height: 0.5em;
        background-color: var(--select-arrow);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }

    &:invalid {
        color: gray;
    }
    option {
        color: black;
    }
    option[value=""][disabled] {
        display: none;
        color: gray;
    }

    ${styledInputs}
`;

const ImageContainer = styled.div`
    margin: 10px;
    padding: 8px;
    width: 120px;
    height: 120px;
    cursor: pointer;
    border-color: #6e6e6e;
    border: ${props => props.active ? "1px solid" : "1px dashed"};

    &:hover{
        border: 1px solid #6e6e6e;

        div{
            filter: brightness(70%);
        }
    }

    div {
        width: 100%;
        height: 100%;
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: ${props => "brightness(" + props.active ? 70 : 100 + "%);"};
    }
`;

class Form extends Component {
    state = {
        files: [],
        visible: false
    };

    handleDrop = (files) => {
        let fileList = this.state.files;
        for (var i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            fileList.push(files[i].name);
        }
        this.setState({ files: fileList });
    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleUpload = (file, fileList) => {
        const { files } = this.state;

        if ((file.type === "image/png" ||
            file.type === "image/jpeg" ||
            file.type === "image/jpg")) {
            getBase64(file, (image) => {
                files.push({ file: file, image: image });
                this.setState({ files });
            })

        }

        if (file.uid === fileList[fileList.length - 1].uid) {
            this.setState({ visible: true });
        }

        return false;
    }

    handleModalClose = () => {
        this.setState({ visible: false, files: [] });
    }

    handleImage = file => {
        getBase64(file, (image) => {
            return image;
        })
    }

    render() {
        const { files } = this.state;
        console.log(files);
        return (
            <Container>
                <div>
                    <Modal
                        width={1000}
                        onCancel={this.handleModalClose}
                        visible={this.state.visible}
                    >
                        <div>
                            <h1>Selecione a imagem de capa ao clicar na sua escolha</h1>
                            <Row type="flex" align="middle">
                                {files.map((element) => (
                                    <ImageContainer key={element.file.uid} background={element.image}>
                                        <div></div>
                                    </ImageContainer>
                                ))}
                            </Row>
                            <h1>Preencha os campos seguintes de acordo com as opcoes, ou crie novas</h1>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <CategoryRemoteSelectContainer />
                                </Col>
                                <Col span={8}>
                                    <ItemRemoteSelectContainer />
                                </Col>
                                <Col span={8}>
                                    <ClientRemoteSelectContainer />
                                </Col>
                            </Row>
                        </div>
                    </Modal>
                    <Dragger
                        directory
                        accept=".jpg,.png,.jpeg"
                        showUploadList={false}
                        beforeUpload={this.handleUpload}
                    >
                        <img src="/icon/upload.svg"></img>
                        <p className="ant-upload-text">Carrega ou arrasta pastas</p>
                        <p className="ant-upload-hint">
                            Suporte para pastas de ficheiros jpg e png.
                        </p>
                    </Dragger>
                </div>
            </Container >
        );
    }
}

export default Form;
