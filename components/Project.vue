<template>
  <div class="project">
    <div class="project-name">
      {{ name }}
    </div>
    <div class="links">
      <a v-if="url.length > 0" :href="`${url}`">Demo</a>
      <span v-if="url.length > 0">&nbsp;&#124;&nbsp;</span>
      <font-awesome-icon :icon="['fab', 'github']" size="lg" />&nbsp;
      <a :href="`${sourceUrl}`">Source</a>
    </div>
    <div>
      {{ date }}
    </div>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    name: String,
    date: String,
    description: String,
    url: String,
    sourceUrl: String
  }
}
</script>

<style>
.project-name {
  font-weight: 600;
  margin-bottom: 10px;
}
</style>
