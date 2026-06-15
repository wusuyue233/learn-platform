export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'pytorch-1':
      check('tensor_basics.py', 'import torch', '创建和操作张量', '创建和操作张量')
      break
    case 'pytorch-2':
      check('autograd.py', 'import torch', '计算 y=x^2 在 x=3 时的导数', '计算 y=x^2 在 x=3 时的导数')
      break
    case 'pytorch-3':
      check('linear_regression.py', 'import torch, torch.', '训练模型拟合 y=2x+1', '训练模型拟合 y=2x+1')
      break
    case 'pytorch-4':
      check('mlp_mnist.py', 'class MLP(nn.Module)', 'MLP 在 MNIST 上训练及评估', 'MLP 在 MNIST 上训练及评估')
      break
    case 'pytorch-5':
      check('cnn_mnist.py', 'import torch', 'CNN 卷积网络结构定义', 'CNN 卷积网络结构定义')
      break
    case 'pytorch-6':
      check('data_loader.py', 'import torch', 'DataLoader 加载 MNIST', 'DataLoader 加载 MNIST')
      break
    case 'pytorch-7':
      check('model_save_load.py', 'import torch', 'PyTorch 模型保存和加载', 'PyTorch 模型保存和加载')
      break
    case 'pytorch-8':
      check('transfer_learning.py', 'import torch', '迁移学习训练自定义分类器', '迁移学习训练自定义分类器')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}