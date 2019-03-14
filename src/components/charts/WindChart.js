import React from 'react';

import arrowIcon from '../../assets/img/arrow.png';

const WindChart = ({
    winds
}) => {
    console.log(winds);
    return (
        <div>
            <h2>Wind</h2>
            <ul className="list">
                {winds.map((wind, i) => {
                    return (
                        <li key={`${wind.speed}-${i}`}>
                            <div>{wind.speed} m/s</div>
                            <div>{wind.hour}</div>
                            <img src={arrowIcon} alt="wind direction" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WindChart;