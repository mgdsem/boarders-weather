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

    const calculateColor = (roundedTemp) => {
        if (roundedTemp >= 25) return '#ff1111';
        if (roundedTemp >= 15) return '#ffeb11';
        if (roundedTemp >= 0) return '#2ea521';
        return '#27e5db';
    }

    return (
        <div>
            <h2 className="chart-title">Temperature</h2>

            <ul style={{ height: '250px' }} className="list temp-chart">

                {temperatures.map((temperature, i) => {
                    const isMinus = temperature.temp < 0;
                    const roundedTemp = Math.round(temperature.temp);

                    return (
                        <li
                            className="list__item"
                            key={`${temperature}-${i}`}
                        >
                            <div
                                style={{
                                    height: calculateHeight(roundedTemp),
                                    backgroundColor: calculateColor(roundedTemp)
                                }}
                                className={`temp-chart__item-bar ${isMinus ? 'temp-chart__item-bar--is-minus' : ''}`}
                            >
                                <div className={`temp-chart__temp-value ${isMinus ? 'temp-chart__temp-value--is-minus' : ''}`}>
                                    {roundedTemp} &#176; C
                                </div>
                            </div>

                            <div className="temp-chart__hour-value">
                                {temperature.hour}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TemperatureChart;