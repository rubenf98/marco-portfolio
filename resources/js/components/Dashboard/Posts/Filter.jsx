import React from "react";
import styled from "styled-components";
import { CustomButton, CustomRangePicker } from "../../../styled"
import { Form } from "antd";
import ClientRemoteSelectContainer from "../Client/ClientRemoteSelectContainer";
import CategoryRemoteSelectContainer from "../Category/CategoryRemoteSelectContainer";
import ItemRemoteSelectContainer from "../Item/ItemRemoteSelectContainer";
import moment from 'moment';

const FilterContainer = styled.div`
    background: white;
    border-radius: 5px;
    width: 100%;
    margin-top: 30px;
`;

const FormItem = styled(Form.Item)`
    margin-bottom: 0px;

`;

const CustomForm = styled(Form)`
    border: 1px solid #dddddd;
    border-bottom: none;
`;

function Filter({ setFilters }) {

    function onFinish(filters) {
        console.log(filters);
        if (filters.date) {
            filters.date[0] = moment(filters.date[0]).format("YYYY-MM-DD");
            filters.date[1] = moment(filters.date[1]).format("YYYY-MM-DD");
        }
        setFilters(filters);
    };

    return (
        <FilterContainer >
            <CustomForm onFinish={onFinish}>
                <FormItem name="date">
                    <CustomRangePicker size="large" picker="month" />
                </FormItem>
                <FormItem name="client">
                    <ClientRemoteSelectContainer />
                </FormItem>
                <FormItem name="item">
                    <CategoryRemoteSelectContainer />
                </FormItem>

                <CustomButton type="primary" htmlType="submit">Pesquisar</CustomButton>
            </CustomForm>
        </FilterContainer>
    )
}

export default Filter;
