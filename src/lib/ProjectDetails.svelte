<script lang="typescript">
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { selectedProject } from "../state/projects";

  function unSelect() {
    selectedProject.setProject(null);
  }
</script>

<div class="details">
  <button on:click={unSelect}>
    {"⇐"}
  </button>
  <div class="focused-title-section">
    <h3>{$selectedProject?.title}</h3>
    <FontAwesomeIcon icon={$selectedProject?.icon} />
  </div>
  <p>{$selectedProject?.description}</p>
  <a href={$selectedProject?.link} rel="noreferrer" target="_blank">(Link)</a>
  <div class="project-image-container">
    <img src={$selectedProject?.image} alt="Picture of the project" />
  </div>
</div>
