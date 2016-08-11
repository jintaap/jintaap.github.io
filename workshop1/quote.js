/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var looms = ["Jaquard-loom", "poet", "sculptor", "primadonna"];
var stuff = ["flowers and leaves", "images and emotions", "figures and statues", "meolodies"];
var weaves = ["weaves", "evokes", "crafts", "invents", "sings"];


function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(loom);
var loom = looms[pick];
var stuff = stuff[pick];
var weaves = weaves[pick];

var t = document.getElementById("thing").innerHTML = thing;
var p = document.getElementById("person").innerHTML = programmer + "s";
var q = document.getElementById("quote");

q.innerHTML =
	"\"The Analytical Engine" + weaves + "algebraic patterns, just as the" + loom + weaves + stuff "".\"";


q.innerHTML += "<br><br><br>";

for (var i = 0; i < is.length; i++){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
