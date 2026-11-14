
// string: text value, so quotes are needed
const cityName = "Bahawalpur";
console.log(cityName, typeof cityName);

// number: integers and decimals are both number
const temperature = 30;
const price = 99.5;
console.log(temperature, typeof temperature);
console.log(price, typeof price);

// boolean: only true or false, no quotes
const isRaining = false;
console.log(isRaining, typeof isRaining);

// undefined: variable exists but has no value yet
let userName;
console.log(userName, typeof userName);

// null: I set it empty on purpose
const selectedItem = null;
console.log(selectedItem, typeof selectedItem);

// bigint: the n at the end makes it bigint
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber, typeof bigNumber);

// symbol: always unique, even with the same description
const idOne = Symbol("id");
const idTwo = Symbol("id");
console.log(typeof idOne);
console.log(idOne === idTwo); 

// NaN: failed math, but still type number
const notValid = 10 / "abc";
console.log(notValid, typeof notValid);

// string vs number: quotes change the type
console.log(typeof 50);   
console.log(typeof "50"); 
