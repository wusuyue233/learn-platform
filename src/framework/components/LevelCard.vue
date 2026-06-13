<template>
  <div
    class="level-card"
    :class="{ available: unlocked && !completed, completed, locked: !unlocked }"
    @click="unlocked && $emit('select', level)"
  >
    <div v-if="completed" class="level-status-icon complete">✓</div>
    <div v-if="!unlocked" class="level-status-icon lock">🔒</div>
    <div class="level-number">{{ level.number }}</div>
    <div class="level-title">{{ level.title }}</div>
    <div class="level-meta">
      <span class="difficulty-label">{{ level.concept }}</span>
      <span class="difficulty-badge" :class="level.difficulty">{{ diffLabel }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: Object,
  unlocked: Boolean,
  completed: Boolean
})

defineEmits(['select'])

const diffLabel = computed(() => {
  const map = { easy: '简单', medium: '中等', hard: '困难' }
  return map[props.level.difficulty] || props.level.difficulty
})
</script>

<style scoped>
.difficulty-badge {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 8px;
  font-weight: 500;
}
.difficulty-badge.easy { background: #dcfce7; color: #166534; }
.difficulty-badge.medium { background: #fef3c7; color: #92400e; }
.difficulty-badge.hard { background: #fecaca; color: #991b1b; }
</style>
