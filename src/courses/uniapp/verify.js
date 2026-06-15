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
    case 'uniapp-5':
      check('cart.vue', '<template><view><view v-for=', '购物车增删改和本地持久化', '购物车增删改和本地持久化')
      break
    case 'uniapp-6':
      check('user.vue', '<template><view class="profile"', '个人中心页面显示用户状态', '个人中心页面显示用户状态')
      break
    case 'uniapp-7':
      check('address.vue', '<template><view class="address', '地址表单及验证逻辑', '地址表单及验证逻辑')
      break
    case 'uniapp-8':
      check('confirm.vue', '<template><view class="confirm', '订单确认页面完整流程', '订单确认页面完整流程')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}