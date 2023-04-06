import React, { Component } from 'react';
import Home from '../views/Home';
import NotFound from '../views/errors/NotFound';

const routes = {
    'home': (props) => <Home {...props} />,
    'not-found': (props) => <NotFound {...props} />,
    'server-error': (props) => <NotFound {...props} />,
}

export default class Route extends Component {
    constructor(props) {
        super(props);

        console.log(props.route)
    }

    render() {
        return (
            <>
                {
                    routes[this.props.route] ? routes[this.props.route](this.props) : routes['not-found'](this.props)
                }
            </>
        )
    }
}