import { writable } from 'svelte/store';
import type { Production } from "./Production";

const stored = localStorage.pipeline || "[]";
export const PIPELINE_STORE = writable<Array<Production>>(JSON.parse(stored) || []);

// Update the localStorage on changes
PIPELINE_STORE.subscribe(value => {
	console.log("Saving to localStorage...");
	localStorage.pipeline = JSON.stringify(value);
});