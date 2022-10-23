<script setup lang="ts">
import Profile from '~/templates/master/profile.vue'
import Works from '~/templates/master/works.vue'
import Projects from '~/templates/master/projects.vue'
import Educations from '~/templates/master/educations.vue'
import Stacks from '~/templates/master/stacks.vue'

import meta from '~/meta'

const { profile, works, projects, educations, stacks } = meta
</script>

<template>
  <div color-dark-1>
    <Profile :profile="profile" />
    <Works :works="works" />
    <Projects :projects="projects" />
    <Educations :educations="educations" />
    <Stacks :stacks="stacks" />
  </div>
</template>
