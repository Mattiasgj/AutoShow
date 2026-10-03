import teslaImage from "../carimages/tesla.avif";
import bmwImage from "../carimages/bmw.avif";
import volkswagenImage from "../carimages/volkswagen.avif";
import volvoImage from "../carimages/volvo.avif";
import audiImage from "../carimages/audi.avif";

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
		imageUrl: teslaImage,
		make: "Tesla",
		model: "Model 3",
		year: 2021,
		price: 345000,
		milage: 2800,
		fuelType: "Electric",
		transmission: "Automatic",
	},
	{
		id: 2,
		title: "2019 BMW 330e M Sport",
		description:
			"Well-maintained BMW 3 Series featuring the M Sport trim package, leather sports seating, heads-up display, and efficient plug-in hybrid drive.",
		imageUrl: bmwImage,
		make: "BMW",
		model: "3 Series",
		year: 2019,
		price: 268000,
		milage: 5400,
		fuelType: "Plug-in Petrol",
		transmission: "Automatic",
	},
	{
		id: 3,
		title: "2018 Volkswagen Golf 1.5 TSI Highline",
		description:
			"Reliable and economical daily driver with full service documentation, adaptive cruise control, digital cockpit, and heated front seats.",
		imageUrl: volkswagenImage,
		make: "Volkswagen",
		model: "Golf",
		year: 2018,
		price: 152000,
		milage: 7200,
		fuelType: "Petrol",
		transmission: "Manual",
	},
	{
		id: 4,
		title: "2022 Volvo XC60 Recharge T6 AWD",
		description:
			"Luxurious midsize SUV equipped with panoramic sunroof, Bowers & Wilkins premium sound, Pilot Assist semi-autonomous driving, and complete safety suite.",
		imageUrl: volvoImage,
		make: "Volvo",
		model: "XC60",
		year: 2022,
		price: 489000,
		milage: 1950,
		fuelType: "Plug-in Petrol",
		transmission: "Automatic",
	},
	{
		id: 5,
		title: "2020 Audi A4 Avant 40 TDI Quattro",
		description:
			"Spacious estate featuring Audi Virtual Cockpit, Matrix LED headlights, Quattro all-wheel drive, and dynamic highway cruising capability.",
		imageUrl: audiImage,
		make: "Audi",
		model: "A4",
		year: 2020,
		price: 310000,
		milage: 4300,
		fuelType: "Diesel",
		transmission: "Automatic",
	},
];
