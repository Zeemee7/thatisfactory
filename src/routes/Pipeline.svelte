<script lang="ts">
	import { onDestroy } from "svelte";
    import Belt from "./Belt.svelte";
    import Producer from "./Producer.svelte";
    import { ItemAmount } from "./ItemAmount";
    import { Production } from "./Production";
	import { PIPELINE_STORE } from "./Store";
	import { Recipe } from "./Recipe";

    let pipeline: Array<Production> = [];

	const unsubscribe = PIPELINE_STORE.subscribe(value => {
		pipeline = value;
	});
	onDestroy(unsubscribe);

    function addProducer(index: number): void {
        console.log("Adding a producer...");
        if (index >= pipeline.length) {
            pipeline.push(new Production());
        } else {
            pipeline.splice(index, 0, new Production());
        }
        calculateProduction();
    }

	function removeProducer(index: number): void {
		console.log("Removing producer at index " + index);
		pipeline.splice(index, 1);
		calculateProduction();
	}

    function calculateProduction(): void {
        console.log("Calculating pipeline...");
        let previousOutput: ItemAmount[];
        for (let i = 0; i < pipeline.length; i++) {
            let p = pipeline[i];
            if (previousOutput) {
                p.input = previousOutput;
            }
            calculate(p);
            previousOutput = p.output;
        }
		PIPELINE_STORE.set(pipeline);
    }

	function calculate(production: Production) {
		// Be optimistic again
		production.satisfied = true;

		const recipe = Recipe.findByName(production.recipeName);
		if (!recipe) {
			console.warn("Undefined recipe '" + production.recipeName + "'");
			return;
		}

		let productionFactor = 1 + (0.5 * production.slugs);
		let remainingInput = production.input.map(i => new ItemAmount(i.item, i.amount));

		console.log("Input: " + remainingInput.length);
		for (let r = 0; r < recipe.input.length; r++) {
			let requiredItemAmount = recipe.input[r];
			let requiredAmount = requiredItemAmount.amount * productionFactor;
			let takenAmount = 0;
			console.log(requiredItemAmount.item.name + " (" + requiredAmount + ")");
			for (let i = 0; i < remainingInput.length; i++) {
				let givenItemAmount = remainingInput[i];
				if (requiredItemAmount.item == givenItemAmount.item) {
					let stillRequiredAmount = requiredAmount - takenAmount;
					let givenAmount = givenItemAmount.amount;
					if (givenAmount < stillRequiredAmount) {
						takenAmount += givenAmount;
					} else {
						takenAmount += stillRequiredAmount;
					}
					givenItemAmount.amount -= takenAmount;
				}
			}

			// Adjust production factor, if not sufficient
			if (requiredAmount > takenAmount) {
				console.log("Not satisfied");
				production.satisfied = false;
				let reducedProductionFactor = takenAmount / requiredAmount;
				if (reducedProductionFactor < productionFactor) {
					console.log("Reducing production factor to " + reducedProductionFactor);
					productionFactor = reducedProductionFactor;
				}
			}
		}

		// Add remaining output
		let recipeOutput = recipe.output.map(i => new ItemAmount(i.item, i.amount * productionFactor));
		for (let o = 0; o < recipeOutput.length; o++) {
			let recipeItemAmount = recipeOutput[o];
			let added = false;
			for (let r = 0; r < remainingInput.length; r++) {
				let remainingItemAmount = remainingInput[r];
				if (remainingItemAmount.item == recipeItemAmount.item) {
					remainingItemAmount.amount += recipeItemAmount.amount;
					added = true;
				}
			}
			if (!added) {
				remainingInput.push(recipeItemAmount);
			}
		}

		// Remove items with amount 0
		production.output = remainingInput.filter(itemAmount => itemAmount.amount > 0);
		console.log("Output: " + remainingInput.length);
	}
</script>

<div>
	<Belt on:addProducer={() => addProducer(0)} />
    {#each pipeline as production, index}
        <Producer {index} {production} on:change={calculateProduction} on:remove={() => removeProducer(index)}/>
        <Belt
            on:addProducer={() => addProducer(index + 1)}
            load={production.output}
        />
    {/each}
</div>
