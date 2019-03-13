// EXAMINE THE DOCUMENT //

// console.dir(Document);
document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");
document.getElementById('first-paragraph').classList.remove("bg-lime", "gray")
document.getElementById('first-paragraph').classList.add("aqua")
document.querySelector("h3").innerHTML = "<em>Italic title ! yeah !</em>";




var q = document.getElementsByTagName("pre");
console.log(q)
for (var i = 0; i < q.length; i++) {
  q[i].style.color = "white";
  q[i].style.backgroundColor = "black";
  q[i].style.borderTop = "3px solid red";
  q[i].style.borderBottom = "3px solid red";
}

var x = document.getElementsByClassName("bg-silver");
for (var i = 0; i < x.length; i++) {
  x[i].classList.add("bg-teal");
  x[i].classList.remove("bg-silver");
}

var z = document.querySelectorAll("blockquote");
console.log(z)
for (i = 0; i < z.length; i++) {
  z[i].classList.add("bg-white");
}

var b = document.querySelector("#my-table");
b.classList.add("bg-purple");

var allP = document.querySelector(".container").querySelectorAll("p");
console.log(allP)
for (element of allP) {
  element.classList.add("shadow");
}

document.querySelector("h2").innerHTML = "<strong>HTML doesn't work !</strong>";

var u = document.querySelector("ul");
var l = document.createElement("li");

l.innerHTML = "My best friend is <a href='http://www.google.com'>Google</a>";
u.appendChild(l);

l.querySelector("a").style.color = "red";


// maak een var van o.children.length omdat, als je 1ne verwijderd. dan wordt de lijst korter er klopt de loop niet meer

var o = document.querySelector("ol");
var kind = o.children.length
for (i = 0; i < kind; i++) {
  o.removeChild(o.children[0]);
}

let names = ["Silent Teacher","Code Monkey", "CodeCombat"];
let url = ["http://silentteacher.toxicode.fr/","https://www.playcodemonkey.com/", "https://codecombat.com/"];
let colors = ["red", "blue", "black"]
for (var i = 0; i < names.length; i++) {
  let lijstItems = document.createElement("li");
  let link = document.createElement("a");
  link.innerHTML = names[i];
  link.style.color = colors[i]
  link.setAttribute("href", url[i]);
  lijstItems.appendChild(link);
  o.appendChild(lijstItems);
}
