export const projects = {
  ecommerce: {
    id: 'ecommerce',
    name: '电商系统',
    icon: '🛒',
    description: '完整全栈电商系统（Vue3 前端 + FastAPI 后端 + SQL 数据库 + Docker 部署）',
    courses: ['vue3-fullstack', 'python-fastapi', 'sql-basics', 'docker-basics']
  },
  'chat-app': {
    id: 'chat-app',
    name: '实时聊天室',
    icon: '💬',
    description: '全栈实时聊天（React 前端 + Node.js/Express 后端）',
    courses: ['react-basics', 'nodejs-express']
  },
  blog: {
    id: 'blog',
    name: '个人博客',
    icon: '📝',
    description: '纯 JavaScript 静态博客（DOM 操作 + 动态渲染 + 本地存储）',
    courses: ['javascript-basics']
  },
  'type-tools': {
    id: 'type-tools',
    name: '类型安全工具库',
    icon: '🔷',
    description: 'TypeScript 泛型工具库（泛型、类型守卫、装饰器）',
    courses: ['typescript-basics']
  },
  'git-workflow': {
    id: 'git-workflow',
    name: 'Git 协作工作流',
    icon: '🔀',
    description: '团队 Git 协作流程（分支策略、PR 规范）',
    courses: ['git-basics']
  }
}
