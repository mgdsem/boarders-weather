import React from 'react';

const TemperatureChart = ({
    temperatures
}) => {

    const calculateHeight = (temperature) => {
        const roundedTemp = Math.round(temperature);
        if (roundedTemp >= 40) return '50%';
        if (roundedTemp === 0) return '0.5%';
        return `${roundedTemp * 50 / 40}%`;
    }

    return (
        <div>
            <h2>Temperature</h2>
            <ul style={{ height: '250px' }} className="list">
                {temperatures.map((temperature, i) => (
                    <li
                        className="list__item-temp"
                        key={`${temperature}-${i}`}
                    >
                        {/* {Math.round(temperature)}&#8451; */}
                        <div
                            style={{ height: calculateHeight(temperature) }}
                            className={`list__item-bar ${temperature < 0 ? 'list__item-bar--is-minus' : ''}`}
                        >
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TemperatureChart;