import React, { Component } from "react";
import { connect } from "react-redux";
import { Select, Divider, Input } from "antd";
import { fetchSelector } from "../../../redux/item/actions";
import styled, { css } from "styled-components";
import { dimensions, customColors } from "../../../variables";
import { CustomSelect } from "../../../styled";

const Option = Select.Option;


const AddButton = styled.img`
    width: 15px;
    margin: 8px;
    cursor: pointer;
`;


class Item extends Component {
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
                placeholder="Produtos"
                mode={mode}
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                            <Input
                                value={this.state.newItem}
                                onChange={this.onNameChange}
                                placeholder="Adicionar novo produto"
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
        data: state.item.selector,
        loading: state.item.loading,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);
