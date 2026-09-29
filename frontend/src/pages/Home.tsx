import "../layouts/home/home.css";

import Navbar from "../components/root/Navbar";
import BuyYourCar from "../components/cartype/BuyYourCar";
import CarFilter from "../components/carfilter/CarFilter";
import CarListings from "../components/carlistings/CarListings";

export function Home() {
	return (
		<div className="home-grid">
			<Navbar></Navbar>
			<BuyYourCar></BuyYourCar>
			<CarFilter></CarFilter>
			<CarListings></CarListings>
		</div>
	);
}
