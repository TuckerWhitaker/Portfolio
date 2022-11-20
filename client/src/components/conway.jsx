import "./css/conway.css";
import React, { useState } from "react";
import { useEffect } from "react";
let w = 100;
let h = 300;
let G = 0;

function Conway() {
	useEffect(() => {
		Con();
	}, []);

	const Con = () => {
		let state = [];
		for (let i = 0; i < w; i++) {
			state.push([]);

			for (let j = 0; j < h; j++) {
				if (Math.floor(Math.random() * 11) > 8) {
					state[i].push(1);
				} else {
					state[i].push(0);
				}
			}
		}

		async function update() {
			for (let i = 0; i < w; i++) {
				for (let j = 0; j < h; j++) {
					if (state[i][j] == 0) {
						ctx.clearRect(i, j, 1, 1);
					} else if (state[i][j] == 1) {
						//white
						//#FFFFFF

						//gray
						//#646464
						ctx.fillStyle = "#FFFFFF";
						ctx.fillRect(i, j, 1, 1);
					}
				}
			}

			let newstate = [];
			for (let i = 0; i < w; i++) {
				newstate.push([]);
			}

			for (let i = 0; i < w; i++) {
				for (let j = 0; j < h; j++) {
					let n = 0;

					if (i == 0 || i == w - 1 || j == 0 || j == h - 1) {
						newstate[i][j] = 0;
					} else {
						n += state[i + 1][j];
						n += state[i + 1][j + 1];
						n += state[i + 1][j - 1];
						n += state[i][j + 1];
						n += state[i - 1][j + 1];
						n += state[i - 1][j - 1];
						n += state[i - 1][j];
						n += state[i][j - 1];

						if (state[i][j] == 0 && n == 3) {
							newstate[i][j] = 1;
						} else if (state[i][j] == 1) {
							if (n < 2 || n > 3) {
								//black
								newstate[i][j] = 0;
							}
						}
						if (newstate[i][j] == null) {
							newstate[i][j] = state[i][j];
						}
					}
				}
			}

			await delay(100);
			state = newstate;
			G++;

			if (G < 1000000) {
				update();
			}
		}

		function delay(time) {
			return new Promise((resolve) => setTimeout(resolve, time));
		}

		var c = document.getElementById("Canvas");
		var ctx = c.getContext("2d");
		ctx.moveTo(0, 0);

		ctx.fillStyle = "#FF0000";
		update();
	};

	return (
		<div className="Parent">
			<canvas id="Canvas" width={w} height={h}></canvas>
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

export default Conway;
