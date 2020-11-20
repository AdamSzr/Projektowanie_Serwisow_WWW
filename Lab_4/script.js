//#region inicjalizacja
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('tetris_field');
const context = canvas.getContext('2d');
// const banner= document.getElementById('result');
// banner.style.visibility='hidden';

// const btn_resume = document.getElementById('resume_game');

// btn_resume.addEventListener('click',(e)=>{
//     this.banner.visibility='visible';
//     time.gameEnd=false;
// });

context.fillRect(0, 0, canvas.width, canvas.height); // czarny background
context.scale(20, 20); // powi�kszenie 
//#endregion

//#region stale
const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
]; // kolory,
const pieces = 'TJLOSZI'; //mozliwe puzle
//#endregion 



function createPiece(type) { // ka�dy puzel ma inny kolor dlatego od 1 do 7
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function arrNotContain(arr, value) {
    return arr.every(arg => arg != value); // zwraca true, jesli w tablicy nie ma elementu value
}




function checkFullRows() { // metoda odpowiadaj�ca za sprawdzenie czy ulozony parter. 
    let rowCount = 1;

    for (let y = arena.length - 1; y > 0; --y) { // zaczynamy od parteru

        if (arrNotContain(arena[y], 0)) {
            // jesli napotka w kt�rym� pietrze cala linie zaj�ta to...
            const spli = arena.splice(y, 1); // wycina ost linie 
            const row = spli[0].fill(0); // zeruje 
            arena.unshift(row); // dodaje wyczszczona linie na gory
            ++y; // wracamy nizej o 1 bo moze byc, tak ze spadnie w miejsce usuniecia nowy pelen row.

            player.score += rowCount * 10; // naliczenie pkt. dla gracza
            rowCount *= 2; // bonus pkt gdy masz combo (wiele lini pelnych)
            this.gameEnd=true;
        }
    }
}


function createMatrix(w, h) {  // tworzenie planszy.
    const matrix = new Array(h);
    for (var i = 0; i < h; i++) {
        matrix[i] = new Array(w).fill(0); // wypelnij 0.
    }

    return matrix;
}

function collide(arena, player) { // return true jesli na siebie nachodza.
    const m = player.matrix; // puzel
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 // czy w puzlu [3,3] , komorka posiada wartość (zajmuje miejsce na planszy)
                && (arena[y + o.y] !=null /* czy linia nie jest pusta */ 
                    && arena[y + o.y][x + o.x]) !== 0 /* czy pole na planszy nie jest puste */)  
            { 
                return true; 
            }
        }
    }
    return false;
}



function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--; 
        merge(arena, player); // nalozenie puzel na plansze.
        playerReset(); 
        checkFullRows();
        updateScore();
    }
    last_update_time = 0;
}

function playerRotate(side) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, side);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -side);
            player.pos.x = pos;
            return;
        }
    }
}


function playerReset() {
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]); // losowanie puzla

    player.pos.y = 0; // pkt y startowy 
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0); //pkt x startowy puzla

    if (collide(arena, player)) { // sprwdzenie czy nowy puzel b�dzie kolidowal na pozycji startowej.
        if (confirm("U lost. \r\nPlay again?")) {
            arena.forEach(row => row.fill(0)); // czyscimy cala plansze cala plansza z wartosciami 0;
            player.score = 0; //reset pkt
            updateScore(); // wyswietlenie pkt.
        }
        else {
            gameEnd = true;
        }

    }
}

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(arena, { x: 0, y: 0 }); // cala plansza czarna.
    drawMatrix(player.matrix, player.pos); // nanie� puzel na plansze.
}

function playerMove(offset) { // zmienia pozycj� klocka horyzontalnie.
    player.pos.x += offset;
    if (collide(arena, player)) { // spradzenie czy mozna przestawi� klocek
        player.pos.x -= offset;
    }   
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) { // lustrzane odbicie puzla. 
            var zx = [
                matrix[x][y],
                matrix[y][x],
            ];
            var xx = [
                matrix[y][x],
                matrix[x][y],
            ];
            zx = xx;
        }
    }

    if (dir > 0) { // W prawo
        matrix.forEach(row => row.reverse());
    } else { // w lewo
        matrix.reverse();
    }
}

function merge(arena, player) { // jesli nie wykryto kolizji naloz na arene puzel.
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) { // puzel ma 9 elementów, lecz tylko te co wartość !=0 rysujemy.
                arena[y + player.pos.y][x + player.pos.x] = value; // dodaje poloznie playera do puzla aby ustalic poprawna pkt(x,y)
            }
        });
    });
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => { // dla kazdego wiersza, index jest przechowywany w zmienn y
        row.forEach((value, x) => { // dla kazdego wiersza, index jest przechowywany w zmienn x
            if (value !== 0) { // jesli cos jest na tym miejscu. ( puzel) to koloruj 
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);// KOLOROWANIE
            }
        });
    });
}


let last_update_time = 0;

let dropInterval = 1000; // jak cz�sto refresh field
let gameEnd = false;
let lastTime = 0;

function updateScore() {
    document.getElementById('score').innerText = player.score;
}

function update(time = 0) { // time ==> TimeStamp, which indicates the current time (based on the number of milliseconds since time origin) <== mozilla

    if (!gameEnd) {
        const time_elapsed_from_last_func_call = time - lastTime;

        last_update_time += time_elapsed_from_last_func_call;
        if (last_update_time > dropInterval) { // jesli czas poprzedniego refresha jest > od ustawionego dropInterval
            playerDrop();
        }

        lastTime = time;

        draw();
        requestAnimationFrame(update); // mozilla doc -> The number of callbacks is usually 60 times per second, 
    }
}


document.addEventListener('keydown', event => { // No tego nie trzeba opisywa�.
    if (event.keyCode === 37) { // Keys left
        playerMove(-1);
    } else if (event.keyCode === 39) { //right
        playerMove(1);
    } else if (event.keyCode === 40) { //down
        playerDrop();
    } else if (event.keyCode === 81) {// Q key
        playerRotate(-1);
    } else if (event.keyCode === 87) {// w key
        playerRotate(1);
    }
});


const arena = createMatrix(12, 20); // tworzenie  planszy do gry

const player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    score: 0,
};

playerReset(); // spawn 1 puzla
updateScore(); // edycja score.
update(); // pentla infinty gry.