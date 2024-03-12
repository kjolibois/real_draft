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
				`https://data-ball-is-life.c63.workers.dev/api/drafts?team=${selectedOption}`
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

<h1>{$page.params.playerId}</h1>
