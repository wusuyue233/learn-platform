import { phases } from './levels.js'
import { verify } from './verify.js'

export default {
  id: 'sql-basics',
  name: 'SQL 数据库',
  description: '用 SQL 操作数据库：从基础查询到电商数据库设计',
  icon: '🗄️',
  difficulty: 'intermediate',
  category: 'infra',
  tags: ['SQL', '数据库', '查询'],
  prerequisites: [],
  project: 'ecommerce',
  phases,
  verify
}
