<!-- my-page.svelte -->
<script>
	import { page } from '$app/stores';

	export let data; // Fetched data from the server
	console.log(data);
	import YearlyTable from '../../components/YearlyTable.svelte';
	let selectedOption = ''; // Initialize with an empty value
	let isLoading = false; // Initialize as loading
	let newData = data.newData;
	async function handleSelectChange(event) {
		selectedOption = event.target.value;
		console.log(selectedOption);
	}
	// Access the employeeId parameter
	const teamId = $page.params.teamId;
	//const getRowClass = (index) => {
	//	return index % 2 === 0 ? 'bg-white' : 'bg-gray-200';
	//};
	// Function to check if the year is different from the previous player
	//const isDifferentYear = (currentYear, prevYear) => {
	//	return currentYear !== prevYear;
	//};
</script>

<h1>{teamId.toUpperCase()}</h1>
<!--
<h1>Select an Option:</h1>
<select on:change={handleSelectChange}>
	{#each data.teams as option}
		<option value={option}>{option}</option>
	{/each}
</select>-->

{#if isLoading}
	<p>Loading...</p>
{:else}
	<!--{JSON.stringify(data['sortedGroups'])}-->
	{#each data['sortedGroups'] as draftClass}
		<h1>{draftClass[0]}</h1>
		<YearlyTable draftyear={draftClass[0]} playerdata={draftClass[1]} />
	{/each}
	<!-- Display your table here -->
{/if}

<!-- Display results table here -->
<!-- YourTable.svelte -->

<style>
	.bg-white {
		background-color: white;
	}

	.bg-gray-200 {
		background-color: #f4f4f4;
	}
	.empty-row {
		height: 20px;
	}

	/* Add other styling for your table rows here */
</style>
