import { phases } from './levels.js'
import { verify } from './verify.js'

export default {
  id: 'docker-basics',
  name: 'Docker 容器化',
  description: '从零掌握 Docker，实战部署电商系统到容器',
  icon: '🐳',
  difficulty: 'intermediate',
  tags: ['Docker', '容器', 'DevOps'],
  prerequisites: [],
  phases,
  verify
}
