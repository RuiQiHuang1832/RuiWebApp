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
