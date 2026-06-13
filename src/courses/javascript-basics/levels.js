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
        hints: [
          'const name = "你的名字"',
          'let age = 你的年龄',
          'console.log(name, age)'
        ],
        code: `const name = "Alice"
let age = 25
console.log(name, age)`,
        verification: '使用了 const 和 let 声明变量',
        filePath: 'src/variables.js'
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
        filePath: 'src/types.js'
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
        filePath: 'src/functions.js'
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
        filePath: 'src/arrays.js'
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
        filePath: 'src/objects.js'
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
        filePath: 'src/arrow.js'
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
用 ${'{变量名}'} 插入变量值。

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
        filePath: 'src/template.js'
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
        filePath: 'src/spread.js'
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
        filePath: 'src/destructuring.js'
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
        filePath: 'src/promise.js'
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
        filePath: 'src/async.js'
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
        filePath: 'src/error-handling.js'
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
        filePath: 'src/dom-select.js'
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
        filePath: 'src/dom-events.js'
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
        filePath: 'src/dom-create.js'
      }
    ]
  }
]
