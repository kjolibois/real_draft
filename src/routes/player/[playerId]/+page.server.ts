// my-page.server.js
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	let newData;

	let sortedGroups;
	try {
		//const response = await fetch(
		//	`https://data-ball-is-life.c63.workers.dev/api/drafts?team=${event.params.teamId.toUpperCase()}`
		//);
		//newData = await response.json();
		//console.log(newData);
		// Update data.results with newData
		//data["results"]=newData
		// ...
		newData = { id: event.params.playerId, playerName: 'khalil', gp: 5 };
		event.params.playerId;
		console.log(sortedGroups);
	} catch (error) {
		console.error('Error fetching results:', error);
	}

	return {
		newData
	};
};
