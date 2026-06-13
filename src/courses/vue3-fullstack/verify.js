export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'vue3-1':
      check('src/components/Hello.vue', 'Hello Vue3', '包含目标文本', '组件显示 Hello Vue3')
      check('src/components/Hello.vue', 'ref', '使用 ref 响应式', '使用了 Vue3 的 ref API')
      break
    case 'vue3-2':
      check('src/components/Counter.vue', '@click', '绑定点击事件', '按钮绑定了点击事件')
      check('src/components/Counter.vue', 'count', '计数变量存在', '有计数变量')
      break
    case 'vue3-3':
      check('src/components/Toggle.vue', 'v-if', '使用 v-if 指令', '使用了条件渲染')
      break
    case 'vue3-4':
      check('src/components/TodoList.vue', 'v-for', '使用 v-for 循环', '使用了列表渲染')
      check('src/components/TodoList.vue', ':key', '绑定 key 属性', '列表项绑定了 key')
      break
    case 'vue3-5':
      check('src/components/LoginForm.vue', 'v-model', '使用 v-model 绑定', '使用了双向绑定')
      break
    case 'vue3-6':
      check('src/components/Card.vue', 'slot', '使用 slot 插槽', '组件定义了插槽')
      break
    case 'vue3-7':
      check('src/components/CartTotal.vue', 'computed', '使用 computed', '使用了计算属性')
      check('src/components/CartTotal.vue', 'reduce', '使用 reduce 累加', '使用了数组归约方法')
      break
    case 'vue3-8':
      check('src/components/SearchDebounce.vue', 'watch', '使用 watch', '使用了侦听器')
      break
    case 'vue3-9':
      check('src/components/DataLoader.vue', 'onMounted', '使用 onMounted', '使用了生命周期钩子')
      break
    case 'vue3-10':
      check('src/components/Child.vue', 'defineProps', '定义 props', '子组件接收属性')
      check('src/components/Child.vue', 'defineEmits', '定义 emit', '子组件定义事件')
      break
    case 'vue3-11':
      check('src/components/Child.vue', 'inject', '使用 inject', '后代组件注入数据')
      break
    case 'vue3-12':
      check('src/router.js', 'createRouter', '创建路由实例', '配置了 Vue Router')
      break
    case 'vue3-13':
      check('src/views/UserDetail.vue', 'useRoute', '使用 useRoute', '获取路由信息')
      check('src/views/UserDetail.vue', 'params', '获取路由参数', '读取 URL 参数')
      break
    case 'vue3-14':
      check('src/stores/user.js', 'defineStore', '定义 Store', '创建了 Pinia store')
      break
    case 'vue3-15':
      check('src/stores/counter.js', 'localStorage', '使用 localStorage', '实现了持久化存储')
      break
    case 'vue3-16':
      check('src/components/AutoFocus.vue', 'v-focus', '使用自定义指令', '应用了自定义指令')
      break
    case 'vue3-17':
      check('src/composables/useMousePosition.js', 'export function', '导出 composable', '创建了组合式函数')
      check('src/composables/useMousePosition.js', 'onMounted', '使用生命周期钩子', '处理了事件监听')
      break
    case 'vue3-18':
      check('src/router.js', 'defineAsyncComponent', '使用异步组件', '实现了懒加载')
      break
    case 'vue3-19':
      check('src/components/Optimized.vue', 'shallowRef', '使用 shallowRef', '优化了响应式性能')
      check('src/components/Optimized.vue', 'v-once', '使用 v-once', '缓存了静态内容')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
