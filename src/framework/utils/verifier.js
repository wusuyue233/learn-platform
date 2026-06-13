import { readFile } from './fileStore'

export function verify(levelId, files) {
  const results = []
  let allPassed = true

  function check(filePath, pattern, name, effect) {
    const content = files[filePath] || ''
    if (!content && readFile(filePath)) {
      files[filePath] = readFile(filePath)
    }
    const fileContent = files[filePath] || ''
    const isRegex = pattern.startsWith('/') && pattern.endsWith('/')
    const matched = isRegex
      ? new RegExp(pattern.slice(1, -1)).test(fileContent)
      : fileContent.includes(pattern)
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
    const courseVerify = window.__courseVerify
    if (courseVerify) {
      courseVerify(levelId, { check, results })
    }
  } catch (e) {
    results.push({ name: '验证执行出错', passed: false, detail: e.message, effect: '', pattern: '' })
    allPassed = false
  }

  return { passed: allPassed, results }
}
