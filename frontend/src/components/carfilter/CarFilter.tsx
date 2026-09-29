import styles from "./CarFilter.module.css";
import SearchBar from "../searchbar/SearchBar";

function CarFilter() {
	return (
		<div className={styles.carfilter}>
			<SearchBar></SearchBar>
		</div>
	);
}

export default CarFilter;
