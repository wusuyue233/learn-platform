export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'ci-cd-1':
      check('test.yml', 'name: CI', '创建自动运行测试的工作流', '创建自动运行测试的工作流')
      break
    case 'ci-cd-2':
      check('deploy.yml', 'name: Build & Deploy', '测试→构建→部署 GitHub Pages', '测试→构建→部署 GitHub Pages')
      break
    case 'ci-cd-3':
      check('docker.yml', 'name: Docker Build', '自动构建 Docker 镜像并推送', '自动构建 Docker 镜像并推送')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}