// Map
let cities = ["NY", "LA", "DC"];
let lowerCities = cities.map((city)=> city.toLowerCase())
console.log(lowerCities);

let words = ["hello", "dhanjyoti", "single"];
let countLength = words.map(word=>word.length);
console.log(countLength);

// Filter
var people = [
    {name: "abc", age: 48},
    {name: "aa", age: 4},
    {name: "ab", age: 8},
    {name: "abca", age: 38},
    {name: "abcasg", age: 44},
    {name: "aafac", age: 10},
]
let filteredlist = people.filter(person=> person.age>40 || person.name=="aa");

console.log(filteredlist);

// Reduce
var crowd = [
    {name: "abc", age: 48},
    {name: "aa", age: 4},
    {name: "ab", age: 8},
    {name: "abca", age: 38},
    {name: "abcasg", age: 44},
    {name: "aafac", age: 10},
]
let sum = crowd.reduce((total, man)=> total+man.age, 0);
console.log(sum);