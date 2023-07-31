/* eslint-disable import/prefer-default-export */

// @params: yyyy-mm-dd
// @return: relative string formatted time
export function getRelativeTime(dateString) {
    const now = new Date();
    const inputDate = new Date(dateString);
    const timeDifference = now - inputDate;

    const secondsInYear = 365.25 * 24 * 60 * 60 * 1000;
    const secondsInMonth = 30.44 * 24 * 60 * 60 * 1000;
    const secondsInWeek = 7 * 24 * 60 * 60 * 1000;
    const secondsInDay = 24 * 60 * 60 * 1000;

    const relativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
        numeric: 'always',
        style: 'long',
    });

    if (timeDifference > secondsInYear) {
        const yearsAgo = Math.floor(timeDifference / secondsInYear);
        return relativeTimeFormatter.format(-yearsAgo, 'year');
    } if (timeDifference > secondsInMonth) {
        const monthsAgo = Math.floor(timeDifference / secondsInMonth);
        return relativeTimeFormatter.format(-monthsAgo, 'month');
    } if (timeDifference > secondsInWeek) {
        const weeksAgo = Math.floor(timeDifference / secondsInWeek);
        return relativeTimeFormatter.format(-weeksAgo, 'week');
    } if (timeDifference > secondsInDay) {
        const daysAgo = Math.floor(timeDifference / secondsInDay);
        return relativeTimeFormatter.format(-daysAgo, 'day');
    }
    return 'Less than a day ago';
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// check if user exists
export function containsEntry(arr, idToFind, nameToFind) {
    console.log(nameToFind);
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === Number(idToFind) && arr[i].username === nameToFind) {
            return true;
        }
    }
    return false;
}
