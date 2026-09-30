import styles from "./FilterSlider.module.css";
import { useState } from "react";

interface FilterSliderProps {
	labelText: string;
	minVal: number;
	maxVal: number;
	stepSize: number;
}

function FilterSlider({
	labelText,
	minVal,
	maxVal,
	stepSize,
}: FilterSliderProps) {
	const [value, setValue] = useState(20000);

	return (
		<div className={styles.filterlider}>
			<label className={styles.filtersliderlabel}>
				{labelText} {value.toLocaleString()}
			</label>

			<input
				className={styles.filtersliderinput}
				type="range"
				min={minVal}
				max={maxVal}
				step={stepSize}
				value={value}
				onChange={(e) => setValue(Number(e.target.value))}
			/>
		</div>
	);
}

export default FilterSlider;
