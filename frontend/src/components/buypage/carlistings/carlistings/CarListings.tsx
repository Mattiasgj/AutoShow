import styles from "./CarListings.module.css";

import CarListingsHeader from "../carlistingsheader/CarListingsHeader";
import { mockCarListings } from "../../../../data/carlistings/cars";

function CarListings() {
	return (
		<div className={styles.carlistingscard}>
			<CarListingsHeader />

			<div className={styles.carlistingscontent}>
				{mockCarListings.map((car) => (
					<div key={car.id} className={styles.carlisting}>
						<div className={styles.carimagecontainer}>
							<img
								src={car.imageUrl}
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
									<div>{car.milage.toLocaleString()} km</div>
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
