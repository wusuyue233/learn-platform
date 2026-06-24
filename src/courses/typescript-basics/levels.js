export const phases = [
  {
    id: 'ts-type-basics',
    name: '阶段一：类型基础',
    description: '掌握 TypeScript 基本类型、接口、函数类型与类型守卫',
    levels: [
      {
        id: 'ts-1',
        number: 1,
        title: '基本类型',
        concept: 'string/number/boolean',
        difficulty: 'easy',
        task: '声明不同类型的变量并添加类型注解',
        prerequisites: `<h4>🔷 TypeScript 基础</h4>
<p>TypeScript 是 JavaScript 的超集，添加了静态类型系统：</p>
<pre><code>// 类型注解
let name: string = "Alice"
let age: number = 25
let isActive: boolean = true

// 类型推断（自动推断类型）
let city = "Beijing"  // 自动推断为 string
</code></pre>

<h4>🔑 基本类型</h4>
<ul>
  <li><code>string</code> — 字符串</li>
  <li><code>number</code> — 数字（整数和浮点数）</li>
  <li><code>boolean</code> — 布尔值</li>
  <li><code>null</code> / <code>undefined</code> — 空值</li>
  <li><code>any</code> — 任意类型（慎用）</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解类型注解
[类型注解](TypeScript 的类型标注语法) 在变量名后加 : 类型，明确指定变量类型。

步骤 2 — 了解基本类型
[string](字符串)、[number](数字)、[boolean](布尔值) 是最常用的三种基本类型。

步骤 3 — 类型推断
TypeScript 可以根据赋值自动推断类型，简单场景不需要手动注解。`,
        contextCode: `// 基本类型声明

// 字符串
let firstName: string = "Alice"
let greeting: string = \`Hello, \${'{'}${'{firstName}}'}\`

// 数字
let age: number = 25
let price: number = 9.99
let hex: number = 0xff

// 布尔值
let isActive: boolean = true
let isVisible: boolean = false

// 特殊类型
let nothing: null = null
let notDefined: undefined = undefined

// any（不推荐）
let anything: any = "可以是任何值"
anything = 42  // 不报错

// unknown（比 any 安全）
let input: unknown = "可能是任何值"
// input.toFixed()  // 报错，需要类型检查`,
        starterCode: `// 声明以下变量并添加正确的类型注解

// 1. 字符串变量 name，值为 "Alice"
let name: ???

// 2. 数字变量 age，值为 25
let age: ???

// 3. 布尔变量 isActive，值为 true
let isActive: ???

// 4. 不指定类型，让 TypeScript 自动推断
let city = "Beijing"

// 验证类型
console.log(typeof name, typeof age, typeof isActive, typeof city)`,
        hints: [
          '字符串用 string，注意首字母小写',
          '数字用 number，不区分整数和浮点数',
          '布尔值用 boolean'
        ],
        code: `let name: string = "Alice"
let age: number = 25
let isActive: boolean = true
let city = "Beijing"

console.log(typeof name, typeof age, typeof isActive, typeof city)`,
        verification: '正确定义了 string、number、boolean 类型的变量',
        solution: `解题步骤：
1. let name: string = "Alice" — 字符串类型
2. let age: number = 25 — 数字类型
3. let isActive: boolean = true — 布尔类型
4. let city = "Beijing" — 类型推断`,
        filePath: 'src/basic-types.ts',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '声明 string 变量',
          'verification': ': string',
          'hint': '给 name 变量添加 string 类型注解',
          docLinks: [{title: '声明 string 变量', url: 'https://www.typescriptlang.org/zh/docs/handbook/declaration-files/introduction.html'}],
         },
         {
          'id': 'step-2',
          'title': '声明 number 变量',
          'verification': ': number',
          'hint': '给 age 变量添加 number 类型注解',
          docLinks: [{title: '声明 number 变量', url: 'https://www.typescriptlang.org/zh/docs/handbook/declaration-files/introduction.html'}],
         },
         {
          'id': 'step-3',
          'title': '声明 boolean 变量',
          'verification': ': boolean',
          'hint': '给 isActive 变量添加 boolean 类型注解',
          docLinks: [{title: '声明 boolean 变量', url: 'https://www.typescriptlang.org/zh/docs/handbook/declaration-files/introduction.html'}],
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
        { title: '日常类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html' },
        { title: '基本类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean' }
        ],
      },
      {
        id: 'ts-2',
        number: 2,
        title: '接口与类型别名',
        concept: 'interface / type',
        difficulty: 'easy',
        task: '用 interface 和 type 定义用户数据结构',
        prerequisites: `<h4>📐 接口与类型别名</h4>
<p>interface 和 type 都用于定义对象的结构：</p>
<pre><code>// interface 接口
interface User {
  name: string
  age: number
  email?: string  // 可选属性
}

// type 类型别名
type Point = {
  x: number
  y: number
}

// 使用
const user: User = { name: "Alice", age: 25 }
</code></pre>

<h4>🔑 interface vs type</h4>
<ul>
  <li><code>interface</code> — 可扩展（extends），适合对象结构</li>
  <li><code>type</code> — 更灵活（联合类型、交叉类型），适合别名</li>
  <li>一般优先用 interface</li>
</ul>`,
        conceptDetail: `步骤 1 — 用 interface 定义接口
[interface](接口定义) 用 interface 关键字定义对象的结构，属性后跟类型。

步骤 2 — 可选属性
[?:](可选属性语法) 表示该属性可以不存在。

步骤 3 — 用 type 定义类型别名
[type](类型别名) 用 type 关键字，可以定义更复杂的类型。`,
        contextCode: `// interface 与 type 示例

// interface - 定义对象结构
interface User {
  id: number
  name: string
  email?: string      // 可选
  readonly role: string  // 只读
}

// type - 类型别名
type ID = string | number
type Coordinate = { x: number; y: number }

// interface 继承
interface Admin extends User {
  permissions: string[]
}

// type 交叉
type Timestamped = {
  createdAt: Date
  updatedAt: Date
}

// 使用
const user: User = { id: 1, name: "Alice", role: "admin" }
const coord: Coordinate = { x: 10, y: 20 }
const id: ID = 123`,
        starterCode: `// 1. 用 interface 定义 User 接口
interface User {
  // 添加属性：id(number)、name(string)、email?(string)
  ???
}

// 2. 用 type 定义 Product 类型
type Product = {
  // 添加属性：name(string)、price(number)、inStock(boolean)
  ???
}

// 3. 使用接口和类型
const user: User = {
  id: 1,
  name: "Alice",
  // email 是可选的，可以不填
}

const product: Product = {
  name: "iPhone",
  price: 6999,
  inStock: true
}

console.log(user, product)`,
        hints: [
          'interface 中 email?: string 表示可选',
          'type 中用 { } 包裹属性定义',
          '两个都是定义对象结构的方式'
        ],
        code: `interface User {
  id: number
  name: string
  email?: string
}

type Product = {
  name: string
  price: number
  inStock: boolean
}

const user: User = { id: 1, name: "Alice" }

const product: Product = { name: "iPhone", price: 6999, inStock: true }

console.log(user, product)`,
        verification: '使用了 interface 和 type 定义了对象结构',
        solution: `解题步骤：
1. interface User { id: number; name: string; email?: string }
2. type Product = { name: string; price: number; inStock: boolean }
3. 创建符合接口/类型的对象`,
        filePath: 'src/interfaces.ts',
        cognitiveLoad: 'low',
        dependsOn: ['ts-1'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义接口',
          'verification': 'interface',
          'hint': '用 interface 定义用户对象的结构',
          docLinks: [{title: '定义接口', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/objects.html'}],
         },
         {
          'id': 'step-2',
          'title': '定义类型别名',
          'verification': 'type',
          'hint': '用 type 定义联合类型或别名',
          docLinks: [{title: '定义类型别名', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html'}],
         },
         {
          'id': 'step-3',
          'title': '使用接口',
          'verification': ': User',
          'hint': '给变量添加 User 接口类型',
          docLinks: [{title: '使用接口', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/objects.html'}],
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
        { title: '接口 (Interface)', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/objects.html' },
        { title: '类型别名 (Type)', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html#type-aliases' }
        ],
      },
      {
        id: 'ts-3',
        number: 3,
        title: '函数类型',
        concept: '参数与返回值',
        difficulty: 'easy',
        task: '定义一个带类型注解的加法函数和一个回调函数',
        prerequisites: `<h4>📝 函数类型</h4>
<p>TypeScript 为函数参数和返回值添加类型：</p>
<pre><code>// 参数和返回值类型
function add(a: number, b: number): number {
  return a + b
}

// 箭头函数
const multiply = (a: number, b: number): number => a * b

// 函数类型
type MathFn = (x: number, y: number) => number
const divide: MathFn = (x, y) => x / y
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>参数类型：参数名后加 : 类型</li>
  <li>返回值类型：函数名后加 : 类型</li>
  <li>可选参数：param?: type</li>
  <li>默认参数：param = value</li>
</ul>`,
        conceptDetail: `步骤 1 — 为参数添加类型
在参数名后加 [:(类型)](参数类型注解)，明确参数类型。

步骤 2 — 为返回值添加类型
在函数参数列表后加 [:(返回类型)](返回值类型注解)。

步骤 3 — 定义函数类型
用 type 或 interface 定义函数签名类型。`,
        contextCode: `// 函数类型完整示例

// 基本函数类型
function greet(name: string): string {
  return \`Hello, \${'{'}${'{name}}'}\`
}

// 箭头函数
const double = (n: number): number => n * 2

// 可选参数
function log(message: string, level?: string): void {
  console.log(\`[\${'{'}${'{level || "INFO}}'}] \${'{'}${'{message}}'}\`)
}

// 默认参数
function createUser(name: string, role: string = "user"): object {
  return { name, role }
}

// 函数类型别名
type Callback = (data: string) => void
type Predicate = (item: number) => boolean

// 回调函数
function fetchData(callback: Callback): void {
  callback("done")
}`,
        starterCode: `// 1. 加法函数：接收两个 number，返回 number
function add(a: ???, b: ???): ??? {
  // 实现加法
  ???
}

// 2. 箭头函数：乘法
const multiply = (a: ???, b: ???): ??? => ???

// 3. 回调函数：接收一个回调并调用它
function doSomething(callback: ???): void {
  callback("操作完成")
}

// 测试
console.log(add(3, 5))        // 8
console.log(multiply(4, 6))   // 24
doSomething(msg => console.log(msg))  // "操作完成"`,
        hints: [
          '参数类型：a: number, b: number',
          '返回值类型：函数名后加 : number',
          '回调类型：(msg: string) => void'
        ],
        code: `function add(a: number, b: number): number {
  return a + b
}

const multiply = (a: number, b: number): number => a * b

function doSomething(callback: (msg: string) => void): void {
  callback("操作完成")
}

console.log(add(3, 5))
console.log(multiply(4, 6))
doSomething(msg => console.log(msg))`,
        verification: '函数添加了参数和返回值类型注解',
        solution: `解题步骤：
1. 参数后加 : number 指定类型
2. 函数名后加 : number 指定返回类型
3. 回调参数类型为 (msg: string) => void`,
        filePath: 'src/function-types.ts',
        cognitiveLoad: 'low',
        dependsOn: ['ts-2'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '参数类型注解',
          'verification': '(a: number, b: number)',
          'hint': '为函数参数添加类型注解',
          docLinks: [{title: '参数类型注解', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '返回值类型',
          'verification': ': number',
          'hint': '在参数列表后标注返回值类型',
          docLinks: [{title: '返回值类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '箭头函数类型',
          'verification': '=>',
          'hint': '用 => 定义函数类型签名',
          docLinks: [{title: '箭头函数类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/functions.html'}],
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
        { title: '函数类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/functions.html' },
        { title: '函数重载', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/functions.html#function-overloads' }
        ],
      },
      {
        id: 'ts-4',
        number: 4,
        title: '联合类型与交叉类型',
        concept: '| 与 &',
        difficulty: 'medium',
        task: '用联合类型表示 ID，用交叉类型合并用户和时间戳',
        prerequisites: `<h4>🔗 联合与交叉</h4>
<p>联合类型（|）表示多种可能，交叉类型（&）合并多个类型：</p>
<pre><code>// 联合类型：ID 可以是 string 或 number
type ID = string | number

// 交叉类型：合并多个类型
type User = { name: string; age: number }
type Timestamped = { createdAt: Date }
type UserWithTime = User & Timestamped
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>A | B</code> — 联合类型（A 或 B）</li>
  <li><code>A & B</code> — 交叉类型（同时是 A 和 B）</li>
  <li>联合类型可以配合类型守卫使用</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解联合类型
[联合类型](A | B) 用 | 连接多个类型，表示值可以是其中任何一种。

步骤 2 — 理解交叉类型
[交叉类型](A & B) 用 & 连接多个类型，表示值同时满足所有类型。

步骤 3 — 实际应用
联合类型常用于参数多态，交叉类型用于对象合并。`,
        contextCode: `// 联合类型
type StringOrNumber = string | number

function formatId(id: StringOrNumber): string {
  // 类型缩窄
  if (typeof id === "string") {
    return id.toUpperCase()
  }
  return id.toFixed(2)
}

// 交叉类型
type HasName = { name: string }
type HasAge = { age: number }
type Person = HasName & HasAge

const person: Person = { name: "Alice", age: 25 }

// 对象合并
interface Base { id: number }
interface Extra { role: string }
type FullUser = Base & Extra`,
        starterCode: `// 1. 联合类型：ID 可以是 string 或 number
type ID = string | number

function formatID(id: ID): string {
  // 如果是 string，转大写；如果是 number，保留两位小数
  if (typeof id === "string") {
    ???
  }
  ???
}

// 2. 交叉类型：合并两个接口
interface HasName {
  name: string
}

interface HasAge {
  age: number
}

// 用交叉类型创建 Person
type Person = ???

const person: Person = { name: "Alice", age: 25 }

console.log(formatID("abc"))   // "ABC"
console.log(formatID(3.14159)) // "3.14"
console.log(person)`,
        hints: [
          'type ID = string | number 用 | 连接',
          'typeof id === "string" 做类型缩窄',
          'type Person = HasName & HasAge 用 & 合并'
        ],
        code: `type ID = string | number

function formatID(id: ID): string {
  if (typeof id === "string") {
    return id.toUpperCase()
  }
  return id.toFixed(2)
}

interface HasName { name: string }
interface HasAge { age: number }

type Person = HasName & HasAge

const person: Person = { name: "Alice", age: 25 }

console.log(formatID("abc"))
console.log(formatID(3.14159))
console.log(person)`,
        verification: '使用了联合类型（|）和交叉类型（&）',
        solution: `解题步骤：
1. type ID = string | number 定义联合类型
2. 用 typeof 做类型缩窄
3. type Person = HasName & HasAge 定义交叉类型`,
        filePath: 'src/union-intersect.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-3'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义联合类型',
          'verification': 'string | number',
          'hint': '用 | 定义可接受多种类型的变量',
          docLinks: [{title: '定义联合类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html#union-types'}],
         },
         {
          'id': 'step-2',
          'title': '定义交叉类型',
          'verification': '&',
          'hint': '用 & 合并多个类型',
          docLinks: [{title: '定义交叉类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '类型收窄',
          'verification': 'typeof',
          'hint': '用 typeof 判断类型并收窄联合类型',
          docLinks: [{title: '类型收窄', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
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
        { title: '联合类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html#union-types' },
        { title: '交叉类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/objects.html#intersection-types' }
        ],
      },
      {
        id: 'ts-5',
        number: 5,
        title: '类型守卫',
        concept: 'typeof / instanceof / in',
        difficulty: 'medium',
        task: '实现一个函数，根据输入类型返回不同结果',
        prerequisites: `<h4>🛡️ 类型守卫</h4>
<p>类型守卫在运行时缩窄类型范围：</p>
<pre><code>// typeof 守卫
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase()  // 这里 value 是 string
  }
  return value.toFixed(2)       // 这里 value 是 number
}

// instanceof 守卫
function handleError(err: Error | string) {
  if (err instanceof Error) {
    console.log(err.message)
  } else {
    console.log(err)
  }
}

// in 守卫
type Bird = { fly(): void }
type Fish = { swim(): void }
function move(animal: Bird | Fish) {
  if ("fly" in animal) animal.fly()
  else animal.swim()
}
</code></pre>`,
        conceptDetail: `步骤 1 — typeof 类型守卫
[typeof](JavaScript 运算符) 检查基本类型，在 if 块内 TypeScript 自动缩窄类型。

步骤 2 — instanceof 类型守卫
[instanceof](检查原型链) 判断对象是否是某个类的实例。

步骤 3 — in 类型守卫
[in](检查属性是否存在) 检查对象是否拥有某个属性。`,
        contextCode: `// typeof 守卫
function print(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  } else if (typeof value === "number") {
    console.log(value.toFixed(2))
  } else {
    console.log(value ? "是" : "否")
  }
}

// instanceof 守卫
class HttpError extends Error {
  code: number
  constructor(code: number, message: string) {
    super(message)
    this.code = code
  }
}

function handle(error: HttpError | Error) {
  if (error instanceof HttpError) {
    console.log(\`HTTP \${'{'}${'{error.code}}'}\`)
  } else {
    console.log(error.message)
  }
}

// in 守卫
type Circle = { radius: number }
type Square = { side: number }

function area(shape: Circle | Square): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2
  }
  return shape.side ** 2
}`,
        starterCode: `// 实现一个类型安全的格式化函数

type StringOrNumber = string | number
type ErrorOrString = Error | string

// 1. typeof 守卫
function format(value: StringOrNumber): string {
  // 如果是 string，转大写
  if (typeof value === "string") {
    ???
  }
  // 如果是 number，保留两位小数
  ???
}

// 2. instanceof 守卫
function getErrorMessage(err: ErrorOrString): string {
  if (err instanceof ???) {
    ???
  }
  ???
}

console.log(format("hello"))     // "HELLO"
console.log(format(3.14159))     // "3.14"
console.log(getErrorMessage(new Error("网络错误")))  // "网络错误"
console.log(getErrorMessage("简单错误"))              // "简单错误"`,
        hints: [
          'typeof value === "string" 判断字符串',
          'value.toUpperCase() 转大写',
          'err instanceof Error 判断 Error 实例'
        ],
        code: `type StringOrNumber = string | number
type ErrorOrString = Error | string

function format(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  return value.toFixed(2)
}

function getErrorMessage(err: ErrorOrString): string {
  if (err instanceof Error) {
    return err.message
  }
  return err
}

console.log(format("hello"))
console.log(format(3.14159))
console.log(getErrorMessage(new Error("网络错误")))
console.log(getErrorMessage("简单错误"))`,
        verification: '使用了 typeof 和 instanceof 类型守卫',
        solution: `解题步骤：
1. typeof value === "string" 缩窄为字符串
2. typeof value === "number" 缩窄为数字
3. err instanceof Error 缩窄为 Error 实例`,
        filePath: 'src/type-guards.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-4'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': 'typeof 守卫',
          'verification': "typeof value === 'string'",
          'hint': '用 typeof 判断基本类型',
          docLinks: [{title: 'typeof 守卫', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html'}],
         },
         {
          'id': 'step-2',
          'title': 'in 守卫',
          'verification': "'type' in obj",
          'hint': '用 in 判断属性是否存在',
          docLinks: [{title: 'in 守卫', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '自定义守卫',
          'verification': 'isString(',
          'hint': '用 is 关键字定义谓词返回类型',
          docLinks: [{title: '自定义守卫', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
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
        { title: '类型收窄 (Narrowing)', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/narrowing.html' },
        { title: 'typeof 类型守卫', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/narrowing.html#typeof-type-guards' }
        ],
      }
    ]
  },
  {
    id: 'ts-advanced-types',
    name: '阶段二：高级类型',
    description: '掌握泛型、映射类型、条件类型等 TypeScript 高级特性',
    levels: [
      {
        id: 'ts-6',
        number: 6,
        title: '泛型基础',
        concept: '类型参数',
        difficulty: 'medium',
        task: '创建一个泛型函数 identity 和泛型接口 Container',
        prerequisites: `<h4>🎯 泛型基础</h4>
<p>泛型允许创建可复用的类型安全组件：</p>
<pre><code>// 泛型函数
function identity<T>(value: T): T {
  return value
}

const num = identity(42)       // T 推断为 number
const str = identity("hello")  // T 推断为 string

// 泛型接口
interface Box<T> {
  value: T
}

const box: Box<number> = { value: 42 }
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code><T></code> — 类型参数（占位符）</li>
  <li>使用时指定具体类型或自动推断</li>
  <li>可以有多个类型参数 <code><T, U></code></li>
</ul>`,
        conceptDetail: `步骤 1 — 理解泛型
[泛型](类型参数) 用 <T> 作为类型占位符，使用时传入具体类型。

步骤 2 — 泛型函数
在函数名后加 [<T>](泛型参数声明)，参数和返回值中使用 T。

步骤 3 — 泛型接口
在接口名后加 [<T>](泛型参数声明)，接口属性中使用 T。`,
        contextCode: `// 泛型函数
function identity<T>(value: T): T {
  return value
}

function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

// 泛型接口
interface Response<T> {
  data: T
  status: number
  message: string
}

// 泛型类
class Stack<T> {
  items: T[] = []
  push(item: T) { this.items.push(item) }
  pop(): T | undefined { return this.items.pop() }
}

// 使用
const num = identity(42)        // T = number
const res: Response<string> = { data: "ok", status: 200, message: "success" }
const stack = new Stack<number>()
stack.push(1)`,
        starterCode: `// 1. 泛型函数 identity：接收 T 类型参数，返回 T
function identity<T>(value: ???): ??? {
  ???
}

// 2. 泛型函数 first：返回数组第一个元素
function first<T>(arr: ???): T | undefined {
  ???
}

// 3. 泛型接口 Container
interface Container<T> {
  value: ???
  getValue(): ???
}

// 使用
const num = identity(42)        // 类型推断为 number
const str = identity("hello")  // 类型推断为 string
const nums = first([1, 2, 3])  // number | undefined

const container: Container<string> = {
  value: "hello",
  getValue() { return this.value }
}

console.log(num, str, nums, container.getValue())`,
        hints: [
          'identity<T>(value: T): T — T 既是参数类型也是返回类型',
          'first<T>(arr: T[]): T | undefined',
          'Container<T> 中 value: T, getValue(): T'
        ],
        code: `function identity<T>(value: T): T {
  return value
}

function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

interface Container<T> {
  value: T
  getValue(): T
}

const num = identity(42)
const str = identity("hello")
const nums = first([1, 2, 3])

const container: Container<string> = {
  value: "hello",
  getValue() { return this.value }
}

console.log(num, str, nums, container.getValue())`,
        verification: '使用了泛型参数 <T> 定义可复用的类型安全组件',
        solution: `解题步骤：
1. 函数名后加 <T> 声明泛型参数
2. 参数和返回值中使用 T
3. 接口名后加 <T> 声明泛型参数`,
        filePath: 'src/generics.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-5'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义泛型函数',
          'verification': '<T>',
          'hint': '在函数名后添加泛型参数 <T>',
          docLinks: [{title: '定义泛型函数', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html'}],
         },
         {
          'id': 'step-2',
          'title': '使用泛型参数',
          'verification': ': T',
          'hint': '用 T 标注参数或返回值类型',
          docLinks: [{title: '使用泛型参数', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html'}],
         },
         {
          'id': 'step-3',
          'title': '显式指定泛型',
          'verification': 'Container<string>',
          'hint': '调用时显式指定泛型类型',
          docLinks: [{title: '显式指定泛型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html'}],
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
        { title: '泛型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html' },
        { title: '泛型函数', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html#hello-world-of-generics' }
        ],
      },
      {
        id: 'ts-7',
        number: 7,
        title: '泛型约束',
        concept: 'extends 约束',
        difficulty: 'medium',
        task: '用 extends 约束泛型，确保类型拥有 length 属性',
        prerequisites: `<h4>🔗 泛型约束</h4>
<p>extends 限制泛型必须满足某些条件：</p>
<pre><code>// 约束 T 必须有 length 属性
function logLength<T extends { length: number }>(value: T): T {
  console.log(value.length)
  return value
}

logLength("hello")     // OK，string 有 length
logLength([1, 2, 3])   // OK，array 有 length
logLength(42)           // 报错，number 没有 length
</code></pre>

<h4>🔑 约束语法</h4>
<ul>
  <li><code>T extends U</code> — T 必须是 U 的子类型</li>
  <li>可以用接口约束多个属性</li>
  <li>配合 keyof 获取属性名</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解 extends 约束
[extends](泛型约束) 限制泛型必须满足某个结构（有某些属性）。

步骤 2 — 约束属性存在
用 { 属性: 类型 } 作为约束，确保泛型有这些属性。

步骤 3 — keyof 配合使用
[keyof](获取对象所有属性名) 配合泛型约束，限制属性名必须是对象的 key。`,
        contextCode: `// extends 约束示例

// 约束必须有 length
function getLength<T extends { length: number }>(value: T): number {
  return value.length
}

// 约束必须有 id
function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id)
}

// keyof 约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// 使用
const user = { id: 1, name: "Alice", age: 25 }
getProperty(user, "name")  // OK
getProperty(user, "email") // 报错，"email" 不是 user 的 key`,
        starterCode: `// 1. 约束 T 必须有 length 属性
function logLength<T extends ???>(value: T): void {
  console.log("长度：", ???)
}

// 2. 约束 T 必须有 id 和 name
function greetUser<T extends ???>(user: T): string {
  return \`你好，\${'{'}${'{user.name}}'}\`
}

// 3. keyof 约束：安全获取属性
function getProp<T, K extends ???>(obj: T, key: K): T[K] {
  return ???
}

// 测试
logLength("hello")       // OK
logLength([1, 2, 3])     // OK
greetUser({ id: 1, name: "Alice", age: 25 })  // OK

const user = { id: 1, name: "Bob", email: "bob@test.com" }
console.log(getProp(user, "name"))  // "Bob"`,
        hints: [
          'T extends { length: number } 约束有 length',
          'T extends { id: number; name: string } 约束有 id 和 name',
          'K extends keyof T 约束 K 是 T 的属性名'
        ],
        code: `function logLength<T extends { length: number }>(value: T): void {
  console.log("长度：", value.length)
}

function greetUser<T extends { id: number; name: string }>(user: T): string {
  return \`你好，\${'{'}${'{user.name}}'}\`
}

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

logLength("hello")
logLength([1, 2, 3])
greetUser({ id: 1, name: "Alice", age: 25 })

const user = { id: 1, name: "Bob", email: "bob@test.com" }
console.log(getProp(user, "name"))`,
        verification: '使用了 extends 约束泛型必须满足特定结构',
        solution: `解题步骤：
1. T extends { length: number } 约束有 length
2. T extends { id: number; name: string } 约束有 id 和 name
3. K extends keyof T 约束属性名`,
        filePath: 'src/generic-constraints.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-6'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': 'extends 约束',
          'verification': 'extends',
          'hint': '用 extends 约束泛型参数',
          docLinks: [{title: 'extends 约束', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '约束为对象',
          'verification': 'extends { length',
          'hint': '将泛型约束为对象类型',
          docLinks: [{title: '约束为对象', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': 'keyof 约束',
          'verification': 'keyof T',
          'hint': '用 keyof T 约束为对象键名',
          docLinks: [{title: 'keyof 约束', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
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
        { title: '泛型约束', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html#generic-constraints' }
        ],
      },
      {
        id: 'ts-8',
        number: 8,
        title: '映射类型',
        concept: 'in 映射',
        difficulty: 'hard',
        task: '创建一个将所有属性变为可选的映射类型',
        prerequisites: `<h4>🗺️ 映射类型</h4>
<p>映射类型遍历现有类型的属性创建新类型：</p>
<pre><code>// 将所有属性变为可选
type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

// 将所有属性变为只读
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

// 使用
interface User { name: string; age: number }
type PartialUser = MyPartial&lt;User&gt;
// { name?: string; age?: number }
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>[K in keyof T]</code> — 遍历 T 的所有属性</li>
  <li><code>T[K]</code> — 获取属性的类型</li>
  <li>可以添加 <code>?</code>、<code>readonly</code> 等修饰符</li>
</ul>`,
        conceptDetail: `步骤 1 — 遍历属性
[K in keyof T](映射遍历) 遍历 T 的每个属性名。

步骤 2 — 保持属性类型
[T[K]](索引访问类型) 获取原始属性的类型。

步骤 3 — 添加修饰符
在 [K] 前加 ? 变可选，加 readonly 变只读。`,
        contextCode: `// 映射类型示例

interface User {
  name: string
  age: number
  email: string
}

// Partial - 所有属性可选
type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

// Required - 所有属性必选
type MyRequired<T> = {
  [K in keyof T]-?: T[K]
}

// Readonly - 所有属性只读
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

// Pick - 选取部分属性
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 使用
type PartialUser = MyPartial<User>
type ReadonlyUser = MyReadonly<User>
type UserName = MyPick<User, "name" | "email">`,
        starterCode: `interface User {
  name: string
  age: number
  email: string
}

// 1. 实现 Partial：将所有属性变为可选
type MyPartial<T> = {
  ???
}

// 2. 实现 Pick：选取部分属性
type MyPick<T, K extends keyof T> = {
  ???
}

// 使用
type PartialUser = MyPartial<User>
type UserName = MyPick<User, "name" | "email">

const user1: PartialUser = { name: "Alice" }        // OK，可选
const user2: UserName = { name: "Bob", email: "bob@test.com" }  // OK

console.log(user1, user2)`,
        hints: [
          '[K in keyof T]?: T[K] — 遍历属性并加 ?',
          '[K in K]: T[K] — 遍历 K 中的属性',
          'keyof T 获取所有属性名'
        ],
        code: `interface User {
  name: string
  age: number
  email: string
}

type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type PartialUser = MyPartial<User>
type UserName = MyPick<User, "name" | "email">

const user1: PartialUser = { name: "Alice" }
const user2: UserName = { name: "Bob", email: "bob@test.com" }

console.log(user1, user2)`,
        verification: '使用了 in 遍历属性创建映射类型',
        solution: `解题步骤：
1. [K in keyof T]?: T[K] — 遍历所有属性并变为可选
2. [P in K]: T[P] — 遍历指定属性并保持类型`,
        filePath: 'src/mapped-types.ts',
        cognitiveLoad: 'high',
        dependsOn: ['ts-7'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '使用 keyof',
          'verification': 'keyof',
          'hint': '用 keyof 获取对象的所有键',
          docLinks: [{title: '使用 keyof', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': 'in 映射',
          'verification': 'in keyof',
          'hint': '用 in keyof 遍历所有键',
          docLinks: [{title: 'in 映射', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/mapped-types.html'}],
         },
         {
          'id': 'step-3',
          'title': '添加修饰符',
          'verification': '?: T[K]',
          'hint': '添加 readonly 或可选修饰符',
          docLinks: [{title: '添加修饰符', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
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
        { title: '映射类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/mapped-types.html' }
        ],
      },
      {
        id: 'ts-9',
        number: 9,
        title: '条件类型',
        concept: 'extends 条件',
        difficulty: 'hard',
        task: '实现一个条件类型，判断类型是否为数组',
        prerequisites: `<h4>❓ 条件类型</h4>
<p>条件类型根据条件选择类型：</p>
<pre><code>// T extends U ? X : Y
type IsArray<T> = T extends any[] ? true : false

type A = IsArray&lt;number[]&gt;  // true
type B = IsArray&lt;string&gt;     // false
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>T extends U ? X : Y</code> — 条件类型语法</li>
  <li>类似三元表达式，但在类型层面操作</li>
  <li>配合 infer 可以提取类型</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解条件类型
[条件类型](类型层面的三元表达式) T extends U ? X : Y，根据 T 是否是 U 的子类型选择结果。

步骤 2 — infer 关键字
[infer](条件类型中的类型推断) 用于在条件中推断（提取）类型的一部分。

步骤 3 — 分布式条件类型
当 T 是联合类型时，条件类型会自动分布到每个成员。`,
        contextCode: `// 条件类型示例

// 判断是否是数组
type IsArray<T> = T extends any[] ? true : false

type A = IsArray&lt;number[]&gt;  // true
type B = IsArray&lt;string&gt;     // false

// 判断是否是函数
type IsFunction<T> = T extends (...args: any[]) => any ? true : false

// 提取函数返回值
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never

// 提取数组元素类型
type ElementOf<T> = T extends (infer E)[] ? E : never

type Num = ElementOf&lt;number[]&gt;  // number

// infer 提取 Promise 的值类型
type Unwrap<T> = T extends Promise&lt;infer V&gt; ? V : T
type Val = Unwrap&lt;Promise&lt;string&gt;&gt;  // string`,
        starterCode: `// 1. 条件类型：判断是否是数组
type IsArray<T> = T extends ??? ? ??? : ???

// 2. 提取数组元素类型
type ElementOf<T> = T extends (infer ???)[] ? ??? : never

// 3. 提取 Promise 的值类型
type Unwrap<T> = T extends Promise&lt;infer ???&gt; ? ??? : T

// 测试
type Test1 = IsArray&lt;number[]&gt;     // 应该是 true
type Test2 = IsArray&lt;string&gt;        // 应该是 false
type Test3 = ElementOf&lt;string[]&gt;    // 应该是 string
type Test4 = Unwrap&lt;Promise&lt;number&gt;&gt;  // 应该是 number

// 运行时验证
const arr: Test1 = true
console.log(arr)`,
        hints: [
          'T extends any[] ? true : false — 判断数组',
          'T extends (infer E)[] ? E : never — 提取元素',
          'T extends Promise<infer V> ? V : T — 解包 Promise'
        ],
        code: `type IsArray<T> = T extends any[] ? true : false

type ElementOf<T> = T extends (infer E)[] ? E : never

type Unwrap<T> = T extends Promise<infer V> ? V : T

type Test1 = IsArray<number[]>     // true
type Test2 = IsArray<string>        // false
type Test3 = ElementOf<string[]>    // string
type Test4 = Unwrap<Promise<number>>  // number

const arr: Test1 = true
console.log(arr)`,
        verification: '使用了条件类型和 infer 关键字',
        solution: `解题步骤：
1. T extends any[] ? true : false — 判断是否是数组
2. T extends (infer E)[] ? E : never — 用 infer 提取元素
3. T extends Promise<infer V> ? V : T — 解包 Promise`,
        filePath: 'src/conditional-types.ts',
        cognitiveLoad: 'high',
        dependsOn: ['ts-8'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': 'extends 条件',
          'verification': 'extends any[]',
          'hint': '用 extends 写条件类型',
          docLinks: [{title: 'extends 条件', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '三元类型判断',
          'verification': '? true : false',
          'hint': '真分支和假分支都需定义',
          docLinks: [{title: '三元类型判断', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': 'infer 推断',
          'verification': 'infer',
          'hint': '用 infer 在条件中推断类型',
          docLinks: [{title: 'infer 推断', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         }
         ],
        variations: [
         {
          'name': 'v-show',
          'description': 'v-show 只切换 display，频繁切换性能更好'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],

        docLinks: [
        { title: '条件类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/conditional-types.html' }
        ],
      },
      {
        id: 'ts-10',
        number: 10,
        title: '模板字面量类型',
        concept: 'Template Literal',
        difficulty: 'hard',
        task: '创建模板字面量类型生成事件名称组合',
        prerequisites: `<h4>📝 模板字面量类型</h4>
<p>TypeScript 支持在类型中使用模板字面量：</p>
<pre><code>// 基本用法
type EventName = "click" | "scroll"
type Handler = \`on\${Capitalize&lt;EventName&gt;}\`
// "onClick" | "onScroll"

// 组合
type Color = "red" | "blue"
type Size = "sm" | "lg"
type ColorSize = \`\${Color}-\${Size}\`
// "red-sm" | "red-lg" | "blue-sm" | "blue-lg"
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>模板字面量类型在编译期生成字符串联合</li>
  <li>配合 <code>Capitalize</code>、<code>Uppercase</code> 等工具类型</li>
  <li>可以组合多个联合类型</li>
</ul>`,
        conceptDetail: `步骤 1 — 基本模板字面量类型
用反引号定义模板字面量类型，\`\${'{T}'}\` 插入类型。

步骤 2 — 内置字符串操作类型
[Capitalize](首字母大写)、[Uppercase](全大写)、[Lowercase](全小写)。

步骤 3 — 组合多个联合类型
多个联合类型的模板字面量会产生笛卡尔积。`,
        contextCode: `// 模板字面量类型示例

// 基本
type Greeting = \`Hello, \${'{'}${'{string}}'}\`

// 联合组合
type Vertical = "top" | "middle" | "bottom"
type Horizontal = "left" | "center" | "right"
type Position = \`\${'{'}${'{Vertical}}'}-\${'{'}${'{Horizontal}}'}\`
// "top-left" | "top-center" | ... (9种组合)

// 内置字符串工具类型
type Upper = Uppercase&lt;"hello"&gt;  // "HELLO"
type Lower = Lowercase&lt;"HELLO"&gt;  // "hello"
type Cap = Capitalize&lt;"hello"&gt;   // "Hello"

// 事件处理
type Mouse = "click" | "dblclick" | "mouseup"
type Handler = \`on\${'{'}${'{Capitalize<Mouse>}}'}\`
// "onClick" | "onDblclick" | "onMouseup"`,
        starterCode: `// 1. 基本模板字面量
type Color = "red" | "blue" | "green"
type Size = "sm" | "md" | "lg"

// 组合 Color 和 Size
type ColorSize = ???

// 2. 用内置工具类型
type EventName = "click" | "scroll" | "resize"
type Handler = ???

// 验证类型
const size1: ColorSize = "red-sm"     // OK
const size2: ColorSize = "green-lg"   // OK
const handler: Handler = "onClick"    // OK

console.log(size1, size2, handler)`,
        hints: [
          '`\${Color}-\${Size}` 组合两个联合类型',
          '`on\${Capitalize<EventName>}` 用 Capitalize 工具类型',
          '模板字面量会自动产生所有组合'
        ],
        code: `type Color = "red" | "blue" | "green"
type Size = "sm" | "md" | "lg"

type ColorSize = \`\${'{'}${'{Color}}'}-\${'{'}${'{Size}}'}\`

type EventName = "click" | "scroll" | "resize"
type Handler = \`on\${'{'}${'{Capitalize<EventName>}}'}\`

const size1: ColorSize = "red-sm"
const size2: ColorSize = "green-lg"
const handler: Handler = "onClick"

console.log(size1, size2, handler)`,
        verification: '使用了模板字面量类型组合联合类型',
        solution: `解题步骤：
1. \`\${Color}-\${Size}\` 组合两个联合类型
2. \`on\${Capitalize<EventName>}\` 用内置工具类型
3. 模板字面量会自动产生笛卡尔积`,
        filePath: 'src/template-literal.ts',
        cognitiveLoad: 'high',
        dependsOn: ['ts-9'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '模板字面量类型',
           'verification': '\`\${Color}\`',
          'hint': '用模板字面量语法创建类型',
          docLinks: [{title: '模板字面量类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '联合组合',
           'verification': '"red" |',
          'hint': '用联合类型组合多个字面量',
          docLinks: [{title: '联合组合', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/everyday-types.html#union-types'}],
         },
         {
          'id': 'step-3',
          'title': '模板与泛型',
           'verification': 'Capitalize<',
          'hint': '结合泛型参数生成动态类型',
          docLinks: [{title: '模板与泛型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html'}],
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
        { title: '模板字面量类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/template-literal-types.html' }
        ],
      }
    ]
  },
  {
    id: 'ts-practical',
    name: '阶段三：实战应用',
    description: '掌握类、枚举、声明文件与泛型工具类型，实战类型安全的 API 客户端',
    levels: [
      {
        id: 'ts-11',
        number: 11,
        title: '类与继承',
        concept: 'class / extends',
        difficulty: 'medium',
        task: '创建一个 Animal 基类和 Dog 子类',
        prerequisites: `<h4>🐕 类与继承</h4>
<p>TypeScript 的类支持访问修饰符和类型注解：</p>
<pre><code>class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  speak(): string {
    return \`\${'{'}${'{this.name}}'} makes a sound\`
  }
}

class Dog extends Animal {
  breed: string
  constructor(name: string, breed: string) {
    super(name)
    this.breed = breed
  }
  speak(): string {
    return \`\${'{'}${'{this.name}}'} barks\`
  }
}
</code></pre>

<h4>🔑 访问修饰符</h4>
<ul>
  <li><code>public</code> — 公开（默认）</li>
  <li><code>private</code> — 私有</li>
  <li><code>protected</code> — 受保护（子类可访问）</li>
  <li><code>readonly</code> — 只读</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义基类
[class](类定义) 定义构造函数和方法，添加类型注解。

步骤 2 — 用 extends 继承
[extends](继承语法) 子类继承父类，super() 调用父构造函数。

步骤 3 — 方法重写
子类可以重写父类的方法，实现多态。`,
        contextCode: `// 类与继承示例

class Shape {
  constructor(public color: string) {}

  area(): number {
    return 0
  }

  describe(): string {
    return \`\${'{'}${'{this.color}'} shape, area: \${'{'}${'{this.area()}}'}\`
  }
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color)
  }

  area(): number {
    return Math.PI * this.radius ** 2
  }
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color)
  }

  area(): number {
    return this.width * this.height
  }
}

const circle = new Circle("red", 5)
console.log(circle.describe())  // red shape, area: 78.54`,
        starterCode: `// 1. 定义 Animal 基类
class Animal {
  constructor(public name: string, public age: number) {}

  // 方法：返回动物信息
  getInfo(): string {
    ???
  }
}

// 2. 定义 Dog 子类，继承 Animal
class Dog extends Animal {
  constructor(name: string, age: number, public breed: string) {
    ???
  }

  // 重写 getInfo
  getInfo(): string {
    ???
  }

  // 新增方法：狗会叫
  bark(): string {
    ???
  }
}

const dog = new Dog("旺财", 3, "金毛")
console.log(dog.getInfo())  // "旺财, 3岁, 金毛"
console.log(dog.bark())     // "旺财: 汪汪！"`,
        hints: [
          'class Animal { constructor(public name: string) {} }',
          'extends Animal 继承，super(name) 调用父构造',
          '子类可以重写父类方法'
        ],
        code: `class Animal {
  constructor(public name: string, public age: number) {}

  getInfo(): string {
    return \`\${'{'}${'{this.name}}'}, \${'{'}${'{this.age}}'}岁\`
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, public breed: string) {
    super(name, age)
  }

  getInfo(): string {
    return \`\${'{'}${'{super.getInfo()}}'}, \${'{'}${'{this.breed}}'}\`
  }

  bark(): string {
    return \`\${'{'}${'{this.name}}'}: 汪汪！\`
  }
}

const dog = new Dog("旺财", 3, "金毛")
console.log(dog.getInfo())
console.log(dog.bark())`,
        verification: '使用了 class 定义类，extends 实现继承',
        solution: `解题步骤：
1. class Animal 定义基类和构造函数
2. extends Animal 继承，super() 调用父构造
3. 子类重写 getInfo 和新增 bark 方法`,
        filePath: 'src/classes.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-10'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义类',
          'verification': 'class',
          'hint': '用 class 关键字定义类',
          docLinks: [{title: '定义类', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '访问修饰符',
          'verification': 'public',
          'hint': '用 private/public/protected 控制访问',
          docLinks: [{title: '访问修饰符', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': 'extends 继承',
          'verification': 'extends',
          'hint': '用 extends 实现类继承',
          docLinks: [{title: 'extends 继承', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
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
        { title: '类 (Class)', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/classes.html' },
        { title: '继承与 implements', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/classes.html#implements-clauses' }
        ],
      },
      {
        id: 'ts-12',
        number: 12,
        title: '枚举',
        concept: 'enum',
        difficulty: 'medium',
        task: '用枚举定义方向、状态码等常量',
        prerequisites: `<h4>📊 枚举</h4>
<p>枚举用于定义一组命名常量：</p>
<pre><code>// 数字枚举
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

// 字符串枚举
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}

// 使用
const dir = Direction.Up
const status = Status.Active
</code></pre>

<h4>🔑 枚举类型</h4>
<ul>
  <li><code>enum</code> — 数字枚举（默认从 0 开始）</li>
  <li><code>const enum</code> — 编译时内联</li>
  <li>字符串枚举 — 每个成员必须是字符串</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义数字枚举
[enum](枚举定义) 定义一组常量，数字枚举默认从 0 递增。

步骤 2 — 定义字符串枚举
每个成员赋值字符串，语义更明确。

步骤 3 — 使用枚举
用 枚举名.成员名 访问，类型安全。`,
        contextCode: `// 枚举示例

// 数字枚举
enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3
}

// 字符串枚举
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

// const 编译时内联
const enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

// 枚举在函数中
function move(direction: Direction): string {
  switch (direction) {
    case Direction.Up: return "向上"
    case Direction.Down: return "向下"
    case Direction.Left: return "向左"
    case Direction.Right: return "向右"
  }
}

console.log(move(Direction.Up))  // "向上"`,
        starterCode: `// 1. 定义 HTTP 状态码枚举
enum HttpStatus {
  // 填入：OK = 200, NotFound = 404, Error = 500
  ???
}

// 2. 定义颜色字符串枚举
enum Color {
  // 填入：Red = "RED", Green = "GREEN", Blue = "BLUE"
  ???
}

// 3. 使用枚举
function getStatus(code: HttpStatus): string {
  // 用 switch 返回描述
  ???
}

console.log(HttpStatus.OK)         // 200
console.log(Color.Red)             // "RED"
console.log(getStatus(HttpStatus.NotFound))  // "Not Found"`,
        hints: [
          'enum HttpStatus { OK = 200, NotFound = 404, Error = 500 }',
          'enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }',
          'switch (code) { case HttpStatus.OK: return "OK" }'
        ],
        code: `enum HttpStatus {
  OK = 200,
  NotFound = 404,
  Error = 500
}

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

function getStatus(code: HttpStatus): string {
  switch (code) {
    case HttpStatus.OK: return "OK"
    case HttpStatus.NotFound: return "Not Found"
    case HttpStatus.Error: return "Server Error"
  }
}

console.log(HttpStatus.OK)
console.log(Color.Red)
console.log(getStatus(HttpStatus.NotFound))`,
        verification: '使用了 enum 定义了数字和字符串枚举',
        solution: `解题步骤：
1. enum 定义数字枚举：OK = 200, NotFound = 404, Error = 500
2. enum 定义字符串枚举：Red = "RED" 等
3. switch 语句根据枚举值返回描述`,
        filePath: 'src/enums.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-11'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义枚举',
          'verification': 'enum',
          'hint': '用 enum 关键字定义枚举类型',
          docLinks: [{title: '定义枚举', url: 'https://www.typescriptlang.org/zh/docs/handbook/enums.html'}],
         },
         {
          'id': 'step-2',
          'title': '访问枚举成员',
          'verification': 'Direction.Up',
          'hint': '通过枚举名.成员名访问',
          docLinks: [{title: '访问枚举成员', url: 'https://www.typescriptlang.org/zh/docs/handbook/enums.html'}],
         },
         {
          'id': 'step-3',
          'title': '字符串枚举',
          'verification': "Status.Success = 'SUCCESS'",
          'hint': '枚举成员可以赋字符串值',
          docLinks: [{title: '字符串枚举', url: 'https://www.typescriptlang.org/zh/docs/handbook/enums.html'}],
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
        { title: '枚举 (Enum)', url: 'https://www.typescriptlang.org/zh/docs/handbook/enums.html' }
        ],
      },
      {
        id: 'ts-13',
        number: 13,
        title: '声明文件',
        concept: '.d.ts',
        difficulty: 'medium',
        task: '创建声明文件为没有类型的第三方库添加类型',
        prerequisites: `<h4>📄 声明文件</h4>
<p>声明文件（.d.ts）为 JavaScript 库提供类型信息：</p>
<pre><code>// declarations.d.ts
declare module "lodash" {
  export function debounce&lt;T extends (...args: any[]) =&gt; any&gt;(
    func: T,
    wait?: number
  ): T
}

declare module "moment" {
  function moment(input?: string | number | Date): Moment
  export default moment
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>declare module</code> — 为模块声明类型</li>
  <li><code>declare global</code> — 扩展全局类型</li>
  <li><code>.d.ts</code> 文件不包含实现</li>
</ul>`,
        conceptDetail: `步骤 1 — declare module 声明模块
[declare module](模块声明) 为第三方库或不存在的模块提供类型。

步骤 2 — 声明全局类型
[declare global](全局声明) 扩展 Window、Document 等全局对象。

步骤 3 — 类型导出
用 export 导出类型，让其他文件可以使用。`,
        contextCode: `// 声明文件示例

// declarations.d.ts

// 为第三方库声明类型
declare module "some-lib" {
  export function doSomething(input: string): number
  export interface Config {
    debug: boolean
    timeout: number
  }
}

// 扩展全局
declare global {
  interface Window {
    __APP_VERSION__: string
  }
}

// 扩展 Date
declare global {
  interface Date {
    format(pattern: string): string
  }
}

// 使用时 TypeScript 就能识别这些类型
import { doSomething } from "some-lib"
console.log(window.__APP_VERSION__)`,
        starterCode: `// declarations.d.ts
// 为自定义库声明类型

// 1. 声明 math-utils 模块
declare module "math-utils" {
  export function add(a: number, b: number): number
  export function multiply(a: number, b: number): number
  export const PI: number
}

// 2. 扩展 Window 全局
declare global {
  interface Window {
    // 添加 appVersion 属性
    ???
  }
}

// 3. 扩展 Array 原型
declare global {
  interface Array<T> {
    // 添加自定义方法
    ???
  }
}`,
        hints: [
          'declare module "name" { ... } 声明模块类型',
          'declare global { interface Window { ... } } 扩展全局',
          '.d.ts 文件只包含类型声明，不包含实现'
        ],
        code: `declare module "math-utils" {
  export function add(a: number, b: number): number
  export function multiply(a: number, b: number): number
  export const PI: number
}

declare global {
  interface Window {
    appVersion: string
  }
}

declare global {
  interface Array<T> {
    first(): T | undefined
    last(): T | undefined
  }
}`,
        verification: '创建了 .d.ts 声明文件，使用了 declare module 和 declare global',
        solution: `解题步骤：
1. declare module "name" { ... } 声明模块类型
2. declare global { ... } 扩展全局类型
3. .d.ts 文件只写类型声明，不写实现`,
        filePath: 'src/declarations.d.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-12'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '全局类型声明',
          'verification': 'declare',
          'hint': '用 declare 声明全局类型',
          docLinks: [{title: '全局类型声明', url: 'https://www.typescriptlang.org/zh/docs/handbook/declaration-files/introduction.html'}],
         },
         {
          'id': 'step-2',
          'title': '模块声明',
          'verification': "declare module 'lodash'",
          'hint': '用 declare module 声明第三方模块',
          docLinks: [{title: '模块声明', url: 'https://www.typescriptlang.org/zh/docs/handbook/modules.html'}],
         },
         {
          'id': 'step-3',
          'title': '合并声明',
          'verification': 'interface',
          'hint': '同名声明自动合并',
          docLinks: [{title: '合并声明', url: 'https://www.typescriptlang.org/zh/docs/handbook/declaration-files/introduction.html'}],
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
        { title: '声明文件', url: 'https://www.typescriptlang.org/zh/docs/handbook/declaration-files/introduction.html' },
        { title: '声明合并', url: 'https://www.typescriptlang.org/zh/docs/handbook/declaration-merging.html' }
        ],
      },
      {
        id: 'ts-14',
        number: 14,
        title: '泛型工具类型',
        concept: 'Partial / Required / Pick',
        difficulty: 'medium',
        task: '使用内置工具类型 Partial、Required、Pick、Omit 处理类型',
        prerequisites: `<h4>🔧 工具类型</h4>
<p>TypeScript 内置的泛型工具类型：</p>
<pre><code>interface User {
  id: number
  name: string
  email: string
  age: number
}

// Partial - 所有属性可选
type P = Partial&lt;User&gt;
// { id?: number; name?: string; ... }

// Required - 所有属性必选
type R = Required&lt;Partial&lt;User&gt;&gt;

// Pick - 选取部分属性
type PU = Pick&lt;User, "id" | "name"&gt;
// { id: number; name: string }

// Omit - 排除部分属性
type NU = Omit&lt;User, "email" | "age"&gt;
// { id: number; name: string }
</code></pre>`,
        conceptDetail: `步骤 1 — Partial 使所有属性可选
[Partial](内置工具类型) 将接口所有属性变为可选。

步骤 2 — Required 使所有属性必选
[Required](内置工具类型) 将可选属性变为必选。

步骤 3 — Pick 和 Omit 选取/排除
[Pick](选取属性) 选择部分属性，[Omit](排除属性) 排除部分属性。`,
        contextCode: `// 内置工具类型示例

interface User {
  id: number
  name: string
  email: string
  age: number
}

// Partial - 更新时部分字段
function updateUser(id: number, updates: Partial&lt;User&gt;) {
  // updates 可以只包含部分属性
  console.log(id, updates)
}
updateUser(1, { name: "新名字" })

// Required - 确保所有字段
function createUser(user: Required&lt;Pick&lt;User, "name" | "email"&gt;&gt;) {
  console.log(user)
}

// Pick - 选择需要的
type UserBasic = Pick&lt;User, "id" | "name"&gt;

// Omit - 排除不需要的
type UserWithoutEmail = Omit&lt;User, "email"&gt;

// Record - 构造键值对类型
type UserMap = Record&lt;string, User&gt;`,
        starterCode: `interface Product {
  id: number
  name: string
  price: number
  description: string
  inStock: boolean
}

// 1. Partial：创建更新函数（可选字段）
function updateProduct(id: number, updates: ???): void {
  console.log("更新产品", id, updates)
}

// 2. Pick：创建简要信息
type ProductBasic = ???

// 3. Omit：创建不含描述的产品
type ProductCompact = ???

// 4. Required：确保完整产品数据
function createProduct(product: ???): Product {
  return product
}

// 测试
updateProduct(1, { name: "新名称" })  // OK
const basic: ProductBasic = { id: 1, name: "iPhone" }  // OK
const compact: ProductCompact = { id: 1, name: "iPhone", price: 6999, inStock: true }  // OK`,
        hints: [
          'Partial<Product> — 所有属性可选',
          'Pick<Product, "id" | "name"> — 选取属性',
          'Omit<Product, "description"> — 排除属性',
          'Required<Partial<Product>> — 所有属性必选'
        ],
        code: `interface Product {
  id: number
  name: string
  price: number
  description: string
  inStock: boolean
}

function updateProduct(id: number, updates: Partial<Product>): void {
  console.log("更新产品", id, updates)
}

type ProductBasic = Pick<Product, "id" | "name">

type ProductCompact = Omit<Product, "description">

function createProduct(product: Required<Product>): Product {
  return product
}

updateProduct(1, { name: "新名称" })
const basic: ProductBasic = { id: 1, name: "iPhone" }
const compact: ProductCompact = { id: 1, name: "iPhone", price: 6999, inStock: true }
console.log(basic, compact)`,
        verification: '使用了 Partial、Pick、Omit、Required 工具类型',
        solution: `解题步骤：
1. Partial<Product> — 更新函数使用可选属性
2. Pick<Product, "id" | "name"> — 选取基本字段
3. Omit<Product, "description"> — 排除描述
4. Required<Product> — 确保完整数据`,
        filePath: 'src/utility-types.ts',
        cognitiveLoad: 'medium',
        dependsOn: ['ts-13'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': 'Partial',
          'verification': 'Partial<',
          'hint': 'Partial 将所有属性变为可选',
          docLinks: [{title: 'Partial', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': 'Pick 和 Omit',
          'verification': 'Pick<',
          'hint': 'Pick 选取指定属性，Omit 排除',
          docLinks: [{title: 'Pick 和 Omit', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': 'Record',
          'verification': 'Pick<',
          'hint': 'Record 创建键值映射类型',
          docLinks: [{title: 'Record', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
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
        { title: '工具类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/utility-types.html' }
        ],
      },
      {
        id: 'ts-15',
        number: 15,
        title: '实战 - 类型安全的 API 客户端',
        concept: '综合实战',
        difficulty: 'hard',
        task: '构建一个完全类型安全的 HTTP API 客户端',
        prerequisites: `<h4>🎯 综合实战</h4>
<p>本关综合运用 TypeScript 特性构建类型安全的 API 客户端：</p>
<pre><code>功能清单：
1. 泛型请求函数（泛型基础）
2. 接口定义（接口与类型）
3. 路径参数类型（模板字面量）
4. 响应类型推断（条件类型）
5. 错误处理（类型守卫）
</code></pre>

<h4>🔑 涉及知识点</h4>
<ul>
  <li>泛型 — 参数化请求和响应类型</li>
  <li>接口 — 定义 API 响应结构</li>
  <li>联合类型 — HTTP 方法</li>
  <li>类型守卫 — 错误处理</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义 API 接口
用 interface 定义请求参数和响应结构。

步骤 2 — 泛型请求函数
用泛型参数化请求和响应类型，确保类型安全。

步骤 3 — 类型守卫处理错误
用 instanceof 或自定义守卫判断响应类型。`,
        contextCode: `// 类型安全的 API 客户端核心逻辑

interface ApiResponse<T> {
  data: T
  status: number
  ok: boolean
}

interface ApiError {
  message: string
  code: number
}

// 泛型请求函数
async function request<T>(
  url: string,
  options?: RequestInit
): Promise&lt;ApiResponse&lt;T&gt;&gt; {
  const res = await fetch(url, options)
  const data = await res.json()
  return { data, status: res.status, ok: res.ok }
}

// 使用
interface User { id: number; name: string }
const res = await request&lt;User[]&gt;("/api/users")
res.data.forEach(user => console.log(user.name))`,
        starterCode: `// 1. 定义 API 类型
interface ApiResponse<T> {
  data: T
  status: number
  ok: boolean
}

interface ApiError {
  message: string
  code: number
}

// 2. 定义用户和产品接口
interface User {
  id: number
  name: string
  email: string
}

interface Product {
  id: number
  name: string
  price: number
}

// 3. 泛型请求函数
async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(url, options)
  const data = await response.json()
  return {
    ???
  }
}

// 4. 类型守卫判断错误
function isError(response: unknown): response is ApiError {
  return typeof response === "object" && response !== null && "message" in response
}

// 5. 使用示例
async function getUsers() {
  const result = await apiRequest<User[]>("/api/users")
  if (result.ok) {
    result.data.forEach(user => console.log(user.name))
  }
}

async function getProduct(id: number) {
  const result = await apiRequest<Product>(\`/api/products/\${'{'}${'{id}}'}\`)
  if (result.ok) {
    console.log(result.data.price)
  }
}`,
        hints: [
          'ApiResponse<T> 泛型包装响应',
          'apiRequest<T> 泛型函数参数化类型',
          'response is ApiError 类型谓词',
          'result.ok 判断请求是否成功'
        ],
        code: `interface ApiResponse<T> {
  data: T
  status: number
  ok: boolean
}

interface ApiError {
  message: string
  code: number
}

interface User {
  id: number
  name: string
  email: string
}

interface Product {
  id: number
  name: string
  price: number
}

async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(url, options)
  const data = await response.json()
  return {
    data,
    status: response.status,
    ok: response.ok
  }
}

function isError(response: unknown): response is ApiError {
  return typeof response === "object" && response !== null && "message" in response
}

async function getUsers() {
  const result = await apiRequest<User[]>("/api/users")
  if (result.ok) {
    result.data.forEach(user => console.log(user.name))
  }
}

async function getProduct(id: number) {
  const result = await apiRequest<Product>(\`/api/products/\${'{'}${'{id}}'}\`)
  if (result.ok) {
    console.log(result.data.price)
  }
}`,
        verification: '综合运用泛型、接口、类型守卫构建了类型安全的 API 客户端',
        solution: `解题步骤：
1. ApiResponse<T> 用泛型包装响应数据
2. apiRequest<T> 泛型函数，调用时指定类型
3. isError 类型谓词判断错误
4. result.ok 判断成功后安全访问 data`,
        filePath: 'src/api-client.ts',
        cognitiveLoad: 'high',
        dependsOn: ['ts-14'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义 API 响应类型',
          'verification': 'interface ApiResponse',
          'hint': '定义泛型响应接口',
          docLinks: [{title: '定义 API 响应类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '泛型请求函数',
          'verification': '<T>',
          'hint': '请求函数使用泛型参数',
          docLinks: [{title: '泛型请求函数', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html'}],
         },
         {
          'id': 'step-3',
          'title': '类型安全调用',
          'verification': 'get<User>',
          'hint': '调用时指定返回类型',
          docLinks: [{title: '类型安全调用', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
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
        { title: 'TypeScript 类型操作', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/types-from-types.html' },
        { title: '泛型实践', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html' }
        ],
      }
    ]
  }
,
{
    id: 'type-tools',
    name: '阶段四：工具库项目实战',
    description: '综合运用 TypeScript 类型系统，从零搭建类型安全工具库',
    levels: [
            {
              id: 'ts-16',
              number: 16,
              type: 'project',
              project: 'type-tools',
              projectModule: '项目搭建',
              title: '工具库项目初始化',
              concept: 'TS 项目配置',
              difficulty: 'easy',
              task: '用 Vite 创建 TypeScript 库项目，配置 tsconfig.json 严格模式，设置构建输出',
              prerequisites: '<h4>📚 TypeScript 项目配置</h4><p><code>tsconfig.json</code> 配置 TS 编译选项。<code>strict: true</code> 启用所有严格检查。<code>declaration: true</code> 生成 .d.ts 类型声明文件。</p>',
              conceptDetail: 'tsconfig.json 配置编译选项。strict 启用全部严格检查。declaration 生成 .d.ts 类型声明。',
              contextCode: '',
              hints: [
                'npm create vite@latest type-tools -- --template vanilla-ts',
                'tsconfig.json 设置 strict: true, declaration: true',
                'package.json 配置 main/types/files 字段'
              ],
              code: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext",\n    "strict": true,\n    "declaration": true,\n    "declarationMap": true,\n    "sourceMap": true,\n    "outDir": "dist",\n    "rootDir": "src"\n  },\n  "include": ["src"]\n}',
              verification: 'tsconfig.json 配置严格模式和类型声明生成',
              filePath: 'tsconfig.json',
              projectFiles: {
                'tsconfig.json': '',
                'package.json': '',
                'src/index.ts': ''
              },
              cognitiveLoad: 'low',
              dependsOn: ['ts-15'],
              commonMistakes: [],
         microSteps: [
         {
          'id': 'step-1',
          'title': '初始化项目',
          'verification': 'compilerOptions',
          'hint': '用 npm init 创建项目',
          docLinks: [{title: '初始化项目', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '安装依赖',
          'verification': '"include"',
          'hint': '安装 typescript 和 tsconfig 配置',
          docLinks: [{title: '安装依赖', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '添加构建脚本',
          'verification': '"build"',
          'hint': '在 package.json 中添加构建命令',
          docLinks: [{title: '添加构建脚本', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         }
         ],
              variations: [
                {
                  name: 'tsup',
                  description: '基于 esbuild 的 TS 打包工具'
                }
              ],
              transferTasks: [
                {
                  task: '添加 ESLint 和 Prettier 配置',
                  target: '掌握代码质量工具配置'
                }
              ],

        docLinks: [
        { title: 'TypeScript 项目配置', url: 'https://www.typescriptlang.org/zh/tsconfig/' },
        { title: 'npm 包管理', url: 'https://docs.npmjs.com/packages-and-modules' }
        ],
            },
            {
              id: 'ts-17',
              number: 17,
              type: 'project',
              project: 'type-tools',
              projectModule: '类型工具',
              title: '泛型工具函数',
              concept: '泛型约束',
              difficulty: 'medium',
              task: '实现一组泛型工具函数：deepClone、pick、omit、debounce、throttle，带完整类型声明',
              prerequisites: '<h4>📚 泛型约束</h4><p><code>&lt;T extends object&gt;</code> 泛型约束确保传入对象类型。<code>keyof T</code> 获取 T 的所有键。</p>',
              conceptDetail: '泛型是类型参数。keyof 获取所有键的联合类型。Pick 选取属性。Omit 排除属性。',
              contextCode: '',
              hints: [
                'T extends object 约束泛型为对象类型',
                'K extends keyof T 约束为 T 的键',
                'ReturnType<T> 提取函数返回类型'
              ],
              code: 'function deepClone<T>(obj: T): T {\n  return JSON.parse(JSON.stringify(obj))\n}\n\nfunction pick<T extends object, K extends keyof T>(\n  obj: T, keys: K[]\n): Pick<T, K> {\n  return keys.reduce((acc, key) => {\n    acc[key] = obj[key]\n    return acc\n  }, {} as Pick<T, K>)\n}\n\nfunction omit<T extends object, K extends keyof T>(\n  obj: T, keys: K[]\n): Omit<T, K> {\n  const result = { ...obj }\n  keys.forEach(key => delete result[key])\n  return result as Omit<T, K>\n}\n\nfunction debounce<T extends (...args: any[]) => any>(\n  fn: T, delay: number\n): (...args: Parameters<T>) => void {\n  let timer: ReturnType<typeof setTimeout>\n  return (...args) => {\n    clearTimeout(timer)\n    timer = setTimeout(() => fn(...args), delay)\n  }\n}',
              verification: 'deepClone/pick/omit/debounce 带完整泛型类型声明',
              filePath: 'src/utils/index.ts',
              projectFiles: {
                'src/utils/index.ts': '',
                'src/index.ts': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'ts-16'
              ],
              commonMistakes: [
                {
                  pattern: 'as Pick<T, K>',
                  explanation: 'reduce 累加器类型需断言为精确类型'
                },
                {
                  pattern: 'Parameters<T>',
                  explanation: '用 Parameters<T> 提取函数参数类型'
                }
              ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义泛型函数签名',
          'verification': '<T>',
          'hint': '定义接收泛型参数的函数',
          docLinks: [{title: '定义泛型函数签名', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html'}],
         },
         {
          'id': 'step-2',
          'title': '实现通用逻辑',
          'verification': 'extends',
          'hint': '用泛型约束实现类型安全逻辑',
          docLinks: [{title: '实现通用逻辑', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '导出工具函数',
          'verification': 'function deepClone',
          'hint': '导出工具函数供外部使用',
          docLinks: [{title: '导出工具函数', url: 'https://www.typescriptlang.org/zh/docs/handbook/utility-types.html'}],
         }
         ],
              variations: [
                {
                  name: 'lodash',
                  description: '业界标准的工具库，功能更全面'
                }
              ],
              transferTasks: [
                {
                  task: '添加深层 pick（支持 a.b.c 路径）',
                  target: '掌握递归类型'
                }
              ],

        docLinks: [
        { title: '泛型工具函数', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/generics.html' }
        ],
            },
            {
              id: 'ts-18',
              number: 18,
              type: 'project',
              project: 'type-tools',
              projectModule: '类型守卫',
              title: '类型守卫与类型谓词',
              concept: '类型保护',
              difficulty: 'hard',
              task: '实现 isString/isNumber/isArray/isObject 类型守卫，使用 is 类型谓词返回精确类型',
              prerequisites: '<h4>📚 类型谓词</h4><p><code>paramName is Type</code> 是类型谓词语法，告诉 TS 编译器在 true 分支中参数是指定类型。</p>',
              conceptDetail: '类型谓词 is Type 语法。typeof 获取值的类型。never 类型用于穷尽检查。',
              contextCode: '',
              hints: [
                'function isString(value: unknown): value is string',
                'typeof value === "string"',
                'Array.isArray(value) 判断数组'
              ],
              code: 'function isString(value: unknown): value is string {\n  return typeof value === \'string\'\n}\n\nfunction isNumber(value: unknown): value is number {\n  return typeof value === \'number\' && !isNaN(value)\n}\n\nfunction isArray<T = unknown>(value: unknown): value is T[] {\n  return Array.isArray(value)\n}\n\nfunction isObject(value: unknown): value is Record<string, unknown> {\n  return typeof value === \'object\' && value !== null && !Array.isArray(value)\n}\n\nfunction processValue(value: unknown) {\n  if (isString(value)) {\n    console.log(value.toUpperCase())\n  } else if (isNumber(value)) {\n    console.log(value.toFixed(2))\n  }\n}',
              verification: 'isString/isNumber/isArray/isObject 类型守卫使用 is 谓词',
              filePath: 'src/guards/index.ts',
              projectFiles: {
                'src/guards/index.ts': '',
                'src/index.ts': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'ts-17'
              ],
              commonMistakes: [
                {
                  pattern: 'value is string',
                  explanation: '类型谓词 function fn(x: unknown): x is Type'
                },
                {
                  pattern: 'typeof null',
                  explanation: 'typeof null === "object"，需额外 null 检查'
                }
              ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义类型谓词',
          'verification': 'isString(',
          'hint': '用 is 关键字定义谓词返回类型',
          docLinks: [{title: '定义类型谓词', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '实现守卫函数',
          'verification': ': value is',
          'hint': '函数返回类型用 is 谓词',
          docLinks: [{title: '实现守卫函数', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '使用守卫',
          'verification': 'if (isString(value))',
          'hint': '在条件中使用类型守卫收窄类型',
          docLinks: [{title: '使用守卫', url: 'https://www.typescriptlang.org/zh/docs/handbook/intro.html'}],
         }
         ],
              variations: [
                {
                  name: 'zod',
                  description: '运行时类型校验 + 类型推断库'
                }
              ],
              transferTasks: [
                {
                  task: '实现类型安全的深比较函数',
                  target: '掌握递归类型守卫'
                }
              ],

        docLinks: [
        { title: '类型守卫与类型谓词', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/narrowing.html#using-type-predicates' }
        ],
            },
            {
              id: 'ts-19',
              number: 19,
              type: 'project',
              project: 'type-tools',
              projectModule: '高级类型',
              title: '高级工具类型',
              concept: '条件类型 + 映射类型',
              difficulty: 'hard',
              task: '实现高级工具类型：DeepReadonly、DeepRequired、Nullable、ReturnPromiseType',
              prerequisites: '<h4>📚 条件类型和映射类型</h4><p><code>T extends U ? X : Y</code> 条件类型。<code>{ [K in keyof T]: T[K] }</code> 映射类型。</p>',
              conceptDetail: '条件类型 T extends U ? X : Y。映射类型 [K in keyof T] 遍历键。infer 在条件类型中推断类型变量。',
              contextCode: '',
              hints: [
                '递归映射类型：{ [K in keyof T]: DeepReadonly<T[K]> }',
                'infer R 提取 Promise 内部类型',
                'keyof any = string | number | symbol'
              ],
              code: 'type DeepReadonly<T> = {\n  readonly [K in keyof T]: T[K] extends object\n    ? DeepReadonly<T[K]>\n    : T[K]\n}\n\ntype DeepRequired<T> = {\n  [K in keyof T]-?: T[K] extends object\n    ? DeepRequired<T[K]>\n    : T[K]\n}\n\ntype Nullable<T> = T | null | undefined\n\ntype ReturnPromiseType<T extends (...args: any) => any> =\n  T extends (...args: any) => Promise<infer R> ? R : never\n\ntype User = {\n  name?: string\n  address?: { city?: string }\n}\ntype RequiredUser = DeepRequired<User>',
              verification: '实现 DeepReadonly/DeepRequired/Nullable/ReturnPromiseType 高级工具类型',
              filePath: 'src/types/advanced.ts',
              projectFiles: {
                'src/types/advanced.ts': '',
                'src/index.ts': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'ts-18'
              ],
              commonMistakes: [
                {
                  pattern: '-?',
                  explanation: '-? 映射类型中移除可选标记，将所有 ? 变为必选'
                },
                {
                  pattern: 'infer R',
                  explanation: 'infer 只能在条件类型的 extends 子句中使用'
                }
              ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '定义映射类型',
          'verification': 'in keyof',
          'hint': '用 in keyof 遍历类型属性',
          docLinks: [{title: '定义映射类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/mapped-types.html'}],
         },
         {
          'id': 'step-2',
          'title': '条件类型转换',
          'verification': 'extends',
          'hint': '根据条件转换属性类型',
          docLinks: [{title: '条件类型转换', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/conditional-types.html'}],
         },
         {
          'id': 'step-3',
          'title': '组合工具类型',
          'verification': '&',
          'hint': '用交叉类型组合多个工具类型',
          docLinks: [{title: '组合工具类型', url: 'https://www.typescriptlang.org/zh/docs/handbook/utility-types.html'}],
         }
         ],
              variations: [
                {
                  name: 'type-fest',
                  description: '社区高级工具类型集合库'
                }
              ],
              transferTasks: [
                {
                  task: '实现 CamelCase 类型（下划线转驼峰）',
                  target: '掌握模板字面量类型'
                }
              ],

        docLinks: [
        { title: '映射类型与条件类型结合', url: 'https://www.typescriptlang.org/zh/docs/handbook/2/mapped-types.html' }
        ],
            },
            {
              id: 'ts-20',
              number: 20,
              type: 'project',
              project: 'type-tools',
              projectModule: '构建发布',
              title: '库构建与发布配置',
              concept: 'npm 包发布',
              difficulty: 'medium',
              task: '配置构建脚本、package.json 入口文件、类型声明导出，准备发布 npm',
              prerequisites: '<h4>📚 npm 包配置</h4><p>package.json 中的 <code>main</code>（CJS 入口）、<code>module</code>（ESM 入口）、<code>types</code>（类型声明）字段。</p>',
              conceptDetail: 'package.json 定义包入口。main 是 CommonJS 入口，module 是 ES Module 入口。types 指向类型声明。',
              contextCode: '',
              hints: [
                '"main": "dist/index.js" CommonJS 入口',
                '"module": "dist/index.mjs" ESM 入口',
                '"types": "dist/index.d.ts" 类型声明入口'
              ],
              code: '{\n  "name": "@your-scope/type-tools",\n  "version": "0.1.0",\n  "main": "dist/index.js",\n  "module": "dist/index.mjs",\n  "types": "dist/index.d.ts",\n  "files": ["dist"],\n  "scripts": {\n    "build": "tsup src/index.ts --dts --format cjs,esm",\n    "test": "vitest run",\n    "lint": "tsc --noEmit"\n  }\n}',
              verification: 'package.json 配置了 main/module/types 入口和构建脚本',
              filePath: 'package.json',
              projectFiles: {
                'package.json': '',
                'src/index.ts': '',
                'README.md': '# type-tools\\n\\n类型安全工具库'
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'ts-19'
              ],
              commonMistakes: [
                {
                  pattern: '"files"',
                  explanation: 'files 字段限制发布到 npm 的文件，避免包含源码'
                },
                {
                  pattern: 'types',
                  explanation: 'types 字段指向生成的 .d.ts 文件'
                }
              ],
         microSteps: [
         {
          'id': 'step-1',
          'title': '配置 tsconfig',
          'verification': '"declaration": true',
          'hint': '开启类型声明文件生成',
          docLinks: [{title: '配置 tsconfig', url: 'https://www.typescriptlang.org/zh/tsconfig'}],
         },
         {
          'id': 'step-2',
          'title': '配置构建输出',
          'verification': '"outDir"',
          'hint': '设置编译输出目录为 dist',
          docLinks: [{title: '配置构建输出', url: 'https://www.typescriptlang.org/zh/tsconfig'}],
         },
         {
          'id': 'step-3',
          'title': '配置入口文件',
          'verification': '"main"',
          'hint': '在 package.json 中设置主入口',
          docLinks: [{title: '配置入口文件', url: 'https://www.typescriptlang.org/zh/tsconfig'}],
         }
         ],
              variations: [
                {
                  name: 'unpkg/cdn',
                  description: 'UMD 格式 CDN 分发'
                }
              ],
              transferTasks: [
                {
                  task: '添加语义化版本发布脚本',
                  target: '掌握 npm version 命令'
                }
              ],

        docLinks: [
        { title: 'TypeScript 构建配置', url: 'https://www.typescriptlang.org/zh/tsconfig/' },
        { title: 'npm publish', url: 'https://docs.npmjs.com/cli/v10/commands/npm-publish' }
        ],
            }
    ]
  }
]
