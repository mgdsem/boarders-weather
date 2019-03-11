import React from 'react';

const TemperatureChart = ({
    temperatures
}) => {

    const calculateHeight = (temperature) => {
        const roundedTemp = Math.round(temperature);
        if (roundedTemp >= 40) return '50%';
        if (roundedTemp === 0) return '0.5%';

        const percentage = roundedTemp * 50 / 40;
        return `${percentage < 0 ? percentage * -1 : percentage}%`;
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
                        {console.log(temperature, calculateHeight(temperature))}
                        <div
                            style={{ height: calculateHeight(temperature) }}
                            className={`list__item-bar ${temperature < 0 ? 'list__item-bar--is-minus' : ''}`}
                        >
                            <div className={`list__temp-value ${temperature < 0 ? 'list__temp-value--is-minus' : ''}`}>
                                {Math.round(temperature)} &#176; C
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TemperatureChart;