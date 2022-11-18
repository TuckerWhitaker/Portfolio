import "./App.css";
import Intro from "./components/intro";
import Project from "./components/project";
import Conway from "./components/conway";

/* <Intro></Intro>
			<h1 className="Title">Projects: </h1>
			<div className="ProjectContainer">
				<Project />
				<Project />
				<Project />
			</div>*/

function App() {
	return (
		<div className="App">
			<Conway></Conway>
		</div>
	);
}

export default App;
