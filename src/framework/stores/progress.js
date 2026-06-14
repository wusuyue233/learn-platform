import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const STORAGE_KEY = 'learn-platform-progress'

export const useProgressStore = defineStore('progress', () => {
  const completed = ref({})
  const currentCourse = ref(null)

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed && typeof parsed === 'object') {
          completed.value = parsed.completed || {}
          currentCourse.value = parsed.currentCourse || null
        }
      }
    } catch (e) {
      console.warn('进度数据加载失败:', e.message)
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completed: completed.value,
        currentCourse: currentCourse.value
      }))
    } catch (e) {
      console.warn('进度保存失败:', e.message)
    }
  }

  function getCourseCompleted(courseId) {
    return completed.value[courseId] || []
  }

  function isLevelUnlocked(courseId, levelId, phaseLevels) {
    const courseCompleted = getCourseCompleted(courseId)
    const idx = phaseLevels.findIndex(l => l.id === levelId)
    if (idx === -1) return false
    if (idx === 0) return true
    return courseCompleted.includes(phaseLevels[idx - 1].id)
  }

  function isPhaseUnlocked(courseId, phaseIndex, phases) {
    if (phaseIndex === 0) return true
    const prevPhase = phases[phaseIndex - 1]
    if (!prevPhase) return false
    const courseCompleted = getCourseCompleted(courseId)
    const prevCompleted = prevPhase.levels.filter(l => courseCompleted.includes(l.id)).length
    return (prevCompleted / prevPhase.levels.length) >= 0.6
  }

  function completeLevel(courseId, levelId) {
    if (!completed.value[courseId]) {
      completed.value[courseId] = []
    }
    if (!completed.value[courseId].includes(levelId)) {
      completed.value[courseId].push(levelId)
      save()
    }
  }

  function resetCourse(courseId) {
    completed.value[courseId] = []
    save()
  }

  function resetAll() {
    completed.value = {}
    save()
  }

  function exportProgress() {
    return JSON.stringify({ completed: completed.value, currentCourse: currentCourse.value }, null, 2)
  }

  function importProgress(json) {
    try {
      const data = JSON.parse(json)
      if (data && typeof data === 'object' && data.completed && typeof data.completed === 'object') {
        const valid = Object.values(data.completed).every(v => Array.isArray(v))
        if (!valid) return false
        completed.value = data.completed
        currentCourse.value = data.currentCourse || null
        save()
        return true
      }
      return false
    } catch {
      return false
    }
  }

  function getCourseStats(courseId, phases) {
    const courseCompleted = getCourseCompleted(courseId)
    const total = phases.reduce((sum, p) => sum + p.levels.length, 0)
    return {
      total,
      completed: courseCompleted.length,
      progress: total === 0 ? 0 : Math.round((courseCompleted.length / total) * 100)
    }
  }

  function getAllCoursesStats(courses) {
    let totalLevels = 0
    let totalCompleted = 0
    for (const course of courses) {
      const stats = getCourseStats(course.id, course.phases || [])
      totalLevels += stats.total
      totalCompleted += stats.completed
    }
    return {
      total: totalLevels,
      completed: totalCompleted,
      progress: totalLevels === 0 ? 0 : Math.round((totalCompleted / totalLevels) * 100)
    }
  }

  load()

  return {
    completed,
    currentCourse,
    save,
    getCourseCompleted,
    isLevelUnlocked,
    isPhaseUnlocked,
    completeLevel,
    resetCourse,
    resetAll,
    exportProgress,
    importProgress,
    getCourseStats,
    getAllCoursesStats
  }
})
