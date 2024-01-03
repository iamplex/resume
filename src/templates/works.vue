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
    <div v-for="{ company, position, location, start, end, highlights } in works" :key="company" m-y-3>
      <div flex justify-between>
        <div>{{ company }}（{{ position }}）</div>
        <div>
          <span>{{ location }}</span>
          <span> · </span>
          <Duration :start="start" :end="end" />
        </div>
      </div>
      <Highlights :data="highlights" />
    </div>
  </div>
</template>
