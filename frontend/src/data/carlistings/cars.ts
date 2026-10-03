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

export const mockCarListings: CarListing[] = [
	{
		id: 1,
		title: "2021 Tesla Model 3 Long Range AWD",
		description:
			"Pristine condition Model 3 with Full Self-Driving capability, Premium interior, cold weather package, and full service history.",
		imageUrl: "../carimages/tesla.avif",
		make: "Tesla",
		model: "Model 3",
		year: 2021,
		price: 34500,
		milage: 28000,
		fuelType: "Electric",
		transmission: "Automatic",
	},
	{
		id: 2,
		title: "2019 BMW 330e M Sport",
		description:
			"Well-maintained BMW 3 Series featuring the M Sport trim package, leather sports seating, heads-up display, and efficient plug-in hybrid drive.",
		imageUrl: "../carimages/bmw.avif",
		make: "BMW",
		model: "3 Series",
		year: 2019,
		price: 26800,
		milage: 54000,
		fuelType: "Plug-in Petrol",
		transmission: "Automatic",
	},
	{
		id: 3,
		title: "2018 Volkswagen Golf 1.5 TSI Highline",
		description:
			"Reliable and economical daily driver with full service documentation, adaptive cruise control, digital cockpit, and heated front seats.",
		imageUrl: "../carimages/volkswagen.avif",
		make: "Volkswagen",
		model: "Golf",
		year: 2018,
		price: 15200,
		milage: 72000,
		fuelType: "Petrol",
		transmission: "Manual",
	},
	{
		id: 4,
		title: "2022 Volvo XC60 Recharge T6 AWD",
		description:
			"Luxurious midsize SUV equipped with panoramic sunroof, Bowers & Wilkins premium sound, Pilot Assist semi-autonomous driving, and complete safety suite.",
		imageUrl: "../carimages/volvo.avif",
		make: "Volvo",
		model: "XC60",
		year: 2022,
		price: 48900,
		milage: 19500,
		fuelType: "Plug-in Petrol",
		transmission: "Automatic",
	},
	{
		id: 5,
		title: "2020 Audi A4 Avant 40 TDI Quattro",
		description:
			"Spacious estate featuring Audi Virtual Cockpit, Matrix LED headlights, Quattro all-wheel drive, and dynamic highway cruising capability.",
		imageUrl: "../carimages/audi.avif",
		make: "Audi",
		model: "A4",
		year: 2020,
		price: 31000,
		milage: 43000,
		fuelType: "Diesel",
		transmission: "Automatic",
	},
];
