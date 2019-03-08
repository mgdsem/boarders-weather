import React from 'react';

import CardTitle from './CardTitle';

const Card = ({
    currentWeather,
    city
}) => {
    const currentTemperature = currentWeather.main && Math.round(currentWeather.main.temp);
    console.log(currentTemperature);
    return (
        <div>
            <CardTitle currentWeatherTemperature={currentTemperature} city={city} />
        </div>
    );
}

export default Card;