<script setup lang="ts">
interface Props {
  title: string
}

const { title } = defineProps<Props>()
</script>

<template>
  <div m-t-6>
    <div font-bold>
      {{ title }}
    </div>
    <div m-y-2 h1px bg-light-9 />
  </div>
</template>
