import "./App.css";
import Intro from "./components/intro";
import Project from "./components/project";
import Conway from "./components/conway";

/* <div><Intro></Intro>
			<h1 className="Title">Projects: </h1>
			<div className="ProjectContainer">
				<Project />
				<Project />
				<Project />
			</div></div>*/

function App() {
	return (
		<div className="App">
			<Conway></Conway>
			<div className="Container">
				<Intro></Intro>
				<div className="Title">Projects: </div>
				<div className="ProjectContainer">
					<Project />
					<Project />
					<Project />
				</div>
			</div>
		</div>
	);
}

export default App;
