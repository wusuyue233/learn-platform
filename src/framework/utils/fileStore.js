const PREFIX = 'learn-platform-file:'

export function readFile(path) {
  try {
    return localStorage.getItem(PREFIX + path) ?? null
  } catch {
    return null
  }
}

export function writeFile(path, content) {
  try {
    localStorage.setItem(PREFIX + path, content)
    return true
  } catch {
    return false
  }
}

export function fileExists(path) {
  return localStorage.getItem(PREFIX + path) !== null
}

export function listFiles() {
  const files = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key.startsWith(PREFIX)) {
      files.push(key.slice(PREFIX.length))
    }
  }
  return files
}

export function deleteFile(path) {
  localStorage.removeItem(PREFIX + path)
}

export function clearAllFiles() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key.startsWith(PREFIX)) keys.push(key)
  }
  keys.forEach(k => localStorage.removeItem(k))
}
