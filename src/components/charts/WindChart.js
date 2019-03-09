import React from 'react';

const WindChart = ({
    winds
}) => {
    return (
        <div>
            <h2>Wind</h2>
            <ul>
                {winds.map((wind, i) => (
                    <li key={`${wind.speed}-${i}`}>{wind.speed}</li>
                ))}
            </ul>
        </div>
    )
}

export default WindChart;