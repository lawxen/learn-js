
let scope = "global scope";
function checkscope() {
    let scope = "local scope";
    function f() { return scope; }
    return f();
}
x = checkscope();        // => "local scope"
console.log("x", x);

// Javascript函数是使用定义它们的作用域来执行的
let scope1 = "global scope";
function checkscope1() {
    let scope = "local scope";
    function f() { return scope; }
    return f;
}
x1 = checkscope1()();        // => 
console.log("x1", x1);

// 通过闭包防止被错误或恶意代码重置计数器
let uniqueInteger = (function () {
    let counter = 0;
    return function () { return counter++; };
}());
uniqueInteger() // => 0
uniqueInteger() // => 1 

// 私有变量并非只能由一个闭包独享，同一个外部函数中完全可以定义两个或更多嵌套函数
function counter() {
    let n = 0;
    return {
        count: function () { return n++; },
        reset: function () { n = 0 }
    };
}
let c = counter(), d = counter();   // 创建两个计数器  每次调用counter() 都会创建一个新的作用域(与之前调用创建的作用域相互独立)
c.count()                           // => 0
d.count()                           // => 0 它们分别计数
c.reset();
c.count()
d.count()

// 闭包技术与属性获取方法与设置方法组合使用
function counter1(n) {   // 函数参数n是私有变量 让counter()的调用者指定私有变量的初始值
    return {
        get count() { return n++; },
        set count(m) {
            if (m > n) n = m;
            else throw Error("count can only be se to a lager value");
        }
    };
}
let c1 = counter(1000);
c.count             // => 1000
c.count             // => 1001
c.count = 2000;
c.count             // => 2000
c.count = 2000;

// 示例8-2 使用闭包的私有属性访问器方法

function addPrivateProperty(o, name, predicate) {
    let value;

    o[`get${name}`] = function () { return value; };
    o[`set${name}`] = function (v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}

let o = {};
addPrivateProperty(o, "Name", x => typeof x === "string");
o.setName("Frank");
o.getName()
o.setName(0)        // !TypeErroe: 尝试设置一个错误类型的值