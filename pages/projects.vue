<template>
  <div class="home">
    <div class="main-header">
      Projects.
    </div>
    <div>
      Here's all the projects I've created over the years!
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

<style lang="scss">
html {
  min-height: 2400px !important;
}
</style>

<style scoped lang="scss">
.home {
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

.social-grid {
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>
