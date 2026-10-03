import styles from "./CarListings.module.css";

import CarListingsHeader from "../carlistingsheader/CarListingsHeader";

function CarListings() {
	return (
		<div className={styles.carlistings}>
			<CarListingsHeader />
			<div></div>
		</div>
	);
}

export default CarListings;
