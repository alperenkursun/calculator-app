let white = document.getElementById("white");
let black = document.getElementById("black");
let danger = document.getElementById("danger");
let warning = document.getElementById("warning");
let calc = document.getElementById("calculator");
let calcinner = document.querySelector("#calculator .h-100 .row");
let topdisplay = document.getElementById("topdisplay");
let bottomdisplay = document.getElementById("bottomdisplay");
let add = document.getElementById("+");
let div = document.getElementById("÷");
let mul = document.getElementById("x");
let sub = document.getElementById("−");
// let C = document.getElementById("C");
// let CE = document.getElementById("CE");

let bdisplay = "";
let bvalue = "";
let bvalue1 = "";
let bvalue2 = "";
let count = 0;
let order = 0;
let tdisplay = "";
let op = "";

white.addEventListener("click", () => {
  for (let i = 3; i < calcinner.children.length; i++) {
    calcinner.children[i].classList.add("bg-white");
    calcinner.children[i].classList.remove("bg-danger");
    calcinner.children[i].classList.remove("bg-black");
    calcinner.children[i].classList.remove("bg-warning");
    calcinner.children[i].classList.remove("text-white");
    calcinner.children[i].classList.add("text-black");
  }
  calc.classList.remove("bg-black");
  calc.classList.remove("bg-danger");
  calc.classList.remove("bg-warning");
  calc.classList.add("bg-white");
  calc.classList.remove("text-white");
  calc.classList.add("text-black");
});

black.addEventListener("click", () => {
  for (let i = 3; i < calcinner.children.length; i++) {
    calcinner.children[i].classList.remove("bg-white");
    calcinner.children[i].classList.remove("bg-danger");
    calcinner.children[i].classList.add("bg-black");
    calcinner.children[i].classList.remove("bg-warning");
    calcinner.children[i].classList.add("text-white");
    calcinner.children[i].classList.remove("text-black");
  }
  calc.classList.add("bg-black");
  calc.classList.remove("bg-danger");
  calc.classList.remove("bg-warning");
  calc.classList.remove("bg-white");
  calc.classList.remove("text-black");
  calc.classList.add("text-white");
});

danger.addEventListener("click", () => {
  for (let i = 3; i < calcinner.children.length; i++) {
    calcinner.children[i].classList.remove("bg-white");
    calcinner.children[i].classList.add("bg-danger");
    calcinner.children[i].classList.remove("bg-black");
    calcinner.children[i].classList.remove("bg-warning");
    calcinner.children[i].classList.add("text-white");
    calcinner.children[i].classList.add("text-black");
  }
  calc.classList.remove("bg-black");
  calc.classList.add("bg-danger");
  calc.classList.remove("bg-warning");
  calc.classList.remove("bg-white");
  calc.classList.remove("text-black");
  calc.classList.add("text-white");
});

warning.addEventListener("click", () => {
  for (let i = 3; i < calcinner.children.length; i++) {
    calcinner.children[i].classList.remove("bg-white");
    calcinner.children[i].classList.remove("bg-danger");
    calcinner.children[i].classList.remove("bg-black");
    calcinner.children[i].classList.add("bg-warning");
    calcinner.children[i].classList.remove("text-white");
    calcinner.children[i].classList.add("text-black");
  }
  calc.classList.remove("bg-black");
  calc.classList.remove("bg-danger");
  calc.classList.add("bg-warning");
  calc.classList.remove("bg-white");
  calc.classList.remove("text-white");
  calc.classList.add("text-black");
});

function bdisplayy(nr) {
  if (nr.length < 4) {
    return nr;
  } else if (nr.length == 4) {
    nr = nr.substring(0, 1) + "." + nr.substring(1, nr.length);
    return nr;
  } else if (nr.length == 5) {
    nr = nr.substring(0, 2) + "." + nr.substring(2, nr.length);
    return nr;
  } else if (nr.length == 6) {
    nr = nr.substring(0, 3) + "." + nr.substring(3, nr.length);
    return nr;
  } else if (nr.length == 7) {
    nr =
      nr.substring(0, 1) +
      "." +
      nr.substring(1, 4) +
      "." +
      nr.substring(4, nr.length);
    return nr;
  } else if (nr.length == 8) {
    nr =
      nr.substring(0, 2) +
      "." +
      nr.substring(2, 5) +
      "." +
      nr.substring(5, nr.length);
    return nr;
  }
}

function displayy(id) {
  if (order == 0 || order == 2) {
    if (bottomdisplay.innerText == "0" && id == 0) {
      bottomdisplay.innerText = "0";
      count = 0;
    } else if (count < 8) {
      bvalue += id;
      bottomdisplay.innerText = bdisplayy(bvalue);
      count++;
    }
    if (order == 0) {
      bvalue1 = bvalue;
    } else if (order == 2) {
      bvalue2 = bvalue;
    }
  }
}

function backspacee() {
  if (order == 0 || order == 2) {
    if (count == 1) {
      bottomdisplay.innerText = "0";
      bvalue = "";
      count = 0;
    } else {
      bottomdisplay.innerText = bdisplayy("0");
      bvalue = bvalue.slice(0, bvalue.length - 1);
      bottomdisplay.innerText = bdisplayy(bvalue);
      count--;
      if (count == -1) {
        bottomdisplay.innerText = "0";
        count = 0;
      }
    }
    if (order == 0) {
      bvalue1 = bvalue;
    } else if (order == 2) {
      bvalue2 = bvalue;
    }
  }
}

function operatorr(id) {
  console.log(order);
  if (bottomdisplay.innerText == "0") {
    order = 0;
  } else {
    order = 1;
  }
  if (order == 1) {
    topdisplay.innerText = `${bvalue}${id}`;
    bottomdisplay.innerText = "0";
    bvalue = "";
    count = 0;
    op = `${id}`;
    order++;
    add.disabled = "disabled";
    div.disabled = "disabled";
    mul.disabled = "disabled";
    sub.disabled = "disabled";
  }
}

function equal(id) {
  console.log(order);
  console.log(op);
  // console.log(bvalue);
  console.log(bvalue1);
  console.log(bvalue2);

  if (bottomdisplay.innerText == "0") {
    order = 2;
  } else if (order == 2) {
    topdisplay.innerText += `${bvalue}${id}`;
    order++;
    switch (`${op}`) {
      case "+":
        bvalue = (parseInt(bvalue1) + parseInt(bvalue2)).toFixed(0);
        bottomdisplay.innerText = `${bdisplayy(bvalue)}`;
        bvalue1 = bvalue;
        break;

      case "÷":
        bvalue = (parseInt(bvalue1) / parseInt(bvalue2)).toFixed(0);
        bottomdisplay.innerText = `${bvalue}`;
        bvalue1 = bvalue;
        break;

      case "x":
        bvalue = (parseInt(bvalue1) * parseInt(bvalue2)).toFixed(0);
        bottomdisplay.innerText = `${bvalue}`;
        bvalue1 = bvalue;
        break;

      case "−":
        bvalue = (parseInt(bvalue1) - parseInt(bvalue2)).toFixed(0);
        bottomdisplay.innerText = `${bvalue}`;
        bvalue1 = bvalue;
        break;
    }
  }
  add.disabled = false;
  div.disabled = false;
  mul.disabled = false;
  sub.disabled = false;

  bvalue2 = 0;
}

function C() {
  bottomdisplay.innerText = "0";
  topdisplay.innerText = "0";
  bvalue = "";
  bvalue1 = 0;
  bvalue2 = 0;
  add.disabled = false;
  div.disabled = false;
  mul.disabled = false;
  sub.disabled = false;
  count = 0;
  order = 0;
}
