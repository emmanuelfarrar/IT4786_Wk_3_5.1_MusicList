window.onload = function() {
  document.addEventListener('deviceready', init, false);
  init();
}

function init() {
  document.getElementById('btnAdd').addEventListener('click',addSong, false);
  document.getElementById('btnDisplay').addEventListener('click', displayList, false);
  document.getElementById('btnClear').addEventListener('click', clearList, false);
}

function addSong(){
  var artist = document.getElementById('artist');
  var song = document.getElementById('song');

  store.set(song.value, artist.value);

  artist.value = "";
  song.value = "";
}

function displayList() {
  var oddRow = false;
  var output = "<table>"
      output += "<tr class='odd'><td>Artist</td><td>Song</td></tr>"

      store.each(function(key, val) {
        if (oddRow){
          output += "<tr class='odd'><td>" + val + "</td><td>" + key + "</td></tr>";
        } else {
          output += "<tr class='even'><td>" + val + "</td><td>" + key + "</td></tr>";
        }
        oddRow = !oddRow;
      });

      output += "</table>";

      document.getElementById('listArea').innerHTML = output;

} //END displayList()

function clearList() {
  document.getElementById('listArea').innerHTML = "";

  store.clearAll();
}