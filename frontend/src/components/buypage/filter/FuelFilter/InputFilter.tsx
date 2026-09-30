import styles from "./InputFilter.module.css";
import { useState } from "react";

interface InputFilterProps {
	options: Array<string>;
	headerText: string;
}

function InputFilter({ options, headerText }: InputFilterProps) {
	const [selectedFuelType, setSelectedFuelType] = useState("");

	return (
		<div className={styles.fuelfilter}>
			<div className={styles.fuelheader}>{headerText}</div>
			{options.map((fuelType) => (
				<div key={fuelType}>
					<div className={styles.fuelinput}>
						<input
							type="checkbox"
							checked={selectedFuelType === fuelType}
							onChange={() =>
								setSelectedFuelType(
									selectedFuelType === fuelType
										? ""
										: fuelType,
								)
							}
						/>

						<label className={styles.fuellabel}>{fuelType}</label>
					</div>
				</div>
			))}
		</div>
	);
}

export default InputFilter;
