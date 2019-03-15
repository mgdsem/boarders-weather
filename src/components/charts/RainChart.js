import React from 'react';

const RainChart = ({
    rains
}) => {
    return (
        <div className="chart__wrapper">
            <h2 className="chart-title chart-title--has-mb">Rain</h2>
            <ul className="list">
                {rains.map((rain, i) => (
                    <li
                        className="list__item chart"
                        key={`${rain.rain}-${i}`}
                    >
                        <div className="chart__speed">
                            {Number(rain.rain || 0).toFixed(4) || 0} mm/3h
                        </div>
                        <div className="chart__hour">{rain.hour}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RainChart;