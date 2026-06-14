export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'node-1':
      check('utils.js', 'module.exports', '导出模块', '使用了 module.exports')
      check('utils.js', 'function', '定义函数', '定义了可复用函数')
      break
    case 'node-2':
      check('config-manager.js', 'require', '引入 fs 模块', '引入了 fs 模块')
      check('config-manager.js', 'readFileSync', '读取文件', '使用了同步读取')
      check('config-manager.js', 'writeFileSync', '写入文件', '使用了文件写入')
      check('config-manager.js', 'JSON.parse', '解析 JSON', '解析了 JSON 数据')
      break
    case 'node-3':
      check('server.js', 'http', '引入 http 模块', '引入了 http 模块')
      check('server.js', 'createServer', '创建服务器', '使用了 createServer')
      check('server.js', 'writeHead', '设置响应头', '设置了 Content-Type')
      break
    case 'node-4':
      check('package.json', 'scripts', '定义脚本', '配置了 scripts')
      check('package.json', 'dependencies', '生产依赖', '声明了 dependencies')
      check('package.json', 'devDependencies', '开发依赖', '声明了 devDependencies')
      break
    case 'node-5':
      check('src/server.js', 'express', '引入 Express', '引入了 Express')
      check('src/server.js', 'app.get', 'GET 路由', '注册了 GET 路由')
      check('src/server.js', 'app.post', 'POST 路由', '注册了 POST 路由')
      check('src/server.js', 'res.json', '返回 JSON', '使用了 res.json')
      break
    case 'node-6':
      check('src/server.js', 'next', '使用 next', '调用了 next()')
      check('src/server.js', 'app.use', '注册中间件', '使用了 app.use')
      break
    case 'node-7':
      check('src/server.js', 'express.json', '解析请求体', '注册了 JSON 解析')
      check('src/server.js', 'req.body', '读取请求体', '从 req.body 获取数据')
      break
    case 'node-8':
      check('src/server.js', 'err, req, res, next', '错误处理中间件', '定义了错误处理中间件')
      check('src/server.js', 'next(err)', '传递错误', '使用了 next(err)')
      break
    case 'node-9':
      check('src/models/User.js', 'mongoose', '引入 Mongoose', '引入了 Mongoose')
      check('src/models/User.js', 'Schema', '定义 Schema', '创建了数据 Schema')
      check('src/models/User.js', 'model', '创建 Model', '创建了数据模型')
      break
    case 'node-10':
      check('src/routes/users.js', 'async', '使用 async', '声明了异步函数')
      check('src/routes/users.js', 'await', '使用 await', '等待异步操作')
      check('src/routes/users.js', 'create', '创建操作', '使用了 create 方法')
      check('src/routes/users.js', 'find', '查询操作', '使用了 find 方法')
      break
    case 'node-11':
      check('src/middleware/auth.js', 'jwt', '引入 JWT', '引入了 jsonwebtoken')
      check('src/middleware/auth.js', 'jwt.sign', '生成 Token', '使用了 jwt.sign')
      check('src/middleware/auth.js', 'jwt.verify', '验证 Token', '使用了 jwt.verify')
      check('src/middleware/auth.js', 'authorization', '获取 Auth 头', '解析了 Authorization')
      break
    case 'node-12':
      check('src/middleware/authorize.js', 'roles', '角色参数', '接收角色参数')
      check('src/middleware/authorize.js', '403', '返回 403', '返回了权限错误')
      break
    case 'node-13':
      check('src/ws-server.js', 'WebSocket', '引入 ws 模块', '引入了 WebSocket')
      check('src/ws-server.js', 'on', '监听事件', '监听了事件')
      check('src/ws-server.js', 'send', '发送消息', '发送了消息')
      break
    case 'node-14':
      check('src/socket-server.js', 'Server', '创建 Socket.io', '创建了 Socket.io 服务器')
      check('src/socket-server.js', 'join', '加入房间', '使用了 socket.join')
      check('src/socket-server.js', 'to', '向房间广播', '使用了 io.to()')
      break
    case 'node-15':
      check('src/chat-server.js', 'jwt', 'JWT 认证', '集成了 JWT 认证')
      check('src/chat-server.js', 'io.use', 'Socket.io 中间件', '添加了认证中间件')
      check('src/chat-server.js', 'join-room', '房间功能', '实现了房间加入')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
