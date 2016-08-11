var looms = ["Jaquard-loom", "poet", "sculptor", "primadonna"];
var nouns = ["flowers and leaves", "images and emotions", "figures and statues", "melodies"];
var verbs = ["weaves", "evokes", "crafts", "sings"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(looms);
var loom = looms[pick];
var flowers = nouns[pick];
var weaves = verbs[pick];

var q = document.getElementById("quote");

q.innerHTML = "\"The Analytical Engine" + weaves + "algebraic patterns, just as the " + loom + " " + weaves + " " + " " + stuff + "".\"";
q.innerHTML += "<br><br><br>";
