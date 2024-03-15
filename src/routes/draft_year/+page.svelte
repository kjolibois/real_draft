<!-- my-page.svelte -->
<script>
	export let data; // Fetched data from the server
	console.log(data);
	import { page } from '$app/stores';
	let selectedOption = 'Select a Year'; // Initialize with an empty value
	let isLoading = true; // Initialize as loading
	let newData;
	async function handleSelectChange(event) {
		selectedOption = event.target.value;
		isLoading = true; // Start loading

		try {
			// Assuming you have a base URL to which you want to append the selected option
			const domain = window.location.origin;
			const newUrl = `${domain}/draft_year/${selectedOption}`;

			// Fetch data from the server using the new URL

			// Update data.results with newData
			// data["results"] = newData
			// ...

			// Use pushState to change the URL and create a new history entry
			window.history.pushState({ path: newUrl }, '', newUrl);
			window.location.href = newUrl;
		} catch (error) {
			console.error('Error fetching results:', error);
		} finally {
			isLoading = false; // Data loaded
		}
	}
</script>

<h1>Select an year:</h1>
<select on:change={handleSelectChange}>
	<option value="none" disabled selected>Select a Year</option>

	{#each data.years as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<!-- Display results table here -->
