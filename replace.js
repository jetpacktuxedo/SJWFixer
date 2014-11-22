var dictS = ["Seriously", "Savagely", "Socially"];
var dictJ = ["Judicious", "Jet-fueled"];
var dictW = ["Warthogs", "Winebagos"];

randS = Math.floor(Math.random() * dictS.length);
randJ = Math.floor(Math.random() * dictJ.length);
randW = Math.floor(Math.random() * dictW.length);

var string = dictS[randS].concat(" ", dictJ[randJ], " ", dictW[randW]);

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("SJW", "g"), string);
