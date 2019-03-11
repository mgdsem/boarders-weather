import React from 'react';

const TemperatureChart = ({
    temperatures
}) => {

    const calculateHeight = (roundedTemp) => {
        if (roundedTemp >= 40) return '50%';
        if (roundedTemp === 0) return '0.5%';

        const percentage = roundedTemp * 50 / 40;
        return `${percentage < 0 ? percentage * -1 : percentage}%`;
    }

    return (
        <div>
            <h2>Temperature</h2>

            <ul style={{ height: '250px' }} className="list">

                {temperatures.map((temperature, i) => {
                    const isMinus = temperature < 0;
                    const roundedTemp = Math.round(temperature);

                    return (
                        <li
                            className="list__item-temp"
                            key={`${temperature}-${i}`}
                        >
                            <div
                                style={{ height: calculateHeight(roundedTemp) }}
                                className={`list__item-bar ${isMinus ? 'list__item-bar--is-minus' : ''}`}
                            >
                                <div className={`list__temp-value ${isMinus ? 'list__temp-value--is-minus' : ''}`}>
                                    {roundedTemp} &#176; C
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TemperatureChart;