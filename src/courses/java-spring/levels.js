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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]