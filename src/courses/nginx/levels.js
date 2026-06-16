export const phases = [
  {
    id: 'nginx-basics',
    name: '阶段一：Nginx 基础',
    description: '掌握 Nginx 核心配置和反向代理',
    levels: [
      { id: 'nginx-1', number: 1, type: 'concept', title: '静态文件服务', concept: 'root / index', difficulty: 'easy',
        prerequisites: `<h4>Nginx 静态服务</h4><p>root 指定根目录。index 指定默认文件。</p>`,
        conceptDetail: `server 块定义虚拟主机。location 匹配 URL 路径。$uri 请求 URI。try_files 依次尝试文件路径。`,
        code: `server {
  listen 80;
  server_name static.example.com;
  root /var/www/html;
  index index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}`,
        verification: 'Nginx 配置静态文件服务器',
        filePath: '/etc/nginx/conf.d/static.conf',
        hints: ["root 指向静态目录","try_files 尝试多个文件路径"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'Nginx 官方文档', url: 'https://nginx.org/en/docs/' },
        { title: 'Nginx 初学者指南', url: 'https://nginx.org/en/docs/beginners_guide.html' }
        ],
      },
      { id: 'nginx-2', number: 2, type: 'concept', title: '反向代理', concept: 'proxy_pass', difficulty: 'medium',
        prerequisites: `<h4>反向代理</h4><p>proxy_pass 转发请求。proxy_set_header 传递请求头。</p>`,
        conceptDetail: `proxy_pass 加 / 去除前缀。proxy_set_header 传递请求头。$host/$remote_addr 客户端信息。WebSocket 需 upgrade 配置。`,
        code: `server {
  listen 80;
  server_name api.example.com;
  location /api/ {
    proxy_pass http://localhost:8080/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
  location /ws/ {
    proxy_pass http://localhost:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}`,
        verification: '反向代理转发 API 到后端',
        filePath: '/etc/nginx/conf.d/api.conf',
        hints: ["proxy_set_header 传递真实 IP","location /ws/ 处理 WebSocket"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'Nginx 官方文档', url: 'https://nginx.org/en/docs/' },
        { title: 'Nginx 初学者指南', url: 'https://nginx.org/en/docs/beginners_guide.html' }
        ],
      },
      { id: 'nginx-3', number: 3, type: 'concept', title: '负载均衡', concept: 'upstream', difficulty: 'medium',
        prerequisites: `<h4>负载均衡</h4><p>upstream 定义服务器组。轮询/最少连接/IP 哈希策略。</p>`,
        conceptDetail: `weight 控制权重。backup 备用服务器。least_conn 最少连接。`,
        code: `upstream backend {
  least_conn;
  server 192.168.1.10:8080 weight=3;
  server 192.168.1.11:8080 weight=2;
  server 192.168.1.12:8080 backup;
}
server {
  listen 80;
  server_name app.example.com;
  location / {
    proxy_pass http://backend;
  }
}`,
        verification: 'upstream 配置多服务器负载均衡',
        filePath: '/etc/nginx/conf.d/lb.conf',
        hints: ["weight 控制流量比例","backup 仅其他服务不可用时启用"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'Nginx 官方文档', url: 'https://nginx.org/en/docs/' },
        { title: 'Nginx 初学者指南', url: 'https://nginx.org/en/docs/beginners_guide.html' }
        ],
      }
    ]
  }
  ,
  {
    id: 'nginx-advanced',
    name: '阶段二：Nginx 进阶配置',
    description: '掌握 HTTPS、缓存和限流安全策略',
    levels: [
      { id: 'nginx-4', number: 4, type: 'concept', title: 'HTTPS 配置', concept: 'SSL/TLS', difficulty: 'medium',
        prerequisites: `<h4>HTTPS</h4><p>ssl_certificate 证书路径。ssl_certificate_key 私钥。Let's Encrypt 免费证书。</p>`,
        conceptDetail: 'ssl_protocols TLSv1.2/TLSv1.3。ssl_ciphers 加密套件。ssl_session_cache 会话缓存。ssl_prefer_server_ciphers 服务端算法优先。$server_name/$request_uri 跳转变量。HTTP/2 需 HTTPS。',
        code: `server {
  listen 443 ssl http2;
  server_name example.com;
  ssl_certificate /etc/nginx/ssl/cert.pem;
  ssl_certificate_key /etc/nginx/ssl/key.pem;
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
  location / {
    root /var/www/html;
    index index.html;
  }
}
server {
  listen 80;
  server_name example.com;
  return 301 https://$server_name$request_uri;
}`,
        verification: 'HTTPS 证书配置和 HTTP 跳转',
        filePath: '/etc/nginx/conf.d/ssl.conf',
        hints: ["listen 443 ssl 启用 HTTPS","return 301 强制跳转 HTTPS"],
        cognitiveLoad: 'medium', dependsOn: ['nginx-1'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'Nginx 官方文档', url: 'https://nginx.org/en/docs/' },
        { title: 'Nginx 初学者指南', url: 'https://nginx.org/en/docs/beginners_guide.html' }
        ],
      },
      { id: 'nginx-5', number: 5, type: 'concept', title: '缓存策略', concept: 'proxy_cache', difficulty: 'medium',
        prerequisites: `<h4>缓存</h4><p>proxy_cache_path 定义缓存区。proxy_cache 启用缓存。Cache-Control 控制缓存时间。</p>`,
        conceptDetail: 'proxy_cache_valid 按状态码设置时间。proxy_cache_key 缓存键。$upstream_cache_status 缓存命中状态。proxy_cache_use_stale 过期使用降级缓存。proxy_no_cache/bypass 跳过/绕过缓存。',
        code: `proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=mycache:10m max_size=1g inactive=60m;
server {
  listen 80;
  server_name api.example.com;
  location /api/ {
    proxy_cache mycache;
    proxy_cache_key "$scheme$request_method$host$request_uri";
    proxy_cache_valid 200 302 10m;
    proxy_cache_valid 404 1m;
    proxy_cache_use_stale error timeout updating;
    add_header X-Cache-Status $upstream_cache_status;
    proxy_pass http://localhost:8080/;
  }
  location /api/orders/ {
    proxy_no_cache $cookie_session;
    proxy_cache_bypass $cookie_session;
    proxy_pass http://localhost:8080/;
  }
}`,
        verification: 'Nginx 代理缓存配置',
        filePath: '/etc/nginx/conf.d/cache.conf',
        hints: ["proxy_cache_path 定义存储位置","proxy_cache_valid 按状态码设置时间"],
        cognitiveLoad: 'medium', dependsOn: ['nginx-2'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'Nginx 官方文档', url: 'https://nginx.org/en/docs/' },
        { title: 'Nginx 初学者指南', url: 'https://nginx.org/en/docs/beginners_guide.html' }
        ],
      },
      { id: 'nginx-6', number: 6, type: 'concept', title: '限流与安全', concept: 'limit_req', difficulty: 'hard',
        prerequisites: `<h4>限流</h4><p>limit_req_zone 定义限流区。limit_req 应用限流。burst 突发缓冲。</p>`,
        conceptDetail: '$binary_remote_addr 客户端 IP。nodelay 无延迟处理突发。limit_conn 连接数限制。limit_rate 带宽限速。allow/deny IP 黑白名单。',
        code: `limit_req_zone $binary_remote_addr zone=api:10m rate=30r/m;
limit_conn_zone $binary_remote_addr zone=conn:10m;
server {
  listen 80;
  server_name api.example.com;
  location /api/ {
    limit_req zone=api burst=5 nodelay;
    limit_conn conn 10;
    limit_rate 500k;
    proxy_pass http://localhost:8080/;
  }
  location /api/admin/ {
    allow 192.168.1.0/24;
    deny all;
    proxy_pass http://localhost:8080/;
  }
}`,
        verification: '请求限流 IP 限制配置',
        filePath: '/etc/nginx/conf.d/rate_limit.conf',
        hints: ["rate=30r/m 每分钟 30 次","burst=5 允许短暂突发"],
        cognitiveLoad: 'medium', dependsOn: ['nginx-2','nginx-3'], commonMistakes: [], variations: [], transferTasks: [],
        docLinks: [
        { title: 'Nginx 官方文档', url: 'https://nginx.org/en/docs/' },
        { title: 'Nginx 初学者指南', url: 'https://nginx.org/en/docs/beginners_guide.html' }
        ],
      }
    ]
  }
]