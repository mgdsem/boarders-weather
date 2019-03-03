import React, { Component } from 'react';

import { getWeather } from '../api';

class MainDisplay extends Component {

    componentDidMount() {
        getWeather('jastarnia').then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>placeholder</div>
        )
    }
}

export default MainDisplay;