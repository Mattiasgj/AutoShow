import "../layouts/home/home.css";

import Navbar from "../components/root/Navbar";
import BuyYourCar from "../components/cartype/BuyYourCar";
import CarFilter from "../components/carfilter/CarFilter";
import CarListings from "../components/carlistings/CarListings";

export function Home() {
	return (
		<div className="home">
			<Navbar />

			<main className="content-wrapper">
				<BuyYourCar />

				<div className="car-content">
					<CarFilter />
					<CarListings />
				</div>
			</main>
		</div>
	);
}
