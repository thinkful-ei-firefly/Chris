//using strict as requested//
'use strict';
function getYearOfBirth(age){
  if(age < 0){
    throw new Error ('Age cannot be negative'); 
  }
  
  return 2019-age;
}

function createGreeting(name,age){
  if (typeof name === 'undefined' || typeof age === 'undefined'){
    throw new Error ('Arguments not valid');
  } 
  const yearOfBirth = getYearOfBirth(age);
  return (`Hi my name is ${name}, and I'm ${age} years old. I was born in the year ${yearOfBirth} `);
}

// Issues with Audio as well as Git has forced us

const createGreeting1 = createGreeting('Chris', 38);
console.log(createGreeting1);

try {
  createGreeting('Chris');
} catch (e) {
  console.error(e.message);
}