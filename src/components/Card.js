import React from 'react';

import CardTitle from './CardTitle';
import WeatherDisplay from './WeatherDisplay';

const Card = ({
    currentWeather,
    city,
    futureWeather
}) => {
    const currentTemperature = currentWeather.main && Math.round(currentWeather.main.temp);

    return (
        <div className="card">
            <CardTitle currentWeatherTemperature={currentTemperature} city={city} />
            <WeatherDisplay futureWeather={futureWeather} />
        </div>
    );
}

export default Card;