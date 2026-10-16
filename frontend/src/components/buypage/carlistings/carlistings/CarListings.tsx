import styles from "./CarListings.module.css";

import CarListingsHeader from "../carlistingsheader/CarListingsHeader";
import { useListings } from "../../../../fetching/hooks/useListings";
import type { Listing } from "../../../../fetching/types/listing";

function CarListings() {
	const { listings, loading, error } = useListings();

	if (loading) return <p>Loading</p>;
	if (error) return <p>{error}</p>;

	listings.forEach((car: Listing) => {
		console.log(car.images[0]);
	});

	return (
		<div className={styles.carlistingscard}>
			<CarListingsHeader />

			<div className={styles.carlistingscontent}>
				{listings.map((car: Listing) => (
					<div key={car.id} className={styles.carlisting}>
						<div className={styles.carimagecontainer}>
							<img
								src={`/carimages/${car.images[0]}`}
								alt={car.title}
								className={styles.carimage}
							/>
						</div>
						<div className={styles.carinfocontainer}>
							<div className={styles.carinfo}>
								<div className={styles.cartitle}>
									{car.title}
								</div>
								<span className={styles.cardescription}>
									{car.description}
								</span>
								<div className={styles.carsummary}>
									<div>{car.year}</div>
									<div>{car.mileage.toLocaleString()} km</div>
									<div>{car.fuelType}</div>
									<div>{car.transmission}</div>
								</div>
							</div>

							<span className={styles.carprice}>
								{car.price.toLocaleString()} kr
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CarListings;
