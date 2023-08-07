import {
	Route,
	BrowserRouter as Router,
	Routes,
	useParams,
} from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import ProjectPage from "./components/ProjectPage";
function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/Project/:ProjectID" element={<ProjectPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
