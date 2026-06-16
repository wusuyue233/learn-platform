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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'GitHub Actions 文档', url: 'https://docs.github.com/zh/actions' },
        { title: 'GitHub Actions 工作流语法', url: 'https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions' }
        ],
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
        verification: '构建→部署 GitHub Pages',
        filePath: '.github/workflows/deploy.yml',
        hints: ["needs: build 依赖前置任务","actions/deploy-pages@v4 部署"],
        cognitiveLoad: 'medium', dependsOn: ['ci-cd-1'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'GitHub Actions 文档', url: 'https://docs.github.com/zh/actions' },
        { title: 'GitHub Actions 工作流语法', url: 'https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions' }
        ],
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
        cognitiveLoad: 'medium', dependsOn: ['ci-cd-2'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'GitHub Actions 文档', url: 'https://docs.github.com/zh/actions' },
        { title: 'GitHub Actions 工作流语法', url: 'https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions' }
        ],
      }
    ]
  }
  ,
  {
    id: 'cicd-advanced',
    name: '阶段二：CI/CD 进阶流水线',
    description: '掌握矩阵测试、服务容器和自动部署',
    levels: [
      { id: 'ci-cd-4', number: 4, type: 'concept', title: '矩阵测试', concept: 'Matrix Strategy', difficulty: 'medium',
        prerequisites: `<h4>矩阵策略</h4><p>strategy.matrix 多版本并行。include 添加额外组合。fail-fast 快速失败。</p>`,
        conceptDetail: 'matrix 自动展开为多个 Job。os/node 组合执行。continue-on-error 容忍失败。',
        code: `name: Matrix Test
on: [push, pull_request]
jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [18, 20, 22]
      fail-fast: false
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node }}
      - run: npm ci
      - run: npm test
      - name: Upload coverage
        uses: actions/upload-artifact@v4
        with:
          name: coverage-\${{ matrix.os }}-\${{ matrix.node }}
          path: coverage/`,
        verification: '矩阵测试多 OS/Node 版本并行',
        filePath: '.github/workflows/matrix.yml',
        hints: ["matrix 自动生成所有组合","fail-fast: false 继续其他组合"],
        cognitiveLoad: 'medium', dependsOn: ['ci-cd-1'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'GitHub Actions 文档', url: 'https://docs.github.com/zh/actions' },
        { title: 'GitHub Actions 工作流语法', url: 'https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions' }
        ],
      },
      { id: 'ci-cd-5', number: 5, type: 'concept', title: '服务容器', concept: 'Services', difficulty: 'medium',
        prerequisites: `<h4>服务容器</h4><p>services 启动依赖服务（数据库/Redis）。\${{ job.services.xxx }} 访问服务地址。</p>`,
        conceptDetail: 'Docker Hub 镜像名。ports 映射端口。健康检查自动等待。',
        code: `name: Integration Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: testdb
          POSTGRES_PASSWORD: testpass
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      redis:
        image: redis:7
        ports:
          - 6379:6379
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - name: Run integration tests
        env:
          DATABASE_URL: postgres://postgres:testpass@localhost:5432/testdb
          REDIS_URL: redis://localhost:6379
        run: npm run test:integration`,
        verification: '服务容器 Postgres/Redis',
        filePath: '.github/workflows/integration.yml',
        hints: ["services 自动拉取 Docker 镜像","health-cmd 等待服务就绪"],
        cognitiveLoad: 'medium', dependsOn: ['ci-cd-1'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'GitHub Actions 文档', url: 'https://docs.github.com/zh/actions' },
        { title: 'GitHub Actions 工作流语法', url: 'https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions' }
        ],
      },
      { id: 'ci-cd-6', number: 6, type: 'concept', title: 'SSH 自动部署', concept: 'SSH Deploy', difficulty: 'hard',
        prerequisites: `<h4>部署到服务器</h4><p>SSH 密钥在 GitHub Secrets 配置。rsync 同步文件。pm2 管理 Node 进程。</p>`,
        conceptDetail: '先构建再同步。部署后健康检查。回滚策略。',
        code: `name: Deploy to Server
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - name: Deploy via rsync
        uses: easingthemes/ssh-deploy@v5
        with:
          SSH_PRIVATE_KEY: \${{ secrets.SSH_PRIVATE_KEY }}
          ARGS: "-avz --delete"
          SOURCE: "dist/"
          REMOTE_HOST: \${{ secrets.HOST }}
          REMOTE_USER: \${{ secrets.USER }}
          TARGET: \${{ secrets.TARGET }}
      - name: Restart service
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.HOST }}
          username: \${{ secrets.USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd \${{ secrets.TARGET }}
            pm2 restart ecosystem.config.js --update-env
            pm2 save
      - name: Health check
        run: |
          curl -f http://\${{ secrets.HOST }}/api/health || exit 1`,
        verification: '构建后 rsync 同步重启',
        filePath: '.github/workflows/deploy-server.yml',
        hints: ["rsync --delete 删除多余文件","pm2 restart 重启服务进程"],
        cognitiveLoad: 'medium', dependsOn: ['ci-cd-2'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'GitHub Actions 文档', url: 'https://docs.github.com/zh/actions' },
        { title: 'GitHub Actions 工作流语法', url: 'https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions' }
        ],
      }
    ]
  }
]