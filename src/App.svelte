<script lang="ts">
  import Project from "./lib/Project.svelte";
  import ProjectDetails from "./lib/ProjectDetails.svelte";
  import BottomBar from "./lib/BottomBar.svelte";

  import { projects } from "./data/projects";
  import { selectedProject } from "./state/projects";
</script>

<main>
  <div class="container">
    <div class="content">
      <div class="main">
        <div class="description">
          <div class="logo" />
          {#if $selectedProject === null}
            <div>
              <h2>Project Portfolio</h2>
              <p>
                Hi! My name is Kyle. I grew up in a small community in the
                Sierra Nevada mountains. In 2019, I graduated Utah State
                University with a BS in Computational Mathematics. My passions
                include mathematics, electrical engineering, programming, music,
                hiking, climbing, and philosophy. Here you can see some
                highlights from my past/current projects. Check out my blog for
                diatribes on math and programming.
              </p>
            </div>
          {/if}
        </div>
        {#if $selectedProject === null}
          <ul class="projects-list">
            {#each projects as project}
              <Project {project} />
            {/each}
          </ul>
        {/if}
        {#if $selectedProject !== null}
          <ProjectDetails />
        {/if}
        <BottomBar />
      </div>
    </div>
  </div>
</main>
