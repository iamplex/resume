<script setup lang="ts">
interface Profile {
  name: string
  birthday: string
  tel: string
  email: string
  github: string
}

interface Props {
  profile: Profile
}

const { profile } = defineProps<Props>()
</script>

<template>
  <div flex justify-between items-baseline>
    <div>
      <span class="text-size-2xl font-bold">
        {{ profile.name }}
      </span>
      <span m-l-2>{{ profile.birthday }}</span>
    </div>
    <div>
      <span>{{ profile.tel }}</span>
      <span> | </span>
      <a :href="`mailto:${profile.email}`" target="_blank" color-blue>{{ profile.email }}</a>
      <span> | </span>
      <a :href="`https://${profile.github}`" target="_blank" color-blue>{{ profile.github }}</a>
    </div>
  </div>
</template>
