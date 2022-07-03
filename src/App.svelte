<script lang="typescript">
  const data = [1, 2, 3, 4];
</script>

<main>
  <ul>
    {#each data as n}
      <li>
        <span>{`Item ${n}`}</span>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
