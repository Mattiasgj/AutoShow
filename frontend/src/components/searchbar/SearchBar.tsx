import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

function SearchBar() {
	return (
		<div className={styles.searchbar}>
			<Search className={styles.searchicon}></Search>
			<input
				placeholder="Type to search..."
				className={styles.inputfield}
			/>
		</div>
	);
}

export default SearchBar;
