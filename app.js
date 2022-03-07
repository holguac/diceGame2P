const body = document.getElementById("game");
const header = document.querySelector(".header");

const areaPlayer1 = document.getElementById("areaPlayer1");
const scoreContainer1 = document.querySelector(".score-container-1");
const scorePlayer1 = document.getElementById("scorePlayer1");
const imageContainer1 = document.querySelector(".image-container-1");
const imagePlayer1 = document.getElementById("imagePlayer1");
const rollText1 = document.getElementById("rollText1");
const rollPlayer1 = document.getElementById("rollPlayer1");
const passPlayer1 = document.getElementById("passPlayer1");


const areaPlayer2 = document.getElementById("areaPlayer2");
const scoreContainer2 = document.querySelector(".score-container-2");
const scorePlayer2 = document.getElementById("scorePlayer2");
const imageContainer2 = document.querySelector(".image-container-2");
const imagePlayer2 = document.getElementById("imagePlayer2");
const rollText2 = document.getElementById("rollText2");
const rollPlayer2 = document.getElementById("rollPlayer2");
const passPlayer2 = document.getElementById("passPlayer2");

const playAgain = document.getElementById("playAgain");


let player1Total = 0;
let player2Total = 0;
let currentPlayer = 1;

if ((currentPlayer = 1)) {
	rollText2.textContent = "PLAYER ONE IS ROLLING";
} else if ((currentPlayer = 2)) {
	rollText1.textContent = "PLAYER TWO IS ROLLING";
}


const winPlayer1 = () => {
	scorePlayer1.textContent = `${player1Total} WINNER!`;
	player1Total = 0;
};
const losePlayer1 = () => {
	scorePlayer1.textContent = `${player1Total} LOSER`;
	player1Total = 0;
};
const winPlayer2 = () => {
	scorePlayer2.textContent = `${player2Total} WINNER!`;
	scorePlayer2.style.fontWeight = "bold";
	player2Total = 0;
};
const losePlayer2 = () => {
	scorePlayer2.textContent = `${player2Total} LOSER!`;
	scorePlayer2.style.fontWeight = "bold";
	player2Total = 0;
};


rollPlayer1.addEventListener("click", () => {
	if (currentPlayer == 1) {
		let currentRoll = Math.ceil(Math.random() * 6);

		rollText1.style.display = "none";
		imageContainer1.style.display = "block";
		imagePlayer1.src = `./images/${currentRoll}.png`;
		player1Total += currentRoll;
		scorePlayer1.textContent = player1Total;

		if (player1Total >= 20) {
		
			winPlayer1();
		
			losePlayer2();
		} else {
			if (currentRoll == 1) {
				
				losePlayer1();
				
				winPlayer2();
			}
		}
	}
});


rollPlayer2.addEventListener("click", () => {
	if (currentPlayer == 2) {
		let currentRoll = Math.ceil(Math.random() * 6);

		rollText2.style.display = "none";
		imageContainer2.style.display = "block";
		imagePlayer2.src = `./images/${currentRoll}.png`;

		player2Total += currentRoll;
		scorePlayer2.textContent = player2Total;

		if (player2Total >= 20) {
			
			winPlayer2();
		
			losePlayer1();
		} else {
			if (currentRoll == 1) {
				
				losePlayer2();
				
				winPlayer1();
			}
		}
	}
});


passPlayer1.addEventListener("click", () => {
	if (currentPlayer == 1) {
		currentPlayer = 2;
		rollText2.textContent = "ROLL";
	}
});
passPlayer2.addEventListener("click", () => {
	if (currentPlayer == 2) {
		currentPlayer = 1;
	}
});


playAgain.addEventListener("click", () => {
	window.location.reload();
});
