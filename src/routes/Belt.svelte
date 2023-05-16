<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { ItemAmount } from "./ItemAmount";

	export let load: ItemAmount[] = [];

	$: total = load.map(i => i.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	const dispatch = createEventDispatcher();

	function addProducer() {
		dispatch('addProducer');
	}
</script>

<div class="row">
	<div class="col">
		V
	</div>
	<div class="col">
		<button class="btn btn-light" on:click={addProducer}>+</button>
	</div>
	<div class="col">
		Total: {total}
	</div>
	<div class="col">
		<ul>
			{#each load as item}
				<li>{item.item.name} ({item.amount})</li>
			{/each}
		</ul>
	</div>
</div>

<style>
</style>