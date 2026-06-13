<template>
  <div class="phase">
    <div class="phase-header" @click="open = !open">
      <div class="phase-header-left">
        <div class="phase-icon" :class="{ unlocked, locked: !unlocked, completed: allDone }">
          {{ allDone ? '✓' : unlocked ? phase.number : '🔒' }}
        </div>
        <div class="phase-info">
          <h2>{{ phase.name }}</h2>
          <p>{{ phase.description }}</p>
        </div>
      </div>
      <div class="phase-header-right">
        <span class="phase-progress">{{ doneCount }}/{{ phase.levels.length }} 关</span>
        <span class="phase-arrow" :class="{ open }">▼</span>
      </div>
    </div>
    <template v-if="open">
      <div v-if="!unlocked" class="phase-locked-overlay">
        通关上一阶段至少 60%（{{ prevDoneCount }}/{{ prevTotal }}）后解锁此阶段
      </div>
      <div v-else class="level-grid">
        <LevelCard
          v-for="level in phase.levels"
          :key="level.id"
          :level="level"
          :unlocked="store.isLevelUnlocked(courseId, level.id, phase.levels)"
          :completed="store.getCourseCompleted(courseId).includes(level.id)"
          @select="openModal"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import LevelCard from './LevelCard.vue'
import { useProgressStore } from '../stores/progress'

const props = defineProps({
  phase: Object,
  courseId: String,
  unlocked: Boolean
})

const store = useProgressStore()
const open = ref(props.unlocked)
const emit = defineEmits(['selectLevel'])

watch(() => props.unlocked, (val) => { if (val) open.value = true })

const doneCount = computed(() =>
  props.phase.levels.filter(l => store.getCourseCompleted(props.courseId).includes(l.id)).length
)

const allDone = computed(() => doneCount.value === props.phase.levels.length)

const prevDoneCount = computed(() => {
  const courseCompleted = store.getCourseCompleted(props.courseId)
  const prevPhaseIndex = props.phase.number - 2
  if (prevPhaseIndex < 0) return 0
  const prevPhase = props.phase._phases?.[prevPhaseIndex]
  if (!prevPhase) return 0
  return prevPhase.levels.filter(l => courseCompleted.includes(l.id)).length
})

const prevTotal = computed(() => {
  const prevPhaseIndex = props.phase.number - 2
  if (prevPhaseIndex < 0) return 0
  const prevPhase = props.phase._phases?.[prevPhaseIndex]
  if (!prevPhase) return 0
  return prevPhase.levels.length
})

function openModal(level) {
  emit('selectLevel', level)
}
</script>
