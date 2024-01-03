<script setup lang="ts">
interface Props {
  start: string
  end?: string
}

const { start, end } = defineProps<Props>()
</script>

<template>
  <span v-if="!end">{{ start }}</span>
  <span v-else>
    <span>{{ start }}</span>
    <span> - </span>
    <span>{{ end }}</span>
  </span>
</template>
