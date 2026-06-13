export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'js-1':
      check('src/variables.js', 'const', '使用 const', '使用了 const 声明')
      check('src/variables.js', 'let', '使用 let', '使用了 let 声明')
      break
    case 'js-2':
      check('src/types.js', 'typeof', '使用 typeof', '检测了数据类型')
      break
    case 'js-3':
      check('src/functions.js', 'function', '定义函数', '使用了 function 关键字')
      break
    case 'js-4':
      check('src/arrays.js', 'map', '使用 map', '使用了 map 方法')
      check('src/arrays.js', 'filter', '使用 filter', '使用了 filter 方法')
      check('src/arrays.js', 'reduce', '使用 reduce', '使用了 reduce 方法')
      break
    case 'js-5':
      check('src/objects.js', '{', '解构赋值', '使用了解构语法')
      break
    case 'js-6':
      check('src/arrow.js', '=>', '箭头函数', '使用了箭头函数')
      break
    case 'js-7':
      check('src/template.js', '`', '模板字符串', '使用了模板字符串')
      break
    case 'js-8':
      check('src/spread.js', '...', '展开运算符', '使用了展开运算符')
      break
    case 'js-9':
      check('src/destructuring.js', '{', '解构赋值', '使用了解构赋值')
      break
    case 'js-10':
      check('src/promise.js', 'Promise', '使用 Promise', '创建了 Promise')
      break
    case 'js-11':
      check('src/async.js', 'async', '使用 async', '声明了异步函数')
      check('src/async.js', 'await', '使用 await', '使用了 await')
      break
    case 'js-12':
      check('src/error-handling.js', 'try', '使用 try', '使用了 try-catch')
      break
    case 'js-13':
      check('src/dom-select.js', 'querySelector', '选择元素', '使用了 querySelector')
      break
    case 'js-14':
      check('src/dom-events.js', 'addEventListener', '事件监听', '使用了事件监听')
      break
    case 'js-15':
      check('src/dom-create.js', 'createElement', '创建元素', '使用了 createElement')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
