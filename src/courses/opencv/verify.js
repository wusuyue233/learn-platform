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
    case 'opencv-5':
      check('contours.py', 'import cv2', '轮廓检测和特征计算', '轮廓检测和特征计算')
      break
    case 'opencv-6':
      check('morphology.py', 'import cv2', '形态学操作处理图像噪声', '形态学操作处理图像噪声')
      break
    case 'opencv-7':
      check('face_detection.py', 'import cv2', 'Haar Cascade 人脸和眼睛检测', 'Haar Cascade 人脸和眼睛检测')
      break
    case 'opencv-8':
      check('segmentation.py', 'import cv2', '分水岭分割图像前景', '分水岭分割图像前景')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}