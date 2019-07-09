'use strict';
function jediName(firstName, lastName) {
    let first = firstName.slice(0, 2);
    let last = lastName.slice(0,3);

    return last + first;
}

const output = jediName('Chris', 'Powers')
console.log(output);
