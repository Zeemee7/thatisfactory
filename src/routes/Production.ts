import type { ItemAmount } from "./ItemAmount";
import { Recipe } from "./Recipe";

export class Production {
    recipeName: string = Recipe.NO_RECIPE.name;
    slugs = 0;
    input: ItemAmount[] = [];
    output: ItemAmount[] = [];
    satisfied = true;
}
