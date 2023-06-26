/* récupération données rooms.json */
fetch("../json/rooms.json")
    .then(response => response.json())
    .then(json => {
        createRooms(json); // appel createRooms une fois les données récupérer
    });

let section = document.getElementById("rooms_rooms");

function createRooms(json) {

    for(let room of json) { // pour chaque room du .json

        