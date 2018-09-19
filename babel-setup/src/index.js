import "babel-polyfill";

let maVar1 = `Nouvelle ligne babelJS sans var`

console.log(maVar1);

let a = 'pêche';

let maVar2 = `Je vais à la ${a}`;

console.log(maVar2);

const maFunction = (a, b) => `J'affiche la variable ${a} et ${b}`;

maFunction("blop", "top",);
