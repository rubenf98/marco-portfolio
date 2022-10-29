import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { customColors, dimensions } from "./variables";
import React, { Fragment } from "react";
import { Select, Button, DatePicker, Input } from "antd";
import AnimationContainer from "./components/common/AnimationContainer";
import { fonts, maxWidth } from "./helper";

const { RangePicker } = DatePicker;

export const TitleSection = ({ title }) => {
    return (

        <AnimationContainer animation="fadeInDown">
            <Title>{title}</Title>
        </AnimationContainer>

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

export const CustomRangePicker = styled(RangePicker)`
    width: ${(props) => (props.width ? props.width : "100%")};
    cursor: pointer;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    outline: none;
    border-radius: 0px;
    border: none !important;
    border-bottom: 1px solid #cfcfcf !important;
    box-shadow: none !important;
    

    &:focus,
    &:active, &:hover {
     
            border-bottom: 1px solid ${customColors.red} !important;
        
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
    box-shadow: none !important;
    

    &:focus,
    &:active, &:hover {
     
            border-bottom: 1px solid ${customColors.red} !important;
        
    }
`;

export const CustomSelect = styled(Select)`
    width: ${(props) => (props.width ? props.width : "100%")};
    cursor: pointer !important;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    outline: none;
    border-radius: 0px;
    border-bottom: 1px solid #cfcfcf !important;

    .ant-select-selection-search-input{
        cursor: pointer !important;
    }

    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

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

export const Subtitle = styled.h2`
    font-size: 60px;
    line-height: 70px;
    letter-spacing: -.02em;
    font-family: ${fonts.subtitle};
    max-width: ${maxWidth};
    margin: 50px auto;
    color: ${customColors.black};
    

    @media (max-width: ${dimensions.lg}) {
        font-size: 50px;
        line-height: 60px;
    }

    @media (max-width: ${dimensions.sm}) {
        font-size: 36px;
        line-height: 42px;
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
    font-size: 60px;
    line-height: 70px;
    letter-spacing: -.02em;
    font-family: ${fonts.subtitle};
    max-width: ${maxWidth};
    margin: 15vh auto 100px auto;
    color: ${customColors.black};

    @media (max-width: ${dimensions.lg}) {
        font-size: 2.5em;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 90%;
        font-size: 2em;
    }
`;

export const CustomInput = styled(Input)`
    width: ${(props) => (props.width ? props.width : "100%")};
    margin: 0;
    border: none;
    border-bottom: 1px solid #cfcfcf;

    &:focus,
    &:active, &:hover {
        outline: none;
        border: none !important;
        border-bottom: 1px solid ${customColors.red} !important;
        background-color: white !important;
        appearance: none;
        box-shadow: none;
    }

`;

export const CustomLink = styled(NavLink)`
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
    padding: 0 10px;
    margin: auto 5px;
    position: relative;
    color: ${(props) => (props.active ? "black" : customColors.gray)};
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -moz-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;;
    transition: color 0.3s ease;
    border-bottom: 6px solid white;

    &:hover {
        color: ${customColors.black};
    }

    .link--active{
        color: ${customColors.black};
    }
`;
