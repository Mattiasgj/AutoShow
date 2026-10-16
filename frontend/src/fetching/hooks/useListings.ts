import { useEffect, useState } from "react";
import { GetListings } from "../api/listingsApi";
import type { Listing } from "../types/listing";

export function useListings() {
	const [listings, setListings] = useState<Listing[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchListings() {
			try {
				setLoading(true);
				setError(null);

				const data = await GetListings();
				setListings(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Something went wrong",
				);
			} finally {
				setLoading(false);
			}
		}

		fetchListings();
	}, []);

	return { listings, loading, error };
}
