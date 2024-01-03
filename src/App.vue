<script setup lang="ts">
import Profile from '~/templates/profile.vue'
import Works from '~/templates/works.vue'
import Projects from '~/templates/projects.vue'
import Educations from '~/templates/educations.vue'
import Stacks from '~/templates/stacks.vue'

import meta from '~/meta'

const { profile, works, projects, educations, stacks } = meta
</script>

<template>
  <main color-dark-1 p="x-10 y-10">
    <Profile :profile="profile" />
    <Works :works="works" />
    <Projects :projects="projects" />
    <Educations :educations="educations" />
    <Stacks :stacks="stacks" />
  </main>
</template>
