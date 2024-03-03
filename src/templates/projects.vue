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
    <div
      v-for="{ name, summary, start, end, highlights } in projects"
      :key="name"
      my-4 flex
    >
      <Duration :start="start" :end="end" mr-8 />
      <div>
        <div v-html="name" />
        <div text-size-xs color-gray-4>
          {{ summary }}
        </div>
        <Highlights :data="highlights" />
      </div>
    </div>
  </div>
</template>
