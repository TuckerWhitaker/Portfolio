import "./css/ProjectPage.css";

function ProjectPage() {
	return (
		<div className="ProjectPage">
			<div className="ProjectPageColumn">
				<div className="ProjectPageTitle">Title</div>
				<img
					src="Chat.PNG"
					alt="Italian Trulli"
					className="ProjectPageImage"
				></img>

				<div className="ProjectPageTagParent">
					<div className="ProjectPageTag">React</div>
					<div className="ProjectPageTag">MySQL</div>
					<div className="ProjectPageTag">Websockets</div>
					<div className="ProjectPageTag">Other Tags</div>
				</div>

				<div className="ProjectPageBtnParent">
					<button className="ProjectPageBtn">Live</button>
					<button
						className="ProjectPageBtn"
						onClick={() => {
							window.location.href = "https://github.com/TuckerWhitaker/Chat";
						}}
					>
						Github
					</button>
				</div>
			</div>
			<div className="ProjectPageColumn">
				<div className="ProjectPageDescription">
					<h2 className="ProjectPageDescriptionTitle">Title</h2>
					<div className="ProjectPageDescriptionSection">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
						volutpat ac tincidunt vitae semper quis lectus. Et malesuada fames
						ac turpis. Nibh praesent tristique magna sit amet purus gravida quis
						blandit. Habitant morbi tristique senectus et netus et.
					</div>
					<h2 className="ProjectPageDescriptionTitle">Title</h2>
					<div className="ProjectPageDescriptionSection">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
						volutpat ac tincidunt vitae semper quis lectus. Et malesuada fames
						ac turpis. Nibh praesent tristique magna sit amet purus gravida quis
						blandit. Habitant morbi tristique senectus et netus et.
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectPage;

//ProjectPageColumn
