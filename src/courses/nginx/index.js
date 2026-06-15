import { phases } from './levels.js'
import { verify } from './verify.js'
export default {
  id: 'nginx',
  name: 'Nginx 服务器配置',
  description: '从零掌握 Nginx，配置反向代理和负载均衡',
  icon: '🌐',
  difficulty: 'intermediate',
  category: 'infra',
  tags: ["Nginx","反向代理","DevOps"],
  prerequisites: [],
  project: 'ecommerce',
  phases,
  verify
}