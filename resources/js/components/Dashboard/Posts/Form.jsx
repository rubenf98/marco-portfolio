import React, { Component } from "react";
import styled, { css } from "styled-components";
import { dimensions, customColors } from "../../../variables";
import { Row } from "../../../styled";
import DragAndDrop from "../../common/DragAndDrop";

const Container = styled.div`
    background: white;
    border-radius: 5px;
    width: 100%;
    margin-top: 30px;
`;
const Button = styled.button`
    padding: 10px 14px;
    border: none;
    background: ${customColors.red};
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    width: 100%;

    &:hover {
        background: ${customColors.hRed};
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

class Form extends Component {
    state = {
        files: [
            "nice.pdf",
            "verycool.jpg",
            "amazing.png",
            "goodstuff.mp3",
            "thankyou.doc",
        ],
    };

    handleDrop = (files) => {
        let fileList = this.state.files;
        for (var i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            fileList.push(files[i].name);
        }
        this.setState({ files: fileList });
    };

    render() {
        return (
            <Container>
                <div>
                    <DragAndDrop handleDrop={this.handleDrop}>
                        <div style={{ height: 300, width: 250 }}>
                            {this.state.files.map((file, i) => (
                                <div key={i}>{file}</div>
                            ))}
                        </div>
                    </DragAndDrop>

                    <Button>Criar</Button>
                </div>
            </Container>
        );
    }
}

export default Form;
