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
          'title': '调用 print 函数',
          'verification': 'print(',
          'hint': 'print() 是 Python 内置输出函数',
          docLinks: [{title: 'Python print()', url: 'https://docs.python.org/zh-cn/3/library/functions.html#print'}, {title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '输出字符串',
          'verification': '"Hello, Python!"',
          'hint': '字符串用引号包裹，双引号单引号均可',
          docLinks: [{title: 'Python print()', url: 'https://docs.python.org/zh-cn/3/library/functions.html#print'}, {title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '闭合括号',
          'verification': ')',
          'hint': 'print 函数括号闭合表示函数调用结束',
          docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
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
        ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        dependsOn: ['py-1'],
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
          'title': '创建字符串变量',
          'verification': 'name = "Alice"',
          'hint': 'name = "Alice" 字符串变量赋值',
          docLinks: [{title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}],
         },
         {
          'id': 'step-2',
          'title': '创建数字变量',
          'verification': 'age = 25',
          'hint': '整数和浮点数直接赋值，不需要引号',
          docLinks: [{title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '查看变量类型',
          'verification': 'type(',
          'hint': 'type() 查看变量类型，验证赋值结果',
          docLinks: [{title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        dependsOn: ['py-2'],
        commonMistakes: [
         {
          'pattern': 'def',
          'explanation': '定义函数用 def 关键字，不需要 function'
         },
         {
          'pattern': 'return',
          'explanation': 'return 后不需要分号，缩进用 4 个空格'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '定义函数',
          'verification': 'def add(a, b):',
          'hint': 'def 关键字定义函数，参数放在括号中',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}],
         },
         {
          'id': 'step-2',
          'title': '返回结果',
          'verification': 'return a + b',
          'hint': 'return 语句返回计算结果',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}],
         },
         {
          'id': 'step-3',
          'title': '调用并打印',
          'verification': 'print(result)',
          'hint': '调用函数后 print 输出结果到控制台',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '为函数添加默认参数和关键字参数 **kwargs',
          'target': '理解参数灵活性'
         }
        ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        dependsOn: ['py-3'],
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
          'title': '用 for 循环遍历',
          'verification': 'for i in range(1, 11):',
          'hint': 'range(1, 11) 生成 1 到 10 的整数序列',
          docLinks: [{title: 'Python 流程控制', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html'}],
         },
         {
          'id': 'step-2',
          'title': '用 if 判断偶数',
          'verification': 'if i % 2 == 0:',
          'hint': '% 取模运算符，i % 2 == 0 表示偶数',
          docLinks: [{title: 'Python 流程控制', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html'}],
         },
         {
          'id': 'step-3',
          'title': '收集结果',
          'verification': 'even_numbers.append',
          'hint': '列表的 append 方法添加符合条件的元素',
          docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        dependsOn: ['py-4'],
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
          'title': '创建列表',
          'verification': '\'[',
          'hint': '列表用方括号 []，元素用逗号分隔',
          docLinks: [{title: 'Python 数据结构', url: 'https://docs.python.org/zh-cn/3/tutorial/datastructures.html'}],
         },
         {
          'id': 'step-2',
          'title': '创建字典',
          'verification': '\':',
          'hint': '字典用花括号 {}，键值对用冒号分隔',
          docLinks: [{title: 'Python 数据结构', url: 'https://docs.python.org/zh-cn/3/tutorial/datastructures.html'}],
         },
         {
          'id': 'step-3',
          'title': '增删改查',
          'verification': '.append(',
          'hint': '列表的 append/remove 方法操作数据',
          docLinks: [{title: 'Python 数据结构', url: 'https://docs.python.org/zh-cn/3/tutorial/datastructures.html'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        dependsOn: ['py-5'],
        commonMistakes: [
         {
          'pattern': 'from fastapi',
          'explanation': 'FastAPI 导入 from fastapi import FastAPI，不需要 require'
         },
         {
          'pattern': 'app.get',
          'explanation': 'FastAPI 用装饰器 @app.get() 注册路由，不用 app.get()'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '导入 FastAPI',
          'verification': 'from fastapi import FastAPI',
          'hint': 'FastAPI() 创建应用实例',
          docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-2',
          'title': '注册路由',
          'verification': '@app.get(',
          'hint': '@app.get("/hello") 装饰器注册 GET 端点',
          docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-3',
          'title': '返回 JSON',
          'verification': 'return {',
          'hint': '直接 return 字典，FastAPI 自动转 JSON',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
        ],
        variations: [
         {
          'name': '异步 async def',
          'description': 'FastAPI 路由函数用 async def 支持并发'
         }
        ],
        transferTasks: [
         {
          'task': '添加一个 POST 端点接收 JSON 请求体',
          'target': '理解不同 HTTP 方法'
         }
        ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        filePath: 'routers/users.py',
        cognitiveLoad: 'medium',
        dependsOn: ['py-6'],
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
          'title': '定义路径参数',
          'verification': '{user_id}',
          'hint': '{user_id} 路径中的动态参数段',
          docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-2',
          'title': '类型提示',
          'verification': 'user_id: int',
          'hint': 'user_id: int 声明参数类型，FastAPI 自动转换',
          docLinks: [{title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '返回参数值',
          'verification': 'return {"user_id": user_id}',
          'hint': 'return 字典形式的响应数据',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        filePath: 'routers/items.py',
        cognitiveLoad: 'medium',
        dependsOn: ['py-7'],
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
          'title': '声明查询参数',
          'verification': 'page: int',
          'hint': '函数参数自动成为查询参数',
          docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-2',
          'title': '设置默认值',
          'verification': 'size: int = 10',
          'hint': '默认值为 0，客户端可省略',
          docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-3',
          'title': '分页返回',
          'verification': 'return {"items"',
          'hint': '返回 items 列表和 total 总数',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        filePath: 'routers/products.py',
        cognitiveLoad: 'medium',
        dependsOn: ['py-8'],
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
          'title': '定义 Pydantic 模型',
          'verification': 'class Product(BaseModel):',
          'hint': '继承 BaseModel 定义请求体结构',
          docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-2',
          'title': '声明字段类型',
          'verification': 'name: str',
          'hint': '类型注解声明必填字段类型',
          docLinks: [{title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}],
         },
         {
          'id': 'step-3',
          'title': '请求体参数',
          'verification': 'product: Product',
          'hint': '函数参数声明为 Pydantic 模型',
          docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        filePath: 'schemas/user.py',
        cognitiveLoad: 'medium',
        dependsOn: ['py-9'],
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
          'title': '声明 response_model',
          'verification': 'response_model',
          'hint': 'response_model 过滤敏感字段',
          docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-2',
          'title': '定义输出模型',
          'verification': 'class UserOut(BaseModel):',
          'hint': '只包含需要返回的字段',
          docLinks: [{title: 'Python print()', url: 'https://docs.python.org/zh-cn/3/library/functions.html#print'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
         {
          'id': 'step-3',
          'title': '返回实体',
          'verification': '"id": id',
          'hint': '实际返回的数据会被 response_model 过滤',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        filePath: 'routers/errors.py',
        cognitiveLoad: 'medium',
        dependsOn: ['py-10'],
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
          'title': '导入 HTTPException',
          'verification': 'HTTPException',
          'hint': 'HTTPException 用于返回 HTTP 错误',
          docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}, {title: 'FastAPI 错误处理', url: 'https://fastapi.tiangolo.com/zh/tutorial/handling-errors/'}],
         },
         {
          'id': 'step-2',
          'title': '抛出异常',
          'verification': 'raise HTTPException',
          'hint': 'raise 抛出错误，中断请求处理',
          docLinks: [{title: 'FastAPI 错误处理', url: 'https://fastapi.tiangolo.com/zh/tutorial/handling-errors/'}],
         },
         {
          'id': 'step-3',
          'title': '设置状态码',
          'verification': 'status_code=404',
          'hint': '404 表示资源不存在，400 表示参数错误',
          docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
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
        filePath: 'middleware/timing.py',
        cognitiveLoad: 'high',
        dependsOn: ['py-11'],
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
          'title': '注册中间件',
          'verification': '@app.middleware("http")',
          'hint': '"http" 中间件拦截所有 HTTP 请求',
          docLinks: [{title: 'FastAPI 中间件', url: 'https://fastapi.tiangolo.com/zh/tutorial/middleware/'}],
         },
         {
          'id': 'step-2',
          'title': '调用下一个处理器',
          'verification': 'await call_next(request)',
          'hint': 'call_next 将请求转发给下一个中间件或路由',
          docLinks: [{title: 'Python 函数定义', url: 'https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions'}],
         },
         {
          'id': 'step-3',
          'title': '统计耗时',
          'verification': 'process_time',
          'hint': '处理前后记录时间，计算差值',
          docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
         },
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
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
      }
    ]
  }
,
{
    id: 'ecommerce-api',
    name: '阶段四：电商 API 开发',
    description: '综合运用 FastAPI 技能，为电商系统构建完整的 REST API 后端',
    levels: [
            {
              id: 'py-13',
              number: 13,
              type: 'project',
              project: 'ecommerce',
              projectModule: '项目初始化',
              title: 'FastAPI 项目结构',
              concept: 'FastAPI 项目组织',
              difficulty: 'easy',
              task: '搭建电商后端项目结构：创建 main.py（应用入口）、routers/（路由模块）、models/（数据模型）、schemas/（校验模式）',
              prerequisites: '<h4>📚 FastAPI 应用结构</h4><p>大型 FastAPI 项目按模块分包组织：<code>routers/</code>（路由）、<code>models/</code>（模型）、<code>schemas/</code>（模式）、<code>core/</code>（核心配置）。</p>',
              conceptDetail: 'FastAPI 使用 APIRouter 实现模块化路由注册，通过 include_router 在 main.py 中聚合。',
              contextCode: '',
              hints: [
                '创建 routers/products.py 等路由模块',
                'APIRouter(prefix="/api/products") 加前缀',
                'app.include_router(products.router, prefix="/api")'
              ],
              code: 'from fastapi import FastAPI\nfrom routers import products, orders, cart, auth\n\napp = FastAPI(title="电商系统 API", version="1.0.0")\n\napp.include_router(products.router, prefix="/api")\napp.include_router(cart.router, prefix="/api")\napp.include_router(orders.router, prefix="/api")\napp.include_router(auth.router, prefix="/api")\n\n@app.get("/")\ndef root():\n    return {"message": "电商系统 API 服务运行中"}',
              verification: 'main.py 包含 APIRouter 导入和 include_router 挂载',
              filePath: 'app/main.py',
              projectFiles: {
                'app/main.py': '',
                'app/routers/__init__.py': '',
                'app/models/__init__.py': '',
                'app/schemas/__init__.py': ''
              },
              cognitiveLoad: 'low',
              dependsOn: ['py-12'],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '创建应用入口',
                  'verification': 'FastAPI',
                  'hint': '用 FastAPI() 创建应用实例',
                 docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-2',
                  'title': '导入路由模块',
                  'verification': 'include_router',
                  'hint': '用 include_router 注册路由模块',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-3',
                  'title': '创建项目结构',
                  'verification': 'routers',
                  'hint': '创建 routers/models/schemas 包目录',
                 docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                }
              ],
              variations: [
                {
                  name: '蓝本模式',
                  description: 'Flask 中的 Blueprint 对应 FastAPI 的 APIRouter'
                }
              ],
              transferTasks: [
                {
                  task: '对比 Flask 和 FastAPI 的路由组织方式',
                  target: '理解不同框架的模块化设计'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            },
            {
              id: 'py-14',
              number: 14,
              type: 'project',
              project: 'ecommerce',
              projectModule: '商品管理',
              title: '商品模型与 CRUD',
              concept: 'SQLAlchemy ORM',
              difficulty: 'medium',
              task: '定义 Product 模型（id/name/price/stock/description/image）并实现 CRUD API 端点',
              prerequisites: '<h4>📚 SQLAlchemy 模型定义</h4><p><code>Column()</code> 定义字段类型，<code>relationship()</code> 定义关联关系，<code>Base</code> 是模型基类。</p>',
              conceptDetail: 'SQLAlchemy 使用 declarative base 定义模型，通过 Session 执行查询。Pydantic 模式配合 FastAPI 自动生成文档。',
              contextCode: '',
              hints: [
                'Column(Integer, primary_key=True, index=True) 主键',
                '使用 Pydantic 的 BaseModel 定义请求/响应模式',
                'GET /api/products 列表，GET /api/products/{id} 详情，POST /api/products 创建'
              ],
              code: 'from sqlalchemy import Column, Integer, String, Float\nfrom database import Base\n\nclass Product(Base):\n    __tablename__ = "products"\n    id = Column(Integer, primary_key=True, index=True)\n    name = Column(String(100), nullable=False)\n    price = Column(Float, nullable=False)\n    stock = Column(Integer, default=0)\n    description = Column(String(500))\n    image = Column(String(200))',
              verification: 'Product 模型包含 id/name/price/stock 字段，定义了 CRUD API 路由',
              filePath: 'app/models/product.py',
              projectFiles: {
                'app/models/product.py': '',
                'app/schemas/product.py': '',
                'app/routers/products.py': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'py-13'
              ],
              commonMistakes: [
                {
                  pattern: 'primary_key',
                  explanation: '主键字段需要 primary_key=True 和 index=True'
                },
                {
                  pattern: 'Base',
                  explanation: '模型类需要继承 declarative_base() 返回的 Base'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '定义 Product 模型',
                  'verification': 'Column(Integer',
                  'hint': '用 Column 定义数据库字段',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-2',
                  'title': '定义 Pydantic 模式',
                  'verification': 'Column',
                  'hint': '定义请求和响应的校验模式',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-3',
                  'title': '实现 CRUD 路由',
                  'verification': '__tablename__',
                  'hint': '实现商品列表/详情/创建 API',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                }
              ],
              variations: [
                {
                  name: 'MongoEngine',
                  description: 'MongoDB 的 ODM 类似 SQLAlchemy 的 ORM'
                }
              ],
              transferTasks: [
                {
                  task: '添加 Category 模型并与 Product 建立外键关联',
                  target: '掌握模型关联'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            },
            {
              id: 'py-15',
              number: 15,
              type: 'project',
              project: 'ecommerce',
              projectModule: '用户认证',
              title: '用户注册与 JWT 认证',
              concept: 'JWT 认证',
              difficulty: 'medium',
              task: '实现用户注册/登录 API，使用 JWT Token 鉴权保护商品管理接口',
              prerequisites: '<h4>📚 JWT 结构</h4><p>JWT（JSON Web Token）由三部分组成：Header（头部）+ Payload（载荷）+ Signature（签名）。</p>',
              conceptDetail: 'JWT 是无状态认证方案，使用 jose 库创建和验证。OAuth2PasswordBearer 是 FastAPI 内置的认证方案。依赖注入通过 Depends 实现。',
              contextCode: '',
              hints: [
                'python-jose 库用于 JWT 创建和验证',
                'OAuth2PasswordBearer(tokenUrl="/api/auth/login")',
                '密码用 passlib 库的 bcrypt 哈希存储'
              ],
              code: 'from jose import jwt\nfrom datetime import datetime, timedelta\nimport os\n\nSECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")\nALGORITHM = "HS256"\nACCESS_TOKEN_EXPIRE = 30\n\ndef create_access_token(data: dict):\n    to_encode = data.copy()\n    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE)\n    to_encode.update({"exp": expire})\n    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)\n\ndef verify_token(token: str):\n    try:\n        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])\n        return payload\n    except:\n        return None',
              verification: '实现 create_access_token 和 verify_token 函数，用户注册/登录端点使用 JWT',
              filePath: 'app/core/security.py',
              projectFiles: {
                'app/core/security.py': '',
                'app/core/__init__.py': '',
                'app/routers/auth.py': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'py-13'
              ],
              commonMistakes: [
                {
                  pattern: 'SECRET_KEY',
                  explanation: 'SECRET_KEY 必须在环境变量中配置，不能硬编码'
                },
                {
                  pattern: 'jwt.decode',
                  explanation: 'jwt.decode 需要指定 algorithms=[ALGORITHM] 参数'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '创建 JWT Token',
                  'verification': 'jwt.encode',
                  'hint': '用 jose 创建并签名 JWT',
                 docLinks: [{title: 'JWT 认证', url: 'https://fastapi.tiangolo.com/zh/tutorial/security/'}],
                },
                {
                  'id': 'step-2',
                  'title': '验证 Token',
                  'verification': 'jwt.decode',
                  'hint': '解码并验证 token 有效性',
                 docLinks: [{title: 'JWT 认证', url: 'https://fastapi.tiangolo.com/zh/tutorial/security/'}],
                },
                {
                  'id': 'step-3',
                  'title': '注册认证路由',
                  'verification': 'create_access_token',
                  'hint': '注册登录端点返回 token',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}, {title: 'JWT 认证', url: 'https://fastapi.tiangolo.com/zh/tutorial/security/'}],
                }
              ],
              variations: [
                {
                  name: 'OAuth2 + Google',
                  description: '集成 Google OAuth2 第三方登录'
                }
              ],
              transferTasks: [
                {
                  task: '实现 Token 刷新和过期自动续期',
                  target: '理解 refresh token 机制'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            },
            {
              id: 'py-16',
              number: 16,
              type: 'project',
              project: 'ecommerce',
              projectModule: '购物车',
              title: '购物车 API',
              concept: '关联查询',
              difficulty: 'medium',
              task: '实现购物车功能：添加商品、更新数量、删除商品、查看购物车，涉及用户与商品的多对多关联',
              prerequisites: '<h4>📚 多对多关联</h4><p>购物车是典型的多对多关系：一个用户有多个商品，一个商品可被多个用户加入购物车。</p>',
              conceptDetail: 'SQLAlchemy 使用 relationship 建立关联，通过 ForeignKey 实现外键约束。CartItem 作为关联表记录用户与商品的关联和数量。',
              contextCode: '',
              hints: [
                'CartItem 模型包含 user_id, product_id, quantity 字段',
                'ForeignKey("products.id") 引用商品表',
                '关联查询用 relationship + back_populates'
              ],
              code: 'from sqlalchemy import Column, Integer, ForeignKey\nfrom sqlalchemy.orm import relationship\nfrom database import Base\n\nclass CartItem(Base):\n    __tablename__ = "cart_items"\n    id = Column(Integer, primary_key=True, index=True)\n    user_id = Column(Integer, ForeignKey("users.id"))\n    product_id = Column(Integer, ForeignKey("products.id"))\n    quantity = Column(Integer, default=1)\n\n    user = relationship("User", back_populates="cart_items")\n    product = relationship("Product")',
              verification: 'CartItem 模型包含 user_id/product_id/quantity 字段，API 支持增删改查',
              filePath: 'app/models/cart.py',
              projectFiles: {
                'app/models/cart.py': '',
                'app/routers/cart.py': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'py-14',
                'py-15'
              ],
              commonMistakes: [
                {
                  pattern: 'ForeignKey',
                  explanation: 'ForeignKey 参数格式: "表名.字段名"'
                },
                {
                  pattern: 'back_populates',
                  explanation: '两端 relationship 要互相指定 back_populates'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '定义 CartItem 模型',
                  'verification': 'ForeignKey',
                  'hint': '定义含 user_id/product_id/quantity 的模型',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-2',
                  'title': '添加商品到购物车',
                  'verification': 'CartItem(',
                  'hint': '创建新购物车条目记录',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-3',
                  'title': '更新和删除',
                  'verification': 'quantity',
                  'hint': '实现数量更新和商品删除',
                 docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                }
              ],
              variations: [
                {
                  name: 'Redis 缓存',
                  description: '用 Redis 缓存购物车数据提高性能'
                }
              ],
              transferTasks: [
                {
                  task: '添加购物车商品数量上限校验',
                  target: '掌握请求校验和错误处理'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            },
            {
              id: 'py-17',
              number: 17,
              type: 'project',
              project: 'ecommerce',
              projectModule: '订单系统',
              title: '订单创建与查询',
              concept: '事务处理',
              difficulty: 'hard',
              task: '实现订单创建（从购物车生成订单）、订单列表、订单详情 API，包含事务处理和库存扣减',
              prerequisites: '<h4>📚 数据库事务</h4><p>事务保证一组操作要么全部成功要么全部回滚。<code>begin()</code> 开始事务，<code>commit()</code> 提交，<code>rollback()</code> 回滚。</p>',
              conceptDetail: '事务使用 ACID 特性保证数据一致性。Session.begin() 上下文管理器自动管理事务。OrderItem 记录下单时商品信息快照。库存扣减必须在事务中完成。',
              contextCode: '',
              hints: [
                'Order 模型包含 user_id, total_amount, status, created_at',
                '事务中用 db.begin() 或 with db.begin()',
                '扣减库存后检查是否出现负数（库存不足回滚）'
              ],
              code: 'from sqlalchemy import Column, Integer, Float, String, DateTime, ForeignKey\nfrom sqlalchemy.orm import relationship\nfrom database import Base\nfrom datetime import datetime\n\nclass Order(Base):\n    __tablename__ = "orders"\n    id = Column(Integer, primary_key=True, index=True)\n    user_id = Column(Integer, ForeignKey("users.id"))\n    total_amount = Column(Float, nullable=False)\n    status = Column(String(20), default="pending")\n    created_at = Column(DateTime, default=datetime.utcnow)\n\n    items = relationship("OrderItem", back_populates="order")\n\nclass OrderItem(Base):\n    __tablename__ = "order_items"\n    id = Column(Integer, primary_key=True, index=True)\n    order_id = Column(Integer, ForeignKey("orders.id"))\n    product_id = Column(Integer, ForeignKey("products.id"))\n    product_name = Column(String(100))\n    price = Column(Float)\n    quantity = Column(Integer)\n\n    order = relationship("Order", back_populates="items")',
              verification: 'Order 和 OrderItem 模型正确，订单创建使用事务并扣减库存',
              filePath: 'app/models/order.py',
              projectFiles: {
                'app/models/order.py': '',
                'app/routers/orders.py': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'py-15',
                'py-16'
              ],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '定义订单模型',
                  'verification': 'Order(Base)',
                  'hint': '定义 Order 和 OrderItem 模型',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-2',
                  'title': '创建订单事务',
                  'verification': 'relationship',
                  'hint': '在事务中创建订单并扣减库存',
                 docLinks: [{title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-3',
                  'title': '查询订单列表',
                  'verification': 'user_id',
                  'hint': '根据用户 ID 查询订单列表',
                 docLinks: [{title: 'Python 数据结构', url: 'https://docs.python.org/zh-cn/3/tutorial/datastructures.html'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                }
              ],
              variations: [
                {
                  name: 'Celery 异步',
                  description: '大订单用 Celery 异步处理'
                }
              ],
              transferTasks: [
                {
                  task: '实现订单状态机（待支付→已支付→已发货→已完成）',
                  target: '掌握状态管理模式'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            },
            {
              id: 'py-18',
              number: 18,
              type: 'project',
              project: 'ecommerce',
              projectModule: '数据校验',
              title: 'Pydantic 数据校验',
              concept: 'Pydantic 模式',
              difficulty: 'medium',
              task: '为所有 API 端点编写 Pydantic 请求/响应模式，包含字段校验和自定义验证器',
              prerequisites: '<h4>📚 Pydantic 校验</h4><p>Pydantic 使用 Python 类型注解做数据校验。<code>Field()</code> 定义额外约束，<code>@validator</code> 自定义校验逻辑。</p>',
              conceptDetail: 'Pydantic V2 使用 Field 定义校验规则，model_validator 做跨字段验证。Field 支持 gt/ge/lt/le 数值约束。',
              contextCode: '',
              hints: [
                'Field(gt=0) 确保价格大于 0',
                '@field_validator("name") 自定义 name 校验',
                'model_config = ConfigDict(from_attributes=True) 支持 ORM 模式'
              ],
              code: 'from pydantic import BaseModel, Field\nfrom typing import Optional\n\nclass ProductCreate(BaseModel):\n    name: str = Field(..., min_length=1, max_length=100)\n    price: float = Field(..., gt=0, le=100000)\n    stock: int = Field(default=0, ge=0)\n    description: Optional[str] = Field(None, max_length=500)\n    image: Optional[str] = None\n\nclass ProductResponse(ProductCreate):\n    id: int\n\n    model_config = ConfigDict(from_attributes=True)',
              verification: 'Pydantic 模式包含 Field 约束和 ConfigDict 配置',
              filePath: 'app/schemas/product.py',
              projectFiles: {
                'app/schemas/product.py': '',
                'app/schemas/order.py': '',
                'app/schemas/cart.py': '',
                'app/schemas/user.py': ''
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'py-14',
                'py-15'
              ],
              commonMistakes: [
                {
                  pattern: 'ConfigDict',
                  explanation: 'Pydantic V2 用 ConfigDict 替代 class Config'
                },
                {
                  pattern: 'from_attributes',
                  explanation: 'from_attributes=True 允许从 ORM 模型创建 Pydantic 实例'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '定义输入模式',
                  'verification': 'Field(',
                  'hint': '用 Field 定义字段校验约束',
                 docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-2',
                  'title': '自定义验证器',
                  'verification': 'gt=0',
                  'hint': '用 @field_validator 自定义校验',
                 docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                },
                {
                  'id': 'step-3',
                  'title': '配置 ORM 模式',
                  'verification': 'from_attributes',
                  'hint': '配置 ConfigDict(from_attributes=True)',
                 docLinks: [{title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/'}, {title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/'}],
                }
              ],
              variations: [
                {
                  name: 'marshmallow',
                  description: 'Flask 生态的序列化库，功能类似 Pydantic'
                }
              ],
              transferTasks: [
                {
                  task: '添加商品批量创建端点接收数组',
                  target: '掌握列表校验'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            },
            {
              id: 'py-19',
              number: 19,
              type: 'project',
              project: 'ecommerce',
              projectModule: '测试',
              title: 'API 集成测试',
              concept: 'pytest + httpx',
              difficulty: 'hard',
              task: '为商品/用户/购物车/订单 API 编写 pytest 集成测试，使用 httpx 的 AsyncClient',
              prerequisites: '<h4>📚 pytest + FastAPI 测试</h4><p>FastAPI 提供 <code>TestClient</code> 基于 httpx，支持同步和异步测试。<code>fixture</code> 管理测试数据库和测试数据。</p>',
              conceptDetail: 'FastAPI 的 TestClient 基于 httpx，使用 pytest fixture 管理测试数据库。依赖覆盖替换数据库连接为测试库。',
              contextCode: '',
              hints: [
                'from fastapi.testclient import TestClient',
                '用 fixture 创建测试数据库（SQLite 内存模式）',
                '测试每个 API 的正常流程和异常流程'
              ],
              code: 'import pytest\nfrom fastapi.testclient import TestClient\nfrom main import app\n\nclient = TestClient(app)\n\ndef test_create_product():\n    response = client.post("/api/products", json={\n        "name": "测试商品",\n        "price": 99.9,\n        "stock": 100\n    })\n    assert response.status_code == 200\n    data = response.json()\n    assert data["name"] == "测试商品"\n\ndef test_get_products():\n    response = client.get("/api/products")\n    assert response.status_code == 200\n    assert isinstance(response.json(), list)\n\ndef test_product_not_found():\n    response = client.get("/api/products/9999")\n    assert response.status_code == 404',
              verification: '包含商品创建/列表/不存在的测试用例，使用 TestClient 和 pytest',
              filePath: 'tests/test_api.py',
              projectFiles: {
                'tests/test_api.py': '',
                'tests/__init__.py': '',
                'tests/conftest.py': ''
              },
              cognitiveLoad: 'high',
              dependsOn: [
                'py-18'
              ],
              commonMistakes: [
                {
                  pattern: 'TestClient',
                  explanation: 'TestClient(app) 传入 FastAPI 应用实例'
                },
                {
                  pattern: 'status_code',
                  explanation: '测试响应状态码用 response.status_code 获取'
                }
              ],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '创建 TestClient',
                  'verification': 'TestClient(app)',
                  'hint': '用 TestClient 创建测试客户端',
                 docLinks: [{title: 'FastAPI 测试', url: 'https://fastapi.tiangolo.com/zh/tutorial/testing/'}],
                },
                {
                  'id': 'step-2',
                  'title': '测试正常流程',
                  'verification': 'response.status_code',
                  'hint': '断言响应状态码为 200',
                 docLinks: [{title: 'FastAPI 测试', url: 'https://fastapi.tiangolo.com/zh/tutorial/testing/'}],
                },
                {
                  'id': 'step-3',
                  'title': '测试异常流程',
                  'verification': 'status_code == 404',
                  'hint': '测试不存在的资源返回 404',
                 docLinks: [{title: 'FastAPI 错误处理', url: 'https://fastapi.tiangolo.com/zh/tutorial/handling-errors/'}, {title: 'FastAPI 测试', url: 'https://fastapi.tiangolo.com/zh/tutorial/testing/'}],
                }
              ],
              variations: [
                {
                  name: 'unittest',
                  description: 'Python 标准库测试框架'
                }
              ],
              transferTasks: [
                {
                  task: '添加鉴权测试（需要 Token 的端点）',
                  target: '掌握认证测试技巧'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            },
            {
              id: 'py-20',
              number: 20,
              type: 'project',
              project: 'ecommerce',
              projectModule: '部署配置',
              title: '项目整合与部署配置',
              concept: '项目部署',
              difficulty: 'medium',
              task: '整合所有模块，配置 CORS 中间件、环境变量管理、数据库迁移脚本，准备部署',
              prerequisites: '<h4>📚 FastAPI 部署</h4><p>生产部署需要配置 CORS（跨域）、环境变量管理、数据库迁移。<code>uvicorn</code> 作为 ASGI 服务器运行应用。</p>',
              conceptDetail: 'CORS 跨域配置通过 add_middleware 注册。python-dotenv 管理环境变量。Alembic 管理数据库迁移脚本。',
              contextCode: '',
              hints: [
                'CORSMiddleware 配置 allow_origins=["http://localhost:5173"]',
                'python-dotenv 加载 .env 文件',
                'alembic init alembic 初始化迁移环境'
              ],
              code: 'from fastapi.middleware.cors import CORSMiddleware\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=["http://localhost:5173"],\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)\n\n# 启动命令：uvicorn app.main:app --host 0.0.0.0 --port 8000',
              verification: '配置了 CORS 中间件和环境变量管理，启动脚本正确',
              filePath: 'app/main.py',
              projectFiles: {
                '.env.example': '# DATABASE_URL=sqlite:///./ecommerce.db\n# SECRET_KEY=your-secret-key',
                Dockerfile: 'FROM python:3.11\nWORKDIR /app\nCOPY . .\nRUN pip install -r requirements.txt\nCMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]'
              },
              cognitiveLoad: 'medium',
              dependsOn: [
                'py-13',
                'py-14',
                'py-15',
                'py-18'
              ],
              commonMistakes: [],
              microSteps: [
                {
                  'id': 'step-1',
                  'title': '配置 CORS 中间件',
                  'verification': 'CORSMiddleware',
                  'hint': '用 add_middleware 配置跨域',
                 docLinks: [{title: 'FastAPI 中间件', url: 'https://fastapi.tiangolo.com/zh/tutorial/middleware/'}, {title: 'CORS 中间件', url: 'https://fastapi.tiangolo.com/zh/tutorial/cors/'}],
                },
                {
                  'id': 'step-2',
                  'title': '配置环境变量',
                  'verification': 'allow_origins',
                  'hint': '用环境变量管理敏感配置',
                 docLinks: [{title: 'Python 数据类型', url: 'https://docs.python.org/zh-cn/3/tutorial/intro.html'}, {title: 'SQLAlchemy 文档', url: 'https://docs.sqlalchemy.org/en/20/'}],
                },
                {
                  'id': 'step-3',
                  'title': '配置数据库迁移',
                  'verification': 'add_middleware',
                  'hint': '用 Alembic 管理数据库迁移脚本',
                 docLinks: [{title: 'SQLAlchemy 文档', url: 'https://docs.sqlalchemy.org/en/20/'}],
                }
              ],
              variations: [
                {
                  name: 'Docker Compose',
                  description: '用 docker-compose 编排前后端+数据库'
                }
              ],
              transferTasks: [
                {
                  task: '配置 GitHub Actions 自动测试和部署',
                  target: '掌握 CI/CD 流程'
                }
              ],
        docLinks: [
        { title: 'Python 3 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
        { title: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/zh/' },
        { title: 'FastAPI 入门指南', url: 'https://fastapi.tiangolo.com/zh/tutorial/' }
        ],
            }
    ]
  }
]
