export const phases = [
  {
    id: 'js-basics',
    name: '阶段一：基础语法',
    description: '变量、函数、数组、对象',
    levels: [
      {
        id: 'js-1',
        number: 1,
        title: '变量声明',
        concept: 'let / const',
        difficulty: 'easy',
        task: '用 const 和 let 分别声明一个字符串和数字变量',
        prerequisites: `<h4>🐍 变量声明</h4>
<p>ES6 引入了 <code>let</code> 和 <code>const</code> 替代 var：</p>
<pre><code>const name = 'Alice'   // 常量，不可重新赋值
let age = 25           // 变量，可以重新赋值
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>const</code> — 声明后不可重新赋值</li>
  <li><code>let</code> — 可重新赋值，有块级作用域</li>
  <li><code>var</code> — 已过时，避免使用</li>
</ul>`,
        conceptDetail: `步骤 1 — 用 const 声明字符串
[const](声明常量，不可重新赋值) 适合不会改变的值。

步骤 2 — 用 let 声明数字
[let](声明变量，可重新赋值) 适合需要后续修改的值。

步骤 3 — 用 console.log 输出
[console.log()](在控制台输出信息) 调试查看变量值。`,
        contextCode: `// let/const 区别参考
const PI = 3.14        // 常量，不可重新赋值
let count = 0          // 变量，可重新赋值
count = 1              // OK
// PI = 3.14159        // 报错！

// const 对象/数组可修改内容
const arr = [1, 2]
arr.push(3)            // OK（修改内容）
// arr = [4, 5]        // 报错（重新赋值）

// 作用域：let/const 有块级作用域
if (true) {
  let x = 1           // 只在 if 块内有效
  const y = 2         // 只在 if 块内有效
}
// console.log(x)     // 报错`,
        starterCode: `// 用 const 声明一个字符串变量
// 用 let 声明一个数字变量
// 用 console.log 输出两个变量
`,
        hints: [
          'const name = "你的名字"',
          'let age = 你的年龄',
          'console.log(name, age)'
        ],
        code: `const name = "Alice"
let age = 25
console.log(name, age)`,
        verification: '使用了 const 和 let 声明变量',
        filePath: 'src/variables.js',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
         {
          'pattern': 'const',
          'explanation': 'const 变量不能重新赋值'
         },
         {
          'pattern': 'let',
          'explanation': 'let 有块级作用域'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '用 const 声明',
          'verification': 'const',
          'hint': '尝试 const 声明',
          docLinks: [{title: 'MDN let/const', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let'}],
         },
         {
          'id': 'step-2',
          'title': '用 let 声明',
          'verification': 'let',
          'hint': '尝试 let 声明',
          docLinks: [{title: 'MDN let/const', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let'}],
         },
         {
          'id': 'step-3',
          'title': '验证输出',
          'verification': 'console.log',
          'hint': '打印变量值',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '用 const/let 声明不同类型的变量，观察作用域差异',
          'target': '掌握变量声明'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-2',
        number: 2,
        title: '数据类型',
        concept: '原始类型',
        difficulty: 'easy',
        task: '探索 JavaScript 的 7 种原始数据类型',
        prerequisites: `<h4>🐍 数据类型</h4>
<p>JavaScript 有 7 种原始类型：</p>
<pre><code>typeof "string"    // "string"
typeof 123         // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (历史bug)
typeof Symbol()    // "symbol"
typeof 123n        // "bigint"
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>typeof</code> — 检测变量类型</li>
  <li>原始类型按值传递</li>
  <li>引用类型（对象、数组、函数）按引用传递</li>
</ul>`,
        conceptDetail: `步骤 1 — 使用 typeof 检测类型
[typeof](检测数据类型的运算符) 返回类型字符串。

步骤 2 — 理解类型特性
每种类型有不同的特性和用途。

步骤 3 — 注意类型转换
JavaScript 是动态类型，注意隐式转换。`,
        contextCode: `// typeof 类型表参考
typeof "hello"       // "string"
typeof 42            // "number"
typeof 3.14          // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"    ← 历史bug
typeof []            // "object"
typeof {}            // "object"
typeof function(){}  // "function"
typeof Symbol()      // "symbol"
typeof 123n          // "bigint"

// 更准确的类型判断
Array.isArray([])       // true
Object.prototype.toString.call([])  // "[object Array]"`,
        starterCode: `// 用 typeof 检测以下值的类型并打印结果：
// "hello", 42, true, undefined, null, Symbol(), 123n
`,
        hints: [
          'typeof "hello" 返回 "string"',
          'typeof 42 返回 "number"',
          'typeof null 返回 "object"（历史bug）'
        ],
        code: `console.log(typeof "hello")   // "string"
console.log(typeof 42)        // "number"
console.log(typeof true)      // "boolean"
console.log(typeof undefined) // "undefined"
console.log(typeof null)      // "object"
console.log(typeof Symbol())  // "symbol"
console.log(typeof 123n)      // "bigint"`,
        verification: '使用了 typeof 检测数据类型',
        filePath: 'src/types.js',
        cognitiveLoad: 'low',
        dependsOn: ['js-1'],
        commonMistakes: [
         {
          'pattern': 'typeof null',
          'explanation': 'typeof null 返回 "object"（历史 bug）'
         },
         {
          'pattern': '===',
          'explanation': '类型比较推荐 === 避免隐式转换'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '用 typeof 检测',
          'verification': 'typeof',
          'hint': 'typeof 返回类型字符串',
          docLinks: [{title: 'MDN typeof', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof'}],
         },
         {
          'id': 'step-2',
          'title': '检测多种类型',
          'verification': 'typeof null',
          'hint': '检测 null 等特殊类型',
          docLinks: [{title: 'MDN typeof', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof'}],
         },
         {
          'id': 'step-3',
          'title': '打印结果',
          'verification': 'console.log',
          'hint': '打印每种类型的结果',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-3',
        number: 3,
        title: '函数声明',
        concept: '函数定义',
        difficulty: 'easy',
        task: '用三种方式定义函数',
        prerequisites: `<h4>🐍 函数定义方式</h4>
<pre><code>// 函数声明
function greet(name) {
  return "Hello, " + name
}

// 函数表达式
const greet = function(name) {
  return "Hello, " + name
}

// 箭头函数
const greet = (name) => "Hello, " + name
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>函数声明会被提升（hoisting）</li>
  <li>箭头函数没有自己的 this</li>
  <li>单行可省略大括号和 return</li>
</ul>`,
        conceptDetail: `步骤 1 — 函数声明
用 [function](定义函数的关键字) 关键字声明。

步骤 2 — 函数表达式
将函数赋值给变量。

步骤 3 — 箭头函数
ES6 箭头函数语法更简洁。`,
        contextCode: `// 三种函数定义方式参考
// 1. 函数声明（会提升）
function add(a, b) {
  return a + b
}

// 2. 函数表达式
const multiply = function(a, b) {
  return a * b
}

// 3. 箭头函数（简洁，无自己的 this）
const subtract = (a, b) => a - b
const square = x => x * x          // 单参数省略括号
const fn = () => { return 1 }      // 多行需大括号`,
        starterCode: `// 1. 用函数声明定义 add(a, b)
function add(???) {
  ???
}

// 2. 用函数表达式定义 multiply(a, b)
const multiply = function(???) {
  ???
}

// 3. 用箭头函数定义 subtract(a, b)
const subtract = ???
`,
        hints: [
          'function add(a, b) { return a + b }',
          'const multiply = function(a, b) { return a * b }',
          'const subtract = (a, b) => a - b'
        ],
        code: `function add(a, b) {
  return a + b
}

const multiply = function(a, b) {
  return a * b
}

const subtract = (a, b) => a - b

console.log(add(2, 3))       // 5
console.log(multiply(2, 3))  // 6
console.log(subtract(5, 2))  // 3`,
        verification: '使用了三种方式定义函数',
        filePath: 'src/functions.js',
        cognitiveLoad: 'low',
        dependsOn: ['js-2'],
        commonMistakes: [
         {
          'pattern': '() =>',
          'explanation': '箭头函数没有自己的 this'
         },
         {
          'pattern': 'return',
          'explanation': '箭头函数返回对象需要 ({})'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '定义函数',
          'verification': 'function',
          'hint': '用 function 关键字',
          docLinks: [{title: 'MDN 函数', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions'}],
         },
         {
          'id': 'step-2',
          'title': '添加参数',
          'verification': 'return',
          'hint': '函数体返回值',
          docLinks: [{title: 'MDN 函数', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions'}],
         },
         {
          'id': 'step-3',
          'title': '调用测试',
          'verification': 'console.log',
          'hint': '调用函数测试',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '将普通函数改箭头函数，对比 this 指向',
          'target': '理解函数与箭头函数区别'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-4',
        number: 4,
        title: '数组方法',
        concept: 'map / filter / reduce',
        difficulty: 'medium',
        task: '用数组高阶方法处理数据',
        prerequisites: `<h4>🐍 数组高阶方法</h4>
<pre><code>const numbers = [1, 2, 3, 4, 5]

// map - 转换每个元素
const doubled = numbers.map(n => n * 2)

// filter - 过滤元素
const evens = numbers.filter(n => n % 2 === 0)

// reduce - 归约计算
const sum = numbers.reduce((acc, n) => acc + n, 0)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>map</code> — 返回新数组，每个元素经过转换</li>
  <li><code>filter</code> — 返回新数组，只包含满足条件的元素</li>
  <li><code>reduce</code> — 归约为单个值</li>
</ul>`,
        conceptDetail: `步骤 1 — 用 map 转换数组
[map](遍历数组，返回新数组) 将每个元素乘以 2。

步骤 2 — 用 filter 过滤
[filter](过滤数组，返回满足条件的元素) 只保留偶数。

步骤 3 — 用 reduce 归约
[reduce](将数组归约为单个值) 计算总和。`,
        contextCode: `// map/filter/reduce 用法参考
const numbers = [1, 2, 3, 4, 5]

// map：转换每个元素，返回新数组
const doubled = numbers.map(n => n * 2)  // [2,4,6,8,10]

// filter：过滤元素，返回新数组
const evens = numbers.filter(n => n % 2 === 0)  // [2,4]

// reduce：归约为单个值
const sum = numbers.reduce((acc, n) => acc + n, 0)  // 15

// 链式调用
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 10)
  .reduce((a, b) => a + b, 0)  // 120`,
        starterCode: `const numbers = [1, 2, 3, 4, 5]

// 用 map 计算每个数的平方
const squares = ???

// 用 filter 筛选大于 3 的数
const bigNumbers = ???

// 用 reduce 计算所有数的乘积
const product = ???
`,
        hints: [
          'map: numbers.map(n => n * n)',
          'filter: numbers.filter(n => n > 3)',
          'reduce: numbers.reduce((acc, n) => acc * n, 1)'
        ],
        code: `const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(n => n * n)
console.log(squares)  // [1, 4, 9, 16, 25]

const bigNumbers = numbers.filter(n => n > 3)
console.log(bigNumbers)  // [4, 5]

const product = numbers.reduce((acc, n) => acc * n, 1)
console.log(product)  // 120`,
        verification: '使用了 map、filter、reduce 数组方法',
        filePath: 'src/arrays.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-3'],
        commonMistakes: [
         {
          'pattern': 'filter',
          'explanation': 'filter 返回新数组不修改原数组'
         },
         {
          'pattern': 'map',
          'explanation': 'map 必须有 return'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '准备数据',
          'verification': 'const',
          'hint': '定义数组',
          docLinks: [{title: 'MDN 数组方法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array'}],
         },
         {
          'id': 'step-2',
          'title': '链式操作',
          'verification': '.filter',
          'hint': '用 filter',
          docLinks: [{title: 'MDN 数组方法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array'}, {title: 'MDN Promise', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise'}],
         },
         {
          'id': 'step-3',
          'title': '转换数据',
          'verification': '.map',
          'hint': '用 map 转换',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': 'find',
          'description': 'find() 返回第一个匹配元素'
         }
        ],
        transferTasks: [
         {
          'task': '用 filter + map + reduce 组合处理数据',
          'target': '掌握数组链式操作'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-5',
        number: 5,
        title: '对象操作',
        concept: '对象解构',
        difficulty: 'medium',
        task: '用解构赋值提取对象属性',
        prerequisites: `<h4>🐍 对象解构</h4>
<pre><code>const user = { name: "Alice", age: 25, city: "Beijing" }

// 解构赋值
const { name, age } = user
console.log(name)  // "Alice"

// 重命名
const { name: userName } = user

// 默认值
const { role = "guest" } = user
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>解构提取对象属性到变量</li>
  <li>可以重命名变量</li>
  <li>可以设置默认值</li>
</ul>`,
        conceptDetail: `步骤 1 — 解构对象属性
用花括号 { } 从对象中提取属性。

步骤 2 — 重命名变量
冒号后跟新变量名。

步骤 3 — 设置默认值
等号后跟默认值。`,
        contextCode: `// 对象解构语法参考
const user = { name: "Alice", age: 25, city: "Beijing" }

// 基本解构
const { name, age } = user     // name="Alice", age=25

// 重命名
const { name: userName } = user  // userName="Alice"

// 默认值
const { role = "guest" } = user  // role="guest"

// 嵌套解构
const { address: { city } } = { address: { city: "BJ" } }

// 剩余属性
const { name: n, ...rest } = user  // rest={age:25, city:"BJ"}`,
        starterCode: `const user = {
  name: "Alice",
  age: 25,
  city: "Beijing",
  hobby: "编程"
}

// 解构提取 name 和 age
// 重命名 hobby 为 userHobby
// 设置默认值 role = "user"
`,
        hints: [
          'const { name, age } = user',
          'const { hobby: userHobby } = user',
          'const { role = "user" } = user'
        ],
        code: `const user = {
  name: "Alice",
  age: 25,
  city: "Beijing",
  hobby: "编程"
}

const { name, age } = user
const { hobby: userHobby } = user
const { role = "user" } = user

console.log(name)        // "Alice"
console.log(userHobby)   // "编程"
console.log(role)        // "user"`,
        verification: '使用了解构赋值提取对象属性',
        filePath: 'src/objects.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-4'],
        commonMistakes: [
         {
          'pattern': 'const { name } = user',
          'explanation': '解构不存在的属性得到 undefined'
         },
         {
          'pattern': 'const { name: userName }',
          'explanation': '冒号用于重命名，非类型标注'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '解构对象',
          'verification': 'const {',
          'hint': '从 user 对象提取 name 和 age',
          docLinks: [{title: 'MDN 解构赋值', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'}],
         },
         {
          'id': 'step-2',
          'title': '重命名变量',
          'verification': 'hobby:',
          'hint': '用冒号重命名 hobby→userHobby',
          docLinks: [{title: 'MDN let/const', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let'}, {title: 'MDN 解构赋值', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'}],
         },
         {
          'id': 'step-3',
          'title': '默认值',
          'verification': 'console.log',
          'hint': '打印结果验证',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      }
    ]
  },
  {
    id: 'es6-features',
    name: '阶段二：ES6+ 特性',
    description: '箭头函数、模板字符串、展开运算符等现代语法',
    levels: [
      {
        id: 'js-6',
        number: 6,
        title: '箭头函数',
        concept: 'Arrow Functions',
        difficulty: 'medium',
        task: '用箭头函数简化回调代码',
        prerequisites: `<h4>🐍 箭头函数</h4>
<pre><code>// 传统函数
function add(a, b) {
  return a + b
}

// 箭头函数
const add = (a, b) => a + b

// 单参数可省略括号
const double = x => x * 2

// 无参数用空括号
const greet = () => "Hello"
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>箭头函数没有自己的 <code>this</code></li>
  <li>单行表达式可省略 <code>{}</code> 和 <code>return</code></li>
  <li>适合回调函数场景</li>
</ul>`,
        conceptDetail: `步骤 1 — 基本箭头函数
箭头函数用 => 连接参数和函数体。

步骤 2 — 单参数简化
只有一个参数时可以省略括号。

步骤 3 — 在回调中使用
数组方法的回调最适合用箭头函数。`,
        contextCode: `// 箭头函数语法参考
const add = (a, b) => a + b
const square = x => x * x
const fn = () => 42

// 多行函数体
const process = (a, b) => {
  const sum = a + b
  return sum * 2
}

// 回调中的应用
[1, 2, 3].map(n => n * 2)
arr.forEach(item => console.log(item))
arr.filter(n => n > 10)

// 注意：箭头函数没有自己的 this
const obj = {
  name: "test",
  greet: () => this.name  // this 不指向 obj`,
        starterCode: `const numbers = [1, 2, 3, 4, 5]

// 用箭头函数的 map 将每个数乘以 2
const doubled = ???

// 用箭头函数的 filter 筛选偶数
const evens = ???
`,
        hints: [
          'map(n => n * 2) 单行箭头函数',
          'filter(n => n % 2 === 0)',
          '省略 function 关键字和大括号'
        ],
        code: `const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(n => n * 2)
console.log(doubled)  // [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0)
console.log(evens)  // [2, 4]`,
        verification: '使用了箭头函数简化代码',
        filePath: 'src/arrow.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-5'],
        commonMistakes: [
         {
          'pattern': '() =>',
          'explanation': '箭头函数没有自己的 this'
         },
         {
          'pattern': 'return',
          'explanation': '箭头函数返回对象需要 ({})'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '箭头函数',
          'verification': '=>',
          'hint': '用 => 定义箭头函数',
          docLinks: [{title: 'MDN 函数', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions'}, {title: 'MDN 箭头函数', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions'}],
         },
         {
          'id': 'step-2',
          'title': '回调中使用',
          'verification': '.map(',
          'hint': '数组方法回调中使用箭头函数',
          docLinks: [{title: 'MDN 箭头函数', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions'}],
         },
         {
          'id': 'step-3',
          'title': '验证输出',
          'verification': 'console.log',
          'hint': '打印结果验证',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': 'function',
          'description': '传统 function 有自己的 this，适合对象方法'
         }
        ],
        transferTasks: [
         {
          'task': '将普通函数改箭头函数，对比 this 指向',
          'target': '理解函数与箭头函数区别'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-7',
        number: 7,
        title: '模板字符串',
        concept: 'Template Literals',
        difficulty: 'easy',
        task: '用模板字符串构建动态文本',
        prerequisites: `<h4>🐍 模板字符串</h4>
<p>用反引号包裹，支持多行和插值：</p>
<pre><code>const name = "Alice"
const greeting = \`Hello, \${name}!\`

// 多行字符串
const html = \`
  &lt;div&gt;
    &lt;p&gt;\${name}&lt;/p&gt;
  &lt;/div&gt;
\`
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>\${}</code> — 插值表达式</li>
  <li>支持多行文本</li>
  <li>比字符串拼接更清晰</li>
</ul>`,
        conceptDetail: `步骤 1 — 使用反引号
模板字符串用反引号包裹。

步骤 2 — 插入变量
用 ${'${变量名}'} 插入变量值。

步骤 3 — 多行文本
模板字符串可以跨越多行。`,
        contextCode: `// 模板字符串语法参考
const name = "Alice"
const age = 25

// 插值表达式
const msg = \`Hello, \${name}!\`           // "Hello, Alice!"
const info = \`年龄：\${age + 1}\`         // "年龄：26"

// 多行字符串
const html = \`
  <div>
    <h1>\${name}</h1>
    <p>Age: \${age}</p>
  </div>
\`

// 表达式
const list = \`<ul>\${items.map(i => \`<li>\${i}</li>\`).join("")}\` 

// 标签模板（高级）
const result = String.raw\`C:\\Users\``,
        starterCode: `const user = { name: "Alice", age: 25 }
const items = ["苹果", "香蕉", "橙子"]

// 用模板字符串构建用户信息字符串
const userInfo = ???

// 用模板字符串和 map 构建 HTML 列表
const listHtml = ???
`,
        hints: [
          '`用户：${user.name}，年龄：${user.age}`',
          'items.map(item => `<li>${item}</li>`).join("")',
          '用反引号包裹字符串'
        ],
        code: `const user = { name: "Alice", age: 25 }
const items = ["苹果", "香蕉", "橙子"]

const userInfo = \`用户：\${user.name}，年龄：\${user.age}\`
console.log(userInfo)

const listHtml = \`&lt;ul&gt;\${items.map(item => \`&lt;li&gt;\${item}&lt;/li&gt;\`).join("")}&lt;/ul&gt;\`
console.log(listHtml)`,
        verification: '使用了模板字符串构建动态文本',
        filePath: 'src/template.js',
        cognitiveLoad: 'low',
        dependsOn: ['js-6'],
        commonMistakes: [
         {
          'pattern': '用引号代替',
          'explanation': '拼接字符串用模板字符串更清晰'
         },
         {
          'pattern': '忘记转义',
          'explanation': '模板字符串中特殊字符需转义'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '使用反引号',
          'verification': 'userInfo =',
          'hint': '用模板字符串构建用户信息',
          docLinks: [{title: 'MDN 模板字符串', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals'}],
         },
         {
          'id': 'step-2',
          'title': '插入变量',
          'verification': '.map(',
          'hint': '用 map 和模板字符串渲染列表',
          docLinks: [{title: 'MDN let/const', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let'}, {title: 'MDN 模板字符串', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals'}],
         },
         {
          'id': 'step-3',
          'title': '构建 HTML',
          'verification': '.map(',
          'hint': '结合 map 渲染列表',
          docLinks: [{title: 'MDN 模板字符串', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals'}, {title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-8',
        number: 8,
        title: '展开运算符',
        concept: 'Spread Operator',
        difficulty: 'medium',
        task: '用展开运算符合并数组和对象',
        prerequisites: `<h4>🐍 展开运算符</h4>
<pre><code>// 展开数组
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]  // [1, 2, 3, 4, 5]

// 展开对象
const obj1 = { a: 1, b: 2 }
const obj2 = { ...obj1, c: 3 }  // { a: 1, b: 2, c: 3 }
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>...</code> — 展开运算符</li>
  <li>用于数组/对象的浅拷贝</li>
  <li>用于合并数组/对象</li>
</ul>`,
        conceptDetail: `步骤 1 — 展开数组
用 ... 展开数组元素。

步骤 2 — 展开对象
用 ... 展开对象属性。

步骤 3 — 合并与覆盖
后面的属性会覆盖前面的同名属性。`,
        contextCode: `// 展开运算符用法参考
// 数组展开
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]     // [1,2,3,4,5]
const copy = [...arr1]           // 浅拷贝

// 对象展开
const obj1 = { a: 1, b: 2 }
const obj2 = { ...obj1, c: 3 }  // {a:1, b:2, c:3}
const merged = { ...obj1, ...obj2 }  // 后面覆盖前面

// 函数参数
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
sum(1, 2, 3)  // 6

// 浅拷贝
const arrCopy = [...original]
const objCopy = { ...original }`,
        starterCode: `const defaults = { color: "red", size: "medium", theme: "light" }
const userPrefs = { color: "blue", theme: "dark" }

// 用展开运算符合并 defaults 和 userPrefs
const settings = ???
console.log(settings)
// { color: "blue", size: "medium", theme: "dark" }
`,
        hints: [
          'const settings = { ...defaults, ...userPrefs }',
          '展开运算符合并对象属性',
          '后面的同名属性会覆盖前面的'
        ],
        code: `const defaults = { color: "red", size: "medium", theme: "light" }
const userPrefs = { color: "blue", theme: "dark" }

const settings = { ...defaults, ...userPrefs }
console.log(settings)
// { color: "blue", size: "medium", theme: "dark" }`,
        verification: '使用了展开运算符合并对象',
        filePath: 'src/spread.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-7'],
        commonMistakes: [
         {
          'pattern': '浅拷贝',
          'explanation': '展开运算符是浅拷贝，嵌套对象仍共享引用'
         },
         {
          'pattern': '修改原对象',
          'explanation': '展开运算符不修改原对象，返回新对象'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '数组展开',
          'verification': '...',
          'hint': '用 ... 展开数组',
          docLinks: [{title: 'MDN 数组方法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array'}, {title: 'MDN 展开语法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax'}],
         },
         {
          'id': 'step-2',
          'title': '对象展开',
          'verification': '...defaults',
          'hint': '展开对象合并到新对象',
          docLinks: [{title: 'MDN 展开语法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax'}],
         },
         {
          'id': 'step-3',
          'title': '验证合并',
          'verification': 'console.log',
          'hint': '打印合并结果',
          docLinks: [{title: 'MDN 展开语法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-9',
        number: 9,
        title: '解构赋值',
        concept: 'Destructuring',
        difficulty: 'medium',
        task: '用解构赋值简化函数参数',
        prerequisites: `<h4>🐍 解构赋值进阶</h4>
<pre><code>// 函数参数解构
function greet({ name, age = 0 }) {
  return \`\${name} is \${age}\`
}

// 嵌套解构
const { a: { b } } = { a: { b: 1 } }

// 数组解构
const [first, , third] = [1, 2, 3]
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>函数参数可以直接解构</li>
  <li>支持嵌套解构</li>
  <li>支持默认值</li>
</ul>`,
        conceptDetail: `步骤 1 — 函数参数解构
直接在参数位置解构对象。

步骤 2 — 嵌套解构
处理嵌套的对象结构。

步骤 3 — 数组解构
按位置提取数组元素。`,
        contextCode: `// 解构赋值语法参考
// 数组解构
const [a, b, c] = [1, 2, 3]     // a=1, b=2, c=3
const [first, ...rest] = [1,2,3] // first=1, rest=[2,3]
const [x = 10] = []              // x=10（默认值）

// 跳过元素
const [, second] = [1, 2, 3]    // second=2

// 函数参数解构
function greet({ name, age = 0 }) {
  return \`\${name} is \${age}\`
}
greet({ name: "Alice", age: 25 })

// 嵌套解构
const { a: { b } } = { a: { b: 1 } }  // b=1`,
        starterCode: `// 定义一个函数，参数用解构赋值提取 name, age, city
function createUser({ ??? }) {
  ???
}

const user = { name: "Alice", age: 25, city: "Beijing" }
console.log(createUser(user))
// "Alice, 25岁, 来自Beijing"
`,
        hints: [
          'function createUser({ name, age, city })',
          '直接在参数中解构对象',
          '函数体内直接使用 name、age、city'
        ],
        code: `function createUser({ name, age, city }) {
  return \`\${name}, \${age}岁, 来自\${city}\`
}

const user = { name: "Alice", age: 25, city: "Beijing" }
console.log(createUser(user))
// "Alice, 25岁, 来自Beijing"`,
        verification: '使用了解构赋值简化函数参数',
        filePath: 'src/destructuring.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-8'],
        commonMistakes: [
         {
          'pattern': '默认值',
          'explanation': '解构可以给不存在的属性设置默认值'
         },
         {
          'pattern': '嵌套解构',
          'explanation': '深层嵌套的解构可读性差，建议拆开'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '参数解构',
          'verification': 'function createUser({',
          'hint': '在参数位置直接解构对象',
          docLinks: [{title: 'MDN 函数', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions'}, {title: 'MDN 解构赋值', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'}],
         },
         {
          'id': 'step-2',
          'title': '构建返回',
          'verification': '`${',
          'hint': '用模板字符串拼接结果',
          docLinks: [{title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
         },
         {
          'id': 'step-3',
          'title': '调用测试',
          'verification': 'console.log',
          'hint': '调用函数验证输出',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      }
    ]
  },
  {
    id: 'async-js',
    name: '阶段三：异步编程',
    description: 'Promise、async/await、错误处理',
    levels: [
      {
        id: 'js-10',
        number: 10,
        title: 'Promise 基础',
        concept: 'Promise',
        difficulty: 'medium',
        task: '用 Promise 封装异步操作',
        prerequisites: `<h4>🐍 Promise</h4>
<pre><code>const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功")
    // reject("失败")
  }, 1000)
})

promise.then(data => console.log(data))
       .catch(err => console.error(err))
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>resolve</code> — 成功回调</li>
  <li><code>reject</code> — 失败回调</li>
  <li><code>then/catch</code> — 处理结果</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 Promise
new Promise((resolve, reject) => {...}) 创建异步容器。

步骤 2 — 处理结果
then 处理成功，catch 处理失败。

步骤 3 — 链式调用
Promise 支持链式 then 调用。`,
        contextCode: `// Promise 用法参考
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功")   // 或 reject("失败")
  }, 1000)
})

promise
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("完成"))

// 链式调用
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))

// 并行
Promise.all([p1, p2, p3]).then(([r1, r2, r3]) => {...})
Promise.race([p1, p2]).then(winner => {...})`,
        starterCode: `// 定义 fetchUser 函数，返回 Promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // id > 0 时 resolve 用户对象
      // 否则 reject 错误信息
      ???
    }, 500)
  })
}

fetchUser(1).then(user => console.log(user))
fetchUser(-1).catch(err => console.error(err))
`,
        hints: [
          'return new Promise((resolve, reject) => {...})',
          '成功时 resolve(data)',
          '失败时 reject(error)'
        ],
        code: `function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "User" + id })
      } else {
        reject("无效 ID")
      }
    }, 500)
  })
}

fetchUser(1).then(user => console.log(user))
fetchUser(-1).catch(err => console.error(err))`,
        verification: '使用了 Promise 封装异步操作',
        filePath: 'src/promise.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-9'],
        commonMistakes: [
         {
          'pattern': 'await',
          'explanation': 'await 必须在 async 函数内'
         },
         {
          'pattern': 'catch',
          'explanation': '异步操作用 try/catch 处理错误'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建 Promise',
          'verification': 'return new Promise(',
          'hint': '用 new Promise 创建异步容器',
          docLinks: [{title: 'MDN Promise', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise'}],
         },
         {
          'id': 'step-2',
          'title': '处理结果',
          'verification': 'resolve(',
          'hint': '成功时 resolve，失败时 reject',
          docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         },
         {
          'id': 'step-3',
          'title': '链式调用',
          'verification': '.then(',
          'hint': 'then 接收成功结果',
          docLinks: [{title: 'MDN 数组方法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array'}, {title: 'MDN Promise', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise'}],
         }
        ],
        variations: [
         {
          'name': '.then/catch',
          'description': '.then() 链式是 async/await 的替代写法'
         }
        ],
        transferTasks: [
         {
          'task': '模拟 API 请求，用 async/await 处理',
          'target': '掌握异步编程模式'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-11',
        number: 11,
        title: 'async/await',
        concept: 'Async/Await',
        difficulty: 'medium',
        task: '用 async/await 重写 Promise 代码',
        prerequisites: `<h4>🐍 async/await</h4>
<pre><code>async function getData() {
  try {
    const user = await fetchUser(1)
    const posts = await fetchPosts(user.id)
    return { user, posts }
  } catch (err) {
    console.error(err)
  }
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>async</code> — 声明异步函数</li>
  <li><code>await</code> — 等待 Promise 结果</li>
  <li>让异步代码看起来像同步代码</li>
</ul>`,
        conceptDetail: `步骤 1 — 声明 async 函数
async 关键字声明异步函数。

步骤 2 — 使用 await
await 等待 Promise 完成，返回结果。

步骤 3 — 错误处理
用 try-catch 捕获异步错误。`,
        contextCode: `// async/await 语法参考
async function fetchData() {
  try {
    const user = await fetchUser(1)     // 等待 Promise
    const posts = await fetchPosts(user.id)
    return { user, posts }
  } catch (err) {
    console.error("错误:", err)
  }
}

// 调用异步函数
fetchData().then(result => console.log(result))

// 并行执行
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
])

// for await（异步迭代）
for await (const chunk of readableStream) {...}`,
        starterCode: `// 用 async/await 重写异步操作
async function loadUserPosts() {
  try {
    // 用 await 调用 fetchUser(1)
    ???
    console.log("用户:", user)
  } catch (err) {
    console.error("错误:", err)
  }
}

loadUserPosts()
`,
        hints: [
          'async function loadUserPosts() { ... }',
          'const user = await fetchUser(1)',
          'try-catch 处理错误'
        ],
        code: `async function loadUserPosts() {
  try {
    const user = await fetchUser(1)
    console.log("用户:", user)
  } catch (err) {
    console.error("错误:", err)
  }
}

loadUserPosts()`,
        verification: '使用了 async/await 处理异步操作',
        filePath: 'src/async.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-10'],
        commonMistakes: [
         {
          'pattern': 'await',
          'explanation': 'await 必须在 async 函数内'
         },
         {
          'pattern': 'catch',
          'explanation': '异步操作用 try/catch 处理错误'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '声明 async',
          'verification': 'async function',
          'hint': 'async 声明异步函数',
          docLinks: [{title: 'MDN let/const', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let'}, {title: 'MDN async/await', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function'}],
         },
         {
          'id': 'step-2',
          'title': '使用 await',
          'verification': 'await',
          'hint': 'await 等待 Promise 完成',
          docLinks: [{title: 'MDN async/await', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function'}],
         },
         {
          'id': 'step-3',
          'title': '错误处理',
          'verification': 'catch',
          'hint': 'try-catch 捕获异步错误',
          docLinks: [{title: 'MDN try/catch', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch'}],
         }
        ],
        variations: [
         {
          'name': '.then/catch',
          'description': '.then() 链式是 async/await 的替代写法'
         }
        ],
        transferTasks: [
         {
          'task': '模拟 API 请求，用 async/await 处理',
          'target': '掌握异步编程模式'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-12',
        number: 12,
        title: '错误处理',
        concept: 'try/catch',
        difficulty: 'medium',
        task: '实现健壮的错误处理机制',
        prerequisites: `<h4>🐍 错误处理</h4>
<pre><code>try {
  const data = JSON.parse(invalidJson)
} catch (err) {
  console.error("解析失败:", err.message)
} finally {
  console.log("无论成功失败都执行")
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>try</code> — 尝试执行代码</li>
  <li><code>catch</code> — 捕获错误</li>
  <li><code>finally</code> — 始终执行</li>
</ul>`,
        conceptDetail: `步骤 1 — 包裹可能出错的代码
try 块中放可能抛出异常的代码。

步骤 2 — 捕获并处理错误
catch 块接收错误对象。

步骤 3 — 清理资源
finally 块用于释放资源。`,
        contextCode: `// try/catch 语法参考
try {
  const data = JSON.parse(invalidJson)
  // 可能出错的代码
} catch (err) {
  console.error("错误:", err.message)
} finally {
  console.log("始终执行")
}

// 抛出错误
throw new Error("自定义错误")

// 自定义错误类
class AppError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

try {
  throw new AppError("未登录", 401)
} catch (err) {
  if (err instanceof AppError) {
    console.log(err.code)  // 401
  }
}`,
        starterCode: `// 定义安全的 JSON 解析函数
function safeJsonParse(jsonStr) {
  try {
    // 尝试解析 JSON
    ???
  } catch (err) {
    console.error("解析错误:", err.message)
    return null
  }
}

console.log(safeJsonParse('{"a":1}'))  // {a: 1}
console.log(safeJsonParse('invalid'))   // null
`,
        hints: [
          'try { return JSON.parse(jsonStr) }',
          'catch (err) { return null }',
          'finally 用于清理（可选）'
        ],
        code: `function safeJsonParse(jsonStr) {
  try {
    return JSON.parse(jsonStr)
  } catch (err) {
    console.error("解析错误:", err.message)
    return null
  }
}

console.log(safeJsonParse('{"a":1}'))  // {a: 1}
console.log(safeJsonParse('invalid'))   // null`,
        verification: '使用了 try-catch 处理错误',
        filePath: 'src/error-handling.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-11'],
        commonMistakes: [
         {
          'pattern': 'catch 不处理',
          'explanation': 'catch 块不能为空，至少 console.error 记录错误'
         },
         {
          'pattern': 'finally',
          'explanation': 'finally 确保无论是否出错都执行清理代码'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': 'try 包裹',
          'verification': 'try {',
          'hint': '将可能出错的代码放入 try 块',
          docLinks: [{title: 'MDN try/catch', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch'}],
         },
         {
          'id': 'step-2',
          'title': '捕获错误',
          'verification': 'catch',
          'hint': 'catch 捕获错误对象',
          docLinks: [{title: 'MDN try/catch', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch'}],
         },
         {
          'id': 'step-3',
          'title': '安全返回',
          'verification': 'return null',
          'hint': '失败时返回默认值',
          docLinks: [{title: 'MDN try/catch', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      }
    ]
  },
  {
    id: 'dom-basics',
    name: '阶段四：DOM 操作',
    description: '元素选择、事件监听、DOM 遍历',
    levels: [
      {
        id: 'js-13',
        number: 13,
        title: '元素选择',
        concept: 'querySelector',
        difficulty: 'easy',
        task: '用 querySelector 获取并修改 DOM 元素',
        prerequisites: `<h4>🐍 DOM 元素选择</h4>
<pre><code>// 选择单个元素
const el = document.querySelector('.my-class')
const btn = document.querySelector('#submit-btn')

// 选择多个元素
const items = document.querySelectorAll('li')
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>querySelector</code> — 用 CSS 选择器选择元素</li>
  <li><code>querySelectorAll</code> — 选择所有匹配元素</li>
  <li>返回 NodeList 或单个元素</li>
</ul>`,
        conceptDetail: `步骤 1 — 用选择器获取元素
querySelector 使用 CSS 选择器语法。

步骤 2 — 修改元素内容
textContent 修改文本，style 修改样式。

步骤 3 — 遍历多个元素
querySelectorAll 返回可遍历的 NodeList。`,
        contextCode: `// querySelector 用法参考
// 选择单个元素
const el = document.querySelector('.my-class')
const btn = document.querySelector('#submit-btn')
const div = document.querySelector('div.container')

// 选择多个元素
const items = document.querySelectorAll('li')
const redItems = document.querySelectorAll('.item.active')

// 修改元素
el.textContent = "新文本"
el.innerHTML = "<b>加粗</b>"
el.style.color = "red"
el.classList.add("active")
el.classList.remove("hidden")
el.setAttribute("data-id", "123")

// 遍历
items.forEach((item, index) => {
  console.log(index, item.textContent)
})`,
        starterCode: `// 用 querySelector 获取 .title 元素并修改文本
const title = ???

// 用 querySelectorAll 获取所有 li 并遍历修改
const items = ???
`,
        hints: [
          'document.querySelector(".title").textContent = "新标题"',
          'document.querySelectorAll("li") 返回所有 li',
          'forEach 遍历并修改每个元素'
        ],
        code: `const title = document.querySelector('.title')
title.textContent = '新标题'
title.style.color = 'blue'

const items = document.querySelectorAll('li')
items.forEach((item, i) => {
  item.textContent = \`项目\${i + 1}\`
})`,
        verification: '使用了 querySelector 获取并修改 DOM 元素',
        filePath: 'src/dom-select.js',
        cognitiveLoad: 'low',
        dependsOn: ['js-12'],
        commonMistakes: [
         {
          'pattern': '.querySelector',
          'explanation': 'querySelector 选择器需加 . 或 # 前缀'
         },
         {
          'pattern': 'querySelectorAll',
          'explanation': 'querySelectorAll 返回 NodeList，可用 forEach 遍历'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '获取元素',
          'verification': 'document.querySelector',
          'hint': '用 querySelector 获取元素',
          docLinks: [{title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         },
         {
          'id': 'step-2',
          'title': '修改内容',
          'verification': 'textContent',
          'hint': '用 textContent 或 innerHTML 修改',
          docLinks: [{title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         },
         {
          'id': 'step-3',
          'title': '批量遍历',
          'verification': 'querySelectorAll',
          'hint': '用 querySelectorAll 获取批量元素',
          docLinks: [{title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': 'getElementById',
          'description': 'getElementById 用 id 选择，比 querySelector 稍快'
         }
        ],
        transferTasks: [
         {
          'task': '实现一个可折叠的手风琴组件，用 querySelector/classList 切换显隐',
          'target': '掌握 DOM 操作综合应用'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-14',
        number: 14,
        title: '事件监听',
        concept: 'addEventListener',
        difficulty: 'medium',
        task: '实现一个带事件委托的待办列表',
        prerequisites: `<h4>🐍 事件监听</h4>
<pre><code>const btn = document.querySelector('#btn')
btn.addEventListener('click', (e) => {
  console.log('点击了', e.target)
})
</code></pre>

<h4>🐍 事件委托</h4>
<pre><code>// 在父元素上监听，处理子元素事件
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done')
  }
})
</code></pre>`,
        conceptDetail: `步骤 1 — 给按钮添加点击事件
addEventListener 绑定事件处理函数。

步骤 2 — 在回调中创建新元素
createElement 创建 DOM 元素。

步骤 3 — 使用事件委托
在父元素上监听，处理动态添加的子元素。`,
        contextCode: `// addEventListener 用法参考
const btn = document.querySelector('#btn')

// 基本事件
btn.addEventListener('click', (e) => {
  console.log('点击了', e.target)
})

// 移除事件
const handler = () => console.log('click')
btn.addEventListener('click', handler)
btn.removeEventListener('click', handler)

// 事件委托
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done')
  }
})

// 常用事件：click, input, submit, keydown, mouseenter
// e.preventDefault() 阻止默认行为
// e.stopPropagation() 阻止冒泡`,
        starterCode: `const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

// 给按钮添加点击事件，创建新的 li 添加到列表
document.getElementById('add-btn').addEventListener(???)

// 在 list 上使用事件委托，点击 li 切换 done 类
list.addEventListener(???)
`,
        hints: [
          'document.getElementById("add-btn").addEventListener("click", ...)',
          'createElement("li") 创建元素',
          'list.addEventListener("click", e => e.target.classList.toggle("done"))'
        ],
        code: `const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

document.getElementById('add-btn').addEventListener('click', () => {
  const text = input.value.trim()
  if (text) {
    const li = document.createElement('li')
    li.textContent = text
    list.appendChild(li)
    input.value = ''
  }
})

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done')
  }
})`,
        verification: '使用了事件监听和事件委托',
        filePath: 'src/dom-events.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-13'],
        commonMistakes: [
         {
          'pattern': 'addEventListener',
          'explanation': 'addEventListener 第三个参数可传 { passive: true } 优化滚动'
         },
         {
          'pattern': '事件委托',
          'explanation': '用事件委托代替逐个绑定，适合动态列表'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '绑定事件',
          'verification': "addEventListener('click'",
          'hint': '给按钮添加 click 事件',
          docLinks: [{title: 'MDN 事件', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener'}],
         },
         {
          'id': 'step-2',
          'title': '创建元素',
          'verification': 'createElement(',
          'hint': '创建 li 添加到列表',
          docLinks: [{title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         },
         {
          'id': 'step-3',
          'title': '事件委托',
          'verification': 'e.target',
          'hint': '用事件委托处理子元素点击',
          docLinks: [{title: 'MDN 事件', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      },
      {
        id: 'js-15',
        number: 15,
        title: '动态创建元素',
        concept: 'createElement / appendChild',
        difficulty: 'medium',
        task: '用 JavaScript 动态构建一个卡片列表',
        prerequisites: `<h4>🐍 创建 DOM 元素</h4>
<pre><code>// 创建元素
const div = document.createElement('div')
div.textContent = 'Hello'
div.className = 'card'

// 添加到页面
document.body.appendChild(div)

// 插入到指定位置
parent.insertBefore(newChild, referenceChild)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>createElement</code> — 创建新元素</li>
  <li><code>appendChild</code> — 添加子元素</li>
  <li><code>innerHTML</code> — 设置 HTML 内容</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建元素节点
createElement 创建新的 DOM 元素。

步骤 2 — 设置属性和内容
textContent、className、style 设置属性。

步骤 3 — 添加到文档树
appendChild 将元素添加到父元素。`,
        contextCode: `// createElement/appendChild 用法参考
// 创建元素
const div = document.createElement('div')
div.textContent = 'Hello'
div.className = 'card'
div.style.color = 'blue'

// 添加到页面
document.body.appendChild(div)

// 插入到指定位置
parent.insertBefore(newChild, referenceChild)

// 批量创建
users.forEach(user => {
  const card = document.createElement('div')
  card.innerHTML = \`
    <h3>\${user.name}</h3>
    <p>年龄: \${user.age}</p>
  \`
  container.appendChild(card)
})

// 替换/删除
parent.replaceChild(newChild, oldChild)
parent.removeChild(child)`,
        starterCode: `const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]

const container = document.getElementById('container')

// 遍历 users，用 createElement 创建 div 卡片
// 设置 className、innerHTML，用 appendChild 添加到 container
`,
        hints: [
          'document.createElement("div") 创建 div',
          'div.className = "card" 设置类名',
          'container.appendChild(card) 添加到容器'
        ],
        code: `const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]

const container = document.getElementById('container')

users.forEach(user => {
  const card = document.createElement('div')
  card.className = 'card'
  card.innerHTML = \`&lt;h3&gt;\${user.name}&lt;/h3&gt;&lt;p&gt;年龄: \${user.age}&lt;/p&gt;\`
  container.appendChild(card)
})`,
        verification: '使用了 createElement 动态创建 DOM 元素',
        filePath: 'src/dom-create.js',
        cognitiveLoad: 'medium',
        dependsOn: ['js-14'],
        commonMistakes: [
         {
          'pattern': 'innerHTML',
          'explanation': 'innerHTML 有 XSS 风险，textContent 优先'
         },
         {
          'pattern': 'appendChild',
          'explanation': '频繁 appendChild 可用 DocumentFragment 优化'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建元素',
          'verification': 'createElement(',
          'hint': '用 createElement 创建 div',
          docLinks: [{title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         },
         {
          'id': 'step-2',
          'title': '设置内容',
          'verification': '.className',
          'hint': '用 className 和 innerHTML 设置',
          docLinks: [{title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         },
         {
          'id': 'step-3',
          'title': '添加到 DOM',
          'verification': 'appendChild(',
          'hint': '用 appendChild 添加到容器',
          docLinks: [{title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
      }
    ]
  }
,
{
    id: 'blog-project',
    name: '阶段五：博客项目实战',
    description: '综合运用 JavaScript 技能，从零搭建纯前端博客应用',
    levels: [
            {
              id: 'js-16',
              number: 16,
              type: 'project',
              project: 'blog',
              projectModule: '项目搭建',
              title: '博客项目结构',
              concept: 'HTML/CSS/JS 项目组织',
              difficulty: 'easy',
              task: '搭建博客项目结构：index.html（入口）、styles/（样式）、js/（模块）、articles/（文章数据）',
              prerequisites: '<h4>📚 纯前端项目结构</h4><p>模块化 JS 用 <code>&lt;script type="module"&gt;</code> 引入，CSS 按组件拆分文件。</p>',
              conceptDetail: 'ES Module 使用 import/export 语法。type="module" 启用模块模式。DOMContentLoaded 事件确保 DOM 就绪。',
              contextCode: '',
              hints: [
                'index.html 引入 <script type="module" src="js/app.js">',
                'js/ 目录下创建 components/ 和 utils/ 子目录',
                'articles.js 定义博客文章数据数组'
              ],
              code: '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>我的博客</title>\n  <link rel="stylesheet" href="styles/main.css">\n</head>\n<body>\n  <header id="header"></header>\n  <main id="content"></main>\n  <footer id="footer"></footer>\n  <script type="module" src="js/app.js"></script>\n</body>\n</html>',
              verification: '项目结构清晰，使用 ES Module 组织 JS 代码',
              filePath: 'index.html',
              projectFiles: {
                'index.html': '',
                'styles/main.css': '',
                'js/app.js': '',
                'js/components/header.js': '',
                'js/components/footer.js': '',
                'js/data/articles.js': ''
              },
              cognitiveLoad: 'low',
              dependsOn: ['js-15'],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '创建 HTML 结构',
                  'verification': 'index.html',
                  'hint': '编写 HTML 入口文件骨架',
                 docLinks: [{title: 'MDN 模板字符串', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals'}, {title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                },
                {
                  'id': 'step-2',
                  'title': '创建目录结构',
                  'verification': 'js/components',
                  'hint': '在 js/ 下创建 components/ 目录',
                 docLinks: [{title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                },
                {
                  'id': 'step-3',
                  'title': '创建数据文件',
                  'verification': 'articles.js',
                  'hint': '定义包含文章数据的数组',
                 docLinks: [{title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                }
              ],

              variations: [
                {
                  name: 'SPA 框架',
                  description: 'Vue/React 更适合大型博客'
                }
              ],
              transferTasks: [
                {
                  task: '添加 RSS Feed 支持',
                  target: '了解博客生态标准'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            },
            {
              id: 'js-17',
              number: 17,
              type: 'project',
              project: 'blog',
              projectModule: '文章渲染',
              title: '文章列表渲染',
              concept: 'DOM 操作',
              difficulty: 'medium',
              task: '从数据数组渲染文章列表：标题、摘要、日期、标签，支持点击进入详情',
              prerequisites: '<h4>📚 DOM 创建元素</h4><p><code>document.createElement()</code> 创建元素，<code>element.textContent</code> 设置文本，<code>element.addEventListener()</code> 绑定事件。</p>',
              conceptDetail: 'createElement 创建新元素。appendChild 添加子节点。textContent 比 innerHTML 更安全。事件委托利用事件冒泡。',
              contextCode: '',
              hints: [
                'articles.map(a => createArticleCard(a)) 生成卡片数组',
                'forEach(card => container.appendChild(card)) 添加到容器',
                '点击卡片用 location.hash = "#/article/"+id 实现路由'
              ],
              code: 'import { articles } from \'../data/articles.js\'\n\nexport function renderArticleList(container) {\n  container.innerHTML = \'\'\n  articles.forEach(article => {\n    const card = document.createElement(\'article\')\n    card.className = \'article-card\'\n    card.innerHTML = `\n      <h2>${article.title}</h2>\n      <p class="meta">${article.date} · ${article.tags.join(\', \')}</p>\n      <p>${article.summary}</p>\n    `\n    card.addEventListener(\'click\', () => {\n      window.location.hash = `#/article/${article.id}`\n    })\n    container.appendChild(card)\n  })\n}',
              verification: '从数据数组渲染文章列表，点击跳转详情页',
              filePath: 'js/components/articleList.js',
              projectFiles: {
                'js/components/articleList.js': '',
                'js/components/articleDetail.js': '',
                'js/data/articles.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'js-16'
              ],
              commonMistakes: [
                {
                  pattern: 'innerHTML',
                  explanation: '使用 innerHTML 赋值用户输入有 XSS 风险'
                },
                {
                  pattern: 'addEventListener',
                  explanation: '每个事件绑定都需要独立的 addEventListener 调用'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '导入文章数据',
                  'verification': 'import { articles',
                  'hint': '从 data 导入文章数据',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
                },
                {
                  'id': 'step-2',
                  'title': '创建文章卡片',
                  'verification': 'createElement',
                  'hint': '用 document.createElement 创建卡片',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
                },
                {
                  'id': 'step-3',
                  'title': '添加点击跳转',
                  'verification': 'location.hash',
                  'hint': '点击卡片导航到详情',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
                }
              ],

              variations: [
                {
                  name: '模板引擎',
                  description: 'Handlebars/Mustache 模板渲染'
                }
              ],
              transferTasks: [
                {
                  task: '添加文章分类筛选功能',
                  target: '掌握数组过滤方法'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            },
            {
              id: 'js-18',
              number: 18,
              type: 'project',
              project: 'blog',
              projectModule: '文章详情',
              title: '文章详情与路由',
              concept: 'Hash 路由',
              difficulty: 'medium',
              task: '实现 Hash 路由：文章列表页和详情页切换，URL 变化时渲染对应内容',
              prerequisites: '<h4>📚 Hash 路由原理</h4><p><code>window.location.hash</code> 获取 URL 中 # 后面的部分。<code>hashchange</code> 事件监听 hash 变化。</p>',
              conceptDetail: 'Hash 路由使用 hashchange 事件监听 URL 变化。location.hash 获取当前路由。SPA 路由不刷新切换内容。',
              contextCode: '',
              hints: [
                'window.addEventListener("hashchange", router)',
                'parseHash() 解析 hash 为路由对象 { page, id }',
                '根据路由调用不同渲染函数'
              ],
              code: 'function parseHash() {\n  const hash = window.location.hash.slice(1) || \'/\'\n  const parts = hash.split(\'/\')\n  if (parts[1] === \'article\') {\n    return { page: \'detail\', id: parts[2] }\n  }\n  return { page: \'list\' }\n}\n\nfunction router() {\n  const route = parseHash()\n  const container = document.getElementById(\'content\')\n\n  if (route.page === \'detail\') {\n    renderArticleDetail(container, route.id)\n  } else {\n    renderArticleList(container)\n  }\n}\n\nwindow.addEventListener(\'hashchange\', router)\nwindow.addEventListener(\'DOMContentLoaded\', router)',
              verification: 'Hash 路由监听 hashchange 事件，根据路由渲染不同页面',
              filePath: 'js/router.js',
              projectFiles: {
                'js/router.js': '',
                'js/app.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'js-17'
              ],
              commonMistakes: [
                {
                  pattern: 'location.hash',
                  explanation: 'location.hash 包含 # 前缀，需要用 slice(1) 移除'
                },
                {
                  pattern: 'hashchange',
                  explanation: '页面首次加载不会触发 hashchange，需要手动调用一次'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '解析 Hash 路由',
                  'verification': 'parseHash',
                  'hint': '解析 location.hash 为路由对象',
                 docLinks: [{title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                },
                {
                  'id': 'step-2',
                  'title': '路由分发',
                  'verification': 'if (route.page',
                  'hint': '根据路由类型渲染不同页面',
                 docLinks: [{title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                },
                {
                  'id': 'step-3',
                  'title': '监听路由变化',
                  'verification': 'hashchange',
                  'hint': '用 hashchange 事件监听路由切换',
                 docLinks: [{title: 'MDN 事件', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener'}, {title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                }
              ],

              variations: [
                {
                  name: 'History API',
                  description: 'pushState/replaceState 实现无 # 路由'
                }
              ],
              transferTasks: [
                {
                  task: '添加 404 页面',
                  target: '掌握路由兜底策略'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            },
            {
              id: 'js-19',
              number: 19,
              type: 'project',
              project: 'blog',
              projectModule: '数据持久化',
              title: 'localStorage 评论系统',
              concept: 'localStorage API',
              difficulty: 'medium',
              task: '实现文章评论功能：用 localStorage 存储评论数据，支持添加和删除评论',
              prerequisites: '<h4>📚 localStorage 基础</h4><p><code>localStorage.setItem(key, value)</code> 存储，<code>getItem(key)</code> 读取，<code>removeItem(key)</code> 删除。值必须是字符串。</p>',
              conceptDetail: 'localStorage 键值对存储，同源共享。JSON.stringify/parse 对象序列化/反序列化。storage 事件监听其他标签页的变化。',
              contextCode: '',
              hints: [
                'key: "comments_"+articleId 区分不同文章的评论',
                '评论对象包含 id, author, text, date',
                '删除用 filter 过滤后重新保存'
              ],
              code: 'const STORAGE_PREFIX = \'blog_comments_\'\n\nexport function getComments(articleId) {\n  try {\n    const data = localStorage.getItem(STORAGE_PREFIX + articleId)\n    return data ? JSON.parse(data) : []\n  } catch {\n    return []\n  }\n}\n\nexport function addComment(articleId, author, text) {\n  const comments = getComments(articleId)\n  comments.push({\n    id: Date.now(),\n    author,\n    text,\n    date: new Date().toISOString()\n  })\n  localStorage.setItem(STORAGE_PREFIX + articleId, JSON.stringify(comments))\n  return comments\n}\n\nexport function deleteComment(articleId, commentId) {\n  const comments = getComments(articleId)\n    .filter(c => c.id !== commentId)\n  localStorage.setItem(STORAGE_PREFIX + articleId, JSON.stringify(comments))\n  return comments\n}',
              verification: 'localStorage 存储评论数据，支持添加和删除',
              filePath: 'js/utils/storage.js',
              projectFiles: {
                'js/utils/storage.js': '',
                'js/components/commentSection.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'js-18'
              ],
              commonMistakes: [
                {
                  pattern: 'JSON.stringify',
                  explanation: 'localStorage 只能存字符串，对象需要 JSON.stringify'
                },
                {
                  pattern: 'try/catch',
                  explanation: 'localStorage 可能被用户禁用或存储满，需要 try/catch'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '读取已存评论',
                  'verification': 'getItem',
                  'hint': '用 localStorage.getItem 读取评论',
                 docLinks: [{title: 'MDN localStorage', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage'}],
                },
                {
                  'id': 'step-2',
                  'title': '添加新评论',
                  'verification': 'push({',
                  'hint': '构造评论对象并添加到数组',
                 docLinks: [{title: 'MDN localStorage', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage'}],
                },
                {
                  'id': 'step-3',
                  'title': '删除评论',
                  'verification': 'filter',
                  'hint': '用 filter 过滤掉要删除的评论',
                 docLinks: [{title: 'MDN localStorage', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage'}],
                }
              ],

              variations: [
                {
                  name: 'IndexedDB',
                  description: '存储容量更大，支持索引查询'
                }
              ],
              transferTasks: [
                {
                  task: '添加评论分页加载',
                  target: '掌握数据分页模式'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            },
            {
              id: 'js-20',
              number: 20,
              type: 'project',
              project: 'blog',
              projectModule: '主题切换',
              title: '深色模式与主题切换',
              concept: 'CSS 变量 + 类切换',
              difficulty: 'easy',
              task: '实现深色/浅色主题切换：CSS 变量定义主题色，JS 切换 body class，localStorage 保存偏好',
              prerequisites: '<h4>📚 CSS 变量</h4><p><code>--variable-name</code> 定义 CSS 变量，<code>var(--variable-name)</code> 引用。<code>prefers-color-scheme</code> 检测系统主题。</p>',
              conceptDetail: 'CSS 变量通过 var() 引用。prefers-color-scheme 媒体查询检测系统主题。body 的 data-theme 属性控制主题。',
              contextCode: '',
              hints: [
                'CSS 变量在 :root 和 [data-theme="dark"] 中定义',
                '切换 body.dataset.theme = "light"|"dark"',
                'localStorage 保存主题偏好'
              ],
              code: ':root {\n  --bg: #ffffff;\n  --text: #1e293b;\n  --card: #f8fafc;\n  --border: #e2e8f0;\n  --primary: #6366f1;\n}\n\n[data-theme="dark"] {\n  --bg: #0f172a;\n  --text: #e2e8f0;\n  --card: #1e293b;\n  --border: #334155;\n  --primary: #818cf8;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n  transition: background 0.3s, color 0.3s;\n}',
              verification: 'CSS 变量定义两套主题，JS 切换 body data-theme 属性，偏好持久化',
              filePath: 'styles/main.css',
              projectFiles: {
                'styles/main.css': '',
                'js/components/themeToggle.js': ''
              },
              cognitiveLoad: 'low',
              dependsOn: [
                'js-16'
              ],
              commonMistakes: [
                {
                  pattern: 'var(--bg)',
                  explanation: 'CSS 变量用 var() 引用，需确保变量已定义'
                },
                {
                  pattern: 'prefers-color-scheme',
                  explanation: '优先用系统偏好，用户手动切换后覆盖'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '定义 CSS 变量',
                  'verification': '--bg',
                  'hint': '在 :root 中定义浅色主题色',
                 docLinks: [{title: 'MDN let/const', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let'}, {title: 'MDN CSS 变量', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties'}],
                },
                {
                  'id': 'step-2',
                  'title': '定义深色主题',
                  'verification': 'data-theme',
                  'hint': '用 data-theme 选择器定义深色变量',
                 docLinks: [{title: 'MDN CSS 变量', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties'}],
                },
                {
                  'id': 'step-3',
                  'title': '切换主题',
                  'verification': 'body.dataset.theme',
                  'hint': '用 JS 切换 body 的 data-theme',
                 docLinks: [{title: 'MDN CSS 变量', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties'}],
                }
              ],

              variations: [
                {
                  name: 'CSS 自定义属性',
                  description: '@property 注册类型化的 CSS 变量'
                }
              ],
              transferTasks: [
                {
                  task: '添加主题过渡动画',
                  target: '掌握 CSS transition 动画'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            },
            {
              id: 'js-21',
              number: 21,
              type: 'project',
              project: 'blog',
              projectModule: '状态管理',
              title: '状态管理与搜索',
              concept: '观察者模式',
              difficulty: 'medium',
              task: '实现简单的状态管理（发布-订阅模式），基于状态实现文章搜索功能',
              prerequisites: '<h4>📚 发布-订阅模式</h4><p>Store 维护状态，组件订阅状态变化，通过 dispatch 更新状态触发所有订阅回调。</p>',
              conceptDetail: '观察者模式一对多依赖。subscribe 注册回调返回取消函数。notify 遍历执行所有监听回调。',
              contextCode: '',
              hints: [
                'createStore(initialState) 返回 { getState, dispatch, subscribe }',
                '搜索时 dispatch({ type: "SEARCH", keyword })',
                '列表组件 subscribe 并在回调中重新渲染'
              ],
              code: 'export function createStore(reducer, initialState) {\n  let state = initialState\n  const listeners = []\n\n  return {\n    getState() { return state },\n    dispatch(action) {\n      state = reducer(state, action)\n      listeners.forEach(fn => fn())\n    },\n    subscribe(fn) {\n      listeners.push(fn)\n      return () => {\n        const idx = listeners.indexOf(fn)\n        if (idx !== -1) listeners.splice(idx, 1)\n      }\n    }\n  }\n}\n\nfunction searchReducer(state, action) {\n  switch (action.type) {\n    case \'SEARCH\':\n      return { ...state, keyword: action.payload }\n    default:\n      return state\n  }\n}\nconst store = createStore(searchReducer, { keyword: \'\' })',
              verification: '实现发布-订阅 Store，基于关键词过滤文章',
              filePath: 'js/utils/store.js',
              projectFiles: {
                'js/utils/store.js': '',
                'js/components/searchBar.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'js-18'
              ],
              commonMistakes: [
                {
                  pattern: 'subscribe',
                  explanation: 'subscribe 返回取消函数，组件销毁时执行防止内存泄漏'
                },
                {
                  pattern: 'reducer',
                  explanation: 'reducer 是纯函数，不能修改原 state，要返回新对象'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '实现 createStore',
                  'verification': 'getState',
                  'hint': '创建包含 getState/dispatch/subscribe 的 store',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
                },
                {
                  'id': 'step-2',
                  'title': '实现 dispatch',
                  'verification': 'listeners.forEach',
                  'hint': 'dispatch 更新状态并通知订阅者',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}],
                },
                {
                  'id': 'step-3',
                  'title': '实现搜索功能',
                  'verification': 'keyword',
                  'hint': '基于 keyword 状态过滤文章列表',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}],
                }
              ],

              variations: [
                {
                  name: 'Redux',
                  description: '工业级状态管理库，中间件支持异步'
                }
              ],
              transferTasks: [
                {
                  task: '添加文章标签筛选与搜索组合过滤',
                  target: '掌握多条件筛选模式'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            },
            {
              id: 'js-22',
              number: 22,
              type: 'project',
              project: 'blog',
              projectModule: '性能优化',
              title: '性能优化与加载体验',
              concept: '懒加载 + 骨架屏',
              difficulty: 'medium',
              task: '实现图片懒加载（IntersectionObserver）和文章列表骨架屏加载状态',
              prerequisites: '<h4>📚 IntersectionObserver</h4><p>观察元素是否进入可视区域。<code>new IntersectionObserver(callback, options)</code> 创建，<code>observe()</code> 开始观察。</p>',
              conceptDetail: 'IntersectionObserver 异步观察元素可见性。骨架屏用灰色占位块模拟加载。data-src 存储真实图片 URL。',
              contextCode: '',
              hints: [
                'img 标签用 data-src 存真实 URL',
                'observer 回调中 entry.isIntersecting 判断是否可见',
                '可见时将 data-src 赋给 src 并取消观察'
              ],
              code: 'export function lazyLoadImages(container) {\n  const images = container.querySelectorAll(\'img[data-src]\')\n  if (!images.length) return\n\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        const img = entry.target\n        img.src = img.dataset.src\n        img.removeAttribute(\'data-src\')\n        observer.unobserve(img)\n      }\n    })\n  }, { rootMargin: \'200px\' })\n\n  images.forEach(img => observer.observe(img))\n  return () => observer.disconnect()\n}',
              verification: '使用 IntersectionObserver 实现图片懒加载',
              filePath: 'js/utils/lazyLoad.js',
              projectFiles: {
                'js/utils/lazyLoad.js': '',
                'js/components/skeleton.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'js-17'
              ],
              commonMistakes: [
                {
                  pattern: 'IntersectionObserver',
                  explanation: '浏览器兼容性检查，旧浏览器需要 polyfill'
                },
                {
                  pattern: 'rootMargin',
                  explanation: 'rootMargin 提前加载阈值，设为 200px 提前加载避免闪烁'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '创建 observer',
                  'verification': 'IntersectionObserver',
                  'hint': '用 IntersectionObserver 创建观察器',
                 docLinks: [{title: 'MDN IntersectionObserver', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver'}],
                },
                {
                  'id': 'step-2',
                  'title': '懒加载图片',
                  'verification': 'img.dataset.src',
                  'hint': '图片可见时把 data-src 赋给 src',
                 docLinks: [{title: 'MDN IntersectionObserver', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver'}],
                },
                {
                  'id': 'step-3',
                  'title': '清理观察器',
                  'verification': 'observer.disconnect',
                  'hint': '组件卸载时断开 observer',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
                }
              ],

              variations: [
                {
                  name: 'loading="lazy"',
                  description: '原生 img 懒加载属性，更简单'
                }
              ],
              transferTasks: [
                {
                  task: '实现虚拟列表优化大量文章渲染',
                  target: '掌握长列表性能优化'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            },
            {
              id: 'js-23',
              number: 23,
              type: 'project',
              project: 'blog',
              projectModule: '项目整合',
              title: '项目整合与发布',
              concept: '构建发布流程',
              difficulty: 'medium',
              task: '整合所有功能：文章列表/详情/搜索/评论/主题切换，配置构建和发布',
              prerequisites: '<h4>📚 纯前端部署</h4><p>纯静态站点可直接部署到 GitHub Pages 或 Vercel。</p>',
              conceptDetail: 'Vite 适合现代 JS 项目构建。GitHub Pages 静态站点托管。',
              contextCode: '',
              hints: [
                'vite.config.js 配置 base 为仓库名',
                'npm run build 输出到 dist/',
                'dist/ 目录部署到 GitHub Pages'
              ],
              code: '// vite.config.js\nimport { defineConfig } from \'vite\'\n\nexport default defineConfig({\n  base: \'/blog/\',\n  build: {\n    outDir: \'dist\',\n    assetsDir: \'assets\'\n  }\n})',
              verification: '所有功能整合，Vite 构建配置正确',
              filePath: 'vite.config.js',
              projectFiles: {
                'vite.config.js': '',
                'js/app.js': '',
                'package.json': '{"name":"blog","scripts":{"dev":"vite","build":"vite build","preview":"vite preview"}}'
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'js-21',
                'js-22'
              ],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '整合主入口',
                  'verification': 'import',
                  'hint': '在 app.js 中导入所有组件模块',
                 docLinks: [{title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide'}, {title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API'}],
                },
                {
                  'id': 'step-2',
                  'title': '配置 Vite',
                  'verification': 'base:',
                  'hint': '设置 vite.config.js 的 base',
                 docLinks: [{title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                },
                {
                  'id': 'step-3',
                  'title': '构建发布',
                  'verification': 'build',
                  'hint': '运行 npm run build 部署 dist/',
                 docLinks: [{title: 'Vite 文档', url: 'https://cn.vitejs.dev/guide/'}],
                }
              ],

              variations: [
                {
                  name: 'SSG',
                  description: 'Astro/Next.js 静态生成更快的博客'
                }
              ],
              transferTasks: [
                {
                  task: '添加 RSS 订阅和 SEO 优化',
                  target: '了解前端 SEO 基础'
                }
              ],
        docLinks: [
        { title: 'MDN JavaScript 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide' },
        { title: 'MDN Web API 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API' }
        ],
            }
    ]
  }
]
