export const phases = [
  {
    id: 'sql-basics',
    name: '阶段一：基础查询',
    description: '掌握 SELECT、WHERE、ORDER BY 等基础查询语法',
    levels: [
      {
        id: 'sql-1',
        number: 1,
        title: 'SELECT 基础查询',
        concept: 'SELECT / FROM',
        difficulty: 'easy',
        task: '查询 products 表中所有商品的名称和价格',
        prerequisites: `<h4>🗄️ SQL 是什么</h4>
<p>SQL（Structured Query Language）是操作关系型数据库的标准语言。</p>

<h4>🔑 SELECT 基础</h4>
<pre><code>SELECT column1, column2 FROM table_name;
SELECT * FROM table_name;
</code></pre>

<ul>
  <li><code>SELECT</code> — 指定要查询的列</li>
  <li><code>FROM</code> — 指定从哪张表查询</li>
  <li><code>*</code> — 通配符，表示所有列</li>
</ul>`,
        conceptDetail: `步骤 1 — 确定查询的列
[name](商品名称列) 和 [price](商品价格列) 是我们需要的字段。

步骤 2 — 指定数据来源
FROM 子句指定从 products 表查询。

步骤 3 — 组合完整语句
SELECT 和 FROM 组成最基本的查询语句。`,
        contextCode: `-- SELECT 语法参考
SELECT column1, column2    -- 指定列
FROM table_name;            -- 指定表

-- 查询所有列
SELECT * FROM products;

-- 查询特定列
SELECT name, price FROM products;

-- 使用别名
SELECT name AS 商品名, price AS 价格
FROM products;`,
        starterCode: `-- 查询 products 表中所有商品的名称和价格
-- 期望返回 name 和 price 两列
SELECT ???, ???
FROM ???;`,
        hints: [
          'SELECT 后面跟要查询的列名',
          '列名之间用逗号分隔',
          'FROM products 指定数据来源表'
        ],
        code: `SELECT name, price
FROM products;`,
        verification: '使用 SELECT 查询了 name 和 price 列',
        filePath: 'queries/sql-1.sql',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
         {
          'pattern': 'SELECT *',
          'explanation': '明确指定列名优于 SELECT *'
         },
         {
          'pattern': 'WHERE',
          'explanation': 'UPDATE/DELETE 加 WHERE'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择查询列',
          'verification': 'SELECT',
          'hint': '在 SELECT 后指定要查询的列名',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-2',
          'title': '指定数据来源',
          'verification': 'FROM',
          'hint': '用 FROM 子句指定表名',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-3',
          'title': '完成查询',
          'verification': ';',
          'hint': '语句末尾加分号结束',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         }
        ],
        variations: [
         {
          'name': '子查询',
          'description': '子查询嵌套在 WHERE/FROM/SELECT 中'
         }
        ],
        transferTasks: [
         {
          'task': '多表 JOIN + GROUP BY + HAVING 聚合',
          'target': '掌握复杂查询'
         }
        ]
      },
      {
        id: 'sql-2',
        number: 2,
        title: 'WHERE 条件过滤',
        concept: 'WHERE / 比较运算符',
        difficulty: 'easy',
        task: '查询价格大于 100 的商品名称和价格',
        prerequisites: `<h4>🗄️ WHERE 子句</h4>
<p>WHERE 用于过滤满足条件的行：</p>
<pre><code>SELECT * FROM table_name
WHERE condition;
</code></pre>

<h4>🔑 比较运算符</h4>
<ul>
  <li><code>=</code> <code>!=</code> <code><></code> — 等于 / 不等于</li>
  <li><code>></code> <code>>=</code> <code><</code> <code><=</code> — 大于、大于等于等</li>
  <li><code>BETWEEN ... AND ...</code> — 范围查询</li>
  <li><code>LIKE</code> — 模式匹配</li>
  <li><code>IN (...)</code> — 列表匹配</li>
</ul>`,
        conceptDetail: `步骤 1 — 写基本查询
先写 SELECT ... FROM products。

步骤 2 — 添加 WHERE 条件
[price > 100](比较运算符) 筛选价格大于 100 的记录。

步骤 3 — 组合完整语句
WHERE 子句放在 FROM 之后。`,
        contextCode: `-- WHERE 条件语法参考
SELECT * FROM products
WHERE price > 100;

-- 多条件组合
SELECT * FROM products
WHERE price > 100 AND category = '电子';

-- 模式匹配
SELECT * FROM products
WHERE name LIKE '%手机%';

-- 范围查询
SELECT * FROM products
WHERE price BETWEEN 50 AND 200;

-- 列表查询
SELECT * FROM products
WHERE category IN ('电子', '服装');`,
        starterCode: `-- 查询价格大于 100 的商品名称和价格
SELECT name, price
FROM products
WHERE ???;`,
        hints: [
          'WHERE 后面跟条件表达式',
          'price > 100 表示价格大于 100',
          '条件直接写在 WHERE 关键字后面'
        ],
        code: `SELECT name, price
FROM products
WHERE price > 100;`,
        verification: '使用 WHERE 过滤了 price > 100 的记录',
        filePath: 'queries/sql-2.sql',
        cognitiveLoad: 'low',
        dependsOn: ['sql-1'],
        commonMistakes: [
         {
          'pattern': 'SELECT *',
          'explanation': '明确指定列名优于 SELECT *'
         },
         {
          'pattern': 'WHERE',
          'explanation': 'UPDATE/DELETE 加 WHERE'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择查询列',
          'verification': 'SELECT',
          'hint': '在 SELECT 后指定要查询的列',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-2',
          'title': '指定数据来源',
          'verification': 'FROM',
          'hint': '用 FROM 子句指定表名',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-3',
          'title': '添加过滤条件',
          'verification': 'WHERE',
          'hint': '用 WHERE 子句指定价格条件',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-3',
        number: 3,
        title: 'ORDER BY 排序',
        concept: 'ORDER BY / ASC / DESC',
        difficulty: 'easy',
        task: '按价格从高到低查询所有商品的名称和价格',
        prerequisites: `<h4>🗄️ 排序</h4>
<p>ORDER BY 对查询结果排序：</p>
<pre><code>SELECT * FROM table_name
ORDER BY column ASC;   -- 升序（默认）
ORDER BY column DESC;  -- 降序
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>ASC</code> — 升序（从小到大），默认值</li>
  <li><code>DESC</code> — 降序（从大到小）</li>
  <li>可以按多个列排序</li>
</ul>`,
        conceptDetail: `步骤 1 — 写基本查询
SELECT name, price FROM products。

步骤 2 — 添加排序
[ORDER BY price DESC](按 price 列降序排列)。

步骤 3 — 多列排序
先按主列排，主列相同再按次列排。`,
        contextCode: `-- ORDER BY 排序参考
SELECT * FROM products
ORDER BY price ASC;        -- 价格升序

SELECT * FROM products
ORDER BY price DESC;       -- 价格降序

-- 多列排序
SELECT * FROM products
ORDER BY category ASC, price DESC;

-- 按别名排序
SELECT name, price AS p
FROM products
ORDER BY p DESC;`,
        starterCode: `-- 按价格从高到低查询所有商品
SELECT name, price
FROM products
ORDER BY ??? ???;`,
        hints: [
          'ORDER BY price 按价格列排序',
          'DESC 表示降序（从高到低）',
          'ASC 是默认的升序'
        ],
        code: `SELECT name, price
FROM products
ORDER BY price DESC;`,
        verification: '使用 ORDER BY DESC 按价格降序排列',
        filePath: 'queries/sql-3.sql',
        cognitiveLoad: 'low',
        dependsOn: ['sql-2'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择查询列',
          'verification': 'SELECT',
          'hint': '在 SELECT 后指定要查询的列',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-2',
          'title': '指定数据来源',
          'verification': 'FROM',
          'hint': '用 FROM 子句指定表名',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-3',
          'title': '添加排序',
          'verification': 'ORDER BY',
          'hint': '用 ORDER BY 和 DESC 降序排列',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-4',
        number: 4,
        title: 'LIMIT 分页',
        concept: 'LIMIT / OFFSET',
        difficulty: 'easy',
        task: '查询第 2 页的商品，每页显示 5 条',
        prerequisites: `<h4>🗄️ LIMIT 分页</h4>
<p>LIMIT 限制返回的行数，OFFSET 跳过指定行数：</p>
<pre><code>SELECT * FROM table_name
LIMIT 5 OFFSET 10;   -- 跳过前10行，取5行
</code></pre>

<h4>🔑 分页公式</h4>
<ul>
  <li>第 N 页，每页 M 条：<code>LIMIT M OFFSET (N-1)*M</code></li>
  <li>也可以简写为 <code>LIMIT 5, 10</code>（跳过5行取10行）</li>
  <li>LIMIT 通常放在语句最后</li>
</ul>`,
        conceptDetail: `步骤 1 — 计算偏移量
第 2 页，每页 5 条 → OFFSET = (2-1)*5 = 5。

步骤 2 — 写 LIMIT 子句
[LIMIT 5](限制返回5行) 控制每页大小。

步骤 3 — 写 OFFSET 子句
[OFFSET 5](跳过前5行) 跳到第 2 页。`,
        contextCode: `-- LIMIT/OFFSET 分页参考
-- 第 1 页
SELECT * FROM products
LIMIT 5 OFFSET 0;

-- 第 2 页
SELECT * FROM products
LIMIT 5 OFFSET 5;

-- 第 3 页
SELECT * FROM products
LIMIT 5 OFFSET 10;

-- 简写语法
SELECT * FROM products
LIMIT 5, 5;  -- 同上（第2页）

-- 分页公式
-- 第 page 页，每页 pageSize 条
-- OFFSET = (page - 1) * pageSize`,
        starterCode: `-- 查询第 2 页的商品，每页显示 5 条
SELECT name, price
FROM products
LIMIT ??? OFFSET ???;`,
        hints: [
          'LIMIT 5 表示每页 5 条',
          '第 2 页需要跳过前 5 条，OFFSET 5',
          '公式：OFFSET = (页码 - 1) × 每页条数'
        ],
        code: `SELECT name, price
FROM products
LIMIT 5 OFFSET 5;`,
        verification: '使用 LIMIT 和 OFFSET 实现了分页查询',
        filePath: 'queries/sql-4.sql',
        cognitiveLoad: 'low',
        dependsOn: ['sql-3'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择查询列',
          'verification': 'SELECT',
          'hint': '在 SELECT 后指定要查询的列',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-2',
          'title': '指定数据来源',
          'verification': 'FROM',
          'hint': '用 FROM 子句指定表名',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         },
         {
          'id': 'step-3',
          'title': '添加分页限制',
          'verification': 'LIMIT',
          'hint': '用 LIMIT 和 OFFSET 实现分页',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-5',
        number: 5,
        title: 'INSERT / UPDATE / DELETE',
        concept: '数据增删改',
        difficulty: 'medium',
        task: '依次插入一条商品、更新其价格、然后删除该商品',
        prerequisites: `<h4>🗄️ INSERT 插入</h4>
<pre><code>INSERT INTO table (col1, col2) VALUES ('val1', 123);
</code></pre>

<h4>🗄️ UPDATE 更新</h4>
<pre><code>UPDATE table SET col1 = 'new' WHERE id = 1;
</code></pre>

<h4>🗄️ DELETE 删除</h4>
<pre><code>DELETE FROM table WHERE id = 1;
</code></pre>

<h4>⚠️ 注意事项</h4>
<ul>
  <li>UPDATE/DELETE 必须加 WHERE，否则影响全部数据</li>
  <li>INSERT 指定列名和值要一一对应</li>
</ul>`,
        conceptDetail: `步骤 1 — INSERT 插入数据
[INSERT INTO](指定目标表和列) 后跟列名和值。

步骤 2 — UPDATE 更新数据
[UPDATE ... SET](更新指定列) 配合 WHERE 条件。

步骤 3 — DELETE 删除数据
[DELETE FROM](删除行) 配合 WHERE 条件。`,
        contextCode: `-- INSERT 插入
INSERT INTO products (name, price, category)
VALUES ('新商品', 99.9, '其他');

-- 批量插入
INSERT INTO products (name, price)
VALUES ('商品A', 10), ('商品B', 20);

-- UPDATE 更新
UPDATE products
SET price = 79.9
WHERE name = '新商品';

-- UPDATE 多列
UPDATE products
SET price = 59.9, category = '促销'
WHERE name = '新商品';

-- DELETE 删除
DELETE FROM products
WHERE name = '新商品';`,
        starterCode: `-- 1. 插入一条新商品：name='测试商品', price=199, category='测试'
INSERT INTO products (name, price, category)
VALUES (???, ???, ???);

-- 2. 更新这条商品的价格为 299
UPDATE products
SET ???
WHERE name = '测试商品';

-- 3. 删除这条商品
DELETE FROM products
WHERE ???;`,
        hints: [
          'INSERT INTO products (name, price, category) VALUES (\'测试商品\', 199, \'测试\')',
          'SET price = 299',
          'WHERE name = \'测试商品\''
        ],
        code: `INSERT INTO products (name, price, category)
VALUES ('测试商品', 199, '测试');

UPDATE products
SET price = 299
WHERE name = '测试商品';

DELETE FROM products
WHERE name = '测试商品';`,
        verification: '依次执行了 INSERT、UPDATE、DELETE 三种操作',
        filePath: 'queries/sql-5.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-4'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '插入新数据',
          'verification': 'INSERT INTO',
          'hint': '用 INSERT INTO 插入新商品',
          docLinks: [{title: 'SQL 数据修改', url: 'https://www.postgresql.org/docs/current/dml.html'}],
         },
         {
          'id': 'step-2',
          'title': '更新已有数据',
          'verification': 'UPDATE',
          'hint': '用 UPDATE SET 修改商品价格',
          docLinks: [{title: 'SQL 数据修改', url: 'https://www.postgresql.org/docs/current/dml.html'}],
         },
         {
          'id': 'step-3',
          'title': '删除数据',
          'verification': 'DELETE FROM',
          'hint': '用 DELETE FROM 删除商品',
          docLinks: [{title: 'SQL 数据修改', url: 'https://www.postgresql.org/docs/current/dml.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      }
    ]
  },
  {
    id: 'sql-advanced',
    name: '阶段二：高级查询',
    description: '掌握 JOIN、GROUP BY、子查询等高级查询技术',
    levels: [
      {
        id: 'sql-6',
        number: 6,
        title: 'JOIN 连表查询',
        concept: 'INNER JOIN / LEFT JOIN',
        difficulty: 'medium',
        task: '查询每个订单的商品名称和用户姓名',
        prerequisites: `<h4>🗄️ JOIN 连表</h4>
<p>JOIN 用于关联多张表的数据：</p>
<pre><code>SELECT a.col, b.col
FROM table_a a
INNER JOIN table_b b ON a.id = b.a_id;
</code></pre>

<h4>🔑 JOIN 类型</h4>
<ul>
  <li><code>INNER JOIN</code> — 只返回两表都匹配的行</li>
  <li><code>LEFT JOIN</code> — 返回左表所有行，右表无匹配则 NULL</li>
  <li><code>RIGHT JOIN</code> — 返回右表所有行</li>
  <li><code>ON</code> — 指定连接条件</li>
</ul>`,
        conceptDetail: `步骤 1 — 确定关联表
orders 表有 user_id 和 product_id 外键。

步骤 2 — 写 JOIN 子句
[INNER JOIN users ON orders.user_id = users.id](连接用户表)。

步骤 3 — 选择返回列
从多表中选取需要的字段。`,
        contextCode: `-- JOIN 语法参考
-- INNER JOIN
SELECT o.id, u.name, p.name
FROM orders o
INNER JOIN users u ON o.user_id = u.id
INNER JOIN products p ON o.product_id = p.id;

-- LEFT JOIN（保留左表所有行）
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;

-- 多表连接
SELECT o.id, u.name, p.name, o.quantity
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN products p ON o.product_id = p.id;`,
        starterCode: `-- 查询每个订单的商品名称和用户姓名
SELECT o.id, u.name, p.name
FROM orders o
??? users u ON ???
??? products p ON ???;`,
        hints: [
          '用 INNER JOIN 连接 users 表',
          '连接条件是 o.user_id = u.id',
          '再 JOIN products 表，条件 o.product_id = p.id'
        ],
        code: `SELECT o.id, u.name AS user_name, p.name AS product_name
FROM orders o
INNER JOIN users u ON o.user_id = u.id
INNER JOIN products p ON o.product_id = p.id;`,
        verification: '使用 JOIN 关联了 orders、users、products 三张表',
        filePath: 'queries/sql-6.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-5'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择查询字段',
          'verification': 'SELECT',
          'hint': '在 SELECT 后指定需要查询的字段',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL JOIN 连表', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html'}],
         },
         {
          'id': 'step-2',
          'title': '连接另一张表',
          'verification': 'JOIN',
          'hint': '用 JOIN 连接 orders 和 products 表',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL JOIN 连表', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html'}],
         },
         {
          'id': 'step-3',
          'title': '指定连接条件',
          'verification': 'ON',
          'hint': '用 ON 指定两表的关联条件',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL JOIN 连表', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-7',
        number: 7,
        title: 'GROUP BY 分组聚合',
        concept: 'GROUP BY / 聚合函数',
        difficulty: 'medium',
        task: '统计每个分类的商品数量和平均价格',
        prerequisites: `<h4>🗄️ 聚合函数</h4>
<pre><code>COUNT(*)          -- 计数
SUM(column)       -- 求和
AVG(column)       -- 平均值
MAX(column)       -- 最大值
MIN(column)       -- 最小值
</code></pre>

<h4>🗄️ GROUP BY</h4>
<pre><code>SELECT category, COUNT(*), AVG(price)
FROM products
GROUP BY category;
</code></pre>

<h4>🔑 核心规则</h4>
<ul>
  <li>SELECT 中非聚合列必须出现在 GROUP BY 中</li>
  <li>GROUP BY 放在 WHERE 之后</li>
</ul>`,
        conceptDetail: `步骤 1 — 确定分组列
按 category 分类列分组。

步骤 2 — 选择聚合函数
[COUNT(*)](计算每组行数) 和 [AVG(price)](计算平均价格)。

步骤 3 — 写 GROUP BY
GROUP BY category 按分类聚合。`,
        contextCode: `-- GROUP BY 聚合参考
SELECT category, COUNT(*) AS cnt, AVG(price) AS avg_price
FROM products
GROUP BY category;

-- 多列分组
SELECT category, brand, COUNT(*)
FROM products
GROUP BY category, brand;

-- 聚合函数
SELECT
  COUNT(*) AS total,
  SUM(price) AS total_price,
  MAX(price) AS max_price,
  MIN(price) AS min_price,
  ROUND(AVG(price), 2) AS avg_price
FROM products;`,
        starterCode: `-- 统计每个分类的商品数量和平均价格
SELECT category, COUNT(*) AS product_count, AVG(price) AS avg_price
FROM products
GROUP BY ???;`,
        hints: [
          'COUNT(*) 统计每组的记录数',
          'AVG(price) 计算平均价格',
          'GROUP BY category 按分类分组'
        ],
        code: `SELECT category, COUNT(*) AS product_count, ROUND(AVG(price), 2) AS avg_price
FROM products
GROUP BY category;`,
        verification: '使用 GROUP BY 和聚合函数统计了分组数据',
        filePath: 'queries/sql-7.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-6'],
        commonMistakes: [
         {
          'pattern': '() =>',
          'explanation': '箭头函数没有自己的 this'
         },
         {
          'pattern': 'return',
          'explanation': '箭头函数返回对象需要 ({})'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择分组字段',
          'verification': 'SELECT',
          'hint': '在 SELECT 后指定分类和聚合字段',
          docLinks: [{title: 'SQL 分组聚合', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html'}],
         },
         {
          'id': 'step-2',
          'title': '添加聚合函数',
          'verification': 'COUNT',
          'hint': '用 COUNT 统计商品数量',
          docLinks: [{title: 'SQL 分组聚合', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html'}],
         },
         {
          'id': 'step-3',
          'title': '指定分组',
          'verification': 'GROUP BY',
          'hint': '用 GROUP BY 按 category 分组',
          docLinks: [{title: 'SQL 分组聚合', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '将普通函数改箭头函数，对比 this 指向',
          'target': '理解函数与箭头函数区别'
         }
        ]
      },
      {
        id: 'sql-8',
        number: 8,
        title: 'HAVING 过滤分组',
        concept: 'HAVING / WHERE vs HAVING',
        difficulty: 'medium',
        task: '查询商品数量大于 2 的分类及其商品数量',
        prerequisites: `<h4>🗄️ HAVING 子句</h4>
<p>HAVING 过滤 GROUP BY 的分组结果：</p>
<pre><code>SELECT category, COUNT(*)
FROM products
GROUP BY category
HAVING COUNT(*) > 2;
</code></pre>

<h4>🔑 WHERE vs HAVING</h4>
<ul>
  <li><code>WHERE</code> — 在分组前过滤行</li>
  <li><code>HAVING</code> — 在分组后过滤组</li>
  <li>HAVING 可以使用聚合函数，WHERE 不行</li>
</ul>`,
        conceptDetail: `步骤 1 — 先做分组聚合
GROUP BY category，COUNT(*) 统计数量。

步骤 2 — 用 HAVING 过滤分组
[HAVING COUNT(*) > 2](过滤数量不大于2的组)。

步骤 3 — 执行顺序
WHERE → GROUP BY → HAVING → SELECT。`,
        contextCode: `-- HAVING 语法参考
SELECT category, COUNT(*) AS cnt
FROM products
GROUP BY category
HAVING COUNT(*) > 2;

-- WHERE + HAVING 组合
SELECT category, AVG(price) AS avg_price
FROM products
WHERE price > 50              -- 先过滤行
GROUP BY category
HAVING COUNT(*) >= 3;         -- 再过滤组

-- 常见 HAVING 条件
HAVING COUNT(*) > 1
HAVING AVG(price) > 100
HAVING SUM(quantity) >= 100`,
        starterCode: `-- 查询商品数量大于 2 的分类
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY ???
HAVING ???;`,
        hints: [
          'GROUP BY category 按分类分组',
          'HAVING COUNT(*) > 2 过滤数量',
          'HAVING 用在 GROUP BY 之后'
        ],
        code: `SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category
HAVING COUNT(*) > 2;`,
        verification: '使用 HAVING 过滤了分组结果',
        filePath: 'queries/sql-8.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-7'],
        commonMistakes: [
         {
          'pattern': 'SELECT *',
          'explanation': '明确指定列名优于 SELECT *'
         },
         {
          'pattern': 'WHERE',
          'explanation': 'UPDATE/DELETE 加 WHERE'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '选择分组字段',
          'verification': 'SELECT',
          'hint': '在 SELECT 后指定分类字段',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL 分组聚合', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html'}],
         },
         {
          'id': 'step-2',
          'title': '统计商品数量',
          'verification': 'COUNT',
          'hint': '用 COUNT(*) 统计每个分类的商品数',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL 分组聚合', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html'}],
         },
         {
          'id': 'step-3',
          'title': '过滤分组结果',
          'verification': 'HAVING',
          'hint': '用 HAVING 筛选商品数大于 2 的分类',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL 分组聚合', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-9',
        number: 9,
        title: '子查询',
        concept: '子查询 / IN / EXISTS',
        difficulty: 'medium',
        task: '查询价格高于平均价格的所有商品',
        prerequisites: `<h4>🗄️ 子查询</h4>
<p>子查询是嵌套在另一个查询中的查询：</p>
<pre><code>SELECT * FROM products
WHERE price > (SELECT AVG(price) FROM products);
</code></pre>

<h4>🔑 子查询类型</h4>
<ul>
  <li>标量子查询 — 返回单个值</li>
  <li><code>IN (子查询)</code> — 值在子查询结果集中</li>
  <li><code>EXISTS (子查询)</code> — 子查询有结果则为真</li>
</ul>`,
        conceptDetail: `步骤 1 — 先写内层查询
[SELECT AVG(price) FROM products](计算平均价格) 返回一个值。

步骤 2 — 外层查询使用结果
WHERE price > (内层查询) 比较大小。

步骤 3 — 子查询用括号包裹
子查询必须用圆括号括起来。`,
        contextCode: `-- 子查询语法参考
-- 标量子查询
SELECT * FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- IN 子查询
SELECT * FROM products
WHERE category_id IN (
  SELECT id FROM categories WHERE name = '电子'
);

-- EXISTS 子查询
SELECT * FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- FROM 子查询
SELECT * FROM (
  SELECT name, price, price * 0.9 AS discount_price
  FROM products
) AS discounted;`,
        starterCode: `-- 查询价格高于平均价格的商品
SELECT name, price
FROM products
WHERE price > (???);`,
        hints: [
          '子查询计算平均价格：SELECT AVG(price) FROM products',
          '子查询用括号包裹',
          'WHERE price > 子查询结果'
        ],
        code: `SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);`,
        verification: '使用子查询计算平均价格并进行比较',
        filePath: 'queries/sql-9.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-8'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '编写子查询',
          'verification': 'SELECT AVG',
          'hint': '先写子查询计算平均价格',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL 子查询', url: 'https://www.postgresql.org/docs/current/functions-subquery.html'}],
         },
         {
          'id': 'step-2',
          'title': '外层查询',
          'verification': 'FROM products',
          'hint': '外层查询从 products 表选择',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL 子查询', url: 'https://www.postgresql.org/docs/current/functions-subquery.html'}],
         },
         {
          'id': 'step-3',
          'title': '组合过滤条件',
          'verification': 'WHERE price',
          'hint': '用 WHERE price > (子查询) 组合',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL 子查询', url: 'https://www.postgresql.org/docs/current/functions-subquery.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-10',
        number: 10,
        title: 'UNION 合并查询',
        concept: 'UNION / UNION ALL',
        difficulty: 'medium',
        task: '合并查询电子产品和服装类商品的名称列表',
        prerequisites: `<h4>🗄️ UNION 合并</h4>
<p>UNION 合并两个 SELECT 的结果集：</p>
<pre><code>SELECT name FROM products WHERE category = '电子'
UNION
SELECT name FROM products WHERE category = '服装';
</code></pre>

<h4>🔑 UNION vs UNION ALL</h4>
<ul>
  <li><code>UNION</code> — 自动去重</li>
  <li><code>UNION ALL</code> — 保留所有行（含重复）</li>
  <li>两个 SELECT 的列数和类型必须一致</li>
</ul>`,
        conceptDetail: `步骤 1 — 第一个 SELECT 查询电子类
SELECT name FROM products WHERE category = '电子'。

步骤 2 — 用 UNION 连接
[UNION](合并两个结果集，自动去重)。

步骤 3 — 第二个 SELECT 查询服装类
保证列数和类型一致。`,
        contextCode: `-- UNION 合并参考
-- 自动去重
SELECT name FROM products WHERE category = '电子'
UNION
SELECT name FROM products WHERE category = '服装';

-- 保留重复
SELECT name FROM products WHERE category = '电子'
UNION ALL
SELECT name FROM products WHERE category = '服装';

-- 多表合并
SELECT name, '电子产品' AS type FROM products WHERE category = '电子'
UNION ALL
SELECT name, '服装' AS type FROM products WHERE category = '服装'
ORDER BY type;`,
        starterCode: `-- 合并查询电子和服装类商品名称
SELECT name FROM products WHERE category = '电子'
???
SELECT name FROM products WHERE category = '服装';`,
        hints: [
          'UNION 关键字连接两个查询',
          '两个 SELECT 查询的列数必须相同',
          'UNION 自动去重，UNION ALL 保留所有行'
        ],
        code: `SELECT name FROM products WHERE category = '电子'
UNION
SELECT name FROM products WHERE category = '服装';`,
        verification: '使用 UNION 合并了两个查询结果',
        filePath: 'queries/sql-10.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-9'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '第一个查询语句',
          'verification': 'SELECT',
          'hint': '查询电子产品类别的商品名称',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL UNION', url: 'https://www.postgresql.org/docs/current/queries-union.html'}],
         },
         {
          'id': 'step-2',
          'title': '合并操作符',
          'verification': 'UNION',
          'hint': '用 UNION 连接两个查询',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL UNION', url: 'https://www.postgresql.org/docs/current/queries-union.html'}],
         },
         {
          'id': 'step-3',
          'title': '第二个查询语句',
          'verification': 'SELECT',
          'hint': '查询服装类别的商品名称',
          docLinks: [{title: 'SQL 查询基础', url: 'https://www.postgresql.org/docs/current/queries.html'}, {title: 'SQL UNION', url: 'https://www.postgresql.org/docs/current/queries-union.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      }
    ]
  },
  {
    id: 'sql-design',
    name: '阶段三：数据库设计',
    description: '掌握建表、约束、索引、事务等数据库设计知识',
    levels: [
      {
        id: 'sql-11',
        number: 11,
        title: '建表与数据类型',
        concept: 'CREATE TABLE / 数据类型',
        difficulty: 'medium',
        task: '创建一个 products 商品表',
        prerequisites: `<h4>🗄️ CREATE TABLE</h4>
<pre><code>CREATE TABLE table_name (
  column1 TYPE constraints,
  column2 TYPE constraints
);
</code></pre>

<h4>🔑 常用数据类型</h4>
<ul>
  <li><code>INTEGER</code> / <code>BIGINT</code> — 整数</li>
  <li><code>VARCHAR(n)</code> — 可变长度字符串</li>
  <li><code>TEXT</code> — 长文本</li>
  <li><code>DECIMAL(p,s)</code> — 精确数值</li>
  <li><code>DATETIME</code> / <code>TIMESTAMP</code> — 日期时间</li>
  <li><code>BOOLEAN</code> — 布尔值</li>
</ul>`,
        conceptDetail: `步骤 1 — 确定表名和列
products 表需要 id、name、price 等列。

步骤 2 — 选择合适的数据类型
名称用 VARCHAR，价格用 DECIMAL。

步骤 3 — 写 CREATE TABLE 语句
用括号包裹列定义，逗号分隔。`,
        contextCode: `-- CREATE TABLE 语法参考
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER DEFAULT 0,
  category VARCHAR(50),
  is_active BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 常用约束
NOT NULL        -- 不能为空
DEFAULT value   -- 默认值
UNIQUE          -- 值唯一
CHECK (expr)    -- 检查约束`,
        starterCode: `-- 创建 products 商品表
-- 包含：id(INTEGER), name(VARCHAR), price(DECIMAL), stock(INTEGER)
CREATE TABLE ??? (
  ???,
  ???,
  ???,
  ???
);`,
        hints: [
          'CREATE TABLE products (',
          'id INTEGER PRIMARY KEY 定义主键',
          'name VARCHAR(200) NOT NULL 不为空',
          'price DECIMAL(10, 2) 存储精确价格'
        ],
        code: `CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER DEFAULT 0,
  category VARCHAR(50),
  is_active BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`,
        verification: '使用 CREATE TABLE 创建了包含合适数据类型的表',
        filePath: 'queries/sql-11.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-10'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建数据表',
          'verification': 'CREATE TABLE',
          'hint': '用 CREATE TABLE 创建 products 表',
          docLinks: [{title: 'SQL 建表与约束', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         },
         {
          'id': 'step-2',
          'title': '定义字段类型',
          'verification': 'VARCHAR',
          'hint': '为每个字段指定数据类型',
          docLinks: [{title: 'SQL 建表与约束', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         },
         {
          'id': 'step-3',
          'title': '添加约束',
          'verification': 'NOT NULL',
          'hint': '添加非空和主键约束',
          docLinks: [{title: 'SQL 建表与约束', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-12',
        number: 12,
        title: '主键与外键',
        concept: 'PRIMARY KEY / FOREIGN KEY',
        difficulty: 'medium',
        task: '创建 users 和 orders 表，orders 通过外键关联 users',
        prerequisites: `<h4>🗄️ 主键</h4>
<pre><code>id INTEGER PRIMARY KEY,        -- 主键
id INTEGER PRIMARY KEY AUTO_INCREMENT,  -- 自增主键
</code></pre>

<h4>🗄️ 外键</h4>
<pre><code>user_id INTEGER,
FOREIGN KEY (user_id) REFERENCES users(id)
</code></pre>

<h4>🔑 约束的作用</h4>
<ul>
  <li><code>PRIMARY KEY</code> — 唯一标识每行，不能为空</li>
  <li><code>FOREIGN KEY</code> — 引用另一张表的主键，保证数据一致性</li>
  <li>外键可以防止删除被引用的记录</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 users 表（被引用方）
id 作为 PRIMARY KEY。

步骤 2 — 创建 orders 表（引用方）
user_id 作为外键引用 users.id。

步骤 3 — 定义 FOREIGN KEY 约束
FOREIGN KEY (user_id) REFERENCES users(id)。`,
        contextCode: `-- 主键外键参考
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER DEFAULT 1,
  total_price DECIMAL(10, 2),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- 级联操作
FOREIGN KEY (user_id) REFERENCES users(id)
  ON DELETE CASCADE      -- 删除用户时级联删除订单
  ON UPDATE CASCADE      -- 更新用户ID时级联更新`,
        starterCode: `-- 创建 users 表
CREATE TABLE users (
  id ???,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL
);

-- 创建 orders 表，user_id 关联 users
CREATE TABLE orders (
  id ???,
  user_id INTEGER NOT NULL,
  quantity INTEGER DEFAULT 1,
  FOREIGN KEY (???) REFERENCES ???(?)
);`,
        hints: [
          'id INTEGER PRIMARY KEY AUTO_INCREMENT 定义自增主键',
          'FOREIGN KEY (user_id) REFERENCES users(id)',
          '外键列名和引用列名用括号包裹'
        ],
        code: `CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  quantity INTEGER DEFAULT 1,
  total_price DECIMAL(10, 2),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
        verification: '创建了带主键和外键约束的表',
        filePath: 'queries/sql-12.sql',
        cognitiveLoad: 'medium',
        dependsOn: ['sql-11'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '创建用户表',
          'verification': 'CREATE TABLE users',
          'hint': '创建 users 表并指定 id 主键',
          docLinks: [{title: 'SQL 建表与约束', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         },
         {
          'id': 'step-2',
          'title': '创建订单表',
          'verification': 'CREATE TABLE orders',
          'hint': '创建 orders 表',
          docLinks: [{title: 'SQL 建表与约束', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         },
         {
          'id': 'step-3',
          'title': '添加外键关联',
          'verification': 'FOREIGN KEY',
          'hint': '用 FOREIGN KEY 关联 orders 和 users',
          docLinks: [{title: 'SQL 建表与约束', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-13',
        number: 13,
        title: '索引优化',
        concept: 'CREATE INDEX / 查询优化',
        difficulty: 'hard',
        task: '为 products 表的 name 和 category 列创建索引',
        prerequisites: `<h4>🗄️ 索引</h4>
<p>索引加速查询，类似书的目录：</p>
<pre><code>CREATE INDEX idx_name ON products(name);
</code></pre>

<h4>🔑 索引要点</h4>
<ul>
  <li>索引加速 SELECT，但会降低 INSERT/UPDATE 速度</li>
  <li>WHERE、JOIN、ORDER BY 涉及的列适合建索引</li>
  <li>频繁更新的列不宜建过多索引</li>
  <li>复合索引遵循最左前缀原则</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解索引的作用
索引让数据库快速定位数据，避免全表扫描。

步骤 2 — 为常用查询列建索引
name 列常用于搜索，category 列常用于过滤。

步骤 3 — 使用 CREATE INDEX 语句
[CREATE INDEX](创建普通索引) 后跟索引名和列名。`,
        contextCode: `-- 索引创建参考
-- 单列索引
CREATE INDEX idx_name ON products(name);
CREATE INDEX idx_category ON products(category);

-- 复合索引（多列）
CREATE INDEX idx_category_price ON products(category, price);

-- 唯一索引
CREATE UNIQUE INDEX idx_email ON users(email);

-- 查看索引
SHOW INDEX FROM products;

-- 使用 EXPLAIN 分析查询
EXPLAIN SELECT * FROM products WHERE name = '手机';`,
        starterCode: `-- 为 products 表的 name 列创建索引
CREATE ??? idx_name ON products(???);

-- 为 category 列创建索引
CREATE INDEX idx_category ON ???;`,
        hints: [
          'CREATE INDEX idx_name ON products(name)',
          '索引名通常以 idx_ 开头',
          'CREATE INDEX 索引名 ON 表名(列名)'
        ],
        code: `CREATE INDEX idx_name ON products(name);
CREATE INDEX idx_category ON products(category);`,
        verification: '使用 CREATE INDEX 为列创建了索引',
        filePath: 'queries/sql-13.sql',
        cognitiveLoad: 'high',
        dependsOn: ['sql-12'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '为 name 建索引',
          'verification': 'CREATE INDEX',
          'hint': '用 CREATE INDEX 为 name 列建索引',
          docLinks: [{title: 'SQL 索引优化', url: 'https://www.postgresql.org/docs/current/indexes.html'}],
         },
         {
          'id': 'step-2',
          'title': '为 category 建索引',
          'verification': 'CREATE INDEX',
          'hint': '为 category 列创建索引',
          docLinks: [{title: 'SQL 索引优化', url: 'https://www.postgresql.org/docs/current/indexes.html'}],
         },
         {
          'id': 'step-3',
          'title': '验证索引效果',
          'verification': 'EXPLAIN',
          'hint': '用 EXPLAIN 查看查询计划',
          docLinks: [{title: 'SQL 索引优化', url: 'https://www.postgresql.org/docs/current/indexes.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-14',
        number: 14,
        title: '事务与 ACID',
        concept: 'BEGIN / COMMIT / ROLLBACK',
        difficulty: 'hard',
        task: '用事务完成转账操作：从账户 A 扣款，向账户 B 加款',
        prerequisites: `<h4>🗄️ 事务</h4>
<p>事务是一组不可分割的操作，要么全部成功，要么全部失败：</p>
<pre><code>BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
</code></pre>

<h4>🔑 ACID 特性</h4>
<ul>
  <li><code>A</code>tomicity — 原子性：全部成功或全部回滚</li>
  <li><code>C</code>onsistency — 一致性：事务前后数据合法</li>
  <li><code>I</code>solation — 隔离性：并发事务互不干扰</li>
  <li><code>D</code>urability — 持久性：提交后数据永久保存</li>
</ul>`,
        conceptDetail: `步骤 1 — 开启事务
[BEGIN](开启事务) 后的操作在事务内。

步骤 2 — 执行操作
扣款和加款是两个操作，必须同时成功。

步骤 3 — 提交或回滚
[COMMIT](提交事务) 确认所有操作，[ROLLBACK](回滚事务) 撤销。`,
        contextCode: `-- 事务语法参考
BEGIN;

-- 扣款
UPDATE accounts
SET balance = balance - 100
WHERE id = 1 AND balance >= 100;

-- 加款
UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

-- 检查是否成功
-- 如果有错误：ROLLBACK;
-- 如果成功：COMMIT;

COMMIT;

-- 回滚
ROLLBACK;

-- 自动提交模式
-- SQLite 默认每条语句自动提交
-- 需要手动开启事务`,
        starterCode: `-- 用事务完成转账：账户1扣款100，账户2加款100
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

???;  -- 提交事务`,
        hints: [
          'BEGIN 开启事务',
          'COMMIT 提交所有操作',
          'ROLLBACK 可以撤销所有操作'
        ],
        code: `BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1 AND balance >= 100;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;`,
        verification: '使用 BEGIN/COMMIT 实现了事务操作',
        filePath: 'queries/sql-14.sql',
        cognitiveLoad: 'high',
        dependsOn: ['sql-13'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '开启事务',
          'verification': 'BEGIN',
          'hint': '用 BEGIN 或 START TRANSACTION 开启',
          docLinks: [{title: 'SQL 事务', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html'}],
         },
         {
          'id': 'step-2',
          'title': '执行转账',
          'verification': 'UPDATE',
          'hint': '执行两个 UPDATE 完成扣款和加款',
          docLinks: [{title: 'SQL 事务', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html'}],
         },
         {
          'id': 'step-3',
          'title': '确认提交',
          'verification': 'COMMIT',
          'hint': '确认后提交事务',
          docLinks: [{title: 'SQL 事务', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      },
      {
        id: 'sql-15',
        number: 15,
        title: '实战 - 电商数据库设计',
        concept: '综合实战',
        difficulty: 'hard',
        task: '设计完整的电商数据库：用户、商品、订单、订单详情、分类 5 张表',
        prerequisites: `<h4>🗄️ 数据库设计原则</h4>
<p>设计电商数据库需要考虑实体关系：</p>
<pre><code>用户(1) → (N) 订单(1) → (N) 订单详情(N) → (1) 商品
分类(1) → (N) 商品
</code></pre>

<h4>🔑 设计步骤</h4>
<ul>
  <li>识别实体：用户、商品、订单、分类</li>
  <li>确定关系：一对多、多对多</li>
  <li>选择合适的数据类型</li>
  <li>添加约束：主键、外键、非空</li>
</ul>`,
        conceptDetail: `步骤 1 — 设计用户表
存储用户基本信息，id 为主键。

步骤 2 — 设计商品和分类表
商品关联分类，分类一对多。

步骤 3 — 设计订单和订单详情表
订单关联用户，订单详情关联订单和商品。

步骤 4 — 定义外键关系
保证数据一致性。`,
        contextCode: `-- 电商数据库设计参考
-- 分类表
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

-- 商品表
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER DEFAULT 0,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 用户表
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL
);

-- 订单表
CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  total_price DECIMAL(10, 2),
  status VARCHAR(20) DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 订单详情表
CREATE TABLE order_items (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);`,
        starterCode: `-- 设计电商数据库（5张表）

-- 1. 分类表 categories
CREATE TABLE categories (
  ???,
  name VARCHAR(100) NOT NULL
);

-- 2. 商品表 products（关联分类）
CREATE TABLE products (
  ???,
  name VARCHAR(200) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  ???,
  FOREIGN KEY (???) REFERENCES categories(id)
);

-- 3. 用户表 users
CREATE TABLE users (
  ???,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL
);

-- 4. 订单表 orders（关联用户）
CREATE TABLE orders (
  ???,
  user_id INTEGER NOT NULL,
  total_price DECIMAL(10, 2),
  status VARCHAR(20) DEFAULT 'pending',
  FOREIGN KEY (???) REFERENCES users(id)
);

-- 5. 订单详情表 order_items（关联订单和商品）
CREATE TABLE order_items (
  ???,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (???) REFERENCES orders(id),
  FOREIGN KEY (???) REFERENCES products(id)
);`,
        hints: [
          'id INTEGER PRIMARY KEY AUTO_INCREMENT 定义自增主键',
          '外键列名用 FOREIGN KEY ... REFERENCES 定义',
          '每张表都要有 id 主键列'
        ],
        code: `CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER DEFAULT 0,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  total_price DECIMAL(10, 2),
  status VARCHAR(20) DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);`,
        verification: '设计了完整的电商数据库，包含 5 张关联表',
        filePath: 'queries/sql-15.sql',
        cognitiveLoad: 'high',
        dependsOn: ['sql-14'],
        commonMistakes: [
         {
          'pattern': 'error',
          'explanation': '处理边界情况和错误'
         },
         {
          'pattern': '类型',
          'explanation': '注意变量类型正确性'
         }
        ],
        microSteps: [
         {
          'id': 'step-1',
          'title': '表结构设计',
          'verification': 'CREATE TABLE',
          'hint': '创建用户、商品、分类等各表',
          docLinks: [{title: 'SQL 数据库设计', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         },
         {
          'id': 'step-2',
          'title': '建立关联关系',
          'verification': 'FOREIGN KEY',
          'hint': '通过外键建立表间关联',
          docLinks: [{title: 'SQL 数据库设计', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         },
         {
          'id': 'step-3',
          'title': '设置主键约束',
          'verification': 'PRIMARY KEY',
          'hint': '为每张表设置主键约束',
          docLinks: [{title: 'SQL 数据库设计', url: 'https://www.postgresql.org/docs/current/ddl.html'}],
         }
        ],
        variations: [
         {
          'name': '更多用法',
          'description': '查阅官方文档获取完整 API'
         }
        ],
        transferTasks: [
         {
          'task': '完成关卡后用不同方法实现相同功能',
          'target': '巩固概念理解'
         }
        ]
      }
    ]
  }
]
