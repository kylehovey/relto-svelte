<script lang="ts">
  import type { Project } from "../types";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { selectedProject } from "../state/projects";

  export let project: Project;

  const handleClick = () => {
    selectedProject.setProject(project);
  };
</script>

<li>
  <button on:click={handleClick}>
    <div class="title-section">
      <FontAwesomeIcon icon={project?.icon} />
      <span class="title">{project?.title}</span>
    </div>
    <div>
      <span class="brief">{project?.brief}</span>
    </div>
  </button>
</li>

<style>
</style>
