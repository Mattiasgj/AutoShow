import { useState } from "react";

import volvoLogo from "../../../assets/brand-logos-main/volvo-logo.svg";
import bmwLogo from "../../../assets/brand-logos-main/bmw-logo.svg";
import mercedesLogo from "../../../assets/brand-logos-main/mercedes-benz-logo.svg";
import volkswagenLogo from "../../../assets/brand-logos-main/volkswagen-logo.svg";
import opelLogo from "../../../assets/brand-logos-main/opel-logo.svg";

import styles from "./BuyYourCar.module.css";

function BuyYourCar() {
	const [activeFilter, setActiveFilter] = useState("Sedan");

	const brands = [
		{ name: "Volvo", logo: volvoLogo },
		{ name: "BMW", logo: bmwLogo },
		{ name: "Mercedes", logo: mercedesLogo },
		{ name: "Volkswagen", logo: volkswagenLogo },
		{ name: "Opel", logo: opelLogo },
	];

	return (
		<div className={styles.buyyourcar}>
			<div className={styles.left}>
				<div className={styles.title}>Buy Your Dream Car</div>
			</div>

			<div className={styles.right}>
				{brands.map((brand) => (
					<button
						key={brand.name}
						className={`${styles.carcategory} ${
							activeFilter === brand.name ? styles.active : ""
						}`}
						onClick={() => setActiveFilter(brand.name)}
					>
						<img
							src={brand.logo}
							alt={brand.name}
							className={styles.caricon}
						/>

						<span className={styles.categoryname}>
							{brand.name}
						</span>
					</button>
				))}
			</div>
		</div>
	);
}

export default BuyYourCar;
