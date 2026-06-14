import { readFile } from './fileStore'

export function verify(levelId, files, courseVerifyFn) {
  const results = []
  let allPassed = true

  function check(filePath, pattern, name, effect) {
    let content = files[filePath] || ''
    if (!content) {
      const saved = readFile(filePath)
      if (saved !== null) {
        files[filePath] = saved
        content = saved
      }
    }
    const fileContent = content || ''
    const isRegex = pattern.startsWith('/') && pattern.endsWith('/')
    let matched = false
    try {
      matched = isRegex
        ? new RegExp(pattern.slice(1, -1)).test(fileContent)
        : fileContent.includes(pattern)
    } catch (e) {
      results.push({ name, passed: false, detail: `正则语法错误: ${e.message}`, effect: effect || '', pattern })
      allPassed = false
      return
    }
    results.push({
      name,
      passed: matched,
      detail: matched ? '通过' : `未找到「${isRegex ? pattern.slice(1, -1) : pattern}」`,
      effect: effect || '',
      pattern
    })
    if (!matched) allPassed = false
  }

  try {
    if (courseVerifyFn) {
      courseVerifyFn(levelId, { check, results })
    }
  } catch (e) {
    results.push({ name: '验证执行出错', passed: false, detail: e.message, effect: '', pattern: '' })
    allPassed = false
  }

  return { passed: allPassed, results }
}
