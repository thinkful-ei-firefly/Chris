'use strict';

function howManyDaysInAMonth(month, leapYear = false) {
   
    let result = '';
    switch (month) {
        
        case 'January':
                result = '${month} has 31 days';
                break;
        
        case 'February':
            if (leapYear) {
                result = '${month} has 29 days';
            } else {
                result = '${month} has 28 days';
            }
            break;
            default:
                throw new Error('Must provide the correct month.');

        case 'March':
                result = '$(month) has 31 days';
                break;

        case 'April':
                result = '$(month) has 30 days';
                break;

        case 'May':
                result = '$(month) has 31 days';
                break;

        case 'June':
                result = '$(month) has 30 days';
                break;

        case 'July':
                result = '$(month) has 31 days';
                break;

        case 'August':
                result = '$(month) has 31 days';
                break;

        case 'September':
                result = '$(month) has 30 days';
                break;

        case 'October':
                result = '$(month) has 31 days';
                break;

        case 'November':
                result = '$(month) has 30 days';
                break;

        case 'December':
                result =  '$(month) has 31 days';
                break;

    }
    return result;
}

try {
    console.log(howManyDaysInAMonth('January'));
    console.log(howManyDaysInAMonth('February', false));
    console.log(howManyDaysInAMonth('February', true));
    console.log(howManyDaysInAMonth('March'));
    console.log(howManyDaysInAMonth('April'));
    console.log(howManyDaysInAMonth('May'));
    console.log(howManyDaysInAMonth('June'));
    console.log(howManyDaysInAMonth('July'));
    console.log(howManyDaysInAMonth('August'));
    console.log(howManyDaysInAMonth('September'));
    console.log(howManyDaysInAMonth('October'));
    console.log(howManyDaysInAMonth('November'));
    console.log(howManyDaysInAMonth('December'));
    console.log(howManyDaysInAMonth('Sept'));
}catch(e) {
    console.log(e.message);
}