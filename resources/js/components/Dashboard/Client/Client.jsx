import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchClients } from "../../../redux/client/actions";
import TableContainer from "./ClientTableContainer";

const ContentContainer = styled.div`
    width: 60%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;
`;

class Client extends Component {
    state = {
        filters: {},
        page: 1,
    }

    componentDidMount() {
        this.props.fetchClients();
    }

    setFilters = (aFilters) => {
        console.log(aFilters)
        var { filters } = this.state;
        filters = { ...filters, ...aFilters };
        console.log(filters)
        this.setState({ filters });

        this.props.fetchClients(1, filters);
    }

    setPage = (aPage) => {
        var { filters } = this.state;
        this.setState({ page: aPage });

        this.props.fetchClients(aPage, filters);
    }

    onRowClick = (aRecord) => {
        this.props.fetchPost(aRecord);
    }

    render() {
        var { data, loading, meta, current } = this.props;

        return (
            <Container>
                <ContentContainer>
                    <TableContainer
                        setFilters={this.setFilters}
                        onRowClick={this.onRowClick}
                        setPage={this.setPage}
                        data={data}
                        loading={loading}
                        meta={meta}
                        filters={this.state.filters}
                    />
                </ContentContainer>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: (page, filters) => dispatch(fetchClients(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.client.loading,
        data: state.client.data,
        meta: state.client.meta,
        current: state.client.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);
