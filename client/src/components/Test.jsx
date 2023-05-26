import Description from "../Projects/Project.json";
import "./css/Test.css";

function Test() {
	console.log(Description);
	return (
		<div className="test">
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
			<div className="testText">brief description</div>
			<div className="testTagsContainer">tags</div>
			<div className="testVideo">video</div>
			<div className="testColumnContainer">
				<div className="testColumn">
					<button className="testColumnButton">Github</button>
					<h3 className="testColumnTitle">Learning Outcomes</h3>

					<div className="testColumnTextContainer">
						{Description.Column1.DescriptionTitles.map((info, index) => {
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
										{Description.Column1.DescriptionParagraphs[index]}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="testColumn">
					<button className="testColumnButton">Live</button>
					<h3 className="testColumnTitle">Challenges and Resolutions</h3>

					<div className="testColumnTextContainer">
						{Description.Column2.DescriptionTitles.map((info, index) => {
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
										{Description.Column2.DescriptionParagraphs[index]}
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

export default Test;
