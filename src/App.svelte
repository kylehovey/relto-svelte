<script lang="typescript">
	export let name: string = 'World';
	export let derp: string = '';

	interface Test {
		value: string;
	}

	export const test: Test = {
		value: 'dingle',
	};
</script>

<main>
	<h1>Hello {name}! You wrote {derp}. The test value is {test.value}</h1>
	<input bind:value={derp} />
	<input bind:value={test.value} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
