
// 1)
console.log("Hi, my name is Adam and I'm 20 years old");

// 2)
function createGreeting() {
    console.log("Hi, my name is Adam and I'm 20 years old"); 
}

// 3)
function createGreeting() {
    return "Hi, my name is Adam and I'm 20 years old";
}

const greeting1 = createGreeting();
console.log(greeting1);

// 4)
function createGreeting(name, age){ 
    return `Hi, my name is ${name} and I'm ${age} years old`;
  }

// 5)
function createGreeting(name, age){ 
    const yearOfBirth = 2019 - age;
    return `I was born in ${yearOfBirth}`;
}

// 6)
function getYearOfBirth(age){
    return `I was born in ${yearofBirth}`;
  }

function createGreeting(name, age){
const yob = getYearOfBirth(age);
return yob;
}

// 7) part 1
function yearOfBirth(age){
    if (age < 0) 
        throw new Error("Age can not be negative");
    return 2019 - age;
  }

  try {
    const greeting1 = createGreeting(...);
  } catch 

// 7) part 2
function yearOfBirth(name, age){
    if (age < 0) 
        throw new Error("Age can not be negative");
    return createGreeting(name, age);
  }

  try {
    const greeting1 = createGreeting(...);
  } catch 

//8
function yearOfBirth(name, age){
    if (typeof name !== 'string' || typeof age !== 'number') 
        throw new TypeError()
    return createGreeting(name, age);
  }

  try {
    const greeting1 = createGreeting(...);
  } catch 