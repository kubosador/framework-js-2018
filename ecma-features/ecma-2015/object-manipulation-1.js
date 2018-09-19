
const obj1 = {a : 1, b: 2};
const obj2 = {a : 10, d : 5};

// Fusion des deux objets :
// Expected : { a: 10, b: 2, d: 5 }

// ES5
var obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// ES6
const obj4 =  {...obj1, ...obj2};
console.log(obj4);