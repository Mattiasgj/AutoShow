import styles from "./CarMake.module.css";
import carMakes from "../../../../data/CarMakes";
import { useState } from "react";

function CarMakeModel() {
	const [selectedMake, setSelectedMake] = useState("");
	const [selectedModel, setSelectedModel] = useState("");

	type CarMake = keyof typeof carMakes;

	return (
		<div className={styles.carmakemodel}>
			<div className={styles.makemodelheader}>Make and model</div>

			{(Object.keys(carMakes) as CarMake[]).map((make) => (
				<div key={make}>
					<div className={styles.makemodelinput}>
						<input
							type="checkbox"
							checked={selectedMake === make}
							onChange={() =>
								setSelectedMake(
									selectedMake === make ? "" : make,
								)
							}
						/>

						<label>{make}</label>
					</div>

					{selectedMake === make && (
						<div className={styles.models}>
							{carMakes[make].map((model) => (
								<div key={model}>
									<input
										type="checkbox"
										checked={selectedModel === model}
										onChange={() => setSelectedModel(model)}
									/>

									<label>{model}</label>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default CarMakeModel;
