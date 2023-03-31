// Inisialisasi variabel
let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameover = false;

// Tambahkan event listener click ke semua cell
let cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!gameover && board[cell.id] == "") {
            board[cell.id] = player;
            cell.textContent = player;
            checkWinner();
            changePlayer();
        }
    });
});

// Tambahkan event listener click ke tombol reset
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGame);

// Fungsi untuk memeriksa pemenang
function checkWinner() {
    let winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningPositions.length; i++) {
        let [a, b, c] = winningPositions[i];
        if (board[a] != "" && board[a] == board[b] && board[b] == board[c]) {
            gameover = true;
            document.querySelector("#message").textContent = `Player ${player} menang!`;
            return;
        }
    }

    // Periksa apakah permainan seri
    if (!board.includes("")) {
        gameover = true;
        document.querySelector("#message").textContent = "Permainan seri!";
    }
}

// Fungsi untuk mengganti pemain
function changePlayer() {
    player = player == "X" ? "O" : "X";
}

// Fungsi untuk mereset permainan
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    player = "X";
    gameover = false;
    cells.forEach(cell => {
        cell.textContent = "";
    });
    document.querySelector("#message").textContent = "";
}