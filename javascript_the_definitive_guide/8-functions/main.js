/** ----- 8.1 定义函数 ----- */
/** 8.1.1 函数声明 */
// 函数声明语句会被提升到包含脚本、函数或代码块的顶部。
// 在ES6严格模式下，函数声明可以出现在语句块中，对块的外部不可见。
// 返回 undefined
function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`)
    }
}

/** 8.1.2函数表达式 */
const square = function(x) { return x*x; };
// 函数标识可以包含名字，这对递归有用
const f = function fact(x) { if (x <1 ) return 1; else return x*fact(x-1);};
// 函数表达式也可以用作其他函数的参数
[3,2,1].sort(function(a,b) {return a-b;});
// 函数表达式也可以顶一万立即调用
let tensquared = (function(x) {return x*x;}(10));

/** 8.1.3 箭头函数 */
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

/** 8.1.4 嵌套函数 */
function hypotenuse(a,b) {
    function square(x) { return x*x; };
    return Math.sqrt(square(a)+ square(b));
}

/** ----- 8.2 调用函数 ----- */
/** 8.2.1 函数调用 */
// 条件式调用 ?. 只在函数不是null或undefined时调用函数
f?.(x)

// 非严格膜式，this值是全局对象，严格模式，调用上下文是undefined，箭头函数继承自身定义所在环境的this值
// 定义并调用函数，以确定当前是不是严格模式
const strict = (function() { return !this;}());

/** 8.2.2 方法调用 */
o.m();
o.m(x,y);
let calculator = {
    operand1: 1,
    operand2: 1,
    add() {
        this.result = this.operand1 + this.operand2; // 函数体可以通过this调用对象o
    }
};
calculator.add();
calculator.result // => 2

0["m"](x,y) // o.m(x,y) 的另一种写法
f().m() // 在f()的返回值上调用m()
// 方法调用链 如果方法返回对象，可以连续调用
doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors); // 依次运行三个异步操作，最后处理错误
new Square(x).x(100).y(100).size(50).outline("red").fill("blue").draw();

// 嵌套函数不会继承包含函数的this值，它的this值要买是全局对象(非严格模式)，要么是undefined（严格模式）
let o = {
    m: function() {
        let self = this;
        this === o          // => true
        f();

        function f() {
            this === o      // => false this是全局对象或undefined
            self === 0      // => true self 是外部的this值

        }
    }
};
o.m();

let o2 = {
    // 在ES6之后，解决问题的另一个技巧是把嵌套函数f转换为箭头函数，因为箭头函数可以继承this值
    f: () => {
        this === o //true, 因为箭头函数继承this
    },  // 函数表达式不像函数声明那样会被提升，所以要将f放在m之前。

    m: function() {
        f();
    }
};
o2.m();


let o3 = {
    // 还有一个技巧是调用嵌套函数的bind()方法，
    f: (function() {
        this === 0 // true,
    }).bind(this),

    m: function() {
        f();
    }
};
o2.m();

/** 8.2.3 构造函数调用 */

o = new Object();
o = new Object; // 假如没有参数列表，构造函数可以省略圆括号，上面两行等价

/** 8.2.4 间接调用 */
// js 函数是对象，也有方法 
 
/** 8.2.5 隐式函数调用 */
// 当对象在字符串上下文种使用时（比如拼接对象与字符串时），会调用对象得的tostring()方法，当对象用于数值上下文时，则会调用它的valueof()方法.

/** 8.3 -----函数实参与形参-------- */
/** 8.3.1 可选形参与默认值 */
// 实参少于形参时，额外的形参会获得默认值，通常是undefined
function getPropertyNames(o,a) { // 可选参数一定要放在列表最好，在调用时才可以省略
    if (a == undefined) a = [];  // 也可以用，a = a || [];
    for(let property in o) a.push(property);
    return a;
}

// 调用getPropertyNames时，可以传一个参数，也可以传两个参数
let o1 = {x:1}, p = {y:2,z:3};
let a = getPropertyNames(o1);
getPropertyNames(p,a);

// ES6 形参以上可以设置默认值

function getPropertyNamesb(o, a = []) {
    for(let property in o) a.push(property);
    return a;
}

// 形参可以是常量，也可以是变量或调用计算形参的默认值,如果有多个形参，可以使用前面参数的值来定义后面参数的默认值。

const rectangle = (width,height = width*2) => ({width,height});
rectangle(1)

/** 剩余形参与可变长度实参列表 */