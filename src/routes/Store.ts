import { writable } from 'svelte/store';
import { Production } from "./Production";

export const PIPELINE_STORE = writable<Array<Production>>(load());

// Update the localStorage on changes
PIPELINE_STORE.subscribe(value => save(value));

function save(pipeline: Production[]) {
	console.log("Saving to localStorage...");
	let storedValue = pipeline.map(p => ({
		recipeName: p.recipe.name,
		slugs: p.slugs,
		speed: p.speed
	}));
	localStorage.pipeline = JSON.stringify(storedValue);
}

function load(): Production[] {
	if (localStorage.pipeline) {
		return JSON.parse(localStorage.pipeline).map((raw: { recipeName: string; slugs: number; speed: number; }) => new Production(raw.recipeName, raw.slugs, raw.speed));
	} else {
		return [];
	}
}
