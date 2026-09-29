import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Buy } from "./pages/Buy";

import "./layouts/index.css";

function App() {
	return (
		<Router>
			<div className="page-container">
				<Routes>
					<Route path="/buy" element={<Buy />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
