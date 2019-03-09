import React from 'react';

const TemperatureChart = ({
    temperatures
}) => {
    return (
        <div>
            <h2>Temperature</h2>
            <ul>
                {temperatures.map((temperature, i) => (
                    <li key={`${temperature}-${i}`}>{Math.round(temperature)}&#8451;</li>
                ))}
            </ul>
        </div>
    )
}

export default TemperatureChart;