export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'opencv-1':
      check('read_display.py', 'import cv2', '成功读取/显示/保存图像', '成功读取/显示/保存图像')
      break
    case 'opencv-2':
      check('color_space.py', 'import cv2', 'HSV 阈值提取颜色区域', 'HSV 阈值提取颜色区域')
      break
    case 'opencv-3':
      check('filter.py', 'img = cv2.imread("no', '实现三种滤波并对比效果', '实现三种滤波并对比效果')
      break
    case 'opencv-4':
      check('edge_detection.py', 'img = cv2.imread("in', 'Canny 边缘检测成功', 'Canny 边缘检测成功')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}