function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

const getMonthName = monthNumber => {
    const all_months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return String(all_months[monthNumber])
}

const getFormattedDate = date => {
    return ordinal_suffix_of(date)
}

export const formatDate = date => {
    const date_obj = new Date(date)
    return `${getFormattedDate(date_obj.getDate())} ${getMonthName(date_obj.getMonth())}, ${date_obj.getFullYear()}`
}
