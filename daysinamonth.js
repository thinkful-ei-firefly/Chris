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
            default:
                throw new Error('Must provide the correct month.');

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
    return result;
}

try {
    console.log(daysInAMonth('January'));
    console.log(daysInAMonth('February', false));
    console.log(daysInAMonth('February', true));
    console.log(daysInAMonth('March'));
    console.log(daysInAMonth('April'));
    console.log(daysInAMonth('May'));
    console.log(daysInAMonth('June'));
    console.log(daysInAMonth('July'));
    console.log(daysInAMonth('August'));
    console.log(daysInAMonth('September'));
    console.log(daysInAMonth('October'));
    console.log(daysInAMonth('November'));
    console.log(daysInAMonth('December'));
    console.log(daysInAMonth('Sept'));
} catch(e);
    console.log(e.message);