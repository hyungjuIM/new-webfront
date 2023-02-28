//아이디
//영어 소문자로 시작
//대소문자, 숫자,-,_로만 이루어진 6~14글자사이

document.getElementById("inputId").addEventListener("change", function () {
  const regEx1 = /^[a-z][a-zA-Z0-9-_]{6,14}$/;
  if (regEx1.test(this.value)) {
    this.style.backgroundColor = "green";
  } else {
    this.style.backgroundColor = "red";
    this.style.Color = "white";
  }
});

//비밀번호
//비밀번호란 미입력 상태에서 비밀번호 확인 작성시
//비밀번호를 입력해주세요 경고창 출력 후
//alert("")
//비밀번호 란에 focus하기
// .focus()
let inputpw = document.getElementById("inputpw");
let confirmpw = document.getElementById("confirmpw");
confirmpw.addEventListener("change", function () {
  if (inputpw.value == "") {
    alert("비밀번호를 미입력하셨습니다.");
    inputpw.focus();
  }
});
inputpw.addEventListener("keyup", function () {
  let pw = document.getElementById("pw");
  if (inputpw.value == confirmpw.value) {
    pw.innerHTML = "비밀번호 일치";
    pw.style.color = "green";
  } else {
    pw.innerHTML = "비밀번호 불일치";
    pw.style.color = "red";
  }
});
confirmpw.addEventListener("keyup", function () {
  let pw = document.getElementById("pw");
  if (inputpw.value == confirmpw.value) {
    pw.innerHTML = "비밀번호 일치";
    pw.style.color = "green";
  } else {
    pw.innerHTML = "비밀번호 불일치";
    pw.style.color = "red";
  }
});

//이름
//한글 2~5사이 문자열
//-일치하면 정상입력 초록색
//-불일치 한글만 입력하세요 빨간색
document.getElementById("name").addEventListener("keyup", function () {
  let inputname = document.getElementById("inputname");
  const regEx2 = /^[가-힣]{2,5}$/;
  if (regEx2.test(this.value)) {
    inputname.innerText = "정상입력";
    inputname.style.color = "green";
  } else {
    inputname.innerText = "한글만 입력하세요";
    inputname.style.color = "red";
  }
});
//회원가입 버튼 클릭시: validate()함수를 호출
function validate() {
  //성별이 선택되지 않은 경우
  //성별을 선택해주세요 경고장 출력
  //submit 기본이벤트를 제거해야함

  //체크된 라디오 버튼만 얻어오기
  const gender = document.querySelector("input[name='gender':checked");
  if (gender == null) {
    alert("성별을 선택해주세요");
    return false;
    //return을 통해 submit기본이벤트를 제거해야
    //alert이 한번만뜸 아니면 다른 경고장들도 다뜸
  }

  //전화번호
  const inputTel = document.getElementById("inputTel");
  const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

  if (!regEx.test(inputTel.value)) {
    alert("전화번호 형식이 올바르지 않습니다");
    return false;
  }
  return true;
}
