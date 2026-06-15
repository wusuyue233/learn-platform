export const phases = [
  {
    id: 'pytorch-basics',
    name: '阶段一：PyTorch 基础',
    description: '掌握张量操作、自动求导和基本网络',
    levels: [
      { id: 'pytorch-1', number: 1, type: 'concept', title: '张量基础', concept: 'Tensor', difficulty: 'easy',
        prerequisites: `<h4>PyTorch 张量</h4><p>torch.tensor 创建张量。@ 是矩阵乘法。</p>`,
        conceptDetail: `.shape 和 .dtype 获取属性。torch.randn 随机正态分布。`,
        code: `import torch
x = torch.tensor([[1,2],[3,4]])
y = torch.randn(3, 3)
z = torch.ones(2, 3)
print(x.shape, x.dtype)
mul = x @ x.T
print(mul)`,
        verification: '创建和操作张量',
        filePath: 'tensor_basics.py',
        hints: ["x @ x.T 矩阵乘法","torch.ones/zeros/randn 常用创建方式"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'pytorch-2', number: 2, type: 'concept', title: '自动求导', concept: 'autograd', difficulty: 'medium',
        prerequisites: `<h4>自动求导</h4><p>requires_grad=True 跟踪计算。backward() 反向传播计算梯度。</p>`,
        conceptDetail: `梯度存储在 .grad 属性。`,
        code: `import torch
x = torch.tensor(3.0, requires_grad=True)
y = x ** 2
y.backward()
print(f"dy/dx at x=3: {x.grad}")  # 6.0`,
        verification: '计算 y=x^2 在 x=3 时的导数',
        filePath: 'autograd.py',
        hints: ["requires_grad=True 启用梯度","backward() 计算梯度"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'pytorch-3', number: 3, type: 'concept', title: '线性回归', concept: 'nn.Linear', difficulty: 'medium',
        prerequisites: `<h4>线性回归</h4><p>nn.Linear 全连接层。MSELoss 均方误差。SGD 优化器。</p>`,
        conceptDetail: `zero_grad() 清零。backward() 反向传播。step() 更新参数。`,
        code: `import torch, torch.nn as nn
x = torch.randn(100,1)
y = 2*x + 1 + torch.randn(100,1)*0.1
model = nn.Linear(1,1)
loss_fn = nn.MSELoss()
opt = torch.optim.SGD(model.parameters(), lr=0.01)
for e in range(500):
  pred = model(x)
  loss = loss_fn(pred, y)
  opt.zero_grad()
  loss.backward()
  opt.step()
print(f"w={model.weight.item():.3f}, b={model.bias.item():.3f}")`,
        verification: '训练模型拟合 y=2x+1',
        filePath: 'linear_regression.py',
        hints: ["zero_grad→backward→step 三件套","model.parameters() 可训练参数"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'pytorch-4', number: 4, type: 'concept', title: 'MNIST 分类', concept: '多层感知机', difficulty: 'hard',
        prerequisites: `<h4>神经网络</h4><p>nn.Module 定义网络。forward 前向传播。</p>`,
        conceptDetail: `F.relu 激活函数。view 展平图像。`,
        code: `class MLP(nn.Module):
  def __init__(self):
    super().__init__()
    self.fc1 = nn.Linear(784, 256)
    self.fc2 = nn.Linear(256, 128)
    self.fc3 = nn.Linear(128, 10)
  def forward(self, x):
    x = x.view(x.size(0), -1)
    x = F.relu(self.fc1(x))
    x = F.relu(self.fc2(x))
    return self.fc3(x)`,
        verification: 'MLP 在 MNIST 上训练及评估',
        filePath: 'mlp_mnist.py',
        hints: ["继承 nn.Module","实现 __init__ 和 forward"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
  ,
  {
    id: 'pytorch-cnn',
    name: '阶段二：进阶网络构建',
    description: '掌握 CNN 卷积网络、数据加载和迁移学习',
    levels: [
      { id: 'pytorch-5', number: 5, type: 'concept', title: 'CNN 卷积网络', concept: 'nn.Conv2d', difficulty: 'hard',
        prerequisites: `<h4>CNN</h4><p>nn.Conv2d 卷积层。nn.MaxPool2d 池化层。nn.Dropout 防过拟合。</p>`,
        conceptDetail: 'kernel_size 卷积核大小。stride 步长。padding 填充。',
        code: `import torch
import torch.nn as nn
import torch.nn.functional as F
class CNN(nn.Module):
  def __init__(self):
    super().__init__()
    self.conv1 = nn.Conv2d(1, 32, 3, 1)
    self.conv2 = nn.Conv2d(32, 64, 3, 1)
    self.dropout1 = nn.Dropout2d(0.25)
    self.dropout2 = nn.Dropout2d(0.5)
    self.fc1 = nn.Linear(9216, 128)
    self.fc2 = nn.Linear(128, 10)
  def forward(self, x):
    x = self.conv1(x)
    x = F.relu(x)
    x = self.conv2(x)
    x = F.relu(x)
    x = F.max_pool2d(x, 2)
    x = self.dropout1(x)
    x = torch.flatten(x, 1)
    x = self.fc1(x)
    x = F.relu(x)
    x = self.dropout2(x)
    return self.fc2(x)`,
        verification: 'CNN 卷积网络结构定义',
        filePath: 'cnn_mnist.py',
        hints: ["nn.Conv2d(输入通道,输出通道,卷积核大小)","F.max_pool2d 池化降维"],
        cognitiveLoad: 'medium', dependsOn: ['pytorch-4'], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'pytorch-6', number: 6, type: 'concept', title: 'DataLoader 数据加载', concept: 'Dataset/DataLoader', difficulty: 'medium',
        prerequisites: `<h4>数据加载</h4><p>torchvision.datasets 内置数据集。DataLoader 批次加载。transforms 数据增强。</p>`,
        conceptDetail: 'batch_size 批次大小。shuffle 打乱数据。num_workers 多进程加载。Normalize 标准化。',
        code: `import torch
from torch.utils.data import DataLoader
from torchvision import datasets, transforms
transform = transforms.Compose([
  transforms.RandomHorizontalFlip(),
  transforms.RandomRotation(10),
  transforms.ToTensor(),
  transforms.Normalize((0.1307,), (0.3081,))
])
train_dataset = datasets.MNIST(root='./data', train=True, download=True, transform=transform)
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True, num_workers=2)
for batch_idx, (data, target) in enumerate(train_loader):
  print(f"Batch {batch_idx}: data {data.shape}, target {target.shape}")
  if batch_idx == 2: break`,
        verification: 'DataLoader 加载 MNIST',
        filePath: 'data_loader.py',
        hints: ["transforms.Compose 组合增强","DataLoader(batch_size,shuffle,num_workers)"],
        cognitiveLoad: 'medium', dependsOn: ['pytorch-4'], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'pytorch-7', number: 7, type: 'concept', title: '模型保存与加载', concept: 'state_dict', difficulty: 'medium',
        prerequisites: `<h4>保存加载</h4><p>torch.save(model.state_dict()) 保存参数。torch.load 加载。model.eval() 切换到评估模式。</p>`,
        conceptDetail: 'model.eval() 关闭 dropout 和 batch_norm。torch.no_grad() 禁用梯度计算。',
        code: `import torch
import torch.nn as nn
model = CNN()
# 训练后保存
torch.save(model.state_dict(), "mnist_cnn.pt")
# 加载推理
model_loaded = CNN()
model_loaded.load_state_dict(torch.load("mnist_cnn.pt", weights_only=True))
model_loaded.eval()
sample = torch.randn(1, 1, 28, 28)
with torch.no_grad():
  output = model_loaded(sample)
  pred = output.argmax(dim=1)
print(f"Prediction: {pred.item()}")
# 完整保存（含网络结构）
torch.save(model, "mnist_cnn_full.pt")
full_model = torch.load("mnist_cnn_full.pt", weights_only=False)
full_model.eval()`,
        verification: 'PyTorch 模型保存和加载',
        filePath: 'model_save_load.py',
        hints: ["state_dict() 仅保存参数","weights_only=True 安全加载"],
        cognitiveLoad: 'medium', dependsOn: ['pytorch-5'], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'pytorch-8', number: 8, type: 'concept', title: '迁移学习', concept: 'Transfer Learning', difficulty: 'hard',
        prerequisites: `<h4>迁移学习</h4><p>torchvision.models 预训练模型。requires_grad=False 冻结层。</p>`,
        conceptDetail: 'num_classes 替换分类头。只训练最后一层可大幅减少训练时间。',
        code: `import torch
import torch.nn as nn
import torchvision.models as models
model = models.resnet18(pretrained=True)
for param in model.parameters():
  param.requires_grad = False
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 10)
# 仅训练分类头
optimizer = torch.optim.SGD(model.fc.parameters(), lr=0.001, momentum=0.9)
criterion = nn.CrossEntropyLoss()
def train_epoch(loader):
  model.train()
  for inputs, labels in loader:
    optimizer.zero_grad()
    outputs = model(inputs)
    loss = criterion(outputs, labels)
    loss.backward()
    optimizer.step()
  print(f"Loss: {loss.item():.4f}")`,
        verification: '迁移学习训练自定义分类器',
        filePath: 'transfer_learning.py',
        hints: ["pretrained=True 加载预训练权重","冻结所有层只替换 fc"],
        cognitiveLoad: 'medium', dependsOn: ['pytorch-5','pytorch-6'], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]