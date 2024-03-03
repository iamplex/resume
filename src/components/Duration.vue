<script setup lang="ts">
interface Props {
  start: string
  end?: string
}

const { start, end } = defineProps<Props>()
</script>

<template>
  <div
    min-w-32
    ws-nowrap
    text-right
  >
    <span v-if="!end">{{ start }}</span>
    <span v-else flex gap-1>
      <span>{{ start }}</span>
      <span> — </span>
      <span>{{ end }}</span>
    </span>
  </div>
</template>
