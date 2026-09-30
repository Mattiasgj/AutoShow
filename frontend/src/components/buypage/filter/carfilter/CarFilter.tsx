import styles from "./CarFilter.module.css";
import SearchBar from "../searchbar/SearchBar";
import CarMake from "../carmakemodel/CarMakeModel";

function CarFilter() {
	return (
		<div className={styles.carfilter}>
			<SearchBar></SearchBar>
			<CarMake></CarMake>
		</div>
	);
}

export default CarFilter;
