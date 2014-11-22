var dictS = ["Seriously", "Savagely", "Socially", "Strangely", "Spooky", "Sweet", "Sweaty", "Stupidly"];
var dictJ = ["Judicious", "Jet-fueled", "Jurassic", "Juvenile", "Jumbo", "Jacked"];
var dictW = ["Warthog", "Winnebago", "Wombat", "Weirdo", "Walrus", "Wookie"];

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("SJW", "g"),
    function() {
        randS = Math.floor(Math.random() * dictS.length);
        randJ = Math.floor(Math.random() * dictJ.length);
        randW = Math.floor(Math.random() * dictW.length);

        return dictS[randS].concat(" ", dictJ[randJ], " ", dictW[randW]);
    }
);
