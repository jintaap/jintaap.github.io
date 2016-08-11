var looms = ["Jaquard-loom", "poet", "sculptor", "singer"];
var nouns = ["flowers and leaves", "emotions and pathos", "figures and statues", "songs and melodies"];
var verbs = ["weaves", "evokes", "crafts", "performs"];

function choosei(){
    var i = Math.floor(Math.random() * 4);
    return i;
}


var pick = choosei();
var loom = looms[pick];
var flowers = nouns[pick];
var weaves = verbs[pick];

var q = document.getElementById("quote");

q.innerHTML = 
"\"The Analytical Engine" + " " + weaves + " " + "algebraic patterns, just as the " + loom + " " + weaves + " " + " " + flowers + ".\"";

