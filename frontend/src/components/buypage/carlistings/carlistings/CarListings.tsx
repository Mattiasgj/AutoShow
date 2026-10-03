import styles from "./CarListings.module.css";

import CarListingsHeader from "../carlistingsheader/CarListingsHeader";

function CarListings() {
	return (
		<div className={styles.carlistings}>
			<CarListingsHeader />
			<div className={styles.carlistingscontent}>
				{/* Car listings will be displayed here */}
			</div>
		</div>
	);
}

export default CarListings;
