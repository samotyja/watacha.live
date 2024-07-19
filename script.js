
import data from './data.json' with { type: 'json' };
// console.log(data);

document.getElementById("searchbar").addEventListener("keyup", search_songs);
document.getElementById("type").addEventListener("change", search_songs);
document.getElementById("btncheck1").addEventListener("click", search_songs);
document.getElementById("btnrefresh").addEventListener("click", clearForm);
document.getElementById("btnrandom").addEventListener("click", selectRandomSong);
const x = document.querySelector('#list-holder');

function search_songs() {
    let searchinput = document.getElementById('searchbar').value
    const showfileinput = document.getElementById('btncheck1').checked
    const type = document.getElementById('type').value
    searchinput = searchinput.toLowerCase();
    x.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        const obj = data[i];

        if (obj[type].toLowerCase().includes(searchinput)) {
            const row = document.createElement("tr");

            const artistCell = document.createElement("td");
            artistCell.style = "width:70%"
            artistCell.textContent = `${obj.ARTIST} - ${obj.TITLE}`;
            row.appendChild(artistCell);

            const gameCell = document.createElement("td");
            gameCell.style = "width:20%"
            gameCell.textContent = obj.GAME.toUpperCase();
            row.appendChild(gameCell);

            if (showfileinput == true) {
                const dlcCell = document.createElement("td");
                dlcCell.style = "width:10%"
                dlcCell.textContent = obj.DLC.toUpperCase();
                row.appendChild(dlcCell);
            }

            x.appendChild(row);
        }
    }
}

function selectRandomSong() {
    x.innerHTML = ""
    const randomSong = data[Math.floor(Math.random() * data.length)];

    const row = document.createElement("tr");

    const artistCell = document.createElement("td");
    artistCell.style = "width:70%"
    artistCell.textContent = `${randomSong.ARTIST} - ${randomSong.TITLE}`;
    row.appendChild(artistCell);

    const gameCell = document.createElement("td");
    gameCell.style = "width:30%"
    gameCell.textContent = randomSong.GAME;
    row.appendChild(gameCell);

    x.appendChild(row);
}

function clearForm() {
    x.innerHTML = ""
    document.getElementById('searchbar').value = "";
    search_songs();
}

clearForm();