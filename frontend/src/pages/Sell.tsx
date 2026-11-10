import "../layouts/sellpage/sell.css";

import Navbar from "../components/rootcomponents/Navbar";
import SellYourCarForm from "../components/sellpage/sellyourcarform/SellYourCarForm";

export function Sell() {
	return (
		<div className="sell">
			<Navbar />

			<main className="content-wrapper">
				<SellYourCarForm />
			</main>
		</div>
	);
}
