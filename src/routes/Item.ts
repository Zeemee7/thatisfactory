export class Item {

	static AI_LIMITER_ITEM = new Item("AI Limiter");

	static BIOMASS_ITEM = new Item("Biomass");

	static CABLE_ITEM = new Item("Cable");
	static CATERIUM_INGOT_ITEM = new Item("Caterium Ingot");
	static CATERIUM_ORE_ITEM = new Item("Caterium Ore");
	static CIRCUIT_BOARD_ITEM: Item = new Item("Circuit Board");
	static COAL_ITEM = new Item("Coal");
	static COMPUTER_ITEM = new Item("Computer");
	static CONCRETE_ITEM = new Item("Concrete");
	static COPPER_INGOT_ITEM = new Item("Copper Ingot");
	static COPPER_ORE_ITEM = new Item("Copper Ore");
	static COPPER_SHEET_ITEM = new Item("Copper Sheet");
	static CRUDE_OIL_ITEM = new Item("Crude Oil");
	static CRYSTAL_OSCILLATOR_ITEM = new Item("Crystal Oscillator");

	static ENCASED_INDUSTRIAL_BEAM_ITEM = new Item("Encased Industrial Beam");

	static HEAVY_MODULAR_FRAME_ITEM = new Item("Heavy Modular Frame");
	static HEAVY_OIL_RESIDUE = new Item("Heavy Oil Residue");
	static HIGH_SPEED_CONNECTOR_ITEM = new Item("High-Speed Connector");

	static IRON_INGOT_ITEM = new Item("Iron Ingot");
	static IRON_ORE_ITEM = new Item("Iron Ore");
	static IRON_PLATE_ITEM = new Item("Iron Plate");
	static IRON_ROD_ITEM = new Item("Iron Rod");

	static LIMESTONE_ITEM = new Item("Limestone");

	static MODULAR_FRAME_ITEM = new Item("Modular Frame");
	static MOTOR_ITEM = new Item("Motor");

	static PLASTIC_ITEM = new Item("Plastic");

	static QUARTZ_CRYSTAL_ITEM = new Item("Quartz Crystal");
	static QUICKWIRE_ITEM = new Item("Quickwire");

	static RAW_QUARTZ_ITEM = new Item("Raw Quartz");
	static REINFORCED_IRON_PLATE_ITEM = new Item("Reinforced Iron Plate");
	static ROTOR_ITEM = new Item("Rotor");
	static RUBBER_ITEM = new Item("Rubber");

	static SCREW_ITEM = new Item("Screw");
	static SILICA_ITEM = new Item("Silica");
	static STATOR_ITEM = new Item("Stator");
	static STEEL_BEAM_ITEM = new Item("Steel Beam");
	static STEEL_INGOT_ITEM = new Item("Steel Ingot");
	static STEEL_PIPE_ITEM = new Item("Steel Pipe");
	static SUPERCOMPUTER_ITEM = new Item("Supercomputer");

	static WIRE_ITEM = new Item("Wire");

	static ITEMS: Item[] = [
		Item.AI_LIMITER_ITEM,
		Item.BIOMASS_ITEM,
		Item.CABLE_ITEM,
		Item.CATERIUM_INGOT_ITEM,
		Item.CATERIUM_ORE_ITEM,
		Item.CIRCUIT_BOARD_ITEM,
		Item.COAL_ITEM,
		Item.COMPUTER_ITEM,
		Item.CONCRETE_ITEM,
		Item.COPPER_INGOT_ITEM,
		Item.COPPER_ORE_ITEM,
		Item.COPPER_SHEET_ITEM,
		Item.CRYSTAL_OSCILLATOR_ITEM,
		Item.ENCASED_INDUSTRIAL_BEAM_ITEM,
		Item.HEAVY_MODULAR_FRAME_ITEM,
		Item.HIGH_SPEED_CONNECTOR_ITEM,
		Item.IRON_INGOT_ITEM,
		Item.IRON_ORE_ITEM,
		Item.IRON_PLATE_ITEM,
		Item.IRON_ROD_ITEM,
		Item.LIMESTONE_ITEM,
		Item.MODULAR_FRAME_ITEM,
		Item.MOTOR_ITEM,
		Item.PLASTIC_ITEM,
		Item.QUARTZ_CRYSTAL_ITEM,
		Item.QUICKWIRE_ITEM,
		Item.REINFORCED_IRON_PLATE_ITEM,
		Item.ROTOR_ITEM,
		Item.RUBBER_ITEM,
		Item.SCREW_ITEM,
		Item.SILICA_ITEM,
		Item.STATOR_ITEM,
		Item.STEEL_BEAM_ITEM,
		Item.STEEL_INGOT_ITEM,
		Item.STEEL_PIPE_ITEM,
		Item.SUPERCOMPUTER_ITEM,
		Item.WIRE_ITEM,
	];

	readonly name: string;
	readonly icon?: string;

	constructor(name: string, icon?: string) {
		this.name = name;
		this.icon = icon;
	}
}
