var dictS = [
    "Seriously", "Savagely", "Socially", "Strangely", "Spooky", "Sweet",
    "Sweaty", "Stupidly"
];

var dictJ = [
    "Judicious", "Jet-fueled", "Jurassic", "Juvenile", "Jumbo", "Jacked"
];

var dictW = [
    "Warthog", "Winnebago", "Wombat", "Weirdo", "Walrus", "Wookie"
];

document.body.innerHTML = document.body.innerHTML.replace(/SJW/gi,
    function() {
            var randS = Math.floor(Math.random() * dictS.length);
            var randJ = Math.floor(Math.random() * dictJ.length);
            var randW = Math.floor(Math.random() * dictW.length);
            return dictS[randS] + " " + dictJ[randJ] + " " + dictW[randW];
    }
);
