const listDiceImgs = [
  "../imgs/dice1.jpeg",
  "../imgs/dice2.jpeg",
  "../imgs/dice3.png",
  "../imgs/dice4.png",
  "../imgs/dice5.jpeg",
  "../imgs/dice6.png",
];
let timer = null;

function rollingDice() {
  const imgDiceEle = document.querySelector(".js-dice");
  timer = setInterval(() => {
    const randomDiceIndex = Math.floor(Math.random() * 6);
    console.log("randomDiceIndex", randomDiceIndex);

    imgDiceEle.src = listDiceImgs[randomDiceIndex];
  }, 100);
}

function refreshBtn(isStop) {
  const btnPlay = document.querySelector(".js-btn-play-game");

  if (isStop) {
    btnPlay.textContent = "Play";
  } else {
    btnPlay.textContent = "Stop";
  }
}

function main() {
  let isStop = true;
  refreshBtn(isStop);
  const btnPlay = document.querySelector(".js-btn-play-game");
  btnPlay.addEventListener("click", () => {
    if (isStop) {
      rollingDice();
    } else {
      clearInterval(timer);
    }

    isStop = !isStop;
    refreshBtn(isStop);
  });
}

main();
