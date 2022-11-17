import "./css/project.css";

function project() {
	return (
		<div className="project">
			<div className="Columns">
				<div className="ImageColumn">
					<img
						src="Chat.PNG"
						alt="Italian Trulli"
						className="ProjectImage"
					></img>

					<div className="TagContainer">
						<div className="tag">React</div>
						<div className="tag">NodeJS</div>
						<div className="tag">MySQL</div>
						<div className="tag">Websockets</div>
						<div className="tag">MongoDB</div>
					</div>
				</div>
				<div className="InfoColumn">
					<div className="ProjectTitle">Title</div>
					<div className="ProjectDescription">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
						dictum varius duis at consectetur lorem donec. Ultricies tristique
						nulla aliquet enim tortor at. Tempus urna et pharetra pharetra. Nunc
						consequat interdum varius sit amet mattis. Enim neque volutpat ac
						tincidunt vitae semper quis lectus nulla. Neque viverra justo nec
						ultrices dui sapien eget mi proin. Ut consequat semper viverra nam
						libero justo laoreet sit amet. Viverra suspendisse potenti nullam ac
						tortor vitae purus.
					</div>
				</div>
			</div>
			<div className="ButtonContainer">
				<button className="ProjectButton" id="GithubBtn">
					Github
				</button>
				<button className="ProjectButton" id="LiveBtn">
					More Info
				</button>
			</div>
		</div>
	);
}

export default project;
