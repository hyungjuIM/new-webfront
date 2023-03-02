//추가 버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function () {
  // <div class="row">
  //      <input type="number" class="in" />
  //      <span class="remove">&times;</span>
  // </div>

  // div요소 생성
  const div = document.createElement("div");
  //<div></div>

  //div에 row class 추가
  div.classList.add("row");
  //<div class="row"></div>
  //-----------------------------

  //input 요소 생성
  const input = document.createElement("input");
  //input in class 추가
  input.classList.add("in"); //<input class="in" />
  //*요소의 속성을 추가하거나 변경할 때 사용하는 함수
  //요소.setAttribute("속성명","속성값");
  //<-> 요소.removeAttribute("속성명") : 속성제거

  //input에 type=number추가
  input.setAttribute("type", "number"); //<input type="number" class="in" />

  //-------------------------------------------

  //span 요소 생성
  const span = document.createElement("span"); //<span></span>
  //span에 remove class추가
  span.classList.add("remove"); //<span class="remove"></span>

  //span에 &times; 추가
  span.innerHTML = "&times;"; //<span class="remove">&times;</span>
  //span에 click이벤트 동작 추가(동적 요소에 동적으로 이벤트 추가)
  span.addEventListener("click", function () {
    // alert("동적요소이벤트 추가");
    //클릭된 x번튼의 부모요소(row박스)를 삭제
    //요소.remove(): 해당요소를 제거
    this.parentElement.remove();
  });
  //----------------------------------------

  //div에 input, span 조합
  div.append(input, span);

  //container에 div를 마지막자식으로 추가
  document.querySelector(".container").append(div);

  input.focus();
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  //   console.log(Math.random() * 256);

  input.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//계산 버튼이 클릭 되었을 때
//input요소에 작성된 값을 모두 얻어와 합한 후 출력
document.getElementById("calc").addEventListener("click", function () {
  //함수는 호출된 시점의 HTML화면을 기반으로 해석 진행
  const inputlist = document.getElementsByClassName("in");
  let sum = 0;
  for (let input of inputlist) {
    sum += Number(input.value); //input요소에 작성된 값 누적
    //요소에서 읽어온 값 또는 내용은 무조건 String
    //-> 데이터 형변환
  }
  alert("합계 : " + sum);
});
