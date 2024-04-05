<script lang="ts">
  import type { PortfolioPhoto } from "src/types";
  import { urlsFor } from "../util/photo";
  import { useLazyImage as lazyImage } from "svelte-lazy-image";
  import { selectedPhoto } from "../state/photography";

  export let photo: PortfolioPhoto;

  const handleClick = () => {
    selectedPhoto.setSelectedPhoto(photo);
  };

  const urls = urlsFor(photo);
</script>

<li>
  <button on:click={handleClick}>
    <img src={urls.thumbnail} alt={photo.description} use:lazyImage />
  </button>
</li>
