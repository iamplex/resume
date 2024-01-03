<script setup lang="ts">
interface Project {
  name: string
  summary: string
  start: string
  end: string
  highlights: string[]
}

interface Props {
  projects: Project[]
}

const { projects } = defineProps<Props>()
</script>

<template>
  <div>
    <Header title="项目经历" />
    <div v-for="{ name, summary, start, end, highlights } in projects" :key="name" m-y-2>
      <div flex justify-between>
        <div v-html="name" />
        <Duration :start="start" :end="end" />
      </div>
      <div text-size-xs color-gray-4>
        {{ summary }}
      </div>
      <Highlights :data="highlights" />
    </div>
  </div>
</template>
