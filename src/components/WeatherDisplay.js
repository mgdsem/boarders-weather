import React, { Component } from 'react';
import moment from 'moment';

import TemperatureChart from './charts/TemperatureChart';
import WindChart from './charts/WindChart';
import RainChart from './charts/RainChart';
import Button from './Button';

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);

        this.setChart = this.setChart.bind(this);

        this.state = {
            currentChart: 'temperature'
        }
    }

    setChart(chartName) {
        this.setState({
            currentChart: chartName
        })
    }

    render() {
        const { futureWeather } = this.props;
        console.log(futureWeather);
        const temperatures = futureWeather.map((hourPred) => ({
            temp: hourPred.main.temp,
            hour: moment(hourPred.dt * 1000).format('HH:mm')
        }));

        const winds = futureWeather.map((hourPred) => hourPred.wind);

        const rains = futureWeather.map((hourPred) => ({
            rain: hourPred.rain && hourPred.rain['3h'],
            hour: moment(hourPred.dt * 1000).format('HH:mm')
        }));

        // const hours = futureWeather.map((hourPred) => moment(hourPred.dt * 1000).format('HH:mm'))

        const { currentChart } = this.state;

        return (
            <div className="card__inner-wrapper">
                <div className="card__charts-wrapper">
                    {currentChart === 'temperature' && (
                        <TemperatureChart temperatures={temperatures} />
                    )}

                    {currentChart === 'wind' && (
                        <WindChart winds={winds} />
                    )}

                    {currentChart === 'rain' && (
                        <RainChart rains={rains} />
                    )}
                </div>

                <div className="card__buttons-wrapper">
                    <Button onClick={() => this.setChart('temperature')}>Temperature</Button>
                    <Button onClick={() => this.setChart('wind')}>Wind</Button>
                    <Button onClick={() => this.setChart('rain')}>Rain</Button>
                </div>
            </div>
        )
    }
}

export default WeatherDisplay;