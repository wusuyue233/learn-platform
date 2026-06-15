<template>
  <div
    class="level-card"
    :class="{ available: unlocked && !completed, completed, locked: !unlocked && !isPreview, preview: !unlocked && isPreview, 'is-project': level.type === 'project' }"
    @click="(unlocked || isPreview) && $emit('select', level)"
  >
    <div v-if="completed" class="level-status-icon complete">✓</div>
    <div v-if="!unlocked && !isPreview" class="level-status-icon lock">🔒</div>
    <div v-if="!unlocked && isPreview" class="level-status-icon preview-eye">👁</div>
    <div class="level-number">{{ level.type === 'project' ? '🛒' : level.number }}</div>
    <div class="level-title">{{ level.title }}</div>
    <div class="level-meta">
      <span class="difficulty-label">{{ level.concept }}</span>
      <span class="difficulty-badge" :class="level.difficulty">{{ diffLabel }}</span>
    </div>
    <div v-if="level.type === 'project'" class="project-tag">项目</div>
    <div v-if="!unlocked && isPreview" class="preview-badge">预览</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: Object,
  unlocked: Boolean,
  completed: Boolean,
  readiness: Object
})

defineEmits(['select'])

const isPreview = computed(() => props.readiness?.level === 'early' && !props.unlocked)

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
.preview-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 9px;
  padding: 1px 5px;
  border-radius: 4px;
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  font-weight: 500;
}
.level-card.preview {
  border-color: rgba(99, 102, 241, 0.3);
  cursor: pointer;
  opacity: 0.85;
}
.level-card.preview:hover {
  border-color: rgba(99, 102, 241, 0.6);
  opacity: 1;
}
.preview-eye {
  font-size: 16px;
}
.project-tag {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  padding: 1px 5px;
  border-radius: 4px;
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
  font-weight: 600;
}
.level-card.is-project {
  border-color: rgba(16, 185, 129, 0.3);
}
.level-card.is-project.available {
  border-color: #059669;
  background: #f0fdf4;
}
.level-card.is-project.completed {
  border-color: #059669;
}
.level-card.is-project .level-number {
  font-size: 22px;
}
</style>
