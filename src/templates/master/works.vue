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
    <div v-for="{ company, position, location, start, end, highlights } in works" :key="company" m-y-2>
      <div flex justify-between>
        <div>{{ company }}（{{ position }}）</div>
        <div>
          <span>{{ location }}</span>
          <span> · </span>
          <span>{{ start }}</span>
          <span> - </span>
          <span>{{ end }}</span>
        </div>
      </div>
      <Highlights :data="highlights" />
    </div>
  </div>
</template>
