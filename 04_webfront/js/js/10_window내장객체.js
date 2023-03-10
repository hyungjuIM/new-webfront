//window.setTimeout(함수, 지연시간(ms))
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  //0초 (클릭하자마자)
  this.style.backgroundColor = "red";

  //3초 후에 orange로 변경
  window.setTimeout(function () {
    //window.setTimeout()에서 this ==window 객체
    btn1.style.backgroundColor = "orange";
  }, 3000);

  //6초 후 yellow
  window.setTimeout(function () {
    //window.setTimeout()에서 this ==window 객체
    btn1.style.backgroundColor = "yellow";
  }, 6000);

  //9초 후 green
  window.setTimeout(function () {
    //window.setTimeout()에서 this ==window 객체
    btn1.style.backgroundColor = "green";
  }, 9000);
});

//현재 시간을 반환하는 함수
function currentTime() {
  //현재 시간 정보를 저장하고 있는 객체 생성
  const now = new Date();

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  //얻어온 시간 값이 10 미만인 경우 앞에 0추가
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  return hour + " : " + min + " : " + sec;
}

//페이지가 로딩 되자마자 #clock에 현재시간 출력
const clock = document.getElementById("clock");
clock.innerText = currentTime();

//#clock에 1초마다 현재시간을 출력하도록 하는 코드
const interval = window.setInterval(function () {
  clock.innerText = currentTime();
}, 1000);

document.getElementById("stop").addEventListener("click", function () {
  window.clearInterval(interval);
});
// document.getElementById("restart").addEventListener("click", function () {
//   window.setInterval(function () {
//     clock.innerText = currentTime();
//   }, 0);
// });
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function () {
  //새탭에서 열기
  window.open("09_배열.html");
});

openPopup2.addEventListener("click", function () {
  //최소한의 팝업창 형태로 열기
  window.open("09_배열.html", "_blank", "popup");
});
openPopup3.addEventListener("click", function () {
  //옵션이 지정된 팝업창
  //옵션 작성 방법 : "K=V, K=V, K=V, 크기단위작성X (px고정)"
  const options = "width=400, height=500, top=50, left=400";
  window.open("09_배열.html", "popupwindow", options);
});

//팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function () {
  const options = "width=400, height=500, top=50, left=400";
  window.open("팝업.html", "popupwindow", options);
});
