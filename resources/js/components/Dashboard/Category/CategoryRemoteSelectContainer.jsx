import React, { Component } from "react";
import { connect } from "react-redux";
import { Select, Cascader } from "antd";
import { fetchSelector } from "../../../redux/category/actions";
import styled, { css } from "styled-components";
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
        const { data, loading, onChange, mode, value } = this.props;
        return (
            <CustomSelect
                showSearch
                value={value}
                onChange={onChange}
                onSearch={this.onSearch}
                loading={loading}
                placeholder="Categorias"
                mode={mode}
                size="large"
                allowClear
            >
                {data.map((d) => (
                    <Option value={d.id} key={d.id}>
                        {d.name}
                    </Option>
                ))}
            </CustomSelect>

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
