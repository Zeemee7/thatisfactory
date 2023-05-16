<script lang="ts">
    import { Production } from "./Production";
    import { Recipe } from "./Recipe";
	import { createEventDispatcher } from "svelte";

    export let index: number;
    export let production: Production;

	const dispatch = createEventDispatcher();

	function remove() {
		dispatch('remove');
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
		<input type="range" min="0" max="3" bind:value={production.slugs} on:change class="form-range">
	</div>
	<div class="col">
		<ul>
			{#each production.recipe.input as itemAmount}
				<li>{itemAmount.item.name} ({itemAmount.amount})</li>
			{/each}
		</ul>
	</div>
	<div class="col">
		<ul>
			{#each production.recipe.output as itemAmount}
				<li>{itemAmount.item.name} ({itemAmount.amount})</li>
			{/each}
		</ul>
	</div>
</div>

<style>
    .unsatisfied {
        border: 2px solid red;
    }
</style>