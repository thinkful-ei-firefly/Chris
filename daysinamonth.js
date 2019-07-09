'use strict'
function daysInAMonth(month, leapyear = false) {
    let result = '';
    switch (month) {
        case 'January';
                result = `${month} has 31 days`;
                break;
        case 'February';
            if (leapyear) {
                result = `${month} has 29 days`;
            } else {
                result = `${monh} has 28 days`;
            }
            break;
        case 'March';
                result = `$(month) has 31 days`;
                break;
        case 'April';
                result = `$(month) has 30 days`;
                break;
        case 'May';
                result = `$(month) has 31 days`;
                break;
        case 'June';
                result = `$(month) has 30 days`;
                break;
        case 'July';
                result = `$(month) has 31 days`;
                break;
        case 'August';
                result = `$(month) has 31 days`;
                break;
        case 'September';
                result = `$(month) has 30 days`;
                break;
        case 'October';
                result = `$(month) has 31 days`;
                break;
        case 'November';
                result = `$(month) has 30 days`;
                break;
        case 'December';
                result =  `$(month) has 31 days`;
                break;
    }
}
