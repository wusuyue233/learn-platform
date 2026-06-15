import { phases } from './levels.js'
import { verify } from './verify.js'
export default {
  id: 'yolo',
  name: 'YOLO 目标检测',
  description: '从零掌握 YOLO 目标检测，训练和部署模型',
  icon: '🎯',
  difficulty: 'advanced',
  category: 'ai',
  tags: ["YOLO","目标检测","CV"],
  prerequisites: [],
  phases,
  verify
}