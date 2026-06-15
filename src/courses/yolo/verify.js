export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'yolo-1':
      check('iou.py', 'def iou(box1, box2):', '计算两个边界框的 IoU', '计算两个边界框的 IoU')
      break
    case 'yolo-2':
      check('detect.py', 'from ultralytics imp', '加载预训练 YOLOv8 检测物体', '加载预训练 YOLOv8 检测物体')
      break
    case 'yolo-3':
      check('train.py', 'from ultralytics imp', '训练 YOLO 模型检测自定义物体', '训练 YOLO 模型检测自定义物体')
      break
    case 'yolo-4':
      check('evaluate.py', 'from ultralytics import YOLO', 'YOLO 模型评估指标计算', 'YOLO 模型评估指标计算')
      break
    case 'yolo-5':
      check('track.py', 'from ultralytics import YOLO', 'YOLO 目标跟踪 ID 分配', 'YOLO 目标跟踪 ID 分配')
      break
    case 'yolo-6':
      check('export.py', 'from ultralytics import YOLO', 'YOLO 模型导出多种格式', 'YOLO 模型导出多种格式')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}