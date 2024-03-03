<script setup lang="ts">
interface Props {
  data: string[]
}

const { data } = defineProps<Props>()
</script>

<template>
  <ul
    list-disc
    px-4
  >
    <li
      v-for="hightlight in data"
      :key="hightlight"
      my-1.75
      v-html="hightlight"
    />
  </ul>
</template>
