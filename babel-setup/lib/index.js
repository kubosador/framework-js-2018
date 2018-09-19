"use strict";

require("babel-polyfill");

var maVar1 = "Nouvelle ligne babelJS sans var";

console.log(maVar1);

var a = 'pêche';

var maVar2 = "Je vais \xE0 la " + a;

console.log(maVar2);

var maFunction = function maFunction(a, b) {
  return "J'affiche la variable " + a + " et " + b;
};

maFunction("blop", "top");