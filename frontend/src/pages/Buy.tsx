import "../layouts/buypage/buy.css";

import Navbar from "../components/rootcomponents/Navbar";
import BuyYourCar from "../components/buypage/buyyourcar/BuyYourCar";
import CarFilter from "../components/buypage/filter/carfilter/CarFilter";
import CarListings from "../components/buypage/carlistings/carlistings/CarListings";

export function Buy() {
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
