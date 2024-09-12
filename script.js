const newbtn = document.querySelector("#newbtn");
const resetbtn = document.querySelector("#resetbtn");
const boxes = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector(".msgcontainer");

const winnerpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turno = true;
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turno ? "O" : "X";
        box.disabled = true;
        turno = !turno;
        count++;

        let isWinner = checkwinner();

        if (!isWinner && count === 9) {
            gamedraw();
        }
    });
});

const checkwinner = () => {
    for (let pattern of winnerpattern) {
        let [a, b, c] = pattern;
        let pos1val = boxes[a].innerText;
        let pos2val = boxes[b].innerText;
        let pos3val = boxes[c].innerText;

        if (pos1val && pos1val === pos2val && pos2val === pos3val) {
            showwinner(pos1val);
            return true;
        }
    }
    return false;
};

const showwinner = (winner) => {
    msg.innerText = `WINNER OF THE GAME IS: ${winner}`;
    disbaleboxes();
};

const disbaleboxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableboxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const newgame = () => {
    msg.innerText = "NEW GAME START";
    enableboxes();
    count = 0;
    turno = true;
};

const resetgame = () => {
    msg.innerText = "RESET";
    enableboxes();
    count = 0;
    turno = true;
};

const gamedraw = () => {
    msg.innerText = "GAME IS DRAW";
    disbaleboxes();
    count = 0;
};

newbtn.addEventListener("click", newgame);
resetbtn.addEventListener("click", resetgame);
