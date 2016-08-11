var looms = ["Jaquard-loom", "poet", "sculptor", "primadonna"];
var nouns = ["flowers and leaves", "images and emotions", "figures and statues", "melodies"];
var verbs = ["weaves", "evokes", "crafts", "sings"];

function choosei(){
    var i = Math.floor(Math.random() * 4);
    return i;
}


var pick = choosei();
var loom = looms[pick];
var flowers = nouns[pick];
var weaves = verbs[pick];

var q = document.getElementById("quote");

q.innerHTML = "\"The Analytical Engine" + weaves + "algebraic patterns, just as the " + loom + " " + weaves + " " + " " + flowers + "".\"";
q.innerHTML += "<br><br><br>";
