export function verify(levelId, { check, results }) {
  switch (levelId) {
    case 'sql-1':
      check('queries/sql-1.sql', 'SELECT', '使用 SELECT 查询', '编写了查询语句')
      break
    case 'sql-2':
      check('queries/sql-2.sql', 'WHERE', '使用 WHERE 条件', '添加了过滤条件')
      break
    case 'sql-3':
      check('queries/sql-3.sql', 'ORDER BY', '使用排序', '实现了排序功能')
      break
    case 'sql-4':
      check('queries/sql-4.sql', 'LIMIT', '使用分页', '实现了分页查询')
      break
    case 'sql-5':
      check('queries/sql-5.sql', 'INSERT', '使用 INSERT', '插入了数据')
      break
    case 'sql-6':
      check('queries/sql-6.sql', 'JOIN', '使用 JOIN', '实现了连表查询')
      break
    case 'sql-7':
      check('queries/sql-7.sql', 'GROUP BY', '使用分组', '实现了分组聚合')
      break
    case 'sql-8':
      check('queries/sql-8.sql', 'HAVING', '使用 HAVING', '过滤了分组结果')
      break
    case 'sql-9':
      check('queries/sql-9.sql', 'SELECT', '使用子查询', '编写了子查询')
      break
    case 'sql-10':
      check('queries/sql-10.sql', 'UNION', '使用 UNION', '合并了查询结果')
      break
    case 'sql-11':
      check('queries/sql-11.sql', 'CREATE TABLE', '建表语句', '创建了数据表')
      break
    case 'sql-12':
      check('queries/sql-12.sql', 'PRIMARY KEY', '主键约束', '定义了主键')
      break
    case 'sql-13':
      check('queries/sql-13.sql', 'INDEX', '创建索引', '使用了索引优化')
      break
    case 'sql-14':
      check('queries/sql-14.sql', 'BEGIN', '事务操作', '使用了事务')
      break
    case 'sql-15':
      check('queries/sql-15.sql', 'CREATE TABLE', '建表语句', '设计了电商表结构')
      break
    default:
      results.push({ name: '未知关卡', passed: false, detail: '未找到该关卡的验证规则', effect: '', pattern: '' })
  }
}
