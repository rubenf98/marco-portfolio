import React, { Component } from "react";
import { connect } from "react-redux";
import { Select, Cascader } from "antd";
import { fetchSelector } from "../../../redux/category/actions";
import styled, { css } from "styled-components";
import debounce from "lodash/debounce";
import { CustomSelect } from "../../../styled";

const Option = Select.Option;


const AddButton = styled.img`
    width: 15px;
    margin: 8px;
    cursor: pointer;
`;


class CategoryRemoteSelectContainer extends Component {
    componentDidMount() {
        this.props.fetchSelector();
    }

    render() {
        const { data, loading, onChange, mode } = this.props;
        return (
            <Cascader
                size="large"
                expandTrigger="hover"
                fieldNames={{ label: "name", value: 'id', children: 'items' }}
                options={data}
                placeholder="Produto"
                allowClear
            />

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSelector: () => dispatch(fetchSelector()),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.category.selector,
        loading: state.category.loading,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryRemoteSelectContainer);
