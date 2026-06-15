export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'uniapp-1':
      check('pages.json', '{"pages":[{"path":"p', 'pages.json 含 4 个页面和 TabBar', 'pages.json 含 4 个页面和 TabBar')
      break
    case 'uniapp-2':
      check('ProductCard.vue', '<template><view clas', 'ProductCard 接收 product props 显示', 'ProductCard 接收 product props 显示')
      break
    case 'uniapp-3':
      check('request.js', 'const BASE_URL="http', 'HTTP 工具封装 Token 和错误处理', 'HTTP 工具封装 Token 和错误处理')
      break
    case 'uniapp-4':
      check('index.vue', '<template><view><Pro', 'onLoad 加载数据，下拉刷新', 'onLoad 加载数据，下拉刷新')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}