import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const STORAGE_KEY = 'learn-platform-progress'

export const useProgressStore = defineStore('progress', () => {
  const completed = ref({})
  const currentCourse = ref(null)
  const microSteps = ref({})
  const projectProgress = ref({})

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed && typeof parsed === 'object') {
          completed.value = parsed.completed || {}
          currentCourse.value = parsed.currentCourse || null
          microSteps.value = parsed.microSteps || {}
          projectProgress.value = parsed.projectProgress || {}
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
        currentCourse: currentCourse.value,
        microSteps: microSteps.value,
        projectProgress: projectProgress.value
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
    const level = phaseLevels[idx]
    if (!checkDependsOn(courseId, level?.dependsOn)) return false
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

  function getPhaseReadiness(courseId, phaseIndex, phases) {
    if (phaseIndex === 0) return { level: 'ready', label: '当前阶段', detail: '' }
    const prevPhase = phases[phaseIndex - 1]
    if (!prevPhase) return { level: 'ready', label: '可进入', detail: '' }
    const courseCompleted = getCourseCompleted(courseId)
    const prevCompleted = prevPhase.levels.filter(l => courseCompleted.includes(l.id)).length
    const total = prevPhase.levels.length
    const ratio = prevCompleted / total
    const need = Math.ceil(total * 0.6)

    if (ratio >= 0.6) return { level: 'ready', label: '已满足条件', detail: '' }
    if (prevCompleted > 0) return { level: 'recommended', label: `建议完成 ${need}/${total} 关`, detail: `当前通关 ${prevCompleted}/${total} 关，掌握基础概念后再进入体验更佳` }
    return { level: 'early', label: '提前预览', detail: `推荐先完成上一阶段 ${need}/${total} 关后正式进入本阶段` }
  }

  function getLevelReadiness(courseId, levelId, phaseLevels) {
    const courseCompleted = getCourseCompleted(courseId)
    const idx = phaseLevels.findIndex(l => l.id === levelId)
    if (idx === -1) return { level: 'ready', unlocked: true, detail: '' }
    const level = phaseLevels[idx]
    if (!checkDependsOn(courseId, level?.dependsOn)) {
      const missing = (level?.dependsOn || []).filter(id => !courseCompleted.includes(id))
      return { level: 'early', unlocked: false, detail: `需先完成：${missing.join('、')}` }
    }
    if (idx === 0) return { level: 'ready', unlocked: true, detail: '' }
    if (courseCompleted.includes(phaseLevels[idx - 1].id)) return { level: 'ready', unlocked: true, detail: '' }
    const anyDone = phaseLevels.slice(0, idx).some(l => courseCompleted.includes(l.id))
    if (anyDone) return { level: 'recommended', unlocked: false, detail: '建议先完成前置关卡' }
    return { level: 'early', unlocked: false, detail: '建议按顺序学习' }
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

  function checkDependsOn(courseId, dependsOnList) {
    if (!dependsOnList || dependsOnList.length === 0) return true
    const courseCompleted = getCourseCompleted(courseId)
    return dependsOnList.every(id => courseCompleted.includes(id))
  }

  function completeMicroStep(courseId, levelId, stepId) {
    if (!microSteps.value[courseId]) microSteps.value[courseId] = {}
    if (!microSteps.value[courseId][levelId]) microSteps.value[courseId][levelId] = {}
    microSteps.value[courseId][levelId][stepId] = true
    save()
  }

  function getMicroStepProgress(courseId, levelId) {
    return microSteps.value[courseId]?.[levelId] || {}
  }

  function resetLevelProgress(courseId, levelId) {
    if (microSteps.value[courseId]) {
      delete microSteps.value[courseId][levelId]
      save()
    }
  }

  function mergeProjectFiles(courseId, files) {
    if (!projectProgress.value[courseId]) {
      projectProgress.value[courseId] = { files: {} }
    }
    Object.assign(projectProgress.value[courseId].files, files)
    save()
  }

  function getProjectFiles(courseId) {
    return projectProgress.value[courseId]?.files || {}
  }

  function resetProject(courseId) {
    delete projectProgress.value[courseId]
    save()
  }

  function resetAll() {
    completed.value = {}
    microSteps.value = {}
    projectProgress.value = {}
    save()
  }

  function exportProgress() {
    return JSON.stringify({ completed: completed.value, currentCourse: currentCourse.value, microSteps: microSteps.value, projectProgress: projectProgress.value }, null, 2)
  }

  function importProgress(json) {
    try {
      const data = JSON.parse(json)
      if (data && typeof data === 'object' && data.completed && typeof data.completed === 'object') {
        const valid = Object.values(data.completed).every(v => Array.isArray(v))
        if (!valid) return false
        completed.value = data.completed
        currentCourse.value = data.currentCourse || null
        microSteps.value = data.microSteps || {}
        projectProgress.value = data.projectProgress || {}
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
    microSteps,
    projectProgress,
    save,
    getCourseCompleted,
    isLevelUnlocked,
    isPhaseUnlocked,
    getPhaseReadiness,
    getLevelReadiness,
    checkDependsOn,
    completeLevel,
    completeMicroStep,
    getMicroStepProgress,
    mergeProjectFiles,
    getProjectFiles,
    resetProject,
    resetCourse,
    resetLevelProgress,
    resetAll,
    exportProgress,
    importProgress,
    getCourseStats,
    getAllCoursesStats
  }
})
