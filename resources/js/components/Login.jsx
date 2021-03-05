import React, { Component } from "react";
import styled from "styled-components";
import { login } from "../redux/auth/actions";
import { customColors } from "../variables";
import { Row } from "../styled";
import { connect } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(255, 33, 33);
    display: flex;
    align-items: center;
    justify-content: center;
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

const FormContainer = styled.div`
    width: 20%;
    max-width: 600px;
    min-width: 120px;
    background: white;
    border-radius: 5px;
    display: block;
    padding: 20px;
`;

const Title = styled.h1`
    text-align: center;
`;

const Button = styled.button`
    margin-top: 50px;
    padding: 10px 14px;
    border: none;
    background: rgb(255, 33, 33);
    color: white;
    cursor: pointer;
    font-size: 1.2em;

    &:hover {
        background: rgb(173, 22, 22);
    }
`;

class Login extends Component {
    state = {
        password: "",
        email: "",
    };

    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(this.state).map((field) => {
            formData.append(field[0], field[1]);
        });

        this.props.login(formData);
    };
    render() {
        return (
            <Container>
                <FormContainer>
                    <Title>Incio de Sessao</Title>
                    <Input
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={this.state.email}
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                    />

                    <Input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                    />
                    <Button onClick={this.submitForm}>Login</Button>
                </FormContainer>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
