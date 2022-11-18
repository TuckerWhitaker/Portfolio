import "./css/conway.css";

let w = 100;
function conway() {
	return (
		<div className="Parent">
			<button
				onClick={() => {
					Con();
				}}
			>
				Click
			</button>
			<canvas id="Canvas" width={w} height={w}></canvas>
		</div>
	);
}

/*
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(0, 0);
    ctx.clearRect(0, 0, w, w);
*/

let G = 0;
const Con = () => {
	let r = 0;
	async function update() {
		ctx.moveTo(0, 0);
		ctx.clearRect(0, 0, w, w);
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, w, w);
		for (let i = 0; i < w; i++) {
			for (let j = 0; j < w; j++) {
				if (r == i * w + j) {
					ctx.fillStyle = "#FF0000";
					ctx.fillRect(i + 1, j, 1, 1);
					ctx.fillRect(i - 1, j, 1, 1);
					ctx.fillRect(i, j + 1, 1, 1);
					ctx.fillRect(i, j - 1, 1, 1);

					ctx.fillStyle = "#ffffff";
					ctx.fillRect(i, j, 1, 1);
				}
			}
		}
		await delay(1);
		G++;
		r++;
		if (G < 10000) {
			update();
		}
	}

	function delay(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}

	var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(0, 0);

	ctx.fillStyle = "#000000";
	update();
};

export default conway;
