<template>
  <div class="phase">
    <div class="phase-header" @click="open = !open">
      <div class="phase-header-left">
        <div class="phase-icon" :class="{ completed: allDone, early: isEarly }">
          {{ allDone ? '✓' : phase.number }}
        </div>
        <div class="phase-info">
          <h2>{{ phase.name }}</h2>
          <p>{{ phase.description }}</p>
        </div>
      </div>
      <div class="phase-header-right">
        <span class="readiness-badge" :class="readiness.level">{{ readiness.label }}</span>
        <span class="phase-progress">{{ doneCount }}/{{ phase.levels.length }} 关</span>
        <span class="phase-arrow" :class="{ open }">▼</span>
      </div>
    </div>
    <template v-if="open">
      <div v-if="readiness.detail" class="phase-readiness-banner" :class="readiness.level">
        {{ readiness.detail }}
        <span v-if="isEarly" class="preview-tag">预览模式</span>
      </div>
      <div class="level-grid">
        <LevelCard
          v-for="level in phase.levels"
          :key="level.id"
          :level="level"
          :unlocked="store.isLevelUnlocked(courseId, level.id, phase.levels)"
          :completed="store.getCourseCompleted(courseId).includes(level.id)"
          :preview="isEarly"
          @select="openModal"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LevelCard from './LevelCard.vue'
import { useProgressStore } from '../stores/progress'

const props = defineProps({
  phase: Object,
  courseId: String,
  readiness: Object
})

const store = useProgressStore()
const open = ref(false)
const emit = defineEmits(['selectLevel'])

const isEarly = computed(() => props.readiness?.level === 'early')

const doneCount = computed(() =>
  props.phase.levels.filter(l => store.getCourseCompleted(props.courseId).includes(l.id)).length
)

const allDone = computed(() => doneCount.value === props.phase.levels.length)

function openModal(level) {
  emit('selectLevel', level)
}
</script>
