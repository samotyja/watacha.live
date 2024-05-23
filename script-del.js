
import data from './data-del.json' with { type: 'json' };
console.log(data);

document.getElementById("searchbar").addEventListener("keyup", search_songs);
document.getElementById("type").addEventListener("change", search_songs);
document.getElementById("btncheck1").addEventListener("click", search_songs);

  function search_songs() {
    let searchinput = document.getElementById('searchbar').value
    let showfileinput = document.getElementById('btncheck1').checked
    let type = document.getElementById('type').value
    searchinput = searchinput.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
      let obj = data[i];

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
  search_songs();
