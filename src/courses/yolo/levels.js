export const phases = [
  {
    id: 'yolo-basics',
    name: '阶段一：YOLO 入门',
    description: '理解目标检测核心概念并使用 YOLOv8',
    levels: [
      { id: 'yolo-1', number: 1, type: 'concept', title: '目标检测概念', concept: '边界框 + IoU', difficulty: 'easy',
        prerequisites: `<h4>目标检测基础</h4><p>边界框 [x1,y1,x2,y2]。IoU 衡量重叠。NMS 非极大值抑制。</p>`,
        conceptDetail: `IoU = 交集 / 并集。IoU > 0.5 通常视为正匹配。`,
        code: `def iou(box1, box2):
  x1 = max(box1[0], box2[0])
  y1 = max(box1[1], box2[1])
  x2 = min(box1[2], box2[2])
  y2 = min(box1[3], box2[3])
  inter = max(0, x2-x1) * max(0, y2-y1)
  area1 = (box1[2]-box1[0]) * (box1[3]-box1[1])
  area2 = (box2[2]-box2[0]) * (box2[3]-box2[1])
  union = area1 + area2 - inter
  return inter / union if union > 0 else 0`,
        verification: '计算两个边界框的 IoU',
        filePath: 'iou.py',
        hints: ["交集 = 重叠矩形面积","分母是并集面积"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'yolo-2', number: 2, type: 'concept', title: 'YOLOv8 推理', concept: 'Ultralytics', difficulty: 'medium',
        prerequisites: `<h4>Ultralytics YOLO</h4><p>yolov8n.pt 是预训练轻量模型。</p>`,
        conceptDetail: `box.xyxy 边界框坐标。box.cls 类别索引。box.conf 置信度。`,
        code: `from ultralytics import YOLO
model = YOLO("yolov8n.pt")
results = model("image.jpg")
for r in results:
  for box in r.boxes:
    x1,y1,x2,y2 = box.xyxy[0].tolist()
    cls = int(box.cls[0])
    conf = float(box.conf[0])
    print(f"{model.names[cls]}: {conf:.2f}")
r.show()`,
        verification: '加载预训练 YOLOv8 检测物体',
        filePath: 'detect.py',
        hints: ["results[0].show() 可视化","model.names 获取类别名"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'yolo-3', number: 3, type: 'concept', title: '自定义数据集训练', concept: '训练配置', difficulty: 'hard',
        prerequisites: `<h4>自定义训练</h4><p>dataset.yaml 含 train/val 路径和类别数。</p>`,
        conceptDetail: `预训练权重加速收敛。epochs 训练轮数。device 指定设备。`,
        code: `from ultralytics import YOLO
model = YOLO("yolov8n.pt")
model.train(data="dataset.yaml", epochs=50, imgsz=640, batch=16, device="cpu")`,
        verification: '训练 YOLO 模型检测自定义物体',
        filePath: 'train.py',
        hints: ["dataset.yaml 定义数据集","device=\"cpu\" 无 GPU 时使用"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]