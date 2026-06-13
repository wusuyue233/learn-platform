# Learn Platform 项目日志

## 项目概述
纯前端编程学习平台，基于 Vue3 + Monaco Editor，部署到 GitHub Pages。

- **项目路径**：`F:\D盘\Vue3\四期\learn-platform`
- **技术栈**：Vue3 + Pinia + Vite + Monaco Editor (CDN) + localStorage
- **部署目标**：GitHub Pages（纯静态，无后端）
- **创建时间**：2026-06-14

---

## 当前进度

### v0.1 MVP ✅ 已完成（2026-06-14）

| 步骤 | 内容 | 状态 |
|------|------|------|
| 1 | 创建项目、搭建框架 | ✅ |
| 2 | 迁移 CodeEditor/LevelModal 等组件 | ✅ |
| 3 | 实现浏览器端验证引擎 | ✅ |
| 4 | 打包 workspace 为 JSON 模块 | ⏭ 跳过（纯前端用 localStorage） |
| 5 | 迁移/创建关卡 | ✅ 46 个关卡 |
| 6 | 课程选择页 | ✅ |

### 关卡统计

| 课程 | 关卡数 | 阶段 | 难度分布 |
|------|--------|------|----------|
| Vue3 全栈 | 19 | 4 | easy 6 / medium 9 / hard 4 |
| Python + FastAPI | 12 | 3 | easy 5 / medium 5 / hard 2 |
| JavaScript 基础 | 15 | 4 | easy 6 / medium 8 / hard 1 |
| **合计** | **46** | **11** | |

---

## 项目结构

```
learn-platform/
├── src/
│   ├── framework/                    # 平台框架（一次开发，永久复用）
│   │   ├── components/
│   │   │   ├── CodeEditor.vue        # Monaco Editor 封装（CDN 加载）
│   │   │   ├── LevelModal.vue        # 关卡学习弹窗（核心组件）
│   │   │   ├── LevelCard.vue         # 关卡卡片
│   │   │   ├── PhaseSection.vue      # 阶段分组
│   │   │   ├── CourseSelector.vue    # 课程选择页
│   │   │   └── CourseView.vue        # 课程详情页
│   │   ├── stores/
│   │   │   └── progress.js           # 多课程进度管理（Pinia）
│   │   ├── utils/
│   │   │   ├── fileStore.js          # localStorage 文件读写
│   │   │   └── verifier.js           # 浏览器端验证引擎
│   │   └── router.js                 # Vue Router 配置
│   ├── courses/                      # 课程包目录（可扩展）
│   │   ├── index.js                  # 课程注册入口
│   │   ├── vue3-fullstack/           # Vue3 全栈（19 关卡）
│   │   │   ├── index.js
│   │   │   ├── levels.js
│   │   │   └── verify.js
│   │   ├── python-fastapi/           # Python + FastAPI（12 关卡）
│   │   │   ├── index.js
│   │   │   ├── levels.js
│   │   │   └── verify.js
│   │   └── javascript-basics/        # JavaScript 基础（15 关卡）
│   │       ├── index.js
│   │       ├── levels.js
│   │       └── verify.js
│   ├── assets/
│   │   └── styles/
│   │       └── main.css              # 全局样式
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

---

## 核心设计

### 课程包标准结构
每个课程是一个独立目录，包含 3 个文件：
- `index.js` — 课程元数据（id, name, icon, tags 等）
- `levels.js` — 关卡定义（phases → levels）
- `verify.js` — 验证规则（字符串匹配 + 正则）

### 关卡数据格式
```js
{
  id: 'vue3-1',           // 唯一 ID
  number: 1,              // 序号
  title: '第一个组件',     // 标题
  concept: 'Vue3 组件',   // 核心概念
  difficulty: 'easy',     // easy/medium/hard
  task: '...',            // 任务描述
  prerequisites: '...',   // HTML 格式预备知识
  conceptDetail: '...',   // 概念讲解（含 [label](search|tooltip) 标记）
  contextCode: '...',     // 上下文代码
  hints: ['...', '...'],  // 渐进式提示
  code: '...',            // 参考答案
  verification: '...',    // 验证说明
  filePath: '...'         // 文件路径
}
```

### 验证引擎
浏览器端字符串匹配，支持正则表达式：
```js
// verify.js 示例
export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'vue3-1':
      check('src/components/Hello.vue', 'Hello Vue3', '包含目标文本')
      break
  }
}
```

### 进度管理
- 多课程独立进度存储
- localStorage 持久化
- 支持导入/导出 JSON
- 阶段解锁：前一阶段完成 60% 解锁下一阶段

### Monaco Editor
- CDN 加载（jsdelivr + unpkg 备用）
- 双 CDN fallback
- 支持 50+ 语言语法高亮
- 高亮定位：indexOf + getPositionAt

---

## 关卡清单

### Vue3 全栈（19 关卡）

**阶段一：Vue3 基础（6 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| vue3-1 | 第一个组件 | Vue3 组件 | easy |
| vue3-2 | 按钮计数器 | 事件处理 | easy |
| vue3-3 | 条件渲染 | v-if / v-show | easy |
| vue3-4 | 列表渲染 | v-for 循环 | easy |
| vue3-5 | 表单绑定 | v-model 双向绑定 | easy |
| vue3-6 | 插槽入门 | slot 插槽 | medium |

**阶段二：组合式 API（5 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| vue3-7 | 计算属性 | computed | medium |
| vue3-8 | 侦听器 | watch | medium |
| vue3-9 | 生命周期钩子 | onMounted / onUnmounted | medium |
| vue3-10 | 组件通信 | props / emit | medium |
| vue3-11 | provide/inject | 依赖注入 | medium |

**阶段三：路由与状态管理（4 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| vue3-12 | Vue Router 基础 | 路由配置 | medium |
| vue3-13 | 动态路由 | 路由参数 | medium |
| vue3-14 | Pinia 状态管理 | Pinia Store | medium |
| vue3-15 | 状态持久化 | localStorage 持久化 | medium |

**阶段四：进阶特性（4 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| vue3-16 | 自定义指令 | v-directive | hard |
| vue3-17 | 组合式函数 | composable | hard |
| vue3-18 | 异步组件 | defineAsyncComponent | hard |
| vue3-19 | 性能优化 | shallowRef / v-once | hard |

### Python + FastAPI（12 关卡）

**阶段一：Python 基础（5 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| py-1 | Hello Python | print 输出 | easy |
| py-2 | 变量与类型 | 变量赋值 | easy |
| py-3 | 函数定义 | def 函数 | easy |
| py-4 | 条件与循环 | if / for | easy |
| py-5 | 列表与字典 | 数据结构 | easy |

**阶段二：FastAPI 路由（4 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| py-6 | Hello FastAPI | 路由注册 | easy |
| py-7 | 路径参数 | URL 参数 | medium |
| py-8 | 查询参数 | Query Parameters | medium |
| py-9 | 请求体 | Pydantic 模型 | medium |

**阶段三：FastAPI 进阶（3 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| py-10 | 响应模型 | response_model | medium |
| py-11 | 错误处理 | HTTPException | medium |
| py-12 | 中间件 | Middleware | hard |

### JavaScript 基础（15 关卡）

**阶段一：基础语法（5 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| js-1 | 变量声明 | let / const | easy |
| js-2 | 数据类型 | 原始类型 | easy |
| js-3 | 函数声明 | 函数定义 | easy |
| js-4 | 数组方法 | map / filter / reduce | medium |
| js-5 | 对象操作 | 对象解构 | medium |

**阶段二：ES6+ 特性（4 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| js-6 | 箭头函数 | Arrow Functions | medium |
| js-7 | 模板字符串 | Template Literals | easy |
| js-8 | 展开运算符 | Spread Operator | medium |
| js-9 | 解构赋值 | Destructuring | medium |

**阶段三：异步编程（3 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| js-10 | Promise 基础 | Promise | medium |
| js-11 | async/await | Async/Await | medium |
| js-12 | 错误处理 | try/catch | medium |

**阶段四：DOM 操作（3 关）**
| ID | 标题 | 概念 | 难度 |
|----|------|------|------|
| js-13 | 元素选择 | querySelector | easy |
| js-14 | 事件监听 | addEventListener | medium |
| js-15 | 动态创建元素 | createElement / appendChild | medium |

---

## 开发指南

### 添加新课程
1. 在 `src/courses/` 下创建新目录
2. 创建 `index.js`（元数据）、`levels.js`（关卡）、`verify.js`（验证）
3. 在 `src/courses/index.js` 中注册课程

### 添加新关卡
在对应课程的 `levels.js` 中添加关卡对象，格式见上方数据格式说明。

### 运行项目
```bash
cd F:\D盘\Vue3\四期\learn-platform
npm run dev
```

### 构建部署
```bash
npm run build
# dist/ 目录可部署到 GitHub Pages
```

---

## 与 shop-learn 的关系

- **来源**：基于 `F:\D盘\Vue3\三期\shop-learn` 的教学理念扩展
- **区别**：
  - shop-learn 绑定特定项目（shop-api/shop-admin/shop-mini）
  - learn-platform 纯前端，关卡自包含，不依赖外部目录
  - learn-platform 支持多课程，shop-learn 单课程
- **设计参考**：
  - ConceptDetail 标记语言 `[label](search|tooltip)`
  - LinkStatus 预检查（绿色/灰色）
  - 渐进式提示系统
  - Monaco Editor CDN 加载策略
  - 进度导入/导出/重置

---

## 待办事项

- [ ] 添加更多课程（React、TypeScript、SQL、Node.js、Git 等）
- [ ] 添加联合项目系统
- [ ] 优化移动端适配
- [ ] 添加暗色主题
- [ ] 添加代码运行预览（iframe sandbox）
- [ ] 配置 GitHub Actions 自动部署
