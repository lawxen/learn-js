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
const square = function (x) { return x * x; };
// 函数标识可以包含名字，这对递归有用
const f = function fact(x) { if (x < 1) return 1; else return x * fact(x - 1); };
// 函数表达式也可以用作其他函数的参数
[3, 2, 1].sort(function (a, b) { return a - b; });
// 函数表达式也可以顶一万立即调用
let tensquared = (function (x) { return x * x; }(10));

/** 8.1.3 箭头函数 */
const sum = (x, y) => { return x + y };
const sum1 = (x, y) => x + y;
const sum2 = x => x * x + 2 * x + 3;
const constanFunc = () => 42;

const f1 = x => { return { value: x }; };
const g = x => ({ value: x }); // 如果返回的是对象字面量，那必须把这个对象字面量放在一堆圆括号中
const h = x => { value: x }; // 误： h()什么也不返回
// const i = x => {v:x,w:x};   // 误： 语法错误

let filtered = [1, null, 2, 3].filter(x => x !== null);
let squares = [1, 2, 3, 4].map(x => x * x);

/** 8.1.4 嵌套函数 */
function hypotenuse(a, b) {
    function square(x) { return x * x; };
    return Math.sqrt(square(a) + square(b));
}

/** ----- 8.2 调用函数 ----- */
/** 8.2.1 函数调用 */
// 条件式调用 ?. 只在函数不是null或undefined时调用函数
f?.(x)

// 非严格膜式，this值是全局对象，严格模式，调用上下文是undefined，箭头函数继承自身定义所在环境的this值
// 定义并调用函数，以确定当前是不是严格模式
const strict = (function () { return !this; }());

/** 8.2.2 方法调用 */
o.m();
o.m(x, y);
let calculator = {
    operand1: 1,
    operand2: 1,
    add() {
        this.result = this.operand1 + this.operand2; // 函数体可以通过this调用对象o
    }
};
calculator.add();
calculator.result // => 2

0["m"](x, y) // o.m(x,y) 的另一种写法
f().m() // 在f()的返回值上调用m()
// 方法调用链 如果方法返回对象，可以连续调用
doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors); // 依次运行三个异步操作，最后处理错误
new Square(x).x(100).y(100).size(50).outline("red").fill("blue").draw();

// 嵌套函数不会继承包含函数的this值，它的this值要买是全局对象(非严格模式)，要么是undefined（严格模式）
let o = {
    m: function () {
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

    m: function () {
        f();
    }
};
o2.m();


let o3 = {
    // 还有一个技巧是调用嵌套函数的bind()方法，
    f: (function () {
        this === 0 // true,
    }).bind(this),

    m: function () {
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
function getPropertyNames(o, a) { // 可选参数一定要放在列表最好，在调用时才可以省略
    if (a == undefined) a = [];  // 也可以用，a = a || [];
    for (let property in o) a.push(property);
    return a;
}

// 调用getPropertyNames时，可以传一个参数，也可以传两个参数
let o1 = { x: 1 }, p = { y: 2, z: 3 };
let a = getPropertyNames(o1);
getPropertyNames(p, a);

// ES6 形参以上可以设置默认值

function getPropertyNamesb(o, a = []) {
    for (let property in o) a.push(property);
    return a;
}

// 形参可以是常量，也可以是变量或调用计算形参的默认值,如果有多个形参，可以使用前面参数的值来定义后面参数的默认值。

const rectangle = (width, height = width * 2) => ({ width, height });
rectangle(1)

/** 8.3.2 剩余形参与可变长度实参列表 */
// 剩余形参前面有3个点，而且必须是函数声明中的最后一个参数，剩余形参的值始终是数组，永远不可能是undefined
function max(first = -Infinity, ...rest) {
    let maxValue = first;
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }

    return maxValue;
}

/** 8.3.3 Arguments 对象 */
// 效率低，避免使用

/** 8.3.4 在函数调用中使用扩张操作符 */
// 当定义在函数参数(剩余参数)上时，作用相反。
let numbers = [5, 2, 10, -1, 9, 100, 1]
Math.min(...numbers);

/** 8.3.5 把函数实参结构为形参 */
function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[2]];
}
vectorAdd([1, 2], [3, 4]) // => [4,6]


function vectorAdd1([x1,y1], [x2,y2]) {
    return [x1 + x2, y1 + y2];
}
vectorAdd1([1, 2], [3, 4]) // => [4,6]

// 对象实参

/** 8.3.6 参数类型 */

function sum(a) {
    let total = 0;
    for(let element of a) {
        if (typeof element !== "number") {
            throw new TypeError("sum():elements must be numbers");
        }
        total += element;
    }
    return total;
}

/** ----- 8.4 函数作为值 ----- */

// 函数赋值给变量
function square(x) { return x*x; }
let s = square;
square(4) // => 16
s(4)      // => 16

// 函数赋值给对象的属性
let oa = {square: function(x) {return x*x}};
let y = oa.square(16);

// 函数可以没有名字
let ax = [x => x*x,20];
ax[0](ax[1]);

// 示例8-1：函数作为值
function add(x,y) { return x +y; }
function substract(x,y) { return x-y; };
function multiply(x,y) { return x*y; };
function devide(x,y) { return x / y; };

// We define some simple functions here
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }

// Here's a function that takes one of the preceding functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// We could invoke this function like this to compute the value (2+3) + (4*5):
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

// For the sake of the example, we implement the simple functions again,
// this time within an object literal;
const operators = {
    add:      (x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) => x*y,
    divide:   (x,y) => x/y,
    pow:      Math.pow  // This works for predefined functions too
};

// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    }
    else throw "unknown operator";
}

operate2("add", "hello", operate2("add", " ", "world")) // => "hello world"
operate2("pow", 10, 2)  // => 100

/** 8.4.1 定义自己的函数属性 */

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;
function uniqueInteger() {
    return uniqueInteger.counter++;
}
uniqueInteger() // => 0
uniqueInteger() // => 1

// 计算阶乘并把结果缓存到函数本书的属性中
function factorial(n) {
    if (Number.isInteger(n) && n >0) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n-1);
        }
        return factorial[n];
    } else {
        return NaN;
    }
}
factorial[1] = 1; // 初始化缓存，保存最基础的值
factorial(6) // => 720
factorial[5] // => 12o 上面的调用缓存了这个值

/** ----- 8.5 函数作为命名空间 ----- */

// 在函数体内声明的变量在函数外部不可见，为此，有时候可以把函数用作临时的命名空间，这样可以保证在其中定义的变量不会污染全局命名空间

function chunkNamesapce() {
    // 要复用的代码放在这里
}
chunkNamesapce(); // 别忘了定义结束后立即调用它。

// 立即调用函数表达式
(function() {
    // 要复用的代码放在这里
}()); // 函数定义结束后立即调用它。

/** 8.6 闭包 closure 查看单独的closure.js */

/** 8.8 函数属性、方法和构造函数 */
// length属性 函数在参数列表中声明的形参个数
// name 属性 定义函数时使用的名字，未命名函数标识第一次创建这个函数时赋给该函数的变量名或属性名
// prototype属性 除了箭头函数，所有函数都有一个prototype属性
// call 和 apply
// 如果要把f()作为对象o的方法进行调用(不传参数)
f.call(o);
f.apply(o);

// 这两行代码类似于下面的代码
o.m = f;
o.m()
delete o.m;

// 箭头函数从定义它的上下文种继承this值，这个this值不能通过call()和apply()方法重写。如果对箭头函数调用这两个方法，那第一个参数实际上会被忽略
// 除了第一个参数，后续参数都会传给被调用的函数
f.call(o,1,2);
// apply() 与 call() 类似，只不过要传给函数的参数需要以数组的形式提供
f.apply(o,[1,2]);

// bind 方法目的是把函数绑定到对象

function f(y) {return this.x + y;}  // 这个函数需要绑定
let o = { x:1 };                    // 
let ga = f.bind(o);                 // 调用g(x)会在o上调用f()
ga(2);                              // => 3
let pa = {x:10,ga};
pa.ga(2)                            // => 3: ga仍然绑定到o，而非pa

// 箭头函数从定义它们的环境中继承this值，且这个值不能被bind()覆盖
// bind() 最常见的目的是让非箭头函数变得像箭头函数

// bind()也可以执行部分应用，第一个参数之后传给bind() 的参数也会随着this值一起被绑定
let sum = (x,y) => x+y;
let succ = sum.bind(null,1);
succ(2)                         // => 3: x绑定到1,2会传给参数y

function f1(y,z) {return this.x + y +y;}
let g1 = f1.bind({x:1},2);          // 绑定this值和y
g1(3)                               // => 6 this.x 绑定到1，已绑定到2，z是3

/** 8.7.6 toString()方法 */
// 多数实践都返回函数完整的源代码

/** 8.7.7 Function() 构造函数 */ // 自己写的代码永远也用不到这个构造函数
const f = Functio("x", "y", "return x*y;");
// 这行代码等于下面一行
const f1 = function(x,y) {return x*y;};

// Function() 构造函数可以接受任意多个字符串参数，其中最后一个参数是函数体的文本，

// Function() 不使用词法作用域，而是始终编译为如同顶级函数一样

let scope = "global";
function constructFunction() {
    let scope = "local";
    return new Function("return scope"); // 不会捕捉局部作用域
}

constructFunction()() // => "glocal "