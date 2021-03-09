import { useTable } from "react-table";
import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    display: block;
    max-width: 100%;

    table {
        width: 100%;
        border-collapse: collapse;

        th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #e7e7e7;
            color: #313131;
        }

        tr:hover {
            background-color: #f6f6f6;
        }

        td {
            cursor: pointer;
            color: #777;
        }

        th,
        td {
            border: 1px solid #ddd;
            border-left: none;
            border-right: none;
            padding: 16px 12px;
        }
    }
`;

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);

                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Styles>
    );
}

export default Table;
