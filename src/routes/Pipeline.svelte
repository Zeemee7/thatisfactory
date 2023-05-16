<script lang="ts">
    import Belt from "./Belt.svelte";
    import Producer from "./Producer.svelte";
    import { ItemAmount } from "./ItemAmount";
    import { Production } from "./Production";

    let pipeline: Array<Production> = [];

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
            console.log(i + " --> " + p.recipe.name);
            if (previousOutput) {
                p.input = previousOutput;
            }
            p.calculate();
            previousOutput = p.output;
        }
        // Trigger redraw
        pipeline = pipeline;
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
