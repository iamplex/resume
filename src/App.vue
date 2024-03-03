<script setup lang="ts">
import Profile from '~/templates/profile.vue'
import Works from '~/templates/works.vue'
import Projects from '~/templates/projects.vue'
import Stacks from '~/templates/stacks.vue'
import Educations from '~/templates/educations.vue'

import meta from '~/meta'

const { profile, works, projects, educations, stacks } = meta
</script>

<template>
  <main
    p="x-10 y-10"
    font="sans size-3.5"
    flex flex-col items-center color-dark-1
  >
    <div>
      <Profile :profile="profile" />
      <Works :works="works" />
      <Projects :projects="projects" />
      <Educations :educations="educations" />
      <Stacks :stacks="stacks" />
    </div>
  </main>
</template>
