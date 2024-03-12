<!-- my-page.svelte -->
<script>
	export let data; // Fetched data from the server
	console.log(data);
	import { page } from '$app/stores';
	let selectedOption = ''; // Initialize with an empty value
	let isLoading = true; // Initialize as loading
	let newData;
	async function handleSelectChange(event) {
		selectedOption = event.target.value;
		isLoading = true; // Start loading
		try {
			const response = await fetch(
				`https://data-ball-is-life.c63.workers.dev/api/drafts?year=${selectedOption}`
			);
			newData = await response.json();
			console.log(newData);
			// Update data.results with newData
			//data["results"]=newData
			// ...
			isLoading = false; // Data loaded
		} catch (error) {
			console.error('Error fetching results:', error);
		}
		isLoading = false; // Data loaded
		// Import the page store
	}
</script>

<h1>Select an year:</h1>
<select on:change={handleSelectChange}>
	{#each data.years as option}
		<option value={option}>{option}</option>
	{/each}
</select>
{#if isLoading}
	<p>Loading...</p>
{:else}
	{#each newData.results as player}
		{JSON.stringify(player)}
		<p>{player.PLAYER_NAME}</p>
	{/each}
	<!-- Display your table here -->
{/if}
<!-- Display results table here -->
