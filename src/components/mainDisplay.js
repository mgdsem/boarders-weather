import React, { Component } from 'react';

import { filterDaysWeather } from '../helpers/dates';
import { getWeather } from '../api';

import Input from './Input';
import Button from './Button';
import Card from './Card';

class MainDisplay extends Component {
    constructor(props) {
        super(props)

        this.onCityChange = this.onCityChange.bind(this);
        this.onCityChoose = this.onCityChoose.bind(this);

        this.state = {
            city: '',
            chosenCity: '',
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
                        weather: filterDaysWeather(response.data.list),
                        isError: false,
                        currentWeather: response.data.list[0],
                        chosenCity: this.state.city
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
        return (
            <div>
                <div className="input-and-btn-wrapper">
                    <Input
                        className="input"
                        type="text"
                        id="city"
                        value={this.state.city}
                        placeholder="choose a city"
                        onChange={this.onCityChange}
                        hasError={this.state.isError}
                        errorText="There is no information about choosen city. Pleace choose another city."
                    />

                    <Button onClick={this.onCityChoose} isSmall>Go!</Button>

                </div>

                {this.state.chosenCity && (
                    <Card
                        currentWeather={this.state.currentWeather}
                        city={this.state.chosenCity}
                        futureWeather={this.state.weather}
                    />
                )}
            </div>
        )
    }
}

export default MainDisplay;