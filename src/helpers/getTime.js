
import date from 'date-and-time'

export const getTime = (timestamp) => {
    return date.format(new Date(timestamp*1000), 'hh:mm A');
}