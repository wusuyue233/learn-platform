import { readFile } from './fileStore'

export function verify(levelId, files, courseVerifyFn) {
  const results = []
  let allPassed = true

  function check(filePath, pattern, name, effect, options = {}) {
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
      results.push({
        name,
        passed: false,
        level: 'fail',
        detail: `正则语法错误: ${e.message}`,
        explanation: '',
        fixHint: '',
        conceptLink: '',
        effect: effect || '',
        pattern
      })
      allPassed = false
      return
    }
    const passed = matched
    results.push({
      name,
      passed,
      level: passed ? 'success' : 'fail',
      detail: passed ? '通过' : `未找到「${isRegex ? pattern.slice(1, -1) : pattern}」`,
      explanation: options.explanation || '',
      fixHint: options.fixHint || '',
      conceptLink: options.conceptLink || '',
      effect: effect || '',
      pattern
    })
    if (!passed) allPassed = false
  }

  function partialCheck(filePath, pattern, name, effect, options = {}) {
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
      results.push({
        name,
        passed: false,
        level: 'fail',
        detail: `正则语法错误: ${e.message}`,
        explanation: options.explanation || '',
        fixHint: options.fixHint || '',
        conceptLink: options.conceptLink || '',
        effect: effect || '',
        pattern
      })
      allPassed = false
      return
    }
    results.push({
      name,
      passed: matched,
      level: matched ? 'success' : 'partial',
      detail: matched ? '通过' : `部分匹配：${isRegex ? pattern.slice(1, -1) : pattern}`,
      explanation: options.explanation || '',
      fixHint: options.fixHint || '',
      conceptLink: options.conceptLink || '',
      effect: effect || '',
      pattern
    })
    if (!matched) allPassed = false
  }

  const api = { check, partialCheck, results }

  try {
    if (courseVerifyFn) {
      courseVerifyFn(levelId, api)
    }
  } catch (e) {
    results.push({ name: '验证执行出错', passed: false, level: 'fail', detail: e.message, explanation: '', fixHint: '', conceptLink: '', effect: '', pattern: '' })
    allPassed = false
  }

  const passedCount = results.filter(r => r.passed).length
  const totalCount = results.length
  const feedback = {
    summary: `通过 ${passedCount}/${totalCount} 项检查`,
    encouragement: allPassed ? '太棒了，全部通过！' : passedCount > 0 ? '进步明显，再接再厉！' : '别气馁，对照提示逐项检查。',
    nextAction: allPassed ? '进入下一关' : '修复标红项后重新验证'
  }

  return { passed: allPassed, results, feedback }
}
