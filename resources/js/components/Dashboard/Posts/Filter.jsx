import React, { Component } from "react";
import styled, { css } from "styled-components";
import { dimensions, customColors } from "../../../variables";
import { Row } from "../../../styled";

const FilterContainer = styled.div`
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

class Filter extends Component {
    render() {
        return (
            <FilterContainer>
                <div>
                    <Input
                        name="search"
                        placeholder="Pesquisa..."
                        type="search"
                    />
                    <Row type="flex" justify="space-between">
                        <Input
                            placeholder="Deste"
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) =>
                                !e.target.value && (e.target.type = "text")
                            }
                            width="50%"
                        />
                        <Input
                            placeholder="Até"
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) =>
                                !e.target.value && (e.target.type = "text")
                            }
                            width="50%"
                        />
                    </Row>
                    <Select required name="client">
                        <option disabled selected value="">
                            Cliente
                        </option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </Select>
                    <Select required name="category">
                        <option disabled selected value="">
                            Categoria
                        </option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </Select>
                    <Select required name="item">
                        <option disabled selected value="">
                            Produto
                        </option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </Select>

                    <Button>Pesquisar</Button>
                </div>
            </FilterContainer>
        );
    }
}

export default Filter;
