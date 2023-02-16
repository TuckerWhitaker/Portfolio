import "./css/MainPage.css";
import Intro from "./intro";
import Project from "./Project";
import Conway from "./conway";
import Projects from "../Projects/Chat.json";

function MainPage() {
	let projects = Projects.Projects;
	return (
		<div className="MainPage">
			<Conway></Conway>
			<div className="Container">
				<Intro></Intro>
				<div className="Title">Projects: </div>
				<div className="ProjectContainer">
					{projects.map((info, index) => {
						return (
							<Project key={"Project" + index} ProjectID={info.ProjectID} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default MainPage;
