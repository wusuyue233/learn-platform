export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'ts-1':
      check('src/basic-types.ts', 'string', '使用 string 类型', '定义了字符串类型')
      check('src/basic-types.ts', 'number', '使用 number 类型', '定义了数字类型')
      check('src/basic-types.ts', 'boolean', '使用 boolean 类型', '定义了布尔类型')
      break
    case 'ts-2':
      check('src/interfaces.ts', 'interface', '定义接口', '使用了 interface')
      check('src/interfaces.ts', 'type', '定义类型别名', '使用了 type')
      break
    case 'ts-3':
      check('src/function-types.ts', 'function', '定义函数', '定义了函数')
      check('src/function-types.ts', ':', '类型注解', '添加了类型注解')
      break
    case 'ts-4':
      check('src/union-intersect.ts', '|', '联合类型', '使用了联合类型')
      check('src/union-intersect.ts', '&', '交叉类型', '使用了交叉类型')
      break
    case 'ts-5':
      check('src/type-guards.ts', 'typeof', 'typeof 守卫', '使用了 typeof 守卫')
      check('src/type-guards.ts', 'instanceof', 'instanceof 守卫', '使用了 instanceof 守卫')
      break
    case 'ts-6':
      check('src/generics.ts', '<T>', '泛型参数', '使用了泛型参数')
      break
    case 'ts-7':
      check('src/generic-constraints.ts', 'extends', '泛型约束', '使用了 extends 约束')
      break
    case 'ts-8':
      check('src/mapped-types.ts', 'in', '映射类型', '使用了 in 关键字')
      break
    case 'ts-9':
      check('src/conditional-types.ts', 'extends', '条件类型', '使用了条件类型')
      check('src/conditional-types.ts', '?', '三元表达式', '使用了条件表达式')
      break
    case 'ts-10':
      check('src/template-literal.ts', 'Template', '模板字面量', '使用了模板字面量类型')
      break
    case 'ts-11':
      check('src/classes.ts', 'class', '定义类', '使用了 class')
      check('src/classes.ts', 'extends', '继承', '使用了 extends 继承')
      break
    case 'ts-12':
      check('src/enums.ts', 'enum', '定义枚举', '使用了 enum')
      break
    case 'ts-13':
      check('src/declarations.d.ts', 'declare', '声明文件', '使用了 declare')
      break
    case 'ts-14':
      check('src/utility-types.ts', 'Partial', '使用 Partial', '使用了 Partial 工具类型')
      check('src/utility-types.ts', 'Required', '使用 Required', '使用了 Required 工具类型')
      check('src/utility-types.ts', 'Pick', '使用 Pick', '使用了 Pick 工具类型')
      break
    case 'ts-15':
      check('src/api-client.ts', 'async', '异步函数', '使用了 async/await')
      check('src/api-client.ts', 'fetch', '使用 fetch', '使用了 fetch API')
      check('src/api-client.ts', 'interface', '接口定义', '定义了接口')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
