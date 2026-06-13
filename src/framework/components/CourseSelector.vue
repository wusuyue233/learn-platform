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

    <div class="course-grid">
      <div
        v-for="course in courses"
        :key="course.id"
        class="course-card"
        @click="enterCourse(course.id)"
      >
        <div class="course-icon">{{ course.icon }}</div>
        <div class="course-info">
          <h3>{{ course.name }}</h3>
          <p>{{ course.description }}</p>
          <div class="course-meta">
            <span class="course-tag" v-for="tag in course.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="course-progress" v-if="getStats(course.id).total > 0">
            <div class="mini-progress-track">
              <div class="mini-progress-fill" :style="{ width: getStats(course.id).progress + '%' }"></div>
            </div>
            <span>{{ getStats(course.id).completed }}/{{ getStats(course.id).total }}</span>
          </div>
        </div>
        <div class="course-arrow">→</div>
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

function getStats(courseId) {
  const course = courses.find(c => c.id === courseId)
  return store.getCourseStats(courseId, course?.phases || [])
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
      if (store.importProgress(reader.result)) {
        alert('导入成功！')
      } else {
        alert('导入失败，请检查文件格式')
      }
    }
    reader.readAsText(file)
  }
  input.click()
}

function resetAll() {
  if (confirm('确定要重置所有课程的通关进度吗？此操作不可撤销。')) {
    store.resetAll()
  }
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
.btn-sm:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.4);
}
.btn-sm.danger:hover {
  background: rgba(239,68,68,0.2);
  border-color: #ef4444;
  color: #fca5a5;
}
.course-grid {
  max-width: 900px;
  margin: 32px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.course-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s;
}
.course-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
.course-icon {
  font-size: 40px;
  flex-shrink: 0;
}
.course-info {
  flex: 1;
  min-width: 0;
}
.course-info h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}
.course-info p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.course-meta {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.course-tag {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 500;
}
.course-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text-secondary);
}
.mini-progress-track {
  width: 120px;
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
.course-arrow {
  font-size: 20px;
  color: var(--text-secondary);
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .selector-header { padding: 24px 16px; }
  .selector-header h1 { font-size: 24px; }
  .course-card { padding: 16px; gap: 12px; }
  .course-icon { font-size: 32px; }
}
</style>
