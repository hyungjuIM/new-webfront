//형변환 확인하기

// const btn1 = document.querySelector(".btn1");
//배열 형식으로 넘어오기 때문에 정확히 가져오려면 뒤에 배열 표현을 해줘야함
//안하면 class자체로 가져옴
const btn1 = document.getElementsByClassName("btn1")[0];

btn1.addEventListener("click", function () {
  console.log("parseInt('123'): " + parseInt("123"));
  console.log("parseInt('3.14'): " + parseInt("3.14"));
  console.log("-------------------------------");

  console.log("parseFloat('123'): " + parseFloat("123"));
  console.log("parseFloat('3.14'): " + parseFloat("3.14"));
  console.log("-------------------------------");

  console.log("Number('123'): " + Number("123"));
  console.log("Number('3.14'): " + Number("3.14"));
});

//isNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
  if (isNaN(input2.value)) {
    alert("숫자가 아닙니다");
  } else {
    alert("숫자입니다");
  }
});

//Math내장객체 확인
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function () {
  console.log(Math.ceil(input3.value));
  console.log(Math.floor(input3.value));
  console.log(Math.trunc(input3.value));
  console.log(Math.round(input3.value));
});

//Math.random()
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  //rgb 색상 랜덤 대입(0~255)
  //0 <= ran <256
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  //   console.log(Math.random() * 256);

  document.querySelector("body").style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")";
});
