export const phases = [
  {
    id: 'nodejs-basics',
    name: '阶段一：Node.js 基础',
    description: '掌握模块系统、文件操作、HTTP 模块和 npm 包管理',
    levels: [
      {
        id: 'node-1',
        number: 1,
        title: '模块系统',
        concept: 'require / import',
        difficulty: 'easy',
        task: '创建工具模块并在主文件中引入使用',
        prerequisites: `<h4>🟢 Node.js 模块系统</h4>
<p>Node.js 支持两种模块系统：</p>
<pre><code>// CommonJS（传统）
const utils = require('./utils')
module.exports = { hello }

// ES Module（现代）
import { hello } from './utils.js'
export function hello() {}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>require()</code> — CommonJS 同步加载模块</li>
  <li><code>import/export</code> — ES Module 语法</li>
  <li>package.json 中 <code>"type": "module"</code> 启用 ESM</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建工具模块
在 utils.js 中导出工具函数。

步骤 2 — 在主文件中引入
使用 require 或 import 引入模块。

步骤 3 — 使用导出的函数
调用引入的函数并验证结果。`,
        contextCode: `// CommonJS 模块语法
// math.js
function add(a, b) { return a + b }
module.exports = { add }

// main.js
const { add } = require('./math')
console.log(add(1, 2))

// ES Module 语法
// math.mjs
export function add(a, b) { return a + b }

// main.mjs
import { add } from './math.mjs'
console.log(add(1, 2))

// package.json 启用 ESM
// { "type": "module" }
// 然后 .js 文件中可用 import/export`,
        starterCode: `// utils.js - 创建一个导出函数的模块
// 导出 greet 函数，接收 name 参数
// 返回 "Hello, {name}!"

module.exports = ???
`,
        hints: [
          'module.exports = { greet }',
          'greet 函数接收 name 参数',
          '用模板字符串或拼接返回结果'
        ],
        code: `function greet(name) {
  return \`Hello, \${name}!\`
}

module.exports = { greet }`,
        verification: '使用了 module.exports 导出模块',
        filePath: 'utils.js',
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
          'title': '导出模块函数',
          'verification': 'module.exports',
          'hint': '用 module.exports 导出工具函数',
          docLinks: [{title: 'Node.js 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/modules.html'}]
         },
         {
          'id': 'step-2',
          'title': '导入模块',
          'verification': 'require(',
          'hint': '用 require 导入自定义模块',
          docLinks: [{title: 'Node.js 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/modules.html'}]
         },
         {
          'id': 'step-3',
          'title': '调用函数',
          'verification': 'const',
          'hint': '调用导入的函数实现功能',
          docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
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
        ]
      },
      {
        id: 'node-2',
        number: 2,
        title: 'fs 文件操作',
        concept: '读写文件',
        difficulty: 'easy',
        task: '使用 fs 模块读写 JSON 配置文件',
        prerequisites: `<h4>🟢 文件系统模块</h4>
<pre><code>const fs = require('fs')

// 同步读取
const data = fs.readFileSync('file.json', 'utf-8')

// 异步读取
fs.readFile('file.json', 'utf-8', (err, data) => {})

// 写入文件
fs.writeFileSync('file.json', JSON.stringify(obj))

// fs/promises（推荐）
const fsPromises = require('fs/promises')
const data = await fsPromises.readFile('file.json', 'utf-8')
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>readFileSync</code> — 同步读取</li>
  <li><code>writeFile</code> — 写入文件</li>
  <li><code>existsSync</code> — 检查文件是否存在</li>
</ul>`,
        conceptDetail: `步骤 1 — 读取 JSON 文件
使用 fs.readFileSync 读取并解析 JSON 数据。

步骤 2 — 修改数据
对读取的数据进行操作。

步骤 3 — 写回文件
使用 JSON.stringify 格式化后写入文件。`,
        contextCode: `// fs 模块常用方法
const fs = require('fs')
const path = require('path')

// 读取文件
const data = fs.readFileSync('config.json', 'utf-8')
const config = JSON.parse(data)

// 写入文件
const json = JSON.stringify(config, null, 2)
fs.writeFileSync('config.json', json)

// 检查文件是否存在
if (fs.existsSync('config.json')) {
  console.log('文件存在')
}

// 异步方式（fs/promises）
const fsP = require('fs/promises')
const content = await fsP.readFile('file.txt', 'utf-8')
await fsP.writeFile('file.txt', 'new content')

// 路径拼接
const filePath = path.join(__dirname, 'data', 'config.json')`,
        starterCode: `const fs = require('fs')
const path = require('path')

// 读取 config.json 文件并解析为对象
const configPath = path.join(__dirname, 'config.json')
const ??? = JSON.parse(???.toString())

// 修改配置：将 port 改为 8080
config.port = ???

// 写回文件
fs.writeFileSync(configPath, JSON.stringify(???, null, 2))
`,
        hints: [
          'fs.readFileSync(configPath) 读取文件',
          'config.port = 8080 修改配置',
          'JSON.stringify(config, null, 2) 格式化写入'
        ],
        code: `const fs = require('fs')
const path = require('path')

const configPath = path.join(__dirname, 'config.json')
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))

config.port = 8080

fs.writeFileSync(configPath, JSON.stringify(config, null, 2))`,
        verification: '使用了 fs 模块读写文件，JSON.parse/stringify 解析和序列化',
        filePath: 'config-manager.js',
        cognitiveLoad: 'low',
        dependsOn: ['node-1'],
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
          'title': '导入 fs 模块',
          'verification': 'require(\'fs\')',
          'hint': '导入 Node.js 内置 fs 模块',
          docLinks: [{title: 'Node.js 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/modules.html'}, {title: 'Node.js fs 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/fs.html'}]
         },
         {
          'id': 'step-2',
          'title': '读取文件',
          'verification': 'readFileSync',
          'hint': '用 readFileSync 读取 JSON 文件',
          docLinks: [{title: 'Node.js fs 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/fs.html'}]
         },
         {
          'id': 'step-3',
          'title': '写入文件',
          'verification': 'writeFileSync',
          'hint': '用 writeFileSync 写入 JSON 文件',
          docLinks: [{title: 'Node.js fs 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/fs.html'}]
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
        ]
      },
      {
        id: 'node-3',
        number: 3,
        title: 'http 模块',
        concept: '创建服务器',
        difficulty: 'medium',
        task: '用原生 http 模块创建一个返回 JSON 的 API 服务器',
        prerequisites: `<h4>🟢 http 模块</h4>
<pre><code>const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Hello' }))
})

server.listen(3000)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>createServer</code> — 创建 HTTP 服务器</li>
  <li><code>req</code> — 请求对象（url, method, headers）</li>
  <li><code>res</code> — 响应对象（writeHead, end）</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 HTTP 服务器
http.createServer 接收回调函数处理每个请求。

步骤 2 — 根据路由返回不同数据
通过 req.url 和 req.method 判断请求类型。

步骤 3 — 设置响应头并返回 JSON
Content-Type 设为 application/json，res.end 返回数据。`,
        contextCode: `// http 模块 API 服务器参考
const http = require('http')

const server = http.createServer((req, res) => {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*')

  // 路由处理
  if (req.url === '/api/hello' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Hello API' }))
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ users: [] }))
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})`,
        starterCode: `const http = require('http')

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头为 JSON
  ???

  // GET /api/products 返回商品列表
  if (req.url === '/api/products' && req.method === 'GET') {
    const products = [
      { id: 1, name: '手机', price: 2999 },
      { id: 2, name: '电脑', price: 5999 }
    ]
    // 返回 JSON 数据
    res.end(???)
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
`,
        hints: [
          'res.writeHead(200, { "Content-Type": "application/json" })',
          'JSON.stringify(products) 将对象转为 JSON',
          'res.end() 返回响应数据'
        ],
        code: `const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (req.url === '/api/products' && req.method === 'GET') {
    const products = [
      { id: 1, name: '手机', price: 2999 },
      { id: 2, name: '电脑', price: 5999 }
    ]
    res.end(JSON.stringify({ products }))
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Not Found' }))
  }
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})`,
        verification: '使用 http.createServer 创建服务器，返回 JSON 数据',
        filePath: 'server.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-2'],
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
          'title': '导入 http 模块',
          'verification': 'require(\'http\')',
          'hint': '导入 Node.js http 模块',
          docLinks: [{title: 'Node.js 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/modules.html'}, {title: 'Node.js http 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/http.html'}]
         },
         {
          'id': 'step-2',
          'title': '创建服务器',
          'verification': 'createServer',
          'hint': '用 http.createServer 创建服务器',
          docLinks: [{title: 'Node.js http 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/http.html'}]
         },
         {
          'id': 'step-3',
          'title': '返回 JSON',
          'verification': 'JSON.stringify',
          'hint': '设置响应头并返回 JSON 数据',
          docLinks: [{title: 'Node.js http 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/http.html'}]
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
        ]
      },
      {
        id: 'node-4',
        number: 4,
        title: 'npm 与包管理',
        concept: 'package.json',
        difficulty: 'easy',
        task: '创建 package.json 并安装项目依赖',
        prerequisites: `<h4>🟢 npm 包管理</h4>
<pre><code>npm init -y              # 初始化项目
npm install express      # 安装依赖
npm install -D nodemon   # 开发依赖
npm run dev              # 运行脚本
</code></pre>

<h4>🔑 package.json 字段</h4>
<ul>
  <li><code>dependencies</code> — 生产依赖</li>
  <li><code>devDependencies</code> — 开发依赖</li>
  <li><code>scripts</code> — 自定义命令</li>
</ul>`,
        conceptDetail: `步骤 1 — 初始化项目
npm init 创建 package.json。

步骤 2 — 安装依赖
npm install 安装并记录到 dependencies。

步骤 3 — 配置脚本
在 scripts 中定义 dev、start 等命令。`,
        contextCode: `// package.json 结构
{
  "name": "chat-backend",
  "version": "1.0.0",
  "description": "实时聊天室后端",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "tsc"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.6.0",
    "socket.io": "^4.7.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// 常用命令
// npm init -y           快速初始化
// npm i express         安装并保存
// npm i -D typescript   安装开发依赖
// npm outdated          检查过期依赖
// npm update            更新依赖`,
        starterCode: `// 创建一个 package.json
{
  "name": "chat-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon ???"
  },
  "dependencies": {
    "express": "^4.18.2",
    "socket.io": "^4.7.2"
  },
  "devDependencies": {
    "???": "^3.0.1"
  }
}
`,
        hints: [
          'scripts.dev: "nodemon server.js"',
          'devDependencies: { "nodemon": "^3.0.1" }',
          'nodemon 用于开发时自动重启'
        ],
        code: `{
  "name": "chat-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "socket.io": "^4.7.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}`,
        verification: '创建了包含 scripts、dependencies、devDependencies 的 package.json',
        filePath: 'package.json',
        cognitiveLoad: 'low',
        dependsOn: ['node-3'],
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
          'title': '初始化项目',
          'verification': '"name"',
          'hint': '创建 package.json 定义项目元信息',
          docLinks: [{title: 'npm 文档', url: 'https://docs.npmjs.com/'}]
         },
         {
          'id': 'step-2',
          'title': '安装依赖',
          'verification': 'dependencies',
          'hint': '配置 dependencies 依赖列表',
          docLinks: [{title: 'npm 文档', url: 'https://docs.npmjs.com/'}]
         },
         {
          'id': 'step-3',
          'title': '配置脚本',
          'verification': '"scripts"',
          'hint': '配置 start 和 dev 运行脚本',
          docLinks: [{title: 'npm 文档', url: 'https://docs.npmjs.com/'}]
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
        ]
      }
    ]
  },
  {
    id: 'express-framework',
    name: '阶段二：Express 框架',
    description: '掌握 Express 路由、中间件和请求处理',
    levels: [
      {
        id: 'node-5',
        number: 5,
        title: 'Express 基础路由',
        concept: '路由注册',
        difficulty: 'easy',
        task: '创建商品 API 的 CRUD 路由',
        prerequisites: `<h4>🟢 Express 路由</h4>
<pre><code>const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
  res.json({ users: [] })
})

app.post('/api/users', (req, res) => {
  res.json({ created: true })
})

app.listen(3000)
</code></pre>

<h4>🔑 路由方法</h4>
<ul>
  <li><code>app.get()</code> — GET 请求</li>
  <li><code>app.post()</code> — POST 请求</li>
  <li><code>app.put()</code> — PUT 请求</li>
  <li><code>app.delete()</code> — DELETE 请求</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 Express 应用
express() 创建应用实例。

步骤 2 — 注册路由
使用 app.get/post/put/delete 注册路由。

步骤 3 — 使用 res.json 返回 JSON
res.json 自动设置 Content-Type 并序列化数据。`,
        contextCode: `// Express 路由参考
const express = require('express')
const app = express()

// GET 列表
app.get('/api/products', (req, res) => {
  res.json({ products: [] })
})

// GET 单个
app.get('/api/products/:id', (req, res) => {
  res.json({ id: req.params.id })
})

// POST 创建
app.post('/api/products', (req, res) => {
  res.status(201).json({ created: true })
})

// PUT 更新
app.put('/api/products/:id', (req, res) => {
  res.json({ updated: true })
})

// DELETE 删除
app.delete('/api/products/:id', (req, res) => {
  res.json({ deleted: true })
})

app.listen(3000)`,
        starterCode: `const express = require('express')
const app = express()

// 模拟商品数据
const products = [
  { id: 1, name: '手机', price: 2999 },
  { id: 2, name: '电脑', price: 5999 }
]

// GET /api/products - 获取所有商品
app.get('/api/products', (req, res) => {
  ???
})

// GET /api/products/:id - 获取单个商品
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === ???)
  if (!product) return res.status(404).json({ error: '未找到' })
  ???
})

// POST /api/products - 创建商品
app.post('/api/products', (req, res) => {
  res.status(201).json({ message: '创建成功', product: req.body })
})

app.listen(3000, () => {
  console.log('API server running on http://localhost:3000')
})
`,
        hints: [
          'res.json({ products }) 返回商品列表',
          'req.params.id 获取路径参数',
          'res.json(product) 返回单个商品'
        ],
        code: `const express = require('express')
const app = express()

const products = [
  { id: 1, name: '手机', price: 2999 },
  { id: 2, name: '电脑', price: 5999 }
]

app.get('/api/products', (req, res) => {
  res.json({ products })
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id))
  if (!product) return res.status(404).json({ error: '未找到' })
  res.json(product)
})

app.post('/api/products', (req, res) => {
  res.status(201).json({ message: '创建成功', product: req.body })
})

app.listen(3000, () => {
  console.log('API server running on http://localhost:3000')
})`,
        verification: '使用 Express 创建了 GET/POST 路由，返回 JSON 数据',
        filePath: 'src/server.js',
        cognitiveLoad: 'low',
        dependsOn: ['node-4'],
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
          'title': '导入 Express',
          'verification': 'require(\'express\')',
          'hint': '导入 express 并创建应用实例',
          docLinks: [{title: 'Node.js 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/modules.html'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-2',
          'title': '定义路由',
          'verification': 'app.get(',
          'hint': '定义 GET/POST/PUT/DELETE 路由',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-3',
          'title': '启动服务',
          'verification': 'app.listen',
          'hint': '监听端口启动 Express 服务',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
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
        ]
      },
      {
        id: 'node-6',
        number: 6,
        title: '中间件概念',
        concept: 'Middleware',
        difficulty: 'medium',
        task: '编写日志中间件记录每个请求的方法和路径',
        prerequisites: `<h4>🟢 中间件</h4>
<pre><code>// 中间件函数签名
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()  // 必须调用 next() 传递给下一个中间件
})

// 路由级中间件
app.use('/api', loggerMiddleware)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>next()</code> — 调用下一个中间件</li>
  <li><code>app.use()</code> — 注册全局中间件</li>
  <li>中间件按注册顺序执行</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解中间件执行链
每个请求经过中间件链，next() 传递到下一个。

步骤 2 — 编写日志中间件
记录请求方法、URL 和时间戳。

步骤 3 — 注册中间件
app.use() 注册全局中间件。`,
        contextCode: `// 中间件参考
// 全局中间件
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} \${req.method} \${req.url}\`)
  next()
})

// 日志中间件
function logger(req, res, next) {
  const start = Date.now()
  res.on('finish', () => {
    const duration = Date.now() - start
    console.log(\`\${req.method} \${req.url} \${res.statusCode} \${duration}ms\`)
  })
  next()
}
app.use(logger)

// CORS 中间件
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})`,
        starterCode: `const express = require('express')
const app = express()

// 编写日志中间件
// 记录格式：[时间] METHOD /path
function logger(req, res, next) {
  // 在这里记录请求信息
  ???
  // 调用 next 传递给下一个中间件
  ???
}

// 注册中间件
app.use(???)

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello' })
})

app.listen(3000)
`,
        hints: [
          'console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)',
          'next() 传递给下一个中间件',
          'app.use(logger) 注册中间件'
        ],
        code: `const express = require('express')
const app = express()

function logger(req, res, next) {
  const timestamp = new Date().toISOString()
  console.log(\`[\${timestamp}] \${req.method} \${req.url}\`)
  next()
}

app.use(logger)

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello' })
})

app.listen(3000)`,
        verification: '编写了日志中间件，使用 next() 传递请求',
        filePath: 'src/server.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-5'],
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
          'title': '创建中间件',
          'verification': 'app.use(',
          'hint': '用 app.use 注册中间件函数',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-2',
          'title': '记录日志',
          'verification': 'req.method',
          'hint': '在中间件中记录请求方法和路径',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-3',
          'title': '调用 next',
          'verification': 'next()',
          'hint': '调用 next() 将控制权传到下一步',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
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
        ]
      },
      {
        id: 'node-7',
        number: 7,
        title: '请求体解析',
        concept: 'express.json()',
        difficulty: 'medium',
        task: '解析 JSON 请求体并处理 POST 请求',
        prerequisites: `<h4>🟢 请求体解析</h4>
<pre><code>// 解析 JSON
app.use(express.json())

// 解析 URL 编码
app.use(express.urlencoded({ extended: true }))

// 使用请求体
app.post('/api/users', (req, res) => {
  const { name, email } = req.body
  res.json({ name, email })
})
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>express.json()</code> — 解析 JSON body</li>
  <li><code>req.body</code> — 获取解析后的数据</li>
  <li>必须在路由前注册解析中间件</li>
</ul>`,
        conceptDetail: `步骤 1 — 注册 body 解析中间件
app.use(express.json()) 在路由前注册。

步骤 2 — 从 req.body 获取数据
POST/PUT 请求的 JSON 数据在 req.body 中。

步骤 3 — 验证和处理数据
检查必填字段，返回适当的响应。`,
        contextCode: `// Body 解析参考
const express = require('express')
const app = express()

// 注册解析中间件（必须在路由前）
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// POST 创建用户
app.post('/api/users', (req, res) => {
  const { name, email, password } = req.body

  // 验证必填字段
  if (!name || !email) {
    return res.status(400).json({ error: '缺少必填字段' })
  }

  // 处理数据...
  res.status(201).json({ id: 1, name, email })
})

// PUT 更新
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params
  const updates = req.body
  res.json({ id, ...updates })
})`,
        starterCode: `const express = require('express')
const app = express()

// 注册 JSON 解析中间件
app.use(???)

// 用户数组
const users = []

// POST /api/register - 用户注册
app.post('/api/register', (req, res) => {
  // 从请求体获取用户信息
  const { username, email, password } = ???

  // 验证必填字段
  if (!username || !email) {
    return res.status(400).json({ error: '??? 缺少必填字段' })
  }

  // 创建用户并保存
  const user = { id: users.length + 1, username, email }
  users.push(user)

  // 返回创建结果
  res.status(201).json({ message: '注册成功', user: ??? })
})

app.listen(3000)
`,
        hints: [
          'app.use(express.json()) 注册解析中间件',
          'req.body 获取请求体数据',
          'res.status(201).json() 返回创建结果'
        ],
        code: `const express = require('express')
const app = express()

app.use(express.json())

const users = []

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email) {
    return res.status(400).json({ error: '缺少必填字段' })
  }

  const user = { id: users.length + 1, username, email }
  users.push(user)

  res.status(201).json({ message: '注册成功', user })
})

app.listen(3000)`,
        verification: '使用 express.json() 解析请求体，从 req.body 获取数据',
        filePath: 'src/server.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-6'],
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
          'title': '配置解析器',
          'verification': 'express.json()',
          'hint': '用 express.json() 解析 JSON 请求体',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-2',
          'title': '处理 POST',
          'verification': 'req.body',
          'hint': '从 req.body 获取请求参数',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-3',
          'title': '验证数据',
          'verification': 'if (!username',
          'hint': '验证请求体数据的完整性',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         }
        ],
        variations: [
         {
          'name': '中间件',
          'description': 'app.use() 注册全局中间件按序执行'
         }
        ],
        transferTasks: [
         {
          'task': '创建 RESTful API 实现 CRUD',
          'target': '掌握后端 API 开发'
         }
        ]
      },
      {
        id: 'node-8',
        number: 8,
        title: '错误处理',
        concept: '错误中间件',
        difficulty: 'medium',
        task: '实现统一的错误处理中间件',
        prerequisites: `<h4>🟢 错误处理</h4>
<pre><code>// 错误处理中间件（4个参数）
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: '服务器错误' })
})

// 手动触发错误
next(new Error('参数错误'))
</code></pre>

<h4>🔑 错误处理方式</h4>
<ul>
  <li>4个参数的中间件自动捕获错误</li>
  <li><code>next(err)</code> — 传递错误</li>
  <li>Express 自动跳过正常中间件</li>
</ul>`,
        conceptDetail: `步骤 1 — 编写错误处理中间件
4个参数 (err, req, res, next) 标识错误处理中间件。

步骤 2 — 在路由中使用 next(err)
遇到错误时调用 next(err) 传递给错误处理中间件。

步骤 3 — 返回统一错误格式
包含状态码、错误信息和请求路径。`,
        contextCode: `// 错误处理参考
const express = require('express')
const app = express()
app.use(express.json())

// 业务路由
app.get('/api/users/:id', (req, res, next) => {
  try {
    const user = findUser(req.params.id)
    if (!user) {
      return next(new Error('用户不存在'))
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// 错误处理中间件（必须在所有路由后）
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({
    error: err.message,
    path: req.url,
    timestamp: new Date().toISOString()
  })
})`,
        starterCode: `const express = require('express')
const app = express()
app.use(express.json())

// 模拟数据库
const users = { 1: { id: 1, name: 'Alice' } }

// 获取用户
app.get('/api/users/:id', (req, res, next) => {
  const user = users[req.params.id]
  if (!user) {
    // 传递错误给错误处理中间件
    const err = new Error('用户不存在')
    err.status = 404
    return ???
  }
  res.json(user)
})

// 错误处理中间件（4个参数）
app.use((???, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({
    error: err.message,
    path: req.url,
    timestamp: new Date().toISOString()
  })
})

app.listen(3000)
`,
        hints: [
          'next(err) 传递错误',
          '错误处理中间件参数为 (err, req, res, next)',
          'err.status || 500 获取状态码'
        ],
        code: `const express = require('express')
const app = express()
app.use(express.json())

const users = { 1: { id: 1, name: 'Alice' } }

app.get('/api/users/:id', (req, res, next) => {
  const user = users[req.params.id]
  if (!user) {
    const err = new Error('用户不存在')
    err.status = 404
    return next(err)
  }
  res.json(user)
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({
    error: err.message,
    path: req.url,
    timestamp: new Date().toISOString()
  })
})

app.listen(3000)`,
        verification: '实现了错误处理中间件，使用 next(err) 传递错误',
        filePath: 'src/server.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-7'],
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
          'title': '自定义错误类',
          'verification': 'new Error',
          'hint': '创建带状态码的错误类',
          docLinks: [{title: 'Express 错误处理', url: 'https://expressjs.com/zh-cn/guide/error-handling.html'}]
         },
         {
          'id': 'step-2',
          'title': '错误中间件',
          'verification': 'err.status',
          'hint': '定义 4 参数错误处理中间件',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}, {title: 'Express 错误处理', url: 'https://expressjs.com/zh-cn/guide/error-handling.html'}]
         },
         {
          'id': 'step-3',
          'title': '统一响应',
          'verification': 'res.status(status)',
          'hint': '返回统一的错误响应格式',
          docLinks: [{title: 'Express 错误处理', url: 'https://expressjs.com/zh-cn/guide/error-handling.html'}]
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
        ]
      }
    ]
  },
  {
    id: 'database-auth',
    name: '阶段三：数据库与认证',
    description: '掌握 MongoDB 操作和 JWT 认证机制',
    levels: [
      {
        id: 'node-9',
        number: 9,
        title: 'MongoDB/Mongoose 基础',
        concept: 'Schema 定义',
        difficulty: 'medium',
        task: '定义用户和消息的 Mongoose Schema',
        prerequisites: `<h4>🟢 Mongoose</h4>
<pre><code>const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>Schema</code> — 定义数据结构</li>
  <li><code>model</code> — 创建可操作的模型</li>
  <li>连接：<code>mongoose.connect(uri)</code></li>
</ul>`,
        conceptDetail: `步骤 1 — 连接 MongoDB
mongoose.connect 连接数据库。

步骤 2 — 定义 Schema
Schema 定义字段类型和约束。

步骤 3 — 创建 Model
mongoose.model 创建可操作的数据模型。`,
        contextCode: `// Mongoose 基础参考
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost:27017/chat')

// 用户 Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
})

// 消息 Schema
const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: { type: String, default: 'general' },
  timestamp: { type: Date, default: Date.now }
})

// 创建 Model
const User = mongoose.model('User', userSchema)
const Message = mongoose.model('Message', messageSchema)`,
        starterCode: `const mongoose = require('mongoose')

// 连接 MongoDB
mongoose.connect('mongodb://localhost:27017/chat')

// 定义用户 Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, ??? },
  email: { type: String, required: true, ??? },
  password: { type: String, required: true },
  createdAt: { type: ???, default: Date.now }
})

// 定义消息 Schema
const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: '???' },
  room: { type: String, default: 'general' },
  timestamp: { type: ???, default: Date.now }
})

// 创建 Model
const User = mongoose.model('???', userSchema)
const Message = mongoose.model('???', messageSchema)

module.exports = { User, Message }
`,
        hints: [
          'unique: true 唯一约束',
          'mongoose.Schema.Types.ObjectId 关联用户',
          'mongoose.model("User", userSchema) 创建模型'
        ],
        code: `const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/chat')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: { type: String, default: 'general' },
  timestamp: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)
const Message = mongoose.model('Message', messageSchema)

module.exports = { User, Message }`,
        verification: '定义了 Mongoose Schema 和 Model',
        filePath: 'src/models/User.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-8'],
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
          'title': '定义 Schema',
          'verification': 'new mongoose.Schema',
          'hint': '用 Mongoose Schema 定义数据结构',
          docLinks: [{title: 'Mongoose 文档', url: 'https://mongoosejs.com/docs/'}]
         },
         {
          'id': 'step-2',
          'title': '创建模型',
          'verification': 'mongoose.model',
          'hint': '用 mongoose.model 注册模型',
          docLinks: [{title: 'Mongoose 文档', url: 'https://mongoosejs.com/docs/'}]
         },
         {
          'id': 'step-3',
          'title': '连接数据库',
          'verification': 'mongoose.connect',
          'hint': '连接 MongoDB 数据库',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
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
        ]
      },
      {
        id: 'node-10',
        number: 10,
        title: 'CRUD 操作',
        concept: '数据库操作',
        difficulty: 'medium',
        task: '实现用户的增删改查 API',
        prerequisites: `<h4>🟢 Mongoose CRUD</h4>
<pre><code>// 创建
const user = await User.create({ name: 'Alice' })

// 读取
const users = await User.find()
const user = await User.findById(id)

// 更新
await User.findByIdAndUpdate(id, { name: 'Bob' })

// 删除
await User.findByIdAndDelete(id)
</code></pre>

<h4>🔑 async/await</h4>
<ul>
  <li>所有数据库操作返回 Promise</li>
  <li>使用 async/await 简化异步代码</li>
  <li>用 try-catch 捕获错误</li>
</ul>`,
        conceptDetail: `步骤 1 — 实现创建接口
User.create() 创建新用户并保存到数据库。

步骤 2 — 实现查询接口
User.find() 查询列表，findById 查询单个。

步骤 3 — 实现更新和删除
findByIdAndUpdate 更新，findByIdAndDelete 删除。`,
        contextCode: `// CRUD 路由参考
const express = require('express')
const router = express.Router()
const User = require('../models/User')

// 创建用户
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
})

// 获取所有用户
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// 获取单个用户
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: '未找到' })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// 更新用户
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// 删除用户
router.delete('/:id', async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: '删除成功' })
  } catch (err) {
    next(err)
  }
})`,
        starterCode: `const express = require('express')
const router = express.Router()
const User = require('../models/User')

// POST / - 创建用户
router.post('/', async (req, res, next) => {
  try {
    // 使用 User.create() 创建用户
    const user = await ???
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
})

// GET / - 获取所有用户
router.get('/', async (req, res, next) => {
  try {
    const users = await ???
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /:id - 获取单个用户
router.get('/:id', async (req, res, next) => {
  try {
    const user = await ???
    if (!user) return res.status(404).json({ error: '未找到' })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// PUT /:id - 更新用户
router.put('/:id', async (req, res, next) => {
  try {
    const user = await ???
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// DELETE /:id - 删除用户
router.delete('/:id', async (req, res, next) => {
  try {
    await ???
    res.json({ message: '删除成功' })
  } catch (err) {
    next(err)
  }
})

module.exports = router
`,
        hints: [
          'User.create(req.body) 创建用户',
          'User.find() 查询所有用户',
          'User.findById(req.params.id) 查询单个',
          'User.findByIdAndUpdate(id, body, { new: true }) 更新',
          'User.findByIdAndDelete(id) 删除'
        ],
        code: `const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: '未找到' })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: '删除成功' })
  } catch (err) {
    next(err)
  }
})

module.exports = router`,
        verification: '实现了 CRUD 操作，使用 async/await 处理异步',
        filePath: 'src/routes/users.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-9'],
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
          'title': '创建用户',
          'verification': 'User.create',
          'hint': '用 create 方法添加用户',
          docLinks: [{title: 'Mongoose 文档', url: 'https://mongoosejs.com/docs/'}]
         },
         {
          'id': 'step-2',
          'title': '查询用户列表',
          'verification': 'User.find',
          'hint': '用 find 查询所有用户',
          docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-3',
          'title': '更新和删除',
          'verification': 'User.findByIdAndUpdate',
          'hint': '实现用户信息修改和删除',
          docLinks: [{title: 'Mongoose 文档', url: 'https://mongoosejs.com/docs/'}]
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
        ]
      },
      {
        id: 'node-11',
        number: 11,
        title: 'JWT 认证',
        concept: 'JSON Web Token',
        difficulty: 'hard',
        task: '实现用户登录和 JWT Token 生成验证',
        prerequisites: `<h4>🟢 JWT 认证</h4>
<pre><code>const jwt = require('jsonwebtoken')
const SECRET = 'your-secret-key'

// 生成 Token
const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '7d' })

// 验证 Token
const decoded = jwt.verify(token, SECRET)
</code></pre>

<h4>🔑 认证流程</h4>
<ul>
  <li>用户登录 → 验证密码 → 生成 JWT</li>
  <li>请求携带 Token → 中间件验证 → 放行或拒绝</li>
  <li>Token 存储在 <code>Authorization: Bearer &lt;token&gt;</code></li>
</ul>`,
        conceptDetail: `步骤 1 — 登录接口
验证用户名密码，成功后生成 JWT Token。

步骤 2 — 认证中间件
解析 Authorization 头，验证 Token 有效性。

步骤 3 — 保护路由
将认证中间件应用到需要登录的路由。`,
        contextCode: `// JWT 认证参考
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET || 'secret-key'

// 登录接口
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (!user || user.password !== password) {
    return res.status(401).json({ error: '用户名或密码错误' })
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    SECRET,
    { expiresIn: '7d' }
  )

  res.json({ token, user: { id: user._id, username: user.username } })
})

// 认证中间件
function auth(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: '未提供 Token' })
  }

  const token = authHeader.replace('Bearer ', '')
  try {
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ error: 'Token 无效或已过期' })
  }
}

// 保护路由
app.get('/api/profile', auth, (req, res) => {
  res.json({ userId: req.user.userId })
})`,
        starterCode: `const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET || 'secret-key'

// 登录接口
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (!user || user.password !== password) {
    return res.status(401).json({ error: '用户名或密码错误' })
  }

  // 生成 JWT Token
  const token = jwt.sign(
    { ??? },
    SECRET,
    { ??? }
  )

  res.json({ token })
})

// 认证中间件
function auth(req, res, next) {
  const authHeader = req.headers.???
  if (!authHeader) {
    return res.status(401).json({ error: '未提供 Token' })
  }

  const token = authHeader.replace('Bearer ', '')
  try {
    const decoded = jwt.???(token, SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ error: 'Token 无效' })
  }
}

// 保护路由示例
app.get('/api/profile', auth, (req, res) => {
  res.json({ userId: req.user.userId })
})
`,
        hints: [
          'jwt.sign({ userId: user._id }, SECRET, { expiresIn: "7d" })',
          'req.headers.authorization 获取 Token',
          'jwt.verify(token, SECRET) 验证 Token'
        ],
        code: `const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET || 'secret-key'

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (!user || user.password !== password) {
    return res.status(401).json({ error: '用户名或密码错误' })
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    SECRET,
    { expiresIn: '7d' }
  )

  res.json({ token })
})

function auth(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: '未提供 Token' })
  }

  const token = authHeader.replace('Bearer ', '')
  try {
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ error: 'Token 无效' })
  }
}

app.get('/api/profile', auth, (req, res) => {
  res.json({ userId: req.user.userId })
})`,
        verification: '实现了 JWT 签发和验证，包含认证中间件',
        filePath: 'src/middleware/auth.js',
        cognitiveLoad: 'high',
        dependsOn: ['node-10'],
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
          'title': '签名 Token',
          'verification': 'jwt.sign',
          'hint': '用 jwt.sign 签名生成 Token',
          docLinks: [{title: 'JWT 教程', url: 'https://jwt.io/introduction'}]
         },
         {
          'id': 'step-2',
          'title': '验证 Token',
          'verification': 'jwt.verify',
          'hint': '用 jwt.verify 验证 Token 有效性',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}, {title: 'JWT 教程', url: 'https://jwt.io/introduction'}]
         },
         {
          'id': 'step-3',
          'title': '登录端点',
          'verification': '!user || user.password',
          'hint': '验证密码后返回 JWT Token',
          docLinks: [{title: 'JWT 教程', url: 'https://jwt.io/introduction'}]
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
        ]
      },
      {
        id: 'node-12',
        number: 12,
        title: '权限控制',
        concept: 'RBAC',
        difficulty: 'hard',
        task: '实现基于角色的访问控制',
        prerequisites: `<h4>🟢 权限控制</h4>
<pre><code>// 角色检查中间件
function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: '权限不足' })
    }
    next()
  }
}

// 使用：只有管理员可访问
app.delete('/api/users/:id', auth, authorize('admin'), deleteUser)
</code></pre>

<h4>🔑 RBAC 概念</h4>
<ul>
  <li>不同角色拥有不同权限</li>
  <li>中间件链：认证 → 授权 → 业务逻辑</li>
  <li>403 表示权限不足（不同于 401 未认证）</li>
</ul>`,
        conceptDetail: `步骤 1 — 在用户模型中添加角色字段
role 字段存储用户角色（user、admin、moderator）。

步骤 2 — 编写角色检查中间件
authorize 函数接收允许的角色列表。

步骤 3 — 应用到需要权限的路由
auth → authorize('admin') 链式调用。`,
        contextCode: `// 权限控制参考
// 在 User Schema 中添加 role
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' }
})

// 角色检查中间件
function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: '未认证' })
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: '权限不足' })
    }
    next()
  }
}

// 使用：链式调用
// 所有用户可访问
app.get('/api/posts', getPosts)

// 登录用户可访问
app.post('/api/posts', auth, createPost)

// 仅版主可访问
app.delete('/api/posts/:id', auth, authorize('admin', 'moderator'), deletePost)

// 仅管理员可访问
app.get('/api/admin/users', auth, authorize('admin'), listAllUsers)`,
        starterCode: `// 权限控制中间件
function authorize(...roles) {
  return (req, res, next) => {
    // 检查用户是否已认证
    if (!req.user) {
      return res.status(401).json({ error: '未认证' })
    }
    // 检查用户角色是否在允许列表中
    if (???) {
      return res.status(403).json({ error: '权限不足' })
    }
    next()
  }
}

// 使用示例
// 所有用户可查看
app.get('/api/posts', getPosts)

// 登录用户可创建
app.post('/api/posts', auth, createPost)

// 管理员可删除
app.delete('/api/posts/:id', auth, authorize(???), deletePost)

// 管理员和版主可审核
app.put('/api/posts/:id/review', auth, authorize(???), reviewPost)
`,
        hints: [
          '!roles.includes(req.user.role) 检查角色',
          'authorize("admin") 仅管理员',
          'authorize("admin", "moderator") 多角色'
        ],
        code: `function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: '未认证' })
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: '权限不足' })
    }
    next()
  }
}

app.get('/api/posts', getPosts)
app.post('/api/posts', auth, createPost)
app.delete('/api/posts/:id', auth, authorize('admin'), deletePost)
app.put('/api/posts/:id/review', auth, authorize('admin', 'moderator'), reviewPost)`,
        verification: '实现了 authorize 中间件，基于角色控制访问权限',
        filePath: 'src/middleware/authorize.js',
        cognitiveLoad: 'high',
        dependsOn: ['node-11'],
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
          'title': '角色中间件',
          'verification': 'req.user.role',
          'hint': '检查用户角色字段',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-2',
          'title': '权限校验',
          'verification': 'if (!req.user',
          'hint': '在中间件中判断角色权限',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
         },
         {
          'id': 'step-3',
          'title': '白名单路由',
          'verification': 'authorize',
          'hint': '为管理路由添加角色限制',
          docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
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
        ]
      }
    ]
  },
  {
    id: 'realtime',
    name: '阶段四：实时通信',
    description: '使用 WebSocket 和 Socket.io 构建实时聊天室',
    levels: [
      {
        id: 'node-13',
        number: 13,
        title: 'WebSocket 基础',
        concept: 'ws 模块',
        difficulty: 'medium',
        task: '用原生 WebSocket 实现简单的消息广播',
        prerequisites: `<h4>🟢 WebSocket</h4>
<pre><code>const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    // 广播给所有客户端
    wss.clients.forEach(client => {
      client.send(data.toString())
    })
  })
})
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><b>WebSocket</b> — 全双工通信协议</li>
  <li><code>ws.on('message')</code> — 接收消息</li>
  <li><code>ws.send()</code> — 发送消息</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 WebSocket 服务器
ws 模块创建 WebSocket 服务器。

步骤 2 — 处理连接事件
connection 事件在客户端连接时触发。

步骤 3 — 广播消息
遍历 wss.clients 将消息发送给所有连接的客户端。`,
        contextCode: `// WebSocket 基础参考
const http = require('http')
const WebSocket = require('ws')

const server = http.createServer()
const wss = new WebSocket.Server({ server })

// 存储在线用户
const clients = new Set()

wss.on('connection', (ws) => {
  clients.add(ws)
  console.log(\`新用户连接，当前 \${clients.size} 人在线\`)

  // 接收消息
  ws.on('message', (data) => {
    const message = data.toString()
    // 广播给所有客户端
    for (const client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    }
  })

  // 断开连接
  ws.on('close', () => {
    clients.delete(ws)
    console.log(\`用户断开，当前 \${clients.size} 人在线\`)
  })
})

server.listen(8080, () => {
  console.log('WebSocket server on ws://localhost:8080')
})`,
        starterCode: `const http = require('http')
const WebSocket = require('ws')

const server = http.createServer()
const wss = new WebSocket.Server({ server })

// 存储在线用户
const clients = new ???

wss.on('connection', (ws) => {
  clients.add(ws)

  // 接收消息并广播
  ws.on('message', (data) => {
    const message = data.toString()
    // 遍历所有客户端发送消息
    for (const client of clients) {
      if (client.readyState === WebSocket.???) {
        client.send(???)
      }
    }
  })

  // 断开连接时移除
  ws.on('close', () => {
    clients.???(ws)
  })
})

server.listen(8080)
`,
        hints: [
          'new Set() 存储客户端',
          'WebSocket.OPEN 检查连接状态',
          'clients.delete(ws) 移除断开的连接'
        ],
        code: `const http = require('http')
const WebSocket = require('ws')

const server = http.createServer()
const wss = new WebSocket.Server({ server })

const clients = new Set()

wss.on('connection', (ws) => {
  clients.add(ws)

  ws.on('message', (data) => {
    const message = data.toString()
    for (const client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    }
  })

  ws.on('close', () => {
    clients.delete(ws)
  })
})

server.listen(8080)`,
        verification: '使用 ws 模块实现了 WebSocket 服务器和消息广播',
        filePath: 'src/ws-server.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-12'],
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
          'title': '创建 WS 服务器',
          'verification': 'require(\'ws\')',
          'hint': '导入 ws 库创建 WebSocket 服务',
          docLinks: [{title: 'Node.js http 模块', url: 'https://nodejs.org/zh-cn/docs/latest/api/http.html'}, {title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
         },
         {
          'id': 'step-2',
          'title': '监听连接',
          'verification': 'connection',
          'hint': '监听 connection 事件处理新连接',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
         },
         {
          'id': 'step-3',
          'title': '广播消息',
          'verification': 'for (const client',
          'hint': '遍历所有客户端广播消息',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
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
        ]
      },
      {
        id: 'node-14',
        number: 14,
        title: 'Socket.io',
        concept: '房间与事件',
        difficulty: 'medium',
        task: '用 Socket.io 实现多房间聊天',
        prerequisites: `<h4>🟢 Socket.io</h4>
<pre><code>// 服务端
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  socket.on('join-room', (room) => {
    socket.join(room)
  })
  socket.on('chat-message', (data) => {
    io.to(data.room).emit('chat-message', data)
  })
})
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>socket.join(room)</code> — 加入房间</li>
  <li><code>io.to(room).emit()</code> — 向房间广播</li>
  <li><code>socket.on()</code> — 监听事件</li>
</ul>`,
        conceptDetail: `步骤 1 — 初始化 Socket.io
socket.io 绑定 HTTP 服务器。

步骤 2 — 处理加入房间
socket.join() 将客户端加入指定房间。

步骤 3 — 房间消息广播
io.to(room).emit() 只向指定房间发送消息。`,
        contextCode: `// Socket.io 参考
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// 在线用户追踪
const onlineUsers = new Map()

io.on('connection', (socket) => {
  console.log('新用户连接:', socket.id)

  // 加入房间
  socket.on('join-room', ({ room, username }) => {
    socket.join(room)
    onlineUsers.set(socket.id, { username, room })
    // 通知房间内用户
    io.to(room).emit('user-joined', {
      username,
      onlineCount: io.sockets.adapter.rooms.get(room)?.size || 0
    })
  })

  // 接收聊天消息
  socket.on('chat-message', ({ room, message, username }) => {
    io.to(room).emit('chat-message', {
      message,
      username,
      timestamp: new Date().toISOString()
    })
  })

  // 断开连接
  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id)
    if (user) {
      onlineUsers.delete(socket.id)
      io.to(user.room).emit('user-left', { username: user.username })
    }
  })
})

server.listen(3000)`,
        starterCode: `const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new ???

// 在线用户追踪
const onlineUsers = new Map()

io.on('connection', (socket) => {
  // 加入房间
  socket.on('join-room', ({ room, username }) => {
    socket.???(room)
    onlineUsers.set(socket.id, { username, room })
    // 通知房间内所有用户
    io.to(room).emit('user-joined', { username })
  })

  // 接收聊天消息
  socket.on('chat-message', ({ room, message, username }) => {
    // 向房间内广播
    io.to(room).emit(???)
  })

  // 断开连接
  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id)
    if (user) {
      onlineUsers.delete(socket.id)
      io.to(user.room).emit(???)
    }
  })
})

server.listen(3000)
`,
        hints: [
          'new Server(server) 创建 Socket.io 服务器',
          'socket.join(room) 加入房间',
          'io.to(room).emit("chat-message", data) 广播消息',
          'io.to(user.room).emit("user-left", { username }) 通知离开'
        ],
        code: `const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const onlineUsers = new Map()

io.on('connection', (socket) => {
  socket.on('join-room', ({ room, username }) => {
    socket.join(room)
    onlineUsers.set(socket.id, { username, room })
    io.to(room).emit('user-joined', { username })
  })

  socket.on('chat-message', ({ room, message, username }) => {
    io.to(room).emit('chat-message', {
      message,
      username,
      timestamp: new Date().toISOString()
    })
  })

  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id)
    if (user) {
      onlineUsers.delete(socket.id)
      io.to(user.room).emit('user-left', { username: user.username })
    }
  })
})

server.listen(3000)`,
        verification: '使用 Socket.io 实现了房间加入和消息广播',
        filePath: 'src/socket-server.js',
        cognitiveLoad: 'medium',
        dependsOn: ['node-13'],
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
          'title': '创建 io 实例',
          'verification': 'new Server(server)',
          'hint': '创建 Socket.io 服务器实例',
          docLinks: [{title: 'Socket.io 文档', url: 'https://socket.io/zh-CN/docs/'}]
         },
         {
          'id': 'step-2',
          'title': '房间管理',
          'verification': 'socket.join',
          'hint': '用 join 方法加入聊天房间',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
         },
         {
          'id': 'step-3',
          'title': '房间广播',
          'verification': 'io.to(room)',
          'hint': '向指定房间广播消息',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
         }
        ],
        variations: [
         {
          'name': 'v-on:',
          'description': '@click 是 v-on:click 的简写，完全等价'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'node-15',
        number: 15,
        title: '实战 - 聊天室后端',
        concept: '完整整合',
        difficulty: 'hard',
        task: '整合 Express + JWT + Socket.io 构建完整聊天室后端',
        prerequisites: `<h4>🟢 完整架构</h4>
<pre><code>Express + JWT 认证 + Socket.io 实时通信
├── 路由：登录、注册、历史消息
├── 认证：JWT Token 验证
├── WebSocket：实时消息收发
└── 数据库：MongoDB 持久化
</code></pre>

<h4>🔑 整合要点</h4>
<ul>
  <li>Socket.io 中间件验证 JWT</li>
  <li>消息存入数据库</li>
  <li>查询历史消息 API</li>
</ul>`,
        conceptDetail: `步骤 1 — Express 路由层
登录、注册、获取历史消息等 REST API。

步骤 2 — Socket.io 认证中间件
在连接时验证 JWT Token，拒绝未认证用户。

步骤 3 — 消息持久化
每条消息存入 MongoDB，支持历史查询。`,
        contextCode: `// 完整聊天室后端参考
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const jwt = require('jsonwebtoken')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: '*' }
})
const SECRET = 'chat-secret'

// REST API
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  // 验证用户...
  const token = jwt.sign({ userId: user._id, username }, SECRET)
  res.json({ token })
})

app.get('/api/messages/:room', auth, async (req, res) => {
  const messages = await Message.find({ room: req.params.room })
    .sort({ timestamp: -1 }).limit(50)
  res.json(messages)
})

// Socket.io 认证中间件
io.use((socket, next) => {
  const token = socket.handshake.auth.token
  try {
    const decoded = jwt.verify(token, SECRET)
    socket.user = decoded
    next()
  } catch (err) {
    next(new Error('认证失败'))
  }
})

// Socket.io 事件处理
io.on('connection', (socket) => {
  console.log(\`\${socket.user.username} 已连接\`)

  socket.on('join-room', (room) => {
    socket.join(room)
    io.to(room).emit('user-joined', socket.user.username)
  })

  socket.on('chat-message', async ({ room, message }) => {
    // 存入数据库
    await Message.create({
      content: message,
      sender: socket.user.userId,
      room
    })
    // 广播
    io.to(room).emit('chat-message', {
      message,
      username: socket.user.username,
      timestamp: new Date()
    })
  })
})

server.listen(3000)`,
        starterCode: `// 完整聊天室后端 - 整合所有模块
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const jwt = require('jsonwebtoken')

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*' } })
const SECRET = 'chat-secret'

app.use(express.json())

// ===== REST API =====

// 登录
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) return res.status(401).json({ error: '用户不存在' })

  const token = jwt.sign(
    { ??? },
    SECRET,
    { expiresIn: '7d' }
  )
  res.json({ token })
})

// 获取历史消息
app.get('/api/messages/:room', auth, async (req, res) => {
  const messages = await Message.find({ room: req.params.room })
    .sort(???).limit(50)
  res.json(messages)
})

// ===== Socket.io 认证 =====
io.use((socket, next) => {
  const token = socket.handshake.auth.???
  try {
    socket.user = jwt.verify(token, SECRET)
    next()
  } catch (err) {
    next(new Error('认证失败'))
  }
})

// ===== Socket.io 事件 =====
io.on('connection', (socket) => {
  console.log(\`\${socket.user.username} 已连接\`)

  socket.on('join-room', (room) => {
    socket.???(room)
  })

  socket.on('chat-message', async ({ room, message }) => {
    // 持久化消息
    await ???
    // 广播
    io.to(room).emit('chat-message', {
      message,
      username: socket.user.username,
      timestamp: ???
    })
  })
})

server.listen(3000)
`,
        hints: [
          '{ userId: user._id, username } 作为 JWT payload',
          '.sort({ timestamp: -1 }) 按时间倒序',
          'socket.handshake.auth.token 获取 Token',
          'socket.join(room) 加入房间'
        ],
        code: `const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const jwt = require('jsonwebtoken')

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*' } })
const SECRET = 'chat-secret'

app.use(express.json())

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) return res.status(401).json({ error: '用户不存在' })

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    SECRET,
    { expiresIn: '7d' }
  )
  res.json({ token })
})

app.get('/api/messages/:room', auth, async (req, res) => {
  const messages = await Message.find({ room: req.params.room })
    .sort({ timestamp: -1 }).limit(50)
  res.json(messages)
})

io.use((socket, next) => {
  const token = socket.handshake.auth.token
  try {
    socket.user = jwt.verify(token, SECRET)
    next()
  } catch (err) {
    next(new Error('认证失败'))
  }
})

io.on('connection', (socket) => {
  console.log(\`\${socket.user.username} 已连接\`)

  socket.on('join-room', (room) => {
    socket.join(room)
  })

  socket.on('chat-message', async ({ room, message }) => {
    await Message.create({
      content: message,
      sender: socket.user.userId,
      room
    })
    io.to(room).emit('chat-message', {
      message,
      username: socket.user.username,
      timestamp: new Date()
    })
  })
})

server.listen(3000)`,
        verification: '整合了 Express REST API、JWT 认证和 Socket.io 实时通信',
        filePath: 'src/chat-server.js',
        cognitiveLoad: 'high',
        dependsOn: ['node-14'],
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
          'title': '整合 HTTP 和 WS',
          'verification': 'http.createServer',
          'hint': '创建 HTTP 服务器同时提供 HTTP 和 WebSocket',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
         },
         {
          'id': 'step-2',
          'title': 'WebSocket 鉴权',
          'verification': 'io.use(',
          'hint': '在 WebSocket 连接中验证 JWT Token',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}, {title: 'Socket.io 文档', url: 'https://socket.io/zh-CN/docs/'}]
         },
         {
          'id': 'step-3',
          'title': '消息存储广播',
          'verification': 'socket.on(\'chat-message\'',
          'hint': '接收客户端消息并持久化广播',
          docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
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
        ]
      }
    ]
  }
,
{
    id: 'chat-server',
    name: '阶段五：聊天室后端实战',
    description: '综合运用 Node.js + Express 技能，构建实时聊天室后端服务',
    levels: [
            {
              id: 'node-16',
              number: 16,
              type: 'project',
              project: 'chat-app',
              projectModule: '项目搭建',
              title: '后端项目初始化',
              concept: 'Express 项目结构',
              difficulty: 'easy',
              task: '搭建聊天室后端项目：Express + WebSocket 双服务，配置中间件和路由结构',
              prerequisites: '<h4>📚 Express 项目结构</h4><p>Express 项目按功能分包：routes/（路由）、middleware/（中间件）、models/（数据模型）、services/（业务逻辑）。</p>',
              conceptDetail: 'Express 使用 express() 创建应用。http.createServer 创建 HTTP 服务器。ws 是 Node.js 的 WebSocket 库。',
              contextCode: '',
              hints: [
                'npm init -y && npm install express ws cors',
                'app.use(express.json()) 解析 JSON 请求体',
                'http.createServer(app) 创建通用 HTTP 服务'
              ],
              code: 'const express = require(\'express\')\nconst http = require(\'http\')\nconst { WebSocketServer } = require(\'ws\')\nconst cors = require(\'cors\')\n\nconst app = express()\napp.use(cors())\napp.use(express.json())\n\nconst server = http.createServer(app)\nconst wss = new WebSocketServer({ server })\n\nconst PORT = process.env.PORT || 3000\nserver.listen(PORT, () => {\n  console.log(\'Server running on port \' + PORT)\n})',
              verification: 'Express 应用集成 cors/express.json/WebSocketServer',
              filePath: 'src/index.js',
              projectFiles: {
                'src/index.js': '',
                'src/routes/index.js': '',
                'src/middleware/auth.js': ''
              },
              cognitiveLoad: 'low',
              dependsOn: ['node-15'],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '创建 Express 应用',
                  'verification': 'require(\'express\')',
                  'hint': '创建 Express 实例并配置中间件',
                  docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                },
                {
                  'id': 'step-2',
                  'title': '创建 WS 服务',
                  'verification': 'require(\'ws\')',
                  'hint': '创建 WebSocket 服务器实例',
                  docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
                },
                {
                  'id': 'step-3',
                  'title': '配置项目结构',
                  'verification': 'WebSocketServer',
                  'hint': '创建路由和中间件目录',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                }
              ],
              variations: [
                {
                  name: 'Fastify',
                  description: '比 Express 更快的 Node.js 框架'
                }
              ],
              transferTasks: [
                {
                  task: '添加请求日志中间件',
                  target: '掌握中间件模式'
                }
              ],
            },
            {
              id: 'node-17',
              number: 17,
              type: 'project',
              project: 'chat-app',
              projectModule: 'REST API',
              title: '聊天 REST API',
              concept: 'Express 路由',
              difficulty: 'medium',
              task: '实现聊天室 REST API：用户注册/登录、消息历史查询、在线用户列表',
              prerequisites: '<h4>📚 Express 路由</h4><p><code>Router()</code> 创建模块化路由，<code>router.get/post/put/delete</code> 定义 HTTP 方法。</p>',
              conceptDetail: 'Express Router 实现路由模块化。req.params 获取 URL 参数。req.query 获取查询字符串。res.json 发送 JSON 响应。',
              contextCode: '',
              hints: [
                'router.get("/api/messages") 获取消息历史',
                'router.post("/api/users") 用户注册',
                'router.post("/api/auth/login") 用户登录'
              ],
              code: 'const express = require(\'express\')\nconst router = express.Router()\n\nlet messages = []\nlet users = []\n\nrouter.get(\'/messages\', (req, res) => {\n  const limit = parseInt(req.query.limit) || 50\n  res.json(messages.slice(-limit))\n})\n\nrouter.post(\'/messages\', (req, res) => {\n  const { userId, text } = req.body\n  const message = { id: Date.now(), userId, text, timestamp: new Date() }\n  messages.push(message)\n  res.status(201).json(message)\n})\n\nrouter.get(\'/users\', (req, res) => {\n  res.json(users)\n})\n\nmodule.exports = router',
              verification: '实现 /api/messages 和 /api/users 路由端点',
              filePath: 'src/routes/chat.js',
              projectFiles: {
                'src/routes/chat.js': '',
                'src/routes/auth.js': '',
                'src/middleware/auth.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'node-16'
              ],
              commonMistakes: [
                {
                  pattern: 'req.body',
                  explanation: 'req.body 需要 express.json() 中间件解析'
                },
                {
                  pattern: 'module.exports',
                  explanation: 'Node.js 使用 module.exports 导出模块内容'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '用户注册',
                  'verification': 'messages.push',
                  'hint': '创建用户注册接口',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                },
                {
                  'id': 'step-2',
                  'title': '用户登录',
                  'verification': 'router.post(\'/messages\'',
                  'hint': '创建登录并返回 JWT Token',
                  docLinks: [{title: 'JWT 教程', url: 'https://jwt.io/introduction'}]
                },
                {
                  'id': 'step-3',
                  'title': '消息历史',
                  'verification': 'messages.slice',
                  'hint': '实现消息历史查询接口',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                }
              ],
              variations: [
                {
                  name: 'Koa',
                  description: 'Koa 使用 async/await 处理路由'
                }
              ],
              transferTasks: [
                {
                  task: '添加分页参数和消息搜索',
                  target: '掌握 REST 最佳实践'
                }
              ],
            },
            {
              id: 'node-18',
              number: 18,
              type: 'project',
              project: 'chat-app',
              projectModule: 'WebSocket',
              title: 'WebSocket 实时通信',
              concept: 'ws 库',
              difficulty: 'hard',
              task: '实现 WebSocket 服务：连接管理、消息广播、心跳检测、断线重连处理',
              prerequisites: '<h4>📚 ws 库 API</h4><p><code>wss.on("connection")</code> 处理新连接。<code>ws.send()</code> 发送消息。<code>ws.on("message")</code> 接收消息。</p>',
              conceptDetail: 'WebSocketServer 创建 WebSocket 服务器。wss.clients 获取所有连接。心跳检测定期 ping/pong。广播向所有客户端发送消息。',
              contextCode: '',
              hints: [
                'wss.on("connection", (ws, req) => {...})',
                'wss.clients.forEach(client => client.send(data))',
                '设置心跳定时器，30 秒无响应断开'
              ],
              code: 'wss.on(\'connection\', (ws, req) => {\n  ws.isAlive = true\n\n  ws.on(\'pong\', () => { ws.isAlive = true })\n\n  ws.on(\'message\', (data) => {\n    const msg = JSON.parse(data)\n    wss.clients.forEach(client => {\n      if (client.readyState === 1) {\n        client.send(JSON.stringify({\n          type: \'message\',\n          payload: msg\n        }))\n      }\n    })\n  })\n\n  ws.on(\'close\', () => {\n    console.log(\'Client disconnected\')\n  })\n})\n\nconst interval = setInterval(() => {\n  wss.clients.forEach(ws => {\n    if (!ws.isAlive) return ws.terminate()\n    ws.isAlive = false\n    ws.ping()\n  })\n}, 30000)',
              verification: 'WebSocket 服务实现了消息广播和心跳检测',
              filePath: 'src/websocket.js',
              projectFiles: {
                'src/websocket.js': '',
                'src/index.js': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'node-16',
                'node-17'
              ],
              commonMistakes: [
                {
                  pattern: 'readyState',
                  explanation: 'WebSocket 状态码 1=OPEN, 2=CLOSING, 3=CLOSED'
                },
                {
                  pattern: 'JSON.parse',
                  explanation: 'WebSocket 收到的是 Buffer，需要 toString() 再 JSON.parse'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '连接管理',
                  'verification': 'wss.on(\'connection\'',
                  'hint': '管理 WebSocket 客户端连接',
                  docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
                },
                {
                  'id': 'step-2',
                  'title': '消息广播',
                  'verification': 'client.send',
                  'hint': '向所有连通的客户端广播消息',
                  docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
                },
                {
                  'id': 'step-3',
                  'title': '心跳检测',
                  'verification': 'ws.ping()',
                  'hint': '实现心跳检测机制保持连接',
                  docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}]
                }
              ],
              variations: [
                {
                  name: 'Socket.IO',
                  description: '提供房间、命名空间、自动重连等高级功能'
                }
              ],
              transferTasks: [
                {
                  task: '实现消息房间（多个聊天室隔离）',
                  target: '掌握分组广播'
                }
              ],
            },
            {
              id: 'node-19',
              number: 19,
              type: 'project',
              project: 'chat-app',
              projectModule: '数据持久化',
              title: '消息持久化存储',
              concept: 'SQLite + better-sqlite3',
              difficulty: 'medium',
              task: '用 SQLite 存储聊天消息，实现消息 CRUD 和历史查询',
              prerequisites: '<h4>📚 SQLite + Node.js</h4><p><code>better-sqlite3</code> 是同步的 SQLite 驱动，性能好、API 简洁。<code>db.prepare()</code> 编译 SQL 语句。</p>',
              conceptDetail: 'better-sqlite3 是同步 SQLite 驱动。db.prepare 预编译 SQL 防注入。db.transaction 事务函数批量操作。',
              contextCode: '',
              hints: [
                'CREATE TABLE messages (id INTEGER PRIMARY KEY, userId, text, timestamp)',
                'db.prepare("INSERT INTO messages VALUES ...").run(data)',
                'SELECT * FROM messages ORDER BY timestamp DESC LIMIT 50'
              ],
              code: 'const Database = require(\'better-sqlite3\')\nconst db = new Database(\'chat.db\')\n\ndb.exec(\'CREATE TABLE IF NOT EXISTS messages (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  user_id TEXT NOT NULL,\n  username TEXT NOT NULL,\n  text TEXT NOT NULL,\n  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP\n)\')\n\nfunction saveMessage(userId, username, text) {\n  const stmt = db.prepare(\n    \'INSERT INTO messages (user_id, username, text) VALUES (?, ?, ?)\'\n  )\n  return stmt.run(userId, username, text)\n}\n\nfunction getMessages(limit = 50) {\n  const stmt = db.prepare(\n    \'SELECT * FROM messages ORDER BY timestamp DESC LIMIT ?\'\n  )\n  return stmt.all(limit)\n}\n\nmodule.exports = { saveMessage, getMessages }',
              verification: '使用 better-sqlite3 创建消息表，实现 saveMessage/getMessages 方法',
              filePath: 'src/models/message.js',
              projectFiles: {
                'src/models/message.js': '',
                'src/models/user.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'node-17'
              ],
              commonMistakes: [
                {
                  pattern: 'prepare',
                  explanation: 'prepare 编译 SQL 语句，用 ? 占位符传参防注入'
                },
                {
                  pattern: 'run/all/get',
                  explanation: 'run=插入/更新, all=多行, get=单行'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '定义消息模型',
                  'verification': 'db.exec',
                  'hint': '用 SQLite 创建消息表',
                  docLinks: [{title: 'Mongoose 文档', url: 'https://mongoosejs.com/docs/'}]
                },
                {
                  'id': 'step-2',
                  'title': '插入消息',
                  'verification': 'db.prepare',
                  'hint': '将收到的消息存入数据库',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                },
                {
                  'id': 'step-3',
                  'title': '历史查询',
                  'verification': 'db.prepare',
                  'hint': '实现消息历史分页查询',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                }
              ],
              variations: [
                {
                  name: 'Prisma',
                  description: 'Node.js ORM，支持多种数据库'
                }
              ],
              transferTasks: [
                {
                  task: '添加消息索引优化查询性能',
                  target: '掌握数据库性能优化'
                }
              ],
            },
            {
              id: 'node-20',
              number: 20,
              type: 'project',
              project: 'chat-app',
              projectModule: '用户管理',
              title: '用户管理与认证',
              concept: 'JWT + 中间件',
              difficulty: 'medium',
              task: '实现用户管理 API 和 JWT 鉴权中间件，保护需要登录的接口',
              prerequisites: '<h4>📚 Express 中间件</h4><p><code>app.use()</code> 注册全局中间件，路由级中间件作为路由第二个参数。<code>next()</code> 调用下一个中间件。</p>',
              conceptDetail: 'jsonwebtoken 创建和验证 Token。中间件函数接收 (req, res, next)。req.headers 提取 Authorization 头中的 Bearer Token。',
              contextCode: '',
              hints: [
                'jsonwebtoken.sign({ userId }, SECRET, { expiresIn })',
                '中间件中提取 Bearer token -> jwt.verify',
                '把解析后的用户信息挂到 req.user'
              ],
              code: 'const jwt = require(\'jsonwebtoken\')\nconst SECRET = process.env.JWT_SECRET || \'chat-secret-key\'\n\nfunction authMiddleware(req, res, next) {\n  const auth = req.headers.authorization\n  if (!auth || !auth.startsWith(\'Bearer \')) {\n    return res.status(401).json({ error: \'未登录\' })\n  }\n  try {\n    const token = auth.split(\' \')[1]\n    const decoded = jwt.verify(token, SECRET)\n    req.user = decoded\n    next()\n  } catch {\n    res.status(401).json({ error: \'Token 无效\' })\n  }\n}\n\nmodule.exports = authMiddleware',
              verification: 'JWT 鉴权中间件正确验证 Token，保护需要登录的路由',
              filePath: 'src/middleware/auth.js',
              projectFiles: {
                'src/middleware/auth.js': '',
                'src/routes/auth.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'node-17'
              ],
              commonMistakes: [
                {
                  pattern: 'jwt.verify',
                  explanation: 'jwt.verify(token, secret) 验证 Token 有效性'
                },
                {
                  pattern: '401',
                  explanation: '未授权应返回 401 状态码'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': 'JWT 中间件',
                  'verification': 'jwt.verify',
                  'hint': '创建 JWT 验证中间件保护路由',
                  docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}, {title: 'JWT 教程', url: 'https://jwt.io/introduction'}]
                },
                {
                  'id': 'step-2',
                  'title': '更新用户',
                  'verification': 'authMiddleware',
                  'hint': '实现用户信息更新接口',
                  docLinks: [{title: 'Mongoose 文档', url: 'https://mongoosejs.com/docs/'}]
                },
                {
                  'id': 'step-3',
                  'title': '用户列表',
                  'verification': 'authMiddleware',
                  'hint': '实现管理员用户列表查询',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                }
              ],
              variations: [
                {
                  name: 'Passport.js',
                  description: 'Express 认证中间件，支持多种策略'
                }
              ],
              transferTasks: [
                {
                  task: '实现管理员角色和权限控制',
                  target: '掌握 RBAC 模型'
                }
              ],
            },
            {
              id: 'node-21',
              number: 21,
              type: 'project',
              project: 'chat-app',
              projectModule: '部署',
              title: '项目整合与 WebSocket 安全',
              concept: 'ws 升级校验',
              difficulty: 'hard',
              task: '整合 REST + WebSocket，WebSocket 连接时验证 Token，添加速率限制和日志',
              prerequisites: '<h4>📚 WebSocket 安全</h4><p>WebSocket 连接时在 URL 中携带 Token 参数，服务端在 upgrade 事件中校验。</p>',
              conceptDetail: 'WebSocket 通过 URL 参数传 Token。wss.handleUpgrade 处理连接升级。express-rate-limit 防止滥用。',
              contextCode: '',
              hints: [
                'wss.on("upgrade") 中校验 token 参数',
                'express-rate-limit 限制 /api/ 请求频率',
                'morgan 日志中间件记录请求'
              ],
              code: 'const rateLimit = require(\'express-rate-limit\')\n\nconst apiLimiter = rateLimit({\n  windowMs: 60 * 1000,\n  max: 100,\n  message: { error: \'请求过于频繁\' }\n})\napp.use(\'/api\', apiLimiter)\n\nserver.on(\'upgrade\', (req, socket, head) => {\n  const token = new URL(req.url, \'http://localhost\').searchParams.get(\'token\')\n  if (!token) {\n    socket.destroy()\n    return\n  }\n  try {\n    jwt.verify(token, SECRET)\n    wss.handleUpgrade(req, socket, head, (ws) => {\n      wss.emit(\'connection\', ws, req)\n    })\n  } catch {\n    socket.destroy()\n  }\n})',
              verification: 'REST + WebSocket 整合，WebSocket 连接进行 Token 校验，有速率限制',
              filePath: 'src/index.js',
              projectFiles: {
                'src/index.js': '',
                '.env.example': 'PORT=3000\nJWT_SECRET=your-secret-key'
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'node-18',
                'node-19',
                'node-20'
              ],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': 'WS Token 验证',
                  'verification': 'handleUpgrade',
                  'hint': '在 WebSocket 连接时验证 Token',
                  docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}, {title: 'JWT 教程', url: 'https://jwt.io/introduction'}]
                },
                {
                  'id': 'step-2',
                  'title': '速率限制',
                  'verification': 'rateLimit',
                  'hint': '添加 API 速率限制中间件',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                },
                {
                  'id': 'step-3',
                  'title': '整合路由',
                  'verification': 'app.use',
                  'hint': '整合所有路由和中间件',
                  docLinks: [{title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                }
              ],
              variations: [
                {
                  name: 'gRPC',
                  description: '性能更好的双向流通信方案'
                }
              ],
              transferTasks: [
                {
                  task: '添加消息审核和敏感词过滤',
                  target: '掌握内容安全策略'
                }
              ],
            },
            {
              id: 'node-22',
              number: 22,
              type: 'project',
              project: 'chat-app',
              projectModule: '测试',
              title: 'API 测试',
              concept: 'Jest + Supertest',
              difficulty: 'medium',
              task: '用 Jest + Supertest 编写 API 测试，覆盖 REST 端点和 WebSocket 连接',
              prerequisites: '<h4>📚 Jest + Supertest</h4><p>Jest 是测试框架，Supertest 用于 HTTP 测试。<code>describe/it/expect</code> 组织测试。</p>',
              conceptDetail: 'Jest 提供 describe/it/expect 测试 API。Supertest 链式调用测试 API。beforeAll/afterAll 生命周期钩子。',
              contextCode: '',
              hints: [
                'const request = require("supertest")',
                'request(app).get("/api/messages").expect(200)',
                'describe("Messages API", () => {...}) 分组测试'
              ],
              code: 'const request = require(\'supertest\')\nconst app = require(\'../src/index\')\n\ndescribe(\'Messages API\', () => {\n  test(\'GET /api/messages 返回消息列表\', async () => {\n    const res = await request(app).get(\'/api/messages\')\n    expect(res.status).toBe(200)\n    expect(Array.isArray(res.body)).toBe(true)\n  })\n\n  test(\'POST /api/messages 创建消息\', async () => {\n    const res = await request(app)\n      .post(\'/api/messages\')\n      .send({ userId: \'1\', text: \'Hello\' })\n    expect(res.status).toBe(201)\n    expect(res.body.text).toBe(\'Hello\')\n  })\n})',
              verification: 'Jest + Supertest 测试消息列表和创建消息端点',
              filePath: 'tests/api.test.js',
              projectFiles: {
                'tests/api.test.js': '',
                'jest.config.js': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'node-21'
              ],
              commonMistakes: [
                {
                  pattern: 'supertest',
                  explanation: 'supertest(app) 传入 Express 应用实例'
                },
                {
                  pattern: 'async/await',
                  explanation: 'Supertest 请求要 await 等待返回'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '测试 REST 端点',
                  'verification': 'request(app)',
                  'hint': '用 Supertest 测试 HTTP 接口',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                },
                {
                  'id': 'step-2',
                  'title': '测试认证',
                  'verification': 'request(app)',
                  'hint': '测试需要 Token 的接口',
                  docLinks: [{title: 'Node.js 文档', url: 'https://nodejs.org/zh-cn/docs/'}, {title: 'Express 官方文档', url: 'https://expressjs.com/zh-cn/'}]
                },
                {
                  'id': 'step-3',
                  'title': '测试 WebSocket',
                  'verification': 'supertest',
                  'hint': '测试 WebSocket 连接和消息',
                  docLinks: [{title: 'WebSocket (ws)', url: 'https://github.com/websockets/ws'}, {title: 'Socket.io 文档', url: 'https://socket.io/zh-CN/docs/'}]
                }
              ],
              variations: [
                {
                  name: 'Mocha',
                  description: '更灵活的测试框架'
                }
              ],
              transferTasks: [
                {
                  task: '添加 WebSocket 连接测试',
                  target: '掌握异步事件测试'
                }
              ],
            },
            {
              id: 'node-23',
              number: 23,
              type: 'project',
              project: 'chat-app',
              projectModule: '部署',
              title: '部署与监控配置',
              concept: 'Docker + PM2',
              difficulty: 'medium',
              task: '配置 Docker 部署、PM2 进程管理、健康检查端点',
              prerequisites: '<h4>📚 PM2 和 Docker</h4><p>PM2 是 Node.js 进程管理器，支持自动重启、负载均衡。<code>pm2 start index.js -i max</code> 开启集群模式。</p>',
              conceptDetail: 'PM2 是 Node.js 进程管理器。Docker 容器化部署。健康检查 GET /health 返回服务状态。',
              contextCode: '',
              hints: [
                'ecosystem.config.js 配置 PM2',
                'Dockerfile 多阶段构建减小镜像',
                'app.get("/health") 返回 { status: "ok" }'
              ],
              code: '// PM2 ecosystem.config.js\nmodule.exports = {\n  apps: [{\n    name: \'chat-server\',\n    script: \'src/index.js\',\n    instances: \'max\',\n    exec_mode: \'cluster\',\n    env: { NODE_ENV: \'production\' },\n    max_memory_restart: \'500M\'\n  }]\n}\n\n// Health check endpoint\napp.get(\'/health\', (req, res) => {\n  res.json({\n    status: \'ok\',\n    uptime: process.uptime(),\n    connections: wss.clients.size,\n    timestamp: new Date()\n  })\n})',
              verification: '配置了 PM2 进程管理和健康检查端点',
              filePath: 'ecosystem.config.js',
              projectFiles: {
                'ecosystem.config.js': '',
                Dockerfile: 'FROM node:18-alpine\nWORKDIR /app\nCOPY . .\nRUN npm install --production\nEXPOSE 3000\nCMD ["node", "src/index.js"]'
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'node-21'
              ],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '配置 Docker',
                  'verification': 'ecosystem.config',
                  'hint': '编写 Dockerfile 构建镜像',
                  docLinks: [{title: 'Docker 官方文档', url: 'https://docs.docker.com/'}]
                },
                {
                  'id': 'step-2',
                  'title': 'PM2 进程管理',
                  'verification': 'ecosystem.config',
                  'hint': '配置 PM2 进程管理文件',
                  docLinks: [{title: 'PM2 文档', url: 'https://pm2.keymetrics.io/docs/usage/quick-start/'}]
                },
                {
                  'id': 'step-3',
                  'title': '健康检查',
                  'verification': '/health',
                  'hint': '添加健康检查端点',
                  docLinks: [{title: 'Node.js 健康检查', url: 'https://expressjs.com/zh-cn/advanced/healthcheck.html'}]
                }
              ],
              variations: [
                {
                  name: 'Kubernetes',
                  description: '基于 k8s 的容器编排部署方案'
                }
              ],
              transferTasks: [
                {
                  task: '配置 Sentry 错误监控',
                  target: '掌握生产环境监控'
                }
              ],
            }
    ]
  }
]
