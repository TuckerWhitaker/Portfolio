import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from "../Projects/Project.json";
import "./css/ProjectPage.css";
function ProjectPage() {
	console.log(Description);
	useEffect(() => {
		setTimeout(() => {
			document.getElementById("0").style.filter = "blur(0)";
		}, 1000); // This delay is just for demonstration purposes.
	}, []);
	let { ProjectID } = useParams();
	let Project = Description.Projects[ProjectID];

	return (
		<div className="test" id="0">
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
			<h1 className="testTitle">Chat App</h1>
			<div className="testMain">
				<div className="testText">
					This chat application, developed as my first major undertaking,
					leverages a host of modern technologies, including React, Node.js,
					WebSockets, and MySQL for seamless user authentication, real-time
					messaging, and secure password hashing. The project also employed AWS
					for deployment, all combined to create a robust and responsive web
					app.
				</div>

				<div className="testVideo">
					<iframe
						id="YoutubeVideo"
						width="600"
						height="350"
						src="https://www.youtube.com/embed/lJIrF4YjHfQ"
						title="Embed videos and playlists"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
						allowfullscreen
					></iframe>
				</div>
			</div>
			<div className="testButtonContainer">
				<button
					className="testColumnButton GithubButton"
					onClick={() => {
						window.open("https://github.com/TuckerWhitaker/Chat");
					}}
				>
					Github
				</button>
				<button className="testColumnButton">Live</button>
			</div>
			<div className="testColumnContainer">
				<div className="testColumn">
					<h3 className="testColumnTitle">Learning Outcomes</h3>

					<div className="testColumnTextContainer">
						{Project.Column1.DescriptionTitles.map((info, index) => {
							return (
								<div key={"DescParent" + index}>
									<div
										key={"DescTitles" + index}
										className="testColumnTextSubTitle"
									>
										{info}
									</div>
									<div
										className="testColumnText"
										key={"DescParagraphs" + index}
									>
										{Project.Column1.DescriptionParagraphs[index]}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="testColumn">
					<h3 className="testColumnTitle">Challenges and Resolutions</h3>

					<div className="testColumnTextContainer">
						{Project.Column2.DescriptionTitles.map((info, index) => {
							return (
								<div key={"DescParent" + index}>
									<div
										key={"DescTitles" + index}
										className="testColumnTextSubTitle"
									>
										{info}
									</div>
									<div
										className="testColumnText"
										key={"DescParagraphs" + index}
									>
										{Project.Column2.DescriptionParagraphs[index]}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectPage;
