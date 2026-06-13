<template>
  <div ref="container" class="code-editor"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  language: { type: String, default: 'python' },
  readonly: { type: Boolean, default: false },
  theme: { type: String, default: 'vs-dark' }
})

const emit = defineEmits(['update:modelValue'])

const container = ref(null)
let editor = null
let monaco = null
let highlightDecoration = null
let highlightTimer = null

function langMap(l) {
  const map = { py: 'python', js: 'javascript', vue: 'html', css: 'css', json: 'json', md: 'markdown', ts: 'typescript', jsx: 'javascript', tsx: 'typescript', sql: 'sql', sh: 'shell', dockerfile: 'dockerfile', yml: 'yaml', yaml: 'yaml' }
  return map[l] || l
}

onMounted(async () => {
  monaco = await loadMonaco()
  if (!container.value) return
  editor = monaco.editor.create(container.value, {
    value: props.modelValue || '',
    language: langMap(props.language),
    theme: props.theme,
    fontSize: 14,
    minimap: { enabled: false },
    lineNumbers: 'on',
    scrollBeyondLastLine: false,
    automaticLayout: true,
    readOnly: props.readonly,
    tabSize: 2,
    wordWrap: 'on'
  })
  editor.onDidChangeModelContent(() => {
    emit('update:modelValue', editor.getValue())
  })
})

watch(() => props.modelValue, (val) => {
  if (editor && val !== editor.getValue()) {
    editor.setValue(val || '')
  }
})

watch(() => props.theme, (val) => {
  if (editor && monaco) {
    monaco.editor.setTheme(val)
  }
})

onBeforeUnmount(() => {
  if (highlightTimer) clearTimeout(highlightTimer)
  if (editor) {
    const model = editor.getModel()
    editor.dispose()
    if (model) model.dispose()
  }
})

function revealText(text) {
  if (!editor || !monaco) return
  const model = editor.getModel()
  const fullText = model.getValue()
  const idx = fullText.indexOf(text)
  if (idx === -1) return
  const startPos = model.getPositionAt(idx)
  const endPos = model.getPositionAt(idx + text.length)
  const range = new monaco.Range(startPos.lineNumber, startPos.column, endPos.lineNumber, endPos.column)
  editor.revealRangeInCenter(range)
  editor.setSelection(range)
  if (highlightDecoration) highlightDecoration.clear()
  highlightDecoration = editor.createDecorationsCollection([{
    range,
    options: {
      isWholeLine: true,
      className: 'code-highlight-line',
      inlineClassName: 'code-highlight-inline'
    }
  }])
  if (highlightTimer) clearTimeout(highlightTimer)
  highlightTimer = setTimeout(() => {
    if (highlightDecoration) {
      highlightDecoration.clear()
      highlightDecoration = null
    }
  }, 1500)
}

defineExpose({ revealText })

let monacoPromise = null
function loadMonaco() {
  if (window.monaco) return Promise.resolve(window.monaco)
  if (monacoPromise) return monacoPromise
  monacoPromise = new Promise((resolve, reject) => {
    const CDN_URLS = [
      'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js',
      'https://unpkg.com/monaco-editor@0.45.0/min/vs/loader.js'
    ]
    let idx = 0
    function tryLoad() {
      const script = document.createElement('script')
      script.src = CDN_URLS[idx]
      script.onload = () => {
        window.require.config({ paths: { vs: CDN_URLS[idx].replace('/loader.js', '') } })
        window.require(['vs/editor/editor.main'], () => resolve(window.monaco))
      }
      script.onerror = () => {
        idx++
        if (idx < CDN_URLS.length) {
          script.remove()
          tryLoad()
        } else {
          reject(new Error('Monaco 编辑器加载失败，请检查网络连接'))
        }
      }
      document.body.appendChild(script)
    }
    tryLoad()
  })
  return monacoPromise
}
</script>

<style>
.code-highlight-line {
  background: rgba(250, 204, 21, 0.25) !important;
  transition: background 0.3s;
}
.code-editor {
  width: 100%;
  height: min(520px, 60vh);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
</style>
