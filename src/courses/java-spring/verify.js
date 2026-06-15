export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'java-spring-1':
      check('pom.xml', '<project><parent><gr', 'pom.xml 配置了 Spring Boot Starter Web', 'pom.xml 配置了 Spring Boot Starter Web')
      break
    case 'java-spring-2':
      check('ProductController.java', '@RestController', 'ProductController 含 GET/POST 端点', 'ProductController 含 GET/POST 端点')
      break
    case 'java-spring-3':
      check('ProductService.java', '@Service', 'Service + Repository 分层注入', 'Service + Repository 分层注入')
      break
    case 'java-spring-4':
      check('Product.java', '@Entity @Table(name=', 'JPA 实体 + Repository 接口', 'JPA 实体 + Repository 接口')
      break
    case 'java-spring-5':
      check('GlobalExceptionHandler.java', '@ResponseStatus(Http', '@RestControllerAdvice 全局异常处理', '@RestControllerAdvice 全局异常处理')
      break
    case 'java-spring-6':
      check('ProductControllerTest.java', '@SpringBootTest @Aut', '集成测试覆盖商品创建和 404', '集成测试覆盖商品创建和 404')
      break
    case 'java-spring-7':
      check('SecurityConfig.java', '@Configuration', 'Spring Security 无状态配置', 'Spring Security 无状态配置')
      break
    case 'java-spring-8':
      check('JwtUtil.java', '@Component', 'JWT 生成和验证完整工具类', 'JWT 生成和验证完整工具类')
      break
    case 'java-spring-9':
      check('AuthController.java', '@RestController', '登录注册认证接口', '登录注册认证接口')
      break
    case 'java-spring-10':
      check('AdminController.java', '@RestController', '角色权限控制接口', '角色权限控制接口')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}