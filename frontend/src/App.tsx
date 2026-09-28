import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import "./layouts/index.css";

function App() {
	return (
		<Router>
			<div className="page-container">
				<Routes>
					<Route path="/buy" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
