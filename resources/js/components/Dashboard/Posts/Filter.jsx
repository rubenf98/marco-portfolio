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

function Filter({ setFilters }) {

    function onFinish(filters) {
        if (filters.date) {
            filters.date[0] = moment(filters.date[0]).format("YYYY-MM-DD");
            filters.date[1] = moment(filters.date[1]).format("YYYY-MM-DD");
        }
        setFilters(filters);
    };

    return (
        <FilterContainer >
            <Form onFinish={onFinish}>
                <FormItem name="date">
                    <CustomRangePicker size="large" picker="month" />
                </FormItem>
                <FormItem name="client">
                    <ClientRemoteSelectContainer />
                </FormItem>
                <FormItem name="category">
                    <CategoryRemoteSelectContainer />
                </FormItem>
                <FormItem name="item">
                    <ItemRemoteSelectContainer />
                </FormItem>

                <CustomButton type="primary" htmlType="submit">Pesquisar</CustomButton>
            </Form>
        </FilterContainer>
    )
}

export default Filter;
