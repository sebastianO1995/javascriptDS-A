//this is to test the javascript array object and methods made 2017
//concat

let cars = ["Honda", "Chevrolet", "Audi", "Toyota"];

let countries = ["Brazil", "Peru", "Mexico", "France","Portugal", "Poland"];

let car_countries = cars.concat(countries[0],countries); // - first element of second array

// let car_countries = cars.concat(countries); - whole array
console.log(`concat() = ${car_countries}`);

//copy within
//copying honda to end. HONDA, CHEVROLET, AUDI, HONDA

console.log(`copyWithin() = ${cars.copyWithin(3,0)}`);

//entries

let iterator = countries.entries();

console.log(`Entries()`);
for(let e of iterator){
  console.log(e);
}

//every

let arr2 = [1,2,3,4,5,6,7,8];
let arr3 = [2,4,6,8,10];

let isEven = function (x){
  return x % 2 ===0;
}

console.log(`Every()- false: ${arr2.every(isEven)}`);
console.log(`Every()- true: ${arr3.every(isEven)}`);

//fill
console.log(`Fill()- with cat to arr3: ${arr3.fill("cat",2,5)}`);

//filter
let odds = arr2.filter(x => x%2 !=0);

console.log(`Filter() - odds: ${odds}`);

//find

let P = function (country) {
  return country[0] === 'P';
}

console.log(`Find() - Peru: ${countries.find(P)}`);

//findindex

console.log(`findIndex() - 3: ${countries.findIndex(x => {return x==="France"})}`);

//foreach

console.log('forEach()');
cars.forEach(element => {
  console.log(element);
})

//includes
let isFrance = countries.includes("France");

console.log(`includes() - true: ${isFrance}`);

//indexof

console.log(`indexOf() - 4: ${countries.indexOf("Portugal")}`);

//join

console.log(`Join() by ',' - ${countries.join()}'`);
console.log(`Join() by ' ' - ${countries.join(' ')}'`);
console.log(`Join() by '-' - ${countries.join('-')}'`);

//push,pop

countries.push('Ecuador');
cars.pop();

console.log(cars)
console.log(countries)
//reverse
console.log(`Reverse() - countries: ${countries.reverse()}`)

//shift
console.log(`Shift() - Honda: ${cars.shift()}`)
console.log(cars)

//slice

console.log('Pre-Slice:');
console.log(`\t Countries: ${countries}`);
console.log('Post-Slice:');
console.log(`\t Countries: ${countries.slice(2,4)}`);

//sort

let arr4 = [4,41,6,2,7,81,331,11,1,0,5]
// console.log(`Sorted: ${countries.sort()}`)
console.log(`Sorted: ${arr4.sort((a,b)=> b-a)}`);

//splice
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
//              0         1       2          3          4
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed


//Unshift
console.log(`unshift() - add Honda, Jeep, Hyundai, Mazda: ${cars.unshift('Honda','Jeep',"Hyundai",'Mazda')} is the new size`)
console.log(cars)
