var dictS = [
  "Seriously", "Savagely", "Socially", "Strangely", "Spooky", "Sweet", 
  "Sweaty", "Stupidly", "Sadistically", "Salacious", "Salient", 
  "Salvageable", "Sanitary", "Satirical", "Sentient", "Severely",
  "Sheepish", "Spinning", "Shooting", "Slippery"
  ];
var dictJ = [
  "Judicious", "Jet-fueled", "Jurassic", "Juvenile", "Jumbo", "Jacked",
  "Juicy", "Jazzy", "Jousting", "Jumpable", "Jaded", "Jesuit", 
  "Jaywalking", "Jealous", "Jumpy", "Jolly"
  ];
var dictW = [
  "Warthog", "Winnebago", "Wombat", "Weirdo", "Walrus", "Wookie", 
  "Werewolf", "Wagon", "Watermelon", "Wasp", "Wannabee", "Watcher",
  "Walker", "Woman", "Winter", "Womanizer", "Witch", "Whisperer"
  ];

function walk(node){
  // I stole this function from here:
  // https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
  // They stole it from here:
  // http://is.gd/mwZp7E
  var child, next;
  switch ( node.nodeType )
  {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
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

function handleText(textNode){
  var node = textNode.nodeValue;
  node = node.replace(new RegExp("SJW", "g"), generate());
  textNode.nodeValue = node;
}

function generate(){
      randS = Math.floor(Math.random() * dictS.length);
      randJ = Math.floor(Math.random() * dictJ.length);
      randW = Math.floor(Math.random() * dictW.length);

      return dictS[randS].concat(" ", dictJ[randJ], " ", dictW[randW]);
}

walk(document.body);
