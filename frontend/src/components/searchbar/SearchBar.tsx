import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

function SearchBar() {
	return (
		<div className={styles.searchbar}>
			<Search></Search>
			<input placeholder="Type to search..." />
		</div>
	);
}

export default SearchBar;
