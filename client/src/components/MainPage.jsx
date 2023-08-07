import Projects from "../Projects/Chat.json";
import Project from "./Project";
import "./css/MainPage.css";
import Intro from "./intro";

function MainPage() {
	let projects = Projects.Projects;
	return (
		<div className="MainPage" id="MainPage">
			<div className="MPColumn">
				<Intro></Intro>
			</div>{" "}
			<div className="MPColumn">
				<div className="Container">
					<div className="ProjectContainer">
						{projects.map((info, index) => {
							return (
								<Project key={"Project" + index} ProjectID={info.ProjectID} />
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
