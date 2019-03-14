import React from 'react';

import arrowIcon from '../../assets/img/arrow.png';

const WindChart = ({
    winds
}) => (
        <div>
            <h2 className="chart-title chart-title--has-mb">Wind</h2>
            <ul className="list">
                {winds.map((wind, i) => (
                    <li className="list__item wind-chart" key={`${wind.speed}-${i}`}>
                        <div className="wind-chart__speed">{wind.speed} m/s</div>
                        <div className="wind-chart__hour">{wind.hour}</div>
                        <img
                            style={{
                                transform: `rotateZ(${Math.round(wind.deg)}deg)`
                            }}
                            className="wind-chart__icon"
                            src={arrowIcon}
                            alt="wind direction"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )


export default WindChart;