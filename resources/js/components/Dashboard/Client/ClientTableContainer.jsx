import React, { useState } from "react";
import styled from "styled-components";
import TableContainer from "../../common/TableContainer";
import { Input } from "antd"

const { Search } = Input;

const Container = styled.div`
    width: 100%;
`;

export default function ClientTableContainer({ loading, data, meta, handlePageChange, onRowClick, setFilters }) {
    const [input, setInput] = useState({ name: undefined, item: undefined });

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
        },
        {
            title: 'Cliente',
            dataIndex: 'name',
            filterDropdown: () => (getFilter("name")),
        },
    ];

    function handleFilterChange(field, value) {
        let newInput = input;
        newInput[field] = value;
        setInput(newInput);
    }

    function getFilter(field) {
        return (
            <div style={{ padding: 8 }}>
                <Search
                    onChange={(e) => handleFilterChange(field, e.target.value)}
                    onSearch={() => setFilters(input)}
                    placeholder="Pesquisa..."
                    allowClear
                    enterButton
                    size="large"
                />
            </div>
        );
    }

    return (
        <Container>
            <TableContainer
                loading={loading}
                data={data}
                columns={columns}
                meta={meta}
                handlePageChange={(aPage) => handlePageChange(aPage)}
                onRowClick={(aPage) => onRowClick(aPage)}
            />
        </Container>
    )
}

