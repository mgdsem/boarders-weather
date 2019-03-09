import React from 'react';

import CardTitle from './CardTitle';
import WeatherDisplay from './WeatherDisplay';

const Card = ({
    currentWeather,
    city,
    futureWeather
}) => {
    const currentTemperature = currentWeather.main && Math.round(currentWeather.main.temp);
    console.log(currentTemperature);
    return (
        <div>
            <CardTitle currentWeatherTemperature={currentTemperature} city={city} />
            <WeatherDisplay futureWeather={futureWeather} />
        </div>
    );
}

export default Card;