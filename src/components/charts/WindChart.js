import React from 'react';

const WindChart = ({
    winds
}) => {
    console.log(winds);
    return (
        <div>
            <h2>Wind</h2>
            <ul className="list">
                {winds.map((wind, i) => (
                    <li key={`${wind.speed}-${i}`}>{wind.speed} m/s</li>
                ))}
            </ul>
        </div>
    )
}

export default WindChart;