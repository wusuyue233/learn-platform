import { phases } from './levels.js'
import { verify } from './verify.js'

export default {
  id: 'python-fastapi',
  name: 'Python + FastAPI',
  description: '用 Python 构建高性能 REST API',
  icon: '🐍',
  difficulty: 'intermediate',
  tags: ['Python', 'FastAPI', 'REST API'],
  prerequisites: [],
  phases,
  verify
}
