<!-- my-page.svelte -->
<script>
	import { page } from '$app/stores';

	export let data; // Fetched data from the server
	console.log(data);
	let selectedOption = ''; // Initialize with an empty value
	let isLoading = false; // Initialize as loading
	let newData = data.newData;
	async function handleSelectChange(event) {
		selectedOption = event.target.value;
		console.log(selectedOption);
	}
	// Access the employeeId parameter
	const DraftYearDisplay = $page.params.draftYear;
	const getRowClass = (index) => {
		return index % 2 === 0 ? 'bg-white' : 'bg-gray-200';
	};
	// Function to check if the year is different from the previous player
	const isDifferentYear = (currentYear, prevYear) => {
		return currentYear !== prevYear;
	};
</script>

<h1>{DraftYearDisplay}</h1>
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
	<table>
		<thead>
			<!-- Your table header content -->
			<th>Player Name</th>
			<th>Pick</th>
			<th>Draft Round</th>
			<th> Draft Team</th>
			<th>Year Drafted</th>
		</thead>
		<tbody>
			{#each newData.results as player, index}
				{#if isDifferentYear(player.YEAR_DRAFTED, newData.results[index - 1]?.YEAR_DRAFTED)}
					<!-- Insert an empty row -->
					<tr class="empty-row" />
				{/if}
				<tr class={getRowClass(index)}>
					<td><a href={'/player/' + player.PLAYER_ID}>{player.PLAYER_NAME} </a></td>
					<td>{player.PICK_OVERALL}</td>
					<td>{player.DRAFT_ROUND}</td>
					<td>{player.DRAFT_TEAM}</td>
					<td>{player.YEAR_DRAFTED}</td>
					<!-- Other table cells -->
				</tr>
			{/each}
		</tbody>
	</table>
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
	/* Add these styles for sticky headers */
	table {
		position: relative; /* Ensure a positioning context for the sticky header */
	}

	thead th {
		position: sticky;
		top: 0; /* Stick to the top of the viewport */
		background-color: #fff; /* Ensure a solid background for the header */
		z-index: 1; /* Keep the header above other content */
	}
	/* Add other styling for your table rows here */
</style>
