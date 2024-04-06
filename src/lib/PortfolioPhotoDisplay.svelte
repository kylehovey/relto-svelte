<script lang="ts">
  import { selectedPhoto } from "../state/photography";
  import { urlsFor } from "../util/photo";
  import { useLazyImage as lazyImage } from "svelte-lazy-image";

  const urls = urlsFor($selectedPhoto);

  const goBack = () => {
    selectedPhoto.setSelectedPhoto(null);
  };
</script>

<div class="full-photo-container">
  <div class="photo-container-header">
    <span class="photo-title">{$selectedPhoto.title}</span>
  </div>
  <span class="photo-description">{$selectedPhoto.description}</span>
  <div class="photo-rows">
    <img src={urls.full} alt={$selectedPhoto.description} use:lazyImage />
  </div>
  <button class="back-button" on:click={goBack}>
    {"⇐ "}
  </button>
</div>
