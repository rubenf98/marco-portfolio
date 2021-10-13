import styled from "styled-components";
import { Link } from "react-router-dom";
import { customColors, dimensions } from "./variables";
import React, { Fragment } from "react";
import { Select, Button, DatePicker } from "antd";

export const TitleSection = ({ title, subtitle }) => {
    return (
        <Fragment>
            <Title style={{ marginBottom: "20px" }}>{title}</Title>
            <Line />
            <Subtitle>{subtitle}</Subtitle>
        </Fragment>
    );
};

export const CustomButton = styled(Button)`
    padding: 10px 14px;
    border: none;
    background: ${customColors.red};
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    width: ${props => props.width ? props.width : "100%"};
    min-height: 50px;

    &:hover, &:active, &:focus {
        background: ${customColors.hRed};
    }

`;

export const CustomDatePicker = styled(DatePicker)`
    width: ${(props) => (props.width ? props.width : "100%")};
    cursor: pointer;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    outline: none;
    border-radius: 0px;


        border: none !important;
        border-bottom: 1px solid #cfcfcf !important;
        box-shadow: 0px !important;
    

    &:focus,
    &:active, &:hover {
     
            border-bottom: 1px solid ${customColors.red} !important;
        
    }
`;

export const CustomSelect = styled(Select)`
    width: ${(props) => (props.width ? props.width : "100%")};
    cursor: pointer;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    outline: none;
    border-radius: 0px;

    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector{
        border: none !important;
        border-bottom: 1px solid #cfcfcf !important;
        box-shadow: 0px !important;
    }

    &:focus,
    &:active, &:hover {
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector{
            border-bottom: 1px solid ${customColors.red} !important;
        }   
    }
`;
export const Line = styled.div`
    width: 5%;
    min-width: 150px;
    background: ${customColors.red};
    height: 5px;
    margin: auto;
    display: block;
`;

const Subtitle = styled.h2`
    width: 50%;
    text-align: center;
    margin: 60px auto;
    display: block;
    font-weight: normal;
    font-size: 1.4em;
    color: ${customColors.gray};

    

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
        font-size: 1.2em;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 90%;
    }
`;

export const Row = styled.div`
    margin: auto;
    display: block;
    width: ${(props) => (props.width ? props.width : "100%")};
    display: ${(props) => props.type};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    width: 40%;
    text-align: center;
    margin: 120px auto;
    display: block;
    font-weight: normal;
    font-size: 3em;
    color: ${customColors.black};

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
        font-size: 2.5em;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 90%;
        font-size: 2em;
    }
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2em;
    display: inline-block;
    padding: 0 10px;
    margin: auto 5px;
    position: relative;
    color: ${(props) => (props.active ? "black" : customColors.gray)};
    cursor: pointer;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    border-bottom: 6px solid white;

    &:hover {
        color: ${customColors.black};
        ::before {
            width: 115%;
        }
    }

    ::before {
        position: absolute;
        margin-left: -5px;
        content: "";
        width: ${(props) => (props.active ? "115%" : 0)};
        height: 8px;
        left: 0;
        bottom: 3px;
        background: ${customColors.tRed};
        z-index: -1;
        transition: 0.3s;
    }
`;
