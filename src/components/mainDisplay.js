import React, { Component } from 'react';
import moment from 'moment';

import { getWeather } from '../api';
import Input from './Input';
import Button from './Button';

class MainDisplay extends Component {
    constructor(props) {
        super(props)

        this.onCityChange = this.onCityChange.bind(this);
        this.onCityChoose = this.onCityChoose.bind(this);

        this.state = {
            city: '',
            weather: [],
            isError: false,
            currentWeather: {}
        }
    }

    // componentDidMount() {
    //     getCurrentWeather('jastarnia').then((response) => {
    //         console.log(response);
    //     })
    // }

    onCityChange(e) {
        this.setState({
            city: e.target.value
        });
    }

    onCityChoose() {
        if (this.state.city) {
            getWeather(this.state.city)
                .then((response) => {
                    this.setState({
                        weather: response.data.list,
                        isError: false,
                        currentWeather: response.data.list[0]
                    })
                })
                .catch((error) => {
                    this.setState({
                        isError: true
                    })
                })
        }
    }

    render() {
        this.state.weather.forEach((hour) => {
            console.log(moment(hour.dt * 1000).format());
        })

        console.log(this.state);
        return (
            <div>
                <Input type="text" id="city" value={this.state.city} placeholder="choose a city" onChange={this.onCityChange} />
                <Button onClick={this.onCityChoose}>Go!</Button>
                {this.state.isError && (
                    <p>There is no information about choosen city. Pleace choose another city. </p>
                )}
            </div>
        )
    }
}

export default MainDisplay;