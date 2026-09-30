import styles from "./CarFilter.module.css";
import SearchBar from "../searchbar/SearchBar";
import CarMakeModel from "../carmakemodel/CarMakeModel";
import FilterSlider from "../filterslider/FilterSlider";

function CarFilter() {
	return (
		<div className={styles.carfilter}>
			<SearchBar></SearchBar>
			<CarMakeModel></CarMakeModel>
			<FilterSlider
				labelText="Max price: €"
				minVal={0}
				maxVal={100000}
				stepSize={500}
			/>
		</div>
	);
}

export default CarFilter;
