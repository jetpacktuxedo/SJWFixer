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

function random_sjw() {
    var randS = Math.floor(Math.random() * dictS.length);
    var randJ = Math.floor(Math.random() * dictJ.length);
    var randW = Math.floor(Math.random() * dictW.length);

    return dictS[randS] + " " + dictJ[randJ] + " " + dictW[randW];
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    v = v.replace(/\bSJW\b/g, random_sjw())

    textNode.nodeValue = v;
}

function walk(node) 
{
    /*
     * I stole this function from here:
     *  (Cloud-to-Butt)
     *  https://github.com/panicsteve/cloud-to-butt
     * Who stole it from here:
     *  http://is.gd/mwZp7E
     */

    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

walk(document.body);
