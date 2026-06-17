# Learn Platform 项目摘要

## 一句话
纯前端编程学习平台，Vue3 + Pinia + Monaco Editor CDN + localStorage，部署 GitHub Pages。

## 目录结构
```
src/
├── courses/           # 16门课程包
│   ├── index.js       # 课程注册入口
│   └── {course}/
│       ├── index.js   # 课程元数据 + 导入 phases
│       ├── levels.js  # 关卡数据（核心！）
│       └── verify.js  # 验证规则
├── framework/         # 平台框架
│   ├── components/    # CourseSelector / CourseView / LevelModal / CodeEditor / LevelCard / PhaseSection
│   ├── stores/
│   │   └── progress.js  # 多课程进度（Pinia）
│   └── utils/
│       ├── verifier.js  # 验证引擎（字符串/正则匹配）
│       └── fileStore.js # localStorage 文件读写
├── projects/          # 项目组合（预留）
├── App.vue
└── main.js
```

## 核心数据流
1. `courses/index.js` 导入所有课程 → 渲染到 CourseSelector
2. 用户选课 → CourseView 显示阶段/关卡
3. 打开关卡 → LevelModal 展示概念/代码编辑器
4. 用户编辑 → localStorage (`learn-platform-file:*`)
5. 点击验证 → `verifier.js` 匹配关卡规则 → 结果反馈
6. 通过 → `progress store` 记录到 localStorage (`learn-platform-progress`)

## 关卡数据结构（levels.js）
每个文件导出 `phases[]`，每阶段含 `levels[]`

### 基础字段
- `id`, `number`, `title`, `concept`, `difficulty` (easy/medium/hard)
- `task`, `prerequisites`, `conceptDetail`, `contextCode`
- `starterCode`, `code`, `hints[]`, `verification`, `solution`, `filePath`

### Phase 1 增强字段
- `cognitiveLoad` (low/medium/high), `dependsOn[]`
- `commonMistakes[]` — `{ pattern, explanation }`
- `microSteps[]` — `{ id, title, verification, hint }`
- `variations[]`, `transferTasks[]`, `docLinks[]`

## 课程清单（16门，253关）
| 课程 | 关卡数 | 阶段 | microSteps 状态 |
|------|--------|------|----------------|
| vue3-fullstack | 29 | 5 | 全部完成 |
| python-fastapi | 20 | 4 | 全部完成 |
| javascript-basics | 23 | 4 | 全部完成 |
| nodejs-express | 23 | 5 | 全部完成 |
| git-basics | 13 | 4 | 全部完成 |
| react-basics | 28 | 4 | 全部完成 |
| typescript-basics | 20 | 4 | 全部完成 |
| docker-basics | 10 | 3 | 全部完成 |
| sql-basics | 15 | 3 | 全部完成 |
| ci-cd | 6 | 2 | 全部完成 |
| nginx | 6 | 2 | 全部完成 |
| yolo | 6 | 2 | 全部完成 |
| pytorch | 8 | 3 | 全部完成 |
| opencv | 8 | 3 | 全部完成 |
| uniapp | 8 | 3 | 全部完成 |
| java-spring | 10 | 3 | 全部完成 |

## 验证机制
- 通用验证器 `verifier.js`：`check(filePath, pattern, name, effect, options)`
- pattern 支序字符串包含或 `/正则/`
- `partialCheck()` 用于微步验证
- 每门课 `verify.js` 定义验证规则
- 红线检测：CodeEditor 用 `commonMistakes.pattern` + `deltaDecorations`

## 关键约定
- 文件名: 小写+中划线, 统一用 `.js` (非 .ts)
- commit: `中文前缀 (feat:/fix:/refactor:/docs:) + 中文描述`
- `code` 中的 `${变量名}` 必须转义为 `${'${变量名}'}`
- 反引号在 level 字符串中会导致模板字面量提前结束
- Pinia store return 中必须暴露所有方法
- vite `base`: 开发 `/`，生产 `/learn-platform/`

## 技术栈
Vue3 + Pinia + Vite + Monaco Editor (CDN) + localStorage
零后端，纯静态，Node 22 构建
