let cells = document.getElementsByClassName("cell");
let winner_player = document.getElementById("winner_player");
let h3 = document.querySelector("h3");
let playagain = document.querySelector("p");
let audio = document.getElementById("myAudio");
let current_player = true;

const winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        if (current_player === true) {
            cells[i].innerText = "X";
            current_player = false;
        }
        else {
            cells[i].innerText = "O";
            current_player = true;
        }
        cells[i].disabled = true;
        winner();


    })
}

const disablebuttons = () => {
    for (let db = 0; db < cells.length; db++) {
        cells[db].disabled = true;
    }
}

const playagainbutton = () => {
    for (let eb = 0; eb < cells.length; eb++) {
        cells[eb].disabled = false;
        current_player = true;
        cells[eb].innerText = "";
        h3.classList.add("hide");
        audio.pause();
    }
}

const showinner = (win) => {
    winner_player.innerText = `"7" Thala for a reason! Congratulations Winner is ${win}`;
    h3.classList.remove("hide");
    disablebuttons();
}

const winner = () => {
    for (let pattern of winning_pattern) {
        let pos1 = cells[pattern[0]].innerText;
        let pos2 = cells[pattern[1]].innerText;
        let pos3 = cells[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showinner(pos1);
                audio.play();  
            }
        }
    }
}

playagain.addEventListener("click", playagainbutton);




