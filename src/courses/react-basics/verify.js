export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'react-1':
      check('src/App.jsx', 'function', '使用函数组件', '使用了函数组件语法')
      check('src/App.jsx', 'return', '有返回值', '组件返回了 JSX')
      break
    case 'react-2':
      check('src/App.jsx', 'props', '接收 props', '组件接收了属性')
      check('src/App.jsx', '{name}', '解构 props', '使用了 props 解构')
      break
    case 'react-3':
      check('src/App.jsx', 'useState', '使用 useState', '使用了 useState Hook')
      check('src/App.jsx', 'setCount', '调用 setter', '调用了状态更新函数')
      break
    case 'react-4':
      check('src/App.jsx', '.map', '使用 map', '使用了 map 渲染列表')
      check('src/App.jsx', 'key', '绑定 key', '列表项绑定了 key')
      break
    case 'react-5':
      check('src/App.jsx', '?', '三元表达式', '使用了条件渲染')
      break
    case 'react-6':
      check('src/App.jsx', 'useEffect', '使用 useEffect', '使用了 useEffect')
      check('src/App.jsx', '[]', '依赖数组', '传入了依赖数组')
      break
    case 'react-7':
      check('src/App.jsx', 'useRef', '使用 useRef', '使用了 useRef')
      check('src/App.jsx', 'current', '访问 current', '访问了 ref 的 current 属性')
      break
    case 'react-8':
      check('src/App.jsx', 'createContext', '创建 Context', '创建了上下文')
      check('src/App.jsx', 'useContext', '使用 useContext', '使用了 useContext')
      break
    case 'react-9':
      check('src/App.jsx', 'useReducer', '使用 useReducer', '使用了 useReducer')
      check('src/App.jsx', 'dispatch', '调用 dispatch', '调用了 dispatch')
      break
    case 'react-10':
      check('src/hooks/useCounter.js', 'useState', '使用 useState', 'Hook 内部使用了 useState')
      check('src/hooks/useCounter.js', 'export function', '导出 Hook', '导出了自定义 Hook')
      break
    case 'react-11':
      check('src/App.jsx', 'BrowserRouter', '使用 BrowserRouter', '配置了路由')
      check('src/App.jsx', 'Route', '定义 Route', '定义了路由规则')
      break
    case 'react-12':
      check('src/App.jsx', 'Outlet', '使用 Outlet', '使用了嵌套路由出口')
      check('src/App.jsx', 'children', '子路由', '配置了嵌套路由')
      break
    case 'react-13':
      check('src/store.js', 'createStore', '创建 Store', '创建了状态管理 Store')
      check('src/store.js', 'Provider', '提供 Provider', '提供了全局状态')
      break
    case 'react-14':
      check('src/App.jsx', 'value', '绑定 value', '表单绑定了 value')
      check('src/App.jsx', 'onChange', '绑定 onChange', '绑定了 onChange 事件')
      break
    case 'react-15':
      check('src/App.jsx', 'ErrorBoundary', '使用 ErrorBoundary', '使用了错误边界')
      check('src/App.jsx', 'componentDidCatch', '捕获错误', '实现了错误捕获')
      break
    case 'react-16':
      check('src/App.jsx', 'React.memo', '使用 React.memo', '使用了 React.memo')
      break
    case 'react-17':
      check('src/App.jsx', 'useMemo', '使用 useMemo', '使用了 useMemo')
      check('src/App.jsx', 'useCallback', '使用 useCallback', '使用了 useCallback')
      break
    case 'react-18':
      check('src/App.jsx', 'virtualized', '虚拟列表概念', '实现了虚拟列表逻辑')
      break
    case 'react-19':
      check('src/App.jsx', 'lazy', '使用 lazy', '使用了 React.lazy')
      check('src/App.jsx', 'Suspense', '使用 Suspense', '使用了 Suspense')
      break
    case 'react-20':
      check('src/ChatRoom.jsx', 'useState', '状态管理', '使用了状态管理')
      check('src/ChatRoom.jsx', 'useEffect', '副作用处理', '使用了 useEffect')
      check('src/ChatRoom.jsx', 'useRef', '引用操作', '使用了 useRef')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
