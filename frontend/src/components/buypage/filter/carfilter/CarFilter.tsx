import styles from "./CarFilter.module.css";
import SearchBar from "../searchbar/SearchBar";
import CarMakeModel from "../carmakemodel/CarMakeModel";
import FilterSlider from "../filterslider/FilterSlider";
import InputFilter from "../FuelFilter/InputFilter";

function CarFilter() {
	const fuelOptions = [
		"Petrol",
		"Diesel",
		"Electric",
		"Ethanol",
		"Hybrid Petrol",
		"Hybrid Diesel",
		"Plug-in Petrol",
		"Plugin-Diesel",
	];

	const transmissionOptions = ["Manual", "Automatic"];

	return (
		<div className={styles.carfilter}>
			<SearchBar></SearchBar>

			<CarMakeModel></CarMakeModel>

			<Divider></Divider>

			<FilterSlider
				labelText="Max price: €"
				minVal={0}
				maxVal={100000}
				stepSize={500}
			/>

			<FilterSlider
				labelText="Year model: "
				minVal={1950}
				maxVal={2027}
				stepSize={1}
			/>

			<FilterSlider
				labelText="Milage: "
				minVal={0}
				maxVal={20000}
				stepSize={250}
			/>

			<Divider></Divider>

			<InputFilter options={fuelOptions} headerText="Fuel"></InputFilter>
			<Divider></Divider>
			<InputFilter
				options={transmissionOptions}
				headerText="Transmission"
			></InputFilter>
		</div>
	);
}

const Divider = () => {
	return <hr style={{ border: "1px solid lightgrey", width: "100%" }}></hr>;
};

export default CarFilter;
