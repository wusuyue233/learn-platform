<template>
  <div class="course-selector">
    <div class="selector-header">
      <h1>Learn Platform</h1>
      <p class="subtitle">选择一门课程开始学习</p>
      <div class="global-stats" v-if="allStats.total > 0">
        <div class="progress-bar-track">
          <div class="progress-bar-fill" :style="{ width: allStats.progress + '%' }"></div>
        </div>
        <span class="progress-text">{{ allStats.completed }} / {{ allStats.total }} 关已通关</span>
      </div>
      <div class="header-actions">
        <button class="btn-sm" @click="importProgress">📥 导入进度</button>
        <button class="btn-sm" @click="exportProgress">📤 导出进度</button>
        <button class="btn-sm danger" @click="resetAll">🗑 重置全部</button>
      </div>
    </div>

    <div class="selector-body">
      <div v-for="group in courseGroups" :key="group.key" class="category-group">
        <div class="category-header">
          <span class="category-icon">{{ group.icon }}</span>
          <h2>{{ group.label }}</h2>
        </div>
        <div class="course-grid">
          <div
            v-for="course in group.courses"
            :key="course.id"
            class="course-card"
            :class="{ completed: getStats(course.id).progress >= 100 }"
            @click="enterCourse(course.id)"
          >
            <div class="course-icon">{{ course.icon }}</div>
            <div class="course-info">
              <h3>{{ course.name }}</h3>
              <p>{{ course.description }}</p>
              <div class="course-meta">
                <span class="course-tag" v-for="tag in course.tags" :key="tag">{{ tag }}</span>
                <span class="diff-tag" :class="course.difficulty">{{ diffLabel(course.difficulty) }}</span>
              </div>
            </div>
            <div class="course-footer">
              <div class="course-progress" v-if="getStats(course.id).total > 0">
                <div class="mini-progress-track">
                  <div class="mini-progress-fill" :style="{ width: getStats(course.id).progress + '%' }"></div>
                </div>
                <span>{{ getStats(course.id).completed }}/{{ getStats(course.id).total }}</span>
              </div>
              <div v-if="getStats(course.id).progress >= 100" class="completed-badge">✓ 已通关</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress'
import { courses } from '../../courses'

const router = useRouter()
const store = useProgressStore()

const allStats = computed(() => store.getAllCoursesStats(courses))

const categoryMap = {
  frontend: { key: 'frontend', icon: '🖥️', label: '前端框架' },
  backend: { key: 'backend', icon: '⚙️', label: '后端开发' },
  language: { key: 'language', icon: '📝', label: '编程语言' },
  infra: { key: 'infra', icon: '🔧', label: '基础设施' }
}

const courseGroups = computed(() => {
  const groups = {}
  for (const cat of Object.values(categoryMap)) {
    groups[cat.key] = { ...cat, courses: [] }
  }
  for (const c of courses) {
    const key = c.category || 'frontend'
    if (groups[key]) groups[key].courses.push(c)
  }
  return Object.values(groups).filter(g => g.courses.length > 0)
})

function getStats(courseId) {
  const course = courses.find(c => c.id === courseId)
  return store.getCourseStats(courseId, course?.phases || [])
}

function diffLabel(d) {
  const map = { beginner: '入门', intermediate: '中级', advanced: '高级' }
  return map[d] || d
}

function enterCourse(courseId) {
  store.currentCourse = courseId
  store.save()
  router.push({ name: 'course', params: { courseId } })
}

function exportProgress() {
  const blob = new Blob([store.exportProgress()], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'learn-platform-progress.json'
  a.click()
  URL.revokeObjectURL(url)
}

function importProgress() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.json'
  input.onchange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      if (store.importProgress(reader.result)) alert('导入成功！')
      else alert('导入失败，请检查文件格式')
    }
    reader.readAsText(file)
  }
  input.click()
}

function resetAll() {
  if (confirm('确定要重置所有课程的通关进度吗？此操作不可撤销。')) store.resetAll()
}
</script>

<style scoped>
.course-selector {
  min-height: 100vh;
  background: var(--bg);
}
.selector-header {
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
  padding: 40px;
  text-align: center;
}
.selector-header h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}
.subtitle {
  font-size: 16px;
  color: #94a3b8;
  margin-bottom: 24px;
}
.global-stats {
  max-width: 400px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.progress-bar-track {
  flex: 1;
  height: 8px;
  background: rgba(255,255,255,0.15);
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), #818cf8);
  border-radius: 4px;
  transition: width 0.5s ease;
}
.progress-text {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: #c7d2fe;
}
.header-actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.btn-sm {
  padding: 6px 14px;
  font-size: 12px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 6px;
  background: transparent;
  color: #c7d2fe;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-sm:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.4); }
.btn-sm.danger:hover { background: rgba(239,68,68,0.2); border-color: #ef4444; color: #fca5a5; }

.selector-body {
  max-width: 1060px;
  margin: 0 auto;
  padding: 32px 20px;
}
.category-group {
  margin-bottom: 36px;
}
.category-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--border);
}
.category-icon { font-size: 20px; }
.category-header h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.course-card {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.course-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}
.course-card.completed {
  border-color: var(--success);
  opacity: 0.85;
}
.course-card.completed:hover {
  opacity: 1;
}
.course-icon { font-size: 36px; line-height: 1; }
.course-info h3 { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.course-info p {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.course-meta {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.course-tag {
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 10px;
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 500;
}
.diff-tag {
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
}
.diff-tag.beginner { background: #dcfce7; color: #166534; }
.diff-tag.intermediate { background: #fef3c7; color: #92400e; }
.diff-tag.advanced { background: #fecaca; color: #991b1b; }
.course-footer {
  margin-top: auto;
}
.course-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text-secondary);
}
.mini-progress-track {
  flex: 1;
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}
.mini-progress-fill {
  height: 100%;
  background: var(--success);
  border-radius: 2px;
  transition: width 0.3s;
}
.completed-badge {
  font-size: 11px;
  color: var(--success);
  font-weight: 600;
}

@media (max-width: 800px) {
  .course-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .course-grid { grid-template-columns: 1fr; }
  .selector-header { padding: 24px 16px; }
  .selector-header h1 { font-size: 24px; }
}
</style>
