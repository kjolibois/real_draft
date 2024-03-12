// my-page.server.js
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
function groupByYear(data, yearProperty) {
	console.log(data);
	return data.results.reduce((acc, obj) => {
		const year = obj[yearProperty];
		acc[year] = acc[year] || [];
		acc[year].push(obj);
		return acc;
	}, {});
}
function sortGroups(groups) {
	//return //Object.fromEntries(
	return Object.entries(groups).sort(([yearA], [yearB]) => {
		console.log(yearA);
		console.log(yearB);
		console.log(yearB - yearA);
		return yearB - yearA;
	});
	//);
}
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
			`https://data-ball-is-life.c63.workers.dev/api/drafts?team=${event.params.teamId.toUpperCase()}`
		);
		newData = await response.json();
		console.log(newData);
		// Update data.results with newData
		//data["results"]=newData
		// ...
		const groupedData = groupByYear(newData, 'YEAR_DRAFTED');
		sortedGroups = sortGroups(groupedData);
		console.log(sortedGroups);
	} catch (error) {
		console.error('Error fetching results:', error);
	}

	return {
		newData,
		sortedGroups,
		teams
	};
};

export const actions: Actions = {};

//export async function load() {
//const response = await fetch('https://api.example.com/data');
//  const data =
//  return  data ;
//}
