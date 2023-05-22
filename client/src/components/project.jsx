import Projects from "../Projects/Chat.json";
import "./css/project.css";

function Project(props) {
	let Project = Projects.Projects[props.ProjectID];
	let ProjectTags = Project.Tags;

	return (
		<div className="project">
			<div className="Columns">
				<div className="ImageColumn">
					<img
						src={Project.Image}
						alt="Italian Trulli"
						className="ProjectImage"
					></img>

					<div className="TagContainer">
						{ProjectTags.map((info, index) => {
							return (
								<div className="tag" key={"PT" + index}>
									{info}
								</div>
							);
						})}
					</div>
				</div>
				<div className="InfoColumn">
					<div className="ProjectTitle">{Project.ProjectName}</div>
					<div className="ProjectDescription">
						{Project.Description[0].Paragraph}
					</div>
				</div>
			</div>
			<div className="ButtonContainer">
				<button className="ProjectButton" id="GithubBtn">
					Demo
				</button>
				<button
					className="ProjectButton"
					id="LiveBtn"
					onClick={() => {
						window.location.href =
							"http://localhost:3000/project/" + props.ProjectID;
					}}
				>
					More Info
				</button>
			</div>
		</div>
	);
}

export default Project;
