import "../layouts/home/home.css";

import Navbar from "../components/root/Navbar";
import BuyYourCar from "../components/cartype/BuyYourCar";

export function Home() {
	return (
		<div className="home-grid">
			<Navbar></Navbar>
			<BuyYourCar></BuyYourCar>
		</div>
	);
}
