const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result1 = document.getElementById("result1");

function calc(btn) {
  const op = btn.innerText; //-> + - * / %
  //op에는 +,-,*,/,%중 하나가 전달 되어짐
  //현재 input요소에 작성된 값을 얻어와 변수에 저장
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);

  //eval("코드 형식의 문자열")
  //->매개 변수의 문자열을 js코드로 해석/수행하는 함수
  //->속도가 느림+보안이슈인해 사용x
  //eval(n1+op+n2);

  //new Function()
  result1.innerText = new Function("return " + n1 + op + n2)();
  //return뒤는 뛰어야한다. 띄지 않으면 return을 문자열로 읽힘
}
