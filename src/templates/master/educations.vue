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
    <Header title="教育背景 & 奖项" />
    <div v-for="{ institution, area, level, start, end } in educations" :key="institution" m-y-1>
      <div flex justify-between>
        <div v-html="`${institution} ${area && `· ${area}`} （${level}）`" />
        <div>
          <span>{{ start }}</span>
          <span> - </span>
          <span>{{ end }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
