/** You can use underscores within numeric literals to break long literals up into chunks that are easier to read: */
let billion = 1_000_000_000; // Underscore as a thousands separator. 
let bytes = 0x89_AB_CD_EF; // As a bytes separator. 
let bits = 0b0001_1101_0111; // As a nibble separator. 
let fraction = 0.123_456_789; // Works in the fractional part, too.

/** Math is an global object  */
let x=1; let y=1; let z=1;
Math.pow(2,53) // => 9007199254740992: 2 to the power 53 
Math.round(.6) // => 1.0: round to the nearest integer 
Math.ceil(.6) // => 1.0: round up to an integer 
Math.floor(.6) // => 0.0: round down to an integer 
Math.abs(-5) // => 5: absolute value 
Math.max(x,y,z) // Return the largest argument 
Math.min(x,y,z) // Return the smallest argument 
Math.random() // Pseudo-random number x where 0 <= x < 1.0 
Math.PI // π: circumference of a circle / diameter 
Math.E // e: The base of the natural logarithm 
Math.sqrt(3) // => 3**0.5: the square root of 3 
Math.pow(3, 1/3) // => 3**(1/3): the cube root of 3 
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc. 
Math.log(10) // Natural logarithm of 10 
Math.log(100)/Math.LN10 // Base 10 logarithm of 100 
Math.log(512)/Math.LN2 // Base 2 logarithm of 512 
Math.exp(3) // Math.E cubed

/** ES6 defines more functions on the Math object:  */
Math.cbrt(27) // => 3: cube root 
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments 
Math.log10(100) // => 2: Base-10 logarithm 
Math.log2(1024) // => 10: Base-2 logarithm 
Math.log1p(x) // Natural log of (1+x); accurate for very small x 
Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p() 
Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0 
Math.imul(2,3) // => 6: optimized multiplication of 32-bit integers 
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

console.log("timestamp:",timestamp);
console.log("now:",timestamp);
console.log("ms:",ms);
console.log("iso:",iso);

/** 
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
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters. 
s.slice(1,4) // => "ell": same thing s.slice(-3) // => "rld": last 3 characters 
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
 s.charAt(s.length-1) // => "d": the last character 
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
 let mygreeting = `Hello ${ myname }`;
