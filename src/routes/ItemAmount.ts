import { Item } from "./Item";

export class ItemAmount {
    readonly item: Item;
    amount: number;

    constructor(item: Item, amount: number) {
        this.item = item;
        this.amount = amount;
    }
}