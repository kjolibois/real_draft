<!-- YearlyTable.svelte -->

<script>
	export let draftyear;
	export let playerdata; // Data for the specific year
</script>

<table>
	<thead>
		<tr>
			<th>Player Name</th>
			<th>Pick</th>
			<th>Draft Round</th>
			<th>Year Drafted</th>
		</tr>
	</thead>
	<tbody>
		{#each playerdata as player}
			<tr>
				<td><a href={'/player/' + player.PLAYER_ID}>{player.PLAYER_NAME}</a></td>
				<td>{player.PICK_OVERALL}</td>
				<td>{player.DRAFT_ROUND}</td>
				<td>{draftyear}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%; /* Set the table width to 100% */
		border-collapse: collapse; /* Merge cell borders */
	}

	th,
	td {
		padding: 8px; /* Add padding to table cells */
		text-align: left; /* Align text to the left */
		border: 1px solid #ddd; /* Add a border to cells */
	}
</style>
