<script lang="ts">
  import { View, type PortfolioPhoto } from "../types";
  import PhotoThumbnail from "./PhotoThumbnail.svelte";
  import PortfolioPhotoDisplay from "./PortfolioPhotoDisplay.svelte";
  import { currentView } from "../state/views";
  import { selectedPhoto } from "../state/photography";

  const photoCount = 40;
  const portfolio: PortfolioPhoto[] = Array(40)
    .fill(null)
    .map((_, i) => ({
      index: i + 1,
      title: `Photo ${i}`,
      description: "TBD",
    }));

  const goBack = () => {
    currentView.setView(View.Main);
  };
</script>

<div>
  <button class="back-button" on:click={goBack}>
    {"⇐ "}
  </button>
  <div class="photo-portfolio-container">
    {#if $selectedPhoto === null}
      <ul class="photo-list">
        {#each portfolio as photo}
          <PhotoThumbnail {photo} />
        {/each}
      </ul>
    {/if}
    {#if $selectedPhoto !== null}
      <PortfolioPhotoDisplay />
    {/if}
  </div>
</div>
