<script lang="ts">
    import type { Production } from "./Production";
    import { Recipe } from "./Recipe";
	import { createEventDispatcher } from "svelte";

    export let index: number;
    export let production: Production;

	let maxSpeed = 100;

	const dispatch = createEventDispatcher();

	function remove(): void {
		dispatch('remove');
	}

	function slugsChanged(): void {
		let newMaxSpeed = 100 + (production.slugs * 50);
		if (newMaxSpeed < maxSpeed) {
			production.speed = newMaxSpeed;
		}
		maxSpeed = newMaxSpeed;
		dispatch('change');
	}
</script>

<div class="row {production.satisfied ? '' : 'unsatisfied'}">
	<div class="col">Producer {index}<button class="btn btn-light" on:click={remove}>-</button></div>
	<div class="col">
		<select bind:value={production.recipe} on:change class="form-select">
			{#each Recipe.RECIPES as recipe}
				<option value={recipe}>
					{recipe.name}
				</option>
			{/each}
		</select>
		Slugs: {production.slugs}
		<input type="range" min="0" max="3" bind:value={production.slugs} on:change={slugsChanged} class="form-range">
		Clock speed: {production.speed}
		<input type="range" min="0" max="{maxSpeed}" bind:value={production.speed} on:change class="form-range">
	</div>
	<div class="col">
		<ul>
			{#each production.recipe.input as itemAmount}
				<li>{itemAmount.item.name} ({itemAmount.amount * (production.speed / 100)})</li>
			{/each}
		</ul>
	</div>
	<div class="col">
		<ul>
			{#each production.recipe.output as itemAmount}
				<li>{itemAmount.item.name} ({itemAmount.amount * (production.speed / 100)})</li>
			{/each}
		</ul>
	</div>
</div>

<style>
    .unsatisfied {
        border: 2px solid red;
    }
</style>