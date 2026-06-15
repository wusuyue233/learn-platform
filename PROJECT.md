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
| 5 | 迁移/创建关卡 | ✅ 131 个关卡（9 课程） |
| 6 | 课程选择页 | ✅ |

### Phase 1: 学习增强 ✅ 已完成（2026-06-15）

| 功能 | 文件 | 状态 |
|------|------|------|
| verifier 增强（explanation/fixHint/conceptLink + partialCheck + feedback） | `verifier.js` | ✅ |
| 关卡 Phase 1 字段（cognitiveLoad/dependsOn/commonMistakes/microSteps/variations/transferTasks） | 全部 9 课程 `levels.js` | ✅ |
| commonMistakes 实时红线检测 | `CodeEditor.vue` | ✅ |
| 微步模式（step-by-step toggle + progress dots + auto-verify） | `LevelModal.vue` + `progress.js` | ✅ |
| prereqs 检查 + microStep 追踪 | `progress.js` | ✅ |
| 阶段硬锁→软推荐（就绪度系统） | `CourseView.vue` + `PhaseSection.vue` + `LevelCard.vue` | ✅ |

### 关卡统计

| 课程 | 关卡数 | 阶段 | 难度分布 | 注册 |
|------|--------|------|----------|------|
| Vue3 全栈 | 29 | 5 | easy 7 / medium 16 / hard 6 | ✅ |
| Python + FastAPI | 20 | 4 | — | ✅ |
| JavaScript 基础 | 19 | 5 | — | ✅ |
| React 基础 | 20 | 4 | — | ✅ |
| TypeScript 基础 | 15 | 3 | — | ✅ |
| Java + Spring | 10 | 2 | — | ✅ |
| UniApp | 8 | 2 | — | ✅ |
| OpenCV | 8 | 2 | — | ✅ |
| PyTorch | 8 | 2 | — | ✅ |
| YOLO | 6 | 2 | — | ✅ |
| Nginx | 6 | 2 | — | ✅ |
| CI/CD | 6 | 2 | — | ✅ |
| Docker 容器化 | 10 | 3 | — | ✅ |
| Git 版本控制 | 10 | 3 | — | ✅ |
| Node.js + Express | 15 | 4 | — | ✅ |
| SQL 数据库 | 15 | 3 | — | ✅ |
| **合计** | **205+** | **48** | | **16/16 ✅** |

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
│   ├── courses/                      # 课程包目录（9 个课程）
│   │   ├── index.js                  # 项目定义（Phase 2）
│   │   └── projects/
│   │   # 课程注册入口
│   │   ├── vue3-fullstack/           # Vue3 全栈（19+? 关卡）
│   │   ├── python-fastapi/           # Python + FastAPI（12 关）
│   │   ├── javascript-basics/        # JavaScript 基础（15 关）
│   │   ├── react-basics/             # React 基础（20 关）
│   │   ├── typescript-basics/        # TypeScript 基础（15 关）
│   │   ├── docker-basics/            # Docker 容器化（10 关）
│   │   ├── git-basics/               # Git 版本控制（10 关）
│   │   ├── nodejs-express/           # Node.js + Express（15 关）
│   │   └── sql-basics/               # SQL 数据库（15 关）
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

### 关卡类型
- `type: 'concept'`（默认）— 概念式关卡，以知识点为中心组织
- `type: 'project'` — 项目式关卡，以真实项目代码片段为学习内容

### 就绪度系统（软推荐）
替代硬锁机制，三档推荐度：
| 等级 | 含义 | 行为 |
|------|------|------|
| `ready` | 已满足条件 | 正常解锁 |
| `recommended` | 建议先完成前置 | 可进入，显示推荐提示 |
| `early` | 提前预览 | 可点击预览（👁 + 预览标签） |

- 阶段级：`getPhaseReadiness()` — 基于前一阶段完成度
- 关卡级：`getLevelReadiness()` — 基于前一关完成度

### 进度管理
- 多课程独立进度存储
- localStorage 持久化
- 支持导入/导出 JSON
- 阶段解锁：前一阶段完成 60% 解锁下一阶段（软推荐）
- 关卡解锁：前一关完成后解锁下一关（软推荐）

### 项目系统
- 每个课程可关联一个或多个真实项目
- 项目型关卡的代码直接来自真实项目源码
- 完成项目关卡后，`projectFiles` 自动合入项目文件树
- 支持多课程组合成一个完整全栈项目

### Monaco Editor
- CDN 加载（jsdelivr + unpkg 备用）
- 双 CDN fallback
- 支持 50+ 语言语法高亮
- 高亮定位：indexOf + getPositionAt

---

## Phase 2 修改计划

### 动机

两个核心方向：
1. **项目驱动学习** — 现有关卡以孤立知识点为中心，新增项目型关卡让用户直接接触真实项目代码
2. **软推荐全面化** — 阶段级已实现就绪度推荐，关卡级仍是硬锁，需对齐

### 一、就绪度系统关卡级化（软推荐→关卡级）

**现状**：阶段级已有就绪度推荐（ready/recommended/early），但关卡级 `isLevelUnlocked()` 仍是硬锁

**改动文件**：
| 文件 | 改动 |
|------|------|
| `progress.js` | 新增 `getLevelReadiness()` 返回 `{level, unlocked, detail}` |
| `PhaseSection.vue` | 替换 `isLevelUnlocked` 为 `getLevelReadiness`，传入 `readiness` 替代 `unlocked` |
| `LevelCard.vue` | 接收 `readiness` prop，根据 `level` 显示对应状态和交互 |
| `main.css` | 补充关卡级 readiness 样式 |

**`getLevelReadiness()` 逻辑**：
```js
getLevelReadiness(courseId, levelId, phaseLevels) {
  const idx = phaseLevels.findIndex(l => l.id === levelId)
  if (idx <= 0) return { level: 'ready', unlocked: true }
  const prevDone = getCourseCompleted(courseId).includes(phaseLevels[idx-1].id)
  if (prevDone) return { level: 'ready', unlocked: true }
  // 前面有关卡完成 → recommended，全都未完成 → early
  const anyDone = phaseLevels.slice(0, idx).some(l => getCourseCompleted(courseId).includes(l.id))
  return anyDone
    ? { level: 'recommended', unlocked: false, detail: '建议先完成前置关卡' }
    : { level: 'early', unlocked: false, detail: '建议按顺序学习' }
}
```

### 二、项目定义系统

**新增 `src/projects/index.js`** — 定义所有真实项目和课程关联：

```js
export const projects = {
  ecommerce: {
    id: 'ecommerce',
    name: '电商系统',
    icon: '🛒',
    description: '完整全栈电商系统（Vue3 前端 + FastAPI 后端 + Docker 部署）',
    courses: ['vue3-fullstack', 'python-fastapi', 'docker-basics']
  },
  'chat-app': {
    id: 'chat-app',
    name: '实时聊天室',
    icon: '💬',
    description: '全栈实时聊天（React 前端 + Node.js/Express 后端）',
    courses: ['react-basics', 'nodejs-express']
  }
}
```

### 三、新关卡类型：`type: 'project'`

Level schema 扩展，**现有关卡完全不受影响**：

```js
// 现有关卡（默认 type: 'concept'）
{ id: 'vue3-1', number: 1, title: '第一个组件', ... }

// 新增项目型关卡
{
  id: 'vue3-proj-1', number: 1, type: 'project',
  project: 'ecommerce',           // 关联项目 ID
  projectModule: '商品模块',       // 项目模块名
  projectFiles: {                  // 本关贡献的文件
    'src/components/ProductCard.vue': `<template>...`
  },
  ... // 其余字段同 concept 关卡
}
```

### 四、代码累加系统

**`progress.js`** 改动：

| 新增内容 | 说明 |
|---------|------|
| `projectProgress` ref | `{ [courseId]: { files: {...}, lastLevel: '...' } }` |
| `mergeProjectFiles(courseId, levelId, files)` | 合并关卡文件到累加树 |
| `getProjectFiles(courseId)` | 获取课程累加的文件树 |
| `resetProject(courseId)` | 重置项目文件 |
| save/load/export/import | 全部包含 `projectProgress` |

**合并规则**：
- 新文件直接加入
- 已有文件被新版本覆盖（后续关卡的代码比前面的完整）

### 五、UI 改动

**`LevelModal.vue`**：

| 改动 | 说明 |
|------|------|
| 项目标签 | 项目型关卡顶部显示 🛒 电商系统 · 商品模块 |
| 项目文件 Tab | 新增「项目文件」Tab，显示文件树 |
| 文件查看器 | 点击文件名显示语法高亮代码 |
| 当前文件高亮 | 标记本关贡献的文件 |

### 六、修复课程注册

`courses/index.js` 补充 4 个缺失课程：docker-basics, git-basics, nodejs-express, sql-basics

### 七、试点：Vue3 电商项目实战阶段

在 Vue3 课程新增 Phase 5 "电商项目实战"，约 10 个 `type: 'project'` 关卡：
1. 项目脚手架搭建
2. 路由配置与布局
3. Pinia Store 状态管理
4. 商品列表页
5. 商品详情页
6. 购物车功能
7. 用户登录
8. 订单创建
9. 订单列表
10. 完整项目整合

### 八、项目设计方案

共 5 个项目，60 个 `type: 'project'` 关卡，原有 131 个 `type: 'concept'` 关卡完全不变。

#### 1. 🛒 电商系统（28 关，跨 4 课）

| 课程 | 项目关卡数 | 模块 |
|------|-----------|------|
| Vue3 全栈 | 10 | 前端搭建、路由布局、Store、商品列表/详情、购物车、登录、订单、整合 |
| Python + FastAPI | 8 | 项目初始化、商品/用户/购物车/订单 API、JWT 认证、集成测试 |
| SQL 数据库 | 5 | 表设计、CRUD、联表查询、索引优化、事务 |
| Docker 容器化 | 5 | Dockerfile、docker-compose（前后端+数据库）、多阶段构建、部署 |

#### 2. 💬 实时聊天室（16 关，跨 2 课）

| 课程 | 项目关卡数 | 模块 |
|------|-----------|------|
| React 基础 | 8 | 项目搭建、组件树、Hook 状态管理、消息列表、输入框、WebSocket 集成、登录、部署 |
| Node.js + Express | 8 | 项目初始化、REST API、WebSocket 服务、消息持久化、用户管理、JWT 认证、部署 |

#### 3. 📝 个人博客（8 关，单课）

| 课程 | 项目关卡数 | 模块 |
|------|-----------|------|
| JavaScript 基础 | 8 | DOM 操作、事件处理、动态渲染、数据存储、路由、评论功能、主题切换、本地持久化 |

#### 4. 🔷 类型安全工具库（5 关，单课）

| 课程 | 项目关卡数 | 模块 |
|------|-----------|------|
| TypeScript 基础 | 5 | 泛型工具库、接口定义、类型守卫、装饰器、发布配置 |

#### 5. 🔀 Git 协作工作流（3 关，单课）

| 课程 | 项目关卡数 | 模块 |
|------|-----------|------|
| Git 版本控制 | 3 | 分支策略、协作流程、PR 规范 |

**总计：60 项目关 + 131 概念关 = 191 关**

---

## 关卡一致性审计 (2026-06-15)

全量审计 16 门课程共 200+ 关卡，检查 `code`/`starterCode`/`microSteps`/`verification`/`prerequisites`/`conceptDetail` 间的一致性。

### 严重问题

| # | 课程 | 关卡 | 问题 |
|---|------|------|------|
| S1 | **docker-basics** | Lv1-10 | `microSteps` 模板是 JS 的 `const`/`function`/`console.log`，与 Dockerfile/YAML 完全不相关（10 关全部） |
| S2 | **python-fastapi** | Lv1-12 | `microSteps` 模板是 JS 模式，与 Python 代码不匹配（全部非项目关） |
| S3 | **python-fastapi** | Lv3,6 | `commonMistakes`/`variations`/`transferTasks` 残留 JS/Express/Vue Router 内容（箭头函数、`req.body`、`Hash vs History`） |
| S4 | **javascript-basics** | Lv13 | `commonMistakes`/`variations` 是 SQL 概念（`SELECT *`、`WHERE`、子查询），完全不属于 JS DOM 关卡 |
| S5 | **yolo** | Lv4 | 混淆矩阵逻辑 bug——`all_preds` 和 `all_targets` 都来自 `r.boxes`，永远 100% 准确 |
| S6 | **vue3-fullstack** | Lv11 | `code` 包含两个组件（GrandParent + Child）但 `filePath` 只有一个 `Child.vue` |
| S7 | **OpenCV** | Lv3 | 代码缺少 `import cv2` |
| S8 | **PyTorch** | Lv4 | 代码缺少 `import torch.nn.functional as F`（直接使用 `F.relu`） |

### 共性问题

| # | 课程 | 关卡 | 问题 |
|---|------|------|------|
| C1 | **javascript-basics** | 13 关 | `microSteps` 是统一模板（`const`/`function`/`console.log`），与各关具体内容无关 |
| C2 | **docker-basics** | Lv1-10 | 全部缺少 `type` 字段（默认无 type），其余课程有关卡标注 |
| C3 | **python-fastapi** | Lv6-12 | 全部使用 `filePath: 'main.py'`（6 关卡共享同一文件路径，会互相覆盖） |
| C4 | **python-fastapi** | Lv15 | `code` 中写死 `SECRET_KEY = "your-secret-key"`，缺少环境变量说明 |
| C5 | **所有课程** | 全部 | `variations`、`transferTasks`、`cognitiveLoad`、`dependsOn` 定义在关卡上但框架未消费 |

### 概念缺口（code 用了但未在 conceptDetail/prerequisites 中解释）

| # | 课程 | 关卡 | 未解释概念 |
|---|------|------|-----------|
| G1 | **vue3-fullstack** | Lv4 (列表渲染) | `(item, index)` 带索引用法未在概念中区分 |
| G2 | **vue3-fullstack** | Lv12 (Vue Router) | `app.use(router)` 注册步骤未提及 |
| G3 | **uniapp** | Lv2 | `defineEmits` 未解释 |
| G4 | **uniapp** | Lv4 | `onLoad`/`onPullDownRefresh` vs `onShow`/`onReachBottom` 周期不匹配 |
| G5 | **uniapp** | Lv6 | `onShow` 未从 `vue` import |
| G6 | **opencv** | Lv1 | `destroyAllWindows()`/`imwrite()` 未解释 |
| G7 | **opencv** | Lv4 | `COLOR_GRAY2BGR` 未解释 |
| G8 | **opencv** | Lv5 | `putText`/`FONT_HERSHEY_SIMPLEX` 未解释 |
| G9 | **opencv** | Lv8 | `THRESH_BINARY_INV+THRESH_OTSU`、`DIST_L2`、`connectedComponents` 未解释 |
| G10 | **pytorch** | Lv1 | `.T` 转置未解释 |
| G11 | **pytorch** | Lv3 | `.item()` 未解释 |
| G12 | **pytorch** | Lv5 | `torch.flatten` 未解释 |
| G13 | **pytorch** | Lv7 | `weights_only`（安全参数）未解释 |
| G14 | **pytorch** | Lv8 | `model.fc.in_features`、`model.train()` 未解释 |
| G15 | **nginx** | Lv1 | `$uri` 变量未解释 |
| G16 | **nginx** | Lv2 | `$host`、`$remote_addr`、`$proxy_add_x_forwarded_for` 等未解释 |
| G17 | **nginx** | Lv4 | `ssl_prefer_server_ciphers`、`ssl_session_cache` 等未解释 |
| G18 | **nginx** | Lv5 | `$scheme`、`$request_method`、`$upstream_cache_status`、`proxy_cache_use_stale` 等未解释 |
| G19 | **nginx** | Lv6 | `$binary_remote_addr`、`limit_rate` 未解释 |

### 验证不匹配

| # | 课程 | 关卡 | 问题 |
|---|------|------|------|
| V1 | **ci-cd** | Lv2 | `verification` 说"测试→构建→部署"但 code 只有构建步骤，无测试 |
| V2 | **docker-basics** | Lv10 | `verification` 说"完整 docker-compose.yml"但 code 只有 Dockerfile |

### 按严重等级统计

| 等级 | 数量 | 说明 |
|------|------|------|
| 🔴 严重 | 8 | 功能缺陷 / 错误领域 / 崩溃级 |
| 🟡 重要 | 5 | 共性问题 / 跨关卡模板错误 |
| 🔵 一般 | 21 | 概念缺口 / 验证不匹配 |

### 后续行动

1. **S1-S2**: 重写 docker-basics 和 python-fastapi 的 microSteps（最影响用户体验）
2. **S3-S4**: 清理 python-fastapi 和 js-basics 中的错误领域残留
3. **S5**: 修复 yolo Lv4 混淆矩阵逻辑（自己比较自己的 bug）
4. **S6**: 拆分 vue3 Lv11 为两个独立代码文件
5. **S7-S8**: 补全缺失的 Python import
6. **C1-C2**: 重写 js-basics 和 docker-basics 的 microSteps
7. **C3**: 统一 python-fastapi 各关的 filePath
8. **G1-G19**: 逐关补全概念缺口
9. 新增 `docLinks` 字段，指向菜鸟教程等外部文档，减少概念缺口的影响

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

## 踩坑记录与注意事项

### 1. 模板字符串中的反引号冲突 ⚠️ 高频

**问题**：关卡的 `prerequisites`、`conceptDetail`、`code` 等字段使用模板字符串（反引号）定义，但内容中包含 JavaScript 代码示例时，反引号和 `${}` 会被当作 JS 表达式解析，导致页面空白或报错。

**错误示例**：
```js
// ❌ 错误：${变量名} 被当作模板表达式
conceptDetail: `用 ${变量名} 插入变量值`

// ❌ 错误：反引号被当作字符串定界符结束
prerequisites: `<p>用反引号 \`\` 包裹</p>`
```

**正确写法**：
```js
// ✅ 方案1：用 ${'{变量名}'} 拼接
conceptDetail: `用 ${'{变量名}'} 插入变量值`

// ✅ 方案2：用 \${} 转义（注意：不一定可靠）
conceptDetail: `用 \${变量名} 插入变量值`

// ✅ 方案3：反引号直接写（HTML 中不需要转义）
prerequisites: `<p>用反引号包裹</p>`
```

**检查清单**：
- [ ] 所有 `conceptDetail` 中的 `${...}` 是否正确转义
- [ ] 所有 `prerequisites` 中的反引号是否冲突
- [ ] 所有 `code` 和 `contextCode` 中的模板语法
- [ ] 所有 `hints` 数组中的字符串

---

### 2. GitHub Pages 部署配置

**问题**：首次部署后页面空白。

**原因与解决**：
1. **Source 未选择 GitHub Actions** → Settings → Pages → Source 选 "GitHub Actions"
2. **base path 配置错误** → `vite.config.js` 中 `base` 必须是 `'/仓库名/'`
3. **workflow 文件错误** → 检查 `.github/workflows/deploy.yml` 的 Node.js 版本

**正确配置**：
```js
// vite.config.js
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/learn-platform/' : '/'
})
```

```yaml
# .github/workflows/deploy.yml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: 22  # 用 22，不要用 20（已弃用）
```

---

### 3. 关卡验证规则匹配

**问题**：验证规则中的 pattern 与实际代码不匹配。

**注意事项**：
- 正则表达式用 `/pattern/` 格式，首尾都是 `/`
- 字符串匹配是精确包含（`content.includes(pattern)`）
- `filePath` 必须与课程实际使用的路径一致
- 中文路径在 Windows 下可能有问题，尽量用英文

---

### 4. localStorage 存储限制

**问题**：浏览器 localStorage 通常限制 5-10MB，大量关卡数据可能超限。

**解决方案**：
- 关卡数据用 JS 模块导入（不存 localStorage）
- 只存用户编辑的代码和进度
- 提供导入/导出功能作为备份

---

### 5. Monaco Editor CDN 加载

**问题**：CDN 加载失败导致编辑器不显示。

**解决方案**：
- 使用双 CDN fallback（jsdelivr → unpkg）
- 加载失败时显示友好提示
- 考虑离线场景（可选：本地打包 Monaco）

---

### 6. 课程包扩展规范

**添加新课程的标准步骤**：
1. 在 `src/courses/` 下创建目录
2. 创建 `index.js`（元数据）、`levels.js`（关卡）、`verify.js`（验证）
3. 在 `src/courses/index.js` 中注册
4. **必须检查**：所有模板字符串中的 `${}` 和反引号

**关卡 ID 命名规范**：
- 格式：`课程前缀-序号`（如 `vue3-1`、`py-1`、`js-1`）
- 保持唯一性，不能重复

---

### 7. 常见报错速查

| 错误信息 | 原因 | 解决方案 |
|----------|------|----------|
| `页面空白` | JS 运行时错误 | F12 查看 Console |
| `xxx is not a function` | 模板字符串未转义 | 检查 `${}` 和反引号 |
| `变量名 is not defined` | `${变量名}` 被当作表达式 | 用 `${'{变量名}'}` 拼接 |
| `store.save is not a function` | Pinia store 未暴露方法 | return 中添加缺失的方法 |
| `编辑器直接显示答案` | loadFile 回退加载了 code | 改为加载 contextCode |
| `Deploy failed` | workflow 配置错误 | 检查 Node.js 版本和步骤 |
| `404 Not Found` | base path 错误 | 检查 vite.config.js 的 base |
| `localStorage quota exceeded` | 存储空间满 | 清理旧数据或用导入导出 |

---

## 待办事项

### Phase 2 已完成 ✅

- [x] 就绪度系统关卡级化（getLevelReadiness + LevelCard 改造）
- [x] 创建 `src/projects/index.js` 项目定义系统
- [x] `progress.js` 项目文件累加（projectProgress + merge/get/reset）
- [x] `LevelModal.vue` 项目型关卡 UI（项目标签 + 文件列表）
- [x] 修复 `courses/index.js` 注册全部 9 个课程
- [x] 试点：Vue3 课程新增"电商项目实战"阶段（10 关）
- [x] 课程选择页 Grid 布局 + 项目关视觉区分 + 5列网格
- [x] 构建验证 + commit + push + GitHub Actions 自动部署

### Phase 3 已完成 ✅

- [x] 8 课程填充 project 字段（commit 03f8720）
- [x] 6 课程追加 40 项目关（commit 03f8720）
- [x] 7 新课 27 概念关（commit b7047f0）
- [x] 7 新课 Phase 2 追加 25 概念关（commit b0380cf）
- [x] 通关验证二次确认（commit c3fb41a）

### 关卡一致性修复（审计后）

🟡 **全课程 microSteps 重写**（高优先级，影响 Step-by-Step 功能）
- [ ] docker-basics Lv1-10: 从 JS 模板改为 Docker/YAML 内容
- [ ] python-fastapi Lv1-12: 从 JS 模板改为 Python 内容
- [ ] javascript-basics Lv2-15: 从通用模板改为各关专属内容

🔴 **严重 bug 修复**
- [ ] python-fastapi Lv3,6: 清理 JS/Express 残留（`req.body`, `res.send`, 箭头函数）
- [ ] javascript-basics Lv13: 将 SQL commonMistakes 改为 DOM 操作
- [ ] yolo Lv4: 修复混淆矩阵（自己比较自己的 bug）
- [ ] vue3-fullstack Lv11: 拆分双组件文件路径
- [ ] opencv Lv3: 补 `import cv2`
- [ ] pytorch Lv4: 补 `import torch.nn.functional as F`

🔵 **概念缺口与验证修复**
- [ ] vue3 Lv4: 补充 v-for 带索引 / 不带索引的区分说明
- [ ] ci-cd Lv2: verification 改为"构建→部署"（去掉测试）
- [ ] docker Lv10: verification 改为只检查 Dockerfile
- [ ] uniapp/opencv/pytorch/nginx: 补全 19 处概念缺口（见审计表 G3-G19）
- [ ] python-fastapi Lv6-12: 统一 filePath 避免覆盖

🆕 **新功能**
- [ ] 添加 `docLinks` 字段 + LevelModal UI（关联菜鸟教程等外部文档）
- [ ] 框架消费 `dependsOn`/`cognitiveLoad` 等止定义字段
