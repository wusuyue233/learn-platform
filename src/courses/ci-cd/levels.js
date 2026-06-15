export const phases = [
  {
    id: 'cicd-basics',
    name: '阶段一：CI/CD 基础',
    description: '掌握 GitHub Actions 工作流和自动化流水线',
    levels: [
      { id: 'ci-cd-1', number: 1, type: 'concept', title: 'GitHub Actions 入门', concept: 'Workflow', difficulty: 'easy',
        prerequisites: `<h4>GitHub Actions</h4><p>.github/workflows/ 目录放 YAML 工作流。on 定义触发事件。</p>`,
        conceptDetail: `jobs 定义任务。steps 是执行步骤。uses 引用官方 Action。`,
        code: `name: CI
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm test`,
        verification: '创建自动运行测试的工作流',
        filePath: '.github/workflows/test.yml',
        hints: ["push 和 pull_request 均可触发","actions/checkout@v4 检出代码"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'ci-cd-2', number: 2, type: 'concept', title: '构建与部署', concept: '多 Job 流水线', difficulty: 'medium',
        prerequisites: `<h4>部署流水线</h4><p>needs 控制 Job 顺序。upload-pages-artifact 上传构建产物。</p>`,
        conceptDetail: `deploy-pages 发布到 Pages。permissions 配置写权限。`,
        code: `name: Build & Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/deploy-pages@v4`,
        verification: '测试→构建→部署 GitHub Pages',
        filePath: '.github/workflows/deploy.yml',
        hints: ["needs: build 依赖前置任务","actions/deploy-pages@v4 部署"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'ci-cd-3', number: 3, type: 'concept', title: 'Docker 构建推送', concept: 'Docker Build Push', difficulty: 'hard',
        prerequisites: `<h4>Docker CI/CD</h4><p>docker/login-action 登录仓库。\${{ secrets.xxx }} 使用 GitHub 密钥。</p>`,
        conceptDetail: `tag 触发 v1.0.0 模式。build-push-action 构建推送。`,
        code: `name: Docker Build
on:
  push:
    tags: [v*]
jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
      - name: Build & Push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: user/app:latest`,
        verification: '自动构建 Docker 镜像并推送',
        filePath: '.github/workflows/docker.yml',
        hints: ["secrets 在 GitHub Settings 配置","tags 模式触发自动构建"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]