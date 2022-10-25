// 函数声明 函数声明语句会被提升到包含脚本、函数或代码块的顶部。
// 在ES6严格模式下，函数声明可以出现在语句块中，对块的外部不可见。
// 返回 undefined
function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`)
    }
}

// 函数表达式
const square = function(x) { return x*x; };
// 函数标识可以包含名字，这对递归有用
const f = function fact(x) { if (x <1 ) return 1; else return x*fact(x-1);};
// 函数表达式也可以用作其他函数的参数
[3,2,1].sort(function(a,b) {return a-b;});
// 函数表达式也可以顶一万立即调用
let tensquared = (function(x) {return x*x;}(10));

const sum = (x,y) => { return x + y};
const sum1 = (x,y) => x + y;
const sum2 = x => x*x + 2*x +3;
const constanFunc = () => 42;

const f1 = x => { return { value: x};};
const g = x => ({ value: x}); // 如果返回的是对象字面量，那必须把这个对象字面量放在一堆圆括号中
const h = x => { value: x}; // 误： h()什么也不返回
// const i = x => {v:x,w:x};   // 误： 语法错误

let filtered = [1,null,2,3].filter(x => x !== null);
let squares = [1,2,3,4].map(x => x*x);

// 嵌套函数
function hypotenuse(a,b) {
    function square(x) { return x*x; };
    return Math.sqrt(square(a)+ square(b));
}