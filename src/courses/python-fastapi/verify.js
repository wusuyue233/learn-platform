export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'py-1':
      check('main.py', 'print', '使用 print 函数', '输出了内容')
      check('main.py', 'Hello', '包含目标文本', '输出了 Hello')
      break
    case 'py-2':
      check('variables.py', '=', '变量赋值', '创建了变量')
      check('variables.py', 'type', '使用 type 函数', '查看了变量类型')
      break
    case 'py-3':
      check('functions.py', 'def', '定义函数', '使用了 def 关键字')
      check('functions.py', 'return', '返回值', '函数有返回值')
      break
    case 'py-4':
      check('loop.py', 'for', '使用 for 循环', '使用了循环语句')
      check('loop.py', 'if', '使用 if 判断', '使用了条件判断')
      break
    case 'py-5':
      check('students.py', '[', '使用列表', '使用了列表数据结构')
      check('students.py', '{', '使用字典', '使用了字典数据结构')
      break
    case 'py-6':
      check('main.py', '@app.get', '注册路由', '使用了路由装饰器')
      check('main.py', 'Hello FastAPI', '返回目标文本', '返回了正确的消息')
      break
    case 'py-7':
      check('main.py', '{user_id}', '路径参数', '定义了路径参数')
      break
    case 'py-8':
      check('main.py', 'page', '分页参数', '实现了分页功能')
      break
    case 'py-9':
      check('main.py', 'BaseModel', '使用 Pydantic', '定义了数据模型')
      break
    case 'py-10':
      check('main.py', 'response_model', '响应模型', '使用了响应模型过滤')
      break
    case 'py-11':
      check('main.py', 'HTTPException', '错误处理', '使用了异常处理')
      break
    case 'py-12':
      check('main.py', 'middleware', '中间件', '添加了中间件')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
