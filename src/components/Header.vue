<script setup lang="ts">
interface Props {
  title: string
}

const { title } = defineProps<Props>()
</script>

<template>
  <div>
    <div font-bold>
      {{ title }}
    </div>
    <div m-y-1 w-screen h1px bg-light-9 />
  </div>
</template>
