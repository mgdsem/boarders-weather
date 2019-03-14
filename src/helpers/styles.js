export const calculateHeight = (roundedTemp) => {
    if (roundedTemp >= 40) return '50%';
    if (roundedTemp === 0) return '0.5%';

    const percentage = roundedTemp * 50 / 40;
    return `${percentage < 0 ? percentage * -1 : percentage}%`;
}

export const calculateColor = (roundedTemp) => {
    if (roundedTemp >= 25) return '#ff1111';
    if (roundedTemp >= 15) return '#ffeb11';
    if (roundedTemp >= 0) return '#2ea521';
    return '#27e5db';
}