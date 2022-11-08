import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { customColors } from "../../variables";
import { createMessage } from "../../redux/message/actions";
import { connect } from "react-redux";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(720deg);
  }
`;
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
    padding: 14px 26px;
    border: none;
    background: ${props => props.loading ? customColors.hRed : customColors.red};
    color: white;
    cursor: ${props => props.loading ? "wait" : "pointer"};
    font-size: 1.2em;
    float: right;
    transition: all .3s ease;

    &:hover {
        background: ${customColors.hRed};
    }
`;

const Loader = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    border: 2px dashed white;
    animation: ${loading} 10s forwards linear ; 
`;

const FeedbackContainer = styled.div`
    width: 100%;
    
    h2, p {
        text-align: center;
    }

    h2 {
        font-weight: bold;
        font-size: 28px;
    }

    p {
        font-size: 18px;
        margin-bottom: 50px;
    }

    img {
        width: 40%;
        max-width: 150px;
        margin: 0px auto 30px auto;
        display: block;
    }
`;

const ContactForm = ({ createMessage }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        Object.entries(form).map((field) => {
            formData.append(field[0], field[1]);
        });
        createMessage(formData).then(response => {
            if (response.value.status == 201) {
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
                setSuccess(true);
            }
            setLoading(false);

        }).catch((err) => {
            setLoading(false);
        });
    };

    const handleFormChange = (e) => {
        setForm({ ...form, [e.name]: e.value });
    };

    return (
        <div className="App">
            {success ?
                <FeedbackContainer>
                    <img src="/images/contact/check.svg" alt="success message icon" />
                    <h2>Muito Obrigado!</h2>
                    <p>A sua mensagem foi enviada com sucesso.</p>
                </FeedbackContainer> :
                <form onSubmit={submitForm} style={{ marginBottom: "20px" }}>
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

                    <Textarea
                        name="message"
                        rows="5"
                        as="textarea"
                        placeholder="Mensagem"
                        type="textarea"
                        value={form.message}
                        max={180}
                        onChange={(e) => handleFormChange(e.target)}
                    />

                    <Button type='submit' loading={loading}>{loading ? <Loader /> : "Enviar"}</Button>
                </form>
            }

        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (data) => dispatch(createMessage(data)),
    };
};

export default connect(null, mapDispatchToProps)(ContactForm);
