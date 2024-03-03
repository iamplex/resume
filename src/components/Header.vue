<script setup lang="ts">
interface Props {
  title: string
}

const { title } = defineProps<Props>()
</script>

<template>
  <div mt-6>
    <div font-bold>
      {{ title }}
    </div>
    <div my-2 h1px bg-light-9 />
  </div>
</template>
