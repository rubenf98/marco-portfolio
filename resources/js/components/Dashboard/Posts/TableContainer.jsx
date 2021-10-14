import React from "react";
import styled from "styled-components";
import Table from "../../common/Table";

const PageContainer = styled.div`
    width: 73%;
    
`;

const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Categoria", accessor: "item.category.name" },
    { Header: "Produto", accessor: "item.name" },
    { Header: "Cliente", accessor: "client.name" },
    { Header: "Data", accessor: "date" },
];

export default function TableContainer({ loading, data, meta, setPage }) {
    return (
        <PageContainer>
            {!loading && (
                <Table
                    data={data}
                    columns={columns}
                    meta={meta}
                    onPageChange={(aPage) => setPage(aPage)}
                />
            )}
        </PageContainer>
    )
}

