export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'nginx-1':
      check('static.conf', 'server {', 'Nginx 配置静态文件服务器', 'Nginx 配置静态文件服务器')
      break
    case 'nginx-2':
      check('api.conf', 'server {', '反向代理转发 API 到后端', '反向代理转发 API 到后端')
      break
    case 'nginx-3':
      check('lb.conf', 'upstream backend {', 'upstream 配置多服务器负载均衡', 'upstream 配置多服务器负载均衡')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}