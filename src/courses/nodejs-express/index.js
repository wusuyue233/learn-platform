import { phases } from './levels.js'
import { verify } from './verify.js'

export default {
  id: 'nodejs-express',
  name: 'Node.js + Express',
  description: '从零构建实时聊天室后端，掌握 Node.js 与 Express 全栈开发',
  icon: '🟢',
  difficulty: 'intermediate',
  tags: ['Node.js', 'Express', '后端'],
  prerequisites: [],
  phases,
  verify
}
