var start = document.getElementById("start");
start.addEventListener("click", Game);

var count = 0;
var right = 0;

var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
var c5 = false;
var c6 = false;

var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");
var parent = document.getElementById("parent");

var i1 = document.createElement("img");
var i2 = document.createElement("img");
var i3 = document.createElement("img");
var i4 = document.createElement("img");
var i5 = document.createElement("img");
var i6 = document.createElement("img");

i1.src = "1.jpeg";
i2.src = "3.png";
i3.src = "3.png";
i4.src = "2.jpeg";
i5.src = "2.jpeg";
i6.src = "1.jpeg";

appends(d1, i1);
appends(d2, i2);
appends(d3, i3);
appends(d4, i4);
appends(d5, i5);
appends(d6, i6);

d1.addEventListener("click", turn1);
d2.addEventListener("click", turn2);
d3.addEventListener("click", turn3);
d4.addEventListener("click", turn4);
d5.addEventListener("click", turn5);
d6.addEventListener("click", turn6);

function appends(d, i) {
  d.appendChild(i);
}

function Game() {
  show(parent);
  show(d1);
  show(d2);
  show(d3);
  show(d4);
  show(d5);
  show(d6);
  hide(start);

  setInterval(counter, 400);
}

function turn1() {
  show(i1);
  count++
  c1 = true;
}

function turn2() {
  show(i2);
  count++
  c2 = true;
}

function turn3() {
  show(i3);
  count++
  c3 = true;
}

function turn4() {
  show(i4);
  count++
  c4 = true;
}

function turn5() {
  show(i5);
  count++
  c5 = true;
}

function turn6() {
  show(i6);
  count++
  c6 = true;
}

function show(el) {
  el.style.visibility = "visible";
}

function hide(el) {
  el.style.visibility = "hidden";
}


function correct() {
  if (c1 == true && c6 == true) {
    c1 = false;
    c6 = false;
    right++;
    hide(i1);
    hide(i6);
    hide(d1);
    hide(d6);
    return true;
  } else if (c2 == true && c3 == true) {
    c2 = false;
    c3 = false;
    right++;
    hide(i2);
    hide(i3);
    hide(d2);
    hide(d3);
    return true;
  } else if (c4 == true && c5 == true) {
    c3 = false;
    c4 = false;
    right++;
    hide(i4);
    hide(i5);
    hide(d4);
    hide(d5);
    return true;
  } else {
    return false;
  }
}

function counter() {
  if (count == 2) {
    count = 0;
    if (correct() == false) {
      c1 = false;
      c2 = false;
      c3 = false;
      c4 = false;
      c5 = false;
      c6 = false;
      hide(i1);
      hide(i2);
      hide(i3);
      hide(i4);
      hide(i5);
      hide(i6);
      alert("NOT A MATCH!");
    } else if (right == 3) {
      Again();
    }
    else {
      alert("YOU GOT A CORRECT MATCH!");
    }
  }
}

function Again() {
  alert("CONGRATULATIONS YOU WIN!");
  start.innerHTML = "PLAY AGAIN";
  show(start);
  right = 0;
  count = 0;
}
