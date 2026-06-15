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
  ,
  {
    id: 'yolo-advanced',
    name: '阶段二：YOLO 进阶应用',
    description: '掌握模型评估、目标跟踪和部署导出',
    levels: [
      { id: 'yolo-4', number: 4, type: 'concept', title: '模型评估 mAP', concept: 'mAP 评估', difficulty: 'hard',
        prerequisites: `<h4>mAP</h4><p>mAP50 IoU 阈值 0.5。mAP50-95 各阈值平均。val() 验证评估。</p>`,
        conceptDetail: '混淆矩阵计算 Precision 和 Recall。AP 为 PR 曲线下面积。',
        code: `from ultralytics import YOLO
model = YOLO("yolov8n.pt")
results = model.val(data="dataset.yaml")
print(f"mAP50: {results.box.map50:.4f}")
print(f"mAP50-95: {results.box.map:.4f}")
print(f"Precision: {results.box.p:.4f}")
print(f"Recall: {results.box.r:.4f}")
# 混淆矩阵
from sklearn.metrics import confusion_matrix
import numpy as np
all_preds, all_targets = [], []
for r in results:
  for box in r.boxes:
    all_preds.append(int(box.cls[0]))
    all_targets.append(int(box.cls[0]))
cm = confusion_matrix(all_targets, all_preds)
print("Confusion Matrix:")
print(cm)`,
        verification: 'YOLO 模型评估指标计算',
        filePath: 'evaluate.py',
        hints: ["model.val() 自动计算 mAP","混淆矩阵可视化分类效果"],
        cognitiveLoad: 'medium', dependsOn: ['yolo-3'], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'yolo-5', number: 5, type: 'concept', title: '目标跟踪', concept: 'ByteTrack', difficulty: 'hard',
        prerequisites: `<h4>目标跟踪</h4><p>track() 启动跟踪。persist=True 保持帧间 ID 一致。</p>`,
        conceptDetail: '跟踪 ID 持续多帧。可用于统计目标进出。',
        code: `from ultralytics import YOLO
import cv2
model = YOLO("yolov8n.pt")
cap = cv2.VideoCapture("video.mp4")
while cap.isOpened():
  ret, frame = cap.read()
  if not ret: break
  results = model.track(frame, persist=True)
  if results[0].boxes.id is not None:
    for box, track_id in zip(results[0].boxes.xyxy, results[0].boxes.id):
      x1,y1,x2,y2 = map(int, box[:4].tolist())
      cv2.rectangle(frame, (x1,y1), (x2,y2), (0,255,0), 2)
      cv2.putText(frame, f"ID {int(track_id)}", (x1,y1-10),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,255,0), 2)
  cv2.imshow("Tracking", frame)
  if cv2.waitKey(1) & 0xFF == ord("q"): break
cap.release()
cv2.destroyAllWindows()`,
        verification: 'YOLO 目标跟踪 ID 分配',
        filePath: 'track.py',
        hints: ["model.track() 替代 predict()","persist=True 保持 ID 连续性"],
        cognitiveLoad: 'medium', dependsOn: ['yolo-2'], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'yolo-6', number: 6, type: 'concept', title: 'ONNX 模型导出', concept: '模型部署', difficulty: 'medium',
        prerequisites: `<h4>模型导出</h4><p>model.export() 导出不同格式。ONNX 跨平台部署。TensorRT GPU 加速。</p>`,
        conceptDetail: 'imgsz 输入尺寸。half FP16 半精度。NCNN 手机端部署。',
        code: `from ultralytics import YOLO
model = YOLO("yolov8n.pt")
# ONNX 导出
model.export(format="onnx", imgsz=640, half=True)
print("ONNX 导出完成")
# TensorRT 导出（需 GPU）
model.export(format="engine", imgsz=640, half=True)
print("TensorRT 导出完成")
# NCNN 导出（手机端）
model.export(format="ncnn", imgsz=640)
print("NCNN 导出完成")
# 加载导出的模型推理
onnx_model = YOLO("yolov8n.onnx")
results = onnx_model("image.jpg")
results[0].show()`,
        verification: 'YOLO 模型导出多种格式',
        filePath: 'export.py',
        hints: ["format=\"onnx\" 跨平台格式","half=True FP16 减小体积"],
        cognitiveLoad: 'medium', dependsOn: ['yolo-2'], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]