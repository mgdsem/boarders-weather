import moment from "moment";

const format = 'HH:mm:ss';
const morningTime = moment('06:59:59', format);
const eveningTime = moment('19:01:00', format);

export const filterDaysWeather = (hours) => {
    const filteredHours = hours.filter((hour) => {
        const currentHour = moment(hour.dt * 1000).format(format)
        return moment(currentHour, format).isBetween(morningTime, eveningTime);
    });

    return filteredHours.slice(0, 10);
}