// my-page.server.js
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	let newData;
	const teams = [
		'ATL',
		'BOS',
		'NJN',
		'CHA',
		'CHI',
		'CLE',
		'DAL',
		'DEN',
		'DET',
		'GSW',
		'HOU',
		'IND',
		'LAC',
		'LAL',
		'MEM',
		'MIA',
		'MIL',
		'MIN',
		'NOH',
		'NYK',
		'OKC',
		'ORL',
		'PHI',
		'PHO',
		'POR',
		'SAC',
		'SAS',
		'TOR',
		'UTA',
		'WAS'
	];
	let sortedGroups;
	try {
		const response = await fetch(
			`https://data-ball-is-life.c63.workers.dev/api/drafts?year=${event.params.draftYear}`
		);
		newData = await response.json();
		console.log(newData);
		// Update data.results with newData
		//data["results"]=newData
		// ...
	} catch (error) {
		console.error('Error fetching results:', error);
	}

	return {
		newData,

		teams
	};
};

export const actions: Actions = {};

//export async function load() {
//const response = await fetch('https://api.example.com/data');
//  const data =
//  return  data ;
//}
