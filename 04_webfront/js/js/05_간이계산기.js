function fnCalc(value) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let result = 0;
  switch (value) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
  }

  document.getElementById("cal").innerHTML = result;
}

const num4 = document.getElementById("num4");
const num3 = document.getElementById("num3");
const result1 = document.getElementById("result1");

function plus() {
  result1.innerText = Number(num4.value) + Number(num3.value);
}
function minus() {
  result1.innerText = Number(num4.value) - Number(num3.value);
}
function multi() {
  result1.innerText = Number(num4.value) * Number(num3.value);
}
function div() {
  result1.innerText = Number(num4.value) / Number(num3.value);
}
function mod() {
  result1.innerText = Number(num4.value) % Number(num3.value);
}
