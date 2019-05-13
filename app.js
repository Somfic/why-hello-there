// No clues to be found here, move along :)

let activePlayer = "";

//  name             guid                                    rank             start      end        state   text
var people = [
    "ashlynn_rose",  "520f7694-0e31-4988-b3c5-83f7530c74a7", "moderator",     "unknown", "unknown", "active", "clues are yet to come.",
    "nicochulo2001", "69271e16-8d0f-4a61-942f-a5d93cbb5653", "moderator",     "unknown", "unknown", "active", "clues are yet to come.",
    "ozapenguin",    "f616bff5-80ee-4d0a-8574-399ac483d0f7", "moderator",     "unknown", "unknown", "active", "clues are yet to come.",
    "Endershack",    "70303b15-01cc-44ba-af04-c978cfe1be81", "moderator",     "unknown", "unknown", "active", "clues are yet to come.",
    "SpartanPride7", "aa4c8ef8-38a5-49fc-b447-87838a423159", "administrator", "unknown", "unknown", "active", "clues are yet to come."
]

var n = 0;
for (let index = 0; index < people.length; index++) {
    var name = people[index];
    index++;
    var guid = people[index];
    index++;
    var rank = people[index];
    index++;
    var start = people[index];
    index++;
    var end = people[index];
    index++;
    var state = people[index];
    index++;
    var text = people[index];

    var char = String.fromCharCode(97 + n);
    n++;

    var c = '"';
    $(".cultList").append("<button style=background-image:url('https://minotar.net/avatar/" + guid + "') onclick='showInput(" + c + name + c + ")' id='" + char + "'></button>");
}


function showInput(name) {
    $(".mainInput").addClass("shown");
    $(".mainInput").removeClass("notShown");

    $(".cultList").removeClass("shown");
    $(".cultList").addClass("notShown");

    activePlayer = name;

    for (let index = 0; index < people.length; index++) {
        var thisName = people[index];
        if (thisName == name) {
            index++;
            var guid = people[index];
            index++;
            var rank = people[index];
            index++;
            var start = people[index];
            index++;
            var end = people[index];
            index++;
            var state = people[index];
            index++;
            var text = people[index];

            fillInfo(rank, start, end, state, text)
        }
    }
}

function fillInfo(rank, start, end, state, text) {
    if (state == "terminated") {
        $("#state").addClass("red");
    }
    if (start == "unknown") {
        $("#start").addClass("red");
    }
    if (end == "unknown") {
        $("#end").addClass("red");
    }

    type("name", activePlayer, 0);
    type("rank", rank, 500);
    type("start", start, 1000);
    type("end", end, 1500);
    type("state", state, 2000);
    type("text", text, 2500);
}

function type(id, text, delay) {
    new TypeIt('#' + id, {
        strings: text,
        speed: 50,
        startDelay: 1000 + delay,
        cursor: false
    }).go();
}

function hideInput() {
    var text = activePlayer + ":" + document.getElementById("input").value;

    console.log(hex_sha512(text));

    activePlayer = "";

    $(".mainInput").removeClass("shown");
    $(".mainInput").addClass("notShown");

    $(".cultList").addClass("shown");
    $(".cultList").removeClass("notShown");
}