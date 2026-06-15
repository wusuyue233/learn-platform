import { phases } from './levels.js'
import { verify } from './verify.js'
export default {
  id: 'ci-cd',
  name: 'CI/CD 持续集成与部署',
  description: '从零掌握 CI/CD 流水线，自动化测试和部署',
  icon: '🔄',
  difficulty: 'intermediate',
  category: 'infra',
  tags: ["CI/CD","GitHub Actions","DevOps"],
  prerequisites: [],
  project: 'ecommerce',
  phases,
  verify
}