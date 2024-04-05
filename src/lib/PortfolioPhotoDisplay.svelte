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
  <div class="photo-rows">
    <button class="back-button" on:click={goBack}>
      {"⇐ "}
    </button>
    <!-- <h2>{$selectedPhoto.title}</h2> -->
    <img src={urls.full} alt={$selectedPhoto.description} use:lazyImage />
    <!-- <span>{$selectedPhoto.description}</span> -->
  </div>
</div>
