<script lang="ts">
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { useLazyImage as lazyImage } from "svelte-lazy-image";

  import { selectedProject } from "../state/projects";
  import { View } from "../types";
  import { currentView } from "../state/views";

  function unSelect() {
    selectedProject.setProject(null);
    currentView.setView(View.Main);
  }
</script>

<div class="details">
  <button class="back-button" on:click={unSelect}>
    {"⇐"}
  </button>
  <div class="focused-title-section">
    <h3>{$selectedProject?.title}</h3>
    <FontAwesomeIcon icon={$selectedProject?.icon} />
  </div>
  <p>{$selectedProject?.description}</p>
  <a href={$selectedProject?.link} rel="noreferrer" target="_blank">(Link)</a>
  <div class="project-image-container">
    <img src={$selectedProject?.image} alt="The project" use:lazyImage />
  </div>
</div>
