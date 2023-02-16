import "./css/ProjectPage.css";
import { useParams } from "react-router-dom";
import Projects from "../Projects/Chat.json";

function ProjectPage() {
	let { ProjectID } = useParams();
	let Project = Projects.Projects[ProjectID];
	let ProjectTags = Project.Tags;

	console.log(Project.Image);
	return (
		<div className="ProjectPage">
			<div className="ProjectPageColumn">
				<div className="ProjectPageTitle">{Project.ProjectName}</div>
				<img src={Project.Image} alt="uh oh" className="ProjectPageImage"></img>

				<div className="ProjectPageTagParent">
					{ProjectTags.map((info, index) => {
						return (
							<div className="ProjectPageTag" key={"PPT" + index}>
								{info}
							</div>
						);
					})}
				</div>

				<div className="ProjectPageBtnParent">
					<button
						className="ProjectPageBtn"
						onClick={() => {
							window.location.href = Project.LiveLink;
						}}
					>
						Live
					</button>
					<button
						className="ProjectPageBtn"
						onClick={() => {
							window.location.href = Project.GitHubLink;
						}}
					>
						Github
					</button>
				</div>
			</div>
			<div className="ProjectPageColumn">
				<div className="ProjectPageDescription">
					{Project.Description.map((info, index) => {
						return (
							<div key={"PPDP" + index}>
								<h2
									className="ProjectPageDescriptionTitle"
									key={"PPDT" + index}
								>
									{info.Title}
								</h2>
								<div
									className="ProjectPageDescriptionSection"
									key={"PPDS" + index}
								>
									{info.Paragraph}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectPage;

//ProjectPageColumn
