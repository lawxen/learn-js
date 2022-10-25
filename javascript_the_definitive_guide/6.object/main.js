"use strict";
// x = 4; // Error ReferenceError: x is not defined
let o = {};
console.log('o.prototype',o.prototype) // o.prototype undefined
o.x = 1;
let p = Object.create(o);
console.log('p.prototype',p.prototype) // p.prototype undefined
p.y = 2;
let q = Object.create(p)
q.z = 3;
let f = q.toString();
console.log('f',f); // f [object Object]
q.x + q.y;
delete(q.x);    // False won't throw error, but can't delete any x.
console.log('q',q); // q { z: 3 }
console.log('q.x',q.x); // q.x 1

var x = 1; // 
// delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.
delete globalThis.x; // False can't delete this property, but no error.
console.log("x",x); // x 1

globalThis.y = 1;
delete globalThis.y;
// console.log('y',y); // ReferenceError: y is not defined

const extension = Symbol("my extension symbol");
o[extension] = {x:1,y:2};
console.log(Object.keys(o));

for (let i in o) {
    console.log(i)
}