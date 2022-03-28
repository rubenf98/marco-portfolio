import React from "react";
import styled from "styled-components";
import Table from "../../common/TableContainer";
import { deletePost } from "../../../redux/post/actions"
import { connect } from "react-redux";
import { Popconfirm } from "antd";

const Container = styled.div`
    width: 100%;
`;

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
    margin: auto;
    display: block;
    object-fit: cover;
`;

const Action = styled.span`
    cursor: pointer;
    font-weight: bold;
    color: #353535;

    &:hover {
        color: #000;
    }
`;


function PostsTableContainer({ loading, data, meta, handlePageChange, onRowClick, deletePost }) {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '',
            dataIndex: 'cover',
            render: (element, row) => (<Avatar src={"/images" + element.url} alt={row.item} />),
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
        {
            title: "Actions",
            key: "",
            render: (text, row) => (
                <>
                    <Popconfirm
                        title="Tem a certeza que pretende apagar esta entrada?"
                        onConfirm={() => deletePost(row.id)}
                        okText="Sim"
                        cancelText="Não"
                    >
                        <Action>Delete</Action>
                    </Popconfirm>

                </>
            ),
        },
    ];

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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(PostsTableContainer);