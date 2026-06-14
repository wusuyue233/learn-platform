export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'docker-1':
      check('Dockerfile', 'FROM', '使用 FROM 指令', '指定了基础镜像')
      check('Dockerfile', 'RUN', '使用 RUN 指令', '执行了构建命令')
      check('Dockerfile', 'CMD', '使用 CMD 指令', '指定了启动命令')
      break
    case 'docker-2':
      check('Dockerfile', 'FROM', '使用 FROM 指令', '指定了基础镜像')
      check('Dockerfile', 'WORKDIR', '使用 WORKDIR 指令', '设置了工作目录')
      check('Dockerfile', 'COPY', '使用 COPY 指令', '复制了文件')
      check('Dockerfile', 'RUN', '使用 RUN 指令', '执行了安装命令')
      check('Dockerfile', 'EXPOSE', '使用 EXPOSE 指令', '声明了端口')
      break
    case 'docker-3':
      check('.dockerignore', 'node_modules', '排除依赖目录', '排除了 node_modules')
      check('.dockerignore', '.git', '排除 git 目录', '排除了 .git')
      check('.dockerignore', '.env', '排除环境变量', '排除了 .env 文件')
      break
    case 'docker-4':
      check('commands.sh', 'docker run', '使用 docker run', '启动了容器')
      check('commands.sh', '-d', '使用 -d 参数', '后台运行了容器')
      check('commands.sh', '--name', '使用 --name 参数', '命名了容器')
      break
    case 'docker-5':
      check('commands.sh', '-p', '使用 -p 参数', '进行了端口映射')
      break
    case 'docker-6':
      check('commands.sh', '-v', '使用 -v 参数', '挂载了数据卷')
      break
    case 'docker-7':
      check('commands.sh', '-e', '使用 -e 参数', '设置了环境变量')
      break
    case 'docker-8':
      check('docker-compose.yml', 'services', '定义 services', '配置了服务')
      check('docker-compose.yml', 'build', '配置 build', '指定了构建方式')
      check('docker-compose.yml', 'ports', '配置 ports', '映射了端口')
      break
    case 'docker-9':
      check('docker-compose.yml', 'depends_on', '配置依赖', '定义了服务依赖')
      check('docker-compose.yml', 'db', '定义数据库服务', '配置了 MySQL')
      check('docker-compose.yml', 'redis', '定义 Redis 服务', '配置了 Redis')
      break
    case 'docker-10':
      check('Dockerfile', 'AS builder', '多阶段构建', '使用了多阶段构建')
      check('Dockerfile', 'HEALTHCHECK', '健康检查', '配置了健康检查')
      check('docker-compose.yml', 'healthcheck', 'Compose 健康检查', '服务配置了健康检查')
      check('docker-compose.yml', 'restart', '重启策略', '配置了重启策略')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
