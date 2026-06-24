export const phases = [
  {
    id: 'opencv-basics',
    name: '阶段一：图像处理基础',
    description: '掌握 OpenCV 图像读写、颜色空间、滤波和边缘检测',
    levels: [
      { id: 'opencv-1', number: 1, type: 'concept', title: '图像读写', concept: 'imread/imshow', difficulty: 'easy',
        prerequisites: `<h4>OpenCV 基础</h4><p>cv2.imread 读取为 numpy 数组。BGR 是默认颜色空间。</p>`,
        conceptDetail: `img.shape 返回 (高, 宽, 通道)。waitKey(0) 无限等待按键。destroyAllWindows 关闭窗口。imwrite 保存图像。`,
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解图像读取',verification:'cv2.imread',hint:'imread 读取图像为 numpy 数组',docLinks:[{title: 'cv2.imread', url: 'https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html#ga288b8b3da0892bd651fce07b3bbd3a56'}]},{id:'step-2',title:'图像显示与保存',verification:'cv2.imshow',hint:'imshow 显示图像，imwrite 保存',docLinks:[{title: 'cv2.imshow', url: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga453d42fe4cb60e5725781aec9e0043d7'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
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
        cognitiveLoad: 'medium', dependsOn: ['opencv-1'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解颜色空间',verification:'cv2.cvtColor',hint:'BGR 是 OpenCV 默认格式',docLinks:[{title: 'cv2.cvtColor', url: 'https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab'}]},{id:'step-2',title:'颜色通道分离',verification:'cv2.split',hint:'split 分离 BGR 三个通道',docLinks:[{title: 'cv2.split', url: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga0547c7fed86152d7e9d0096029c8518a'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
      },
      { id: 'opencv-3', number: 3, type: 'concept', title: '图像滤波', concept: '高斯/中值/双边滤波', difficulty: 'medium',
        prerequisites: `<h4>图像滤波</h4><p>GaussianBlur 去高斯噪声。medianBlur 去椒盐噪声。bilateralFilter 保边去噪。</p>`,
        conceptDetail: `核大小需奇数。双边滤波同时考虑空间和像素值差异。`,
        code: `import cv2
img = cv2.imread("noisy.jpg")
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
        cognitiveLoad: 'medium', dependsOn: ['opencv-2'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解图像滤波',verification:'cv2.GaussianBlur',hint:'高斯滤波平滑图像去噪',docLinks:[{title: 'cv2.GaussianBlur', url: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gaabe8c836e97159a9193fb0b11ac52cf1'}]},{id:'step-2',title:'配置滤波参数',verification:'ksize',hint:'核大小必须为正奇数',docLinks:[{title: '核大小 ksize', url: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#filter-details'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
      },
      { id: 'opencv-4', number: 4, type: 'concept', title: '边缘检测', concept: 'Canny', difficulty: 'medium',
        prerequisites: `<h4>Canny 边缘检测</h4><p>Canny 步骤：高斯滤波 → 计算梯度 → 非极大值抑制 → 双阈值检测。</p>`,
        conceptDetail: `高阈值定强边缘，低阈值保留弱边缘。COLOR_GRAY2BGR 灰度转BGR三通道。addWeighted 叠加效果。`,
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
        cognitiveLoad: 'medium', dependsOn: ['opencv-3'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解边缘检测',verification:'cv2.Canny',hint:'Canny 边缘检测三步：高斯→梯度→阈值',docLinks:[{title: 'cv2.Canny', url: 'https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html#ga04723e007ed888ddf11d9ba04e2232de'}]},{id:'step-2',title:'配置阈值参数',verification:'threshold1',hint:'调整 minVal 和 maxVal 控制边缘数量',docLinks:[{title: 'Canny 阈值', url: 'https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html#feature'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
      }
    ]
  }
  ,
  {
    id: 'opencv-advanced',
    name: '阶段二：图像分析进阶',
    description: '掌握轮廓检测、形态学操作和人脸识别',
    levels: [
      { id: 'opencv-5', number: 5, type: 'concept', title: '轮廓检测', concept: 'findContours', difficulty: 'medium',
        prerequisites: `<h4>轮廓</h4><p>findContours 检测轮廓。drawContours 绘制轮廓。RETR_EXTERNAL 只检测外轮廓。</p>`,
        conceptDetail: 'contourArea 面积。arcLength 周长。approxPolyDP 多边形逼近。putText 绘制文字。FONT_HERSHEY_SIMPLEX 字体。',
        code: `import cv2
import numpy as np
img = cv2.imread("shapes.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
for i, cnt in enumerate(contours):
  area = cv2.contourArea(cnt)
  perimeter = cv2.arcLength(cnt, True)
  cv2.drawContours(img, [cnt], -1, (0,255,0), 2)
  cv2.putText(img, f"#{i}", tuple(cnt[0][0]), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,0,0), 1)
  print(f"Contour #{i}: area={area:.0f}, perim={perimeter:.1f}")
cv2.imshow("Contours", img)
cv2.waitKey(0)`,
        verification: '轮廓检测和特征计算',
        filePath: 'contours.py',
        hints: ["RETR_EXTERNAL 仅外部轮廓","contourArea 计算面积"],
        cognitiveLoad: 'medium', dependsOn: ['opencv-4'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解轮廓检测',verification:'cv2.findContours',hint:'轮廓是基于边缘的闭合曲线',docLinks:[{title: 'cv2.findContours', url: 'https://docs.opencv.org/4.x/d3/dc0/group__imgproc__shape.html#ga17ed9f5d79ae97bd4c7cf18403e1689a'}]},{id:'step-2',title:'绘制轮廓',verification:'cv2.drawContours',hint:'在原图上绘制检测到的轮廓',docLinks:[{title: 'cv2.drawContours', url: 'https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html#ga746c0625f178f7644d368b7a6ade3fad'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
      },
      { id: 'opencv-6', number: 6, type: 'concept', title: '形态学操作', concept: '腐蚀膨胀', difficulty: 'medium',
        prerequisites: `<h4>形态学</h4><p>erode 腐蚀消除噪点。dilate 膨胀填补空洞。morphologyEx 形态学变换。</p>`,
        conceptDetail: 'MORPH_OPEN 开运算先腐蚀后膨胀。MORPH_CLOSE 闭运算先膨胀后腐蚀。kernel 结构元素。',
        code: `import cv2
import numpy as np
img = cv2.imread("noisy.png", 0)
_, bin = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)
kernel = np.ones((5,5), np.uint8)
eroded = cv2.erode(bin, kernel, iterations=1)
dilated = cv2.dilate(bin, kernel, iterations=1)
opening = cv2.morphologyEx(bin, cv2.MORPH_OPEN, kernel)
closing = cv2.morphologyEx(bin, cv2.MORPH_CLOSE, kernel)
cv2.imshow("Original", bin)
cv2.imshow("Eroded", eroded)
cv2.imshow("Dilated", dilated)
cv2.imshow("Opening", opening)
cv2.imshow("Closing", closing)
cv2.waitKey(0)`,
        verification: '形态学操作处理图像噪声',
        filePath: 'morphology.py',
        hints: ["MORPH_OPEN 去噪点","MORPH_CLOSE 填补小洞"],
        cognitiveLoad: 'medium', dependsOn: ['opencv-5'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解形态学操作',verification:'cv2.morphologyEx',hint:'腐蚀膨胀用于消除噪声和连接区域',docLinks:[{title: '形态学操作', url: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga67493776e3ad1a3df63883829375201f'}]},{id:'step-2',title:'配置核结构',verification:'cv2.getStructuringElement',hint:'定义矩形/椭圆/十字形核',docLinks:[{title: 'cv2.getStructuringElement', url: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gac2db39f568332f8de7f718b3945c3c6e'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
      },
      { id: 'opencv-7', number: 7, type: 'concept', title: '人脸检测', concept: 'Haar Cascade', difficulty: 'hard',
        prerequisites: `<h4>Haar Cascade</h4><p>haarcascade_frontalface_default.xml 是预训练人脸检测器。</p>`,
        conceptDetail: 'detectMultiScale 参数：scaleFactor 缩放比例，minNeighbors 最小邻域，minSize 最小尺寸。',
        code: `import cv2
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_eye.xml")
img = cv2.imread("group.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, 1.1, 5, minSize=(30,30))
for (x,y,w,h) in faces:
  cv2.rectangle(img, (x,y), (x+w,y+h), (0,255,0), 2)
  roi_gray = gray[y:y+h, x:x+w]
  eyes = eye_cascade.detectMultiScale(roi_gray)
  for (ex,ey,ew,eh) in eyes:
    cv2.rectangle(img, (x+ex,y+ey), (x+ex+ew,y+ey+eh), (255,0,0), 1)
print(f"检测到 {len(faces)} 张人脸")
cv2.imshow("Face Detection", img)
cv2.waitKey(0)`,
        verification: 'Haar Cascade 人脸和眼睛检测',
        filePath: 'face_detection.py',
        hints: ["cv2.data.haarcascades 内置模型路径","detectMultiScale 多尺度检测"],
        cognitiveLoad: 'medium', dependsOn: ['opencv-4'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解人脸检测',verification:'CascadeClassifier',hint:'Haar 级联分类器检测人脸',docLinks:[{title: 'CascadeClassifier', url: 'https://docs.opencv.org/4.x/d1/de5/classcv_1_1CascadeClassifier.html'}]},{id:'step-2',title:'检测与绘制',verification:'detectMultiScale',hint:'返回人脸矩形框坐标',docLinks:[{title: 'detectMultiScale', url: 'https://docs.opencv.org/4.x/d1/de5/classcv_1_1CascadeClassifier.html#aaf8181cb63968136476ec4204ffca498'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
      },
      { id: 'opencv-8', number: 8, type: 'concept', title: '图像分割', concept: '分水岭算法', difficulty: 'hard',
        prerequisites: `<h4>分水岭分割</h4><p>watershed 基于标记的分割。distanceTransform 距离变换。</p>`,
        conceptDetail: 'THRESH_BINARY_INV 二值反转。THRESH_OTSU 自动阈值。DIST_L2 欧氏距离变换。connectedComponents 连通域标记。subtract 图像减法。',
        code: `import cv2
import numpy as np
img = cv2.imread("coins.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, bin = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
kernel = np.ones((3,3), np.uint8)
opening = cv2.morphologyEx(bin, cv2.MORPH_OPEN, kernel, iterations=2)
dist = cv2.distanceTransform(opening, cv2.DIST_L2, 5)
_, sure_fg = cv2.threshold(dist, 0.5*dist.max(), 255, 0)
sure_fg = np.uint8(sure_fg)
unknown = cv2.subtract(opening, sure_fg)
_, markers = cv2.connectedComponents(sure_fg)
markers = markers + 1
markers[unknown == 255] = 0
markers = cv2.watershed(img, markers)
img[markers == -1] = [0,0,255]
cv2.imshow("Segmented", img)
cv2.waitKey(0)`,
        verification: '分水岭分割图像前景',
        filePath: 'segmentation.py',
        hints: ["distanceTransform 计算距离","watershed 标记分水岭"],
        cognitiveLoad: 'medium', dependsOn: ['opencv-6'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解图像分割',verification:'cv2.threshold',hint:'阈值分割将图像分为前景和背景',docLinks:[{title: 'cv2.threshold', url: 'https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html#gae8a4a146d1ca78c626a53577199e9c57'}]},{id:'step-2',title:'配置分割方法',verification:'THRESH_OTSU',hint:'Otsu 自动计算最佳阈值',docLinks:[{title: 'OTSU 阈值', url: 'https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html#gga4a7fc2845b04e0b67b187540170c480faa0a5f5a1403e816d4ed417a4d92f14c5'}]}],
        docLinks: [
        { title: 'OpenCV-Python 教程', url: 'https://docs.opencv.org/master/d6/d00/tutorial_py_root.html' },
        { title: 'OpenCV 文档', url: 'https://docs.opencv.org/' }
        ],
      }
    ]
  }
]