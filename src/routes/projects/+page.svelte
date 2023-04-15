<script>
  import { Project } from '$lib';
  export let data;
</script>

<div class="projects">
  <div class="main-header">Projects.</div>
  <div>
    Here's all the projects I've created over the years! (Do you want to go back to the
    <a href="/">general overview of Gabriel Ruiz</a>?)
  </div>
  {#each data.projects as project}
    <Project
      class="project"
      key={project.name}
      name={project.name}
      date={project.date}
      url={project.url ? project.url : ''}
      sourceUrl={project.sourceUrl}
      description={project.description}
    />
  {/each}
</div>

<style lang="scss">
  .projects {
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 400px) {
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
  }
  .main-header {
    margin-bottom: 16px;
  }
</style>