export function formatDistanceToNow(date) {
    // Check if date is valid or not
    if (!date || !(date instanceof Date) || isNaN(date)) {
        return 'Date is unknown';
    }

    const now = new Date();
    const secondsDiff = Math.floor((now - date) / 1000);

    if (secondsDiff < 30) {
        return 'less than a minute';
    } else if (secondsDiff < 90) {
        return '1 minute';
    } else if (secondsDiff < 2700) { // 45 minutes in seconds
        const minutes = Math.floor(secondsDiff / 60);
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (secondsDiff < 5400) { // 90 minutes in seconds
        return 'about 1 hour';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

