/**
 * 类型，值，变量 
 * Javascript类型： 原始类型 & 对象类型  
 * 原始类型： 数值，文本字符串，布尔真值  
 * 在javascript中，任何不是数值，字符串，布尔值，符号，null和undefined的值都是对象。  
 * 数组也是对象  
 * a.sort() // a 是数组，sort(a)的面向对象版
 * 从技术角度讲，只有Javascriptr对象才有方法，但数值、字符串、布尔值和符号表现得视乎它们也有方法，在Javascript中，只有null和undefined是不能调用方法的值。
 */

/**
 * Numbers 数值
 * You can use underscores within numeric literals to break long literals up into chunks that are easier to read:
 */
let billion = 1_000_000_000; // Underscore as a thousands separator. 
let bytes = 0x89_AB_CD_EF; // As a bytes separator. 
let bits = 0b0001_1101_0111; // As a nibble separator. 
let fraction = 0.123_456_789; // Works in the fractional part, too.

/** Math is an global object  */
let x = 1; let y = 1; let z = 1;
Math.pow(2, 53) // => 9007199254740992: 2 to the power 53 
Math.round(.6) // => 1.0: round to the nearest integer 
Math.ceil(.6) // => 1.0: round up to an integer 
Math.floor(.6) // => 0.0: round down to an integer 
Math.abs(-5) // => 5: absolute value 
Math.max(x, y, z) // Return the largest argument 
Math.min(x, y, z) // Return the smallest argument 
Math.random() // Pseudo-random number x where 0 <= x < 1.0 
Math.PI // π: circumference of a circle / diameter 
Math.E // e: The base of the natural logarithm 
Math.sqrt(3) // => 3**0.5: the square root of 3 
Math.pow(3, 1 / 3) // => 3**(1/3): the cube root of 3 
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc. 
Math.log(10) // Natural logarithm of 10 
Math.log(100) / Math.LN10 // Base 10 logarithm of 100 
Math.log(512) / Math.LN2 // Base 2 logarithm of 512 
Math.exp(3) // Math.E cubed

/** ES6 defines more functions on the Math object:  */
Math.cbrt(27) // => 3: cube root 
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments 
Math.log10(100) // => 2: Base-10 logarithm 
Math.log2(1024) // => 10: Base-2 logarithm 
Math.log1p(x) // Natural log of (1+x); accurate for very small x 
Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p() 
Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0 
Math.imul(2, 3) // => 6: optimized multiplication of 32-bit integers 
Math.clz32(0xf) // => 28: number of leading zero bits in a 32-bit integer 
Math.trunc(3.9) // => 3: convert to an integer by truncating fractional part 
Math.fround(x) // Round to nearest 32-bit float number 
Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh() 
Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

/** Infinity 无穷
 *  NaN 非数值，0/0 => NaN, 它与任何值比较都不相等，也不等于自己。
 */
isNaN()
Number.isNaN()
Number.isFinite()

/** BigInt
 *  BigInt与常规数值 不能混用
 *  Math 对象的任何函数都不接收BigInt操作数
 */

/** 日期和时间 
 *  Date 类
 */
console.log("*********日期和时间，Date类***********")
let timestamp = Date.now(); // 当前时间的时间戳（数值）
let now = new Date(); // 当前时间的日期对象
let ms = now.getTime(); // 转换为毫秒时间戳
let iso = now.toISOString(); // 转换为标准格式的字符串

console.log("timestamp:", timestamp);
console.log("now:", timestamp);
console.log("ms:", ms);
console.log("iso:", iso);

/** 
 * Text 文本
 * 
 * 字符串
 * (' " `), 双引号字符串可以出现在由单引号定界的字符串中，同理由双引号和反引号定界的字符串里也可以包含另外两种引号。
 * （ES6）反引号允许在字符串中包含(或插入)JavaScript表达式。
 * 
 *  使用 + 拼接字符串
 *  到了ES5， 可以在美行末尾加一个反斜杠 (\) 从而吧字符串字面量写到多行上
 */

"" // The empty string: it has zero characters 
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius";
`"She said 'hi'", he said.`


// A string representing 2 lines written on one line: 
'two\nlines'
// A one-line string written on 3 lines: 
"one\
 long\
 line";

// A two-line string written on two lines: 
`the newline character at the end of this line
is included literally in this string`

let msg = "Hello, " + "world";
let person_name = "Jim";
let greeting = "Welcome to my blog," + " " + person_name;
person_name.length

let s = "Hello, world"; // Start with some text. 
// Obtaining portions of a string 
s.substring(1, 4) // => "ell": the 2nd, 3rd, and 4th characters. 
s.slice(1, 4) // => "ell": same thing s.slice(-3) // => "rld": last 3 characters 
s.split(", ") // => ["Hello", "world"]: split at delimiter string 

// Searching a string 
s.indexOf("l") // => 2: position of first letter l 
s.indexOf("l", 3) // => 3: position of first "l" at or after 3 
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l 

// Boolean searching functions in ES6 and later 
s.startsWith("Hell") // => true: the string starts with these 
s.endsWith("!") // => false: s does not end with that 
s.includes("or") // => true: s includes substring "or" 

// Creating modified versions of a string 
s.replace("llo", "ya") // => "Heya, world" 
s.toLowerCase() // => "hello, world" 
s.toUpperCase() // => "HELLO, WORLD" 
s.normalize() // Unicode NFC normalization: ES6 
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD" 

// Inspecting individual (16-bit) characters of a string 
s.charAt(0) // => "H": the first character 
s.charAt(s.length - 1) // => "d": the last character 
s.charCodeAt(0) // => 72: 16-bit number at the specified position 
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits 

// String padding functions in ES2017 
"x".padStart(3) // => " x": add spaces on the left to a length of 3 
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3 
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3 
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3 

// Space trimming functions. trim() is ES5; others ES2019 
" test ".trim() // => "test": remove spaces at start and end 
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft 
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight 

// Miscellaneous string methods 
s.concat("!") // => "Hello, world!": just use + operator instead 
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6


/** 
 * Template Literals 模板字面量
 */
console.log("******** Template Literals 模板字面量 *********")
let myname = "Bill";
let mygreeting = `Hello ${myname}`;

/**
 * Boolean Values 布尔值
 * 
 * 下面的这些值都会被转换为 false:
 * undefined
 * null
 * 0
 * -0
 * NaN
 * ""
 * 
 * 没有明确返回值的函数返回的值是 undefined
 */

/**
 * Symbol 符号: ES6 新增的一种原始类型
 * 
 * 这个函数永远不会返回相同的值，及时每次传入的参数都不一样
 * 
 * 符号值的 toString() 方法
 * 
 * Symbol.for() 函数接收一个字符串参数，返回一个与该字符串关联的符号之，如果没有符号与该字符串关联，则会创建并返回一个新符号；
 * 否则，就会返回已有的符号
 */
console.log("*******************Symbol*********************************")
let strname = "string name";
let symname = Symbol("propname");
let symnameb = Symbol("propname");
typeof strname
console.log(typeof symname);  // symbol
let o = {};
o[strname] = 1;
o[symname] = 2;
o[symnameb] = 3;
o[strname]
o[symname]
console.log(o);

let sa = Symbol("sym_x");
sa.toString() // "Symbol(sym_x)"

let sb = Symbol.for("shared");
let tb = Symbol.for("shared");
sb === tb;               // => true
console.log(sb.toString());           // => "Symbol(shared)"
console.log(Symbol.keyFor(tb))       // => "shared"

/**
 * 全局对象
 * Javascript 解释器启动后，都会创建一个新的全局对象并为其添加一组初始的属性，定义了: 
 *  * undefined Infinify 和 NaN 这样的全局常量
 *  * isNaN, parseInt() eval() 这样的全局函数
 *  * Date() RegExp() String() Object() Array() 这样的构造函数
 *  * Math 和 JSON 这样的全局对象
 */

/**
 * 原始值与对象
 */
let s1 = "hello"
s1.toUpperCase(); // 返回"HELLO" 但不会修改s
console.log(s1);  // => "hello" 原始字符串并未修改

/**
 * 原始值是不可修改的
 */
let a = ["a", "b", "c"];              // 想要复制的源数组
let b = []
for (let i = 0; i < a.length; i++) {  // 要复制的另一个数组
    b[i] = a[i];
}
let c = Array.from(b);                // 在ES6中，可以使用Array.from() 复制数组

/**
 * 比较两个数组
 */
function equalArrays(a, b) {
    if (a === b) return true;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

/**
 * 类型转换
 */
/**
 * 显示转换
 */
Number("3")   // => 3
String(false) // => "false": 或者使用 false.toString()
Boolean([])   // => true

let n = 123456.789;
n.toFixed(0) // => "123457" 
n.toFixed(2) // => "123456.79" 
n.toFixed(5) // => "123456.78900" 
n.toExponential(1) // => "1.2e+5" 
n.toExponential(3) // => "1.235e+5" 
n.toPrecision(4) // => "1.235e+5" 
n.toPrecision(7) // => "123456.8" 
n.toPrecision(10) // => "123456.7890"

parseInt("3 blind mice") // => 3 
parseFloat(" 3.14 meters") // => 3.14 
parseInt("-12.34") // => -12 
parseInt("0xFF") // => 255 
parseInt("0xff") // => 255 
parseInt("-0XFF") // => -255 
parseFloat(".1") // => 0.1 
parseInt("0.1") // => 0 
parseInt(".1") // => NaN: integers can't start with "." 
parseFloat("$72.47") // => NaN: numbers can't start with "$

/**
 * 声明变量
 */

let i;
let sum;

let ia, suma;

let message = "hello";
let a1 = 0, b1 = 0, c1 = 0;
let x1 = 2, y1 = x1 * x1; // 初始化语句可以使用前面声明的变量

/**
 * 常量， 常量必须在声明时初始化
 * 声明常量的一个常见的约定就是全部字母大写 HO 或 HTTP_NOT_FOUND
 */
const H0 = 74;          // 哈勃常熟
const C = 299792.458;   // 真空中的光速
const AU = 1.496E8;     // 天文单位：地球与太阳剑的平均距离(km)

/**
 *  解构赋值
 */
console.log("***************解构赋值*****************************")
let [x2, y2] = [1, 2];   // 相当于let x =1,y=2
[x2, y2] = [x2 + 1, y2 + 1];   // 相当于x = x+1, y = y+1
[x2, y2] = [y2, x2];       // 交换两个变量的值
console.log([x2, y2]);

// 解构赋值让使用返回数组的函数变得异常便携

// Convert [x,y] coordinates to [r,theta] polar coordinates 
function toPolar(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}
// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
}
let [r, theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4 
let [xa, ya] = toCartesian(r, theta); // [x, y] == [1.0, 1,0]

let o1 = { x: 1, y: 2 }; // The object we'll loop over 
for (const [name, value] of Object.entries(o1)) {
    console.log(name, value); // Prints "x 1" and "y 2"
}


let [xb, ...yb] = [1,2,3,4]; // y == [2,3,4]

let transparent = {r2: 0.3, g2:0.5, b2:0.6, a2: 1.0};
let {r2,b2,g2} = transparent; // { r2: 0.3, b2: 0.6, g2: 0.5 }
console.log({r2,b2,g2}); 

// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan 
const {sin, cos, tan} = Math;
// Same as const cosine = Math.cos, tangent = Math.tan; 
const { cos: cosine, tan: tangent } = Math;