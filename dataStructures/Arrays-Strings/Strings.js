let str = 'Hello World'
//charAt
console.log(`Charat():\n  \tCharacter at: 0 is H: ${str.charAt(0)} `);

//concat

let str1 = 'My worthy friends';
let str2 = ', let\'s not fight';

console.log(`Concat():\n  \t${str1.concat(str2)}`)

//endsWith

console.log(`endsWith():\n  \ttrue: ${str1.endsWith('ds')}`);

//includes
let sentence = 'The quick brown fox jumps over the lazy dog.';

let word = 'fox';
console.log('includes():')
console.log(`\tThe word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

//indexof
console.log(`indexOf():\n  \t10: ${sentence.indexOf('brown')}`);

//match

let paragraph = 'The quick brown fox jumps over the lazy dog. It barked fox.';
let regex = 'jumps';
let found = paragraph.match(regex);
console.log(`match():\n  \ttrue: ${paragraph.match(regex)}`);

//replace

console.log(`replace() 1st fox with chicken:\n  \t ${paragraph.replace('fox','chicken')}`);

console.log(`replace() all fox with chicken:\n  \t ${paragraph.replace(/fox/g,'chicken')}`);

//search

let searchWord = 'over'
console.log(`Search() over begins on index: ${paragraph.search(searchWord)}`);

//split
let newString = paragraph.split(' ');

console.log(newString);

//trim

let str4 = '      BABE      ';
console.log(`Before trim():${str4}`);
console.log(`After trim():${str4.trim()}`);
