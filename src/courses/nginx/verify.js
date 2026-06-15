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
    case 'nginx-4':
      check('ssl.conf', 'server {', 'HTTPS 证书配置和 HTTP 跳转', 'HTTPS 证书配置和 HTTP 跳转')
      break
    case 'nginx-5':
      check('cache.conf', 'proxy_cache_path /var/cache/nginx', 'Nginx 代理缓存配置', 'Nginx 代理缓存配置')
      break
    case 'nginx-6':
      check('rate_limit.conf', 'limit_req_zone $binary_remote_addr', '请求限流 IP 限制配置', '请求限流 IP 限制配置')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}