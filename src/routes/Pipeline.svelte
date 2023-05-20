<script lang="ts">
	import { onDestroy } from "svelte";
	import Belt from "./Belt.svelte";
	import Producer from "./Producer.svelte";
	import type { ItemAmount } from "./ItemAmount";
	import { Production } from "./Production";
	import { PIPELINE_STORE } from "./Store";
	import { Recipe } from "./Recipe";

	let pipeline: Array<Production> = [];

	const unsubscribe = PIPELINE_STORE.subscribe((value) => {
		pipeline = value;
		calculateProduction();
	});
	onDestroy(unsubscribe);

	function addProducer(index: number): void {
		console.log("Adding a producer...");
		const newProduction = new Production(Recipe.NO_RECIPE.name, 0, 100);
		if (index >= pipeline.length) {
			pipeline.push(newProduction);
		} else {
			pipeline.splice(index, 0, newProduction);
		}
		PIPELINE_STORE.set(pipeline);
	}

	function removeProducer(index: number): void {
		console.log("Removing producer at index " + index);
		pipeline.splice(index, 1);
		PIPELINE_STORE.set(pipeline);
	}

	function producersChanged(): void {
		PIPELINE_STORE.set(pipeline);
	}

	function calculateProduction(): void {
		console.log("Calculating pipeline...");
		let previousOutput: ItemAmount[];
		for (let i = 0; i < pipeline.length; i++) {
			let p = pipeline[i];
			if (previousOutput) {
				p.input = previousOutput;
			}
			p.calculate();
			previousOutput = p.output;
		}
	}
</script>

<div>
	<Belt on:addProducer={() => addProducer(0)} />
	{#each pipeline as production, index}
		<Producer
			{index}
			{production}
			on:change={producersChanged}
			on:remove={() => removeProducer(index)}
		/>
		<Belt
			on:addProducer={() => addProducer(index + 1)}
			load={production.output}
		/>
	{/each}
</div>
