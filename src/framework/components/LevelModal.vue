<template>
  <div class="modal-overlay" @click.self="handleClose">
    <div class="modal-content modal-wide">
      <div class="modal-header">
        <div>
          <h2>Lv.{{ level.number }} {{ level.title }}</h2>
          <div class="modal-tags" style="margin-top:8px">
            <span class="tag tag-concept">{{ level.concept }}</span>
            <span v-if="level.type === 'project' && projectInfo" class="tag tag-project">{{ projectInfo.icon }} {{ projectInfo.name }}</span>
            <span class="tag tag-difficulty" :class="level.difficulty">{{ diffLabel }}</span>
          </div>
        </div>
        <button class="modal-close" @click="handleClose">✕</button>
      </div>

      <div class="modal-body">
        <div class="modal-left">
          <div class="modal-section">
            <h3>📖 任务</h3>
            <div class="modal-task">{{ level.task }}</div>
          </div>

          <div v-if="level.type === 'project' && projectFilesEntries.length" class="modal-section">
            <div class="section-collapse" @click="showProjectFiles = !showProjectFiles">
              <h3>📁 项目文件</h3>
              <span class="collapse-arrow" :class="{ open: showProjectFiles }">▼</span>
            </div>
            <div v-if="showProjectFiles" class="project-files-list">
              <div v-for="(file, i) in projectFilesEntries" :key="i" class="project-file-item" :class="{ current: file.current }">
                <div class="project-file-path" @click="file.open = !file.open">
                  <span class="project-file-icon">{{ file.current ? '📄' : '📁' }}</span>
                  <span>{{ file.path }}</span>
                  <span v-if="file.current" class="project-file-tag">本关</span>
                </div>
                <div v-if="file.open" class="project-file-preview">
                  <pre><code>{{ file.content }}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-section">
            <div class="section-collapse" @click="showPrereq = !showPrereq">
              <h3>📚 预备知识</h3>
              <span class="collapse-arrow" :class="{ open: showPrereq }">▼</span>
            </div>
            <div v-if="showPrereq && parsedPrereq" class="prereq-content">
              <div v-if="parsedPrereq.preamble" v-html="parsedPrereq.preamble" class="prereq-preamble"></div>
              <div v-for="(sec, i) in parsedPrereq.sections" :key="i" class="prereq-block">
                <div class="prereq-block-header" @click="prereqSectionOpen[i] = !prereqSectionOpen[i]" :class="'prereq-type-' + sec.type">
                  <span class="prereq-block-title" v-html="sec.title"></span>
                  <span class="prereq-arrow" :class="{ open: prereqSectionOpen[i] }">▼</span>
                </div>
                <div v-if="prereqSectionOpen[i]" class="prereq-block-body" v-html="sec.content"></div>
              </div>
            </div>
          </div>

          <div class="modal-section">
            <div class="section-collapse" @click="showConcept = !showConcept">
              <h3>📚 概念讲解</h3>
              <span class="collapse-arrow" :class="{ open: showConcept }">▼</span>
            </div>
            <div v-if="showConcept && level.conceptDetail" class="concept-detail">
              <template v-for="(seg, i) in parsedConcept" :key="i">
                <span v-if="seg.t === 'text'" v-text="seg.v" style="white-space:pre-wrap"></span>
                <span v-else class="concept-link" :class="linkStatus[seg.s] || ''" @mouseenter="seg.d && showTip($event, seg.d)" @mouseleave="hideTip" @click="handleConceptLink(seg, i, $event)">{{ seg.l }}</span>
              </template>
            </div>
          </div>

          <div class="modal-section">
            <div class="section-collapse" @click="showDocLinks = !showDocLinks">
              <h3>🔗 参考链接</h3>
              <span class="collapse-arrow" :class="{ open: showDocLinks }">▼</span>
            </div>
            <div v-if="showDocLinks && level.docLinks && level.docLinks.length" class="doc-links-list">
              <a v-for="(link, i) in level.docLinks" :key="i" class="doc-link-item" :href="link.url" target="_blank" rel="noopener noreferrer">
                <span class="doc-link-icon">📄</span>
                <span class="doc-link-title">{{ link.title }}</span>
                <span class="doc-link-arrow">↗</span>
              </a>
            </div>
          </div>

          <div class="modal-section">
            <div class="section-collapse" @click="showContext = !showContext">
              <h3>📄 上下文代码</h3>
              <span class="collapse-arrow" :class="{ open: showContext }">▼</span>
            </div>
            <div v-if="showContext && level.contextCode" class="context-code">
              <pre>{{ level.contextCode }}</pre>
            </div>
          </div>

          <div class="modal-section">
            <h3>💡 提示</h3>
            <div class="hint-container">
              <button class="hint-btn" @click="showNextHint" :disabled="hintLevel >= level.hints.length + 1">
                {{ hintBtnText }}
              </button>
              <div v-for="(hint, i) in level.hints.slice(0, hintLevel)" :key="i" class="hint-box">
                <strong>提示 {{ i + 1 }}：</strong>{{ hint }}
              </div>
              <div v-if="hintLevel > level.hints.length" class="hint-box code-hint">{{ level.code }}</div>
            </div>
          </div>

          <div class="modal-section">
            <h3>🔍 验证说明</h3>
            <div class="modal-verification">{{ level.verification }}</div>
          </div>

          <div v-if="level.solution" class="modal-section">
            <button class="hint-btn" @click="showSolution = !showSolution">
              {{ showSolution ? '🧠 收起思路' : '💡 查看解题思路' }}
            </button>
            <div v-if="showSolution" class="hint-box">{{ level.solution }}</div>
          </div>

          <div class="modal-section">
            <button class="hint-btn" @click="showAnswer = !showAnswer">
              {{ showAnswer ? '📕 收起答案' : '📖 查看参考答案' }}
            </button>
            <div v-if="showAnswer" class="hint-box code-hint">{{ level.code }}</div>
          </div>

          <div v-if="results.length" class="modal-section">
            <h3>📊 验证结果</h3>
            <div class="result-list">
              <div v-for="(r, i) in results" :key="i" class="result-item" :class="{ pass: r.passed, fail: !r.passed }">
                <span class="result-icon">{{ r.passed ? '✓' : '✗' }}</span>
                <span class="result-name" :class="{ clickable: r.passed && r.pattern }" @click="r.passed && r.pattern && revealResult(r)">{{ r.name }}</span>
                <span class="result-detail">{{ r.detail }}</span>
                <span v-if="r.passed && r.pattern" class="result-nav" @click="revealResult(r)">👉 定位</span>
                <div v-if="r.effect" class="result-effect">{{ r.effect }}</div>
              </div>
              <div v-if="verifyDone" class="result-summary" :class="{ pass: verifyPassed, fail: !verifyPassed }">
                {{ verifyPassed ? '✅ 全部通过！' : `❌ 还有 ${results.filter(r => !r.passed).length} 项未通过，请检查上方标红项` }}
              </div>
            </div>
          </div>
        </div>

        <div class="modal-right">
          <div class="editor-header">
            <span class="modal-file">{{ level.filePath }}<span v-if="dirty" class="dirty-dot" title="有未保存的修改"> ●</span></span>
            <div class="editor-actions">
              <button class="btn-action" @click="resetCode" title="重置为初始模板">
                🔄 重置
              </button>
              <button class="btn-action" @click="saveFile" :disabled="saving">
                {{ saving ? '保存中...' : '💾 保存' }}
              </button>
              <button class="btn-action primary" @click="verifyFile" :disabled="verifying">
                {{ verifying ? '验证中...' : '▶ 验证' }}
              </button>
              <button v-if="canPreview" class="btn-action run" @click="togglePreview">
                {{ showPreview ? '✕ 关闭' : '▶ 运行' }}
              </button>
            </div>
          </div>
          <div v-if="level.microSteps?.length" class="microstep-section">
            <button class="btn-microstep" @click="toggleMicroStepMode">
              {{ microStepMode ? '✕ 退出分步模式' : '📝 Step by Step 分步引导' }}
            </button>
            <div v-if="microStepMode" class="microstep-content">
              <div class="microstep-dots">
                <div v-for="(step, i) in level.microSteps" :key="step.id"
                  class="microstep-dot"
                  :class="{ done: microStepDoneIds.includes(step.id), current: currentMicroStepIdx === i && !microStepDoneIds.includes(step.id), pending: currentMicroStepIdx < i }"
                  :title="`${i+1}. ${step.title}`">
                </div>
              </div>
              <div class="microstep-current" v-if="currentMicroStep">
                <div class="microstep-current-header">
                  <span class="microstep-step-label">步骤 {{ currentMicroStepIdx + 1 }}/{{ level.microSteps.length }}</span>
                  <span v-if="allMicroStepsDone" class="microstep-all-done">🎉 全部完成</span>
                </div>
                <strong>{{ currentMicroStep.title }}</strong>
                <p class="microstep-hint">{{ currentMicroStep.hint }}</p>
                <div v-if="currentMicroStep.docLinks?.length" class="microstep-docs">
                  <a v-for="(link, i) in currentMicroStep.docLinks" :key="i" class="microstep-doc-link" :href="link.url" target="_blank" rel="noopener noreferrer">
                    <span class="doc-link-icon">📄</span>
                    <span>{{ link.title }}</span>
                    <span class="doc-link-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-if="loadError" class="editor-error">{{ loadError }}</div>
          <div v-else-if="loadingFile" class="editor-loading">加载文件中...</div>
          <CodeEditor
            v-if="!loadError"
            ref="editorRef"
            :key="level.id"
            v-model="code"
            :language="editorLang"
            :commonMistakes="level.commonMistakes"
          />
          <div v-if="saveMsg" class="save-toast" :class="{ success: saveOk, error: !saveOk }">
            {{ saveMsg }}
          </div>
          <div v-if="showPreview && previewUrl" class="preview-container">
            <div class="preview-toolbar">
              <span>{{ previewLabel }}</span>
              <button class="preview-refresh" @click="refreshPreview">⟳ 刷新</button>
            </div>
            <iframe class="preview-iframe" :src="previewUrl" sandbox="allow-scripts" @load="previewLoading=false"></iframe>
          </div>
          <div v-else-if="showPreview && !canPreview" class="preview-container preview-na">
            <p>该类型的代码不支持实时预览</p>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button
          v-if="!completed"
          class="btn-complete"
          :class="{ primary: !pendingComplete, warning: pendingComplete }"
          @click="handleComplete"
        >
          {{ pendingComplete ? '⚠️ 代码未通过验证，再次点击仍通关' : '✅ 通关！标记为已完成' }}
        </button>
        <button v-else class="btn-complete success" @click="handleClose">
          ✓ 已通关，关闭
        </button>
      </div>
    </div>
    <div v-if="tipState.show" class="floating-tip" :style="{ top: tipState.y + 'px', left: tipState.x + 'px' }">{{ tipState.text }}</div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useProgressStore } from '../stores/progress'
import { readFile, writeFile, deleteFile } from '../utils/fileStore'
import { verify } from '../utils/verifier'
import { courses } from '../../courses'
import { projects } from '../../projects'
import CodeEditor from './CodeEditor.vue'

const props = defineProps({
  level: Object,
  courseId: String,
  completed: Boolean
})

const emit = defineEmits(['close', 'complete'])
const store = useProgressStore()

const hintLevel = ref(0)
const showPrereq = ref(true)
const showConcept = ref(false)
const showContext = ref(true)
const showAnswer = ref(false)
const showSolution = ref(false)
const editorRef = ref(null)
const code = ref('')
const originalCode = ref('')
const dirty = computed(() => code.value !== originalCode.value && !loadError.value)
const loadError = ref('')
const loadingFile = ref(false)
const saving = ref(false)
const verifying = ref(false)
const saveMsg = ref('')
const saveOk = ref(false)
const results = ref([])
const verifyDone = ref(false)
const verifyPassed = ref(false)
const pendingComplete = ref(false)

const showDocLinks = ref(true)
const showProjectFiles = ref(false)
const projectInfo = computed(() => {
  if (props.level.type !== 'project' || !props.level.project) return null
  return projects[props.level.project] || null
})
const projectFilesEntries = computed(() => {
  const files = props.level.projectFiles || {}
  return Object.entries(files).map(([path, content]) => ({
    path, content, current: true, open: false
  }))
})

const microStepMode = ref(false)
const currentMicroStepIdx = ref(0)
const microStepDoneIds = ref([])

const currentMicroStep = computed(() => {
  return props.level.microSteps?.[currentMicroStepIdx.value] || null
})

const allMicroStepsDone = computed(() => {
  const steps = props.level.microSteps || []
  return steps.length > 0 && steps.every(s => microStepDoneIds.value.includes(s.id))
})

function toggleMicroStepMode() {
  microStepMode.value = !microStepMode.value
  if (microStepMode.value) {
    loadMicroStepProgress()
  }
}

function loadMicroStepProgress() {
  const progress = store.getMicroStepProgress(props.courseId, props.level.id)
  const steps = props.level.microSteps || []
  microStepDoneIds.value = Object.keys(progress)
  let found = false
  for (let i = 0; i < steps.length; i++) {
    if (!progress[steps[i].id]) {
      currentMicroStepIdx.value = i
      found = true
      break
    }
  }
  if (!found && steps.length > 0) {
    currentMicroStepIdx.value = steps.length - 1
  }
}

const linkStatus = ref({})
const tipState = ref({ show: false, text: '', x: 0, y: 0 })
let tipTimer = null
let linkDebounceTimer = null
let saveMsgTimer = null

function showTip(e, text) {
  if (tipTimer) clearTimeout(tipTimer)
  tipTimer = setTimeout(() => {
    const rect = e.target.getBoundingClientRect()
    const gap = 8
    let x = rect.left + rect.width / 2
    let y = rect.top - gap
    const tipHeight = 200
    if (y - tipHeight < 10) {
      y = rect.bottom + gap
    }
    tipState.value = { show: true, text, x, y }
  }, 200)
}

function hideTip() {
  if (tipTimer) clearTimeout(tipTimer)
  tipTimer = setTimeout(() => {
    tipState.value = { show: false, text: '', x: 0, y: 0 }
  }, 100)
}

const diffLabel = computed(() => {
  const map = { easy: '简单', medium: '中等', hard: '困难' }
  return map[props.level.difficulty] || props.level.difficulty
})

const parsedConcept = computed(() => {
  const text = props.level.conceptDetail
  if (!text) return []
  const parts = []
  let i = 0
  while (i < text.length) {
    const bs = text.indexOf('[', i)
    if (bs === -1) { parts.push({ t: 'text', v: text.slice(i) }); break }
    if (bs > i) parts.push({ t: 'text', v: text.slice(i, bs) })
    const be = text.indexOf(']', bs)
    if (be === -1) { parts.push({ t: 'text', v: text.slice(i) }); break }
    const label = text.slice(bs + 1, be)
    if (text[be + 1] !== '(') {
      parts.push({ t: 'text', v: text.slice(bs, be + 1) })
      i = be + 1; continue
    }
    let depth = 1, se = be + 2
    while (se < text.length) {
      const ch = text[se]
      if (ch === '(') depth++
      else if (ch === ')') { depth--; if (depth === 0) break }
      se++
    }
    if (se >= text.length) {
      parts.push({ t: 'text', v: text.slice(bs, be + 1) })
      i = be + 1; continue
    }
    const search = text.slice(be + 2, se)
    let tip = ''
    const pipeIdx = search.lastIndexOf('|')
    if (pipeIdx !== -1) {
      tip = search.slice(pipeIdx + 1)
    }
    parts.push({ t: 'link', l: label, s: pipeIdx !== -1 ? search.slice(0, pipeIdx) : label, d: pipeIdx !== -1 ? tip : search })
    i = se + 1
  }
  return parts.length ? parts : [{ t: 'text', v: text }]
})

const prereqSectionOpen = ref([])

const parsedPrereq = computed(() => {
  const html = props.level.prerequisites || ''
  if (!html) return null
  const parts = html.split(/(<h4[^>]*>.*?<\/h4>)/)
  let preamble = ''
  if (parts[0] && parts[0].trim()) preamble = parts[0].trim()
  const sections = []
  for (let i = 1; i < parts.length; i += 2) {
    const title = parts[i] || ''
    const content = (parts[i + 1] || '').trim()
    let type = 'default'
    if (title.includes('🐍') || title.includes('📚') || title.includes('💻')) type = 'lang'
    else if (title.includes('🔑') || title.includes('💡')) type = 'concept'
    else if (title.includes('⚠️') || title.includes('❌')) type = 'error'
    sections.push({ title, content, type })
  }
  return { preamble, sections }
})

watch(() => props.level, () => {
  if (parsedPrereq.value) {
    prereqSectionOpen.value = parsedPrereq.value.sections.map((_, i) => i === 0)
  }
}, { immediate: true })

watch([parsedConcept, code], () => {
  if (linkDebounceTimer) clearTimeout(linkDebounceTimer)
  linkDebounceTimer = setTimeout(() => {
    const st = {}
    for (const seg of parsedConcept.value) {
      if (seg.t === 'link' && seg.s) {
        st[seg.s] = code.value && code.value.includes(seg.s) ? 'found' : 'missing'
      }
    }
    linkStatus.value = st
  }, 150)
}, { immediate: true })

watch(code, (val) => {
  pendingComplete.value = false
  if (!microStepMode.value || !currentMicroStep.value) return
  const step = currentMicroStep.value
  if (!microStepDoneIds.value.includes(step.id) && val.includes(step.verification)) {
    store.completeMicroStep(props.courseId, props.level.id, step.id)
    microStepDoneIds.value.push(step.id)
    if (currentMicroStepIdx.value < props.level.microSteps.length - 1) {
      currentMicroStepIdx.value++
    }
  }
})

const hintBtnText = computed(() => {
  const total = props.level.hints.length + 1
  if (hintLevel.value === 0) return `🤔 没思路，给点提示（0/${total}）`
  if (hintLevel.value <= props.level.hints.length) return `😅 还是不行，再说细点（${hintLevel.value}/${total}）`
  return `👌 已看完所有提示（${total}/${total}）`
})

const editorLang = computed(() => {
  const fp = props.level.filePath || ''
  if (fp.endsWith('.py')) return 'python'
  if (fp.endsWith('.js')) return 'javascript'
  if (fp.endsWith('.vue')) return 'html'
  if (fp.endsWith('.css')) return 'css'
  if (fp.endsWith('.json')) return 'json'
  if (fp.endsWith('.ts')) return 'typescript'
  if (fp.endsWith('.sql')) return 'sql'
  if (fp.endsWith('.sh')) return 'shell'
  if (fp.endsWith('.yml') || fp.endsWith('.yaml')) return 'yaml'
  return 'plaintext'
})

const showPreview = ref(false)
const previewUrl = ref('')
const previewLoading = ref(false)

const canPreview = computed(() => {
  const fp = props.level.filePath || ''
  return fp.endsWith('.html') || fp.endsWith('.htm')
})

const previewLabel = computed(() => {
  const fp = props.level.filePath || ''
  return '▶ ' + (fp.split('/').pop() || fp)
})

function buildPreviewHtml() {
  const userCode = code.value || ''
  if (/<html[\s>]/i.test(userCode) && /<\/html>/i.test(userCode)) {
    return userCode
  }
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:sans-serif;padding:16px;margin:0}</style></head><body>${userCode}</body></html>`
}

function togglePreview() {
  showPreview.value = !showPreview.value
  if (showPreview.value && canPreview.value) {
    refreshPreview()
  }
}

function refreshPreview() {
  if (!canPreview.value) return
  previewLoading.value = true
  const blob = new Blob([buildPreviewHtml()], { type: 'text/html' })
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = URL.createObjectURL(blob)
}

function onKeydown(e) {
  if (e.key === 'Escape') {
    handleClose()
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault()
    saveFile()
  }
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  document.addEventListener('keydown', onKeydown)
  loadFile()
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
  if (tipTimer) clearTimeout(tipTimer)
  if (linkDebounceTimer) clearTimeout(linkDebounceTimer)
  if (flashingTimer) clearTimeout(flashingTimer)
  if (saveMsgTimer) clearTimeout(saveMsgTimer)
})

function showNextHint() {
  hintLevel.value++
}

function handleConceptLink(seg, i, e) {
  if (!seg.s) return
  if (code.value && !code.value.includes(seg.s)) {
    if (seg.d && e) {
      showTip(e, seg.d)
    }
    return
  }
  if (editorRef.value && editorRef.value.revealText) {
    editorRef.value.revealText(seg.s)
  }
}

function loadFile() {
  if (!props.level.filePath) return
  loadingFile.value = true
  loadError.value = ''
  try {
    const content = readFile(props.level.filePath)
    if (content !== null) {
      code.value = content
      originalCode.value = content
    } else {
      code.value = props.level.starterCode || props.level.contextCode || ''
      originalCode.value = props.level.starterCode || props.level.contextCode || ''
    }
  } catch (e) {
    loadError.value = '加载文件失败'
  } finally {
    loadingFile.value = false
  }
}

function resetCode() {
  if (!confirm('确定要重置代码吗？当前编辑内容将丢失。')) return
  deleteFile(props.level.filePath)
  code.value = props.level.starterCode || props.level.contextCode || ''
  originalCode.value = code.value
  hintLevel.value = 0
  results.value = []
  verifyDone.value = false
  verifyPassed.value = false
  saveMsg.value = '✓ 已重置'
  saveOk.value = true
  setTimeout(() => { saveMsg.value = '' }, 2000)
}

function saveFile() {
  saving.value = true
  saveMsg.value = ''
  try {
    const success = writeFile(props.level.filePath, code.value)
    if (success) {
      originalCode.value = code.value
      saveMsg.value = '✓ 保存成功！'
      saveOk.value = true
      saving.value = false
      if (saveMsgTimer) clearTimeout(saveMsgTimer)
      saveMsgTimer = setTimeout(() => { saveMsg.value = '' }, 3000)
      return true
    } else {
      saveMsg.value = '✗ 保存失败'
      saveOk.value = false
      saving.value = false
      if (saveMsgTimer) clearTimeout(saveMsgTimer)
      saveMsgTimer = setTimeout(() => { saveMsg.value = '' }, 3000)
      return false
    }
  } catch (e) {
    saveMsg.value = '✗ 保存失败'
    saveOk.value = false
    saving.value = false
    if (saveMsgTimer) clearTimeout(saveMsgTimer)
    saveMsgTimer = setTimeout(() => { saveMsg.value = '' }, 3000)
    return false
  }
}

function verifyFile() {
  if (!saveFile()) return
  verifying.value = true
  results.value = []
  verifyDone.value = false
  verifyPassed.value = false
  try {
    const files = {}
    files[props.level.filePath] = code.value
    const course = courses.find(c => c.id === props.courseId)
    const courseVerifyFn = course?.verify || null
    const { passed, results: res } = verify(props.level.id, files, courseVerifyFn)
    results.value = res
    verifyPassed.value = passed
    verifyDone.value = true
  } catch (e) {
    results.value = [{ name: '验证执行出错', passed: false, detail: e.message, effect: '', pattern: '' }]
    verifyDone.value = true
    verifyPassed.value = false
  }
  verifying.value = false
}

function revealResult(r) {
  if (r.pattern && editorRef.value?.revealText) {
    editorRef.value.revealText(r.pattern)
  }
}

function handleComplete() {
  if (pendingComplete.value) {
    pendingComplete.value = false
    store.completeLevel(props.courseId, props.level.id)
    emit('complete')
    return
  }
  if (!verifyDone.value) {
    verifyFile()
  }
  if (verifyPassed.value) {
    store.completeLevel(props.courseId, props.level.id)
    emit('complete')
  } else {
    pendingComplete.value = true
  }
}

function handleClose() {
  if (dirty.value) {
    const saved = saveFile()
    if (!saved && !confirm('保存失败，确定要关闭吗？未保存的修改将丢失。')) {
      return
    }
  }
  emit('close')
}
</script>

<style scoped>
.modal-wide {
  max-width: 1300px;
}
.modal-body {
  display: flex;
  gap: 24px;
  max-height: 80vh;
  overflow: hidden;
}
.modal-left {
  flex: 0 0 450px;
  overflow-y: auto;
  padding-right: 8px;
  scrollbar-gutter: stable;
  min-width: 300px;
}
.modal-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.editor-header .modal-file {
  font-size: 12px;
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dirty-dot { color: #f59e0b; font-size: 14px; vertical-align: middle; }
.editor-actions {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
.btn-action {
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--card);
  color: var(--text);
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-action:hover { border-color: var(--primary); color: var(--primary); }
.btn-action:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-action.primary { background: var(--primary); color: white; border-color: var(--primary); }
.btn-action.primary:hover { background: var(--primary-hover); }
.btn-action.primary:disabled { background: #a5b4fc; border-color: #a5b4fc; }

.editor-error {
  padding: 40px;
  text-align: center;
  color: var(--danger);
  background: var(--danger-light);
  border-radius: 8px;
  font-size: 14px;
}
.editor-loading {
  padding: 40px;
  text-align: center;
  color: var(--text-secondary);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
}

.save-toast {
  margin-top: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
}
.save-toast.success { background: var(--success-light); color: #065f46; }
.save-toast.error { background: var(--danger-light); color: #991b1b; }

.result-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.result-item {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4px 8px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
}
.result-item.pass { background: var(--success-light); }
.result-item.fail { background: var(--danger-light); }
.result-icon { font-weight: 700; flex-shrink: 0; }
.result-item.pass .result-icon { color: var(--success); }
.result-item.fail .result-icon { color: var(--danger); }
.result-name { font-weight: 500; flex-shrink: 0; }
.result-name.clickable { cursor: pointer; text-decoration: underline dotted transparent; transition: color .15s, text-decoration-color .15s; }
.result-name.clickable:hover { color: var(--primary); text-decoration-color: var(--primary); }
.result-nav { cursor: pointer; font-size: 12px; color: var(--primary); flex-shrink: 0; opacity: 0.7; transition: opacity .15s; }
.result-nav:hover { opacity: 1; text-decoration: underline; }
.result-detail { color: var(--text-secondary); }
.result-effect {
  width: 100%;
  padding: 4px 4px 0 20px;
  font-size: 12px;
  color: #475569;
  border-top: 1px dashed #cbd5e1;
}
.result-item.pass .result-effect { color: #065f46; border-top-color: #a7f3d0; }
.result-item.fail .result-effect { color: #991b1b; border-top-color: #fecaca; }
.result-summary {
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
.result-summary.pass { background: var(--success-light); color: #065f46; }
.result-summary.fail { background: var(--danger-light); color: #991b1b; }

.modal-footer {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer-hint {
  font-size: 12px;
  color: var(--danger);
}

.section-collapse {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  padding: 4px 0;
}
.section-collapse:hover { opacity: 0.8; }
.collapse-arrow {
  font-size: 10px;
  color: var(--text-secondary);
  transition: transform 0.2s;
}
.collapse-arrow.open { transform: rotate(180deg); }

.concept-detail {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', sans-serif;
  color: var(--text);
  margin: 0;
}
.concept-link {
  position: relative;
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline dotted;
  text-underline-offset: 2px;
  transition: background 0.15s;
  padding: 0 2px;
  border-radius: 3px;
}
.concept-link:hover {
  background: #e0e7ff;
}
.concept-link.link-found {
  color: #059669;
}
.concept-link.link-found:hover {
  background: #d1fae5;
}
.concept-link.link-missing {
  color: #94a3b8;
  cursor: default;
  text-decoration: none;
}
.concept-link.link-missing:hover {
  background: transparent;
}

.floating-tip {
  position: fixed;
  transform: translateX(-50%);
  background: #1e293b;
  color: #e2e8f0;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.5;
  max-width: 320px;
  z-index: 9999;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  font-weight: 400;
}

.context-code pre {
  background: #1e293b;
  color: #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 12px;
  line-height: 1.6;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 320px;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
  margin: 0;
  white-space: pre;
}

.doc-links-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.doc-link-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 6px;
  text-decoration: none;
  color: var(--text);
  transition: background 0.15s, border-color 0.15s;
}
.doc-link-item:hover {
  background: var(--hover);
  border-color: var(--accent);
}
.doc-link-icon {
  font-size: 14px;
  flex-shrink: 0;
}
.doc-link-title {
  flex: 1;
  font-size: 13px;
}
.doc-link-arrow {
  font-size: 12px;
  color: var(--muted);
  flex-shrink: 0;
}
.doc-link-item:hover .doc-link-arrow {
  color: var(--accent);
}
.prereq-content {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--text);
  overflow: hidden;
}
.prereq-preamble {
  padding: 10px 16px 4px;
}
.prereq-block {
  border-top: 1px solid var(--border);
}
.prereq-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  padding: 8px 16px;
  transition: background 0.12s;
}
.prereq-block-header:hover { background: var(--primary-light); }
.prereq-block-title {
  font-size: 13px;
  font-weight: 600;
  flex: 1;
  min-width: 0;
}
.prereq-block-title h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: inherit;
}
.prereq-arrow {
  font-size: 10px;
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: transform 0.2s;
  margin-left: 8px;
}
.prereq-arrow.open { transform: rotate(180deg); }

.prereq-type-default .prereq-block-title { color: var(--text); }
.prereq-type-lang .prereq-block-title { color: var(--primary); }
.prereq-type-concept .prereq-block-title { color: var(--warning); }
.prereq-type-error .prereq-block-title { color: var(--danger); }

.prereq-type-lang .prereq-block-header { border-left: 3px solid var(--primary); }
.prereq-type-concept .prereq-block-header { border-left: 3px solid var(--warning); }
.prereq-type-error .prereq-block-header { border-left: 3px solid var(--danger); }
.prereq-type-default .prereq-block-header { border-left: 3px solid var(--border); }

.prereq-block-body {
  padding: 0 16px 10px;
}
.prereq-block-body h4 { display: none; }
.prereq-block-body p { margin: 6px 0; }
.prereq-block-body pre {
  background: #1e293b;
  color: #e2e8f0;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 12px;
  line-height: 1.5;
  overflow-x: auto;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  margin: 6px 0;
}
.prereq-block-body code {
  background: var(--primary-light);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 12px;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  color: var(--primary);
}
.prereq-block-body pre code {
  background: none;
  padding: 0;
  color: inherit;
  font-size: inherit;
}
.prereq-block-body ul, .prereq-block-body ol { margin: 4px 0; padding-left: 20px; }
.prereq-block-body li { margin: 3px 0; }

.microstep-section {
  margin-bottom: 8px;
}
.btn-microstep {
  padding: 6px 14px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  background: var(--primary-light);
  color: var(--primary);
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
  width: 100%;
  font-weight: 500;
}
.btn-microstep:hover {
  background: var(--primary);
  color: white;
}
.microstep-content {
  margin-top: 8px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px;
}
.microstep-dots {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
}
.microstep-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid var(--border);
  color: var(--text-secondary);
  background: var(--card);
  transition: all 0.2s;
}
.microstep-dot.done {
  background: var(--success-light);
  border-color: var(--success);
  color: var(--success);
}
.microstep-dot.current {
  background: var(--primary-light);
  border-color: var(--primary);
  color: var(--primary);
}
.microstep-dot.pending {
  opacity: 0.4;
}
.microstep-current {
  font-size: 13px;
  line-height: 1.6;
}
.microstep-current-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.microstep-step-label {
  font-size: 11px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.microstep-all-done {
  font-size: 13px;
  font-weight: 600;
  color: var(--success);
}
.microstep-hint {
  margin: 4px 0 0;
  color: var(--text-secondary);
  font-size: 12px;
}
.microstep-docs {
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.microstep-doc-link {
  font-size: 12px;
  color: var(--primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 0;
}
.microstep-doc-link:hover {
  text-decoration: underline;
}
.microstep-doc-link .doc-link-arrow {
  font-size: 10px;
}

.tag-project {
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.project-files-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.project-file-item {
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}
.project-file-item.current {
  border-color: var(--primary);
  background: var(--primary-light);
}
.project-file-path {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-size: 12px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  cursor: pointer;
  user-select: none;
}
.project-file-path:hover {
  background: rgba(0,0,0,0.02);
}
.project-file-tag {
  margin-left: auto;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 4px;
  background: var(--primary);
  color: white;
  font-weight: 600;
}
.project-file-preview pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 10px 14px;
  font-size: 11px;
  line-height: 1.5;
  overflow-x: auto;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
}
.project-file-preview code {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
}

.preview-container {
  margin-top: 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
.preview-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background: #f1f5f9;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}
[data-theme="dark"] .preview-toolbar {
  background: #1e293b;
  color: #94a3b8;
}
.preview-refresh {
  background: none;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 11px;
}
.preview-iframe {
  width: 100%;
  height: 350px;
  border: none;
  background: white;
}
.preview-na {
  padding: 32px;
  text-align: center;
  color: #94a3b8;
  font-size: 14px;
}
.btn-action.run {
  background: #10b981;
  color: white;
  border-color: #059669;
}
.btn-action.run:hover {
  background: #059669;
}

@media (max-width: 1280px) {
  .modal-wide { max-width: 1100px; }
  .modal-left { flex: 0 0 35%; }
}

@media (max-width: 768px) {
  .modal-body {
    flex-direction: column;
    max-height: none;
  }
  .modal-left { flex: none; max-height: 200px; }
}
</style>
