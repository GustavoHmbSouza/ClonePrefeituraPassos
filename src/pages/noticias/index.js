import React, { Component } from 'react';

import Html from './html';

export default class noticias extends Component {
    state = {
        loading: false,
    };

    async componentDidMount() {
        this.setState({
            loading: true,
        });
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return <Html />;
        }
        return <></>;
    }
}
