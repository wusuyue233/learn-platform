<template>
  <div class="course-view">
    <div class="course-header">
      <button class="back-btn" @click="goBack">← 返回课程列表</button>
      <h1>{{ course.icon }} {{ course.name }}</h1>
      <p class="subtitle">{{ course.description }}</p>
      <div class="course-stats">
        <div class="progress-bar-track">
          <div class="progress-bar-fill" :style="{ width: stats.progress + '%' }"></div>
        </div>
        <span class="progress-text">{{ stats.completed }} / {{ stats.total }} 关已通关</span>
      </div>
      <div class="header-actions">
        <button class="btn-sm" @click="importProgress">📥 导入</button>
        <button class="btn-sm" @click="exportProgress">📤 导出</button>
        <button class="btn-sm danger" @click="resetCourse">🗑 重置</button>
      </div>
    </div>

    <PhaseSection
      v-for="(phase, index) in course.phases"
      :key="phase.id"
      :phase="{ ...phase, number: index + 1, _phases: course.phases }"
      :courseId="courseId"
      :readiness="store.getPhaseReadiness(courseId, index, course.phases)"
      @selectLevel="openLevel"
    />

    <LevelModal
      v-if="selectedLevel"
      :level="selectedLevel"
      :courseId="courseId"
      :completed="store.getCourseCompleted(courseId).includes(selectedLevel.id)"
      @close="selectedLevel = null"
      @complete="selectedLevel = null"
    />

    <div v-if="!course" class="empty-state">
      <h2>课程未找到</h2>
      <p>请检查课程 ID 是否正确</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress'
import { courses } from '../../courses'
import PhaseSection from './PhaseSection.vue'
import LevelModal from './LevelModal.vue'

const props = defineProps({
  courseId: String
})

const router = useRouter()
const store = useProgressStore()
const selectedLevel = ref(null)

const course = computed(() => courses.find(c => c.id === props.courseId))

const stats = computed(() => {
  if (!course.value) return { total: 0, completed: 0, progress: 0 }
  return store.getCourseStats(props.courseId, course.value.phases || [])
})

function goBack() {
  router.push({ name: 'home' })
}

function openLevel(level) {
  selectedLevel.value = level
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

function resetCourse() {
  if (confirm(`确定要重置「${course.value?.name}」的所有通关进度吗？`)) {
    store.resetCourse(props.courseId)
  }
}
</script>

<style scoped>
.course-view {
  min-height: 100vh;
  background: var(--bg);
}
.course-header {
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
  padding: 24px 40px 28px;
}
.back-btn {
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  margin-bottom: 12px;
  transition: color 0.2s;
}
.back-btn:hover { color: white; }
.course-header h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}
.subtitle {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 16px;
}
.course-stats {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 500px;
  margin-bottom: 12px;
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
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}
</style>
