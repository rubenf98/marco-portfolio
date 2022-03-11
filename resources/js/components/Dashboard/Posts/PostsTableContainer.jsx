import React from "react";
import styled from "styled-components";
import Table from "../../common/TableContainer";

const Container = styled.div`
    width: 100%;
`;

const columns = [
    {
        title: '#',
        dataIndex: 'id',
    },
    {
        title: 'Categoria',
        dataIndex: 'category',
        render: (element) => (element.name),
    },
    {
        title: 'Artigo',
        dataIndex: 'item',
    },
    {
        title: 'Cliente',
        dataIndex: 'client',
        render: (element) => (element.name),
    },
    {
        title: 'Data',
        dataIndex: 'date',
    },
];

export default function PostsTableContainer({ loading, data, meta, handlePageChange, onRowClick }) {
    return (
        <Container>
            <Table
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

