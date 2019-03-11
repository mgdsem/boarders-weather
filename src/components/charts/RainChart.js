import React from 'react';

const RainChart = ({
    rains
}) => {
    return (
        <div>
            <h2>Rain</h2>
            <ul className="list">
                {rains.map((rain, i) => (
                    <li key={`${rain}-${i}`}>{rain || 0} mm/3h</li>
                ))}
            </ul>
        </div>
    )
}

export default RainChart;