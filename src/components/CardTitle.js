import React from 'react';

const CardTitle = ({
    currentWeatherTemperature,
    city
}) => {

    return (
        <div>
            {city && currentWeatherTemperature && (
                <p>{`${city.charAt(0).toUpperCase() + city.slice(1)}: ${currentWeatherTemperature}`}&#8451; </p>
            )}
        </div>
    )
}

export default CardTitle;