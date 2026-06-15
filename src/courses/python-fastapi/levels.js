export const phases = [
  {
    id: 'python-basics',
    name: '阶段一：Python 基础',
    description: '掌握 Python 核心语法：变量、函数、数据结构',
    levels: [
      {
        id: 'py-1',
        number: 1,
        title: 'Hello Python',
        concept: 'print 输出',
        difficulty: 'easy',
        task: '用 print 输出 "Hello, Python!"',
        prerequisites: `<h4>🐍 Python 入门</h4>
<p>Python 是一种解释型语言，写完代码直接运行：</p>
<pre><code>print("Hello, World!")  # 输出到控制台
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>print()</code> — 输出内容到控制台</li>
  <li>字符串用引号包裹：<code>'单引号'</code> 或 <code>"双引号"</code></li>
  <li><code>#</code> — 单行注释</li>
</ul>`,
        conceptDetail: `步骤 1 — 使用 print 函数
[print()](内置函数，输出内容到控制台) 是 Python 最基础的函数。

步骤 2 — 传递字符串参数
字符串可以用单引号或双引号包裹。

步骤 3 — 运行代码
Python 代码从上到下依次执行。`,
        contextCode: `# print 函数用法参考
print("Hello, Python!")           # 基本输出
print("a", "b", "c")             # 多个值，空格分隔
print("a", "b", sep="-")         # 自定义分隔符
print("Hello", end="")            # 不换行
print(f"Name: {name}")           # f-string 格式化
print(type(42))                   # 查看类型
print(1 + 2, "result")           # 混合输出`,
        starterCode: `# 用 print 输出 "Hello, Python!"
`,
        hints: [
          'print("Hello, Python!")',
          '记得用引号包裹字符串',
          'print 函数名后跟括号'
        ],
        code: `print("Hello, Python!")`,
        verification: '使用了 print 函数输出 Hello, Python!',
        filePath: 'main.py',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
         {
          'pattern': 'print()',
          'explanation': 'print() 默认换行，end=\'\' 取消换行'
         },
         {
          'pattern': 'input()',
          'explanation': 'input() 返回字符串，数字要转换'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
         }
        ],
        variations: [
         {
          'name': 'f-string',
          'description': 'Python 用 f-string 格式化：f\'{name}\''
         }
        ],
        transferTasks: [
         {
          'task': '编写输入输出交互程序处理用户输入',
          'target': '掌握 IO 操作'
         }
        ]
      },
      {
        id: 'py-2',
        number: 2,
        title: '变量与类型',
        concept: '变量赋值',
        difficulty: 'easy',
        task: '创建不同类型的变量并打印',
        prerequisites: `<h4>🐍 变量是什么</h4>
<p>变量是存储数据的容器，Python 不需要声明类型：</p>
<pre><code>name = "Alice"      # 字符串
age = 25            # 整数
height = 1.65       # 浮点数
is_student = True   # 布尔值
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>变量名用小写字母和下划线</li>
  <li><code>type()</code> 查看变量类型</li>
  <li>Python 是动态类型语言</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建字符串变量
字符串用引号包裹，存储文本数据。

步骤 2 — 创建数字变量
整数和浮点数不需要引号。

步骤 3 — 使用 type() 查看类型
[type()](查看变量类型的内置函数) 验证变量类型。`,
        contextCode: `# Python 变量类型表
name = "Alice"           # str 字符串
age = 25                 # int 整数
height = 1.65            # float 浮点数
is_student = True        # bool 布尔值（True/False）
items = [1, 2, 3]        # list 列表
info = {"key": "value"}  # dict 字典
data = None              # NoneType 空值
coords = (1, 2)          # tuple 元组
unique = {1, 2, 3}       # set 集合

# 类型检查
type(age)        # <class 'int'>
isinstance(age, int)  # True`,
        starterCode: `# 创建不同类型的变量并打印它们的值和类型
# name = ???
# age = ???
# height = ???
# is_student = ???
`,
        hints: [
          'name = "Alice"',
          'age = 25',
          'type(name) 可以查看类型'
        ],
        code: `name = "Alice"
age = 25
height = 1.65
is_student = True

print(name, type(name))
print(age, type(age))
print(height, type(height))
print(is_student, type(is_student))`,
        verification: '创建了字符串、整数、浮点数、布尔类型的变量',
        filePath: 'variables.py',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
        id: 'py-3',
        number: 3,
        title: '函数定义',
        concept: 'def 函数',
        difficulty: 'easy',
        task: '定义一个计算两数之和的函数',
        prerequisites: `<h4>🐍 函数基础</h4>
<p>函数是可复用的代码块，用 <code>def</code> 定义：</p>
<pre><code>def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)  # Hello, Alice!
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>def</code> — 定义函数的关键字</li>
  <li>参数放在括号内</li>
  <li><code>return</code> — 返回值</li>
</ul>`,
        conceptDetail: `步骤 1 — 用 def 定义函数
[def](定义函数的关键字) 后跟函数名和参数。

步骤 2 — 缩进写函数体
Python 用缩进（4个空格）表示代码块。

步骤 3 — 返回结果
[return](返回函数结果) 将计算结果返回给调用者。`,
        contextCode: `# def 函数定义语法参考
def greet(name):
    """文档字符串"""
    return f"Hello, {name}!"

# 带默认值
def add(a, b=0):
    return a + b

# 可变参数
def func(*args):       # args 是元组
    return sum(args)

def func(**kwargs):    # kwargs 是字典
    return kwargs

# lambda 匿名函数
square = lambda x: x ** 2

# 调用
result = add(3, 5)     # 8
result = add(3)        # 3（b 使用默认值）`,
        starterCode: `# 定义一个计算两数之和的函数
def add(???):
    # 返回两数之和
    ???

result = add(3, 5)
print(result)  # 应输出 8`,
        hints: [
          'def add(a, b):',
          '函数体写 return a + b',
          '缩进用 4 个空格'
        ],
        code: `def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8`,
        verification: '定义了函数并正确返回两数之和',
        filePath: 'functions.py',
        cognitiveLoad: 'low',
        dependsOn: [],
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
          'hint': '用 function 关键字'
         },
         {
          'id': 'step-2',
          'title': '添加参数',
          'verification': 'return',
          'hint': '函数体返回值'
         },
         {
          'id': 'step-3',
          'title': '调用测试',
          'verification': 'console.log',
          'hint': '调用函数测试'
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
        ]
      },
      {
        id: 'py-4',
        number: 4,
        title: '条件与循环',
        concept: 'if / for',
        difficulty: 'easy',
        task: '用 for 循环和 if 判断筛选偶数',
        prerequisites: `<h4>🐍 条件语句</h4>
<pre><code>if age >= 18:
    print("成年人")
elif age >= 12:
    print("青少年")
else:
    print("儿童")
</code></pre>

<h4>🐍 循环语句</h4>
<pre><code># for 循环
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# while 循环
while condition:
    # 循环体
</code></pre>`,
        conceptDetail: `步骤 1 — 用 range() 生成数字序列
[range(1, 11)](生成 1 到 10 的整数序列) 生成 1-10。

步骤 2 — 用 if 判断偶数
[if i % 2 == 0](取模运算，判断是否能被 2 整除) 判断偶数。

步骤 3 — 收集结果
将偶数添加到列表中。`,
        contextCode: `# if/for/while 语法参考
# 条件
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

# for 循环
for i in range(5):          # 0,1,2,3,4
    print(i)
for item in ["a", "b"]:     # 遍历列表
    print(item)

# while 循环
while count > 0:
    count -= 1

# 列表推导式
evens = [x for x in range(10) if x % 2 == 0]`,
        starterCode: `evens = []
for i in range(1, 11):
    # 用 if 判断偶数并添加到列表
    ???

print(evens)  # 应输出 [2, 4, 6, 8, 10]`,
        hints: [
          'range(1, 11) 生成 1 到 10',
          'if i % 2 == 0 判断偶数',
          'evens.append(i) 添加到列表'
        ],
        code: `evens = []
for i in range(1, 11):
    if i % 2 == 0:
        evens.append(i)

print(evens)  # [2, 4, 6, 8, 10]`,
        verification: '使用了 for 循环和 if 条件判断',
        filePath: 'loop.py',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
        id: 'py-5',
        number: 5,
        title: '列表与字典',
        concept: '数据结构',
        difficulty: 'easy',
        task: '操作列表和字典存储学生信息',
        prerequisites: `<h4>🐍 列表</h4>
<pre><code>fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits[0])  # apple
</code></pre>

<h4>🐍 字典</h4>
<pre><code>student = {
    "name": "Alice",
    "age": 20,
    "grades": [90, 85, 92]
}
print(student["name"])  # Alice
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>列表用方括号 <code>[]</code></li>
  <li>字典用花括号 <code>{}</code></li>
  <li>字典用键访问值</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建学生列表
列表用方括号定义，元素用逗号分隔。

步骤 2 — 添加学生信息
[append()](列表方法，添加元素到末尾) 添加新元素。

步骤 3 — 用字典存储详细信息
字典用键值对存储结构化数据。`,
        contextCode: `# list/dict 操作方法参考
# 列表方法
lst = [1, 2, 3]
lst.append(4)        # 末尾添加
lst.insert(0, 0)     # 指定位置插入
lst.pop()            # 弹出末尾
lst.remove(2)        # 删除指定值
lst.index(3)         # 查找索引
len(lst)             # 长度
lst[1:3]             # 切片

# 字典方法
d = {"a": 1, "b": 2}
d["c"] = 3           # 添加/修改
d.get("a", 0)        # 安全获取
d.keys()             # 所有键
d.values()           # 所有值
d.items()            # 键值对
d.pop("a")           # 删除并返回`,
        starterCode: `students = []
# 用 append 添加学生字典（包含 name 和 age）
???
students.append({"name": "Bob", "age": 22})
students.append({"name": "Charlie", "age": 21})

# 用 for 循环遍历并打印每个学生信息
for student in students:
    ???`,
        hints: [
          'students = [] 创建空列表',
          'students.append({"name": "xxx"}) 添加字典',
          'for s in students: print(s["name"])'
        ],
        code: `students = []
students.append({"name": "Alice", "age": 20})
students.append({"name": "Bob", "age": 22})
students.append({"name": "Charlie", "age": 21})

for student in students:
    print(f'{student["name"]} - {student["age"]}岁')`,
        verification: '正确使用了列表和字典存储数据',
        filePath: 'students.py',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
    id: 'fastapi-basics',
    name: '阶段二：FastAPI 路由',
    description: '掌握 FastAPI 路由、请求、响应的核心概念',
    levels: [
      {
        id: 'py-6',
        number: 6,
        title: 'Hello FastAPI',
        concept: '路由注册',
        difficulty: 'easy',
        task: '创建一个 GET /hello 接口，返回 {"message": "Hello FastAPI"}',
        prerequisites: `<h4>🐍 FastAPI 入门</h4>
<p>FastAPI 是一个现代、快速的 Python Web 框架：</p>
<pre><code>from fastapi import FastAPI
app = FastAPI()

@app.get("/hello")
async def hello():
    return {"message": "Hello"}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>FastAPI()</code> — 创建应用实例</li>
  <li><code>@app.get()</code> — 注册 GET 路由</li>
  <li><code>return</code> — 返回 JSON 数据</li>
</ul>`,
        conceptDetail: `步骤 1 — 导入 FastAPI
[from fastapi import FastAPI](导入 FastAPI 框架) 创建应用实例。

步骤 2 — 定义路由
用 [@app.get("/hello")](路由装饰器，注册 GET 请求处理函数) 绑定路径。

步骤 3 — 返回 JSON
函数直接 return 字典，FastAPI 自动序列化为 JSON。`,
        contextCode: `# FastAPI 路由注册参考
from fastapi import FastAPI

app = FastAPI()

# GET 请求
@app.get("/items")
async def list_items():
    return {"items": []}

# POST 请求
@app.post("/items")
async def create_item(item: dict):
    return {"created": item}

# 路径操作装饰器
@app.get("/path")
@app.post("/path")
@app.put("/path/{id}")
@app.delete("/path/{id}")
async def handler(): ...`,
        starterCode: `from fastapi import FastAPI

app = FastAPI()

# 用 @app.get 装饰器创建 /hello 接口
# 函数返回 {"message": "Hello FastAPI"}
`,
        hints: [
          '用 @app.get("/hello") 装饰一个 async def 函数',
          '函数体 return {"message": "Hello FastAPI"}',
          '确保已导入 FastAPI'
        ],
        code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
async def hello():
    return {"message": "Hello FastAPI"}`,
        verification: '创建了 GET /hello 接口，返回 JSON 数据',
        filePath: 'main.py',
        cognitiveLoad: 'low',
        dependsOn: [],
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
        id: 'py-7',
        number: 7,
        title: '路径参数',
        concept: 'URL 参数',
        difficulty: 'medium',
        task: '创建一个根据用户 ID 返回用户信息的接口',
        prerequisites: `<h4>🐍 路径参数</h4>
<p>路径参数是 URL 中的动态部分：</p>
<pre><code>@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>{user_id}</code> — 路径中的动态段</li>
  <li>类型提示 <code>: int</code> — 自动验证和转换</li>
  <li>FastAPI 自动处理类型转换</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义带参数的路由
路径中用 {user_id} 标记动态参数。

步骤 2 — 添加类型提示
类型提示帮助 FastAPI 验证参数。

步骤 3 — 在函数中使用参数
参数值直接传递给处理函数。`,
        contextCode: `# 路径参数语法参考
from fastapi import FastAPI
app = FastAPI()

# 单个参数
@app.get("/users/{user_id}")
async def get_user(user_id: int):  # 类型提示自动验证
    return {"user_id": user_id}

# 多个参数
@app.get("/users/{user_id}/posts/{post_id}")
async def get_post(user_id: int, post_id: int):
    return {"user_id": user_id, "post_id": post_id}

# 类型转换：FastAPI 自动将 "123" 转为 int
# 路径参数必须有值，不能省略`,
        starterCode: `from fastapi import FastAPI
app = FastAPI()

users = {1: "Alice", 2: "Bob", 3: "Charlie"}

# 创建路由 /users/{user_id}，参数类型为 int
# 返回 {"user_id": user_id, "name": ???}
`,
        hints: [
          '路由写 @app.get("/users/{user_id}")',
          '函数参数写 user_id: int',
          'return {"user_id": user_id, "name": users[user_id]}'
        ],
        code: `from fastapi import FastAPI
app = FastAPI()

users = {1: "Alice", 2: "Bob", 3: "Charlie"}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id, "name": users.get(user_id, "Unknown")}`,
        verification: '使用了路径参数，能根据 ID 返回用户信息',
        filePath: 'main.py',
        cognitiveLoad: 'medium',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
        id: 'py-8',
        number: 8,
        title: '查询参数',
        concept: 'Query Parameters',
        difficulty: 'medium',
        task: '创建一个支持分页的商品列表接口',
        prerequisites: `<h4>🐍 查询参数</h4>
<p>查询参数是 URL 中 ? 后面的键值对：</p>
<pre><code>@app.get("/items")
async def list_items(page: int = 1, size: int = 10):
    return {"page": page, "size": size}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>参数有默认值时变为可选</li>
  <li>FastAPI 自动从 URL 解析查询参数</li>
  <li><code>skip</code> 和 <code>limit</code> 是分页常用参数</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义带默认值的参数
默认值使参数变为可选。

步骤 2 — 从查询参数中获取值
FastAPI 自动从 URL 的 ?key=value 解析。

步骤 3 — 实现分页逻辑
根据 page 和 size 计算偏移量。`,
        contextCode: `# 查询参数语法参考
from fastapi import FastAPI
app = FastAPI()

# 带默认值的参数自动变为查询参数
@app.get("/items")
async def list_items(page: int = 1, size: int = 10, q: str = None):
    return {"page": page, "size": size, "q": q}

# 使用：GET /items?page=2&size=20&q=phone
# 必选参数（无默认值）会报错
# 可选参数（有默认值）可省略`,
        starterCode: `from fastapi import FastAPI
app = FastAPI()

items = [f"商品{i}" for i in range(1, 51)]

# 创建路由 /items，参数 page=1, size=10（带默认值）
# 实现分页逻辑：计算 start 和 end，返回切片结果
`,
        hints: [
          '参数写 page: int = 1, size: int = 10',
          '用切片 items[start:end] 获取分页数据',
          '返回包含 page、size、items 的字典'
        ],
        code: `from fastapi import FastAPI
app = FastAPI()

items = [f"商品{i}" for i in range(1, 51)]

@app.get("/items")
async def list_items(page: int = 1, size: int = 10):
    start = (page - 1) * size
    end = start + size
    return {
        "page": page,
        "size": size,
        "items": items[start:end]
    }`,
        verification: '使用了查询参数实现分页功能',
        filePath: 'main.py',
        cognitiveLoad: 'medium',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
        id: 'py-9',
        number: 9,
        title: '请求体',
        concept: 'Pydantic 模型',
        difficulty: 'medium',
        task: '用 Pydantic 模型接收 JSON 请求体创建商品',
        prerequisites: `<h4>🐍 请求体</h4>
<p>POST 请求通常携带 JSON 数据，用 Pydantic 模型验证：</p>
<pre><code>from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    description: str = ""

@app.post("/items")
async def create_item(item: Item):
    return {"name": item.name, "price": item.price}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>BaseModel</code> — Pydantic 数据模型基类</li>
  <li>类型提示自动验证请求数据</li>
  <li>默认值使字段变为可选</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义 Pydantic 模型
[BaseModel](Pydantic 基类，自动验证数据) 定义数据结构。

步骤 2 — 在路由中使用
函数参数类型为模型类，FastAPI 自动解析请求体。

步骤 3 — 访问模型属性
通过对象属性访问验证后的数据。`,
        contextCode: `# Pydantic BaseModel 参考
from pydantic import BaseModel, Field
from typing import Optional

class Product(BaseModel):
    name: str                           # 必填字段
    price: float
    description: str = ""               # 可选（有默认值）
    tags: list[str] = []                # 默认空列表
    stock: Optional[int] = None         # 可为 None

# 可用 Field 约束
class Item(BaseModel):
    name: str = Field(..., min_length=1)  # 不能为空
    price: float = Field(gt=0)            # 大于 0

# 创建实例
product = Product(name="Phone", price=999)
data = product.dict()  # 转为字典`,
        starterCode: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# 用 BaseModel 定义 Product 模型（name: str, price: float, description: str = ""）
class Product(???):
    ???

# 创建 POST /products 路由，接收 Product 类型参数
`,
        hints: [
          'class Product(BaseModel): 定义模型',
          'name: str 定义字符串字段',
          '路由参数写 product: Product'
        ],
        code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Product(BaseModel):
    name: str
    price: float
    description: str = ""

@app.post("/products")
async def create_product(product: Product):
    return {"message": "创建成功", "product": product.dict()}`,
        verification: '使用了 Pydantic 模型验证请求体',
        filePath: 'main.py',
        cognitiveLoad: 'medium',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
    id: 'fastapi-advanced',
    name: '阶段三：FastAPI 进阶',
    description: '掌握错误处理、中间件、依赖注入等高级特性',
    levels: [
      {
        id: 'py-10',
        number: 10,
        title: '响应模型',
        concept: 'response_model',
        difficulty: 'medium',
        task: '用 response_model 过滤返回字段',
        prerequisites: `<h4>🐍 响应模型</h4>
<p><code>response_model</code> 控制返回数据的结构：</p>
<pre><code>@app.get("/users/{id}", response_model=UserOut)
async def get_user(id: int):
    return {"id": id, "name": "Alice", "password": "secret"}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>响应模型自动过滤多余字段</li>
  <li>可以隐藏敏感信息（如密码）</li>
  <li>保证返回数据格式一致</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义响应模型
用 BaseModel 定义只包含需要返回的字段。

步骤 2 — 在路由中使用 response_model
装饰器中添加 response_model 参数。

步骤 3 — 测试过滤效果
返回的数据只包含响应模型定义的字段。`,
        contextCode: `# response_model 用法参考
from pydantic import BaseModel

class UserOut(BaseModel):
    id: int
    name: str
    # 不包含 password 字段

class UserIn(BaseModel):
    name: str
    password: str

@app.post("/users", response_model=UserOut)
async def create_user(user: UserIn):
    # 虽然返回包含 password
    # 但响应只包含 id 和 name
    return {"id": 1, "name": user.name, "password": "secret"}

# 响应模型自动过滤多余字段，隐藏敏感信息`,
        starterCode: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# 定义 UserOut 模型，只包含 id: int 和 name: str
class UserOut(???):
    ???

# 创建路由，用 response_model=UserOut 过滤返回字段
# 返回包含 password 的数据，但响应中不应出现
`,
        hints: [
          '定义 UserOut 模型只包含 id 和 name',
          '路由装饰器加 response_model=UserOut',
          '函数返回完整数据，自动过滤'
        ],
        code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class UserOut(BaseModel):
    id: int
    name: str

@app.get("/users/{id}", response_model=UserOut)
async def get_user(id: int):
    return {"id": id, "name": "Alice", "password": "secret123"}`,
        verification: '使用了 response_model 过滤返回字段',
        filePath: 'main.py',
        cognitiveLoad: 'medium',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
        id: 'py-11',
        number: 11,
        title: '错误处理',
        concept: 'HTTPException',
        difficulty: 'medium',
        task: '实现自定义错误响应',
        prerequisites: `<h4>🐍 错误处理</h4>
<p>用 <code>HTTPException</code> 抛出 HTTP 错误：</p>
<pre><code>from fastapi import HTTPException

@app.get("/users/{id}")
async def get_user(id: int):
    if id not in users:
        raise HTTPException(status_code=404, detail="用户不存在")
    return users[id]
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>status_code</code> — HTTP 状态码</li>
  <li><code>detail</code> — 错误详情</li>
  <li><code>@app.exception_handler</code> — 全局错误处理</li>
</ul>`,
        conceptDetail: `步骤 1 — 导入 HTTPException
从 fastapi 导入异常类。

步骤 2 — 在业务逻辑中抛出异常
条件不满足时 raise HTTPException。

步骤 3 — 指定状态码和详情
404 表示未找到，400 表示请求错误等。`,
        contextCode: `# HTTPException 用法参考
from fastapi import HTTPException

# 基本用法
raise HTTPException(status_code=404, detail="用户不存在")

# 带自定义头
raise HTTPException(
    status_code=401,
    detail="未授权",
    headers={"WWW-Authenticate": "Bearer"}
)

# 常用状态码
# 400 - 请求错误
# 401 - 未授权
# 403 - 禁止访问
# 404 - 未找到
# 422 - 验证错误
# 500 - 服务器错误`,
        starterCode: `from fastapi import FastAPI, HTTPException

app = FastAPI()
items = {"1": "手机", "2": "电脑"}

# 创建 GET /items/{item_id} 路由
# 判断 item_id 是否存在，不存在时抛出 HTTPException（404）
# 存在时返回商品信息
`,
        hints: [
          'if item_id not in items: 判断是否存在',
          'raise HTTPException(status_code=404, detail="未找到")',
          'return items[item_id] 返回数据'
        ],
        code: `from fastapi import FastAPI, HTTPException

app = FastAPI()
items = {"1": "手机", "2": "电脑"}

@app.get("/items/{item_id}")
async def get_item(item_id: str):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="商品不存在")
    return {"item_id": item_id, "name": items[item_id]}`,
        verification: '使用了 HTTPException 处理错误情况',
        filePath: 'main.py',
        cognitiveLoad: 'medium',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
        id: 'py-12',
        number: 12,
        title: '中间件',
        concept: 'Middleware',
        difficulty: 'hard',
        task: '添加请求耗时统计中间件',
        prerequisites: `<h4>🐍 中间件</h4>
<p>中间件在每个请求前后执行：</p>
<pre><code>import time

@app.middleware("http")
async def add_process_time(request, call_next):
    start = time.time()
    response = await call_next(request)
    process_time = time.time() - start
    response.headers["X-Process-Time"] = str(process_time)
    return response
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li>中间件包装所有请求</li>
  <li><code>call_next</code> — 调用下一个处理器</li>
  <li>可以修改请求和响应</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义中间件函数
用 @app.middleware("http") 装饰器。

步骤 2 — 记录开始时间
在调用下一个处理器前记录时间。

步骤 3 — 计算耗时并添加到响应头
处理完成后计算时间差，添加到响应头。`,
        contextCode: `# 中间件写法参考
import time
from fastapi import FastAPI, Request
from starlette.middleware.base import BaseHTTPMiddleware

app = FastAPI()

# 方式一：装饰器
@app.middleware("http")
async def add_process_time(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    process_time = time.time() - start
    response.headers["X-Process-Time"] = str(process_time)
    return response

# 方式二：类继承
class TimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        start = time.time()
        response = await call_next(request)
        response.headers["X-Time"] = str(time.time() - start)
        return response

app.add_middleware(TimingMiddleware)`,
        starterCode: `import time
from fastapi import FastAPI, Request

app = FastAPI()

# 用 @app.middleware("http") 创建中间件
# 记录请求开始时间
# 调用 call_next(request) 处理请求
# 计算耗时，添加到响应头 X-Process-Time
`,
        hints: [
          'start = time.time() 记录开始时间',
          'response = await call_next(request) 处理请求',
          'response.headers["X-Time"] = str(time.time() - start)'
        ],
        code: `import time
from fastapi import FastAPI, Request

app = FastAPI()

@app.middleware("http")
async def process_time(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    process_time = time.time() - start
    response.headers["X-Process-Time"] = str(round(process_time, 4))
    return response`,
        verification: '添加了中间件统计请求耗时',
        filePath: 'main.py',
        cognitiveLoad: 'high',
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
          'title': '搭建结构',
          'verification': 'const',
          'hint': '编写基础结构'
         },
         {
          'id': 'step-2',
          'title': '实现功能',
          'verification': 'function',
          'hint': '实现核心逻辑'
         },
         {
          'id': 'step-3',
          'title': '验证结果',
          'verification': 'console.log',
          'hint': '输出验证'
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
]
