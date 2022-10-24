<script setup lang="ts">
interface Props {
  stacks: string[]
}

const { stacks } = defineProps<Props>()
</script>

<template>
  <div>
    <Header title="专业技能" />
    <Highlights :data="[stacks.join('、')]" />
  </div>
</template>
