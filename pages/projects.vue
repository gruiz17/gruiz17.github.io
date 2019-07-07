<template>
  <div class="projects">
    <div class="main-header">
      Projects.
    </div>
    <div>
      Here's all the projects I've created over the years! (Do you want to go
      back to the (Do you want to go back to
      <nuxt-link to="/">the general overview of Gabriel Ruiz?</nuxt-link>)
    </div>
    <Project
      v-for="project in projects"
      :key="project.name"
      :name="project.name"
      :date="project.date"
      :url="project.url ? project.url : ''"
      :source-url="project.sourceUrl"
      :description="project.description"
    />
  </div>
</template>

<script>
import { projects } from '~/plugins/projects'
const Project = () => import('~/components/Project')

export default {
  name: 'Projects',
  components: {
    Project
  },
  data: () => {
    return {
      projects
    }
  }
}
</script>

<style scoped lang="scss">
.projects {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    width: 400px;
    margin-bottom: 16px;
  }
}

.main-header {
  margin-bottom: 16px;
}
</style>
