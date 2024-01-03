<script setup lang="ts">
interface Props {
  data: string[]
}

const { data } = defineProps<Props>()
</script>

<template>
  <ul m-t-2 list-disc p-x-4 text-size-sm>
    <li v-for="h in data" :key="h" v-html="h" />
  </ul>
</template>
