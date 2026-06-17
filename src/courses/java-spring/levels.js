export const phases = [
  {
    id: 'spring-basics',
    name: '阶段一：Spring Boot 基础',
    description: '从零搭建 Spring Boot 项目，掌握 REST API 开发',
    levels: [
      { id: 'java-spring-1', number: 1, type: 'concept', title: 'Maven 项目结构', concept: 'Maven', difficulty: 'easy',
        prerequisites: `<h4>Maven 项目结构</h4><p>Maven 用 pom.xml 管理依赖。</p>`,
        conceptDetail: `spring-boot-starter-parent 管理版本。spring-boot-starter-web 含 Tomcat + MVC。`,
        code: `<project><parent><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-parent</artifactId><version>3.2.0</version></parent><groupId>com.ecommerce</groupId><artifactId>ecommerce-api</artifactId><dependencies><dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-web</artifactId></dependency></dependencies></project>`,
        verification: 'pom.xml 配置了 Spring Boot Starter Web',
        filePath: 'pom.xml',
        hints: ["spring-boot-starter-web 内嵌 Tomcat","mvn spring-boot:run 启动"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解 Maven 结构',verification:'pom.xml',hint:'Maven 用 pom.xml 管理依赖'},{id:'step-2',title:'配置依赖',verification:'dependencies',hint:'在 pom.xml 中添加 Spring Boot 起步依赖'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-2', number: 2, type: 'concept', title: 'REST 控制器', concept: '@RestController', difficulty: 'easy',
        prerequisites: `<h4>Spring MVC 注解</h4><p>@RestController = @Controller + @ResponseBody。</p>`,
        conceptDetail: `@RequestMapping 映射 URL。@RequestBody 接收 JSON。`,
        code: `@RestController
@RequestMapping("/api/products")
public class ProductController {
  private List<Product> products = new ArrayList<>();
  @GetMapping public List<Product> getAll() { return products; }
  @PostMapping public Product create(@RequestBody Product p) { products.add(p); return p; }
  @GetMapping("/{id}") public Product getById(@PathVariable Long id) {
    return products.stream().filter(x -> x.id().equals(id)).findFirst().orElseThrow();
  }
}`,
        verification: 'ProductController 含 GET/POST 端点',
        filePath: 'src/main/java/com/ecommerce/controller/ProductController.java',
        hints: ["@RestController 标记控制器","@PathVariable 获取 URL 参数"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-1'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解 REST 控制器',verification:'@RestController',hint:'@RestController 处理 HTTP 请求'},{id:'step-2',title:'定义 API 端点',verification:'@GetMapping',hint:'用 GetMapping/PostMapping 映射路由'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-3', number: 3, type: 'concept', title: '依赖注入', concept: '@Autowired', difficulty: 'medium',
        prerequisites: `<h4>依赖注入</h4><p>@Autowired 自动注入 Bean。</p>`,
        conceptDetail: `@Service/@Repository 是 @Component 特殊化。`,
        code: `@Service
public class ProductService {
  @Autowired private ProductRepository repo;
  public List<Product> findAll() { return repo.findAll(); }
  public Product save(Product p) { return repo.save(p); }
}
@Repository
public class ProductRepository {
  private Map<Long,Product> store = new ConcurrentHashMap<>();
  public List<Product> findAll() { return new ArrayList<>(store.values()); }
  public Product save(Product p) { store.put(p.id(),p); return p; }
}`,
        verification: 'Service + Repository 分层注入',
        filePath: 'src/main/java/com/ecommerce/service/ProductService.java',
        hints: ["@Service 标记业务层","DI 容器管理生命周期"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-2'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解依赖注入',verification:'@Autowired',hint:'@Autowired 自动注入 Bean'},{id:'step-2',title:'定义 Service 层',verification:'@Service',hint:'业务逻辑写在 Service 层中'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-4', number: 4, type: 'concept', title: 'Spring Data JPA', concept: 'JPA', difficulty: 'medium',
        prerequisites: `<h4>JPA 实体</h4><p>@Entity 标记实体。JpaRepository 提供 CRUD。</p>`,
        conceptDetail: `命名约定 findByXxx 自动生成查询。application.properties 配置数据源。`,
        code: `@Entity @Table(name="products")
public class Product {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
  private String name; private Double price; private Integer stock;
}
public interface ProductRepository extends JpaRepository<Product,Long> {
  List<Product> findByNameContaining(String keyword);
  List<Product> findByPriceBetween(Double min, Double max);
}`,
        verification: 'JPA 实体 + Repository 接口',
        filePath: 'src/main/java/com/ecommerce/model/Product.java',
        hints: ["@Id 标记主键","方法名命名查询"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-3'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解 JPA',verification:'@Entity',hint:'@Entity 标注数据库实体类'},{id:'step-2',title:'定义 Repository',verification:'JpaRepository',hint:'继承 JpaRepository 获得 CRUD 方法'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-5', number: 5, type: 'concept', title: '异常处理', concept: '全局异常', difficulty: 'medium',
        prerequisites: `<h4>异常处理</h4><p>@RestControllerAdvice 全局拦截异常。</p>`,
        conceptDetail: `ResponseEntity 自定义 HTTP 响应。`,
        code: `@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProductNotFoundException extends RuntimeException {
  public ProductNotFoundException(Long id) { super("商品 #"+id+" 不存在"); }
}
@RestControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(ProductNotFoundException.class)
  public ResponseEntity<?> handleNotFound(ProductNotFoundException e) {
    return ResponseEntity.status(404).body(Map.of("error",e.getMessage()));
  }
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<?> handleValidation(MethodArgumentNotValidException e) {
    return ResponseEntity.badRequest().body(Map.of("errors",e.getBindingResult().getFieldErrors().stream().collect(Collectors.toMap(FieldError::getField,FieldError::getDefaultMessage))));
  }
}`,
        verification: '@RestControllerAdvice 全局异常处理',
        filePath: 'src/main/java/com/ecommerce/exception/GlobalExceptionHandler.java',
        hints: ["@ExceptionHandler 指定异常","ResponseEntity.status(404) 自定义状态码"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-4'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解异常处理',verification:'@ExceptionHandler',hint:'统一异常处理避免堆栈泄露'},{id:'step-2',title:'定义全局处理器',verification:'@ControllerAdvice',hint:'用 @ControllerAdvice 全局捕获异常'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-6', number: 6, type: 'concept', title: 'Spring Boot 测试', concept: '@SpringBootTest', difficulty: 'hard',
        prerequisites: `<h4>Spring Boot 测试</h4><p>@SpringBootTest 加载完整上下文。MockMvc 模拟 HTTP 请求。</p>`,
        conceptDetail: `jsonPath 断言 JSON 响应字段。`,
        code: `@SpringBootTest @AutoConfigureMockMvc
class ProductControllerTest {
  @Autowired private MockMvc mockMvc;
  @Test void shouldCreateProduct() throws Exception {
    String json = "{\"name\":\"测试商品\",\"price\":99.9,\"stock\":100}";
    mockMvc.perform(post("/api/products").contentType(MediaType.APPLICATION_JSON).content(json))
      .andExpect(status().isOk()).andExpect(jsonPath("$.name").value("测试商品"));
  }
  @Test void shouldReturn404() throws Exception {
    mockMvc.perform(get("/api/products/9999")).andExpect(status().isNotFound());
  }
}`,
        verification: '集成测试覆盖商品创建和 404',
        filePath: 'src/test/java/com/ecommerce/controller/ProductControllerTest.java',
        hints: ["@AutoConfigureMockMvc 自动配置 MockMvc","jsonPath(\"$.name\") 断言 JSON 字段"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-5'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解测试',verification:'@SpringBootTest',hint:'@SpringBootTest 加载完整上下文'},{id:'step-2',title:'编写测试用例',verification:'@Test',hint:'用断言验证接口返回值'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      }
    ]
  }
  ,
  {
    id: 'spring-security',
    name: '阶段二：Spring Security + JWT',
    description: '掌握认证授权，构建安全的 REST API',
    levels: [
      { id: 'java-spring-7', number: 7, type: 'concept', title: 'Spring Security 配置', concept: 'SecurityFilterChain', difficulty: 'medium',
        prerequisites: `<h4>Spring Security</h4><p>@EnableWebSecurity 开启安全配置。SecurityFilterChain 定义过滤链。</p>`,
        conceptDetail: 'PasswordEncoder 加密密码。SessionCreationPolicy.STATELESS 无状态。',
        code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable())
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/auth/**").permitAll()
        .anyRequest().authenticated()
      )
      .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    return http.build();
  }
  @Bean public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }
}`,
        verification: 'Spring Security 无状态配置',
        filePath: 'src/main/java/com/ecommerce/config/SecurityConfig.java',
        hints: ["@EnableWebSecurity 开启配置","permitAll() 放行公开路径"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-1'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解安全配置',verification:'SecurityFilterChain',hint:'声明式配置安全过滤链'},{id:'step-2',title:'配置权限规则',verification:'requestMatchers',hint:'配置公开接口和鉴权接口'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-8', number: 8, type: 'concept', title: 'JWT 工具类', concept: 'JWT Token', difficulty: 'medium',
        prerequisites: `<h4>JWT</h4><p>jjwt 库生成和验证 Token。setExpiration 设置过期时间。</p>`,
        conceptDetail: 'HS256 对称签名。Claims 包含用户信息。',
        code: `@Component
public class JwtUtil {
  private final String SECRET = "my-secret-key-1234567890";
  public String generateToken(String username) {
    return Jwts.builder()
      .setSubject(username)
      .setIssuedAt(new Date())
      .setExpiration(new Date(System.currentTimeMillis() + 86400000))
      .signWith(SignatureAlgorithm.HS256, SECRET)
      .compact();
  }
  public String extractUsername(String token) {
    return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody().getSubject();
  }
  public boolean isTokenValid(String token) {
    try { extractUsername(token); return true; } catch (Exception e) { return false; }
  }
}`,
        verification: 'JWT 生成和验证完整工具类',
        filePath: 'src/main/java/com/ecommerce/util/JwtUtil.java',
        hints: ["setSubject 存储用户名","setExpiration 设置 24 小时过期"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-7'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解 JWT 结构',verification:'JWT',hint:'JWT 三部分：Header/Payload/Signature'},{id:'step-2',title:'编写 JWT 工具',verification:'generateToken',hint:'实现生成和验证 Token 的方法'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-9', number: 9, type: 'concept', title: '认证 API', concept: 'AuthenticationManager', difficulty: 'hard',
        prerequisites: `<h4>认证流程</h4><p>AuthenticationManager 验证凭证。UsernamePasswordAuthenticationToken 封装用户名密码。</p>`,
        conceptDetail: 'authenticate 失败抛异常。JWT 返回给客户端。',
        code: `@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired private AuthenticationManager authManager;
  @Autowired private JwtUtil jwtUtil;
  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody AuthRequest request) {
    authManager.authenticate(
      new UsernamePasswordAuthenticationToken(request.username(), request.password()));
    String token = jwtUtil.generateToken(request.username());
    return ResponseEntity.ok(Map.of("token", token, "username", request.username()));
  }
  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
    return ResponseEntity.ok(Map.of("message", "注册成功"));
  }
}`,
        verification: '登录注册认证接口',
        filePath: 'src/main/java/com/ecommerce/controller/AuthController.java',
        hints: ["AuthenticationManager 验证身份","返回 JWT Token"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-8'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解认证流程',verification:'Authentication',hint:'登录验证后签发 JWT Token'},{id:'step-2',title:'实现登录接口',verification:'@PostMapping',hint:'接收用户名密码返回 Token'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      },
      { id: 'java-spring-10', number: 10, type: 'concept', title: '角色权限控制', concept: '@PreAuthorize', difficulty: 'hard',
        prerequisites: `<h4>@PreAuthorize</h4><p>@EnableGlobalMethodSecurity 开启注解。hasRole 检查角色。</p>`,
        conceptDetail: 'hasRole(\'ADMIN\') 需要 ADMIN 角色。#id == authentication.principal.id 检查用户身份。',
        code: `@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
  @GetMapping("/users")
  public ResponseEntity<?> listUsers() {
    return ResponseEntity.ok(List.of("user1", "user2"));
  }
  @DeleteMapping("/users/{id}")
  public ResponseEntity<?> deleteUser(@PathVariable Long id) {
    return ResponseEntity.ok(Map.of("message", "用户已删除"));
  }
}`,
        verification: '角色权限控制接口',
        filePath: 'src/main/java/com/ecommerce/controller/AdminController.java',
        hints: ["@PreAuthorize 方法级别权限控制","hasRole 检查用户角色"],
        cognitiveLoad: 'medium', dependsOn: ['java-spring-9'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解角色权限',verification:'@PreAuthorize',hint:'基于角色的方法级授权'},{id:'step-2',title:'配置权限注解',verification:"hasRole('ADMIN')",hint:'用 @PreAuthorize 限制接口访问'}],
        docLinks: [
        { title: 'Spring 官方文档', url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring Initializr', url: 'https://start.spring.io/' }
        ],
      }
    ]
  }
]