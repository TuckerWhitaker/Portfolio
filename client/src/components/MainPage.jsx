import "./css/MainPage.css";
import Intro from "./intro";
import Project from "./project";
import Conway from "./conway";

function MainPage() {
	return (
		<div className="MainPage">
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

export default MainPage;
