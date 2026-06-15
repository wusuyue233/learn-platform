export const phases = [
  {
    id: 'nginx-basics',
    name: '阶段一：Nginx 基础',
    description: '掌握 Nginx 核心配置和反向代理',
    levels: [
      { id: 'nginx-1', number: 1, type: 'concept', title: '静态文件服务', concept: 'root / index', difficulty: 'easy',
        prerequisites: `<h4>Nginx 静态服务</h4><p>root 指定根目录。index 指定默认文件。</p>`,
        conceptDetail: `server 块定义虚拟主机。location 匹配 URL 路径。`,
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'nginx-2', number: 2, type: 'concept', title: '反向代理', concept: 'proxy_pass', difficulty: 'medium',
        prerequisites: `<h4>反向代理</h4><p>proxy_pass 转发请求。proxy_set_header 传递请求头。</p>`,
        conceptDetail: `proxy_pass 加 / 去除匹配前缀。WebSocket 需 upgrade 配置。`,
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]