# Learn Platform

纯前端编程学习平台，基于 Vue3 + Monaco Editor，支持多语言课程扩展。

## 在线演示

🔗 [https://wusuyue233.github.io/learn-platform/](https://wusuyue233.github.io/learn-platform/)

## 功能特性

- 📚 多课程支持：Vue3、Python、JavaScript 等
- 💻 在线代码编辑：Monaco Editor（VS Code 同款）
- ✅ 浏览器端验证：实时检查代码正确性
- 📊 进度管理：自动保存学习进度
- 🎯 渐进式提示：从简单到复杂的提示系统
- 📱 响应式设计：支持移动端访问

## 课程列表

| 课程 | 关卡数 | 难度 |
|------|--------|------|
| Vue3 全栈 | 29 | ⭐⭐⭐ |
| Python + FastAPI | 20 | ⭐⭐ |
| JavaScript 基础 | 19 | ⭐⭐ |
| React 基础 | 20 | ⭐⭐⭐ |
| TypeScript 基础 | 15 | ⭐⭐ |
| Java + Spring | 10 | ⭐⭐ |
| UniApp | 8 | ⭐⭐ |
| OpenCV | 8 | ⭐⭐ |
| PyTorch | 8 | ⭐⭐⭐ |
| YOLO | 6 | ⭐⭐ |
| Nginx | 6 | ⭐⭐ |
| CI/CD | 6 | ⭐⭐ |
| Docker 容器化 | 10 | ⭐⭐ |
| Git 版本控制 | 10 | ⭐ |
| Node.js + Express | 15 | ⭐⭐ |
| SQL 数据库 | 15 | ⭐⭐ |

## 本地开发

```bash
# 克隆项目
git clone https://github.com/wusuyue233/learn-platform.git
cd learn-platform

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:5173

## 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## GitHub Pages 部署

1. 在 GitHub 上创建新仓库
2. 推送代码到仓库
3. 进入 Settings → Pages
4. Source 选择 "GitHub Actions"
5. 推送代码后自动部署

## 项目结构

```
learn-platform/
├── src/
│   ├── framework/          # 平台框架
│   ├── courses/            # 课程包
│   └── assets/             # 静态资源
├── .github/workflows/      # GitHub Actions
└── package.json
```

## 技术栈

- Vue 3 (Composition API)
- Pinia (状态管理)
- Vue Router (路由)
- Vite (构建工具)
- Monaco Editor (代码编辑器)
- localStorage (本地存储)

## 课程开发

### 添加新课程

1. 在 `src/courses/` 下创建新目录
2. 创建三个文件：
   - `index.js` - 课程元数据
   - `levels.js` - 关卡定义
   - `verify.js` - 验证规则
3. 在 `src/courses/index.js` 中注册课程

### 关卡格式

```js
{
  id: 'unique-id',
  number: 1,
  title: '关卡标题',
  concept: '核心概念',
  difficulty: 'easy', // easy/medium/hard
  task: '任务描述',
  prerequisites: '<h4>预备知识</h4>...',
  conceptDetail: '概念讲解...',
  contextCode: '上下文代码...',
  hints: ['提示1', '提示2'],
  code: '参考答案',
  verification: '验证说明',
  filePath: 'src/example.js'
}
```

## 版权与免责声明

- 本项目为作者的个人学习与作品展示项目。课程内容与代码均为原创设计，开发过程中使用了 AI 辅助生成工具，整体架构、课程设计与内容把关由作者完成。
- 本项目按"现状"（AS-IS）提供，**保留所有权利（All Rights Reserved）**：未经作者书面许可，不得将课程内容或代码用于商业用途、转载或二次分发。
- 项目中提及的商标（Vue、React、Monaco、Python 等）归其各自所有者所有，此处仅为教学性引用，不构成任何关联或背书。
- 如认为本仓库内容侵犯了您的权利，请通过 GitHub Issue 联系作者，核实后将在合理时间内移除相关内容。
