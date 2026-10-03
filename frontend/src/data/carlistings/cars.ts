export interface CarListing {
	id: number;
	title: string;
	description: string;
	imageUrl: string;

	make: string;
	model: string;
	year: number;
	price: number;
	milage: number;
	fuelType:
		| "Petrol"
		| "Diesel"
		| "Electric"
		| "Hybrid"
		| "Ethanol"
		| "Hybrid Petrol"
		| "Hybrid Diesel"
		| "Plug-in Petrol"
		| "Plug-in Diesel";
	transmission: "Manual" | "Automatic";
}
