export const phases = [
  {
    id: 'react-fundamentals',
    name: '阶段一：React 基础',
    description: '掌握 React 核心概念：组件、Props、State、列表与条件渲染',
    levels: [
      {
        id: 'react-1',
        number: 1,
        title: '第一个组件',
        concept: 'JSX 语法',
        difficulty: 'easy',
        task: '创建一个显示 "Hello React!" 的函数组件',
        prerequisites: `<h4>⚛️ React 基础</h4>
<p>React 是一个用于构建用户界面的 JavaScript 库，组件是 React 的核心概念：</p>
<pre><code>// 函数组件 - 最简单的组件形式
function App() {
  return &lt;div&gt;Hello React!&lt;/div&gt;
}
</code></pre>

<h4>🔑 核心概念：JSX</h4>
<p>JSX 是 JavaScript 的语法扩展，让你在 JS 中编写 HTML：</p>
<ul>
  <li>JSX 必须有一个根元素（用 <code>&lt;div&gt;</code> 或 <code>&lt;&gt;</code> 包裹）</li>
  <li>所有标签必须闭合（<code>&lt;img /&gt;</code>）</li>
  <li>使用 <code>className</code> 代替 <code>class</code></li>
  <li>使用 <code>htmlFor</code> 代替 <code>for</code></li>
</ul>

<h4>⚠️ 常见错误</h4>
<ul>
  <li>组件名必须大写开头</li>
  <li>JSX 中不能使用 if/else 语句（用表达式）</li>
  <li>export default 导出组件</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解 JSX 语法
[JSX](JavaScript XML，JavaScript 的语法扩展) 允许你在 JavaScript 中直接编写 HTML 结构。JSX 最终会被编译为 React.createElement() 调用。

步骤 2 — 创建函数组件
[函数组件](React 组件的一种写法，用普通函数定义) 是最简单的组件形式。函数名就是组件名，返回值是 JSX。

步骤 3 — 导出和使用组件
使用 [export default](ES6 模块导出语法) 导出组件，在其他文件中 import 导入使用。`,
        contextCode: `// main.jsx - React 应用入口
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(&lt;App /&gt;)

// App.jsx - 你的组件会被渲染到 root 容器
// 组件函数名必须大写开头
// 返回值是 JSX（类似 HTML 的语法）`,
        starterCode: `// 在这里创建你的第一个 React 组件
// 组件名：HelloWorld
// 显示内容：Hello React!

function HelloWorld() {
  // 返回 JSX 显示 "Hello React!"
  ???
}

export default HelloWorld`,
        hints: [
          '函数组件就是一个返回 JSX 的函数',
          '用 return 返回 JSX：return <div>Hello React!</div>',
          '别忘了 export default 导出组件'
        ],
        code: `function HelloWorld() {
  return &lt;div&gt;Hello React!&lt;/div&gt;
}

export default HelloWorld`,
        verification: '组件正确显示 "Hello React!"，使用了函数组件语法',
        solution: `解题步骤：
1. 定义一个大写开头的函数 HelloWorld
2. 在函数中 return 一个包含 "Hello React!" 的 JSX 元素
3. 用 export default 导出组件`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
         {
          'pattern': 'useState',
          'explanation': 'useState 更新是异步的'
         },
         {
          'pattern': 'useEffect',
          'explanation': 'useEffect 依赖数组不能省略'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '定义函数组件',
          'verification': 'function HelloWorld',
          'hint': '用 function 关键字定义 HelloWorld 组件',
          docLinks: [{title: '定义函数组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-2',
          'title': '返回 JSX',
          'verification': 'return <div>',
          'hint': '在函数中 return JSX 元素',
          docLinks: [{title: '返回 JSX', url: 'https://zh-hans.react.dev/learn/writing-markup-with-jsx'}],
         },
         {
          'id': 'step-3',
          'title': '导出组件',
          'verification': 'export default',
          'hint': '用 export default 导出组件',
          docLinks: [{title: '导出组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         }
        ],
        variations: [
         {
          'name': 'Class 组件',
          'description': 'class 组件用 this.state 管理状态'
         }
        ],
        transferTasks: [
         {
          'task': '封装可复用表单组件含验证逻辑',
          'target': '掌握组件化开发'
         }
        ],

        docLinks: [
        { title: '你的第一个组件', url: 'https://zh-hans.react.dev/learn/your-first-component' },
        { title: '使用 JSX 编写标记', url: 'https://zh-hans.react.dev/learn/writing-markup-with-jsx' }
        ],
      },
      {
        id: 'react-2',
        number: 2,
        title: 'Props 传递',
        concept: '组件通信',
        difficulty: 'easy',
        task: '创建一个 UserCard 组件，通过 props 接收 name 和 age 并显示',
        prerequisites: `<h4>📦 Props 基础</h4>
<p>Props（属性）是父组件向子组件传递数据的方式：</p>
<pre><code>// 父组件传递 props
&lt;UserCard name="Alice" age={25} /&gt;

// 子组件接收 props
function UserCard(props) {
  return &lt;div&gt;{props.name} - {props.age}&lt;/div&gt;
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>Props 是只读的，子组件不能修改</li>
  <li>字符串用引号，数字用花括号</li>
  <li>可以解构 props：\`function UserCard({ name, age })\`</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解 Props 的作用
[Props](Properties，属性) 是 React 中组件间通信的机制。父组件通过 props 向子组件传递数据。

步骤 2 — 在组件中接收 Props
组件函数的第一个参数就是 props 对象。可以用 [解构语法](JavaScript 解构赋值) 直接提取需要的属性。

步骤 3 — 在 JSX 中使用 Props
在 JSX 中用 {props.xxx} 或直接 {xxx} 引用 props 值。`,
        contextCode: `// Props 使用示例
// 1. 传递字符串（直接写引号）
&lt;UserCard name="Alice" /&gt;

// 2. 传递数字（用花括号）
&lt;UserCard age={25} /&gt;

// 3. 传递布尔值
&lt;UserCard isActive={true} /&gt;

// 4. 传递函数
&lt;UserCard onClick={() => alert('hi')} /&gt;

// 5. 解构 props
function UserCard({ name, age }) {
  return &lt;div&gt;{name}, {age}岁&lt;/div&gt;
}`,
        starterCode: `// 创建 UserCard 组件，接收 name 和 age 属性并显示
// 用法：&lt;UserCard name="Alice" age={25} /&gt;

function UserCard(???) {
  // 显示格式："{name} - {age}岁"
  ???
}

export default UserCard`,
        hints: [
          '函数参数就是 props：function UserCard(props)',
          '用解构更简洁：function UserCard({ name, age })',
          '返回 JSX 显示 props 的值'
        ],
        code: `function UserCard({ name, age }) {
  return &lt;div&gt;{name} - {age}岁&lt;/div&gt;
}

export default UserCard`,
        verification: '组件接收 name 和 age 属性并在 JSX 中显示',
        solution: `解题步骤：
1. 在函数参数中接收 props（可用解构 { name, age }）
2. 返回包含 props 值的 JSX
3. 导出组件供父组件使用`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'low',
        dependsOn: ['react-1'],
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
          'title': '定义组件函数',
          'verification': 'function UserCard',
          'hint': '定义 UserCard 函数组件',
          docLinks: [{title: '定义组件函数', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-2',
          'title': '解构 props',
          'verification': '{ name, age }',
          'hint': '在函数参数中解构 name 和 age',
          docLinks: [{title: '解构 props', url: 'https://zh-hans.react.dev/learn/passing-props-to-a-component'}],
         },
         {
          'id': 'step-3',
          'title': '渲染数据',
          'verification': '{name} - {age}',
          'hint': '在 JSX 中显示 name 和 age',
          docLinks: [{title: '渲染数据', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: '向组件传递 Props', url: 'https://zh-hans.react.dev/learn/passing-props-to-a-component' }
        ],
      },
      {
        id: 'react-3',
        number: 3,
        title: 'useState 状态管理',
        concept: '状态 Hook',
        difficulty: 'easy',
        task: '创建一个计数器，点击按钮数字 +1',
        prerequisites: `<h4>🔄 useState Hook</h4>
<p>useState 让函数组件拥有状态（可变化的数据）：</p>
<pre><code>import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return &lt;button onClick={() => setCount(count + 1)}&gt;{count}&lt;/button&gt;
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>useState(初始值)</code> 返回 [当前值, 更新函数]</li>
  <li>更新状态会触发组件重新渲染</li>
  <li>状态更新是异步的，不要用当前状态计算新状态</li>
</ul>`,
        conceptDetail: `步骤 1 — 导入 useState
[useState](React Hook，为函数组件添加状态) 是最常用的 Hook，从 react 包导入。

步骤 2 — 声明状态
const [count, setCount] = useState(0) 使用数组解构获取 [当前值, setter函数]。

步骤 3 — 读取和更新状态
在 JSX 中直接使用 count 变量，在事件处理中调用 setCount 更新值。`,
        contextCode: `// useState 用法参考
import { useState } from 'react'

// 声明状态
const [count, setCount] = useState(0)

// 更新状态
setCount(count + 1)

// 基于旧值更新（推荐）
setCount(prev => prev + 1)

// 对象状态
const [user, setUser] = useState({ name: '', age: 0 })
setUser({ ...user, name: 'Alice' })  // 不能直接修改`,
        starterCode: `import { useState } from 'react'

function Counter() {
  // 声明 count 状态，初始值为 0
  ???

  return (
    &lt;div&gt;
      &lt;p&gt;计数：{???}&lt;/p&gt;
      &lt;button onClick={???}&gt;点击 +1&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default Counter`,
        hints: [
          'const [count, setCount] = useState(0)',
          '显示用 {count}，按钮点击时调用 setCount',
          'onClick={() => setCount(count + 1)}'
        ],
        code: `import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    &lt;div&gt;
      &lt;p&gt;计数：{count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;点击 +1&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default Counter`,
        verification: '使用了 useState 声明状态，按钮点击时更新计数值',
        solution: `解题步骤：
1. 导入 useState：import { useState } from 'react'
2. 声明状态：const [count, setCount] = useState(0)
3. 在 JSX 中显示 {count}
4. 按钮绑定 onClick={() => setCount(count + 1)}`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'low',
        dependsOn: ['react-2'],
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
          'title': '导入 useState',
          'verification': 'import.*useState',
          'hint': '从 react 导入 useState',
          docLinks: [{title: '导入 useState', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
         },
         {
          'id': 'step-2',
          'title': '声明状态',
          'verification': 'useState(0)',
          'hint': '用 useState(0) 声明 count 状态',
          docLinks: [{title: '声明状态', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
         },
         {
          'id': 'step-3',
          'title': '更新状态',
          'verification': 'setCount',
          'hint': '按钮点击时调用 setCount 更新数值',
          docLinks: [{title: '更新状态', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
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
        { title: 'useState 参考文档', url: 'https://zh-hans.react.dev/reference/react/useState' },
        { title: '组件的记忆', url: 'https://zh-hans.react.dev/learn/state-a-components-memory' }
        ],
      },
      {
        id: 'react-4',
        number: 4,
        title: '列表渲染',
        concept: 'map + key',
        difficulty: 'easy',
        task: '用 map 方法渲染一个水果列表，每个项目带唯一 key',
        prerequisites: `<h4>📋 列表渲染</h4>
<p>React 中用 JavaScript 的 map 方法渲染数组：</p>
<pre><code>const fruits = ['🍎', '🍌', '🍇']
return (
  &lt;ul&gt;
    {fruits.map(fruit =&gt; (
      &lt;li key={fruit}&gt;{fruit}&lt;/li&gt;
    ))}
  &lt;/ul&gt;
)
</code></pre>

<h4>🔑 核心概念：key 属性</h4>
<ul>
  <li>key 帮助 React 识别列表项的变化</li>
  <li>key 必须是唯一的（用 id 或索引）</li>
  <li>不要用随机数作为 key</li>
</ul>`,
        conceptDetail: `步骤 1 — 准备数据数组
定义一个包含列表项的数组。

步骤 2 — 使用 map 渲染
[map](JavaScript 数组方法) 遍历数组，为每个元素返回一个 JSX 元素。

步骤 3 — 添加 key 属性
[key](React 列表的唯一标识符) 用于高效更新 DOM，必须放在最外层元素上。`,
        contextCode: `// map 渲染数组示例
const items = [1, 2, 3]

// 基本用法
items.map(item => &lt;div key={item}&gt;{item}&lt;/div&gt;)

// 带索引
items.map((item, index) =&gt;
  &lt;div key={index}&gt;{item}&lt;/div&gt;
)

// 对象数组
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]
users.map(user =&gt;
  &lt;div key={user.id}&gt;{user.name}&lt;/div&gt;
)`,
        starterCode: `function FruitList() {
  const fruits = ['🍎 苹果', '🍌 香蕉', '🍇 葡萄', '🍊 橘子']

  return (
    &lt;div&gt;
      &lt;h3&gt;水果列表&lt;/h3&gt;
      &lt;ul&gt;
        {/* 用 map 渲染列表，每个 li 要有 key */}
        ???
      &lt;/ul&gt;
    &lt;/div&gt;
  )
}

export default FruitList`,
        hints: [
          '用 fruits.map(fruit => <li key={fruit}>{fruit}</li>)',
          'key 放在最外层 <li> 元素上',
          'map 返回一个新的 JSX 数组'
        ],
        code: `function FruitList() {
  const fruits = ['🍎 苹果', '🍌 香蕉', '🍇 葡萄', '🍊 橘子']

  return (
    &lt;div&gt;
      &lt;h3&gt;水果列表&lt;/h3&gt;
      &lt;ul&gt;
        {fruits.map(fruit =&gt; (
          &lt;li key={fruit}&gt;{fruit}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  )
}

export default FruitList`,
        verification: '使用了 map 方法渲染列表，每个元素有唯一的 key',
        solution: `解题步骤：
1. 在 JSX 中用 {fruits.map(...)} 遍历数组
2. map 回调函数返回 <li> 元素
3. 每个 <li> 添加 key={fruit} 属性`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'low',
        dependsOn: ['react-3'],
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
          'title': '准备数据数组',
          'verification': 'const fruits',
          'hint': '定义水果列表数据',
          docLinks: [{title: '准备数据数组', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-2',
          'title': '用 map 遍历',
          'verification': '.map(',
          'hint': '用 map 方法遍历数组返回 JSX',
          docLinks: [{title: '用 map 遍历', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '添加唯一 key',
          'verification': 'key={fruit}',
          'hint': '为每个 li 元素添加唯一的 key 属性',
          docLinks: [{title: '添加唯一 key', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         }
        ],
        variations: [
         {
          'name': 'forEach',
          'description': 'forEach 遍历但不返回新数组'
         }
        ],
        transferTasks: [
         {
          'task': '用 filter + map + reduce 组合处理数据',
          'target': '掌握数组链式操作'
         }
        ],

        docLinks: [
        { title: '渲染列表', url: 'https://zh-hans.react.dev/learn/rendering-lists' },
        { title: 'key 的作用', url: 'https://zh-hans.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key' }
        ],
      },
      {
        id: 'react-5',
        number: 5,
        title: '条件渲染',
        concept: '三元表达式',
        difficulty: 'easy',
        task: '创建一个登录状态组件，根据 isLoggedIn 显示不同内容',
        prerequisites: `<h4>🔀 条件渲染</h4>
<p>React 中用 JavaScript 表达式做条件渲染：</p>
<pre><code>// 三元表达式
{isLoggedIn ? &lt;LogoutBtn /&gt; : &lt;LoginBtn /&gt;}

// 逻辑与
{isLoggedIn && &lt;WelcomeMsg /&gt;}

// if-else（提前返回）
if (!isLoggedIn) return &lt;LoginBtn /&gt;
return &lt;LogoutBtn /&gt;
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>JSX 中不能用 if/else 语句（用表达式）</li>
  <li>三元表达式：条件 ? 真值 : 假值</li>
  <li>逻辑与 &&：条件成立才渲染</li>
</ul>`,
        conceptDetail: `步骤 1 — 用三元表达式条件渲染
[三元表达式](JavaScript 条件表达式) condition ? trueValue : falseValue 是最常见的条件渲染方式。

步骤 2 — 用逻辑与短路渲染
[&& 运算符](逻辑与)：当条件为 true 时渲染后面的内容。

步骤 3 — 变量控制状态
用 useState 管理条件变量，点击事件切换状态。`,
        contextCode: `// 条件渲染三种方式

// 1. 三元表达式
{isLoggedIn ? &lt;p&gt;欢迎回来&lt;/p&gt; : &lt;p&gt;请登录&lt;/p&gt;}

// 2. 逻辑与
{isLoggedIn && &lt;p&gt;欢迎回来&lt;/p&gt;}

// 3. 提前返回
function Status({ isLoggedIn }) {
  if (!isLoggedIn) {
    return &lt;p&gt;请先登录&lt;/p&gt;
  }
  return &lt;p&gt;欢迎, {name}&lt;/p&gt;
}`,
        starterCode: `import { useState } from 'react'

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    &lt;div&gt;
      {/* 根据 isLoggedIn 显示不同内容 */}
      ???

      &lt;button onClick={() => setIsLoggedIn(!isLoggedIn)}&gt;
        {isLoggedIn ? '退出' : '登录'}
      &lt;/button&gt;
    &lt;/div&gt;
  )
}

export default LoginStatus`,
        hints: [
          '用三元表达式：isLoggedIn ? "欢迎回来" : "请登录"',
          'isLoggedIn && <p>额外信息</p> 也可以',
          '点击按钮切换 isLoggedIn 的值'
        ],
        code: `import { useState } from 'react'

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    &lt;div&gt;
      {isLoggedIn ? (
        &lt;p&gt;🎉 欢迎回来！&lt;/p&gt;
      ) : (
        &lt;p&gt;请先登录&lt;/p&gt;
      )}
      &lt;button onClick={() => setIsLoggedIn(!isLoggedIn)}&gt;
        {isLoggedIn ? '退出' : '登录'}
      &lt;/button&gt;
    &lt;/div&gt;
  )
}

export default LoginStatus`,
        verification: '使用了三元表达式条件渲染，根据状态显示不同内容',
        solution: `解题步骤：
1. 用 useState 管理 isLoggedIn 状态
2. 用三元表达式 {isLoggedIn ? <p>欢迎</p> : <p>请登录</p>}
3. 按钮点击时切换 isLoggedIn`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'low',
        dependsOn: ['react-4'],
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
          'title': '声明登录状态',
          'verification': 'useState(false)',
          'hint': '用 useState(false) 管理 isLoggedIn',
          docLinks: [{title: '声明登录状态', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
         },
         {
          'id': 'step-2',
          'title': '条件渲染',
          'verification': 'isLoggedIn ?',
          'hint': '用三元表达式根据状态显示不同内容',
          docLinks: [{title: '条件渲染', url: 'https://zh-hans.react.dev/learn/conditional-rendering'}],
         },
         {
          'id': 'step-3',
          'title': '切换按钮',
          'verification': 'setIsLoggedIn',
          'hint': '按钮点击时切换 isLoggedIn 的值',
          docLinks: [{title: '切换按钮', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: '条件渲染', url: 'https://zh-hans.react.dev/learn/conditional-rendering' }
        ],
      }
    ]
  },
  {
    id: 'hooks-advanced',
    name: '阶段二：Hooks 进阶',
    description: '深入理解 React Hooks：useEffect、useRef、useContext、useReducer 与自定义 Hook',
    levels: [
      {
        id: 'react-6',
        number: 6,
        title: 'useEffect 副作用',
        concept: '副作用处理',
        difficulty: 'medium',
        task: '创建一个计时器组件，显示已运行秒数，卸载时清除计时器',
        prerequisites: `<h4>⏱️ useEffect 基础</h4>
<p>useEffect 处理组件的副作用（数据获取、订阅、定时器等）：</p>
<pre><code>import { useEffect } from 'react'

function Timer() {
  useEffect(() => {
    // 组件挂载后执行
    const id = setInterval(() => console.log('tick'), 1000)
    // 返回清理函数（组件卸载时执行）
    return () => clearInterval(id)
  }, [])  // 空数组 = 只执行一次
}
</code></pre>

<h4>🔑 依赖数组</h4>
<ul>
  <li><code>[]</code> — 只在挂载时执行一次</li>
  <li><code>[dep]</code> — dep 变化时执行</li>
  <li>不传 — 每次渲染都执行</li>
</ul>`,
        conceptDetail: `步骤 1 — 导入 useEffect
[useEffect](React Hook，处理副作用) 从 react 包导入。

步骤 2 — 设置副作用
useEffect 接收一个函数，该函数在组件渲染后执行。

步骤 3 — 清理副作用
返回一个清理函数（如清除定时器），防止内存泄漏。依赖数组控制执行时机。`,
        contextCode: `// useEffect 三种模式

// 1. 挂载时执行一次
useEffect(() => {
  console.log('组件挂载')
}, [])

// 2. 依赖变化时执行
useEffect(() => {
  console.log('count 变化:', count)
}, [count])

// 3. 每次渲染都执行（慎用）
useEffect(() => {
  console.log('每次渲染')
})

// 清理函数
useEffect(() => {
  const timer = setInterval(...)
  return () => clearInterval(timer)  // 卸载时清理
}, [])`,
        starterCode: `import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // 创建一个每秒执行的定时器
    ???

    // 返回清理函数
    ???
  }, [])

  return (
    &lt;div&gt;
      &lt;p&gt;已运行 {seconds} 秒&lt;/p&gt;
    &lt;/div&gt;
  )
}

export default Timer`,
        hints: [
          'useEffect 第一个参数是一个函数，里面写 setInterval',
          'setInterval(() => setSeconds(s => s + 1), 1000)',
          '返回 () => clearInterval(id) 清理定时器'
        ],
        code: `import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    &lt;div&gt;
      &lt;p&gt;已运行 {seconds} 秒&lt;/p&gt;
    &lt;/div&gt;
  )
}

export default Timer`,
        verification: '使用了 useEffect 创建定时器，并返回清理函数',
        solution: `解题步骤：
1. 导入 useEffect
2. 在 useEffect 中用 setInterval 每秒更新 seconds
3. 返回清理函数 () => clearInterval(id)
4. 依赖数组传空 [] 只执行一次`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-5'],
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
          'title': '导入 useEffect',
          'verification': 'import.*useEffect',
          'hint': '从 react 导入 useEffect',
          docLinks: [{title: '导入 useEffect', url: 'https://zh-hans.react.dev/learn/using-the-effect-hook'}],
         },
         {
          'id': 'step-2',
          'title': '创建定时器',
          'verification': 'setInterval',
          'hint': '用 setInterval 每秒更新 seconds',
          docLinks: [{title: '创建定时器', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '返回清理函数',
          'verification': 'clearInterval',
          'hint': '返回 clearInterval 清理函数防内存泄漏',
          docLinks: [{title: '返回清理函数', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
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
        { title: '使用 Effect 同步', url: 'https://zh-hans.react.dev/learn/synchronizing-with-effects' },
        { title: 'useEffect 参考文档', url: 'https://zh-hans.react.dev/reference/react/useEffect' }
        ],
      },
      {
        id: 'react-7',
        number: 7,
        title: 'useRef 引用',
        concept: 'DOM 引用',
        difficulty: 'medium',
        task: '创建一个输入框，点击按钮自动聚焦',
        prerequisites: `<h4>🎯 useRef 基础</h4>
<p>useRef 创建一个可变的引用对象，常用于访问 DOM 元素：</p>
<pre><code>import { useRef } from 'react'

function InputFocus() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    &lt;&gt;
      &lt;input ref={inputRef} /&gt;
      &lt;button onClick={handleClick}&gt;聚焦&lt;/button&gt;
    &lt;/&gt;
  )
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>useRef(null)</code> 创建引用对象</li>
  <li><code>ref={inputRef}</code> 绑定到 JSX 元素</li>
  <li><code>ref.current</code> 访问底层 DOM 节点</li>
  <li>修改 ref.current 不会触发重新渲染</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 ref 对象
[useRef](React Hook，创建可变引用) 返回一个对象 { current: initialValue }。

步骤 2 — 绑定到 DOM 元素
在 JSX 元素上添加 ref={refName} 属性。

步骤 3 — 操作 DOM
通过 ref.current 访问 DOM 节点，调用原生方法。`,
        contextCode: `// useRef 用法参考

// 创建 ref
const inputRef = useRef(null)
const timerRef = useRef(null)

// 绑定到 DOM
&lt;input ref={inputRef} /&gt;
&lt;div ref={divRef}&gt;...&lt;/div&gt;

// 操作 DOM
inputRef.current.focus()
inputRef.current.value = 'hello'

// 存储不触发渲染的值
const renderCount = useRef(0)
renderCount.current++  // 不触发重渲染`,
        starterCode: `import { useRef } from 'react'

function AutoFocusInput() {
  // 创建一个 ref 引用
  ???

  const handleFocus = () => {
    // 通过 ref.current 访问 DOM 并聚焦
    ???
  }

  return (
    &lt;div&gt;
      &lt;input ref={???} placeholder="点击按钮聚焦" /&gt;
      &lt;button onClick={handleFocus}&gt;聚焦输入框&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default AutoFocusInput`,
        hints: [
          'const inputRef = useRef(null)',
          '在 input 上添加 ref={inputRef}',
          'inputRef.current.focus() 聚焦'
        ],
        code: `import { useRef } from 'react'

function AutoFocusInput() {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    &lt;div&gt;
      &lt;input ref={inputRef} placeholder="点击按钮聚焦" /&gt;
      &lt;button onClick={handleFocus}&gt;聚焦输入框&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default AutoFocusInput`,
        verification: '使用了 useRef 创建引用，通过 ref.current 操作 DOM',
        solution: `解题步骤：
1. 创建 ref：const inputRef = useRef(null)
2. 在 input 元素上绑定 ref={inputRef}
3. 点击按钮时调用 inputRef.current.focus()`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-6'],
        commonMistakes: [
         {
          'pattern': 'innerHTML',
          'explanation': 'innerHTML 有 XSS 风险，优先用 textContent'
         },
         {
          'pattern': 'addEventListener',
          'explanation': '及时移除事件监听防内存泄漏'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建 useRef',
          'verification': 'useRef(null)',
          'hint': '用 useRef(null) 创建输入框引用',
          docLinks: [{title: '创建 useRef', url: 'https://zh-hans.react.dev/learn/referencing-values-with-refs'}],
         },
         {
          'id': 'step-2',
          'title': '绑定 ref 到 input',
          'verification': 'ref={inputRef}',
          'hint': '在 input 元素上添加 ref={inputRef}',
          docLinks: [{title: '绑定 ref 到 input', url: 'https://zh-hans.react.dev/learn/referencing-values-with-refs'}],
         },
         {
          'id': 'step-3',
          'title': '聚焦输入框',
          'verification': '.focus()',
          'hint': '点击按钮时调用 inputRef.current.focus()',
          docLinks: [{title: '聚焦输入框', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
          'task': '创建动态列表，增删改查 DOM 元素',
          'target': '掌握 DOM 操作'
         }
        ],

        docLinks: [
        { title: 'useRef 参考文档', url: 'https://zh-hans.react.dev/reference/react/useRef' },
        { title: '使用 Ref 操作 DOM', url: 'https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs' }
        ],
      },
      {
        id: 'react-8',
        number: 8,
        title: 'useContext 全局状态',
        concept: 'Context API',
        difficulty: 'medium',
        task: '用 Context 实现主题切换功能（亮色/暗色）',
        prerequisites: `<h4>🌐 Context API</h4>
<p>Context 避免 props 逐层传递（prop drilling）：</p>
<pre><code>// 1. 创建 Context
const ThemeContext = createContext('light')

// 2. 提供 Context
&lt;ThemeContext.Provider value="dark"&gt;
  &lt;Child /&gt;
&lt;/ThemeContext.Provider&gt;

// 3. 消费 Context
const theme = useContext(ThemeContext)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>createContext(默认值)</code> — 创建上下文</li>
  <li><code>Provider</code> — 提供数据</li>
  <li><code>useContext</code> — 消费数据</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 Context
[createContext](创建上下文对象) 创建一个 Context，可设默认值。

步骤 2 — 用 Provider 提供数据
[Provider](Context 的提供者组件) 在顶层组件中包裹子组件，传递 value。

步骤 3 — 用 useContext 消费
[useContext](React Hook，消费 Context) 在子组件中获取最近的 Provider 传入的值。`,
        contextCode: `// Context 完整用法

import { createContext, useContext, useState } from 'react'

// 1. 创建
const ThemeContext = createContext('light')

// 2. Provider 包裹
function App() {
  const [theme, setTheme] = useState('light')
  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;Toolbar /&gt;
    &lt;/ThemeContext.Provider&gt;
  )
}

// 3. useContext 消费
function Toolbar() {
  const theme = useContext(ThemeContext)
  return &lt;div className={theme}&gt;...&lt;/div&gt;
}`,
        starterCode: `import { createContext, useContext, useState } from 'react'

// 创建主题 Context
const ThemeContext = ???

function App() {
  const [theme, setTheme] = useState('light')

  return (
    // 提供 Context
    &lt;ThemeContext.Provider value={???}&gt;
      &lt;Toolbar /&gt;
      &lt;button onClick={() => setTheme(t =&gt; t === 'light' ? 'dark' : 'light')}&gt;
        切换主题
      &lt;/button&gt;
    &lt;/ThemeContext.Provider&gt;
  )
}

function Toolbar() {
  // 消费 Context
  const theme = ???
  return (
    &lt;div style={{ background: theme === 'dark' ? '#333' : '#fff', padding: 20 }}&gt;
      当前主题：{theme}
    &lt;/div&gt;
  )
}

export default App`,
        hints: [
          'createContext("light") 创建 Context',
          'Provider 的 value 绑定 theme',
          'useContext(ThemeContext) 获取值'
        ],
        code: `import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext('light')

function App() {
  const [theme, setTheme] = useState('light')

  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;Toolbar /&gt;
      &lt;button onClick={() =&gt; setTheme(t =&gt; t === 'light' ? 'dark' : 'light')}&gt;
        切换主题
      &lt;/button&gt;
    &lt;/ThemeContext.Provider&gt;
  )
}

function Toolbar() {
  const theme = useContext(ThemeContext)
  return (
    &lt;div style={{ background: theme === 'dark' ? '#333' : '#fff', padding: 20 }}&gt;
      当前主题：{theme}
    &lt;/div&gt;
  )
}

export default App`,
        verification: '使用了 createContext、Provider 和 useContext',
        solution: `解题步骤：
1. createContext('light') 创建主题 Context
2. Provider value={theme} 提供当前主题
3. 子组件用 useContext(ThemeContext) 获取主题
4. 按钮切换 theme 状态`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-7'],
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
          'title': '创建 Context',
          'verification': 'createContext(',
          'hint': '用 createContext 创建 ThemeContext',
          docLinks: [{title: '创建 Context', url: 'https://zh-hans.react.dev/learn/passing-data-deeply-with-context'}],
         },
         {
          'id': 'step-2',
          'title': 'Provider 提供数据',
          'verification': 'ThemeContext.Provider',
          'hint': '用 Provider value={theme} 传递主题',
          docLinks: [{title: 'Provider 提供数据', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': 'useContext 消费',
          'verification': 'useContext(ThemeContext)',
          'hint': '子组件中用 useContext 获取当前主题',
          docLinks: [{title: 'useContext 消费', url: 'https://zh-hans.react.dev/learn/passing-data-deeply-with-context'}],
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
        { title: '使用 Context 深层传递', url: 'https://zh-hans.react.dev/learn/passing-data-deeply-with-context' },
        { title: 'useContext 参考文档', url: 'https://zh-hans.react.dev/reference/react/useContext' }
        ],
      },
      {
        id: 'react-9',
        number: 9,
        title: 'useReducer 复杂状态',
        concept: 'Reducer 模式',
        difficulty: 'medium',
        task: '用 useReducer 实现一个待办事项的增删功能',
        prerequisites: `<h4>📐 useReducer</h4>
<p>useReducer 适合复杂状态逻辑，类似 Redux 模式：</p>
<pre><code>const [state, dispatch] = useReducer(reducer, initialState)

function reducer(state, action) {
  switch (action.type) {
    case 'add': return [...state, action.payload]
    case 'remove': return state.filter(...)
  }
}

dispatch({ type: 'add', payload: item })
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>reducer — 纯函数，根据 action 更新状态</li>
  <li>dispatch — 触发 action 的函数</li>
  <li>action — 描述发生了什么的对象 { type, payload }</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义 reducer 函数
[reducer](纯函数，接收 state 和 action，返回新状态) 是状态管理的核心。

步骤 2 — 初始化 useReducer
useReducer 接收 reducer 函数和初始状态。

步骤 3 — 通过 dispatch 触发状态更新
[dispatch](触发 action 的函数) 传入 action 对象，reducer 根据 type 决定如何更新。`,
        contextCode: `// useReducer 用法参考

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 }
    case 'subtract':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    &lt;div&gt;
      &lt;p&gt;{state.count}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'add' })}&gt;+&lt;/button&gt;
    &lt;/div&gt;
  )
}`,
        starterCode: `import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ??? }
    case 'remove':
      return { ??? }
    default:
      return state
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, { todos: [] })

  const addTodo = () => {
    const text = prompt('输入待办事项')
    if (text) {
      dispatch({ type: 'add', payload: text })
    }
  }

  return (
    &lt;div&gt;
      &lt;button onClick={addTodo}&gt;添加待办&lt;/button&gt;
      &lt;ul&gt;
        {state.todos.map((todo, i) =&gt; (
          &lt;li key={i}&gt;
            {todo}
            &lt;button onClick={() =&gt; dispatch({ type: 'remove', payload: i })}&gt;删除&lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  )
}

export default TodoApp`,
        hints: [
          'add: return { todos: [...state.todos, action.payload] }',
          'remove: return { todos: state.todos.filter((_, i) => i !== action.payload) }',
          'dispatch({ type: "add", payload: text }) 触发 action'
        ],
        code: `import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { todos: [...state.todos, action.payload] }
    case 'remove':
      return { todos: state.todos.filter((_, i) => i !== action.payload) }
    default:
      return state
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, { todos: [] })

  const addTodo = () => {
    const text = prompt('输入待办事项')
    if (text) {
      dispatch({ type: 'add', payload: text })
    }
  }

  return (
    &lt;div&gt;
      &lt;button onClick={addTodo}&gt;添加待办&lt;/button&gt;
      &lt;ul&gt;
        {state.todos.map((todo, i) =&gt; (
          &lt;li key={i}&gt;
            {todo}
            &lt;button onClick={() =&gt; dispatch({ type: 'remove', payload: i })}&gt;删除&lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  )
}

export default TodoApp`,
        verification: '使用了 useReducer 和 dispatch，reducer 处理了增删操作',
        solution: `解题步骤：
1. 定义 reducer 函数，处理 add 和 remove 两种 action
2. add: 展开原数组并追加新项
3. remove: filter 过滤掉指定索引
4. dispatch 触发对应的 action`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-8'],
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
          'title': '定义 reducer 函数',
          'verification': 'function reducer',
          'hint': '创建接收 state 和 action 的纯函数',
          docLinks: [{title: '定义 reducer 函数', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-2',
          'title': '处理 add 操作',
           'verification': "case 'add'",
          'hint': 'add 时展开数组追加新待办',
          docLinks: [{title: '处理 add 操作', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '处理 remove 操作',
           'verification': "case 'remove'",
          'hint': 'remove 时用 filter 过滤掉指定索引',
          docLinks: [{title: '处理 remove 操作', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
          'task': '用 filter + map + reduce 组合处理数据',
          'target': '掌握数组链式操作'
         }
        ],

        docLinks: [
        { title: '将状态逻辑提取到 Reducer', url: 'https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer' },
        { title: 'useReducer 参考文档', url: 'https://zh-hans.react.dev/reference/react/useReducer' }
        ],
      },
      {
        id: 'react-10',
        number: 10,
        title: '自定义 Hook',
        concept: 'Hook 抽象',
        difficulty: 'medium',
        task: '创建一个 useCounter Hook，封装计数器的逻辑',
        prerequisites: `<h4>🪝 自定义 Hook</h4>
<p>自定义 Hook 是以 "use" 开头的函数，封装可复用的状态逻辑：</p>
<pre><code>// 定义自定义 Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)
  return { count, increment, decrement, reset }
}

// 使用
function App() {
  const { count, increment } = useCounter(0)
  return &lt;button onClick={increment}&gt;{count}&lt;/button&gt;
}
</code></pre>

<h4>🔑 命名规则</h4>
<ul>
  <li>必须以 <code>use</code> 开头</li>
  <li>内部可以使用其他 Hook</li>
  <li>返回需要的值和方法</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义 Hook 函数
以 use 开头命名，接收需要的参数。

步骤 2 — 在 Hook 内使用内置 Hook
自定义 Hook 可以使用 useState、useEffect 等内置 Hook。

步骤 3 — 返回需要的值
返回对象或数组，包含状态值和操作方法。`,
        contextCode: `// 自定义 Hook 示例

// useLocalStorage - 持久化存储
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// useToggle - 布尔值切换
function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = () => setValue(v => !v)
  return [value, toggle]
}`,
        starterCode: `// 创建自定义 Hook：useCounter
// 功能：封装计数器的 count、increment、decrement、reset

import { useState } from 'react'

function useCounter(???) {
  // 声明状态
  ???

  // 定义操作方法
  ???

  // 返回值和方法
  ???
}

// 使用自定义 Hook
function App() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    &lt;div&gt;
      &lt;p&gt;计数：{count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+1&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-1&lt;/button&gt;
      &lt;button onClick={reset}&gt;重置&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default App`,
        hints: [
          'Hook 名必须以 use 开头',
          '用 useState 声明 count 状态',
          '返回 { count, increment, decrement, reset }'
        ],
        code: `import { useState } from 'react'

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}

function App() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    &lt;div&gt;
      &lt;p&gt;计数：{count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+1&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-1&lt;/button&gt;
      &lt;button onClick={reset}&gt;重置&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default App`,
        verification: '创建了自定义 Hook，以 use 开头，封装了状态逻辑',
        solution: `解题步骤：
1. 定义 useCounter 函数，接收 initialValue 参数
2. 内部用 useState 声明 count
3. 定义 increment/decrement/reset 方法
4. 返回 { count, increment, decrement, reset }`,
        filePath: 'src/hooks/useCounter.js',
        cognitiveLoad: 'medium',
        dependsOn: ['react-9'],
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
          'title': '定义 Hook 函数',
          'verification': 'function useCounter',
          'hint': '创建以 use 开头的自定义 Hook',
          docLinks: [{title: '定义 Hook 函数', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-2',
          'title': '封装操作方法',
          'verification': 'increment',
          'hint': '定义 increment/decrement/reset 方法',
          docLinks: [{title: '封装操作方法', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '返回状态和方法',
          'verification': 'return {',
          'hint': '返回 { count, increment, decrement, reset }',
          docLinks: [{title: '返回状态和方法', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
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
        { title: '复用逻辑与自定义 Hook', url: 'https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks' }
        ],
      }
    ]
  },
  {
    id: 'router-and-state',
    name: '阶段三：路由与状态管理',
    description: '掌握 React Router 路由、全局状态管理、表单处理与错误边界',
    levels: [
      {
        id: 'react-11',
        number: 11,
        title: 'React Router 基础',
        concept: '客户端路由',
        difficulty: 'medium',
        task: '配置 React Router，实现首页和关于页的切换',
        prerequisites: `<h4>🗺️ React Router</h4>
<p>React Router 实现单页应用的客户端路由：</p>
<pre><code>import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;首页&lt;/Link&gt;
        &lt;Link to="/about"&gt;关于&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  )
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>BrowserRouter</code> — 路由容器</li>
  <li><code>Routes</code> — 路由匹配</li>
  <li><code>Route</code> — 路由规则</li>
  <li><code>Link</code> — 导航链接</li>
</ul>`,
        conceptDetail: `步骤 1 — 包裹 BrowserRouter
[BrowserRouter](路由容器) 是整个路由系统的根容器。

步骤 2 — 定义路由规则
[Route](路由规则) 定义 path 和对应的 element 组件。

步骤 3 — 用 Link 导航
[Link](导航组件) 实现页面跳转，to 属性指定目标路径。`,
        contextCode: `// React Router 完整示例

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

function NavBar() {
  const location = useLocation()
  return (
    &lt;nav&gt;
      &lt;Link to="/" className={location.pathname === '/' ? 'active' : ''}&gt;首页&lt;/Link&gt;
      &lt;Link to="/about"&gt;关于&lt;/Link&gt;
    &lt;/nav&gt;
  )
}

// 404 页面
function NotFound() {
  return &lt;div&gt;404 - 页面不存在&lt;/div&gt;
}`,
        starterCode: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return &lt;h2&gt;首页内容&lt;/h2&gt;
}

function About() {
  return &lt;h2&gt;关于我们&lt;/h2&gt;
}

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;首页&lt;/Link&gt;
        {' | '}
        &lt;Link to="/about"&gt;关于&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Routes&gt;
        {/* 配置路由规则 */}
        ???
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  )
}

export default App`,
        hints: [
          'BrowserRouter 包裹整个路由系统',
          'Route path="/" element={<Home />} 定义路由',
          'Routes 包裹多个 Route'
        ],
        code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return &lt;h2&gt;首页内容&lt;/h2&gt;
}

function About() {
  return &lt;h2&gt;关于我们&lt;/h2&gt;
}

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;首页&lt;/Link&gt;
        {' | '}
        &lt;Link to="/about"&gt;关于&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  )
}

export default App`,
        verification: '使用了 BrowserRouter、Routes、Route 和 Link',
        solution: `解题步骤：
1. 用 BrowserRouter 包裹
2. 在 Routes 中定义 Route 规则
3. 用 Link 实现导航`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-10'],
        commonMistakes: [
         {
          'pattern': 'req.body',
          'explanation': 'POST 需 body-parser 中间件解析'
         },
         {
          'pattern': 'res.send',
          'explanation': '一个请求只调一次 res.send'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '导入路由组件',
          'verification': 'react-router-dom',
          'hint': '从 react-router-dom 导入所需组件',
          docLinks: [{title: '导入路由组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-2',
          'title': '配置 Route 规则',
          'verification': 'Route path="/"',
          'hint': '在 Routes 中定义 path 和 element 映射',
          docLinks: [{title: '配置 Route 规则', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '用 Link 导航',
          'verification': 'Link to=',
          'hint': '用 Link 组件实现页面间导航切换',
          docLinks: [{title: '用 Link 导航', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         }
        ],
        variations: [
         {
          'name': 'Hash vs History',
          'description': 'Hash 模式用 #，History 需要服务端配合'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],

        docLinks: [
        { title: 'React Router 快速开始', url: 'https://reactrouter.com/en/main/start/tutorial' },
        { title: 'Route 组件', url: 'https://reactrouter.com/en/main/components/route' }
        ],
      },
      {
        id: 'react-12',
        number: 12,
        title: '嵌套路由',
        concept: 'Outlet 出口',
        difficulty: 'medium',
        task: '实现嵌套路由，Dashboard 下有 Profile 和 Settings 子页面',
        prerequisites: `<h4>🔗 嵌套路由</h4>
<p>嵌套路由用 Outlet 显示子路由内容：</p>
<pre><code>&lt;Route path="/dashboard" element={&lt;Dashboard /&gt;}&gt;
  &lt;Route path="profile" element={&lt;Profile /&gt;} /&gt;
  &lt;Route path="settings" element={&lt;Settings /&gt;} /&gt;
&lt;/Route&gt;

// Dashboard 组件中
function Dashboard() {
  return (
    &lt;div&gt;
      &lt;h2&gt;Dashboard&lt;/h2&gt;
      &lt;Outlet /&gt; {/* 子路由渲染在这里 */}
    &lt;/div&gt;
  )
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>嵌套在父 Route 内的 Route 是子路由</li>
  <li><code>Outlet</code> 是子路由的渲染出口</li>
  <li>子路由的 path 不以 / 开头</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义嵌套路由
子 Route 嵌套在父 Route 内部，path 不以 / 开头。

步骤 2 — 在父组件中使用 Outlet
[Outlet](路由出口组件) 是子路由内容的渲染位置。

步骤 3 — 用 Link 导航到子路由
子路由的链接路径是父路径加子路径。`,
        contextCode: `// 嵌套路由结构

&lt;Route path="/dashboard" element={&lt;Dashboard /&gt;}&gt;
  &lt;Route index element={&lt;DashboardHome /&gt;} /&gt;
  &lt;Route path="profile" element={&lt;Profile /&gt;} /&gt;
  &lt;Route path="settings" element={&lt;Settings /&gt;} /&gt;
&lt;/Route&gt;

// Dashboard 组件
function Dashboard() {
  return (
    &lt;div&gt;
      &lt;nav&gt;
        &lt;Link to="/dashboard/profile"&gt;个人资料&lt;/Link&gt;
        &lt;Link to="/dashboard/settings"&gt;设置&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Outlet /&gt;
    &lt;/div&gt;
  )
}`,
        starterCode: `import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    &lt;div&gt;
      &lt;h2&gt;Dashboard&lt;/h2&gt;
      &lt;nav&gt;
        &lt;Link to="/dashboard/profile"&gt;个人资料&lt;/Link&gt;
        {' | '}
        &lt;Link to="/dashboard/settings"&gt;设置&lt;/Link&gt;
      &lt;/nav&gt;
      {/* 子路由渲染出口 */}
      ???
    &lt;/div&gt;
  )
}

function Profile() { return &lt;p&gt;个人资料页面&lt;/p&gt; }
function Settings() { return &lt;p&gt;设置页面&lt;/p&gt; }

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;}&gt;
          {/* 配置子路由 */}
          ???
        &lt;/Route&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  )
}

export default App`,
        hints: [
          'Dashboard 组件中用 <Outlet /> 渲染子路由',
          '子 Route 的 path 不以 / 开头',
          '子路由嵌套在父 Route 内'
        ],
        code: `import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    &lt;div&gt;
      &lt;h2&gt;Dashboard&lt;/h2&gt;
      &lt;nav&gt;
        &lt;Link to="/dashboard/profile"&gt;个人资料&lt;/Link&gt;
        {' | '}
        &lt;Link to="/dashboard/settings"&gt;设置&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Outlet /&gt;
    &lt;/div&gt;
  )
}

function Profile() { return &lt;p&gt;个人资料页面&lt;/p&gt; }
function Settings() { return &lt;p&gt;设置页面&lt;/p&gt; }

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;}&gt;
          &lt;Route path="profile" element={&lt;Profile /&gt;} /&gt;
          &lt;Route path="settings" element={&lt;Settings /&gt;} /&gt;
        &lt;/Route&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  )
}

export default App`,
        verification: '使用了 Outlet 渲染子路由，子路由嵌套在父路由内',
        solution: `解题步骤：
1. Dashboard 组件中添加 <Outlet /> 作为子路由出口
2. 在父 Route 内定义子 Route，path 不以 / 开头
3. Link 路径为 /dashboard/profile 形式`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-11'],
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
          'title': '添加 Outlet 出口',
          'verification': '<Outlet />',
          'hint': '在父组件中放置 Outlet 渲染子路由',
          docLinks: [{title: '添加 Outlet 出口', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-2',
          'title': '配置嵌套子路由',
          'verification': 'path="profile"',
          'hint': '子 Route 嵌套在父 Route 内，path 不以 / 开头',
          docLinks: [{title: '配置嵌套子路由', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '添加导航链接',
          'verification': 'Link to="/dashboard/profile"',
          'hint': '用完整路径导航到子路由',
          docLinks: [{title: '添加导航链接', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: '嵌套路由与布局', url: 'https://reactrouter.com/en/main/start/concepts#nested-routes' },
        { title: 'Outlet 组件', url: 'https://reactrouter.com/en/main/components/outlet' }
        ],
      },
      {
        id: 'react-13',
        number: 13,
        title: '全局状态管理',
        concept: 'Zustand/Redux',
        difficulty: 'medium',
        task: '用 Zustand 创建一个全局计数器 store，任何组件都能访问',
        prerequisites: `<h4>🏪 状态管理库</h4>
<p>当状态需要跨多层组件共享时，用状态管理库：</p>
<pre><code>// Zustand（轻量级）
import { create } from 'zustand'

const useCounterStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}))

// 在组件中使用
function App() {
  const { count, increment } = useCounterStore()
  return &lt;button onClick={increment}&gt;{count}&lt;/button&gt;
}
</code></pre>

<h4>🔑 Zustand vs Redux</h4>
<ul>
  <li><strong>Zustand</strong>：轻量、简洁、无样板代码</li>
  <li><strong>Redux Toolkit</strong>：成熟、强大、适合大型应用</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 Store
[create](Zustand 的核心函数) 创建一个 store，接收状态定义函数。

步骤 2 — 定义状态和操作
在 create 回调中定义 state 和修改 state 的方法。

步骤 3 — 在组件中使用
调用 hook 返回状态和方法，自动订阅更新。`,
        contextCode: `// Zustand 用法参考

import { create } from 'zustand'

// 创建 store
const useStore = create((set, get) => ({
  // 状态
  count: 0,
  name: 'Alice',

  // 操作
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setName: (name) => set({ name }),

  // 获取其他状态
  doubleCount: () => get().count * 2
}))

// 在组件中使用
function Counter() {
  const count = useStore(state => state.count)
  const increment = useStore(state => state.increment)
  return &lt;button onClick={increment}&gt;{count}&lt;/button&gt;
}`,
        starterCode: `import { create } from 'zustand'

// 创建全局 store
const useCounterStore = ???

// 使用 store 的组件
function CounterA() {
  const count = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.increment)
  return (
    &lt;div&gt;
      &lt;p&gt;组件 A - 计数：{count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+1&lt;/button&gt;
    &lt;/div&gt;
  )
}

function CounterB() {
  const count = useCounterStore(state => state.count)
  return &lt;p&gt;组件 B 也看到：{count}&lt;/p&gt;
}

function App() {
  return (
    &lt;div&gt;
      &lt;CounterA /&gt;
      &lt;CounterB /&gt;
    &lt;/div&gt;
  )
}

export default App`,
        hints: [
          'create((set) => ({ ... })) 创建 store',
          'set(state => ({ count: state.count + 1 })) 更新状态',
          'useStore(state => state.count) 选择状态'
        ],
        code: `import { create } from 'zustand'

const useCounterStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}))

function CounterA() {
  const count = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.increment)
  return (
    &lt;div&gt;
      &lt;p&gt;组件 A - 计数：{count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+1&lt;/button&gt;
    &lt;/div&gt;
  )
}

function CounterB() {
  const count = useCounterStore(state => state.count)
  return &lt;p&gt;组件 B 也看到：{count}&lt;/p&gt;
}

function App() {
  return (
    &lt;div&gt;
      &lt;CounterA /&gt;
      &lt;CounterB /&gt;
    &lt;/div&gt;
  )
}

export default App`,
        verification: '创建了 Zustand store，多个组件共享状态',
        solution: `解题步骤：
1. 用 create((set) => ({...})) 创建 store
2. 定义 count 状态和 increment 方法
3. 组件中用 useCounterStore(state => state.count) 读取`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-12'],
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
          'title': '创建 Zustand store',
          'verification': 'create(set =>',
          'hint': '用 create 创建全局计数器 store',
          docLinks: [{title: '创建 Zustand store', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-2',
          'title': '定义状态和方法',
          'verification': 'count: 0',
          'hint': '定义 count 状态和 increment 方法',
          docLinks: [{title: '定义状态和方法', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
         },
         {
          'id': 'step-3',
          'title': '在组件中消费',
          'verification': 'useCounterStore',
          'hint': '组件中调用 useCounterStore 读取状态',
          docLinks: [{title: '在组件中消费', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
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
        { title: '使用 Reducer 和 Context 扩展', url: 'https://zh-hans.react.dev/learn/scaling-up-with-reducer-and-context' },
        { title: 'Zustand 入门', url: 'https://github.com/pmndrs/zustand' }
        ],
      },
      {
        id: 'react-14',
        number: 14,
        title: '表单处理',
        concept: '受控组件',
        difficulty: 'medium',
        task: '创建一个注册表单，包含用户名、邮箱、密码字段',
        prerequisites: `<h4>📝 受控组件</h4>
<p>React 用受控组件处理表单，表单数据由组件状态管理：</p>
<pre><code>function Form() {
  const [name, setName] = useState('')
  return (
    &lt;form&gt;
      &lt;input
        value={name}
        onChange={e => setName(e.target.value)}
      /&gt;
      &lt;p&gt;你输入了：{name}&lt;/p&gt;
    &lt;/form&gt;
  )
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>value</code> — 绑定状态值</li>
  <li><code>onChange</code> — 更新状态</li>
  <li>输入框的值完全由 React 状态控制</li>
</ul>`,
        conceptDetail: `步骤 1 — 为每个字段声明状态
每个表单字段对应一个 useState。

步骤 2 — 绑定 value 和 onChange
[value](受控输入的值) 绑定状态，[onChange](更新状态) 监听输入变化。

步骤 3 — 提交表单
表单的 onSubmit 处理提交逻辑，e.preventDefault() 阻止默认行为。`,
        contextCode: `// 受控表单示例

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input name="name" value={formData.name} onChange={handleChange} /&gt;
      &lt;input name="email" value={formData.email} onChange={handleChange} /&gt;
      &lt;input name="password" type="password" value={formData.password} onChange={handleChange} /&gt;
      &lt;button type="submit"&gt;提交&lt;/button&gt;
    &lt;/form&gt;
  )
}`,
        starterCode: `import { useState } from 'react'

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    // 更新对应字段
    ???
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('提交：' + JSON.stringify(formData))
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;div&gt;
        &lt;label&gt;用户名：&lt;/label&gt;
        &lt;input name="username" value={???} onChange={handleChange} /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label&gt;邮箱：&lt;/label&gt;
        &lt;input name="email" value={???} onChange={handleChange} /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label&gt;密码：&lt;/label&gt;
        &lt;input name="password" type="password" value={???} onChange={handleChange} /&gt;
      &lt;/div&gt;
      &lt;button type="submit"&gt;注册&lt;/button&gt;
    &lt;/form&gt;
  )
}

export default RegisterForm`,
        hints: [
          'handleChange 中用 e.target.name 和 e.target.value',
          '展开 formData 并用计算属性名更新',
          'value 绑定 formData.username 等'
        ],
        code: `import { useState } from 'react'

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('提交：' + JSON.stringify(formData))
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;div&gt;
        &lt;label&gt;用户名：&lt;/label&gt;
        &lt;input name="username" value={formData.username} onChange={handleChange} /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label&gt;邮箱：&lt;/label&gt;
        &lt;input name="email" value={formData.email} onChange={handleChange} /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label&gt;密码：&lt;/label&gt;
        &lt;input name="password" type="password" value={formData.password} onChange={handleChange} /&gt;
      &lt;/div&gt;
      &lt;button type="submit"&gt;注册&lt;/button&gt;
    &lt;/form&gt;
  )
}

export default RegisterForm`,
        verification: '使用了受控组件模式，绑定 value 和 onChange',
        solution: `解题步骤：
1. useState 管理 formData 对象
2. handleChange 用 [e.target.name]: e.target.value 更新
3. 每个 input 绑定 value 和 onChange`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-13'],
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
          'title': '声明表单状态',
          'verification': 'formData',
          'hint': '用 useState 管理 formData 对象',
          docLinks: [{title: '声明表单状态', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
         },
         {
          'id': 'step-2',
          'title': '绑定 onChange 处理',
          'verification': 'handleChange',
          'hint': '用 [e.target.name] 动态更新对应字段',
          docLinks: [{title: '绑定 onChange 处理', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '绑定表单提交',
          'verification': 'onSubmit',
          'hint': '表单绑定 onSubmit 阻止默认行为并处理数据',
          docLinks: [{title: '绑定表单提交', url: 'https://zh-hans.react.dev/learn/reacting-to-input-with-state'}],
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
        { title: '响应事件', url: 'https://zh-hans.react.dev/learn/responding-to-events' },
        { title: '受控组件与表单', url: 'https://zh-hans.react.dev/reference/react-dom/components/input' }
        ],
      },
      {
        id: 'react-15',
        number: 15,
        title: '错误边界',
        concept: 'ErrorBoundary',
        difficulty: 'medium',
        task: '创建一个错误边界组件，捕获子组件的渲染错误',
        prerequisites: `<h4>🛡️ 错误边界</h4>
<p>错误边界捕获子组件树的 JavaScript 错误：</p>
<pre><code>class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return &lt;h2&gt;出错了！&lt;/h2&gt;
    }
    return this.props.children
  }
}
</code></pre>

<h4>⚠️ 注意事项</h4>
<ul>
  <li>错误边界目前只能用 class 组件</li>
  <li>只能捕获渲染过程中的错误</li>
  <li>不能捕获事件处理中的错误</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 class 组件
错误边界必须是 [class 组件](React 的 class 组件语法)。

步骤 2 — 实现生命周期方法
[getDerivedStateFromError](静态方法) 更新 state 显示错误 UI。[componentDidCatch](实例方法) 记录错误信息。

步骤 3 — 用条件渲染显示错误或子组件
根据 hasError 状态决定显示错误提示还是 children。`,
        contextCode: `// ErrorBoundary 完整实现

import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('组件错误：', error)
    console.error('错误信息：', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        &lt;div style={{ color: 'red', padding: 20 }}&gt;
          &lt;h2&gt;出错了&lt;/h2&gt;
          &lt;p&gt;{this.state.error?.message}&lt;/p&gt;
        &lt;/div&gt;
      )
    }
    return this.props.children
  }
}`,
        starterCode: `import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    // 初始化错误状态
    ???
  }

  // 静态方法：捕获错误更新 state
  static getDerivedStateFromError(error) {
    ???
  }

  // 实例方法：记录错误详情
  componentDidCatch(error, errorInfo) {
    console.error('组件错误：', error)
  }

  render() {
    // 如果有错误，显示错误提示
    if (???) {
      return &lt;h2 style={{ color: 'red' }}&gt;出错了！请刷新页面&lt;/h2&gt;
    }
    // 否则渲染子组件
    return ???
  }
}

// 使用错误边界
function BuggyComponent() {
  throw new Error('模拟组件崩溃')
}

function App() {
  return (
    &lt;ErrorBoundary&gt;
      &lt;BuggyComponent /&gt;
    &lt;/ErrorBoundary&gt;
  )
}

export default App`,
        hints: [
          'constructor 中 this.state = { hasError: false }',
          'getDerivedStateFromError 返回 { hasError: true }',
          'render 中 if (this.state.hasError) 显示错误 UI'
        ],
        code: `import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('组件错误：', error)
  }

  render() {
    if (this.state.hasError) {
      return &lt;h2 style={{ color: 'red' }}&gt;出错了！请刷新页面&lt;/h2&gt;
    }
    return this.props.children
  }
}

function BuggyComponent() {
  throw new Error('模拟组件崩溃')
}

function App() {
  return (
    &lt;ErrorBoundary&gt;
      &lt;BuggyComponent /&gt;
    &lt;/ErrorBoundary&gt;
  )
}

export default App`,
        verification: '创建了 ErrorBoundary class 组件，捕获渲染错误',
        solution: `解题步骤：
1. 创建 class 组件继承 React.Component
2. constructor 初始化 hasError: false
3. getDerivedStateFromError 返回 { hasError: true }
4. render 中根据 hasError 条件渲染`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'medium',
        dependsOn: ['react-14'],
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
          'title': '继承 React.Component',
          'verification': 'extends React.Component',
          'hint': '错误边界必须是 class 组件',
          docLinks: [{title: '继承 React.Component', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-2',
          'title': '初始化错误状态',
          'verification': 'hasError: false',
          'hint': 'constructor 中设置初始错误状态',
          docLinks: [{title: '初始化错误状态', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
         },
         {
          'id': 'step-3',
          'title': '捕获渲染错误',
          'verification': 'getDerivedStateFromError',
          'hint': '实现静态方法捕获子组件错误',
          docLinks: [{title: '捕获渲染错误', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: '错误边界', url: 'https://zh-hans.react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary' }
        ],
      }
    ]
  },
  {
    id: 'performance',
    name: '阶段四：性能优化',
    description: '掌握 React 性能优化技术：memo、虚拟列表、代码分割与实战项目',
    levels: [
      {
        id: 'react-16',
        number: 16,
        title: 'React.memo',
        concept: '组件缓存',
        difficulty: 'hard',
        task: '用 React.memo 包裹一个子组件，避免父组件渲染时不必要的重渲染',
        prerequisites: `<h4>⚡ React.memo</h4>
<p>React.memo 高阶组件缓存组件，props 不变时跳过重渲染：</p>
<pre><code>// 普通组件 - 父组件每次渲染都会重渲染
function Child({ name }) {
  console.log('Child render')
  return &lt;div&gt;{name}&lt;/div&gt;
}

// 用 memo 包裹 - props 不变时不重渲染
const Child = React.memo(function Child({ name }) {
  console.log('Child render')
  return &lt;div&gt;{name}&lt;/div&gt;
})
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>React.memo(Component)</code> 包裹组件</li>
  <li>只在 props 变化时重渲染</li>
  <li>浅比较 props（默认）</li>
  <li>可传自定义比较函数</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解重渲染问题
父组件每次 state 变化都会导致所有子组件重渲染，即使 props 未变。

步骤 2 — 用 React.memo 包裹
[React.memo](高阶组件) 对 props 进行浅比较，未变化则跳过重渲染。

步骤 3 — 验证效果
在组件中添加 console.log 观察渲染次数。`,
        contextCode: `// React.memo 使用示例

import React, { useState } from 'react'

// 未优化的子组件
function ExpensiveChild({ data }) {
  console.log('Child render')
  // 假设这里有昂贵的计算
  return &lt;div&gt;{data}&lt;/div&gt;
}

// 优化后
const MemoizedChild = React.memo(function Child({ data }) {
  console.log('Memoized Child render')
  return &lt;div&gt;{data}&lt;/div&gt;
})

// 父组件
function Parent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alice')

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;count: {count}&lt;/button&gt;
      &lt;ExpensiveChild data={name} /&gt;  {/* 每次都渲染 */}
      &lt;MemoizedChild data={name} /&gt;   {/* name 不变时不渲染 */}
    &lt;/div&gt;
  )
}`,
        starterCode: `import React, { useState } from 'react'

// 普通子组件 - 每次父组件渲染都会重渲染
function Child({ name }) {
  console.log('Child render:', name)
  return &lt;div&gt;Hello, {name}&lt;/div&gt;
}

// 用 React.memo 优化的子组件
const MemoChild = ???

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alice')

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;
        count: {count}
      &lt;/button&gt;
      &lt;button onClick={() =&gt; setName('Bob')}&gt;改名&lt;/button&gt;
      &lt;Child name={name} /&gt;
      &lt;MemoChild name={name} /&gt;
      {/* 观察控制台：MemoChild 只在 name 变化时渲染 */}
    &lt;/div&gt;
  )
}

export default App`,
        hints: [
          'React.memo(Component) 包裹组件函数',
          'memo 组件在 props 不变时跳过渲染',
          '点击 count 按钮，MemoChild 不会重新渲染'
        ],
        code: `import React, { useState } from 'react'

function Child({ name }) {
  console.log('Child render:', name)
  return &lt;div&gt;Hello, {name}&lt;/div&gt;
}

const MemoChild = React.memo(function MemoChild({ name }) {
  console.log('MemoChild render:', name)
  return &lt;div&gt;Hello, {name}&lt;/div&gt;
})

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alice')

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;
        count: {count}
      &lt;/button&gt;
      &lt;button onClick={() =&gt; setName('Bob')}&gt;改名&lt;/button&gt;
      &lt;Child name={name} /&gt;
      &lt;MemoChild name={name} /&gt;
    &lt;/div&gt;
  )
}

export default App`,
        verification: '使用了 React.memo 包裹组件，避免不必要的重渲染',
        solution: `解题步骤：
1. 用 React.memo(函数组件) 包裹子组件
2. props 不变时 memo 组件不会重渲染
3. 通过 console.log 验证渲染次数`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'high',
        dependsOn: ['react-15'],
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
          'title': '定义子组件',
          'verification': 'function Child',
          'hint': '定义一个简单的子组件',
          docLinks: [{title: '定义子组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-2',
          'title': '用 memo 包裹',
          'verification': 'React.memo(',
          'hint': '用 React.memo 包裹子组件避免不必要渲染',
          docLinks: [{title: '用 memo 包裹', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '验证渲染次数',
          'verification': 'console.log',
          'hint': '添加日志观察子组件是否重新渲染',
          docLinks: [{title: '验证渲染次数', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: 'React.memo 参考文档', url: 'https://zh-hans.react.dev/reference/react/memo' },
        { title: '跳过不必要的重渲染', url: 'https://zh-hans.react.dev/learn/performance' }
        ],
      },
      {
        id: 'react-17',
        number: 17,
        title: 'useMemo/useCallback',
        concept: '计算缓存',
        difficulty: 'hard',
        task: '用 useMemo 缓存计算结果，用 useCallback 缓存函数引用',
        prerequisites: `<h4>🧮 useMemo 与 useCallback</h4>
<p>useMemo 缓存计算结果，useCallback 缓存函数引用：</p>
<pre><code>// useMemo - 缓存计算结果
const sorted = useMemo(() => {
  return items.sort((a, b) => a - b)
}, [items])  // items 变化时才重新计算

// useCallback - 缓存函数引用
const handleClick = useCallback(() => {
  console.log(count)
}, [count])  // count 变化时才重新创建函数
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>useMemo(() => compute, [deps])</code> — 缓存值</li>
  <li><code>useCallback(fn, [deps])</code> — 缓存函数</li>
  <li>配合 React.memo 使用效果最佳</li>
</ul>`,
        conceptDetail: `步骤 1 — useMemo 缓存昂贵计算
[useMemo](缓存计算结果) 避免每次渲染都重复计算。

步骤 2 — useCallback 缓存函数
[useCallback](缓存函数引用) 避免每次渲染都创建新函数，防止子组件重渲染。

步骤 3 — 配合 memo 使用
memo + useCallback 组合使用可以最大化性能优化效果。`,
        contextCode: `// useMemo 与 useCallback 示例

function Parent() {
  const [count, setCount] = useState(0)
  const [items] = useState([3, 1, 4, 1, 5, 9])

  // 缓存排序结果 - items 不变时不会重新排序
  const sorted = useMemo(() => {
    console.log('排序中...')
    return [...items].sort((a, b) => a - b)
  }, [items])

  // 缓存函数 - count 不变时函数引用不变
  const handleClick = useCallback(() => {
    console.log('count:', count)
  }, [count])

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;{count}&lt;/button&gt;
      &lt;MemoChild onClick={handleClick} /&gt;
      &lt;p&gt;排序：{sorted.join(', ')}&lt;/p&gt;
    &lt;/div&gt;
  )
}`,
        starterCode: `import { useState, useMemo, useCallback } from 'react'
import React from 'react'

const MemoChild = React.memo(function Child({ onClick }) {
  console.log('Child render')
  return &lt;button onClick={onClick}&gt;子组件按钮&lt;/button&gt;
})

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // 用 useMemo 缓存计算结果
  const expensiveValue = useMemo(() => {
    console.log('计算中...')
    return count * 2
  }, [???])

  // 用 useCallback 缓存函数
  const handleClick = useCallback(() => {
    console.log('点击了子组件')
  }, [???])

  return (
    &lt;div&gt;
      &lt;input value={text} onChange={e =&gt; setText(e.target.value)} /&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;count: {count}&lt;/button&gt;
      &lt;p&gt;计算结果：{expensiveValue}&lt;/p&gt;
      &lt;MemoChild onClick={handleClick} /&gt;
    &lt;/div&gt;
  )
}

export default App`,
        hints: [
          'useMemo(() => count * 2, [count])',
          'useCallback(() => {...}, []) 空依赖不重新创建',
          'text 变化时不会触发 useMemo 和 useCallback'
        ],
        code: `import { useState, useMemo, useCallback } from 'react'
import React from 'react'

const MemoChild = React.memo(function Child({ onClick }) {
  console.log('Child render')
  return &lt;button onClick={onClick}&gt;子组件按钮&lt;/button&gt;
})

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const expensiveValue = useMemo(() => {
    console.log('计算中...')
    return count * 2
  }, [count])

  const handleClick = useCallback(() => {
    console.log('点击了子组件')
  }, [])

  return (
    &lt;div&gt;
      &lt;input value={text} onChange={e =&gt; setText(e.target.value)} /&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;count: {count}&lt;/button&gt;
      &lt;p&gt;计算结果：{expensiveValue}&lt;/p&gt;
      &lt;MemoChild onClick={handleClick} /&gt;
    &lt;/div&gt;
  )
}

export default App`,
        verification: '使用了 useMemo 缓存计算，useCallback 缓存函数',
        solution: `解题步骤：
1. useMemo(() => compute, [deps]) 缓存计算结果
2. useCallback(fn, [deps]) 缓存函数引用
3. 配合 React.memo 避免子组件不必要的重渲染`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'high',
        dependsOn: ['react-16'],
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
          'title': 'useMemo 缓存计算',
          'verification': 'useMemo(',
          'hint': '缓存 count * 2 的计算结果',
          docLinks: [{title: 'useMemo 缓存计算', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-2',
          'title': 'useCallback 缓存函数',
          'verification': 'useCallback(',
          'hint': '缓存 handleClick 函数引用',
          docLinks: [{title: 'useCallback 缓存函数', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-3',
          'title': '传递给 memo 子组件',
          'verification': 'MemoChild',
          'hint': '将缓存的函数传给 memo 子组件',
          docLinks: [{title: '传递给 memo 子组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
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
        { title: 'useMemo 参考文档', url: 'https://zh-hans.react.dev/reference/react/useMemo' },
        { title: 'useCallback 参考文档', url: 'https://zh-hans.react.dev/reference/react/useCallback' }
        ],
      },
      {
        id: 'react-18',
        number: 18,
        title: '虚拟列表',
        concept: '长列表优化',
        difficulty: 'hard',
        task: '实现一个简单的虚拟列表，只渲染可视区域内的项目',
        prerequisites: `<h4>📜 虚拟列表</h4>
<p>虚拟列表只渲染可视区域内的元素，大幅减少 DOM 节点：</p>
<pre><code>function VirtualList({ items, itemHeight = 30, containerHeight = 400 }) {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.floor(scrollTop / itemHeight)
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  )

  const visibleItems = items.slice(startIndex, endIndex)

  return (
    &lt;div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={e =&gt; setScrollTop(e.target.scrollTop)}
    &gt;
      &lt;div style={{ height: items.length * itemHeight }}&gt;
        {visibleItems.map((item, i) =&gt; (
          &lt;div key={startIndex + i} style={{ height: itemHeight }}&gt;
            {item}
          &lt;/div&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  )
}
</code></pre>

<h4>🔑 核心原理</h4>
<ul>
  <li>根据滚动位置计算可见范围</li>
  <li>只渲染可见区域 + 缓冲区的元素</li>
  <li>用 padding-top 占位</li>
</ul>`,
        conceptDetail: `步骤 1 — 计算可见范围
根据 [scrollTop](容器的滚动位置) 和 [itemHeight](每项高度) 计算起始和结束索引。

步骤 2 — 切割数组渲染
用 slice 截取可见范围内的项目渲染。

步骤 3 — 占位和滚动处理
容器设置 overflow:auto，内容区域高度为总项数 × 每项高度。`,
        contextCode: `// 虚拟列表核心逻辑

function VirtualList({ items, itemHeight, containerHeight }) {
  const [scrollTop, setScrollTop] = useState(0)

  // 计算可见起始索引
  const startIndex = Math.floor(scrollTop / itemHeight)

  // 计算可见结束索引（+1 作为缓冲）
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 1
  const endIndex = Math.min(startIndex + visibleCount, items.length)

  // 切割可见数据
  const visibleItems = items.slice(startIndex, endIndex)

  // 总高度用于滚动条
  const totalHeight = items.length * itemHeight

  return (
    &lt;div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={e =&gt; setScrollTop(e.target.scrollTop)}
    &gt;
      &lt;div style={{ height: totalHeight, position: 'relative' }}&gt;
        &lt;div style={{ transform: \`translateY(\${startIndex * itemHeight}px)\` }}&gt;
          {visibleItems.map((item, i) =&gt; (
            &lt;div key={i} style={{ height: itemHeight }}&gt;{item}&lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}`,
        starterCode: `import { useState } from 'react'

function VirtualList({ items, itemHeight = 30, containerHeight = 400 }) {
  const [scrollTop, setScrollTop] = useState(0)

  // 计算可见范围
  const startIndex = Math.floor(scrollTop / itemHeight)
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 1
  const endIndex = Math.min(startIndex + visibleCount, items.length)

  // 切割可见数据
  const visibleItems = ???

  return (
    &lt;div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={e =&gt; setScrollTop(e.target.scrollTop)}
    &gt;
      &lt;div style={{ height: items.length * itemHeight, position: 'relative' }}&gt;
        &lt;div style={{ transform: \`translateY(\${startIndex * itemHeight}px)\` }}&gt;
          {visibleItems.map((item, i) =&gt; (
            &lt;div key={???} style={{ height: itemHeight, borderBottom: '1px solid #eee' }}&gt;
              {item}
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

function App() {
  const items = Array.from({ length: 10000 }, (_, i) =&gt; \`项目 \${'{'}${'{i}}'}\`)
  return &lt;VirtualList items={items} /&gt;
}

export default App`,
        hints: [
          'items.slice(startIndex, endIndex) 切割可见数据',
          'key 用 startIndex + i 保证唯一',
          'translateY 偏移渲染位置'
        ],
        code: `import { useState } from 'react'

function VirtualList({ items, itemHeight = 30, containerHeight = 400 }) {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.floor(scrollTop / itemHeight)
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 1
  const endIndex = Math.min(startIndex + visibleCount, items.length)

  const visibleItems = items.slice(startIndex, endIndex)

  return (
    &lt;div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={e =&gt; setScrollTop(e.target.scrollTop)}
    &gt;
      &lt;div style={{ height: items.length * itemHeight, position: 'relative' }}&gt;
        &lt;div style={{ transform: \`translateY(\${startIndex * itemHeight}px)\` }}&gt;
          {visibleItems.map((item, i) =&gt; (
            &lt;div key={i} style={{ height: itemHeight, borderBottom: '1px solid #eee' }}&gt;
              {item}
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

function App() {
  const items = Array.from({ length: 10000 }, (_, i) =&gt; \`项目 \${'{'}${'{i}}'}\`)
  return &lt;VirtualList items={items} /&gt;
}

export default App`,
        verification: '实现了虚拟列表，只渲染可见区域内的项目',
        solution: `解题步骤：
1. 用 scrollTop / itemHeight 计算起始索引
2. slice 截取可见范围内的数据
3. 用 translateY 定位渲染区域
4. 容器高度 = 总项数 × 每项高度`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'high',
        dependsOn: ['react-17'],
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
          'title': '计算可见范围',
          'verification': 'Math.floor(scrollTop / itemHeight)',
          'hint': '根据滚动位置计算起始索引',
          docLinks: [{title: '计算可见范围', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-2',
          'title': 'slice 截取数据',
          'verification': '.slice(',
          'hint': '用 slice 截取可视范围的数据',
          docLinks: [{title: 'slice 截取数据', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': 'translateY 偏移定位',
          'verification': 'translateY(',
          'hint': '用 transform translateY 定位渲染区域',
          docLinks: [{title: 'translateY 偏移定位', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: '虚拟列表概念', url: 'https://react-window.vercel.app/' },
        { title: 'react-window 库', url: 'https://github.com/bvaughn/react-window' }
        ],
      },
      {
        id: 'react-19',
        number: 19,
        title: '代码分割',
        concept: 'lazy/Suspense',
        difficulty: 'hard',
        task: '用 React.lazy 和 Suspense 实现路由级代码分割',
        prerequisites: `<h4>📦 代码分割</h4>
<p>React.lazy 实现组件懒加载，配合 Suspense 处理加载状态：</p>
<pre><code>import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;加载中...&lt;/div&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  )
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>lazy(() => import('./Comp'))</code> — 懒加载组件</li>
  <li><code>Suspense fallback</code> — 加载中显示的 UI</li>
  <li>每个路由打包为独立 chunk</li>
</ul>`,
        conceptDetail: `步骤 1 — 用 lazy 包裹组件导入
[React.lazy](懒加载组件) 接收一个返回 import() 的函数。

步骤 2 — 用 Suspense 包裹
[Suspense](处理异步加载) 的 fallback 显示加载状态。

步骤 3 — 路由级懒加载
每个 Route 的 element 用 lazy 组件，实现按需加载。`,
        contextCode: `// React.lazy + Suspense 示例

import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 懒加载组件
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

// 加载中组件
function Loading() {
  return &lt;div style={{ padding: 20 }}&gt;加载中...&lt;/div&gt;
}

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
        &lt;Routes&gt;
          &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
          &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
          &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;
        &lt;/Routes&gt;
      &lt;/Suspense&gt;
    &lt;/BrowserRouter&gt;
  )
}`,
        starterCode: `import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 用 React.lazy 懒加载页面组件
const Home = lazy(() => ???('./pages/Home'))
const About = lazy(() => ???('./pages/About'))

function Loading() {
  return &lt;p&gt;加载中...&lt;/p&gt;
}

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;首页&lt;/Link&gt;
        {' | '}
        &lt;Link to="/about"&gt;关于&lt;/Link&gt;
      &lt;/nav&gt;
      {/* 用 Suspense 包裹路由，fallback 显示加载状态 */}
      &lt;Suspense fallback={???}&gt;
        &lt;Routes&gt;
          &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
          &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
        &lt;/Routes&gt;
      &lt;/Suspense&gt;
    &lt;/BrowserRouter&gt;
  )
}

export default App`,
        hints: [
          'lazy(() => import("./pages/Home"))',
          'Suspense 的 fallback 属性接收加载中的 JSX',
          'Suspense 包裹在 Routes 外面'
        ],
        code: `import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

function Loading() {
  return &lt;p&gt;加载中...&lt;/p&gt;
}

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;首页&lt;/Link&gt;
        {' | '}
        &lt;Link to="/about"&gt;关于&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
        &lt;Routes&gt;
          &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
          &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
        &lt;/Routes&gt;
      &lt;/Suspense&gt;
    &lt;/BrowserRouter&gt;
  )
}

export default App`,
        verification: '使用了 React.lazy 和 Suspense 实现代码分割',
        solution: `解题步骤：
1. 用 lazy(() => import('./Comp')) 懒加载组件
2. 用 Suspense fallback={...} 包裹路由
3. 每个路由的 component 改用 lazy 组件`,
        filePath: 'src/App.jsx',
        cognitiveLoad: 'high',
        dependsOn: ['react-18'],
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
          'title': 'lazy 懒加载组件',
          'verification': 'lazy(() => import(',
          'hint': '用 React.lazy 包装动态导入',
          docLinks: [{title: 'lazy 懒加载组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         },
         {
          'id': 'step-2',
          'title': 'Suspense 包裹',
          'verification': '<Suspense',
          'hint': '用 Suspense 包裹路由组件',
          docLinks: [{title: 'Suspense 包裹', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '设置 fallback',
          'verification': 'fallback={',
          'hint': '设置加载中的 fallback UI 内容',
          docLinks: [{title: '设置 fallback', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: 'React.lazy 代码分割', url: 'https://react.dev/reference/react/lazy' },
        { title: 'Suspense 参考文档', url: 'https://react.dev/reference/react/Suspense' }
        ],
      },
      {
        id: 'react-20',
        number: 20,
        title: '实战 - 聊天室组件',
        concept: '综合实战',
        difficulty: 'hard',
        task: '综合运用所学知识，构建一个完整的聊天室组件',
        prerequisites: `<h4>🎯 综合实战</h4>
<p>本关综合运用 React 核心概念构建聊天室：</p>
<pre><code>功能清单：
1. 消息列表（useState + map）
2. 发送消息（受控表单）
3. 在线用户（useContext）
4. 自动滚动（useRef + useEffect）
5. 消息时间戳（useMemo）
</code></pre>

<h4>🔑 涉及知识点</h4>
<ul>
  <li>useState — 管理消息列表和输入状态</li>
  <li>useEffect — 自动滚动和模拟消息</li>
  <li>useRef — 引用消息容器 DOM</li>
  <li>useMemo — 计算消息统计</li>
  <li>条件渲染 — 空消息提示</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义消息数据结构
每条消息包含 id、text、sender、timestamp 字段。

步骤 2 — 实现发送功能
受控表单绑定输入框，onSubmit 时添加新消息到列表。

步骤 3 — 自动滚动到底部
useRef 引用容器，useEffect 在新消息到来时 scrollIntoView。

步骤 4 — 添加额外功能
在线用户列表、消息统计、模拟接收消息。`,
        contextCode: `// 聊天室核心逻辑参考

// 消息数据结构
const message = {
  id: Date.now(),
  text: '你好',
  sender: 'Alice',
  timestamp: new Date().toLocaleTimeString()
}

// 发送消息
const handleSend = (e) => {
  e.preventDefault()
  if (!input.trim()) return
  setMessages([...messages, {
    id: Date.now(),
    text: input,
    sender: '我',
    timestamp: new Date().toLocaleTimeString()
  }])
  setInput('')
}

// 自动滚动
useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
}, [messages])`,
        starterCode: `import { useState, useRef, useEffect, useMemo } from 'react'

function ChatRoom() {
  const [messages, setMessages] = useState([
    { id: 1, text: '欢迎来到聊天室！', sender: '系统', timestamp: '09:00' }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  // 自动滚动到底部
  useEffect(() => {
    ???
  }, [messages])

  // 发送消息
  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    ???
  }

  // 消息统计
  const stats = useMemo(() => {
    return {
      total: messages.length,
      byMe: messages.filter(m => m.sender === '我').length
    }
  }, [messages])

  return (
    &lt;div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}&gt;
      &lt;h2&gt;聊天室&lt;/h2&gt;
      &lt;p&gt;共 {stats.total} 条消息，我发了 {stats.byMe} 条&lt;/p&gt;

      &lt;div style={{ height: 400, overflow: 'auto', border: '1px solid #ccc', padding: 10, marginBottom: 10 }}&gt;
        {messages.length === 0 && &lt;p&gt;暂无消息&lt;/p&gt;}
        {messages.map(msg =&gt; (
          &lt;div key={msg.id} style={{ marginBottom: 8 }}&gt;
            &lt;strong&gt;{msg.sender}&lt;/strong&gt;
            &lt;span&gt; ({msg.timestamp})&lt;/span&gt;
            &lt;p style={{ margin: '4px 0' }}&gt;{msg.text}&lt;/p&gt;
          &lt;/div&gt;
        ))}
        &lt;div ref={bottomRef} /&gt;
      &lt;/div&gt;

      &lt;form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}&gt;
        &lt;input
          value={input}
          onChange={e =&gt; setInput(e.target.value)}
          placeholder="输入消息..."
          style={{ flex: 1 }}
        /&gt;
        &lt;button type="submit"&gt;发送&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  )
}

export default ChatRoom`,
        hints: [
          'useEffect 中 bottomRef.current?.scrollIntoView({ behavior: "smooth" })',
          'handleSend 中 setMessages([...messages, { id: Date.now(), text: input, sender: "我", timestamp: new Date().toLocaleTimeString() }])',
          '发送后 setInput("") 清空输入框'
        ],
        code: `import { useState, useRef, useEffect, useMemo } from 'react'

function ChatRoom() {
  const [messages, setMessages] = useState([
    { id: 1, text: '欢迎来到聊天室！', sender: '系统', timestamp: '09:00' }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: input,
        sender: '我',
        timestamp: new Date().toLocaleTimeString()
      }
    ])
    setInput('')
  }

  const stats = useMemo(() => ({
    total: messages.length,
    byMe: messages.filter(m => m.sender === '我').length
  }), [messages])

  return (
    &lt;div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}&gt;
      &lt;h2&gt;聊天室&lt;/h2&gt;
      &lt;p&gt;共 {stats.total} 条消息，我发了 {stats.byMe} 条&lt;/p&gt;
      &lt;div style={{ height: 400, overflow: 'auto', border: '1px solid #ccc', padding: 10, marginBottom: 10 }}&gt;
        {messages.length === 0 && &lt;p&gt;暂无消息&lt;/p&gt;}
        {messages.map(msg =&gt; (
          &lt;div key={msg.id} style={{ marginBottom: 8 }}&gt;
            &lt;strong&gt;{msg.sender}&lt;/strong&gt;
            &lt;span&gt; ({msg.timestamp})&lt;/span&gt;
            &lt;p style={{ margin: '4px 0' }}&gt;{msg.text}&lt;/p&gt;
          &lt;/div&gt;
        ))}
        &lt;div ref={bottomRef} /&gt;
      &lt;/div&gt;
      &lt;form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}&gt;
        &lt;input
          value={input}
          onChange={e =&gt; setInput(e.target.value)}
          placeholder="输入消息..."
          style={{ flex: 1 }}
        /&gt;
        &lt;button type="submit"&gt;发送&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  )
}

export default ChatRoom`,
        verification: '综合运用 useState、useEffect、useRef、useMemo 构建了聊天室',
        solution: `解题步骤：
1. useState 管理 messages 和 input
2. useRef 引用底部占位元素
3. useEffect 监听 messages 变化自动滚动
4. handleSend 添加新消息并清空输入
5. useMemo 计算消息统计`,
        filePath: 'src/ChatRoom.jsx',
        cognitiveLoad: 'high',
        dependsOn: ['react-19'],
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
          'title': '管理消息列表',
          'verification': 'useState',
          'hint': '用 useState 管理 messages 状态',
          docLinks: [{title: '管理消息列表', url: 'https://zh-hans.react.dev/learn/rendering-lists'}],
         },
         {
          'id': 'step-2',
          'title': '实现自动滚动',
          'verification': 'scrollIntoView',
          'hint': 'useRef + useEffect 新消息自动滚动到底部',
          docLinks: [{title: '实现自动滚动', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '处理消息发送',
          'verification': 'handleSend',
          'hint': '实现发送消息和清空输入框',
          docLinks: [{title: '处理消息发送', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
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
        { title: 'React Router 嵌套布局', url: 'https://reactrouter.com/en/main/start/concepts#index-routes' },
        { title: 'WebSocket MDN', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket' }
        ],
      }
    ]
  }
,
{
    id: 'chat-app',
    name: '阶段五：聊天室项目实战',
    description: '综合运用 React 技能，从零搭建实时聊天室前端应用',
    levels: [
            {
              id: 'react-21',
              number: 21,
              type: 'project',
              project: 'chat-app',
              projectModule: '项目搭建',
              title: '聊天室项目初始化',
              concept: 'Vite + React 项目结构',
              difficulty: 'easy',
              task: '用 Vite 创建 React 聊天室项目，安装依赖，配置路由和样式方案',
              prerequisites: '<h4>📚 Vite + React 项目</h4><p>Vite 创建 React 项目后，src/ 目录包含组件、样式和入口文件。</p>',
              conceptDetail: 'Vite 创建 React 项目支持 JSX 语法。react-router-dom 管理页面路由。CSS Modules 提供样式隔离方案。',
              contextCode: '',
              hints: [
                'npm create vite@latest chat-app -- --template react',
                '安装 react-router-dom@6',
                'src/ 目录下创建 components/ 和 pages/ 子目录'
              ],
              code: 'import { createBrowserRouter, RouterProvider } from \'react-router-dom\'\nimport ChatRoom from \'./pages/ChatRoom\'\nimport Login from \'./pages/Login\'\n\nconst router = createBrowserRouter([\n  { path: \'/\', element: <Login /> },\n  { path: \'/chat\', element: <ChatRoom /> }\n])\n\nfunction App() {\n  return <RouterProvider router={router} />\n}\n\nexport default App',
              verification: '使用 Vite 创建项目，配置 react-router-dom 路由',
              filePath: 'src/App.jsx',
              projectFiles: {
                'vite.config.js': '',
                'src/App.jsx': '',
                'src/main.jsx': ''
              },
              cognitiveLoad: 'low',
              dependsOn: ['react-20'],
              commonMistakes: [],
              variations: [
                {
                  name: 'Next.js',
                  description: 'Next.js 提供文件系统路由'
                }
              ],
              transferTasks: [
                {
                  task: '添加 404 页面和路由守卫',
                  target: '掌握路由进阶用法'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建路由配置',
          'verification': 'createBrowserRouter',
          'hint': '使用 createBrowserRouter 创建路由',

        docLinks: [
        { title: 'Vite 项目初始化', url: 'https://cn.vitejs.dev/guide/' },
        { title: 'React 项目结构', url: 'https://zh-hans.react.dev/learn/start-a-new-react-project' }
        ],
         },
         {
          'id': 'step-2',
          'title': '配置 RouterProvider',
          'verification': 'RouterProvider',
          'hint': '用 RouterProvider 提供路由上下文',
          docLinks: [{title: '配置 RouterProvider', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '定义页面组件',
          'verification': 'element={<ChatRoom />}',
          'hint': '定义路径和页面组件的映射规则',
          docLinks: [{title: '定义页面组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         }
        ],
            },
            {
              id: 'react-22',
              number: 22,
              type: 'project',
              project: 'chat-app',
              projectModule: '组件设计',
              title: '聊天室组件树',
              concept: '组件拆分',
              difficulty: 'medium',
              task: '设计聊天室组件树：ChatRoom（容器）、MessageList（消息列表）、MessageItem（单条消息）、ChatInput（输入框）、UserList（在线用户）',
              prerequisites: '<h4>📚 组件设计原则</h4><p>单一职责原则：每个组件只做一件事。容器组件负责数据，展示组件负责渲染。<code>props</code> 父子组件通信。</p>',
              conceptDetail: 'React 组件分为容器组件（负责数据获取）和展示组件（仅根据 props 渲染）。组合模式用 children 实现灵活布局。',
              contextCode: '',
              hints: [
                'ChatRoom 管理消息和用户状态',
                'MessageList 接收 messages 数组 prop',
                'ChatInput 通过 onChange 回调传递消息内容'
              ],
              code: 'function ChatInput({ onSend }) {\n  const [text, setText] = useState(\'\')\n\n  function handleSubmit(e) {\n    e.preventDefault()\n    if (text.trim()) {\n      onSend(text)\n      setText(\'\')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <button type="submit">发送</button>\n    </form>\n  )\n}',
              verification: '组件树结构合理，ChatRoom/MessageList/MessageItem/ChatInput/UserList 组件分离',
              filePath: 'src/components/ChatInput.jsx',
              projectFiles: {
                'src/components/ChatRoom.jsx': '',
                'src/components/MessageList.jsx': '',
                'src/components/MessageItem.jsx': '',
                'src/components/ChatInput.jsx': '',
                'src/components/UserList.jsx': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'react-21'
              ],
              commonMistakes: [
                {
                  pattern: 'props',
                  explanation: '组件接收的 props 是只读的，不能直接修改'
                },
                {
                  pattern: 'useState',
                  explanation: 'useState 返回 [值, 设置函数] 数组'
                }
              ],
              variations: [
                {
                  name: '组件库',
                  description: 'Ant Design 提供现成的聊天 UI 组件'
                }
              ],
              transferTasks: [
                {
                  task: '添加消息类型（文本/图片/文件）支持',
                  target: '掌握条件渲染'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建 ChatInput 组件',
          'verification': 'function ChatInput',
          'hint': '创建独立的聊天输入组件',

        docLinks: [
        { title: '组件树与组件拆分', url: 'https://zh-hans.react.dev/learn/importing-and-exporting-components' },
        { title: 'Props 传递', url: 'https://zh-hans.react.dev/learn/passing-props-to-a-component' }
        ],
         },
         {
          'id': 'step-2',
          'title': '受控表单输入',
          'verification': 'useState(',
          'hint': '用 useState 管理输入框内容',
          docLinks: [{title: '受控表单输入', url: 'https://zh-hans.react.dev/learn/reacting-to-input-with-state'}],
         },
         {
          'id': 'step-3',
          'title': '回调传递消息',
          'verification': 'onSend',
          'hint': '通过 onSend prop 将消息传给父组件',
          docLinks: [{title: '回调传递消息', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         }
        ],
            },
            {
              id: 'react-23',
              number: 23,
              type: 'project',
              project: 'chat-app',
              projectModule: '状态管理',
              title: 'useReducer 消息管理',
              concept: 'useReducer',
              difficulty: 'medium',
              task: '用 useReducer 替代 useState 管理消息状态，定义 ADD_MESSAGE/SET_MESSAGES/DELETE_MESSAGE 操作类型',
              prerequisites: '<h4>📚 useReducer vs useState</h4><p>当状态逻辑复杂（多种更新类型、依赖关系）时，useReducer 比 useState 更合适。<code>reducer</code> 是纯函数，接收 (state, action) 返回 newState。</p>',
              conceptDetail: 'useReducer 接收 reducer 函数和初始状态。action 是包含 type 和 payload 的对象。dispatch 发送 action 触发状态更新。Reducer 必须是纯函数。',
              contextCode: '',
              hints: [
                'reducer 函数 switch(action.type) 处理不同操作',
                '消息对象包含 id, userId, text, timestamp',
                'dispatch({ type: "ADD_MESSAGE", payload: msg })'
              ],
              code: 'const initialState = { messages: [] }\n\nfunction messageReducer(state, action) {\n  switch (action.type) {\n    case \'ADD_MESSAGE\':\n      return { messages: [...state.messages, action.payload] }\n    case \'SET_MESSAGES\':\n      return { messages: action.payload }\n    case \'DELETE_MESSAGE\':\n      return {\n        messages: state.messages.filter(m => m.id !== action.payload)\n      }\n    default:\n      return state\n  }\n}\n\nconst [state, dispatch] = useReducer(messageReducer, initialState)',
              verification: '使用 useReducer 管理消息状态，定义了 ADD/SET/DELETE 三种操作',
              filePath: 'src/hooks/useMessageReducer.js',
              projectFiles: {
                'src/hooks/useMessageReducer.js': '',
                'src/hooks/useChat.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'react-22'
              ],
              commonMistakes: [
                {
                  pattern: 'action.type',
                  explanation: '每个 action 必须有 type 字段'
                },
                {
                  pattern: '...state',
                  explanation: 'reducer 返回新对象，不要直接修改 state'
                }
              ],
              variations: [
                {
                  name: 'Zustand',
                  description: '轻量状态管理库，比 Redux 更简洁'
                }
              ],
              transferTasks: [
                {
                  task: '添加消息编辑功能（UPDATE_MESSAGE action）',
                  target: '掌握 reducer 模式扩展'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '定义消息 reducer',
          'verification': 'function messageReducer',
          'hint': '创建消息状态管理的 reducer 函数',

        docLinks: [
        { title: 'useReducer 复杂状态', url: 'https://zh-hans.react.dev/reference/react/useReducer' },
        { title: 'Reducer 模式', url: 'https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer' }
        ],
         },
         {
          'id': 'step-2',
          'title': '处理 ADD_MESSAGE',
           'verification': "case 'ADD_MESSAGE'",
          'hint': '展开数组追加新消息',
          docLinks: [{title: '处理 ADD_MESSAGE', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '处理 DELETE_MESSAGE',
           'verification': "case 'DELETE_MESSAGE'",
          'hint': '用 filter 删除指定消息',
          docLinks: [{title: '处理 DELETE_MESSAGE', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         }
        ],
            },
            {
              id: 'react-24',
              number: 24,
              type: 'project',
              project: 'chat-app',
              projectModule: '消息组件',
              title: '消息列表与自动滚动',
              concept: 'useRef + useEffect',
              difficulty: 'medium',
              task: '实现消息列表组件，新消息自动滚动到底部，使用 useRef 获取 DOM 引用',
              prerequisites: '<h4>📚 useRef 和 DOM 操作</h4><p><code>useRef</code> 创建可变的引用对象，<code>.current</code> 访问 DOM 节点。配合 <code>useEffect</code> 在渲染后操作 DOM。</p>',
              conceptDetail: 'useRef 用于访问 DOM 节点。useEffect 在渲染后执行副作用。scrollIntoView 滚动到可视区域。IntersectionObserver 可实现虚拟列表优化。',
              contextCode: '',
              hints: [
                'const bottomRef = useRef(null) 创建 ref',
                'useEffect(() => { bottomRef.current?.scrollIntoView() }, [messages])',
                'messages 变化时自动滚到底部'
              ],
              code: 'import { useRef, useEffect } from \'react\'\n\nfunction MessageList({ messages }) {\n  const bottomRef = useRef(null)\n\n  useEffect(() => {\n    bottomRef.current?.scrollIntoView({ behavior: \'smooth\' })\n  }, [messages])\n\n  return (\n    <div className="message-list">\n      {messages.map(msg => (\n        <MessageItem key={msg.id} message={msg} />\n      ))}\n      <div ref={bottomRef} />\n    </div>\n  )\n}',
              verification: 'MessageList 使用 useRef + useEffect 实现自动滚动到底部',
              filePath: 'src/components/MessageList.jsx',
              projectFiles: {
                'src/components/MessageList.jsx': '',
                'src/components/MessageItem.jsx': '',
                'src/styles/chat.css': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'react-23'
              ],
              commonMistakes: [
                {
                  pattern: 'useRef(null)',
                  explanation: 'useRef 初始值传 null，DOM ref 在挂载后设置'
                },
                {
                  pattern: 'scrollIntoView',
                  explanation: 'scrollIntoView 是 DOM 方法，需要在 ref.current 上调用'
                }
              ],
              variations: [
                {
                  name: '虚拟列表',
                  description: 'react-window 处理大量消息滚动性能'
                }
              ],
              transferTasks: [
                {
                  task: '添加消息加载更多（分页加载历史消息）',
                  target: '掌握无限滚动模式'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建底部 ref',
          'verification': 'useRef(null)',
          'hint': '用 useRef 创建底部元素引用',

        docLinks: [
        { title: 'useRef 操作 DOM', url: 'https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs' },
        { title: 'Element.scrollIntoView', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView' }
        ],
         },
         {
          'id': 'step-2',
          'title': 'useEffect 自动滚动',
          'verification': 'scrollIntoView',
          'hint': 'messages 变化时自动滚到底部',
          docLinks: [{title: 'useEffect 自动滚动', url: 'https://zh-hans.react.dev/learn/using-the-effect-hook'}],
         },
         {
          'id': 'step-3',
          'title': '绑定 ref 到 div',
          'verification': 'ref={bottomRef}',
          'hint': '将 ref 绑定到消息列表底部占位 div',
          docLinks: [{title: '绑定 ref 到 div', url: 'https://zh-hans.react.dev/learn/referencing-values-with-refs'}],
         }
        ],
            },
            {
              id: 'react-25',
              number: 25,
              type: 'project',
              project: 'chat-app',
              projectModule: 'WebSocket',
              title: 'WebSocket 连接管理',
              concept: '自定义 Hook',
              difficulty: 'hard',
              task: '封装 useWebSocket 自定义 Hook，管理 WebSocket 连接生命周期，处理重连和心跳',
              prerequisites: '<h4>📚 WebSocket 基础</h4><p>WebSocket 是全双工通信协议。<code>new WebSocket(url)</code> 创建连接，<code>onmessage</code> 接收消息，<code>send()</code> 发送消息。</p>',
              conceptDetail: '自定义 Hook 以 use 开头命名，内部可调用其他 Hook。WebSocket 连接有 onopen/onmessage/onclose/onerror 事件。心跳机制用 setInterval 定期发送 ping。',
              contextCode: '',
              hints: [
                'useEffect 中创建连接，return 清理函数关闭连接',
                'onopen 时开始心跳，onclose 时实现自动重连',
                '接收消息 JSON.parse 后通过回调传给父组件'
              ],
              code: 'import { useEffect, useRef, useCallback } from \'react\'\n\nfunction useWebSocket(url, onMessage) {\n  const ws = useRef(null)\n  const reconnectTimer = useRef(null)\n\n  function connect() {\n    ws.current = new WebSocket(url)\n    ws.current.onmessage = (e) => {\n      const data = JSON.parse(e.data)\n      onMessage(data)\n    }\n    ws.current.onclose = () => {\n      reconnectTimer.current = setTimeout(connect, 3000)\n    }\n  }\n\n  useEffect(() => {\n    connect()\n    return () => {\n      ws.current?.close()\n      clearTimeout(reconnectTimer.current)\n    }\n  }, [url])\n\n  const send = useCallback((data) => {\n    ws.current?.send(JSON.stringify(data))\n  }, [])\n\n  return { send }\n}',
              verification: 'useWebSocket 管理连接/重连/清理生命周期，返回 send 方法',
              filePath: 'src/hooks/useWebSocket.js',
              projectFiles: {
                'src/hooks/useWebSocket.js': '',
                'src/hooks/useChat.js': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'react-23'
              ],
              commonMistakes: [
                {
                  pattern: 'new WebSocket',
                  explanation: 'WebSocket 构造函数接收完整 URL（ws:// 或 wss://）'
                },
                {
                  pattern: 'useEffect cleanup',
                  explanation: 'useEffect 返回的清理函数在组件卸载时执行'
                }
              ],
              variations: [
                {
                  name: 'Socket.IO',
                  description: '提供了自动重连和房间管理的封装'
                }
              ],
              transferTasks: [
                {
                  task: '添加连接状态显示（连接中/已连接/断开）',
                  target: '掌握 UI 与状态同步'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建 WebSocket 连接',
          'verification': 'new WebSocket',
          'hint': '在 useEffect 中创建 WebSocket 实例',

        docLinks: [
        { title: 'WebSocket API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket' },
        { title: 'useEffect 生命周期', url: 'https://zh-hans.react.dev/learn/lifecycle-of-reactive-effects' }
        ],
         },
         {
          'id': 'step-2',
          'title': '接收消息',
          'verification': 'onmessage',
          'hint': '监听 onmessage 事件解析 JSON 数据',
          docLinks: [{title: '接收消息', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '清理连接',
          'verification': 'onclose',
          'hint': '组件卸载时关闭连接并清理重连定时器',
          docLinks: [{title: '清理连接', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         }
        ],
            },
            {
              id: 'react-26',
              number: 26,
              type: 'project',
              project: 'chat-app',
              projectModule: '用户管理',
              title: '用户登录与在线状态',
              concept: 'Context API',
              difficulty: 'medium',
              task: '实现用户登录页面，用 Context API 管理全局用户状态，显示在线用户列表',
              prerequisites: '<h4>📚 Context API</h4><p>Context 提供跨组件传递数据的方式，避免 props drilling。<code>createContext</code> 创建上下文，<code>useContext</code> 消费上下文。</p>',
              conceptDetail: 'createContext 创建全局上下文。Context.Provider 提供数据到组件树。useContext 读取上下文的值。localStorage 持久化用户登录信息。',
              contextCode: '',
              hints: [
                'const UserContext = createContext(null)',
                'UserProvider 组件包裹 App，管理 user 状态',
                'localStorage 保存 token，页面刷新后自动恢复登录'
              ],
              code: 'import { createContext, useContext, useState } from \'react\'\n\nconst UserContext = createContext(null)\n\nexport function UserProvider({ children }) {\n  const [user, setUser] = useState(() => {\n    const saved = localStorage.getItem(\'user\')\n    return saved ? JSON.parse(saved) : null\n  })\n\n  function login(userData) {\n    setUser(userData)\n    localStorage.setItem(\'user\', JSON.stringify(userData))\n  }\n\n  function logout() {\n    setUser(null)\n    localStorage.removeItem(\'user\')\n  }\n\n  return (\n    <UserContext.Provider value={{ user, login, logout }}>\n      {children}\n    </UserContext.Provider>\n  )\n}\n\nexport function useUser() {\n  return useContext(UserContext)\n}',
              verification: 'Context Provider 管理全局用户状态，包含 login/logout 和 localStorage 持久化',
              filePath: 'src/contexts/UserContext.jsx',
              projectFiles: {
                'src/contexts/UserContext.jsx': '',
                'src/pages/Login.jsx': '',
                'src/pages/ChatRoom.jsx': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'react-24',
                'react-25'
              ],
              commonMistakes: [
                {
                  pattern: 'createContext',
                  explanation: 'createContext 的参数是默认值，Provider 不包裹时使用'
                },
                {
                  pattern: 'useContext',
                  explanation: 'useContext 必须在 Provider 的子树中调用'
                }
              ],
              variations: [
                {
                  name: 'Zustand',
                  description: '比 Context 性能更好的全局状态方案'
                }
              ],
              transferTasks: [
                {
                  task: '添加用户头像和在线状态指示器',
                  target: '掌握派生状态计算'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建 UserContext',
          'verification': 'createContext',
          'hint': '用 createContext 创建用户上下文',

        docLinks: [
        { title: '用户认证与状态', url: 'https://zh-hans.react.dev/learn/scaling-up-with-reducer-and-context' },
        { title: 'Context 全局状态', url: 'https://zh-hans.react.dev/reference/react/useContext' }
        ],
         },
         {
          'id': 'step-2',
          'title': 'Provider 管理状态',
          'verification': 'UserContext.Provider',
          'hint': '在 Provider 中管理 user 和 login/logout',
          docLinks: [{title: 'Provider 管理状态', url: 'https://zh-hans.react.dev/learn/state-a-components-memory'}],
         },
         {
          'id': 'step-3',
          'title': 'localStorage 持久化',
          'verification': 'localStorage',
          'hint': '登录信息保存到 localStorage 保持登录',
          docLinks: [{title: 'localStorage 持久化', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         }
        ],
            },
            {
              id: 'react-27',
              number: 27,
              type: 'project',
              project: 'chat-app',
              projectModule: '项目整合',
              title: '聊天室项目整合',
              concept: '组件集成',
              difficulty: 'hard',
              task: '将所有功能整合到 ChatRoom 页面：WebSocket 消息收发、消息列表、输入框、在线用户列表',
              prerequisites: '<h4>📚 组件集成策略</h4><p>整合多个模块时，注意数据流方向：状态放顶层容器，通过 props 和回调向下传递。</p>',
              conceptDetail: '数据流从父到子通过 props，子到父通过回调。状态提升将共享状态放到共同父组件。React 推荐组合而非继承。',
              contextCode: '',
              hints: [
                'ChatRoom 是状态管理中心',
                'useWebSocket 接收消息后 dispatch 到 reducer',
                'ChatInput 调用 useWebSocket.send 发送消息'
              ],
              code: 'function ChatRoom() {\n  const { user } = useUser()\n  const [state, dispatch] = useReducer(messageReducer, initialState)\n\n  const { send } = useWebSocket(\'ws://localhost:3000/ws\', (data) => {\n    if (data.type === \'message\') {\n      dispatch({ type: \'ADD_MESSAGE\', payload: data.payload })\n    }\n  })\n\n  function handleSend(text) {\n    send({ type: \'message\', payload: { userId: user.id, text } })\n  }\n\n  return (\n    <div className="chat-layout">\n      <UserList users={onlineUsers} />\n      <div className="chat-main">\n        <MessageList messages={state.messages} />\n        <ChatInput onSend={handleSend} />\n      </div>\n    </div>\n  )\n}',
              verification: 'ChatRoom 整合 useReducer/useWebSocket/useUser，功能完整可运行',
              filePath: 'src/components/ChatRoom.jsx',
              projectFiles: {
                'src/components/ChatRoom.jsx': '',
                'src/styles/chat.css': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'react-26'
              ],
              commonMistakes: [],
              variations: [
                {
                  name: '状态管理升级',
                  description: '用 Zustand 替代 useReducer + Context'
                }
              ],
              transferTasks: [
                {
                  task: '添加表情选择器和消息撤回功能',
                  target: '掌握功能扩展流程'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '调用 useWebSocket',
          'verification': 'useWebSocket(',
          'hint': '连接 WebSocket 并处理接收的消息',

        docLinks: [
        { title: '组合式函数模式', url: 'https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks' },
        { title: 'Props 与组件组合', url: 'https://zh-hans.react.dev/learn/passing-props-to-a-component' }
        ],
         },
         {
          'id': 'step-2',
          'title': 'dispatch 消息更新',
          'verification': 'dispatch',
          'hint': '收到消息后 dispatch 到 reducer',
          docLinks: [{title: 'dispatch 消息更新', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '整合子组件',
          'verification': 'ChatInput onSend',
          'hint': '将 MessageList/ChatInput 组合在一起',
          docLinks: [{title: '整合子组件', url: 'https://zh-hans.react.dev/learn/your-first-component'}],
         }
        ],
            },
            {
              id: 'react-28',
              number: 28,
              type: 'project',
              project: 'chat-app',
              projectModule: '部署',
              title: '构建与部署配置',
              concept: '项目构建',
              difficulty: 'medium',
              task: '配置构建脚本，优化打包，配置 API 代理和 WebSocket 代理',
              prerequisites: '<h4>📚 Vite 构建配置</h4><p><code>vite build</code> 构建生产包到 dist/ 目录。<code>vite.config.js</code> 配置代理和环境变量。</p>',
              conceptDetail: 'Vite 的 proxy 配置解决开发跨域。Vite 用 import.meta.env.VITE_* 暴露环境变量。build.rollupOptions 优化打包。',
              contextCode: '',
              hints: [
                'proxy 配置 /api -> 后端，/ws -> WebSocket',
                'VITE_API_URL 环境变量区分开发/生产',
                'build.outDir 指定输出目录'
              ],
              code: 'import { defineConfig } from \'vite\'\nimport react from \'@vitejs/plugin-react\'\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 5173,\n    proxy: {\n      \'/api\': { target: \'http://localhost:3000\', changeOrigin: true },\n      \'/ws\': { target: \'ws://localhost:3000\', ws: true }\n    }\n  },\n  build: {\n    outDir: \'dist\',\n    sourcemap: false\n  }\n})',
              verification: 'vite.config.js 包含 API 和 WebSocket 代理配置',
              filePath: 'vite.config.js',
              projectFiles: {
                'vite.config.js': '',
                '.env.example': 'VITE_API_URL=http://localhost:3000\nVITE_WS_URL=ws://localhost:3000'
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'react-27'
              ],
              commonMistakes: [
                {
                  pattern: 'ws: true',
                  explanation: 'WebSocket 代理需要额外设置 ws: true'
                },
                {
                  pattern: 'changeOrigin',
                  explanation: '跨域代理必须设置 changeOrigin: true'
                }
              ],
              variations: [
                {
                  name: 'Docker 部署',
                  description: '用 Dockerfile 多阶段构建部署'
                }
              ],
              transferTasks: [
                {
                  task: '配置 GitHub Actions 自动构建部署',
                  target: '掌握 CI/CD 配置'
                }
              ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '配置 API 代理',
           'verification': "'/api'",
          'hint': '配置 /api 代理到后端服务器',

        docLinks: [
        { title: 'Vite 构建部署', url: 'https://cn.vitejs.dev/guide/static-deploy' },
        { title: 'GitHub Pages 部署', url: 'https://cn.vitejs.dev/guide/static-deploy#github-pages' }
        ],
         },
         {
          'id': 'step-2',
          'title': '配置 WebSocket 代理',
           'verification': "'/ws'",
          'hint': '配置 /ws 代理并设置 ws: true',
          docLinks: [{title: '配置 WebSocket 代理', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         },
         {
          'id': 'step-3',
          'title': '配置构建选项',
          'verification': 'outDir',
          'hint': '设置构建输出目录和 sourcemap',
          docLinks: [{title: '配置构建选项', url: 'https://zh-hans.react.dev/learn/describing-the-ui'}],
         }
        ],
            }
    ]
  }
]
