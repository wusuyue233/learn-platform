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
]