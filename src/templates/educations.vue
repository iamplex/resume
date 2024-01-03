<script setup lang="ts">
interface Education {
  institution: string
  area: string
  level: string
  start: string
  end: string
}

interface Props {
  educations: Education[]
}

const { educations } = defineProps<Props>()
</script>

<template>
  <div>
    <Header title="教育背景" />
    <div v-for="{ institution, area, level, start, end } in educations" :key="institution" m-y-1>
      <div flex justify-between>
        <div>{{ institution }} · {{ area }}（{{ level }}）</div>
        <Duration :start="start" :end="end" />
      </div>
    </div>
  </div>
</template>
