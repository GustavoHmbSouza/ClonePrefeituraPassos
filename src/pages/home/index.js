import React, { Component } from 'react';
import api from '../../services/api';

import Html from './html';

export default class planejamento extends Component {
    state = {
        dados: [],
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
            const { dados } = this.state;

            return <Html dados={dados} />;
        }
        return <></>;
    }
}
