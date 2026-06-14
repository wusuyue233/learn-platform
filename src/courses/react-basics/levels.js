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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/hooks/useCounter.js'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/App.jsx'
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
        filePath: 'src/ChatRoom.jsx'
      }
    ]
  }
]
