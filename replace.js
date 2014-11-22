var dictS = ["Seriously", "Savagely", "Socially", "Strangely", "Spooky", "Sweet", "Sweaty", "Stupidly"];
var dictJ = ["Judicious", "Jet-fueled", "Jurassic", "Juvenile", "Jumbo", "Jacked"];
var dictW = ["Warthogs", "Winnebagos", "Wombats", "Weirdos", "Walruses", "Wookies"];

randS = Math.floor(Math.random() * dictS.length);
randJ = Math.floor(Math.random() * dictJ.length);
randW = Math.floor(Math.random() * dictW.length);

var string = dictS[randS].concat(" ", dictJ[randJ], " ", dictW[randW]);

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("SJW", "g"), string);
