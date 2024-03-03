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
  <div flex flex-wrap items-baseline justify-between>
    <div flex flex-wrap items-baseline gap-2>
      <span ws-nowrap text-size-2xl font-bold>
        {{ profile.name }}
      </span>
      <span ws-nowrap>
        {{ profile.birthday }}
      </span>
    </div>
    <div flex gap-2>
      <span ws-nowrap>{{ profile.tel }}</span>
      <span>|</span>
      <a :href="`mailto:${profile.email}`" target="_blank" ws-nowrap color-blue>
        {{ profile.email }}
      </a>
      <span>|</span>
      <a :href="`https://${profile.github}`" target="_blank" ws-nowrap color-blue>
        {{ profile.github }}
      </a>
    </div>
  </div>
</template>
