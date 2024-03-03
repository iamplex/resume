<script setup lang="ts">
interface Work {
  company: string
  position: string
  location: string
  start: string
  end: string
  highlights: string[]
}

interface Props {
  works: Work[]
}

const { works } = defineProps<Props>()
</script>

<template>
  <div>
    <Header title="工作经历" />
    <div
      v-for="{ company, position, location, start, end, highlights } in works"
      :key="company"
      my-4 flex
    >
      <Duration :start="start" :end="end" mr-8 />
      <div>
        <div flex flex-wrap gap-2>
          <div>{{ company }}</div>
          <div>({{ position }})</div>
        </div>
        <div text-size-xs color-gray-4>
          {{ location }}
        </div>
        <Highlights :data="highlights" />
      </div>
    </div>
  </div>
</template>
