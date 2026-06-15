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
| Python + FastAPI | 12 | 3 | easy 5 / medium 5 / hard 2 | ✅ |
| JavaScript 基础 | 15 | 4 | easy 6 / medium 8 / hard 1 | ✅ |
| React 基础 | 20 | 4 | — | ✅ |
| TypeScript 基础 | 15 | 3 | — | ✅ |
| Docker 容器化 | 10 | 3 | — | ✅ |
| Git 版本控制 | 10 | 3 | — | ✅ |
| Node.js + Express | 15 | 4 | — | ✅ |
| SQL 数据库 | 15 | 3 | — | ✅ |
| **合计** | **141** | **32** | | **9/9 ✅** |

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

### Phase 3 项目内容填充（进行中）

- [ ] Python + FastAPI 课程新增"电商 API 开发"阶段（8 关）
- [ ] React 课程新增"聊天室项目实战"阶段（8 关）
- [ ] Node.js 课程新增"聊天室后端实战"阶段（8 关）
- [ ] JavaScript 课程新增"博客项目实战"阶段（8 关）
- [ ] TypeScript 课程新增"工具库项目实战"阶段（5 关）
- [ ] Git 课程新增"协作工作流实战"阶段（3 关）

### 后续计划

- [ ] 添加更多课程（Java/Spring、UniApp、OpenCV、PyTorch、YOLO、Nginx、CI/CD）
- [ ] 优化移动端适配
- [ ] 添加代码运行预览（iframe sandbox）
