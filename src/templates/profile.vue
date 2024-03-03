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
  <div flex items-baseline justify-between>
    <div flex items-baseline gap-2>
      <span text-size-2xl font-bold>
        {{ profile.name }}
      </span>
      <span>
        {{ profile.birthday }}
      </span>
    </div>
    <div flex gap-2>
      <span>{{ profile.tel }}</span>
      <span>|</span>
      <a :href="`mailto:${profile.email}`" target="_blank" color-blue>
        {{ profile.email }}
      </a>
      <span>|</span>
      <a :href="`https://${profile.github}`" target="_blank" color-blue>
        {{ profile.github }}
      </a>
    </div>
  </div>
</template>
