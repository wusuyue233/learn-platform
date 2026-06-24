export const phases = [
  {
    id: 'docker-concepts',
    name: '阶段一：基础概念',
    description: '理解镜像、容器、Dockerfile 的核心概念',
    levels: [
      {
        id: 'docker-1',
        number: 1,
        title: 'Docker 是什么',
        concept: '镜像与容器',
        difficulty: 'easy',
        type: 'concept',
        task: '编写一个简单的 Dockerfile，基于 Alpine Linux 打印 Hello Docker',
        prerequisites: `<h4>🐳 什么是 Docker</h4>
<p>Docker 是一个容器化平台，让应用及其依赖打包到一个轻量级、可移植的容器中运行。</p>
<pre><code>镜像 (Image) → 应用的只读模板
容器 (Container) → 镜像的运行实例
Dockerfile → 构建镜像的脚本
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><b>镜像</b>：分层的只读文件系统，包含运行应用所需的一切</li>
  <li><b>容器</b>：镜像的运行实例，有独立的文件系统和网络</li>
  <li><b>Dockerfile</b>：定义镜像构建步骤的文本文件</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解镜像层次
[镜像](只读模板，包含应用和运行环境) 是分层存储的，每条指令创建一层。

步骤 2 — 理解容器运行
[容器](镜像的运行实例) 是镜像的可写实例，停止后数据丢失（除非挂载卷）。

步骤 3 — 编写第一个 Dockerfile
FROM 指令指定基础镜像，RUN 执行命令，CMD 指定容器启动命令。`,
        contextCode: `# Dockerfile 基础指令参考
# FROM: 指定基础镜像
FROM alpine:latest
FROM node:20-alpine
FROM python:3.12-slim

# RUN: 执行命令
RUN apk add --no-cache curl
RUN npm install -g yarn

# CMD: 容器启动命令（可被 docker run 覆盖）
CMD ["echo", "Hello Docker"]

# ENTRYPOINT: 入口点（不容易被覆盖）
ENTRYPOINT ["python", "app.py"]`,
        starterCode: `# 从 alpine 基础镜像开始
FROM ???

# 打印 Hello Docker
RUN ???

# 指定容器启动时执行的命令
CMD ???
`,
        hints: [
          'FROM alpine:latest 指定基础镜像',
          'RUN echo "Hello Docker" 执行打印命令',
          'CMD ["echo", "Hello Docker"] 作为启动命令'
        ],
        code: `FROM alpine:latest
RUN echo "Hello Docker"
CMD ["echo", "Hello Docker"]`,
        verification: '编写了正确的 Dockerfile，包含 FROM、RUN、CMD 指令',
        filePath: 'Dockerfile',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
         {
          'pattern': 'COPY package*.json',
          'explanation': '先复制 package.json 再安装依赖，利用 Docker 缓存层'
         },
         {
          'pattern': 'WORKDIR',
          'explanation': 'WORKDIR /app 后所有路径都相对 /app，不要用绝对路径'
         },
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选定基础镜像',
          'verification': 'FROM alpine',
          'hint': 'FROM alpine:latest 指定基础镜像',
          docLinks: [{title: '选定基础镜像', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '添加打印命令',
          'verification': 'echo "Hello Docker"',
          'hint': 'RUN echo "Hello Docker" 执行打印命令',
          docLinks: [{title: '添加打印命令', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '设置启动命令',
          'verification': 'CMD',
          'hint': 'CMD ["echo", "Hello Docker"] 容器启动时打印',
          docLinks: [{title: 'Dockerfile 参考', url: 'https://docs.docker.com/reference/dockerfile/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      },
      {
        id: 'docker-2',
        number: 2,
        title: 'Dockerfile 基础',
        concept: '指令编写',
        difficulty: 'easy',
        type: 'concept',
        task: '为 Node.js 应用编写 Dockerfile，包含依赖安装和启动命令',
        prerequisites: `<h4>🐳 Dockerfile 常用指令</h4>
<pre><code>FROM      基础镜像
WORKDIR   工作目录
COPY      复制文件到镜像
RUN       构建时执行命令
ENV       环境变量
EXPOSE    声明端口
CMD       启动命令
</code></pre>

<h4>🔑 编写顺序</h4>
<ul>
  <li>FROM → WORKDIR → COPY package*.json → RUN npm install → COPY . → CMD</li>
  <li>先 COPY 依赖文件，再安装，利用 Docker 缓存层</li>
</ul>`,
        conceptDetail: `步骤 1 — 设置基础镜像和工作目录
FROM 选择运行环境，WORKDIR 设定工作目录。

步骤 2 — 复制依赖文件并安装
先复制 package.json 再 npm install，利用缓存加速构建。

步骤 3 — 复制源码并设置启动命令
COPY . 复制所有文件，CMD 指定启动脚本。`,
        contextCode: `# Node.js 应用 Dockerfile 参考
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

# 多阶段构建（减小镜像体积）
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]`,
        starterCode: `# 为电商后端编写 Dockerfile
# 基础镜像：node:20-alpine
FROM ???

# 设置工作目录为 /app
WORKDIR ???

# 先复制 package.json 利用缓存
COPY package*.json ./

# 安装生产依赖
RUN ???

# 复制所有源码
COPY ???

# 声明端口
EXPOSE 3000

# 启动命令
CMD ???
`,
        hints: [
          'FROM node:20-alpine',
          'WORKDIR /app',
          'RUN npm install --production',
          'COPY . .',
          'CMD ["node", "server.js"]'
        ],
        code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`,
        verification: '包含 FROM、WORKDIR、COPY、RUN、EXPOSE、CMD 指令',
        filePath: 'Dockerfile',
        cognitiveLoad: 'low',
        dependsOn: ['docker-1'],
        commonMistakes: [
         {
          'pattern': 'FROM',
          'explanation': 'FROM 必须指定有效的基础镜像，如 alpine:latest'
         },
         {
          'pattern': 'CMD',
          'explanation': 'CMD 用 JSON 数组格式 ["echo", "Hello Docker"]'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择基础镜像',
          'verification': 'FROM node:20-alpine',
          'hint': 'FROM node:20-alpine 选择 Node.js 基础镜像',
          docLinks: [{title: '选择基础镜像', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '设置工作目录',
          'verification': 'WORKDIR',
          'hint': 'WORKDIR /app 设置容器内工作目录',
          docLinks: [{title: '设置工作目录', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '复制依赖并安装',
          'verification': 'npm install',
          'hint': '先 COPY package*.json 再 npm install 利用缓存',
          docLinks: [{title: 'Dockerfile 参考', url: 'https://docs.docker.com/reference/dockerfile/'}],
         },
         {
          'id': 'step-4',
          'title': '设置启动命令',
          'verification': 'CMD',
          'hint': 'CMD ["node", "server.js"] 启动应用',
          docLinks: [{title: 'Dockerfile 参考', url: 'https://docs.docker.com/reference/dockerfile/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      },
      {
        id: 'docker-3',
        number: 3,
        title: '构建镜像',
        concept: 'docker build',
        difficulty: 'easy',
        type: 'concept',
        task: '编写 .dockerignore 文件并理解镜像构建过程',
        prerequisites: `<h4>🐳 docker build 命令</h4>
<pre><code>docker build -t my-app:1.0 .
docker build -t shop-api:latest -f Dockerfile.prod .
</code></pre>

<h4>🔑 .dockerignore</h4>
<ul>
  <li>类似 .gitignore，排除不需要的文件</li>
  <li>减小构建上下文大小，加速构建</li>
  <li>避免敏感文件进入镜像</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 .dockerignore
排除 node_modules、.git、.env 等文件，减小镜像体积。

步骤 2 — 理解构建缓存
Docker 逐层构建，未变化的层会使用缓存，先 COPY 依赖文件再安装可以利用缓存。

步骤 3 — 打标签
-t 参数给镜像命名和打标签，方便管理和推送。`,
        contextCode: `# .dockerignore 参考
node_modules
npm-debug.log
.git
.gitignore
.env
.env.*
dist
coverage
.vscode
.idea
*.md
docker-compose*.yml

# Dockerfile 命令参考
# -t: 指定镜像名称和标签
# -f: 指定 Dockerfile 路径
# .: 构建上下文路径
docker build -t shop-api:1.0 .
docker build -t shop-api:latest -f Dockerfile.prod .`,
        starterCode: `# 创建 .dockerignore，排除以下文件：
# node_modules、.git、.env 文件、dist 目录、文档文件

node_modules
???
???
???
???
`,
        hints: [
          'node_modules 排除依赖目录',
          '.git 排除版本控制文件',
          '.env* 排除环境变量文件',
          'dist 排除构建产物'
        ],
        code: `node_modules
.git
.gitignore
.env
.env.*
dist
coverage
.vscode
*.md
docker-compose*.yml`,
        verification: '创建了 .dockerignore 文件，排除了敏感和无用文件',
        filePath: '.dockerignore',
        cognitiveLoad: 'low',
        dependsOn: ['docker-2'],
        commonMistakes: [
         {
          'pattern': '.env',
          'explanation': '一定要排除 .env，防止 API 密钥泄露到镜像中'
         },
         {
          'pattern': 'node_modules',
          'explanation': 'node_modules 应排除，在镜像内重建更干净'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '排除 node_modules',
          'verification': 'node_modules',
          'hint': '排除依赖目录，避免构建上下文过大',
          docLinks: [{title: '排除 node_modules', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '排除 .git',
          'verification': '.git',
          'hint': '排除版本控制文件',
          docLinks: [{title: '排除 .git', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '排除 .env',
          'verification': '.env',
          'hint': '排除环境变量文件，防泄露密钥',
          docLinks: [{title: '.dockerignore', url: 'https://docs.docker.com/engine/reference/builder/#dockerignore-file'}],
         },
        ],
        variations: [
         {
          'name': 'docker-compose',
          'description': '多容器用 docker-compose 管理'
         }
        ],
        transferTasks: [
         {
          'task': '编写 Dockerfile + docker-compose 启动',
          'target': '掌握容器化部署'
         }
        ],
      }
    ]
  },
  {
    id: 'docker-operations',
    name: '阶段二：容器操作',
    description: '掌握容器的运行、端口映射、数据卷和环境变量',
    levels: [
      {
        id: 'docker-4',
        number: 4,
        title: '运行容器',
        concept: 'docker run',
        difficulty: 'easy',
        type: 'concept',
        task: '编写 docker run 命令启动一个 Nginx 容器',
        prerequisites: `<h4>🐳 docker run 常用参数</h4>
<pre><code>docker run -d --name web nginx        # 后台运行
docker run -it alpine sh              # 交互模式
docker run --rm nginx                  # 自动删除
docker run -d -p 8080:80 nginx        # 端口映射
</code></pre>

<h4>🔑 核心参数</h4>
<ul>
  <li><code>-d</code> — 后台运行（detach）</li>
  <li><code>--name</code> — 容器命名</li>
  <li><code>-it</code> — 交互模式 + 终端</li>
  <li><code>--rm</code> — 停止后自动删除</li>
</ul>`,
        conceptDetail: `步骤 1 — 后台运行容器
-d 参数让容器在后台运行，不会阻塞终端。

步骤 2 — 命名容器
--name 给容器起一个有意义的名字，方便后续管理。

步骤 3 — 查看运行中的容器
docker ps 查看正在运行的容器，docker ps -a 查看所有容器。`,
        contextCode: `# docker run 命令参考
# 基本运行
docker run nginx

# 后台运行 + 命名
docker run -d --name my-nginx nginx

# 交互模式
docker run -it ubuntu bash

# 自动清理
docker run --rm alpine echo "hello"

# 查看容器
docker ps              # 运行中的容器
docker ps -a           # 所有容器（含已停止）
docker logs <name>     # 查看日志
docker stop <name>     # 停止容器
docker rm <name>       # 删除容器`,
        starterCode: `# 后台运行 Nginx 容器，命名为 web-server
docker run -d --name ??? nginx

# 查看正在运行的容器
docker ???

# 查看 web-server 的日志
docker logs ???

# 停止并删除容器
docker stop ???
docker rm ???
`,
        hints: [
          'docker run -d --name web-server nginx',
          'docker ps 查看运行中的容器',
          'docker logs web-server 查看日志'
        ],
        code: `docker run -d --name web-server nginx
docker ps
docker logs web-server
docker stop web-server
docker rm web-server`,
        verification: '使用了 docker run -d --name 启动后台容器',
        filePath: 'commands.sh',
        cognitiveLoad: 'low',
        dependsOn: ['docker-3'],
        commonMistakes: [
         {
          'pattern': '-p',
          'explanation': '-p 宿主机端口:容器端口，注意顺序不要反了'
         },
         {
          'pattern': 'EXPOSE',
          'explanation': 'Dockerfile 的 EXPOSE 只是声明，真正的映射要靠 -p 运行时指定'
         },
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '后台运行容器',
          'verification': 'docker run -d',
          'hint': '-d 后台运行不阻塞终端',
          docLinks: [{title: '后台运行容器', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '命名容器',
          'verification': '--name',
          'hint': '--name web-server 给容器命名，便于管理',
          docLinks: [{title: '命名容器', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '查看运行状态',
          'verification': 'docker ps',
          'hint': 'docker ps 查看运行中的容器',
          docLinks: [{title: 'Docker 运行容器', url: 'https://docs.docker.com/engine/reference/run/'}],
         },
        ],
        variations: [
         {
          'name': 'docker-compose',
          'description': '多容器用 docker-compose 管理'
         }
        ],
        transferTasks: [
         {
          'task': '编写 Dockerfile + docker-compose 启动',
          'target': '掌握容器化部署'
         }
        ],
      },
      {
        id: 'docker-5',
        number: 5,
        title: '端口映射',
        concept: '-p 参数',
        difficulty: 'medium',
        type: 'concept',
        task: '将容器端口映射到宿主机，实现外部访问',
        prerequisites: `<h4>🐳 端口映射</h4>
<pre><code>docker run -p 8080:80 nginx    # 宿主机8080 → 容器80
docker run -p 127.0.0.1:3000:3000 app  # 限定访问地址
docker run -P nginx              # 自动映射所有 EXPOSE 端口
</code></pre>

<h4>🔑 端口格式</h4>
<ul>
  <li><code>-p 8080:80</code> → 宿主机端口:容器端口</li>
  <li><code>-p 127.0.0.1:3000:3000</code> → 只允许本地访问</li>
  <li><code>-p 8080:80/udp</code> → 指定协议</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解端口映射原理
容器有独立的网络空间，通过 -p 将宿主机端口转发到容器端口。

步骤 2 — 映射应用端口
电商应用通常暴露 3000 或 8000 端口，映射到宿主机方便浏览器访问。

步骤 3 — 限定绑定地址
127.0.0.1 限定只允许本机访问，安全考虑生产环境应限制访问来源。`,
        contextCode: `# 端口映射参考
# 宿主机端口:容器端口
docker run -p 3000:3000 my-app       # 外部 3000 访问容器 3000
docker run -p 8080:80 nginx           # 外部 8080 访问容器 80

# 多端口映射
docker run -p 3000:3000 -p 8080:80 app

# 限定绑定地址（只允许本机）
docker run -p 127.0.0.1:3000:3000 app

# Dockerfile 中的 EXPOSE 只是声明，实际映射靠 -p
EXPOSE 3000
# docker run -p 3000:3000 才真正映射`,
        starterCode: `# 启动电商 API，映射端口 8000:3000
docker run -d -p ??? -e NODE_ENV=production shop-api

# 启动 MySQL，映射端口并限制本机访问
docker run -d -p ??? -e MYSQL_ROOT_PASSWORD=secret mysql:8

# 查看端口映射
docker port ???
`,
        hints: [
          '-p 8000:3000 宿主机8000映射容器3000',
          'MySQL 端口 -p 127.0.0.1:3306:3306',
          'docker port <container> 查看映射'
        ],
        code: `docker run -d -p 8000:3000 -e NODE_ENV=production shop-api
docker run -d -p 127.0.0.1:3306:3306 -e MYSQL_ROOT_PASSWORD=secret mysql:8
docker port web-server`,
        verification: '使用了 -p 参数进行端口映射',
        filePath: 'commands.sh',
        cognitiveLoad: 'medium',
        dependsOn: ['docker-4'],
        commonMistakes: [
         {
          'pattern': '-p',
          'explanation': '-p 宿主机端口:容器端口，顺序不要反了'
         },
         {
          'pattern': 'EXPOSE',
          'explanation': 'EXPOSE 只是声明，真正映射靠 -p 运行时指定'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '使用 -p 映射端口',
          'verification': '-p',
          'hint': '-p 8000:3000 宿主机 8000 → 容器 3000',
          docLinks: [{title: '使用 -p 映射端口', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '限定绑定地址',
          'verification': '127.0.0.1:3306',
          'hint': '127.0.0.1:3306:3306 只允许本机访问数据库',
          docLinks: [{title: '限定绑定地址', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '查看端口映射',
          'verification': 'docker port',
          'hint': 'docker port web-server 查看当前容器的端口映射',
          docLinks: [{title: 'Docker 运行容器', url: 'https://docs.docker.com/engine/reference/run/'}, {title: 'Docker Compose 文档', url: 'https://docs.docker.com/compose/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      },
      {
        id: 'docker-6',
        number: 6,
        title: '数据卷挂载',
        concept: '-v / --mount',
        difficulty: 'medium',
        type: 'concept',
        task: '挂载数据卷实现数据持久化和热更新',
        prerequisites: `<h4>🐳 数据卷</h4>
<pre><code>docker run -v /host/path:/container/path app   # 绑定挂载
docker run -v mydata:/var/lib/mysql mysql       # 命名卷
docker run --mount type=bind,src=/host,dst=/app app  # mount 语法
</code></pre>

<h4>🔑 挂载类型</h4>
<ul>
  <li><b>绑定挂载</b>：宿主机目录 → 容器目录</li>
  <li><b>命名卷</b>：Docker 管理的持久化存储</li>
  <li><b>匿名卷</b>：自动生成名称的卷</li>
</ul>`,
        conceptDetail: `步骤 1 — 绑定挂载源码目录
将宿主机的代码目录挂载到容器内，实现开发时的热更新。

步骤 2 — 使用命名卷持久化数据
数据库数据需要持久化，使用命名卷避免容器删除后数据丢失。

步骤 3 — 挂载配置文件
将 .env 或配置文件挂载到容器中，方便环境切换。`,
        contextCode: `# 数据挂载参考
# 绑定挂载（开发时热更新）
docker run -v $(pwd)/src:/app/src -v $(pwd)/package.json:/app/package.json node:20

# 命名卷（数据持久化）
docker volume create shop-db-data
docker run -v shop-db-data:/var/lib/mysql mysql:8

# 挂载配置文件
docker run -v $(pwd)/.env:/app/.env:ro shop-api
# :ro 表示只读挂载

# --mount 语法（更明确）
docker run --mount type=volume,source=mydata,target=/data app
docker run --mount type=bind,source=/host/path,target=/app/path app`,
        starterCode: `# 开发模式：挂载源码目录实现热更新
docker run -d -p 3000:3000 \\
  -v ??? \\
  node:20

# 数据库：使用命名卷持久化数据
docker volume create shop-db-data
docker run -d -p 3306:3306 \\
  -v ??? \\
  -e MYSQL_ROOT_PASSWORD=secret \\
  mysql:8

# 挂载 .env 配置文件（只读）
docker run -d -v ??? shop-api
`,
        hints: [
          '-v $(pwd)/src:/app/src 挂载源码',
          '-v shop-db-data:/var/lib/mysql 挂载命名卷',
          '-v $(pwd)/.env:/app/.env:ro 只读挂载配置'
        ],
        code: `docker run -d -p 3000:3000 -v $(pwd)/src:/app/src node:20
docker run -d -p 3306:3306 -v shop-db-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=secret mysql:8
docker run -d -v $(pwd)/.env:/app/.env:ro shop-api`,
        verification: '使用了 -v 参数进行数据卷挂载',
        filePath: 'commands.sh',
        cognitiveLoad: 'medium',
        dependsOn: ['docker-5'],
        commonMistakes: [
         {
          'pattern': '-v',
          'explanation': '-v 宿主机路径:容器路径，Windows 需用绝对路径'
         },
         {
          'pattern': ':ro',
          'explanation': ':ro 只读挂载防止容器修改宿主机文件'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '绑定挂载源码',
          'verification': '-v $(pwd)/src:/app/src',
          'hint': '-v $(pwd)/src:/app/src 源码目录挂载到容器实现热更新',
          docLinks: [{title: '绑定挂载源码', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '命名卷持久化数据',
          'verification': 'shop-db-data',
          'hint': '-v shop-db-data:/var/lib/mysql 使用命名卷持久化数据库',
          docLinks: [{title: '命名卷持久化数据', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '只读挂载配置',
          'verification': ':ro',
          'hint': '-v $(pwd)/.env:/app/.env:ro 只读挂载配置文件',
          docLinks: [{title: 'Docker 数据卷', url: 'https://docs.docker.com/storage/volumes/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      },
      {
        id: 'docker-7',
        number: 7,
        title: '环境变量',
        concept: '-e / ENV',
        difficulty: 'medium',
        type: 'concept',
        task: '通过环境变量配置应用的不同环境',
        prerequisites: `<h4>🐳 环境变量</h4>
<pre><code># docker run 传入
docker run -e NODE_ENV=production -e DB_HOST=mysql app

# Dockerfile 中设置
ENV NODE_ENV=production
ENV PORT=3000

# 从文件读取
docker run --env-file .env app
</code></pre>

<h4>🔑 使用场景</h4>
<ul>
  <li>数据库连接信息</li>
  <li>API 密钥和 Token</li>
  <li>应用运行模式</li>
</ul>`,
        conceptDetail: `步骤 1 — 在 Dockerfile 中设置默认值
ENV 设置镜像的默认环境变量，可被运行时覆盖。

步骤 2 — 在 docker run 中传入配置
-e 参数传递环境变量，覆盖 Dockerfile 中的默认值。

步骤 3 — 使用 env-file 批量管理
--env-file 从文件读取所有环境变量，适合管理多个配置。`,
        contextCode: `# 环境变量参考
# Dockerfile 中设置默认值
ENV NODE_ENV=development
ENV PORT=3000
ENV DB_HOST=localhost

# docker run 传入
docker run -e NODE_ENV=production -e DB_HOST=mysql shop-api

# 从文件读取
# .env 文件内容：
# NODE_ENV=production
# DB_HOST=mysql
# DB_PASS=secret123
docker run --env-file .env shop-api

# 多个 -e 参数
docker run -e NODE_ENV=production \\
           -e DB_HOST=mysql \\
           -e DB_PORT=3306 \\
           -e REDIS_HOST=redis \\
           shop-api`,
        starterCode: `# 用环境变量配置生产环境的电商 API
docker run -d -p 8000:3000 \\
  -e ??? \\
  -e ??? \\
  -e ??? \\
  shop-api

# 从 .env 文件批量加载配置
docker run -d --env-file ??? shop-api

# Dockerfile 中设置默认环境变量
ENV ???
ENV ???
`,
        hints: [
          '-e NODE_ENV=production 设置运行环境',
          '-e DB_HOST=mysql 数据库地址',
          '--env-file .env 从文件加载',
          'ENV PORT=3000 在 Dockerfile 中设置默认值'
        ],
        code: `docker run -d -p 8000:3000 \\
  -e NODE_ENV=production \\
  -e DB_HOST=mysql \\
  -e DB_PORT=3306 \\
  shop-api

docker run -d --env-file .env shop-api`,
        verification: '使用了 -e 参数或 --env-file 传递环境变量',
        filePath: 'commands.sh',
        cognitiveLoad: 'medium',
        dependsOn: ['docker-6'],
        commonMistakes: [
         {
          'pattern': '-e',
          'explanation': '-e 传入的环境变量覆盖 Dockerfile 的 ENV 默认值'
         },
         {
          'pattern': '--env-file',
          'explanation': '--env-file 每行 KEY=value，不要引号包裹值'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '传入环境变量',
          'verification': '-e NODE_ENV',
          'hint': '-e NODE_ENV=production 设置运行环境',
          docLinks: [{title: '传入环境变量', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '配置数据库连接',
          'verification': '-e DB_HOST',
          'hint': '-e DB_HOST=mysql 指定数据库地址',
          docLinks: [{title: '配置数据库连接', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '从文件加载配置',
          'verification': '--env-file',
          'hint': '--env-file .env 从文件批量加载变量',
          docLinks: [{title: 'Docker 环境变量', url: 'https://docs.docker.com/compose/environment-variables/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      }
    ]
  },
  {
    id: 'docker-compose',
    name: '阶段三：编排部署',
    description: '使用 Docker Compose 编排多服务电商系统',
    levels: [
      {
        id: 'docker-8',
        number: 8,
        title: 'docker-compose.yml',
        concept: 'Compose 语法',
        difficulty: 'medium',
        type: 'concept',
        task: '编写 docker-compose.yml 定义一个 Web 服务',
        prerequisites: `<h4>🐳 Docker Compose</h4>
<pre><code>version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>services</code> — 定义服务容器</li>
  <li><code>build</code> — 从 Dockerfile 构建</li>
  <li><code>image</code> — 使用已有镜像</li>
  <li><code>ports</code> — 端口映射</li>
  <li><code>volumes</code> — 数据卷挂载</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义服务名称
services 下的每个键名就是服务名称，如 web、api、db。

步骤 2 — 指定构建方式或镜像
build 从 Dockerfile 构建，image 直接使用已有镜像。

步骤 3 — 配置端口和环境
ports 映射端口，environment 设置环境变量。`,
        contextCode: `# docker-compose.yml 基本结构
version: '3.8'

services:
  web:
    build: .                    # 从 Dockerfile 构建
    image: my-app:latest        # 或使用已有镜像
    container_name: web-app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - ./src:/app/src
    restart: unless-stopped

# 常用命令
# docker compose up -d        启动所有服务
# docker compose down          停止并删除
# docker compose logs -f       查看日志
# docker compose ps            查看状态`,
        starterCode: `# 用 docker-compose.yml 定义电商 Web 服务
version: '3.8'

services:
  web:
    # 从当前目录的 Dockerfile 构建
    build: ???
    # 容器名称
    container_name: ???
    # 端口映射
    ports:
      - ???
    # 环境变量
    environment:
      - ???
    # 数据卷挂载
    volumes:
      - ???
    # 重启策略
    restart: ???
`,
        hints: [
          'build: . 从当前目录构建',
          'container_name: shop-web',
          'ports: "3000:3000"',
          'volumes: ./src:/app/src',
          'restart: unless-stopped'
        ],
        code: `version: '3.8'

services:
  web:
    build: .
    container_name: shop-web
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - ./src:/app/src
    restart: unless-stopped`,
        verification: '编写了 docker-compose.yml，包含 services、build、ports 等配置',
        filePath: 'docker-compose.yml',
        cognitiveLoad: 'medium',
        dependsOn: ['docker-7'],
        commonMistakes: [
         {
          'pattern': 'version:',
          'explanation': '新版 Docker 已弃用 version 字段，直接识别 services'
         },
         {
          'pattern': 'build:',
          'explanation': 'build: . 和 image: 不能同时用'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '定义 services',
          'verification': 'services:',
          'hint': 'services 下列出所有服务，web 是服务名',
          docLinks: [{title: '定义 services', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '配置构建方式',
          'verification': 'build:',
          'hint': 'build: . 从当前目录的 Dockerfile 构建',
          docLinks: [{title: '配置构建方式', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '配置端口映射',
          'verification': '3000:3000',
          'hint': 'ports 下的 "3000:3000" 映射应用端口',
          docLinks: [{title: 'Docker 运行容器', url: 'https://docs.docker.com/engine/reference/run/'}, {title: 'Docker Compose 文档', url: 'https://docs.docker.com/compose/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      },
      {
        id: 'docker-9',
        number: 9,
        title: '多服务编排',
        concept: '服务依赖',
        difficulty: 'medium',
        type: 'concept',
        task: '编排 API、MySQL、Redis 三个服务的依赖关系',
        prerequisites: `<h4>🐳 多服务编排</h4>
<pre><code>services:
  api:
    depends_on:
      - db
      - redis
  db:
    image: mysql:8
  redis:
    image: redis:7-alpine
</code></pre>

<h4>🔑 依赖与网络</h4>
<ul>
  <li><code>depends_on</code> — 启动顺序依赖</li>
  <li>Compose 自动创建默认网络，服务间用服务名通信</li>
  <li><code>links</code>（已废弃）→ 用服务名直接访问</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义数据库服务
使用 MySQL 镜像，配置 root 密码和数据卷。

步骤 2 — 定义缓存服务
使用 Redis 镜像，配置密码和持久化。

步骤 3 — 定义应用服务并配置依赖
API 服务 depends_on 数据库和缓存，通过服务名连接。`,
        contextCode: `# 多服务编排参考
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
      - redis
    environment:
      - DB_HOST=db          # 用服务名连接
      - DB_PORT=3306
      - REDIS_HOST=redis
      - REDIS_PORT=6379

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: shop
    volumes:
      - db-data:/var/lib/mysql

  redis:
    image: redis:7-alpine
    command: redis-server --requirepass secret

volumes:
  db-data:

# 服务间通信：api 用 "db" 作为主机名连接 MySQL
# MySQL 端口自动为 3306`,
        starterCode: `# 编排电商系统：API + MySQL + Redis
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - ???
      - ???
    environment:
      - DB_HOST=???
      - DB_PORT=3306
      - DB_PASSWORD=secret
      - REDIS_HOST=???
      - REDIS_PORT=6379

  db:
    image: ???
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: shop
    volumes:
      - db-data:/var/lib/mysql

  redis:
    image: ???
    command: redis-server --requirepass secret

volumes:
  db-data:
`,
        hints: [
          'depends_on: db, redis',
          'DB_HOST=db 用服务名连接',
          'MySQL 镜像 mysql:8',
          'Redis 镜像 redis:7-alpine'
        ],
        code: `version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
      - redis
    environment:
      - DB_HOST=db
      - DB_PORT=3306
      - DB_PASSWORD=secret
      - REDIS_HOST=redis
      - REDIS_PORT=6379

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: shop
    volumes:
      - db-data:/var/lib/mysql

  redis:
    image: redis:7-alpine
    command: redis-server --requirepass secret

volumes:
  db-data:`,
        verification: '编排了三个服务并配置了 depends_on 依赖关系',
        filePath: 'docker-compose.yml',
        cognitiveLoad: 'medium',
        dependsOn: ['docker-8'],
        commonMistakes: [
         {
          'pattern': 'depends_on',
          'explanation': 'depends_on 只控制启动顺序，需要 healthcheck 确保就绪'
         },
         {
          'pattern': 'volumes',
          'explanation': '命名卷需在顶层 volumes: 声明，避免匿名卷无法管理'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '定义 API 服务',
          'verification': 'depends_on',
          'hint': 'depends_on 控制服务启动顺序，api 依赖 db 和 redis',
          docLinks: [{title: '定义 API 服务', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '配置 MySQL',
          'verification': 'mysql:8',
          'hint': 'MySQL 8 镜像，设置 root 密码和数据卷',
          docLinks: [{title: '配置 MySQL', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '配置 Redis',
          'verification': 'redis:7-alpine',
          'hint': 'Redis 7 Alpine 镜像，redis-server 加密码启动',
          docLinks: [{title: 'Docker Compose 文档', url: 'https://docs.docker.com/compose/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      },
      {
        id: 'docker-10',
        number: 10,
        title: '实战 - 电商系统 Docker 部署',
        concept: '生产部署',
        difficulty: 'hard',
        type: 'concept',
        task: '完成电商系统的完整 Docker 部署配置',
        prerequisites: `<h4>🐳 生产部署要点</h4>
<pre><code># 多阶段构建减小镜像体积
# 健康检查确保服务可用
# 日志配置便于排查问题
# 资源限制防止服务耗尽资源
</code></pre>

<h4>🔑 生产配置</h4>
<ul>
  <li><b>多阶段构建</b>：分离构建和运行环境</li>
  <li><b>健康检查</b>：HEALTHCHECK 指令</li>
  <li><b>日志配置</b>：限制日志大小</li>
  <li><b>资源限制</b>：限制 CPU 和内存</li>
</ul>`,
        conceptDetail: `步骤 1 — 多阶段构建
builder 阶段安装依赖和构建，生产阶段只复制构建产物。

步骤 2 — 健康检查
HEALTHCHECK 指令让 Docker 知道如何检测服务是否正常。

步骤 3 — 完整的 Compose 配置
包含网络、数据卷、健康检查、重启策略等生产配置。`,
        contextCode: `# 生产环境 Dockerfile（多阶段构建）
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD curl -f http://localhost:3000/health || exit 1
CMD ["node", "dist/index.js"]

# docker-compose.yml 生产配置
# docker compose up -d --build
# docker compose logs -f api
# docker compose ps`,
        starterCode: `# 完成电商系统的生产 Dockerfile（多阶段构建）
# 阶段一：构建
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN ???
COPY . .
RUN ???

# 阶段二：生产运行
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE ???
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD ???
CMD ???

---
# 完整的 docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    environment:
      - NODE_ENV=production
      - DB_HOST=db
      - REDIS_HOST=redis
    restart: ???

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: shop
    volumes:
      - db-data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    command: redis-server --requirepass secret
    healthcheck:
      test: ["CMD", "redis-cli", "-a", "secret", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  db-data:
`,
        hints: [
          'npm ci 安装依赖',
          'npm run build 构建前端',
          'EXPOSE 3000 声明端口',
          'CMD ["node", "dist/index.js"] 启动应用',
          'restart: unless-stopped 自动重启'
        ],
        code: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD curl -f http://localhost:3000/health || exit 1
CMD ["node", "dist/index.js"]`,
        verification: '编写了多阶段构建的 Dockerfile 和完整的 docker-compose.yml',
        filePath: 'Dockerfile',
        cognitiveLoad: 'high',
        dependsOn: ['docker-9'],
        commonMistakes: [
         {
          'pattern': 'AS builder',
          'explanation': '多阶段构建用 AS 命名阶段，COPY --from=builder 引用'
         },
         {
          'pattern': 'HEALTHCHECK',
          'explanation': 'HEALTHCHECK CMD 返回非 0 即不健康'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '多阶段构建',
          'verification': 'AS builder',
          'hint': 'builder 阶段安装依赖构建，生产阶段只复制产物减小体积',
          docLinks: [{title: '多阶段构建', url: 'https://docs.docker.com/get-started/overview/'}],
         },
         {
          'id': 'step-2',
          'title': '健康检查',
          'verification': 'HEALTHCHECK',
          'hint': 'HEALTHCHECK 让 Docker 自动检测服务是否健康',
          docLinks: [{title: '健康检查', url: 'https://docs.docker.com/get-started/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/engine/reference/builder/'}],
         },
         {
          'id': 'step-3',
          'title': '配置文件',
          'verification': 'healthcheck',
          'hint': 'Compose 文件中配置 healthcheck 和 restart 策略',
          docLinks: [{title: 'Docker 官方文档', url: 'https://docs.docker.com/'}, {title: 'Dockerfile 参考', url: 'https://docs.docker.com/reference/dockerfile/'}],
         },
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ],
      }
    ]
  }
]
