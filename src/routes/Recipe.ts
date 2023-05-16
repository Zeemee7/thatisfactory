import { ItemAmount } from "./ItemAmount";
import { Item } from "./Item";

export class Recipe {
	static NO_RECIPE = new Recipe("Nothing", [], []);

	static RECIPES: Recipe[] = [
		Recipe.NO_RECIPE,
		new Recipe("AI Limiter", [new ItemAmount(Item.COPPER_SHEET_ITEM, 25), new ItemAmount(Item.QUICKWIRE_ITEM, 100)], [new ItemAmount(Item.AI_LIMITER_ITEM, 5)]),
		new Recipe("Biomass", [], []),
		new Recipe("Cable", [new ItemAmount(Item.WIRE_ITEM, 60)], [new ItemAmount(Item.CABLE_ITEM, 30)]),
		new Recipe("Caterium Ingot", [new ItemAmount(Item.CATERIUM_ORE_ITEM, 45)], [new ItemAmount(Item.CATERIUM_INGOT_ITEM, 15)]),
		new Recipe("Caterium Ore Pure MK1", [], [new ItemAmount(Item.CATERIUM_ORE_ITEM, 120)]),
		new Recipe("Caterium Ore Pure MK2", [], [new ItemAmount(Item.CATERIUM_ORE_ITEM, 240)]),
		new Recipe("Circuit Board", [new ItemAmount(Item.COPPER_SHEET_ITEM, 15), new ItemAmount(Item.PLASTIC_ITEM, 30)], [new ItemAmount(Item.CIRCUIT_BOARD_ITEM, 7.5)]),
		new Recipe("Coal Pure MK1", [], [new ItemAmount(Item.COAL_ITEM, 120)]),
		new Recipe("Coal Pure MK2", [], [new ItemAmount(Item.COAL_ITEM, 240)]),
		new Recipe("Computer", [new ItemAmount(Item.CIRCUIT_BOARD_ITEM, 25), new ItemAmount(Item.CABLE_ITEM, 22.5), new ItemAmount(Item.PLASTIC_ITEM, 45), new ItemAmount(Item.SCREW_ITEM, 130)], [new ItemAmount(Item.COMPUTER_ITEM, 2.5)]),
		new Recipe("Concrete", [new ItemAmount(Item.LIMESTONE_ITEM, 45)], [new ItemAmount(Item.CONCRETE_ITEM, 15)]),
		new Recipe("Copper Ingot", [new ItemAmount(Item.COPPER_ORE_ITEM, 30)], [new ItemAmount(Item.COPPER_INGOT_ITEM, 30)]),
		new Recipe("Copper Ore Pure MK1", [], [new ItemAmount(Item.COPPER_ORE_ITEM, 120)]),
		new Recipe("Copper Ore Pure MK2", [], [new ItemAmount(Item.COPPER_ORE_ITEM, 240)]),
		new Recipe("Copper Sheet", [new ItemAmount(Item.COPPER_INGOT_ITEM, 20)], [new ItemAmount(Item.COPPER_SHEET_ITEM, 10)]),
		new Recipe("Crude Oil Impure", [], [new ItemAmount(Item.CRUDE_OIL_ITEM, 60)]),
		new Recipe("Crude Oil Normal", [], [new ItemAmount(Item.CRUDE_OIL_ITEM, 120)]),
		new Recipe("Crude Oil Pure", [], [new ItemAmount(Item.CRUDE_OIL_ITEM, 240)]),
		new Recipe("Crystal Oscillator", [new ItemAmount(Item.QUARTZ_CRYSTAL_ITEM, 18), new ItemAmount(Item.CABLE_ITEM, 14), new ItemAmount(Item.REINFORCED_IRON_PLATE_ITEM, 2.5)], [new ItemAmount(Item.CRYSTAL_OSCILLATOR_ITEM, 1)]),
		new Recipe("Encased Industrial Beam", [new ItemAmount(Item.STEEL_BEAM_ITEM, 24), new ItemAmount(Item.CONCRETE_ITEM, 30)], [new ItemAmount(Item.ENCASED_INDUSTRIAL_BEAM_ITEM, 6)]),
		new Recipe("Heavy Modular Frame", [new ItemAmount(Item.MODULAR_FRAME_ITEM, 10), new ItemAmount(Item.STEEL_PIPE_ITEM, 30), new ItemAmount(Item.ENCASED_INDUSTRIAL_BEAM_ITEM, 10), new ItemAmount(Item.SCREW_ITEM, 200)], [new ItemAmount(Item.HEAVY_MODULAR_FRAME_ITEM, 2)]),
		new Recipe("High-Speed Connector", [new ItemAmount(Item.QUICKWIRE_ITEM, 210), new ItemAmount(Item.CABLE_ITEM, 37.5), new ItemAmount(Item.CIRCUIT_BOARD_ITEM, 3.75)], [new ItemAmount(Item.HIGH_SPEED_CONNECTOR_ITEM, 3.75)]),
		new Recipe("Iron Ingot", [new ItemAmount(Item.IRON_ORE_ITEM, 30)], [new ItemAmount(Item.IRON_INGOT_ITEM, 30)]),
		new Recipe("Iron Ore Pure MK1", [], [new ItemAmount(Item.IRON_ORE_ITEM, 120)]),
		new Recipe("Iron Ore Pure MK2", [], [new ItemAmount(Item.IRON_ORE_ITEM, 240)]),
		new Recipe("Iron Plate", [new ItemAmount(Item.IRON_INGOT_ITEM, 30)], [new ItemAmount(Item.IRON_PLATE_ITEM, 20)]),
		new Recipe("Iron Rod", [new ItemAmount(Item.IRON_INGOT_ITEM, 15)], [new ItemAmount(Item.IRON_ROD_ITEM, 15)]),
		new Recipe("Limestone Pure MK1", [], [new ItemAmount(Item.LIMESTONE_ITEM, 120)]),
		new Recipe("Limestone Pure MK2", [], [new ItemAmount(Item.LIMESTONE_ITEM, 240)]),
		new Recipe("Modular Frame", [new ItemAmount(Item.REINFORCED_IRON_PLATE_ITEM, 3), new ItemAmount(Item.IRON_ROD_ITEM, 12)], [new ItemAmount(Item.MODULAR_FRAME_ITEM, 2)]),
		new Recipe("Motor", [new ItemAmount(Item.ROTOR_ITEM, 10), new ItemAmount(Item.STATOR_ITEM, 10)], [new ItemAmount(Item.MOTOR_ITEM, 5)]),
		//new Recipe("Plastic", [new ItemAmount(Item.CRUDE_OIL_ITEM, 30)], [new ItemAmount(Item.PLASTIC_ITEM, 20), new ItemAmount(Item.HEAVY_OIL_RESIDUE, 10)]),
		new Recipe("Plastic", [], [new ItemAmount(Item.PLASTIC_ITEM, 20)]),
		new Recipe("Quartz Crystal", [new ItemAmount(Item.RAW_QUARTZ_ITEM, 37.5)], [new ItemAmount(Item.QUARTZ_CRYSTAL_ITEM, 22.5)]),
		new Recipe("Quickwire", [new ItemAmount(Item.CATERIUM_INGOT_ITEM, 12)], [new ItemAmount(Item.QUICKWIRE_ITEM, 60)]),
		new Recipe("Reinforced Iron Plate", [new ItemAmount(Item.IRON_PLATE_ITEM, 30), new ItemAmount(Item.SCREW_ITEM, 60)], [new ItemAmount(Item.REINFORCED_IRON_PLATE_ITEM, 5)]),
		new Recipe("Rotor", [new ItemAmount(Item.ROTOR_ITEM, 20), new ItemAmount(Item.SCREW_ITEM, 100)], [new ItemAmount(Item.ROTOR_ITEM, 4)]),
		//new Recipe("Rubber", [new ItemAmount(Item.CRUDE_OIL_ITEM, 30)], [new ItemAmount(Item.RUBBER_ITEM, 20), new ItemAmount(Item.HEAVY_OIL_RESIDUE, 20)]),
		new Recipe("Rubber", [], [new ItemAmount(Item.RUBBER_ITEM, 20)]),
		new Recipe("Screw", [new ItemAmount(Item.IRON_ROD_ITEM, 10)], [new ItemAmount(Item.SCREW_ITEM, 40)]),
		new Recipe("Cast Screw", [new ItemAmount(Item.IRON_INGOT_ITEM, 12.5)], [new ItemAmount(Item.SCREW_ITEM, 50)]),
		new Recipe("Silica", [new ItemAmount(Item.RAW_QUARTZ_ITEM, 22.5)], [new ItemAmount(Item.SILICA_ITEM, 37.5)]),
		new Recipe("Stator", [new ItemAmount(Item.STEEL_PIPE_ITEM, 15), new ItemAmount(Item.WIRE_ITEM, 40)], [new ItemAmount(Item.STATOR_ITEM, 5)]),
		new Recipe("Steel Beam", [new ItemAmount(Item.STEEL_INGOT_ITEM, 60)], [new ItemAmount(Item.STEEL_BEAM_ITEM, 15)]),
		new Recipe("Steel Ingot", [new ItemAmount(Item.IRON_ORE_ITEM, 45), new ItemAmount(Item.COAL_ITEM, 45)], [new ItemAmount(Item.STEEL_INGOT_ITEM, 45)]),
		new Recipe("Steel Pipe", [new ItemAmount(Item.STEEL_INGOT_ITEM, 30)], [new ItemAmount(Item.STEEL_PIPE_ITEM, 20)]),
		new Recipe("Supercomputer", [new ItemAmount(Item.COMPUTER_ITEM, 3.75), new ItemAmount(Item.AI_LIMITER_ITEM, 3.75), new ItemAmount(Item.HIGH_SPEED_CONNECTOR_ITEM, 5.625), new ItemAmount(Item.PLASTIC_ITEM, 52.5)], [new ItemAmount(Item.SUPERCOMPUTER_ITEM, 1.875)]),
		new Recipe("Wire", [new ItemAmount(Item.COPPER_INGOT_ITEM, 15)], [new ItemAmount(Item.WIRE_ITEM, 30)]),
	]

	readonly name: string;
	readonly input: ItemAmount[];
	readonly output: ItemAmount[];

	constructor(name: string, input: ItemAmount[], output: ItemAmount[]) {
		this.name = name;
		this.input = input;
		this.output = output;
	}
}
