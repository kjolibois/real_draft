<!-- my-page.svelte -->
<script>
	export let data; // Fetched data from the server
	console.log(data);
	import { page } from '$app/stores';
	let selectedOption = ''; // Initialize with an empty value
	let isLoading = true; // Initialize as loading
	let newData;
	import { writable } from 'svelte/store'; // Import statement added

	let selectedTab = writable('bio'); // Initial selected tab
</script>

<h1>{$page.params.playerId}</h1>
<h2>{data.newData['bio'][0]['PLAYER_NAME']}</h2>

<div class="tabs">
	<button type="button" on:click={() => selectedTab.set('bio')}>Bio</button>
	<button type="button" on:click={() => selectedTab.set('career_stats')}>Career Stats</button>
</div>

<table>
	<thead>
		<tr>
			{$selectedTab}
		</tr>
	</thead>
	<tbody>
		{#each Object.keys(data.newData[$selectedTab][0]) as key}
			<tr>
				<td>{key}</td>
				<td>{data.newData[$selectedTab][0][key]}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	/* Add your table styling here */

	table {
		border-collapse: collapse;
	}

	th,
	td {
		padding: 10px;
		border: 1px solid #ddd;
	}

	.tabs {
		display: flex;
		gap: 10px;
		margin-bottom: 10px;
	}

	.tabs button {
		padding: 5px 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		cursor: pointer;
	}

	.tabs button.active {
		background-color: #f0f0f0;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 10px;
		border: 1px solid #ccc;
	}
</style>
