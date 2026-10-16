import type { Listing } from "../types/listing";

const API_URL = "http://localhost:5221/api/listings";

export async function GetListings(): Promise<Listing[]> {
	const response = await fetch(API_URL);

	if (!response.ok) {
		throw new Error("Failed to fetch car listings");
	}

	return response.json();
}
