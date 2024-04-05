<script lang="ts">
  import { View, type Project } from "../types";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { selectedProject } from "../state/projects";
  import { currentView } from "../state/views";

  export let project: Project;

  const handleClick = () => {
    selectedProject.setProject(project);
    currentView.setView(View.Project);
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
