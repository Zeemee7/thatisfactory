import { ItemAmount } from "./ItemAmount";
import { Recipe } from "./Recipe";

export class Production {
    recipe: Recipe;
    slugs: number;
    speed: number;
    input: ItemAmount[];
    output: ItemAmount[];
    satisfied;

    constructor(recipeName: string, slugs: number, speed: number) {
        let foundRecipe = Recipe.findByName(recipeName);
        if (foundRecipe) {
            this.recipe = foundRecipe;
        } else {
            console.warn("Couldn't find recipe '" + recipeName + "'!");
            this.recipe = Recipe.NO_RECIPE;
        }
        this.slugs = slugs;
        this.speed = speed;
        this.input = [];
        this.output = [];
        this.satisfied = true;
    }

    calculate() {
        // Be optimistic again
        this.satisfied = true;

        let productionFactor = this.speed / 100;
        let remainingInput = this.input.map(i => new ItemAmount(i.item, i.amount));

        console.log("Recipe: " + this.recipe.name + ", Input: " + remainingInput.length);
        for (let r = 0; r < this.recipe.input.length; r++) {
            let requiredItemAmount = this.recipe.input[r];
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
                this.satisfied = false;
                let reducedProductionFactor = takenAmount / requiredAmount;
                if (reducedProductionFactor < productionFactor) {
                    console.log("Reducing production factor to " + reducedProductionFactor);
                    productionFactor = reducedProductionFactor;
                }
            }
        }

        // Add remaining output
        let recipeOutput = this.recipe.output.map(i => new ItemAmount(i.item, i.amount * productionFactor));
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
        this.output = remainingInput.filter(itemAmount => itemAmount.amount > 0);
        console.log("Output: " + remainingInput.length);
    }
}
