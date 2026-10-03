import styles from "./CarListingsHeader.module.css";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";

function CarListingsHeader() {
	const [numberOfCars, setNumberOfCars] = useState(0);
	const sortOptions = [
		"Price: Low to High",
		"Price: High to Low",
		"Year: Newest First",
		"Year: Oldest First",
	];

	return (
		<div className={styles.carlistingsheader}>
			<span className={styles.headertext}>Used cars for sale</span>
			<span className={styles.results}>{numberOfCars} Results</span>

			<div className={styles.buttonwrapper}>
				<button className={styles.removefiltersbutton}>
					<span>Remove Filters</span>
				</button>
				<Dropdown title="Sort By" content={sortOptions} />
			</div>
		</div>
	);
}

export default CarListingsHeader;
