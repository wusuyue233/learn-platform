export const phases = [
  {
    id: 'opencv-basics',
    name: '阶段一：图像处理基础',
    description: '掌握 OpenCV 图像读写、颜色空间、滤波和边缘检测',
    levels: [
      { id: 'opencv-1', number: 1, type: 'concept', title: '图像读写', concept: 'imread/imshow', difficulty: 'easy',
        prerequisites: `<h4>OpenCV 基础</h4><p>cv2.imread 读取为 numpy 数组。BGR 是默认颜色空间。</p>`,
        conceptDetail: `img.shape 返回 (高, 宽, 通道)。waitKey(0) 无限等待按键。`,
        code: `import cv2
img = cv2.imread("input.jpg")
print(f"尺寸: {img.shape}")
cv2.imshow("Image", img)
cv2.waitKey(0)
cv2.destroyAllWindows()
cv2.imwrite("output.jpg", img)`,
        verification: '成功读取/显示/保存图像',
        filePath: 'read_display.py',
        hints: ["img.shape 获取图像尺寸","cv2.waitKey(0) 等待按键后继续"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'opencv-2', number: 2, type: 'concept', title: '颜色空间转换', concept: 'cvtColor', difficulty: 'easy',
        prerequisites: `<h4>颜色空间</h4><p>cv2.cvtColor 转换颜色空间。HSV 便于做颜色分割。</p>`,
        conceptDetail: `cv2.inRange 创建二值掩码。cv2.bitwise_and 位运算应用掩码。`,
        code: `import cv2
img = cv2.imread("input.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
mask = cv2.inRange(hsv, (0,50,50), (10,255,255))
result = cv2.bitwise_and(img, img, mask=mask)
cv2.imshow("Result", result)
cv2.waitKey(0)`,
        verification: 'HSV 阈值提取颜色区域',
        filePath: 'color_space.py',
        hints: ["COLOR_BGR2GRAY 转灰度","cv2.inRange 阈值提取颜色"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'opencv-3', number: 3, type: 'concept', title: '图像滤波', concept: '高斯/中值/双边滤波', difficulty: 'medium',
        prerequisites: `<h4>图像滤波</h4><p>GaussianBlur 去高斯噪声。medianBlur 去椒盐噪声。bilateralFilter 保边去噪。</p>`,
        conceptDetail: `核大小需奇数。双边滤波同时考虑空间和像素值差异。`,
        code: `img = cv2.imread("noisy.jpg")
gauss = cv2.GaussianBlur(img, (5,5), 1.5)
median = cv2.medianBlur(img, 5)
bilateral = cv2.bilateralFilter(img, 9, 75, 75)
cv2.imshow("Gaussian", gauss)
cv2.imshow("Median", median)
cv2.imshow("Bilateral", bilateral)
cv2.waitKey(0)`,
        verification: '实现三种滤波并对比效果',
        filePath: 'filter.py',
        hints: ["高斯滤波 (核大小, sigma)","中值滤波核大小奇数","双边滤波 (直径, sigma颜色, sigma空间)"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'opencv-4', number: 4, type: 'concept', title: '边缘检测', concept: 'Canny', difficulty: 'medium',
        prerequisites: `<h4>Canny 边缘检测</h4><p>Canny 步骤：高斯滤波 → 计算梯度 → 非极大值抑制 → 双阈值检测。</p>`,
        conceptDetail: `高阈值定强边缘，低阈值保留弱边缘。addWeighted 叠加效果。`,
        code: `img = cv2.imread("input.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
blur = cv2.GaussianBlur(gray, (5,5), 1.0)
edges = cv2.Canny(blur, 50, 150)
color = cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR)
ovr = cv2.addWeighted(img, 0.7, color, 0.3, 0)
cv2.imshow("Overlay", ovr)
cv2.waitKey(0)`,
        verification: 'Canny 边缘检测成功',
        filePath: 'edge_detection.py',
        hints: ["先降噪再检测","低:高阈值 ≈ 1:2"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]