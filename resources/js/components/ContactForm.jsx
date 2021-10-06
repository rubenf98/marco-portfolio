import React, { useState } from "react";
import FileUploader from "./common/FileUploader";
import { Row } from "../styled";
import styled from "styled-components";
import { dimensions, customColors } from "../variables";
import { createMessage } from "../redux/message/actions";
import { connect } from "react-redux";

const Input = styled.input`
    width: ${(props) => (props.width ? props.width : "100%")};
    box-sizing: border-box;
    margin: 15px 0;
    border: none;
    border-bottom: 2px solid ${customColors.gray};
    padding: 8px;

    &:focus,
    &:active {
        outline: none;
        border: none;
        border-bottom: 2px solid ${customColors.red};
        background-color: white !important;
        appearance: none;
    }

    ::placeholder {
        font-size: 1.2em;
        display: inline-block;
        margin-left: 10px;
    }
`;

const Textarea = styled(Input)`
    resize: none;

    ::-moz-placeholder {
        font-size: 1.4em;
    }
`;

const Button = styled.button`
    padding: 10px 14px;
    border: none;
    background: ${customColors.red};
    color: white;
    cursor: pointer;
    font-size: 1.2em;

    &:hover {
        background: ${customColors.hRed};
    }
`;

const ContactForm = ({ createMessage }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(form).map((field) => {
            formData.append(field[0], field[1]);
        });
        createMessage(formData);
    };

    const handleFormChange = (e) => {
        setForm({ ...form, [e.name]: e.value });
    };

    return (
        <div className="App">
            <form onSubmit={submitForm} style={{ marginBottom: "60px" }}>
                <Input
                    name="name"
                    placeholder="Nome"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleFormChange(e.target)}
                />
                <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleFormChange(e.target)}
                />

                <Input
                    name="subject"
                    placeholder="Assunto"
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleFormChange(e.target)}
                />

                <Textarea
                    name="message"
                    rows="6"
                    as="textarea"
                    placeholder="Mensagem"
                    type="textarea"
                    value={form.message}
                    onChange={(e) => handleFormChange(e.target)}
                />

                {/* <FileUploader
                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                    onFileSelectError={({ error }) => alert(error)}
                /> */}

                <Button>Enviar</Button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (data) => dispatch(createMessage(data)),
    };
};

export default connect(null, mapDispatchToProps)(ContactForm);
