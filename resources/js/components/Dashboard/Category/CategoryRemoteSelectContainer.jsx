import React, { Component } from "react";
import { connect } from "react-redux";
import { Select, Divider, Input } from "antd";
import { fetchSelector } from "../../../redux/category/actions";
import styled, { css } from "styled-components";
import { dimensions, customColors } from "../../../variables";
import { CustomSelect } from "../../../styled";

const Option = Select.Option;


const AddButton = styled.img`
    width: 15px;
    margin: 8px;
    cursor: pointer;
`;


class CategoryRemoteSelectContainer extends Component {
    state = {
        newItem: undefined
    }

    onSearch = (search) => {
        this.props.fetchSelector({ search: search });
    };

    componentDidMount() {
        this.props.fetchSelector();
    }

    onNameChange = event => {
        this.setState({
            newItem: event.target.value,
        });
    };

    addItem = () => {
        console.log('addItem');
        const { items, name } = this.state;
        this.setState({
            items: [...items, name || `New item ${index++}`],
            name: '',
        });
    };

    render() {
        const { data, loading, value, onChange, mode } = this.props;
        return (
            <CustomSelect
                showSearch
                value={value}
                onChange={onChange}
                onSearch={this.onSearch}
                loading={loading}
                placeholder="Categorias"
                mode={mode}
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                            <Input
                                value={this.state.newItem}
                                onChange={this.onNameChange}
                                placeholder="Adicionar nova categoria"
                            />

                            <AddButton onClick={this.addItem} src="/icon/add.svg" alt="add-button" />
                        </div>
                    </div>
                )}
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
