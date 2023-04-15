<script>
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';

  export let name;
  export let date;
  export let description;
  export let url = '';
  export let sourceUrl = '';
</script>

<div class="project">
  <div class="project-name">{name}</div>
  <div class="links">
    {#if url}
      <a href={url}>Demo</a>
      <span>&nbsp;&#124;&nbsp;</span>
    {/if}
    <FontAwesomeIcon icon={faGithub} size="lg" />
    <a href={sourceUrl}>Source</a>
  </div>
  <div>{date}</div>
  <div>{description}</div>
</div>

<style>
  .project {
    width: 400px;
    margin-bottom: 16px;
  }

  .project-name {
    font-weight: 600;
    margin-bottom: 6px;
  }
</style>
