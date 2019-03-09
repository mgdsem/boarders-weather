import React from 'react';

const RainChart = ({
    rains
}) => {
    return (
        <div>
            <h2>Rain</h2>
            <ul>
                {rains.map((rain, i) => (
                    <li key={`${rain}-${i}`}>{rain || 0}</li>
                ))}
            </ul>
        </div>
    )
}

export default RainChart;